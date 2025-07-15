import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../context/SesionAuthContext"; // Contexto de autenticación global
import SesionLoadingSpinner from "./SesionLoadingSpinner"; // Spinner de carga
import "../assets/scss/_03-Componentes/_SesionLoginRegister.scss";

const SesionLogin = () => {
  // Estados para email, password y loading (spinner)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Estado y dispatch para manejar auth global
  const { state, dispatch } = useAuth();
  const navigate = useNavigate();

  // Si ya está autenticado, redirige al home
  if (state.isAuthenticated) {
    return <Navigate to="/" />;
  }

  // Función que simula login (con retraso) y luego actualiza contexto y redirige
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      dispatch({ type: "LOGIN", payload: { email } }); // Actualiza contexto con email
      setLoading(false);
      navigate("/"); // Redirige a home
    }, 2000);
  };

  return (
    <div className="auth-overlay">
      <div className="auth-container">
        {loading ? (
          // Muestra spinner mientras carga
          <SesionLoadingSpinner />
        ) : (
          // Formulario de login
          <div className="auth-content">
            {/* Logo superior */}
            <img
              className="auth-image top-image"
              src="/img/02-logos/logo1.png"
              alt="Arcade Logo"
            />
            {/* Formulario con inputs controlados */}
            <form onSubmit={handleLogin} className="auth-form">
              <h2>Login</h2>
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
              <button type="submit">Login</button>
              <hr />
              {/* Links para registrar o ingresar como invitado */}
              <div className="auth-links">
                <p>
                  Para Registrarte, <a href="/register">ingresa aquí.</a>
                </p>
                <hr />
                <p>
                  Para ingresar como Invitado,{" "}
                  <a href="/submit">Ingresa aquí.</a>
                </p>
              </div>
            </form>
            {/* Imagen inferior decorativa */}
            <img
              className="auth-image bottom-image"
              src="/img/05-img-costados-larga/4.png"
              alt="Retro servicio"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SesionLogin;
