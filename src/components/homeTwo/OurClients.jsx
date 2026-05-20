"use client";
import Image from "next/image";
import { CLIENTS } from "../helper/helpers";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

function OurClients() {
  return (
    <section className="bg-bg-secondaryOne px-2 py-20 xl:py-30">
      {/* Header */}

      <div className="relative mb-10 lg:mb-30">
        {/* Badge + Heading — same left alignment */}
        <div className="text-center md:text-left md:pl-40 xl:pl-137.5">
          {/* Badge */}
          <div className="mb-7.5">
            <span className="inline-flex items-center border border-black/10 rounded-sm py-1 px-3.75 text-xs font-bold uppercase tracking-widest">
              Our Clients
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-[20px] md:text-[38px] xl:text-[42px] font-bold underline underline-offset-4 max-w-[1005px] text-primary"
            style={{ fontFamily: "'Creato Display', sans-serif" }}
          >
            Enterprise partnerships, built on clarity and craft, driving
            scalable growth and long-term strategic success
          </h2>
        </div>
      </div>
      {/* Cards grid — full width */}

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
        {CLIENTS.map((client) => (
          <SwiperSlide key={client.id}>
            <div className="flex flex-col">
              {/* Image box */}
              <div className="border border-black/10 bg-white flex flex-col p-4 rounded-[10px] h-45 sm:h-50">
                <span className="text-[12px] text-center text-primary">
                  ({client.id})
                </span>
                <div className="flex items-center justify-center flex-1">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={50}
                    className="object-contain max-h-13.25"
                    style={{ width: "auto" }}
                  />
                </div>
              </div>

              {/* Text outside */}
              <div className="pt-4 px-1 text-center">
                <p className="font-bold text-sm">{client.name}</p>
                <p className="text-xs text-black/50 mt-1 leading-snug">
                  {client.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
export default OurClients;
