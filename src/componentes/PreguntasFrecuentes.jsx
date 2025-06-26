import React from "react";
import "../assets/scss/_03-Componentes/_PreguntasFrecuentes.scss";

const PreguntasFrecuentes = () => {
  return (
    <div className="faq-container">
      <h1>Preguntas Frecuentes</h1>

      <div className="pregunta">
        <h3>¿Qué incluye el sistema para administraciones?</h3>
        <p>
          El sistema permite generar expensas, balances, gestionar reclamos, enviar notificaciones y dar acceso online a los consorcistas.
        </p>
      </div>

      <div className="pregunta">
        <h3>¿Puedo descargar mis expensas desde esta página?</h3>
        <p>
          Sí, ingresando al Área Privada podrás descargar tus expensas mensuales, consultar balances y documentos del consorcio.
        </p>
      </div>

      <div className="pregunta">
        <h3>¿Cómo accedo al Área Privada?</h3>
        <p>
          Desde el botón en el menú principal o desde la sección Área Privada, si ya tenés usuario registrado. Si no, contactanos.
        </p>
      </div>

      <div className="pregunta">
        <h3>¿Ofrecen capacitaciones para administradores?</h3>
        <p>
          Sí, contamos con cursos y capacitaciones online y presenciales sobre administración de consorcios, normativa legal y mantenimiento edilicio.
        </p>
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;
