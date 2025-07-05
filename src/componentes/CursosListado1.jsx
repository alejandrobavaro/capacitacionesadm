import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "../assets/scss/_03-Componentes/_CursosListado1.scss";

const CursosListado1 = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("TODOS");
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("/cursos.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        const categoriasUnicas = [
          "TODOS",
          ...new Set(data.map((item) => item.categoria)),
        ];
        setCategorias(categoriasUnicas);
      })
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) => {
    const matchesCategory =
      selectedCategory === "TODOS" || item.categoria === selectedCategory;
    const matchesSearchTerm =
      searchTerm === "" ||
      item.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <motion.div className="cursos-listado" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="titulo-principal">📚 Cursos para Consorcios y Edificios</h2>

      <div className="filtros-container">
        {categorias.map((cat, index) => (
          <button
            key={index}
            className={selectedCategory === cat ? "filtro activo" : "filtro"}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="barra-busqueda">
        <input
          type="text"
          placeholder="🔎 Buscar curso..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {filteredData.length === 0 ? (
        <h4 className="no-resultados">No se encontraron resultados. Verifique.</h4>
      ) : (
        <div className="grid-cursos">
          {filteredData.map((item) => (
            <motion.div
              key={item.id}
              className="card-curso"
              whileHover={{ scale: 1.05 }}
            >
              <Slider {...sliderSettings}>
                {item["imagenes slider"].map((imagen, index) => (
                  <div key={index}>
                    <img src={imagen} alt={item.nombre} className="img-curso" />
                  </div>
                ))}
              </Slider>

              <h3>
                <Link to={`/CursosListado1/${item.id}`}>{item.nombre}</Link>
              </h3>
              <p className="categoria">{item.categoria} - {item.tipo}</p>
              <p className="precio">💲 {item.precio}</p>
              <p className="finalizados">✔ {item.finalizados} finalizados</p>

              <Link to={`/CursosListado1/${item.id}`} className="btn-ver-mas">
                Ver más detalles
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default CursosListado1;
