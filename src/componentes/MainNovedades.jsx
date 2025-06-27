// MainNovedades.jsx
import React from "react";
import "../assets/scss/_03-Componentes/_MainNovedades.scss";

const MainNovedades = () => {
  return (
    <section className="MainNovedades">
      <h2>Últimas Novedades</h2>
      <ul>
        <li>Nuevo curso sobre reglamentaciones vigentes.</li>
        <li>Actualización en protocolos de mantenimiento.</li>
        <li>Promoción en asesoría integral.</li>
      </ul>
    </section>
  );
};

export default MainNovedades;