import React from "react";
import "../assets/scss/_03-Componentes/_Footer.scss";

function Footer() {
  return (
    <footer className="footer-container">

      <div className="footer-content">
        <div className="footer-column">
          <a href="#">
            <img
              className="footer-logo"
              src="../../img/02-logos/logo1.png"
              alt="Logo Izquierda"
            />
          </a>
        </div>

        <div className="footer-column">
          <nav className="social-links">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram" /> Instagram
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-youtube" /> YouTube
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook" /> Facebook
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter" /> X (Twitter)
            </a>
          </nav>
        </div>

        <div className="footer-column">
          <a href="#">
            <img
              className="footer-logo"
              src="../../img/02-logos/logo1.png"
              alt="Logo Derecha"
            />
          </a>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="trademarkFooter">
        <h3 className="firmaDev">
          <a
            href="https://alejandrobavaro.github.io/gondraworld-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-brilliance" /> Gondra World Dev <i className="bi bi-brilliance" />
          </a>
        </h3>
      </div>

    </footer>
  );
}

export default Footer;
