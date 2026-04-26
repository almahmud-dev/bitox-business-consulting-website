"use client";

import Image from "next/image";
import allImages from "../helper/imageProvider";
import { featuresteam } from "../helper/helpers";

export default function OurTeamSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        
        {/* Left: Image - full bleed */}
        <div className="relative w-full h-full min-h-[420px] lg:min-h-[600px]">
          <Image
            src={allImages.home2ourteam}
            alt="Our team collaboration"
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="bg-black flex flex-col justify-center px-10 py-10 lg:py-30 lg:px-16 xl:px-20">
          {/* Tag */}
          <span className="inline-block mb-6 text-[13px] font-bold uppercase tracking-widest text-white border border-white/20 px-3 py-1 w-fit">
            Specialization
          </span>

          {/* Heading */}
          <h2
            className="text-white font-bold text-[20px] md:text-[40px] mb-7 lg:mb-13"
          >
            Our team brings more than 16 years of expertise, leading the way
            in digital design
          </h2>

          {/* Features List */}
          <ul className="flex flex-col gap-8">
            {featuresteam.map((feature, i) => (
              <li key={i} className="flex gap-5 items-start group">
                <span
                  className="mt-1.5 shrink-0 w-5 h-0.5 bg-white/30 group-hover:bg-white transition-colors duration-300"
                  aria-hidden="true"
                />
                <div>
                  <h3
                    className="text-white font-bold mb-1"
                    style={{
                      fontSize: "clamp(18px, 1.2vw, 26px)",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-[#999999] text-[18px] leading-relaxed"
                  >
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
