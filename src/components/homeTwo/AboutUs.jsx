"use client";

import Image from "next/image";
import { Grid } from "@/components/ui/Responsive";
import Container from "@/components/ui/Container";
import ButtonThree from "../ui/ButtonThree";

export default function AboutSection() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <Container size="2xl" className="!px-0">
        <Grid cols="830px_1fr" gap="none" align="stretch">
          {/* ── LEFT: Big Image */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/images/home2_aboutus/about1.png"
                alt="Team collaboration"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* ── RIGHT: Text Content */}
          <div className="flex flex-col justify-center px-6 md:px-8 lg:px-10 py-12 gap-5">
            {/* Eyebrow label */}
            <div className="mb-7.5">
              <span className="inline-flex items-center border border-black/10 rounded-[4px] py-1 px-[15px] text-xs font-bold uppercase tracking-widest">
                about us
              </span>
            </div>

            {/* h2, p, button — ekta div e */}
            <div className="flex flex-col gap-5">
              {/* Heading */}
              <h2
                className="text-[20px] md:text-[38px] xl:text-[42px] font-bold underline underline-offset-4 max-w-[770px] text-primary"
                style={{ fontFamily: "'Creato Display', sans-serif" }}
              >
                With 16+ years of experience, the team has a leader in digital
                design and innovations
              </h2>

              {/* Body text */}
              <p className="para-lg text-tarnary leading-relaxed max-w-[663px]">
                Enterprise partnerships, built on clarity and craft, are the
                foundation of sustainable growth and long term success. By
                aligning strategic goals &amp; thoughtful executions we can
                create meaningful collaborations that drives innovation &amp;
                measurable value of strong partnerships enable business to
                leverage shared expertise expand market opportunities, and
                respond effectively.
              </p>

              {/* CTA Button */}
              <div
                className="self-start flex items-center gap-2 border border-primary text-primary text-base font-medium rounded-[90px] px-4 py-2 sm:px-7.5 sm:py-5 cursor-pointer hover:bg-white/90 transition-colors group"
              >
                <ButtonThree
                  frontText="Get started now"
                  backText="Let's Talk."
                  backgroundColor="transparent"
                  textColor="#02090F"
                  fontSize={14}
                  paddingTop={0}
                  paddingBottom={0}
                  paddingLeft={0}
                  paddingRight={0}
                />
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

            {/* Small image */}
            <div className="mt-5 lg:mt-10 flex">
              <div className="ml-auto relative w-[160px] h-[110px] md:w-[425px] md:h-[227px] flex-shrink-0 overflow-hidden rounded-sm shadow-md">
                <Image
                  src="/images/home2_aboutus/about2.png"
                  alt="Team at work"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </Grid>
      </Container>
    </section>
  );
}
