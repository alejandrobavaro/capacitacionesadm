// MainContent.jsx
import React from "react";
import MainHero from "./MainHero";
import MainGaleriaHome from "./MainGaleriaHome";
import CursosListado1 from "./CursosListado1";


import "../assets/scss/_03-Componentes/_MainContent.scss";

const MainContent = () => {
  return (
    <main className="MainContentContainer">
        <MainHero />
         <CursosListado1 />

          <MainGaleriaHome />

      
     
    </main>
  );
};

export default MainContent;