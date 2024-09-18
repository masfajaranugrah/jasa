import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import ClientLogo01 from "../../assets/img/clients/laravel.svg";
import ClientLogo02 from "../../assets/img/clients/js.png";
import ClientLogo03 from "../../assets/img/clients/node-js.png";
import ClientLogo04 from "../../assets/img/clients/php.png";
import ClientLogo05 from "../../assets/img/clients/physics.png";
 

export default function ClientSlider() {
  const settings = {
    infinite: true,       // Looping slider
    speed: 500,           // Kecepatan transisi (ms)
    slidesToShow: 6,      // Jumlah slide yang tampil
    slidesToScroll: 3,    // Jumlah slide yang digeser setiap kali scroll
    arrows: false,        // Menyembunyikan panah navigasi
    autoplay: true,       // Memungkinkan autoplay
    autoplaySpeed: 2000,  // Interval autoplay (ms)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo01} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo02} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo03} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo04} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo05} alt="client logo" />
        </LogoWrapper>
       
        
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 20px;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;

const ImgStyle = styled.img`
  width: 100px;
  height: 100%;
  padding: 1%;
`;
