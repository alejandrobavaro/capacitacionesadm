import React from 'react';
import '../assets/scss/_03-Componentes/_SesionLoginRegister.scss';

// Componente para mostrar un spinner de carga mientras se procesa el login o registro
const SesionLoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div> {/* Elemento animado que gira */}
    </div>
  );
};

export default SesionLoadingSpinner;
