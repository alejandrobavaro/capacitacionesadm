// ------------------------------------------
// COMPONENTE: DETALLE DE CURSO CON DISEÑO MEJORADO
// ------------------------------------------
import React from 'react';
import { useParams } from 'react-router-dom';
import { FaClock, FaChartLine, FaTags } from 'react-icons/fa';

import Curso1 from './Curso1';
import Curso2 from './Curso2';
import Curso3 from './Curso3';
import '../assets/scss/_03-Componentes/_CursoDetalle.scss';

// ------------------------------------------
// COMPONENTE WRAPPER PARA LA ESTRUCTURA GENERAL DEL CURSO DETALLE
// ------------------------------------------
const CursoWrapper = ({ children, cursoData }) => {
  return (
    <div className="curso-detalle-container">
      <header className="curso-header">
        <div className="header-imagen">
          <img src={cursoData.imagen} alt={cursoData.titulo} />
          <div className="header-overlay"></div>
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

      <main className="curso-content">
        {children}
      </main>
    </div>
  );
};

// ------------------------------------------
// COMPONENTE PRINCIPAL: CURSO DETALLE
// ------------------------------------------
const CursoDetalle = () => {
  const { id } = useParams();

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

  const renderCurso = () => {
    switch (id) {
      case '1':
        return <Curso1 />;
      case '2':
        return <Curso2 />;
      case '3':
        return <Curso3 />;
      default:
        return <div className="curso-no-encontrado">Curso no encontrado</div>;
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
