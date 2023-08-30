import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Weather from "../../img/Weather.png";
import Portfolio1 from "../../img/Portfolio.png";
import HOC from "../../img/Tic-Toc.png";
import MusicApp from "../../img/CRUD.png";
import "swiper/css";
import { Link } from "react-scroll";

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* Heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>
      {/* Slider */}
      <Swiper
        spaceBetween={200}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a
            href="https://kevanshgopani.github.io/Live_Weather/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Weather} alt=""></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="Navbar" spy={true} smooth={true}>
            <img src={Portfolio1} alt=""></img>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://kevanshgopani.github.io/Tic-Tac-Toe/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={HOC} alt=""></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://github.com/KevanshGopani/CRUD-Operations"
            target="_blank"
            rel="noreferrer"
          >
            <img src={MusicApp} alt=""></img>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
