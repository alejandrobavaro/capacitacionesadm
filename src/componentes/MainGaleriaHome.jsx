import React from "react";
import "../assets/scss/_03-Componentes/_MainGaleriaHome.scss";

const MainGaleriaHome = () => {
  const galeria = [
    "./img/05-img-costados-larga/1.jpeg",
    "./img/05-img-costados-larga/3.jpeg",
    "./img/05-img-costados-larga/5.jpeg",
  ];

  return (
    <section className="mainGaleriaHome">
      <h2>Galería de Imágenes</h2>
      <div className="galeriaGrid">
        {galeria.map((img, index) => (
          <img key={index} src={img} alt={`Imagen ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default MainGaleriaHome;
