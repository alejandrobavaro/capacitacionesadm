import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/SesionAuthContext'; // Contexto global
import SesionLoadingSpinner from './SesionLoadingSpinner'; // Spinner de carga
import '../assets/scss/_03-Componentes/_SesionLoginRegister.scss';

const SesionLogout = () => {
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  // Al montar el componente, despacha logout y redirige luego de 2 segundos
  React.useEffect(() => {
    dispatch({ type: 'LOGOUT' });
    setTimeout(() => {
      navigate('/login'); // Redirige a login
    }, 2000);
  }, [dispatch, navigate]);

  // Mientras, muestra el spinner de carga
  return <SesionLoadingSpinner />;
};

export default SesionLogout;
