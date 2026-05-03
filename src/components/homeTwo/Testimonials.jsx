import React from "react";
import { FaStar } from "react-icons/fa";
import { BsPlayCircleFill } from "react-icons/bs";
import Image from "next/image";
import Container from "../ui/Container";
import { testimonials } from "../helper/helpers";

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} className="text-yellow-400 text-base" />
      ))}
    </div>
  );
}

function TestimonialCard({ item }) {
  if (item.type === "video") {
    return (
      <div className="bg-white rounded-md p-7 lg:py-11.5  lg:px-7.5 overflow-hidden shadow-sm border border-white flex flex-col">
        {/* Video Thumbnail */}
        <div className="relative w-full h-50 mb-5">
          <Image
            src={item.videoThumbnail}
            alt="Video thumbnail"
            fill
            className="object-cover"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <BsPlayCircleFill className="text-white text-5xl drop-shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200" />
          </div>
        </div>
        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-md overflow-hidden shrink-0">
            <Image
              src={item.authorImg}
              alt={item.authorName}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-bold text-primary text-sm leading-tight">
              {item.authorName}
            </p>
            <p className="text-tarnary text-xs">{item.authorRole}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-md py-11.25 px-7.5 shadow-sm border border-gray-100 flex flex-col gap-4">
      <StarRating count={item.rating} />
      <h3 className="font-bold text-primary text-[24px] leading-8.5 underline underline-offset-2 pr-7">
        {item.title}
      </h3>
      <p className="text-tarnary text-[15px] leading-5">
        {item.description}
      </p>
      {/* Author */}
      <div className="flex items-center gap-3 pt-2">
        <div className="relative w-12 h-12 rounded-md overflow-hidden shrink-0">
          <Image
            src={item.authorImg}
            alt={item.authorName}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-primary text-sm leading-tight">
            {item.authorName}
          </p>
          <p className="text-tarnary text-xs">{item.authorRole}</p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="py-10 lg:py-30 bg-bg-secondaryOne">
      <Container size="lg">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center border border-black/10 rounded-sm py-1 px-3.75 text-xs font-bold uppercase tracking-widest mb-5">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary underline underline-offset-4">
            Clients Feedback & Testimonials
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;