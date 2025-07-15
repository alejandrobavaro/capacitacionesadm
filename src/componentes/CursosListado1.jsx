// ------------------------------------------
// COMPONENTE PRINCIPAL: LISTADO DE CURSOS
// ------------------------------------------
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "../assets/scss/_03-Componentes/_CursosListado1.scss";

const CursosListado1 = () => {
  // ------------------------------------------
  // SECCIÓN 1: ESTADOS DEL COMPONENTE
  // ------------------------------------------
  const [data, setData] = useState([]); // Guarda los datos de cursos desde cursos.json
  const [searchTerm, setSearchTerm] = useState(""); // Guarda el término de búsqueda del input
  const [selectedCategory, setSelectedCategory] = useState("TODOS"); // Categoría activa para filtro
  const [categorias, setCategorias] = useState([]); // Guarda categorías únicas extraídas

  // ------------------------------------------
  // SECCIÓN 2: EFECTO PARA CARGAR DATOS AL INICIAR
  // ------------------------------------------
  useEffect(() => {
    fetch("/cursos.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        const categoriasUnicas = ["TODOS", ...new Set(data.map(item => item.categoria))];
        setCategorias(categoriasUnicas);
      })
      .catch(error => console.error("Error al cargar los datos:", error));
  }, []);

  // ------------------------------------------
  // SECCIÓN 3: MANEJO DE FILTRO Y BÚSQUEDA
  // ------------------------------------------
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // ------------------------------------------
  // SECCIÓN 4: FILTRADO DE DATOS POR CATEGORÍA Y BÚSQUEDA
  // ------------------------------------------
  const filteredData = data.filter(item => {
    const matchesCategory = selectedCategory === "TODOS" || item.categoria === selectedCategory;
    const matchesSearchTerm = searchTerm === "" || item.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  // ------------------------------------------
  // SECCIÓN 5: CONFIGURACIÓN DE SLIDER PARA IMÁGENES
  // ------------------------------------------
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <motion.div className="cursos-listado" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

      {/* TÍTULO PRINCIPAL */}
      <h2 className="titulo-principal">Cursos Profesionales para Consorcios y Edificios</h2>

      {/* FILTROS DE CATEGORÍA */}
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

      {/* INPUT DE BÚSQUEDA */}
      <div className="barra-busqueda">
        <input
          type="text"
          placeholder="Buscar curso..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* LISTADO DE CURSOS O MENSAJE DE SIN RESULTADOS */}
      {filteredData.length === 0 ? (
        <h4 className="no-resultados">No se encontraron cursos.</h4>
      ) : (
        <div className="grid-cursos">
          {filteredData.map(item => (
            <motion.div key={item.id} className="card-curso" whileHover={{ scale: 1.02 }}>

              {/* SLIDER DE IMÁGENES DEL CURSO */}
              <Slider {...sliderSettings}>
                {item["imagenes slider"].map((imagen, index) => (
                  <div key={index}>
                    <img src={imagen} alt={item.nombre} className="img-curso" />
                  </div>
                ))}
              </Slider>

              {/* INFORMACIÓN DEL CURSO */}
              <div className="info-curso">
                <h3><Link to={`/CursosListado1/${item.id}`}>{item.nombre}</Link></h3>
                <p className="categoria">{item.categoria} | {item.tipo}</p>
                <p className="precio">Precio: ${item.precio}</p>
                <p className="finalizados">{item.finalizados} finalizados</p>
                <Link to={`/CursosListado1/${item.id}`} className="btn-ver-mas">Ver detalles</Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}

    </motion.div>
  );
};

export default CursosListado1;
