import React from "react";
import "../assets/scss/_03-Componentes/_MainTestimonios.scss";

const MainTestimonios = () => {
  const MainTestimonios = [
    {
      autor: "Carlos G.",
      texto: "Gracias a su sistema de administración, nuestros consorcistas están mucho más informados y todo funciona más ordenado.",
    },
    {
      autor: "María P.",
      texto: "Muy buenas las capacitaciones. Me ayudaron a entender mejor mi rol como administradora y a prevenir problemas en el edificio.",
    },
    {
      autor: "Fernando R.",
      texto: "Excelente atención. Los reportes de mantenimiento nos permiten actuar rápido y evitar gastos mayores.",
    },
  ];

  return (
    <div className="MainTestimonios-container">
      <h1>Lo que dicen nuestros usuarios</h1>

      <div className="MainTestimonios-lista">
        {MainTestimonios.map((testimonio, index) => (
          <div key={index} className="testimonio">
            <p className="texto">"{testimonio.texto}"</p>
            <p className="autor">- {testimonio.autor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainTestimonios;
