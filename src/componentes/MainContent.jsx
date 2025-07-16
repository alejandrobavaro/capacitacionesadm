import React from "react";
import CursosListadoMantenimiento from "./CursosListadoMantenimiento";
import MainGaleriaHome from "./MainGaleriaHome";
import "../assets/scss/_03-Componentes/_MainContent.scss";

const MainContent = () => {
  return (
    <main className="MainContentContainer">
      {/* Componente principal - Listado de cursos compacto */}
      <CursosListadoMantenimiento />
      
   
      <MainGaleriaHome />
    </main>
  );
};

export default MainContent;