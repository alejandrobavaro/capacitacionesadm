import React from "react";
import Slider from "react-slick";
import "../assets/scss/_03-Componentes/_MainHero.scss";

const MainHero = () => {
  const images = [
    "/img/04-img-banners/hero1.png",
   "/img/04-img-banners/hero2.png",
   "/img/04-img-banners/hero3.png"
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
    <section className="mainHero">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="heroSlide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default MainHero;
