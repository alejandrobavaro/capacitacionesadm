import React, { useState } from 'react';
import { BiSearch, BiPlusCircle, BiEdit, BiTrash, BiUserPlus, BiChevronDown } from 'react-icons/bi';
import '../assets/scss/_03-Componentes/_AreaConsorcistas.scss';

const AreaConsorcistas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('todos');
  
  const consorcistas = [
    {
      id: 1,
      nombre: 'María González',
      unidad: 'A101',
      email: 'maria.g@email.com',
      telefono: '+54 11 1234-5678',
      estado: 'activo'
    },
    {
      id: 2,
      nombre: 'Carlos Pérez',
      unidad: 'B205',
      email: 'carlos.p@email.com',
      telefono: '+54 11 2345-6789',
      estado: 'moroso'
    },
    {
      id: 3,
      nombre: 'Laura Fernández',
      unidad: 'C302',
      email: 'laura.f@email.com',
      telefono: '+54 11 3456-7890',
      estado: 'inhabilitado'
    }
  ];

  const filteredConsorcistas = consorcistas.filter(consorcista => {
    const matchesSearch = consorcista.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         consorcista.unidad.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'todos' || consorcista.estado === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const getEstadoBadge = (estado) => {
    switch(estado) {
      case 'activo':
        return { class: 'activo', text: 'Activo' };
      case 'moroso':
        return { class: 'moroso', text: 'Moroso' };
      case 'inhabilitado':
        return { class: 'inhabilitado', text: 'Inhabilitado' };
      default:
        return { class: 'desconocido', text: 'Desconocido' };
    }
  };

  return (
    <div className="consorcistas-admin-container">
      <div className="consorcistas-header">
        <h2>Administración de Consorcistas</h2>
        <div className="consorcistas-actions">
          <div className="search-container">
            <div className="search-bar">
              <BiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Buscar consorcistas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="btn new-consorcista-btn">
              <BiUserPlus /> <span>Nuevo Consorcista</span>
            </button>
          </div>
        </div>
      </div>

      <div className="consorcistas-filters">
        <button 
          className={`filter-btn ${activeFilter === 'todos' ? 'active' : ''}`}
          onClick={() => setActiveFilter('todos')}
        >
          Todos
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'activo' ? 'active' : ''}`}
          onClick={() => setActiveFilter('activo')}
        >
          Activos
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'moroso' ? 'active' : ''}`}
          onClick={() => setActiveFilter('moroso')}
        >
          Morosos
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'inhabilitado' ? 'active' : ''}`}
          onClick={() => setActiveFilter('inhabilitado')}
        >
          Inhabilitados
        </button>
      </div>

      <div className="consorcistas-content">
        {filteredConsorcistas.length > 0 ? (
          <div className="table-responsive">
            <table className="consorcistas-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Unidad</th>
                  <th>Contacto</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredConsorcistas.map(consorcista => (
                  <tr key={consorcista.id}>
                    <td data-label="Nombre">{consorcista.nombre}</td>
                    <td data-label="Unidad">{consorcista.unidad}</td>
                    <td data-label="Contacto">
                      <div className="contact-info">
                        <div>{consorcista.email}</div>
                        <div>{consorcista.telefono}</div>
                      </div>
                    </td>
                    <td data-label="Estado">
                      <span className={`status-badge ${getEstadoBadge(consorcista.estado).class}`}>
                        {getEstadoBadge(consorcista.estado).text}
                      </span>
                    </td>
                    <td data-label="Acciones">
                      <div className="action-buttons">
                        <button className="btn edit-btn">
                          <BiEdit /> <span>Editar</span>
                        </button>
                        <button className="btn delete-btn">
                          <BiTrash /> <span>Eliminar</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="no-results">
            No se encontraron consorcistas con los filtros seleccionados
          </div>
        )}
      </div>
    </div>
  );
};

export default AreaConsorcistas;