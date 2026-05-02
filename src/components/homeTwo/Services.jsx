"use client";

import { useState } from "react";
import Container from "../ui/Container";
import { Stack } from "../ui/Responsive";
import allImages from "../helper/imageProvider";
import Image from "next/image";
import { services } from "../helper/helpers";

// Image alda export
export const ServiceCardImage = ({ service, index }) => (
  <div className="w-full md:w-1/2 shrink-0">
    <Image
      src={allImages.home2Section[index].img}
      alt={service.title}
      className="w-full h-65 sm:h-85 md:h-[465px] object-cover md:rounded-tl-md md:rounded-bl-md transition-transform duration-300 transform-gpu"
    />
  </div>
);

// Content alda export
export const ServiceCardContent = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-10 md:py-15 transition-colors duration-300 cursor-pointer"
      style={{ backgroundColor: isHovered ? "#FF5101" : "#ffffff" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category label */}
      <p
        className="text-xs sm:text-sm mb-3 tracking-wide transition-colors duration-300"
        style={{ color: isHovered ? "rgba(255,255,255,0.8)" : "#6b7280" }}
      >
        {service.number} — {service.category}
      </p>

      {/* Title */}
      <h2
        className="text-2xl sm:text-3xl font-bold underline mb-4 transition-colors duration-300"
        style={{ color: isHovered ? "#ffffff" : "#111827" }}
      >
        {service.title}
      </h2>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-6 max-w-sm transition-colors duration-300"
        style={{ color: isHovered ? "rgba(255,255,255,0.9)" : "#4b5563" }}
      >
        {service.description}
      </p>

      {/* Feature List */}
      <ul className="space-y-2 flex flex-col items-start">
        {service.features.map((feature, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-sm transition-colors duration-300 border border-black/10 rounded-[90px] py-1 px-5"
            style={{ color: isHovered ? "#ffffff" : "#374151" }}
          >
            <span
              className="w-2 h-2 rounded-full shrink-0 transition-colors duration-300"
              style={{ backgroundColor: isHovered ? "#ffffff" : "#374151" }}
            />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Combined ServiceCard
export const ServiceCard = ({ service, index }) => (
  <div className="flex flex-col md:flex-row w-full">
    <ServiceCardImage service={service} index={index} />
    <ServiceCardContent service={service} />
  </div>
);

// Default export — gap nei
const Services = ({ targetValue = 0, lastValue = 3 }) => {
  return (
    <section className="w-full">
      <Container size="lg">
        <Stack gap="none">
          {services.slice(targetValue, lastValue).map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </Stack>
      </Container>
    </section>
  );
};

export default Services;
