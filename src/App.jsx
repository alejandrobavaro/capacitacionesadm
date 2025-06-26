import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//------------ESTILOS--------------//
import "./assets/scss/_01-General/_BodyIndexApp.scss";
import "./assets/scss/_01-General/_Toastify.scss";

//------------HEADER--------------//
import Header from "./componentes/Header";
//-----------HOME - MAIN-----------------//
import MainContent from "./componentes/MainContent";
import MainWhatsappIcon from "./componentes/MainWhatsappIcon";
import MainPublicidadSlider from "./componentes/MainPublicidadSlider";
//--------------FOOTER----------------//
import Footer from "./componentes/Footer";
//-----------CONTACTO-----------------//
import ContactoLogoRedes from "./componentes/ContactoLogoRedes";
import ContactoFormularioSlider from "./componentes/ContactoFormularioSlider";
//-----------DATA------------//
import Clientes from "./componentes/Clientes";
//-----------LOGIN-LOGOUT-REGISTRO-----------------//
import SesionRegister from "./componentes/SesionRegistrate";
import SesionLogout from "./componentes/SesionLogout";
import SesionLogin from "./componentes/SesionLogin";
//-------------------APLICA-----------------//
import CursosListado1 from "./componentes/CursosListado1";
import Curso2 from "./componentes/Curso3";
import Curso3 from "./componentes/Curso2";
import Curso1 from "./componentes/Curso1";
//------------------------SERVICIO----------------------------//
import Servicio from "./componentes/Servicio";

//----------------------NUEVOS-----------------------//
import AreaPrivada from "./componentes/AreaPrivada";
import PreguntasFrecuentes from "./componentes/PreguntasFrecuentes";
import Testimonios from "./componentes/Testimonios";

function App() {
  return (
    <Router>
      <Header />

      <div className="main-content">
        <div className="content centered">
          <Routes>
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
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/servicio" element={<Servicio />} />

            <Route path="/area-privada" element={<AreaPrivada />} />
            <Route path="/faq" element={<PreguntasFrecuentes />} />
            <Route path="/testimonios" element={<Testimonios />} />

            <Route path="/CursosListado1" element={<CursosListado1 />} />
            <Route path="/CursosListado1/1" element={<Curso2 />} />
            <Route path="/CursosListado1/2" element={<Curso3 />} />
            <Route path="/CursosListado1/3" element={<Curso1 />} />
          </Routes>
        </div>
      </div>

      <hr className="border border-0 opacity-20" />
      <MainPublicidadSlider />
      <Footer />
      <MainWhatsappIcon />
    </Router>
  );
}

export default App;
