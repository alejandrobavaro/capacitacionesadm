import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// ------------------------------------------
// SECCIÓN 1: IMPORTACIÓN DE ESTILOS GLOBALES
// ------------------------------------------
import "./assets/scss/_01-General/_App.scss";


// ------------------------------------------
// SECCIÓN 2: IMPORTACIÓN DE COMPONENTES PRINCIPALES
// ------------------------------------------
import Header from "./componentes/Header";
import MainContent from "./componentes/MainContent";
import MainWhatsappIcon from "./componentes/MainWhatsappIcon";
import MainPublicidadSlider from "./componentes/MainPublicidadSlider";
import Footer from "./componentes/Footer";

// ------------------------------------------
// SECCIÓN 3: IMPORTACIÓN DE COMPONENTES DE CONTACTO
// ------------------------------------------
import ContactoLogoRedes from "./componentes/ContactoLogoRedes";
import ContactoFormularioSlider from "./componentes/ContactoFormularioSlider";

// ------------------------------------------
// SECCIÓN 4: IMPORTACIÓN DE COMPONENTES DE SESIÓN
// ------------------------------------------
import SesionRegister from "./componentes/SesionRegistrate";
import SesionLogout from "./componentes/SesionLogout";
import SesionLogin from "./componentes/SesionLogin";

// ------------------------------------------
// SECCIÓN 5: IMPORTACIÓN DE COMPONENTES DE CURSOS
// ------------------------------------------
import CursosListadoMantenimiento from "./componentes/CursosListadoMantenimiento";
import CursoDetalle from "./componentes/CursoDetalle";


// ------------------------------------------
// SECCIÓN 9: COMPONENTE PRINCIPAL DE LA APLICACIÓN
// ------------------------------------------
function App() {
  return (
    <Router>
      {/* ------------------------------------------
          SECCIÓN 9.1: HEADER (PRESENTE EN TODAS LAS PÁGINAS)
          ------------------------------------------ */}
      <Header />

      {/* ------------------------------------------
          SECCIÓN 9.2: CONTENEDOR PRINCIPAL DEL CONTENIDO DINÁMICO
          ------------------------------------------ */}
      <div className="main-content">
        <div className="content centered">
          <Routes>
            {/* ------------------------------------------
                SECCIÓN 9.2.1: RUTAS PÚBLICAS
                ------------------------------------------ */}
            <Route path="/login" element={<SesionLogin />} />
            <Route path="/register" element={<SesionRegister />} />
            <Route path="/logout" element={<SesionLogout />} />
            <Route path="/" element={<MainContent />} />
            <Route
              path="/contacto"
              element={
                <>
                  <ContactoLogoRedes />
                  <ContactoFormularioSlider />
                </>
              }
            />

            {/* ------------------------------------------
                SECCIÓN 9.2.4: RUTAS DE CURSOS
                ------------------------------------------ */}
            <Route path="/CursosListadoMantenimiento" element={<CursosListadoMantenimiento />} />
            <Route path="/CursosListadoMantenimiento/:id" element={<CursoDetalle />} />
          </Routes>
        </div>
      </div>

      {/* ------------------------------------------
          SECCIÓN 9.3: SEPARADOR VISUAL
          ------------------------------------------ */}
      <hr className="border border-0 opacity-20" />
      
      {/* ------------------------------------------
          SECCIÓN 9.4: COMPONENTES FIJOS EN TODAS LAS PÁGINAS
          ------------------------------------------ */}
      <MainPublicidadSlider />
      <Footer />
      <MainWhatsappIcon />
    </Router>
  );
}

export default App;