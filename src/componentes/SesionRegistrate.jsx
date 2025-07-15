import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/SesionAuthContext'; // Contexto global
import SesionLoadingSpinner from './SesionLoadingSpinner'; // Spinner de carga
import '../assets/scss/_03-Componentes/_SesionLoginRegister.scss';

const SesionRegister = () => {
  // Estados para email, password, confirm password y loading
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { dispatch } = useAuth();
  const navigate = useNavigate();

  // Valida que password y confirm password coincidan, simula registro y redirige
  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      dispatch({ type: 'REGISTER', payload: { email } });
      setLoading(false);
      navigate('/');
    }, 2000);
  };

  return (
    <div className="auth-overlay">
      <div className="auth-container">
        {loading ? (
          // Spinner mientras carga
          <SesionLoadingSpinner />
        ) : (
          // Formulario de registro
          <div className="auth-content">
            {/* Imagen superior decorativa */}
            <img className='auth-image top-image' src="/img/05-img-costados-larga/4.png" alt="" />
            <form onSubmit={handleRegister} className="auth-form">
              <h2>Registrate</h2>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button type="submit">Register</button>
            </form>
            {/* Imagen inferior decorativa */}
            <img className='auth-image bottom-image' src="/img/02-logos/logo1.png" alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SesionRegister;
