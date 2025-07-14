import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "../assets/scss/_03-Componentes/_CursosListado1.scss";

// ------------------------------------------
// COMPONENTE PRINCIPAL: LISTADO DE CURSOS
// ------------------------------------------
const CursosListado1 = () => {
  // ------------------------------------------
  // SECCIÓN 1: ESTADOS DEL COMPONENTE
  // ------------------------------------------
  const [data, setData] = useState([]); // Almacena los datos de los cursos
  const [searchTerm, setSearchTerm] = useState(""); // Almacena el término de búsqueda
  const [selectedCategory, setSelectedCategory] = useState("TODOS"); // Almacena la categoría seleccionada
  const [categorias, setCategorias] = useState([]); // Almacena las categorías disponibles

  // ------------------------------------------
  // SECCIÓN 2: EFECTO PARA CARGAR DATOS INICIALES
  // ------------------------------------------
  useEffect(() => {
    fetch("/cursos.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // Extrae categorías únicas de los datos
        const categoriasUnicas = ["TODOS", ...new Set(data.map(item => item.categoria))];
        setCategorias(categoriasUnicas);
      })
      .catch(error => console.error("Error al cargar los datos:", error));
  }, []);

  // ------------------------------------------
  // SECCIÓN 3: MANEJADORES DE EVENTOS
  // ------------------------------------------
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchTerm(""); // Limpia la búsqueda al cambiar de categoría
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // ------------------------------------------
  // SECCIÓN 4: FILTRADO DE DATOS
  // ------------------------------------------
  const filteredData = data.filter(item => {
    const matchesCategory = selectedCategory === "TODOS" || item.categoria === selectedCategory;
    const matchesSearchTerm = searchTerm === "" || item.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  // ------------------------------------------
  // SECCIÓN 5: CONFIGURACIÓN DEL SLIDER
  // ------------------------------------------
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <motion.div 
      className="cursos-listado" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
    >
      {/* ------------------------------------------
          SECCIÓN 6: TÍTULO PRINCIPAL
          ------------------------------------------ */}
      <h2 className="titulo-principal">📚 Cursos para Profesionales de Consorcios y Edificios</h2>

      {/* ------------------------------------------
          SECCIÓN 7: FILTROS POR CATEGORÍA
          ------------------------------------------ */}
      <div className="filtros-container">
        {categorias.map((cat, index) => (
          <button
            key={index}
            className={`filtro ${selectedCategory === cat ? "activo" : ""}`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ------------------------------------------
          SECCIÓN 8: BARRA DE BÚSQUEDA
          ------------------------------------------ */}
      <div className="barra-busqueda">
        <input
          type="text"
          placeholder="Buscar curso..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* ------------------------------------------
          SECCIÓN 9: RESULTADOS DE LA BÚSQUEDA
          ------------------------------------------ */}
      {filteredData.length === 0 ? (
        <h4 className="no-resultados">No se encontraron resultados.</h4>
      ) : (
        <div className="grid-cursos">
          {filteredData.map(item => (
            <motion.div 
              key={item.id} 
              className="card-curso" 
              whileHover={{ scale: 1.03 }}
            >
              {/* ------------------------------------------
                  SECCIÓN 9.1: SLIDER DE IMÁGENES DEL CURSO
                  ------------------------------------------ */}
              <Slider {...sliderSettings}>
                {item["imagenes slider"].map((imagen, index) => (
                  <div key={index}>
                    <img src={imagen} alt={item.nombre} className="img-curso" />
                  </div>
                ))}
              </Slider>

              {/* ------------------------------------------
                  SECCIÓN 9.2: INFORMACIÓN DEL CURSO
                  ------------------------------------------ */}
              <h3><Link to={`/CursosListado1/${item.id}`}>{item.nombre}</Link></h3>
              <p className="categoria">{item.categoria} - {item.tipo}</p>
              <p className="precio">💲 {item.precio}</p>
              <p className="finalizados">✔ {item.finalizados} finalizados</p>

              {/* ------------------------------------------
                  SECCIÓN 9.3: BOTÓN PARA VER DETALLES
                  ------------------------------------------ */}
              <Link to={`/CursosListado1/${item.id}`} className="btn-ver-mas">
                Ver detalles
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default CursosListado1;