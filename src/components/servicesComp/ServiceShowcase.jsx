"use client";

import React from "react";
import Container from "../ui/Container";
import { ServiceCardImage, ServiceCardContent } from "../homeTwo/Services";
import { services } from "../helper/helpers";

const ServiceShowcase = () => {
  return (
    <section className="py-10 sm:py-16 md:py-20 lg:py-[120px]">
      <Container size="lg">
        {/* Header */}
        <div>
          <div className="flex justify-center mb-4 sm:mb-5 md:mb-[30px]">
            <span className="inline-flex items-center justify-center border border-black/10 rounded-sm py-1 px-3 sm:px-3.75 text-xs font-bold uppercase tracking-widest">
              Services
            </span>
          </div>
          <h2 className="text-center text-lg sm:text-[22px] md:text-[32px] xl:text-[42px] font-bold underline underline-offset-4 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-snug px-4 sm:px-0">
            Innovative Solutions That Drive Business Forward
          </h2>
        </div>

        {/*proti image and content alada gap and reuse */}
        <div>
          {services.slice(0, 4).map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row w-full pb-[30px]"
            >
              <ServiceCardImage service={service} index={index} />
              <ServiceCardContent service={service} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServiceShowcase;
