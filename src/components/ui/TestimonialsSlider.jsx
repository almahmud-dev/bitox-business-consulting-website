// TestimonialsSlider.jsx
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
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
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      className="mySwiper"
    >
      {testimonialsData.map((item, index) => (
        <SwiperSlide key={index}>
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
      ))}
    </Swiper>
  );
};

export default TestimonialsSlider;