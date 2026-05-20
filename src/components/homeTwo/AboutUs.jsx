"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import ButtonThree from "../ui/ButtonThree";
import Link from "next/link";

const sidebarItems = [
  { text: "$200M+ VALUE DELIVERED AT SCALE.", hasArrow: true },
  { text: "100% CLIENTS TRUST", hasArrow: false },
  { text: "$200M+ VALUE DELIVERED AT SCALE.", hasArrow: true },
  { text: "100% CLIENTS TRUST", hasArrow: false },
];

export default function AboutSection() {
  return (
    <section className="w-full overflow-hidden bg-white px-[3px] lg:px-0">
      <Container size="2xl" className="px-0!">
        <div className="flex flex-col  lg:grid lg:grid-cols-[minmax(0,830px)_1fr] min-h-[500px] lg:min-h-[650px] xl:min-h-[700px]">
          {/* Left: Hero Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-auto lg:min-h-[600px] overflow-hidden">
            <Image
              src="/images/home2_aboutus/about1.png"
              alt="Team collaboration"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 830px"
            />
            <div
              className="
              absolute top-0 right-0   bg-secondary
              w-[28px] sm:w-[34px] md:w-[40px] lg:w-[46px] xl:w-[52px]
            "
            >
              <div className="animate-marquee-vertical">
                {[...sidebarItems, ...sidebarItems, ...sidebarItems].map(
                  (item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-[6px] sm:gap-2 md:gap-3 py-3 sm:py-4 md:py-5 lg:py-6 px-[5px] sm:px-[7px] md:px-[9px] lg:px-[11px]"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                    >
                      <span className="text-white font-bold uppercase tracking-widest whitespace-nowrap text-[8px] sm:text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px]">
                        {item.text}
                      </span>
                      {item.hasArrow && (
                        <span className="text-white font-bold flex-shrink-0 text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px]">
                          →
                        </span>
                      )}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center  px-5 sm:px-8 lg:px-10 xl:px-12 py-10 md:py-14 lg:py-16 gap-5">
            {/* Eyebrow */}
            <div className="mb-4 lg:mb-7.5">
              <span className="inline-flex items-center border border-black/10 rounded-sm py-1 px-3.75 text-xs font-bold uppercase tracking-widest">
                about us
              </span>
            </div>

            {/* Heading, Body, CTA */}
            <div className="flex flex-col gap-4 lg:gap-5">
              <h2
                className="text-2xl sm:text-3xl md:text-[34px] xl:text-[42px] font-bold underline underline-offset-4 max-w-[770px] text-primary leading-tight"
                style={{ fontFamily: "'Creato Display', sans-serif" }}
              >
                With 16+ years of experience, the team has a leader in digital
                design and innovations
              </h2>

              <p className="text-sm sm:text-base para-lg text-tarnary leading-relaxed max-w-[663px]">
                Enterprise partnerships, built on clarity and craft, are the
                foundation of sustainable growth and long term success. By
                aligning strategic goals &amp; thoughtful executions we can
                create meaningful collaborations that drives innovation &amp;
                measurable value of strong partnerships enable business to
                leverage shared expertise expand market opportunities, and
                respond effectively.
              </p>

              <div className="self-start flex items-center gap-2 border border-primary text-primary text-sm sm:text-base font-medium rounded-[90px] px-4 py-2 sm:px-7.5 sm:py-4 cursor-pointer hover:bg-white/90 transition-colors group">
                <Link href={"/contact"} className="inline-block">
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
                  <svg
                    width="9"
                    height="12"
                    viewBox="0 0 9 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0.77735 0.0848229C0.445073 -0.136695 0 0.1015 0 0.500848V10.6323C0 11.0317 0.445073 11.2699 0.77735 11.0484L8.37596 5.98261C8.67283 5.7847 8.67283 5.34848 8.37596 5.15056L0.77735 0.0848229Z"
                      fill="#02090F"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Bottom Thumbnail */}
            {/* Bottom Thumbnail */}
            <div className="mt-6 lg:mt-10 flex">
              <div
                className="ml-auto relative 
                w-full h-[180px] 
                sm:w-[420px] sm:h-[220px] 
                md:w-[520px] md:h-[280px] 
                lg:w-[340px] lg:h-[200px] 
                xl:w-[425px] xl:h-[227px] 
                shrink-0 overflow-hidden rounded-sm shadow-md"
              >
                <Image
                  src="/images/home2_aboutus/about2.png"
                  alt="Team at work"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 420px, (max-width: 1024px) 520px, 425px"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
