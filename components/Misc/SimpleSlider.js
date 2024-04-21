import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: ""}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "" }}
      onClick={onClick}
    />
//     <div className={className}   onClick={onClick}>
//       <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
// <circle cx="42" cy="42" r="41" stroke="#C1A479" stroke-width="2"/>
// <path d="M24.2929 41.2929C23.9024 41.6834 23.9024 42.3166 24.2929 42.7071L30.6569 49.0711C31.0474 49.4616 31.6805 49.4616 32.0711 49.0711C32.4616 48.6805 32.4616 48.0474 32.0711 47.6569L26.4142 42L32.0711 36.3431C32.4616 35.9526 32.4616 35.3195 32.0711 34.9289C31.6805 34.5384 31.0474 34.5384 30.6569 34.9289L24.2929 41.2929ZM61 41L25 41L25 43L61 43L61 41Z" fill="#C1A479"/>
// </svg>

//     </div>
  );
}

export default function SimpleSlider({
  children,
  dots,
  noOfSlides,
  autoPlay,
  speed,
  autoPlaySpeed,
  infinite,
  arrows,
  lgSlides,
}) {
  var settings = {
    dots: dots,
    infinite: infinite,
    speed: speed,
    slidesToShow: noOfSlides,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: arrows,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: autoPlay,
    speed: speed,
    autoplaySpeed: autoPlaySpeed,
    draggable: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
