import React from "react"; 
import "../assets/scss/_03-Componentes/_Curso3.scss";

const Curso3 = () => {
  return (
    <div className="curso3">
      <h1>Mantenimiento Edilicio</h1>
      <h2>Profesor: Ing. José Daniel Antonucci (*)</h2>

      <section className="objetivos">
        <h3>Objetivos del Curso</h3>
        <ul>
          <li>Conocer el edificio en su totalidad.</li>
          <li>Capacitación integral para el mantenimiento edilicio.</li>
          <li>Definir el rol del administrador en la seguridad edilicia.</li>
          <li>Comprender y sistematizar el cumplimiento de las normativas.</li>
        </ul>
      </section>

      <section className="contenidos">
        <h3>Guía de Contenidos</h3>
        <ul>
          <li>El edificio y sus componentes.</li>
          <li>Riesgos de falla funcional y operativa.</li>
          <li>Documentación técnica y códigos de edificación.</li>
          <li>Empresas de servicios y documentación requerida.</li>
          <li>Tipos de mantenimiento: preventivo y correctivo.</li>
          <li>Organización y planificación del mantenimiento.</li>
          <li>Control de calidad y evaluación.</li>
          <li>Registros, historial y estadística del edificio.</li>
        </ul>
      </section>

      <section className="detalle">
        <h3>Aspectos Destacados</h3>
        <p>
          El curso aborda las diferentes fallas que pueden presentarse en un edificio, desde estructurales
          (fundaciones, columnas, vigas, losas) hasta estéticas (pintura, revestimientos) y de instalaciones
          (gas, agua, electricidad, ascensores). Se enfatiza la importancia de contar con documentación técnica
          completa y actualizada según el Código de Edificación, y se brindan herramientas prácticas para la
          planificación y ejecución del mantenimiento preventivo y correctivo.
        </p>
      </section>

      <section className="sedes">
        <h3>Habilitación y Sedes de Evaluación</h3>
        <p>
          Las mesas de evaluación se habilitan los terceros sábados de cada mes (excepto enero) en las siguientes sedes:
        </p>
        <ul>
          <li>Buenos Aires (CF) - Sede central: (011) 4392-0123</li>
          <li>Córdoba: (0351) 422-3399</li>
          <li>Mar del Plata: (0223) 495-0245</li>
          <li>La Plata, Mendoza, Bahía Blanca, Bariloche, Tucumán, entre otras.</li>
        </ul>
        <p>
          Para más información, consultar el cronograma de jornadas de evaluación.
        </p>
      </section>
    </div>
  );
};

export default Curso3;
