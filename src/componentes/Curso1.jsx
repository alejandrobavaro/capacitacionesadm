import React from "react";
import "../assets/scss/_03-Componentes/_Curso1.scss";

const Curso1 = () => {
  return (
    <div className="curso1-container">
      <h1 className="curso1-title">CLASE N°1 - EL EDIFICIO Y SUS COMPONENTES</h1>
      <p>
        El mantenimiento del edificio administrado es la base indispensable para la correcta gestión edilicia y económica del administrador.
        Dentro de las tecnologías constructivas de los edificios, existen diferencias de diseño y de calidad que condicionan la durabilidad,
        y por ende, de los edificios son más homogéneas, por lo que se generaliza la conformación del edificio tipo, que permitirá conocer
        las distintas clases de edificios que puede tener un administrador entre sus clientes...
      </p>

      <h2>La composición de un edificio presenta dos campos netamente diferenciados:</h2>
      <ul>
        <li>Las obras civiles</li>
        <li>Las instalaciones</li>
      </ul>

      <h3>Las Obras Civiles</h3>
      <p>Denomínase obras civiles a la obra húmeda que constituye el cuerpo del edificio. Su función es estática y se caracteriza por tener poco desgaste y gran durabilidad.</p>

      <h4>a) Estructuras</h4>
      <p>Su finalidad es dar soporte y base a la forma del edificio. Las estructuras portantes se clasifican:</p>
      <ul>
        <li><strong>Según el material:</strong> Hormigón Armado (las más comunes en Argentina) y Metálicas.</li>
        <li><strong>Según la época:</strong> Vigente, corresponde a edificios antiguos.</li>
      </ul>

      <h4>b) Muros y tabiques</h4>
      <h4>c) Cerramientos</h4>
      <h4>d) Carpinterías</h4>
      <p>Delimitan el contorno del edificio, brindando protección hidrófuga, térmica y acústica.</p>
      <h4>e) Techos</h4>
      <p>Completan los cerramientos permitiendo iluminación y ventilación.</p>

      <img src="../../img/IMG-20250626-WA0021.jpg" alt="Imagen curso" className="curso1-imagen" />

      <h3>CLAVES DE CORRECCIÓN</h3>
      <ul>
        <li>Clase 9</li>
        <li>Clase 10</li>
        <li>Clase 11</li>
        <li>Clase 12</li>
      </ul>

      <h3>Material Complementario y Bibliografía</h3>
      <ul>
        <li>Sector de Viviendas (Maestranza)</li>
        <li>Seguridad e Higiene en el Edificio</li>
        <li>Sectores Comunes y Privados</li>
        <li>Leyes y Ordenanzas de la Edificación</li>
        <li>Normas IRAM, Reglamentos CIRSOC, Código de Edificación CABA</li>
      </ul>

      <h3>Orientaciones para el Estudio</h3>
      <ol>
        <li>Vea el video completo.</li>
        <li>Revíselo nuevamente y tome nota.</li>
        <li>Trabaje con el Módulo Gráfico.</li>
        <li>Realice los ejercicios de autoevaluación.</li>
        <li>Compare con la clave de corrección.</li>
        <li>Consulte a la Unidad de Orientación al Cursante cuando lo considere necesario.</li>
      </ol>

      <img src="../../img/IMG-20250626-WA0017.jpg" alt="Imagen curso" className="curso1-imagen" />

      <h3>¿Cómo Funciona el Sistema?</h3>
      <ol>
        <li>La UOC envía el material didáctico y evaluaciones.</li>
        <li>Los cursantes realizan consultas tutoriales.</li>
        <li>Los terceros sábados se habilitan Mesas de Evaluación.</li>
        <li>Los cursantes presentan documentación para evaluaciones.</li>
      </ol>

      <img src="../../img/IMG-20250626-WA0014.jpg" alt="Imagen curso" className="curso1-imagen" />

      <h3>Ficha Técnica del Curso</h3>
      <p>Curso de iniciación y pre-matriculación en Administración de Propiedad Horizontal.</p>
      <p>Dirigido a administradores en actividad y aspirantes. Modalidad semi-presencial con material didáctico a distancia y evaluaciones presenciales.</p>
    </div>
  );
};

export default Curso1;
