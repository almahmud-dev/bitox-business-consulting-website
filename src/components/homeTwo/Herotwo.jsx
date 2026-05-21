"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import ButtonThree from "../ui/ButtonThree";
import allImages from "../helper/imageProvider";
import Link from "next/link";

const PLUS_POSITIONS = [
  // Top row
  "top-[30px] left-[75px]",
  "top-[30px] left-1/2 -translate-x-1/2",
  "top-[30px] right-[75px]",
  // Bottom row
  "bottom-[30px] left-[75px]",
  "bottom-[30px] left-1/2 -translate-x-1/2",
  "bottom-[30px] right-[75px]",
];

const SERVICES = [
  "Business Consultancy",
  "Financial Planning",
  "Vat & Tax Consultancy",
  "Strategic Business Advisory",
  "Sales & CRM Strategy",
];

const Herotwo = () => {
  return (
    <section className="relative h-[420px] sm:h-[600px] md:h-[750px] xl:h-[950px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={allImages.home2heroBanner}
        alt="Hero Background"
        sizes="100vw"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Vertical grid lines */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div className="max-w-[1770px] mx-auto h-full px-4 sm:px-[75px] relative">
          {/* Left line */}
          <div className="absolute left-4 sm:left-[75px] top-0 bottom-0 w-px bg-white/15" />
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/15" />
          {/* Right line */}
          <div className="absolute right-4 sm:right-[75px] top-0 bottom-0 w-px bg-white/15" />
        </div>
      </div>

      {/* Max width container */}
      <div className="relative z-10 max-w-[1770px] mx-auto h-full px-4 sm:px-[75px]">
        {/* Plus icons — hide on mobile */}
        {PLUS_POSITIONS.map((position, index) => (
          <Plus
            key={index}
            size={13}
            strokeWidth={2}
            className={`absolute text-white/80 hidden sm:block ${position}`}
          />
        ))}

        {/* Est. year — top right */}
        <span
          className="
            absolute top-[16px] sm:top-[30px]
            right-[16px] sm:right-[82px]
            text-white leading-none tracking-tight
            text-[18px] sm:text-[22px] md:text-[38px] lg:text-[60px] xl:text-[90px]
          "
        >
          (Est. 2010)
        </span>

        {/* Services list — only md and above */}
        <div className="absolute top-[32%] xl:top-[38%] right-[90px] lg:right-[100px] xl:right-[150px] text-left space-y-[6px]">
          {SERVICES.map((service, i) => (
            <p
              key={i}
              className="text-white text-[clamp(10px,1.1vw,15px)] font-light leading-snug tracking-wide"
            >
              {service}
            </p>
          ))}
        </div>

        {/* CONSULTANT — top left */}
        <h1
          className="
            absolute
            left-4 sm:left-[75px]
            font-bold text-white uppercase leading-none tracking-tighter
          "
          style={{
            fontSize: "clamp(36px, 8.5vw, 200px)",
            top: "clamp(40px, 8vw, 160px)",
          }}
        >
          CONSULTANT
        </h1>

        {/* AGENCY_ — bottom right */}
        <div
          className="
            absolute
            right-4 sm:right-[75px]
            font-bold text-white uppercase leading-none tracking-tighter
            flex items-baseline gap-2 lg:gap-3
          "
          style={{
            fontSize: "clamp(36px, 8.5vw, 200px)",
            bottom: "clamp(100px, 18vw, 200px)",
          }}
        >
          <span>AGENCY</span>
          <span
            className="block bg-white"
            style={{
              width: "clamp(20px, 6vw, 152px)",
              height: "clamp(3px, 0.8vw, 28px)",
              marginBottom: "0.08em",
            }}
          />
        </div>

        {/* Tagline + CTA — bottom left */}
        <div
          className="absolute left-4 sm:left-[75px] flex flex-col gap-2 sm:gap-4"
          style={{ bottom: "clamp(16px, 5vw, 100px)" }}
        >
          <p
            className="text-white font-bold leading-snug max-w-[220px] xs:max-w-[280px] sm:max-w-[360px] md:max-w-[500px] lg:max-w-[685px]"
            style={{ fontSize: "clamp(12px, 2.2vw, 60px)" }}
          >
            Transforming your vision
            <br />
            into measurable success
          </p>

          <div className="self-start flex items-center gap-2 bg-bg-secondaryOne text-primary font-medium rounded-[90px] px-4 py-2 sm:px-7 sm:py-4 cursor-pointer hover:bg-white/90 transition-colors group">
            <Link href={"/contact"}>
              <ButtonThree
                frontText="Get started now"
                backText="Get started now"
                backgroundColor="transparent"
                textColor="#02090F"
                fontSize={14}
                paddingTop={0}
                paddingBottom={0}
                paddingLeft={0}
                paddingRight={0}
              />
            </Link>
            <span className="inline-block transition-transform group-hover:translate-x-1">
              <svg width="9" height="12" viewBox="0 0 9 12" fill="none">
                <path
                  d="M0.77735 0.0848229C0.445073 -0.136695 0 0.1015 0 0.500848V10.6323C0 11.0317 0.445073 11.2699 0.77735 11.0484L8.37596 5.98261C8.67283 5.7847 8.67283 5.34848 8.37596 5.15056L0.77735 0.0848229Z"
                  fill="#02090F"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herotwo;
