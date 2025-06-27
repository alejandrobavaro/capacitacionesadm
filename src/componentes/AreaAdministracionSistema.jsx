import React, { useState } from 'react';
import { BiCog, BiSave, BiReset, BiUser, BiBell } from 'react-icons/bi';
import '../assets/scss/_03-Componentes/_AreaAdministracionSistema.scss';

const AreaAdministracionSistema = () => {
  const [config, setConfig] = useState({
    notificaciones: true,
    recordatorios: false,
    accesoConsorcistas: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setConfig(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para guardar configuración
    alert('Configuración guardada correctamente');
  };

  const handleReset = () => {
    setConfig({
      notificaciones: true,
      recordatorios: false,
      accesoConsorcistas: true
    });
  };

  return (
    <div className="sistema-admin-container">
      <h2>Configuración del Sistema</h2>
      
      <form onSubmit={handleSubmit} className="sistema-form">
        <div className="config-section">
          <h3><BiCog /> Configuración General</h3>
          
          <div className="form-group">
            <label className="switch">
              <input 
                type="checkbox" 
                name="notificaciones" 
                checked={config.notificaciones}
                onChange={handleChange}
              />
              <span className="slider"></span>
              <span className="switch-label">
                <BiBell /> Notificaciones por Email
              </span>
            </label>
          </div>
          
          <div className="form-group">
            <label className="switch">
              <input 
                type="checkbox" 
                name="recordatorios" 
                checked={config.recordatorios}
                onChange={handleChange}
              />
              <span className="slider"></span>
              <span className="switch-label">
                <BiBell /> Recordatorios Automáticos
              </span>
            </label>
          </div>
        </div>
        
        <div className="config-section">
          <h3><BiUser /> Accesos y Permisos</h3>
          
          <div className="form-group">
            <label className="switch">
              <input 
                type="checkbox" 
                name="accesoConsorcistas" 
                checked={config.accesoConsorcistas}
                onChange={handleChange}
              />
              <span className="slider"></span>
              <span className="switch-label">
                <BiUser /> Acceso para Consorcistas
              </span>
            </label>
          </div>
        </div>
        
        <div className="form-actions">
          <button type="submit" className="save-btn">
            <BiSave /> Guardar Configuración
          </button>
          <button type="button" className="reset-btn" onClick={handleReset}>
            <BiReset /> Restablecer
          </button>
        </div>
      </form>
    </div>
  );
};

export default AreaAdministracionSistema;