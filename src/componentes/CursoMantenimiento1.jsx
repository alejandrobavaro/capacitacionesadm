import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../assets/scss/_03-Componentes/_CursoMantenimiento1.scss";

// =============================================
// COMPONENTE PRINCIPAL - CURSO MANTENIMIENTO 1
// =============================================
const CursoMantenimiento1 = () => {
  // -------------------------------------------
  // SECCIÓN 1: ESTADOS DEL COMPONENTE
  // -------------------------------------------
  // Almacena los datos del curso cargados desde el JSON
  const [curso, setCurso] = useState(null);
  
  // Maneja errores en la carga del curso
  const [error, setError] = useState(null);
  
  // Controla qué clase está activa (visible)
  const [activeClassIndex, setActiveClassIndex] = useState(0);
  
  // Controla si el sidebar de información está abierto
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // -------------------------------------------
  // SECCIÓN 2: CARGA DE DATOS DEL CURSO
  // -------------------------------------------
  // Efecto que se ejecuta al montar el componente
  // Realiza la petición al archivo JSON local
  useEffect(() => {
    fetch("/CursoMantenimiento1.json")
      .then(response => {
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        return response.json();
      })
      .then(data => setCurso(data))
      .catch(err => {
        console.error("Error al cargar el curso:", err);
        setError("No se pudo cargar el contenido del curso. Por favor intenta más tarde.");
      });
  }, []);

  // -------------------------------------------
  // SECCIÓN 3: SCROLL AUTOMÁTICO AL CAMBIAR DE CLASE
  // -------------------------------------------
  // Efecto que se ejecuta cada vez que cambia la clase activa
  // Hace scroll suave al inicio de la página
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [activeClassIndex]);

  // -------------------------------------------
  // SECCIÓN 4: MANEJO DE ERRORES
  // -------------------------------------------
  // Si hay error, muestra mensaje en lugar del contenido
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
  // SECCIÓN 5: ESTADO DE CARGA
  // -------------------------------------------
  // Muestra spinner mientras se cargan los datos
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
  // SECCIÓN 6: FUNCIONES DE RENDERIZADO
  // -------------------------------------------
  
  // Renderiza contenido principal con multimedia
  const renderContenidoConMultimedia = () => {
    const paragraphs = currentClass.contenidoExtenso.split('\n');
    const elements = [];

    if (currentClass.imagenes?.length > 0) {
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

    paragraphs.forEach((paragraph, i) => {
      if (paragraph.trim() !== '') {
        elements.push(<p key={`p-${i}`}>{paragraph}</p>);
      }
    });

    if (currentClass.diapositivas?.length > 0) {
      elements.push(
        <div key="diapositivas" className="diapositivas-container">
          <h3>Diapositivas de la clase</h3>
          <div className="diapositivas-grid">
            {currentClass.diapositivas.map((diapo, index) => (
              <div key={index} className="diapositiva-item">
                <img src={diapo.imagen} alt={diapo.descripcion} loading="lazy" />
                <h4>{diapo.titulo}</h4>
                {diapo.descripcion && <p className="pie-diapositiva">{diapo.descripcion}</p>}
              </div>
            ))}
          </div>
        </div>
      );
    }

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

  // Renderiza preguntas frecuentes
  const renderFAQ = () => {
    if (!currentClass.faq?.length) return null;
    
    return (
      <div className="faq-section">
        <h3>Preguntas frecuentes</h3>
        <div className="faq-container">
          {currentClass.faq.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-pregunta">
                <span className="faq-icon">❓</span>
                <h4>{item.pregunta}</h4>
              </div>
              <div className="faq-respuesta">
                <span className="faq-icon">💡</span>
                <p>{item.respuesta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Renderiza ejemplo práctico
  const renderEjemploPractico = () => {
    if (!currentClass.ejemploPractico) return null;
    
    return (
      <div className="ejemplo-practico">
        <h3>Ejemplo práctico</h3>
        <div className="ejemplo-content">
          <h4>{currentClass.ejemploPractico.titulo}</h4>
          <p>{currentClass.ejemploPractico.descripcion}</p>
          <div className="solucion">
            <h5>Solución implementada:</h5>
            <p>{currentClass.ejemploPractico.solucion}</p>
          </div>
        </div>
      </div>
    );
  };

  // Renderiza ejercicios
  const renderEjercicios = () => {
    if (!currentClass.ejercicios?.length) return null;
    
    return (
      <div className="ejercicios-section">
        <h3>Ejercicios y actividades</h3>
        <div className="ejercicios-container">
          {currentClass.ejercicios.map((ejercicio, index) => (
            <div key={index} className="ejercicio-item">
              <h4>Ejercicio {index + 1}: {ejercicio.tipo === 'opcionMultiple' ? 'Selección múltiple' : 'Desarrollo'}</h4>
              <p>{ejercicio.pregunta}</p>
              
              {ejercicio.tipo === 'opcionMultiple' && (
                <div className="opciones-container">
                  {ejercicio.opciones.map((opcion, i) => (
                    <div key={i} className="opcion-item">
                      <input type="radio" id={`opcion-${index}-${i}`} name={`ejercicio-${index}`} />
                      <label htmlFor={`opcion-${index}-${i}`}>{opcion}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Renderiza citas destacadas
  const renderCitas = () => {
    if (!currentClass.citas?.length) return null;
    
    return (
      <div className="citas-section">
        <h3>Citas destacadas</h3>
        <div className="citas-container">
          {currentClass.citas.map((cita, index) => (
            <blockquote key={index} className="cita-item">
              <p>{cita}</p>
            </blockquote>
          ))}
        </div>
      </div>
    );
  };

  // Renderiza resumen de la clase
  const renderResumen = () => {
    if (!currentClass.resumen) return null;
    
    return (
      <div className="resumen-section">
        <h3>Resumen de la clase</h3>
        <div className="resumen-content">
          <h4>Puntos clave:</h4>
          <ul>
            {currentClass.resumen.puntosClave.map((punto, index) => (
              <li key={index}>{punto}</li>
            ))}
          </ul>
          <h4>Conclusión:</h4>
          <p>{currentClass.resumen.conclusion}</p>
        </div>
      </div>
    );
  };

  // Renderiza información del curso en sidebar
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
            <h4>Claves de corrección</h4>
            <ol>
              {curso.clavesDeCorreccion.map((clave, index) => (
                <li key={index}>{clave}</li>
              ))}
            </ol>
          </div>
          
          <div className="info-section">
            <h4>Ficha técnica</h4>
            <p><strong>Habilitación profesional:</strong> {curso.fichaTecnica.habilitacionProfesional}</p>
            <p><strong>Fundación:</strong> {curso.fichaTecnica.fundacion}</p>
            <p><strong>Pre-matriculación:</strong> {curso.fichaTecnica.preMatriculacion}</p>
            
            <h5>Aranceles:</h5>
            <ul>
              {curso.fichaTecnica.aranceles.map((arancel, index) => (
                <li key={index}>{arancel}</li>
              ))}
            </ul>
          </div>
          
          <div className="info-section">
            <h4>Contacto</h4>
            <h5>Fundación:</h5>
            <p>{curso.contacto.fundacion.direccion}</p>
            <p>Teléfono: {curso.contacto.fundacion.telefono}</p>
            <p>Email: {curso.contacto.fundacion.email}</p>
            <p>Web: <a href={curso.contacto.fundacion.web} target="_blank" rel="noopener noreferrer">{curso.contacto.fundacion.web}</a></p>
          </div>
        </div>
      </div>
    );
  };

  // =============================================
  // RENDERIZADO PRINCIPAL
  // =============================================
  return (
    <div className={`curso-libro ${sidebarOpen ? 'sidebar-open' : ''}`}>
      {/* Botón toggle para sidebar */}
      <button className="toggle-sidebar" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? '◄' : '►'} Información del curso
      </button>
      
      {/* Sidebar con información del curso */}
      {sidebarOpen && renderCourseInfo()}
      
      {/* Contenido principal */}
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



        {/* Contenido de la clase actual */}
        <main className="curso-contenido">
          <motion.div
            key={activeClassIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Objetivos de aprendizaje */}
            {currentClass.subtemas?.length > 0 && (
              <div className="curso-objetivos">
                <h3>Objetivos de aprendizaje</h3>
                <ul>
                  {currentClass.subtemas.map((subtema, index) => (
                    <React.Fragment key={index}>
                      <li><strong>{subtema.titulo}</strong></li>
                      {subtema.contenido?.map((item, i) => (
                        <li key={i} className="sub-objetivo">{item}</li>
                      ))}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            )}

            {/* Artículo principal */}
            <article className="curso-articulo">
              {renderContenidoConMultimedia()}
            </article>

            {/* Secciones adicionales */}
            {renderEjemploPractico()}
            {renderCitas()}
            {renderResumen()}
            {renderFAQ()}
            {renderEjercicios()}

            {/* Recursos adicionales */}
            {currentClass.materialComplementario?.length > 0 && (
              <aside className="curso-recursos">
                <h3>Recursos adicionales</h3>
                <div className="recursos-lista">
                  {currentClass.materialComplementario.map((file, i) => (
                    <a 
                      key={i} 
                      href={file.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="recurso-item"
                    >
                      {file.tipo === 'pdf' ? '📄 PDF:' : '🔗 Documento:'} {file.titulo}
                    </a>
                  ))}
                </div>
              </aside>
            )}
          </motion.div>
        </main>

        {/* Navegación inferior */}
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

                  {/* Selector de clases */}
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
        </footer>
      </div>
    </div>
  );
};

export default CursoMantenimiento1;