import React from 'react';
import { useParams } from 'react-router-dom';
import { FaClock, FaChartLine, FaTags } from 'react-icons/fa';

// ------------------------------------------
// SECCIÓN 1: IMPORTACIÓN DE COMPONENTES DE CURSO
// ------------------------------------------
import Curso1 from './Curso1';
import Curso2 from './Curso2';
import Curso3 from './Curso3';
import '../assets/scss/_03-Componentes/_CursoDetalle.scss';

// ------------------------------------------
// SECCIÓN 2: COMPONENTE WRAPPER PARA ESTRUCTURA COMÚN
// ------------------------------------------
const CursoWrapper = ({ children, cursoData }) => {
  return (
    <div className="curso-detalle-container">
      {/* Cabecera con imagen y título */}
      <header className="curso-header">
        <div className="header-imagen">
          <img src={cursoData.imagen} alt={cursoData.titulo} />
          <div className="header-overlay"></div>
        </div>
        
        <div className="header-contenido">
          <h1>{cursoData.titulo}</h1>
          
          {/* Metadatos del curso */}
          <div className="curso-meta">
            <span><FaClock /> {cursoData.duracion}</span>
            <span><FaChartLine /> {cursoData.nivel}</span>
            <span><FaTags /> {cursoData.categoria}</span>
          </div>
        </div>
      </header>

      {/* Contenido principal (componente hijo) */}
      <main className="curso-content">
        {children}
      </main>
    </div>
  );
};

// ------------------------------------------
// SECCIÓN 3: COMPONENTE PRINCIPAL CURSO DETALLE
// ------------------------------------------
const CursoDetalle = () => {
  const { id } = useParams();

  // Datos de los cursos que coinciden con cursos.json
  const cursosData = {
    '1': {
      titulo: 'Mantenimiento Preventivo en Consorcios',
      duracion: '8 semanas',
      nivel: 'Intermedio',
      categoria: 'Mantenimiento',
      imagen: '/img/10-imagenes-cursos/id2-1.png'
    },
    '2': {
      titulo: 'Interpretación de Planos Edilicios',
      duracion: '6 semanas',
      nivel: 'Intermedio',
      categoria: 'Arquitectura',
      imagen: '/img/10-imagenes-cursos/id3-1.png'
    },
    '3': {
      titulo: 'Mantenimiento Edilicio',
      duracion: '4 semanas',
      nivel: 'Básico',
      categoria: 'Técnico',
      imagen: '/img/10-imagenes-cursos/id1-1.png'
    }
  };

  // Renderizado condicional por ID de curso
  switch (id) {
    case '1':
      return (
        <CursoWrapper cursoData={cursosData[id]}>
          <Curso1 />
        </CursoWrapper>
      );
    case '2':
      return (
        <CursoWrapper cursoData={cursosData[id]}>
          <Curso2 />
        </CursoWrapper>
      );
    case '3':
      return (
        <CursoWrapper cursoData={cursosData[id]}>
          <Curso3 />
        </CursoWrapper>
      );
    default:
      return <div className="curso-no-encontrado">Curso no encontrado</div>;
  }
};

export default CursoDetalle;