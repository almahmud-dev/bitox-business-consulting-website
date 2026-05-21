"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import TestimonialCard from "@/components/homeTwo/TestimonialCard";
import { testimonialsDataHomeTwo } from "../helper/helpers";

/**
 * TestimonialSlider
 *
 * Layout:  [ side ]  [ CENTER (active, scaled up) ]  [ side ]
 *
 * Features:
 *  - Smooth cubic-bezier slide transition
 *  - Fixed card height — no layout jump
 *  - Center card: scaled 1, full opacity — side cards: scaled 0.88, dim
 *  - Responsive: 1 visible on mobile, 3 on md+
 *  - Touch / swipe support
 *  - Play button on center card opens YouTube inline
 */
export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonialsDataHomeTwo.length;

  const touchStartX = useRef(null);
  const trackRef = useRef(null);

  // ── Navigation ──────────────────────────────────────────
  const goTo = useCallback(
    (idx) => {
      setCurrent(((idx % total) + total) % total);
    },
    [total],
  );

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  // ── Touch swipe ─────────────────────────────────────────
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 44) dx < 0 ? next() : prev();
    touchStartX.current = null;
  };

  // ── Keyboard ────────────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  // ── Build visible indices: [prev, current, next] ────────
  // On mobile only current; on md show prev + current + next
  const indices = [
    (current - 1 + total) % total,
    current,
    (current + 1) % total,
  ];

  return (
    <section className="w-full pt-[80px] pb-[40px] md:pt-[100px] md:pb-[50px] lg:pt-[120px] lg:pb-[60px] px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="flex justify-center mb-4">
        <span className="inline-flex items-center justify-center border border-black/10 rounded-sm py-1 px-[15px] text-xs font-bold uppercase tracking-widest">
          testimonials
        </span>
      </div>
      <h2 className="text-center text-[20px] md:text-[38px] xl:text-[42px] font-bold underline underline-offset-4 max-w-2xl mx-auto mb-8 md:mb-12 leading-snug">
       Clients Feedback & Testimonials
      </h2>

      {/* ── Track ─────────────────────────────────────────── */}
      <div
        ref={trackRef}
        className="relative flex items-center justify-center gap-4 md:gap-6"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {indices.map((dataIdx, position) => {
          const isCenter = position === 1;
          const item = testimonialsDataHomeTwo[dataIdx];

          return (
            <div
              key={`${dataIdx}-${position}`}
              onClick={() => !isCenter && goTo(dataIdx)}
              className={[
                // hide left/right on mobile
                position !== 1 ? "hidden lg:block" : "block",
                // width
                "w-full lg:w-[340px] xl:w-[380px] shrink-0",
                // cursor
                !isCenter ? "cursor-pointer" : "",
                // smooth scale + opacity
                "transition-all duration-[550ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
                isCenter
                  ? "scale-100 opacity-100 z-10"
                  : "scale-[0.88] opacity-50 hover:opacity-65",
              ]
                .filter(Boolean)
                .join(" ")}
              style={{
                // GPU-accelerated
                willChange: "transform, opacity",
              }}
            >
              <TestimonialCard item={item} isCenter={isCenter} />
            </div>
          );
        })}
      </div>

      {/* ── Controls ──────────────────────────────────────── */}
      <div className="flex items-center justify-center gap-5 mt-10">
        {/* Prev button */}
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="group flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 active:scale-95"
        >
          <HiArrowLeft className="text-lg transition-transform duration-300 group-hover:-translate-x-0.5" />
        </button>

        {/* Dots */}
        <div
          className="flex items-center gap-2"
          role="tablist"
          aria-label="Slide indicators"
        >
          {testimonialsDataHomeTwo.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className="transition-all duration-300 rounded-full focus:outline-none"
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                background: i === current ? "#111827" : "#D1D5DB",
                borderRadius: "9999px",
              }}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="group flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 active:scale-95"
        >
          <HiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* ── Slide counter (optional) ─────────────────────── */}
      <p className="text-center text-xs text-gray-400 mt-4 tracking-widest uppercase">
        {String(current + 1).padStart(2, "0")} /{" "}
        {String(total).padStart(2, "0")}
      </p>
    </section>
  );
}
