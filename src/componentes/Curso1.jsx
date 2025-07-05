import React from "react";
import "../assets/scss/_03-Componentes/_Curso1.scss";

const Curso1 = () => {
  return (
    <div className="curso1-container">
      <h1 className="curso1-title">CLASE N°1 - EFICIENCIA ENERGÉTICA EN EDIFICIOS</h1>
      
      <p>
        Los edificios consumen aproximadamente el 40% de la energía global. Optimizar su funcionamiento es clave para ahorrar dinero, mejorar el confort y reducir el impacto ambiental.
      </p>

      <h2>1. El Edificio como Sistema</h2>
      <p>
        Un edificio es un sistema complejo donde se combinan estructuras, instalaciones y el entorno. Cada decisión constructiva impacta en su desempeño energético.
      </p>
      <img src="/img/10-imagenes-cursos/id1-1.png" alt="Esquema del edificio como sistema" className="curso1-imagen" />

      <h2>2. Componentes Principales</h2>
      <ul>
        <li><strong>Obras Civiles:</strong> Estructura, muros, cerramientos y techos.</li>
        <li><strong>Instalaciones:</strong> Electricidad, agua, climatización, ventilación y domótica.</li>
      </ul>

      <h3>2.1. Obras Civiles</h3>
      <h4>a) Estructura Portante</h4>
      <p>
        Soporta las cargas del edificio. Las más comunes en Argentina son de Hormigón Armado, aunque también se utilizan estructuras metálicas o mixtas.
      </p>
      <h4>b) Muros y Tabiques</h4>
      <p>
        Separan ambientes y contribuyen al aislamiento térmico y acústico. Los sistemas livianos ganan terreno por su practicidad.
      </p>
      <h4>c) Cerramientos y Carpinterías</h4>
      <p>
        Protegen del clima. Las ventanas con doble vidrio hermético (DVH) son fundamentales para la eficiencia energética.
      </p>
      <h4>d) Techos y Cubiertas</h4>
      <p>
        Además de proteger, pueden incorporar soluciones como techos verdes o paneles solares.
      </p>
      <img src="/img/10-imagenes-cursos/id1-2.png" alt="Ejemplo de techos sostenibles" className="curso1-imagen" />

      <h3>2.2. Instalaciones Eficientes</h3>
      <ul>
        <li>Iluminación LED y sensores.</li>
        <li>Climatización eficiente (equipos con etiqueta A).</li>
        <li>Aislación adecuada de cañerías.</li>
        <li>Incorporación de energías renovables.</li>
      </ul>

      <h2>3. Claves de Eficiencia Energética</h2>
      <ul>
        <li>Buen aislamiento térmico.</li>
        <li>Ventanas eficientes.</li>
        <li>Equipos de climatización adecuados.</li>
        <li>Uso racional de la energía.</li>
        <li>Mantenimiento preventivo constante.</li>
      </ul>

      <h2>4. Beneficios</h2>
      <ul>
        <li>Reducción de consumos y costos.</li>
        <li>Mayor confort interior.</li>
        <li>Menor impacto ambiental.</li>
        <li>Revalorización del inmueble.</li>
      </ul>
      <img src="/img/10-imagenes-cursos/id1-3.png" alt="Beneficios de la eficiencia energética" className="curso1-imagen" />

      <h2>5. Material Complementario</h2>
      <ul>
        <li>Manual IRAM de Eficiencia Energética.</li>
        <li>Guía de Buenas Prácticas de Mantenimiento.</li>
        <li>Normas CIRSOC y Código de Edificación CABA.</li>
      </ul>

      <h2>6. Orientaciones para el Estudio</h2>
      <ol>
        <li>Leer detenidamente este módulo.</li>
        <li>Observar las imágenes y esquemas.</li>
        <li>Descargar y estudiar el material adicional.</li>
        <li>Escuchar el audio explicativo.</li>
        <li>Realizar los ejercicios de autoevaluación.</li>
        <li>Consultar al tutor si tiene dudas.</li>
      </ol>

      <h2>7. Recursos Descargables y Multimedia</h2>
      <ul>
        <li><a href="/descargas/clase1-material.pdf" target="_blank" rel="noopener noreferrer">📥 Descargar Material PDF</a></li>
        <li><a href="/descargas/guia-complementaria.pdf" target="_blank" rel="noopener noreferrer">📥 Guía Complementaria</a></li>
      </ul>

      <h3>🎧 Escuchar la Clase</h3>
      <audio controls className="curso1-audio">
        <source src="/audios/clase1.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  );
};

export default Curso1;
