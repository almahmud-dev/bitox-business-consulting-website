"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Container from "../ui/Container";
import allImages from "../helper/imageProvider";
import Image from "next/image";

const BrandLogos = () => {
  const { homeOneBrand } = allImages;

  return (
    <section className="pt-[30px] pb-[60px] md:pt-[40px] md:pb-[80px] xl:pt-[60px] xl:pb-[120px]">
      <Container size="2xl">
        <Swiper
          slidesPerView={7}
          spaceBetween={20}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 14,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 18,
            },
            1536: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          {homeOneBrand.map((items, index) => (
            <SwiperSlide key={index}>
              <div className="py-[20px] sm:py-[30px] md:py-[40px] lg:py-[50px] xl:py-[77px] bg-bg-secondaryTwo flex items-center justify-center">
                <Image
                  src={items.img}
                  alt={items.alt || "brand logo"}
                  width={120}
                  height={36}
                  className="h-[24px] w-auto sm:h-[28px] md:h-[32px] lg:h-[36px] object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default BrandLogos;