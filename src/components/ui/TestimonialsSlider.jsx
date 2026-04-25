"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { testimonialsData } from "../helper/homeOnehelper";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSlider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={0}
      freeMode={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      className="mySwiper "
    >
      {testimonialsData.map((item, index) => {
        return (
          <SwiperSlide key={index} className="">
            <TestimonialCard
              quotes={item.quote}
              name={item.name}
              role={item.role}
              image={item.image}
              tashNumOne={item.stats[0].percentage}
              tashLabelOne={item.stats[0].label}
              tashLabelTwo={item.stats[1].label}
              tashNumTwo={item.stats[1].percentage}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialsSlider;
