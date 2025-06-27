
// MainPromociones.jsx
import React from "react";
import "../assets/scss/_03-Componentes/_MainPromociones.scss";

const MainPromociones = () => {
  return (
    <section className="MainPromociones">
      <h2>Promociones y Packs Especiales</h2>
      <div className="promos-grid">
        <div className="promo-item">
          <h3>Pack Administraciones</h3>
          <p>Consultoría + Capacitación inicial con 20% OFF</p>
        </div>
        <div className="promo-item">
          <h3>Pack Consorcistas</h3>
          <p>Asesoría Legal + Taller práctico a precio promocional</p>
        </div>
        <div className="promo-item">
          <h3>Promoción Comercial</h3>
          <p>Descuentos especiales para nuevos clientes en junio</p>
        </div>
      </div>
    </section>
  );
};

export default MainPromociones;
