import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {  Pagination, Navigation } from "swiper";

const Slider = ( ) => {
    return (
    <Swiper
        spaceBetween={0}
        centeredSlides={true}
        pagination={{
        clickable: true}}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-96 hidden md:block"
        loop={true}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
      >
        <SwiperSlide>
        <img src={require("../img/background.jpeg")}
        alt="colors slider pic" />
          </SwiperSlide>
        <SwiperSlide>
        <img src={require("../img/background.jpeg")}
         alt="colors slider pic" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require("../img/background.jpeg")}
         alt="colors slider pic" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require("../img/background.jpeg")}
         alt="colors slider pic" />
        </SwiperSlide>
      </Swiper>
    )
}

export default Slider;