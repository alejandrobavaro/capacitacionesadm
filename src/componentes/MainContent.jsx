// MainContent.jsx
import React from "react";
import MainHero from "./MainHero";
import MainGaleriaHome from "./MainGaleriaHome";
import MainNovedades from "./MainNovedades";
import MainTestimonios from "./MainTestimonios";
import MainPreguntasFrecuentes from "./MainPreguntasFrecuentes";
import MainPromociones from "./MainPromociones";
import "../assets/scss/_03-Componentes/_MainContent.scss";

const MainContent = () => {
  return (
    <main className="MainContentContainer">
      <MainHero />
      <MainGaleriaHome />
      {/* <MainNovedades /> */}
      {/* <MainTestimonios /> */}
      {/* <MainPreguntasFrecuentes /> */}
      {/* <MainPromociones /> */}
    </main>
  );
};

export default MainContent;