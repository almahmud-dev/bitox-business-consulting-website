"use client";

import {
  ArrowIcon,
  MARQUEE_REPEAT_COUNT,
  MARQUEE_TEXT,
} from "../helper/helpers";
import ButtonThree from "../ui/ButtonThree";
import Container from "../ui/Container";
import { Stack } from "../ui/Responsive";

// ─── Shared CTA Button
function CTAButton({ frontText, backText, textColor = "#02090F", onClick }) {
  return (
    <div
      className="inline-flex items-center gap-2.5 cursor-pointer group"
      onClick={onClick}
    >
      <ButtonThree
        frontText={frontText}
        backText={backText}
        backgroundColor="transparent"
        textColor={textColor}
        fontSize={14}
        paddingTop={0}
        paddingBottom={0}
        paddingLeft={0}
        paddingRight={0}
      />
      <span className="inline-block transition-transform group-hover:translate-x-1">
        <ArrowIcon color={textColor === "#ffffff" ? "#ffffff" : "#02090F"} />
      </span>
    </div>
  );
}

// ─── Marquee Heading
function MarqueeHeading() {
  return (
    <div className="overflow-hidden">
      <div className="animate-marquee py-4">
        <span className="headingOne font-heading font-black text-primary whitespace-nowrap tracking-tight">
          {MARQUEE_TEXT.repeat(MARQUEE_REPEAT_COUNT)}
        </span>
      </div>
    </div>
  );
}

// ─── Hero CTA Section
function HeroCTA() {
  return (
    <Container size="md">
      <Stack align="center" className="pt-8.75 text-center">
        <p className="text-[28px] sm:text-[36px] md:text-[42px] font-bold text-primary max-w-[625px] underline underline-offset-[4px]">
          Have an idea in your mind? Let&apos;s make something great together
        </p>
        <div className="border border-primary rounded-[90px] px-7 py-3.5 hover:bg-black/5 transition-colors mb-10 lg:mb-[140px]">
          <CTAButton
            frontText="Let's build together"
            backText="Let's Talk."
            textColor="#02090F"
            onClick={() => console.log("clicked")}
          />
        </div>
      </Stack>
    </Container>
  );
}

// ─── Main Export
export default function MarqueeHeroCTA() {
  return (
    <>
      <MarqueeHeading />
      <HeroCTA />
    </>
  );
}
