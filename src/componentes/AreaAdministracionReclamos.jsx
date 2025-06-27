import React, { useState } from 'react';
import { BiSearch, BiFilterAlt, BiPlusCircle, BiCheck, BiTime, BiX, BiChevronRight } from 'react-icons/bi';
import '../assets/scss/_03-Componentes/_AreaAdministracionReclamos.scss';

const AreaAdministracionReclamos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('todos');
  
  const reclamos = [
    {
      id: 1,
      unidad: 'A101',
      fecha: '15/06/2023',
      descripcion: 'Fuga de agua en baño principal',
      estado: 'pendiente',
      prioridad: 'alta'
    },
    {
      id: 2,
      unidad: 'B205',
      fecha: '10/06/2023',
      descripcion: 'Ascensor no funciona',
      estado: 'en_proceso',
      prioridad: 'urgente'
    },
    {
      id: 3,
      unidad: 'C302',
      fecha: '05/06/2023',
      descripcion: 'Luz en pasillo no funciona',
      estado: 'resuelto',
      prioridad: 'media'
    }
  ];

  const filteredReclamos = reclamos.filter(reclamo => {
    const matchesSearch = reclamo.unidad.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         reclamo.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'todos' || reclamo.estado === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const getEstadoBadge = (estado) => {
    switch(estado) {
      case 'pendiente':
        return { 
          text: 'Pendiente', 
          icon: <BiTime />, 
          class: 'pendiente' 
        };
      case 'en_proceso':
        return { 
          text: 'En Proceso', 
          icon: <BiCheck />, 
          class: 'en-proceso' 
        };
      case 'resuelto':
        return { 
          text: 'Resuelto', 
          icon: <BiCheck />, 
          class: 'resuelto' 
        };
      default:
        return { 
          text: 'Desconocido', 
          icon: <BiX />, 
          class: 'desconocido' 
        };
    }
  };

  return (
    <div className="reclamos-admin-container">
      <div className="reclamos-header">
        <h2>Administración de Reclamos</h2>
        <div className="reclamos-actions">
          <div className="search-container">
            <div className="search-bar">
              <BiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Buscar reclamos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="btn new-reclamo-btn">
              <BiPlusCircle /> <span>Nuevo Reclamo</span>
            </button>
          </div>
        </div>
      </div>

      <div className="reclamos-filters">
        <button 
          className={`filter-btn ${activeFilter === 'todos' ? 'active' : ''}`}
          onClick={() => setActiveFilter('todos')}
        >
          <BiFilterAlt /> Todos
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'pendiente' ? 'active' : ''}`}
          onClick={() => setActiveFilter('pendiente')}
        >
          Pendientes
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'en_proceso' ? 'active' : ''}`}
          onClick={() => setActiveFilter('en_proceso')}
        >
          En Proceso
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'resuelto' ? 'active' : ''}`}
          onClick={() => setActiveFilter('resuelto')}
        >
          Resueltos
        </button>
      </div>

      <div className="reclamos-content">
        {filteredReclamos.length > 0 ? (
          <div className="reclamos-grid">
            {filteredReclamos.map(reclamo => (
              <div key={reclamo.id} className="reclamo-card">
                <div className="reclamo-header">
                  <span className="unidad">Unidad {reclamo.unidad}</span>
                  <span className="fecha">{reclamo.fecha}</span>
                </div>
                <p className="descripcion">{reclamo.descripcion}</p>
                <div className="reclamo-footer">
                  <span className={`status-badge ${getEstadoBadge(reclamo.estado).class}`}>
                    {getEstadoBadge(reclamo.estado).icon}
                    {getEstadoBadge(reclamo.estado).text}
                  </span>
                  <button className="btn details-btn">
                    <span>Ver Detalles</span>
                    <BiChevronRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            No se encontraron reclamos con los filtros seleccionados
          </div>
        )}
      </div>
    </div>
  );
};

export default AreaAdministracionReclamos;