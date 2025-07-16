import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "../assets/scss/_03-Componentes/_CursosListadoMantenimiento.scss";

const CursosListadoMantenimiento = () => {
  // ==================== ESTADOS ====================
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("TODOS");
  const [categorias, setCategorias] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);

  // ==================== EFECTOS ====================
  useEffect(() => {
    fetch("/cursos.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setCategorias(["TODOS", ...new Set(data.map(item => item.categoria))]);
      })
      .catch(error => console.error("Error:", error));
  }, []);

  // ==================== MANEJADORES ====================
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");
  };

  const abrirModal = (curso) => {
    setCursoSeleccionado(curso);
    setModalIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const cerrarModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  // ==================== FILTRADO ====================
  const filteredData = data.filter(item => {
    const matchesCategory = selectedCategory === "TODOS" || item.categoria === selectedCategory;
    const matchesSearchTerm = item.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  // ==================== CONFIG SLIDER ====================
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    appendDots: dots => <div className="slider-dots-container"><ul>{dots}</ul></div>,
    customPaging: () => <div className="custom-dot"></div>
  };

  // ==================== RENDER ====================
  return (
    <motion.div className="cursos-listado" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* SECCIÓN SUPERIOR (MANTENIDA COMO SOLICITASTE) */}
      <div className="seccion-superior">
        <div className="filtros-busqueda-container">
          <div className="titulo-container">
            <h2 className="titulo-principal">
              Cursos de <span className="titulo-destacado">Mantenimiento Edilicio</span>
            </h2>
            <p className="subtitulo">Capacitación profesional para administradores</p>
          </div>

          <div className="filtros-container">
            {categorias.slice(0, 4).map((cat, index) => (
              <button
                key={index}
                className={`filtro ${selectedCategory === cat ? "activo" : ""}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="barra-busqueda">
            <input
              type="text"
              placeholder="Buscar curso..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* LISTADO DE CURSOS */}
      <div className="cursos-grid">
        {filteredData.length === 0 ? (
          <div className="no-results">
            <h3>No se encontraron cursos</h3>
            <p>Intenta con otros términos de búsqueda</p>
          </div>
        ) : (
          filteredData.map(item => (
            <motion.div 
              key={item.id} 
              className="curso-card"
              whileHover={{ y: -5 }}
            >
              <div className="card-badge">{item.tipo}</div>
              
              <Slider {...sliderSettings} className="curso-slider">
                {item["imagenes slider"]?.map((img, i) => (
                  <div key={i} className="slider-item">
                    <img src={img} alt={`${item.nombre} - Imagen ${i+1}`} />
                  </div>
                ))}
              </Slider>

              <div className="card-content">
                <div className="card-header">
                  <h3>{item.nombre}</h3>
                  <div className="card-meta">
                    <span className="category">{item.categoria}</span>
                    {item.complejidad && (
                      <span className="level">{item.complejidad}</span>
                    )}
                  </div>
                </div>

                <div className="card-footer">
                  <button 
                    className="info-btn"
                    onClick={() => abrirModal(item)}
                  >
                    Ver detalles
                  </button>
                  <Link 
                    to={`/CursosListadoMantenimiento/${item.id}`} 
                    className="action-btn"
                  >
                    Ingresar
                  </Link>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* MODAL */}
      {modalIsOpen && cursoSeleccionado && (
        <div className="curso-modal-overlay" onClick={cerrarModal}>
          <div className="curso-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={cerrarModal}>
              &times;
            </button>
            
            <div className="modal-header">
              <h2>{cursoSeleccionado.nombre}</h2>
              <div className="modal-subheader">
                <span>{cursoSeleccionado.categoria}</span>
                <span>•</span>
                <span>{cursoSeleccionado.tipo}</span>
              </div>
            </div>

            <div className="modal-content">
              {cursoSeleccionado.profesor && (
                <div className="profesor-info">
                  <h4>Instructor</h4>
                  <div className="profesor-card">
                    <h5>{cursoSeleccionado.profesor}</h5>
                    {cursoSeleccionado.profesion && (
                      <p>{cursoSeleccionado.profesion}</p>
                    )}
                  </div>
                </div>
              )}

              {cursoSeleccionado.objetivos?.length > 0 && (
                <div className="section">
                  <h4>Lo que aprenderás</h4>
                  <ul className="objetivos-list">
                    {cursoSeleccionado.objetivos.map((obj, i) => (
                      <li key={i}>
                        <span className="check-icon">✓</span>
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {cursoSeleccionado.contenido?.length > 0 && (
                <div className="section">
                  <h4>Plan de estudios</h4>
                  <div className="contenido-list">
                    {cursoSeleccionado.contenido.map((clase, i) => (
                      <div key={i} className="clase-item">
                        <div className="clase-header">
                          <span className="clase-num">Clase {clase.clase}</span>
                          <h5>{clase.tema}</h5>
                        </div>
                        {clase.subtemas?.length > 0 && (
                          <ul className="subtemas">
                            {clase.subtemas.map((subtema, j) => (
                              <li key={j}>{subtema}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="modal-actions">
              <Link 
                to={`/CursosListadoMantenimiento/${cursoSeleccionado.id}`} 
                className="primary-btn"
                onClick={cerrarModal}
              >
                Comenzar curso
              </Link>
              <button className="secondary-btn" onClick={cerrarModal}>
                Ver más cursos
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CursosListadoMantenimiento;