import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../assets/scss/_03-Componentes/_CursoMantenimiento2.scss";

// =============================================
// COMPONENTE PRINCIPAL - CURSO 2
// =============================================
const CursoMantenimiento2 = () => {
  // -------------------------------------------
  // SECCIÓN 1: ESTADOS DEL COMPONENTE
  // -------------------------------------------
  // Estado para almacenar los datos del curso cargados desde el JSON
  const [curso, setCurso] = useState(null);
  
  // Estado para manejar errores en la carga del curso
  const [error, setError] = useState(null);
  
  // Estado para controlar qué clase está activa (se muestra)
  const [activeClassIndex, setActiveClassIndex] = useState(0);
  
  // Estado para controlar si el sidebar de información está abierto o cerrado
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // -------------------------------------------
  // SECCIÓN 2: EFECTO PARA CARGAR LOS DATOS DEL CURSO
  // -------------------------------------------
  // Este useEffect se ejecuta una vez al montar el componente
  useEffect(() => {
    fetch("/CursoMantenimiento2.json")
      .then(response => {
        // Verifica si la respuesta de la red fue exitosa
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        return response.json();
      })
      .then(data => setCurso(data)) // Guarda los datos en el estado
      .catch(err => {
        console.error("Error al cargar el curso:", err);
        setError("No se pudo cargar el contenido del curso. Por favor intenta más tarde.");
      });
  }, []); // El array vacío asegura que se ejecute solo una vez

  // -------------------------------------------
  // SECCIÓN 3: MANEJO DE ERRORES
  // -------------------------------------------
  // Si hay un error, muestra este componente en lugar del contenido normal
  if (error) {
    return (
      <div className="curso-error">
        <h2>⚠️ Error al cargar el curso</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Reintentar</button>
      </div>
    );
  }

  // -------------------------------------------
  // SECCIÓN 4: ESTADO DE CARGA
  // -------------------------------------------
  // Muestra un spinner mientras se cargan los datos
  if (!curso) {
    return (
      <div className="curso-cargando">
        <div className="spinner"></div>
        <p>Cargando contenido del curso...</p>
      </div>
    );
  }

  // Obtiene la clase actual basada en el índice activo
  const currentClass = curso.clases[activeClassIndex];

  // -------------------------------------------
  // SECCIÓN 5: FUNCIONES PARA RENDERIZAR CONTENIDO
  // -------------------------------------------
  
  // Función para renderizar el contenido principal con multimedia
  const renderContenidoConMultimedia = () => {
    const paragraphs = currentClass.contenidoExtenso.split('\n');
    const elements = [];

    // Agrega imagen principal si existe
    if (currentClass.imagenes && currentClass.imagenes.length > 0) {
      elements.push(
        <div key="imagen-principal" className="contenido-media">
          <img 
            src={currentClass.imagenes[0].src} 
            alt={currentClass.imagenes[0].descripcion}
            loading="lazy"
          />
          {currentClass.imagenes[0].descripcion && (
            <p className="pie-media">{currentClass.imagenes[0].descripcion}</p>
          )}
        </div>
      );
    }

    // Agrega cada párrafo del contenido
    paragraphs.forEach((paragraph, i) => {
      if (paragraph.trim() !== '') {
        elements.push(<p key={`p-${i}`}>{paragraph}</p>);
      }
    });

    // Agrega diapositivas si existen
    if (currentClass.diapositivas && currentClass.diapositivas.length > 0) {
      elements.push(
        <div key="diapositivas" className="diapositivas-container">
          <h3>Diapositivas de la clase</h3>
          <div className="diapositivas-grid">
            {currentClass.diapositivas.map((diapo, index) => (
              <div key={index} className="diapositiva-item">
                <img 
                  src={diapo.imagen} 
                  alt={diapo.descripcion}
                  loading="lazy"
                />
                <h4>{diapo.titulo}</h4>
                {diapo.descripcion && <p className="pie-diapositiva">{diapo.descripcion}</p>}
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Agrega video si existe
    if (currentClass.video) {
      elements.push(
        <div key="video-final" className="contenido-media video">
          <h3>Video complementario</h3>
          <div className="video-contenedor">
            <iframe
              src={typeof currentClass.video === 'string' 
                ? currentClass.video.replace('watch?v=', 'embed/') 
                : currentClass.video.url.replace('watch?v=', 'embed/')}
              title={`Video clase ${currentClass.numero}`}
              allowFullScreen
            ></iframe>
          </div>
          {currentClass.video.descripcion && (
            <p className="pie-media">{currentClass.video.descripcion}</p>
          )}
        </div>
      );
    }

    return elements;
  };

  // Función para renderizar la información general del curso en el sidebar
  const renderCourseInfo = () => {
    return (
      <div className="course-info-sidebar">
        <div className="course-info-header">
          <h3>{curso.materia}</h3>
          <button onClick={() => setSidebarOpen(false)} className="close-sidebar">
            &times;
          </button>
        </div>
        
        <div className="course-info-content">
          <div className="info-section">
            <h4>Objetivos del curso</h4>
            <ul>
              {curso.objetivos.map((objetivo, index) => (
                <li key={index}>{objetivo}</li>
              ))}
            </ul>
          </div>
          
          <div className="info-section">
            <h4>Profesor</h4>
            <p>{curso.profesor}</p>
          </div>
          
          <div className="info-section">
            <h4>Habilitación y Sedes de Evaluación</h4>
            <p>Las mesas de evaluación se habilitan los terceros sábados de cada mes (excepto enero) en las siguientes sedes:</p>
            <ul>
              {curso.habilitacionDeEvaluacion.slice(0, 3).map((sede, index) => (
                <li key={index}>
                  <strong>{sede.localidad}</strong> - {sede.telefono || sede.telefax}
                </li>
              ))}
              <li>Y otras sedes en todo el país</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  // =============================================
  // RENDERIZADO PRINCIPAL DEL COMPONENTE
  // =============================================
  return (
    <div className={`curso-libro ${sidebarOpen ? 'sidebar-open' : ''}`}>
      {/* Botón para abrir/cerrar el sidebar de información del curso */}
      <button className="toggle-sidebar" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? '◄' : '►'} Información del curso
      </button>
      
      {/* Sidebar con información general del curso */}
      {sidebarOpen && renderCourseInfo()}
      
      {/* Contenido principal del curso */}
      <div className="curso-main-content">
        {/* Cabecera con título y metadatos */}
        <header className="curso-cabecera">
          <div className="breadcrumb">
            <span>Carrera Universitaria</span> &gt; <span>{curso.materia}</span>
          </div>
          <h1>{curso.materia}</h1>
          <h2>Clase {currentClass.numero}: {currentClass.titulo}</h2>
          <div className="curso-meta">
            <span>⏱️ {currentClass.video?.duracion || '45 min'}</span>
            <span>📊 {currentClass.completado || '0% completado'}</span>
            <span>📅 Semana {Math.ceil(currentClass.numero / 2)}</span>
          </div>
        </header>

        {/* Navegación entre clases (selector de clases) */}
        <nav className="curso-navegacion">
          <div className="clase-selector">
            {curso.clases.map((clase, index) => (
              <button
                key={index}
                className={index === activeClassIndex ? 'active' : ''}
                onClick={() => setActiveClassIndex(index)}
              >
                {clase.numero}
              </button>
            ))}
          </div>
        </nav>

        {/* Contenido principal de la clase actual */}
        <main className="curso-contenido">
          <motion.div
            key={activeClassIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Objetivos de aprendizaje de la clase actual */}
            {currentClass.subtemas && currentClass.subtemas.length > 0 && (
              <div className="curso-objetivos">
                <h3>Objetivos de aprendizaje</h3>
                <ul>
                  {currentClass.subtemas.map((subtema, index) => (
                    <React.Fragment key={index}>
                      <li><strong>{subtema.titulo}</strong></li>
                      {subtema.contenido && subtema.contenido.map((item, i) => (
                        <li key={i} className="sub-objetivo">{item}</li>
                      ))}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            )}

            {/* Contenido principal con texto y multimedia */}
            <article className="curso-articulo">
              {renderContenidoConMultimedia()}
            </article>

            {/* Sección de sedes de evaluación */}
            <aside className="curso-recursos">
              <h3>Habilitación y Sedes de Evaluación</h3>
              <p>Las mesas de evaluación se habilitan los terceros sábados de cada mes (excepto enero) en las siguientes sedes:</p>
              <div className="recursos-lista">
                {curso.habilitacionDeEvaluacion.slice(0, 5).map((sede, index) => (
                  <div key={index} className="recurso-item">
                    <strong>{sede.localidad}</strong> - {sede.telefono || sede.telefax}
                  </div>
                ))}
                <div className="recurso-item">Y otras sedes en todo el país</div>
              </div>
            </aside>
          </motion.div>
        </main>

        {/* Navegación inferior (anterior/siguiente clase) */}
        <footer className="curso-pie">
          {activeClassIndex > 0 && (
            <button 
              className="curso-nav anterior"
              onClick={() => setActiveClassIndex(activeClassIndex - 1)}
            >
              ← Clase {curso.clases[activeClassIndex - 1].numero}: {curso.clases[activeClassIndex - 1].titulo}
            </button>
          )}
          {activeClassIndex < curso.clases.length - 1 && (
            <button 
              className="curso-nav siguiente"
              onClick={() => setActiveClassIndex(activeClassIndex + 1)}
            >
              Clase {curso.clases[activeClassIndex + 1].numero}: {curso.clases[activeClassIndex + 1].titulo} →
            </button>
          )}
        </footer>
      </div>
    </div>
  );
};

export default CursoMantenimiento2;