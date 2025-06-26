import React from "react";
import Slider from "react-slick";
import "../assets/scss/_03-Componentes/_MainContent.scss";

function MainContent() {
  const images = [
    "./img/04-img-banners/banner1.png",
    "./img/04-img-banners/banner2.png",
    "./img/04-img-banners/banner3.png",
    "./img/04-img-banners/banner4.png",
    "./img/04-img-banners/banner5.png",
    "./img/04-img-banners/banner6.png",
    "./img/04-img-banners/banner7.png",
    "./img/04-img-banners/banner8.png",
    "./img/04-img-banners/banner9.png"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <main className="mainContent">
      {/* Sección de Noticias y Artículos */}
      <div className="mainContentContainer">
        <section className="newsSection">
          <h2 className="h2Titulo">Últimas Novedades</h2>
          <div className="newsRow">
            <div className="gridItem newsItem">
              <div className="newsText">
                <h3 className="newsTitle">Nueva colección</h3>
                <img
                  src="../../img/05-img-costados-larga/1.jpeg"
                  alt="Noticia 1"
                />
                <p className="newsDescription">
                  Presentamos la nueva colección Otoño-Invierno, con diseños que combinan estilo y comodidad.
                  Esta temporada trae tejidos cálidos, colores tierra y accesorios únicos.
                </p>
                <img
                  src="../../img/05-img-costados-larga/17.jpeg"
                  alt="Noticia 1"
                />
                <p className="newsDetails">
                  Fecha de lanzamiento: Octubre 2024 | Disponible en tiendas y online
                </p>
              </div>
            </div>

            <div className="gridItem newsItem">
              <div className="newsText">
                <h3 className="newsTitle">
                  Crea tu propio estilo
                </h3>
                <img
                  src="../../img/05-img-costados-larga/23.jpeg"
                  alt="Noticia 2"
                />
                <p className="newsDescription">
                  Ahora puedes personalizar tus prendas favoritas con nuestro nuevo servicio online.
                  Elige colores, estampados y detalles exclusivos para hacerlas únicas.
                </p>

                <img
                  src="../../img/05-img-costados-larga/3.jpeg"
                  alt="Noticia 2"
                />
                <p className="newsDetails">
                  ¡Descubre cómo personalizar tus prendas hoy mismo en nuestra plataforma!
                </p>
              </div>
            </div>

            <div className="gridItem newsItem">
              <div className="newsText">
                <h3 className="newsTitle">Eventos Exclusivos</h3>
                <img
                  src="../../img/05-img-costados-larga/24.jpeg"
                  alt="Noticia 3"
                />
                <p className="newsDescription">
                  Las marcas más prestigiosas se reúnen en un evento exclusivo para presentar
                  sus últimas colecciones. Desde alta costura hasta streetwear, ¡no te lo pierdas!
                </p>
                <img
                  src="../../img/05-img-costados-larga/4.jpeg"
                  alt="Noticia 3"
                />
                <p className="newsDetails">
                  Sigue el evento en vivo y obtén acceso a descuentos y productos exclusivos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Suscripción */}
        <section className="subscriptionSection">
          <div className="subscriptionItem">
            <img
              className="imagenSuscripcion"
              src="../../img/05-img-costados-larga/26.jpeg"
              alt="Moda"
            />
            <h2 className="h2Titulo">Suscríbete a nuestras Ofertas y Tendencias</h2>

            <button className="botonEnviar">Suscribirse</button>
          </div>
        </section>

        {/* Sección de Publicidades */}
        <section className="adSection">
          <h2 className="h2Titulo">Ofertas Exclusivas</h2>
          <div className="adRow">
            <div className="gridItem adItem">
              <img
                src="../../img/05-img-costados-larga/5.jpeg"
                alt="Anuncio 1"
              />
              <p className="adDescription">
                ¡Hasta un 50% de descuento en nuestra colección de verano! Aprovecha las últimas rebajas
                y luce las tendencias del año.
              </p>
            </div>

            <div className="gridItem adItem">
              <img
                src="../../img/05-img-costados-larga/6.jpeg"
                alt="Anuncio 2"
              />
              <p className="adDescription">
                Descubre nuestra nueva línea de accesorios personalizados: bolsos, carteras y mucho más
                para completar tu look con estilo.
              </p>
            </div>

            <div className="gridItem adItem">
              <img
                src="../../img/05-img-costados-larga/7.jpeg"
                alt="Anuncio 3"
              />
              <p className="adDescription">
                ¡Promoción especial para nuevos clientes! Regístrate hoy y recibe un 20% de descuento en tu primera compra.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de Torneos y Jugadores (adaptada a moda) */}
        <section className="tournamentSection">
          <h2 className="h2Titulo">Perfiles de Diseñadores</h2>
          <div className="tournamentRow">
            <div className="gridItem tournamentItem">
              <div className="tournamentText">
                <h3 className="tournamentTitle">
                  Semana Internacional de la Moda
                </h3>
                <img
                  src="../../img/05-img-costados-larga/2.jpeg"
                  alt="Desfile 1"
                />
                <p className="tournamentDescription">
                  Los diseñadores más influyentes presentan sus colecciones en la Semana Internacional de la Moda. 
                  ¡Prepárate para ver las tendencias del próximo año!
                </p>
              </div>
            </div>

            <div className="gridItem tournamentItem">
              <div className="tournamentText">
                <h3 className="tournamentTitle">
                  Perfil del Diseñador: Sarah Lee
                </h3>
                <img
                  src="../../img/05-img-costados-larga/9.jpeg"
                  alt="Diseñador"
                />
                <p className="tournamentDescription">
                  Sarah Lee ha revolucionado el mundo de la moda con sus diseños atrevidos y sostenibles.
                  Descubre cómo esta diseñadora emergente está cambiando las reglas del servicio.
                </p>
              </div>
            </div>

            <div className="gridItem tournamentItem">
              <div className="tournamentText">
                <h3 className="tournamentTitle">
                  Evento de Diseño y Arte 2024
                </h3>
                <img
                  src="../../img/05-img-costados-larga/10.jpeg"
                  alt="Desfile 2"
                />
                <p className="tournamentDescription">
                  En este evento, los diseñadores muestran cómo integrar la sostenibilidad en sus colecciones. 
                  ¡Moda y responsabilidad social van de la mano!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de servicio y CursosListado1 (adaptada a moda y promociones) */}
        <section className="servicioSection">
          <h2 className="h2Titulo">Promociones y Descuentos Exclusivos</h2>
          <div className="servicioRow">
            <div className="gridItem servicioItem">
              <div className="servicioText">
                <h3 className="servicioTitle">Nuevas Ideas</h3>
                <img
                  src="../../img/05-img-costados-larga/11.jpeg"
                  alt="Oferta 1"
                />
                <p className="servicioDescription">
                  Descubre las últimas ofertas en ropa de temporada. Desde abrigos hasta accesorios, 
                  ¡disfruta de descuentos exclusivos por tiempo limitado!
                </p>
              </div>
            </div>

            <div className="gridItem servicioItem">
              <div className="servicioText">
                <h3 className="servicioTitle">
                  Promoción Arte Alternativo
                </h3>
                <img
                  src="../../img/05-img-costados-larga/16.jpeg"
                  alt="Oferta 2"
                />
                <p className="servicioDescription">
                  ¡No te pierdas nuestra gran promoción de fin de temporada! Hasta un 70% de descuento en productos seleccionados.
                </p>
              </div>
            </div>

            <div className="gridItem servicioItem">
              <div className="servicioText">
                <h3 className="servicioTitle">Premios Especiales para Clientes</h3>
                <img
                  src="../../img/05-img-costados-larga/13.jpeg"
                  alt="Premio"
                />
                <p className="servicioDescription">
                  Participa en nuestras promociones especiales y gana premios exclusivos. ¡Es tu oportunidad de llevarte productos de lujo a un precio increíble!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Slider de Imágenes */}
      {/* <div className="carouselContainer">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carouselItem">
              <img src={image} alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div> */}
    </main>
  );
}

export default MainContent;
