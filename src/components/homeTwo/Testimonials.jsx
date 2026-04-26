"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { getTestimonials } from "../helper/helpers";
import Container from "../ui/Container";
import { ArrowButton, TextCard, VideoCard } from "../ui/TestimonialsTwo";

const GAP = 20;

// ─── Hook: visible slide count based on breakpoint ────────────────────────────
function useVisibleCount() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setCount(3);
      else if (window.innerWidth >= 768) setCount(2);
      else setCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function TestimonialsSection() {
  const testimonials = getTestimonials();
  const visibleCount = useVisibleCount();
  const trackRef = useRef(null);
  const autoRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [slideW, setSlideW] = useState(0);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  // Recalculate slide width on resize or visibleCount change
  useEffect(() => {
    const calc = () => {
      if (!trackRef.current) return;
      const trackW = trackRef.current.offsetWidth;
      setSlideW((trackW - GAP * (visibleCount - 1)) / visibleCount);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [visibleCount]);

  // Clamp current index when visibleCount changes
  useEffect(() => {
    setCurrent((c) => Math.min(c, maxIndex));
  }, [maxIndex]);

  const goTo = useCallback(
    (idx) => setCurrent(Math.max(0, Math.min(idx, maxIndex))),
    [maxIndex]
  );

  const next = useCallback(
    () => setCurrent((c) => (c >= maxIndex ? 0 : c + 1)),
    [maxIndex]
  );

  const prev = useCallback(
    () => setCurrent((c) => (c <= 0 ? maxIndex : c - 1)),
    [maxIndex]
  );

  const startAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(next, 4000);
  }, [next]);

  useEffect(() => {
    startAuto();
    return () => clearInterval(autoRef.current);
  }, [startAuto]);

  const offset = current * (slideW + GAP);

  return (
    <section className="bg-[#F5F0E8] py-16 font-serif">
      {/* Heading */}
      <Container size="lg">
        <div className="text-center mb-10">
          <span className="inline-block border border-gray-400 rounded-full text-[10px] tracking-widest uppercase px-4 py-1 text-gray-500 font-sans mb-4">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 underline underline-offset-[6px]">
            Clients Feedback &amp; Testimonials
          </h2>
        </div>
      </Container>

      {/* Slider */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 2xl:px-20 max-w-[1600px] mx-auto">
        <div className="relative px-12">
          <ArrowButton direction="prev" onClick={() => { prev(); startAuto(); }} />

          {/* Track */}
          <div className="overflow-hidden" ref={trackRef}>
            <div
              className="flex"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(-${offset}px)`,
                transition: "transform 0.5s cubic-bezier(.4,0,.2,1)",
              }}
            >
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  style={{ width: slideW || undefined, flexShrink: 0, maxWidth: 513 }}
                >
                  {item.type === "video" ? (
                    <VideoCard {...item} />
                  ) : (
                    <TextCard {...item} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <ArrowButton direction="next" onClick={() => { next(); startAuto(); }} />
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-7">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); startAuto(); }}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === current ? "bg-gray-900 scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}