import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SmoothSliderStyled } from "./SmoothSliderStyled";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "CLOUD GAMING",
    image: "home-product-swatch-cloud-1.webp",
    btn: "CLOUD",
  },
  {
    title: "GAMING MICE",
    image: "home-product-swatch-2.webp",
    btn: "MICE",
  },
  {
    title: "GAMING MOUSE PADS",
    image: "home-product-swatch-10.webp",
    btn: "MOUSE PADS",
  },
  {
    title: "GAMING KEYBOARDS",
    image: "home-product-swatch-1.webp",
    btn: "KEYBOARDS",
  },
  {
    title: "GAMING AUDIO",
    image: "home-product-swatch-3.webp",
    btn: "AUDIO",
  },
  {
    title: "STREAMING GEAR",
    image: "home-product-swatch-4.webp",
    btn: "STREAMING GEAR",
  },
  {
    title: "DRIVING",
    image: "prowheel4-swatch.webp",
    btn: "DRIVING GEAR",
  },
  {
    title: "SPACE",
    image: "home-product-swatch-7.webp",
    btn: "SPACE GEAR",
  },
  {
    title: "FLIGHT",
    image: "home-product-swatch-8.webp",
    btn: "FLIGHT GEAR",
  },
  {
    title: "FARM",
    image: "home-product-swatch-6.webp",
    btn: "FARM GEAR",
  },
  {
    title: "GAMEPADS",
    image: "home-product-swatch-9.webp",
    btn: "GAMEPADS",
  },
  {
    title: "FURNITURE",
    image: "vantum-chair-swatch3.webp",
    btn: "FURNITURE",
  },
];

const SmoothSlider = () => {
  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <SmoothSliderStyled>
      <Slider {...settings}>
        {menuItems.map((item) => (
          <Link
            to={`products/${item.title.replace(/\s/g, "-").toLowerCase()}`}
            className='slider-link'
          >
            <img
              src={require(`../../../images/AdvancedGearSlides/${item.image}`)}
              alt=''
            />
            <h3>{item.title}</h3>
            <span>SHOP {item.btn}</span>
          </Link>
        ))}
      </Slider>
    </SmoothSliderStyled>
  );
};

export default SmoothSlider;
