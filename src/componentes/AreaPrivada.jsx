import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { BiBuilding, BiReceipt, BiCog, BiUser, BiUserPlus, BiChart } from 'react-icons/bi';
import '../assets/scss/_03-Componentes/_AreaPrivada.scss';

const AreaPrivada = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('sistema');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(tab);
  };

  return (
    <div className="admin-privada">
      <div className="admin-privada__contenedor">
        <header className="admin-privada__header">
          <h1 className="admin-privada__titulo">Panel de Administración</h1>
          <div className="admin-privada__usuario">
            <span className="admin-privada__nombre">Administrador</span>
            <div className="admin-privada__avatar">A</div>
          </div>
        </header>

        <div className="admin-privada__contenido">
          <nav className="admin-privada__navegacion">
            <ul className="admin-privada__menu">
              <li 
                className={`admin-privada__item ${activeTab === 'sistema' ? 'admin-privada__item--activo' : ''}`}
                onClick={() => handleTabChange('sistema')}
              >
                <BiCog className="admin-privada__icono" />
                <span>Configuración</span>
                <div className="admin-privada__item-highlight"></div>
              </li>
              <li 
                className={`admin-privada__item ${activeTab === 'expensas' ? 'admin-privada__item--activo' : ''}`}
                onClick={() => handleTabChange('expensas')}
              >
                <BiReceipt className="admin-privada__icono" />
                <span>Gestión de Expensas</span>
                <div className="admin-privada__item-highlight"></div>
              </li>
              <li 
                className={`admin-privada__item ${activeTab === 'reclamos' ? 'admin-privada__item--activo' : ''}`}
                onClick={() => handleTabChange('reclamos')}
              >
                <BiBuilding className="admin-privada__icono" />
                <span>Reclamos</span>
                <div className="admin-privada__item-highlight"></div>
              </li>
              <li 
                className={`admin-privada__item ${activeTab === 'usuarios' ? 'admin-privada__item--activo' : ''}`}
                onClick={() => handleTabChange('usuarios')}
              >
                <BiUserPlus className="admin-privada__icono" />
                <span>Consorcistas</span>
                <div className="admin-privada__item-highlight"></div>
              </li>
              <li 
                className={`admin-privada__item ${activeTab === 'reportes' ? 'admin-privada__item--activo' : ''}`}
                onClick={() => handleTabChange('reportes')}
              >
                <BiChart className="admin-privada__icono" />
                <span>Reportes</span>
                <div className="admin-privada__item-highlight"></div>
              </li>
            </ul>
          </nav>

          <main className="admin-privada__principal">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AreaPrivada;