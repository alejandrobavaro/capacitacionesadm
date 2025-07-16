// ------------------------------------------
// COMPONENTE: DETALLE DE CURSO - VERSIÓN COMPACTA
// ------------------------------------------
import React from 'react';
import { useParams } from 'react-router-dom';
import { FaClock, FaChartLine, FaTags } from 'react-icons/fa';

import CursoMantenimiento1 from './CursoMantenimiento1';
import CursoMantenimiento2 from './CursoMantenimiento2';
import CursoMantenimiento3 from './CursoMantenimiento3';
import '../assets/scss/_03-Componentes/_CursoDetalle.scss';

// ------------------------------------------
// WRAPPER SIMPLIFICADO PARA EL CURSO
// ------------------------------------------
const CursoWrapper = ({ children, cursoData }) => {
  return (
    <div className="curso-detalle-container">
      {/* Header compacto del curso */}
      <header className="curso-header">
        <div className="header-imagen">
          <img src={cursoData.imagen} alt={cursoData.titulo} />
        </div>

        <div className="header-contenido">
          <h1>{cursoData.titulo}</h1>
          <div className="curso-meta">
            <span><FaClock /> {cursoData.duracion}</span>
            <span><FaChartLine /> {cursoData.nivel}</span>
            <span><FaTags /> {cursoData.categoria}</span>
          </div>
        </div>
      </header>

      {/* Contenido principal del curso */}
      <main className="curso-content">
        {children}
      </main>
    </div>
  );
};

// ------------------------------------------
// COMPONENTE PRINCIPAL
// ------------------------------------------
const CursoDetalle = () => {
  const { id } = useParams();

  // Datos estáticos de los cursos
  const cursosData = {
    '1': {
      titulo: 'Curso Mantenimiento 1',
      duracion: '8 semanas',
      nivel: 'Intermedio',
      categoria: 'Mantenimiento',
      imagen: '/img/10-imagenes-cursos/id1-1.png'
    },
    '2': {
      titulo: 'Curso Mantenimiento 2',
      duracion: '6 semanas',
      nivel: 'Intermedio',
      categoria: 'Mantenimiento',
      imagen: '/img/10-imagenes-cursos/id2-1.png'
    },
    '3': {
      titulo: 'Curso Mantenimiento 3',
      duracion: '4 semanas',
      nivel: 'Básico',
      categoria: 'Mantenimiento',
      imagen: '/img/10-imagenes-cursos/id3-1.png'
    }
  };

  // Renderizado condicional del curso específico
  const renderCurso = () => {
    switch (id) {
      case '1': return <CursoMantenimiento1 />;
      case '2': return <CursoMantenimiento2 />;
      case '3': return <CursoMantenimiento3 />;
      default: return <div className="curso-no-encontrado">Curso no encontrado</div>;
    }
  };

  const cursoData = cursosData[id];

  return cursoData ? (
    <CursoWrapper cursoData={cursoData}>
      {renderCurso()}
    </CursoWrapper>
  ) : (
    <div className="curso-no-encontrado">Curso no encontrado</div>
  );
};

export default CursoDetalle;