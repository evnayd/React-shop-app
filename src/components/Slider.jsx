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
        className="mySwiper h-80"
        loop={true}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
      >
        <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-1.jpg"
        alt="colors" />
          </SwiperSlide>
        <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg"
         alt="colors" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg"
         alt="colors" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg"
         alt="colors" />
        </SwiperSlide>
      </Swiper>
    )
}

export default Slider;