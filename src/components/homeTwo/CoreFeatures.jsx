"use client";
import React from "react";
import Container from "../ui/Container";
import { Stack, Flex } from "../ui/Responsive";
import ButtonThree from "../ui/ButtonThree";
import { features } from "../helper/helpers";

const ArrowIcon = () => (
  <span className="inline-flex items-center shrink-0">
    {/* horizontal line */}
    <span className="block w-20 h-[1.5px] bg-primary" />
    {/* arrowhead */}
    <span
      className="block w-0 h-0"
      style={{
        borderTop: "4px solid transparent",
        borderBottom: "4px solid transparent",
        borderLeft: "7px solid #02090F",
      }}
    />
  </span>
);

const CoreFeatures = () => {
  return (
    <section className="py-[80px] bg-bg-secondaryOne">
      <Container size="lg">
        {/* ── Top row: badge + heading + button ── */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 mb-10">
          {/* Left: badge and h2 */}
          <Stack gap="sm" className="max-w-[674px] items-center sm:items-start">
            <span className="inline-flex items-center border border-black/15 rounded-[4px] py-1 px-[14px] text-[11px] font-bold uppercase tracking-[0.12em] text-primary w-fit">
              Core Features
            </span>
            <h2
              className="text-[25px] md:text-[38px] xl:text-[42px] font-bold underline underline-offset-[4px] text-primary leading-[1.15] text-center sm:text-left"
              style={{ fontFamily: "'Creato Display', sans-serif" }}
            >
              The core features we make it simple, powerful, and reliable.
            </h2>
          </Stack>

          {/* Right: Discover more button */}
          <div
            className="self-end mb-1.5 inline-flex items-center gap-2.5 border border-primary text-primary text-sm font-medium rounded-[90px] px-7 py-3.5 cursor-pointer hover:bg-black/5 transition-colors shrink-0 group"
            onClick={() => console.log("clicked")}
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

        {/* ── Top divider ── */}
        <hr className="border-t border-primary/10" />

        {/* ── Feature columns ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-10">
          {features.map((feature, i) => (
            <div
              key={feature.number}
              className={[
                "flex flex-col gap-0",
                // right border on all except last
                i < features.length - 1 ? "" : "",
                // left padding on all except first
                i > 0 ? "pl-8" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {/* Number */}
              <p className="text-[18px] font-bold text-primary mb-2.5">
                {feature.number}
              </p>

              {/* Arrow + Title */}
              <Flex gap="xs" align="center" className="mb-3.5">
                <ArrowIcon />
                <span
                  className="text-[18px] font-bold text-primary"
                  style={{ fontFamily: "'Creato Display', sans-serif" }}
                >
                  {feature.title}
                </span>
              </Flex>

              {/* Description */}
              <p className="text-[13px] pr-5 leading-[1.6] text-primary/75">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── Bottom divider ── */}
        <hr className="border-t border-primary/10" />
      </Container>
    </section>
  );
};

export default CoreFeatures;
