import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/SesionAuthContext";
import { BsFillPersonPlusFill, BsBoxArrowRight, BsList } from "react-icons/bs";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../assets/scss/_03-Componentes/_Header.scss";

const Header = () => {
  const { state, dispatch } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="header encabezado">
      <Navbar expand="lg" className="navbar">
        <Container>
          {/* Logo y menú hamburguesa */}
          <Navbar.Brand as={Link} to="/" className="logo-container">
            <img src="../../img/02-logos/logo1.png" alt="Logo" className="logoHeader" />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <BsList className="menu-icon" onClick={handleToggleMobileMenu} />
          </Navbar.Toggle>

          {/* Menú principal */}
          <Navbar.Collapse id="basic-navbar-nav" className={`navbar-collapse ${isMobileMenuOpen ? "show" : ""}`}>
            <Nav className="ml-auto navbar-nav">
              <Nav.Link as={Link} to="/" onClick={() => setIsMobileMenuOpen(false)}>Inicio</Nav.Link>

              <Nav.Link as={Link} to="/CursosListadoMantenimiento" onClick={() => setIsMobileMenuOpen(false)}>Cursos Mantenimiento</Nav.Link>

 <Nav.Link as={Link} to="/CursosListado2" onClick={() => setIsMobileMenuOpen(false)}>Cursos Porteria</Nav.Link>

 <Nav.Link as={Link} to="/CursosListado3" onClick={() => setIsMobileMenuOpen(false)}>Cursos Expensas</Nav.Link>

 <Nav.Link as={Link} to="/CursosListado4" onClick={() => setIsMobileMenuOpen(false)}>Cursos Financieros</Nav.Link>

 <Nav.Link as={Link} to="/CursosListado4" onClick={() => setIsMobileMenuOpen(false)}>Cursos Legales</Nav.Link>

              <Nav.Link as={Link} to="/contacto" onClick={() => setIsMobileMenuOpen(false)}>Contacto</Nav.Link>
            </Nav>

            {/* Botones de autenticación */}
            <Nav.Item className="auth-buttons-container">
              {state.isAuthenticated ? (
                <div className="auth-welcome-container">
                  <Link className="nav-linkHeader auth-link logout-link" to="/logout" onClick={() => {
                    dispatch({ type: "LOGOUT" });
                    setIsMobileMenuOpen(false);
                  }}>
                    <BsBoxArrowRight className="auth-icon" />
                  </Link>
                </div>
              ) : (
                <Link className="nav-linkHeader auth-link" to="/login">
                  <BsFillPersonPlusFill className="auth-icon" />
                </Link>
              )}
            </Nav.Item>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;