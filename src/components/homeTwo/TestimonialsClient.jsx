"use client";
import dynamic from 'next/dynamic';

const Testimonials = dynamic(
  () => import('@/components/homeTwo/Testimonials'),
  { ssr: false }
);

export default function TestimonialsClient() {
  return <Testimonials />;
}