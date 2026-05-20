"use client";
import dynamic from "next/dynamic";

const TestimonialSlider = dynamic(
  () => import("@/components/homeTwo/Testimonials"),
  { ssr: false }
);

export default function TestimonialsClient() {
  return <TestimonialSlider />;
}