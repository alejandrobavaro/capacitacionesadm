import React from "react";
import MainHero from "./MainHero";
import MainGaleriaHome from "./MainGaleriaHome";
import "../assets/scss/_03-Componentes/_ContactoLogoRedes.scss";

const ContactoLogoRedes = () => {
  return (
    <div className="contacto-wrapper">
      <MainHero />

      <div className="gridPadreContacto1">
        <div className="contact-logo-rede-container">
          
          {/* LOGO */}
          <div className="logo-column">
            <a href="#">
              <img
                alt="logo institucional"
                className="logo-secondary"
                src="/img/02-logos/logo1.png"
              />
            </a>
          </div>

          {/* ÍCONOS DE CONTACTO */}
          <div className="contact-icons">
            <div className="contact-item">
              <a
                href="https://www.facebook.com/alegondramusic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook" /> Facebook
              </a>
            </div>
            <div className="contact-item">
              <a
                href="https://www.instagram.com/chulusservicios/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram" /> Instagram
              </a>
            </div>
            <div className="contact-item">
              <a
                href="https://www.youtube.com/channel/UCBhJkysp3SnHU1tR3qAA5pQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-youtube" /> YouTube
              </a>
            </div>
            <div className="contact-item">
              <a
                href="mailto:bavaroalejandro@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-envelope" /> Enviar un mail
              </a>
            </div>

            {/* IMAGEN EXTRA */}
            <div className="contact-image-container">
              <img
                alt="imagen adicional"
                className="contact-image"
                src="/img/04-img-banners/logosbanner1.png"
              />
            </div>
          </div>

        </div>
      </div>

      <MainGaleriaHome />
      <hr className="transparent-hr" />
    </div>
  );
};

export default ContactoLogoRedes;
