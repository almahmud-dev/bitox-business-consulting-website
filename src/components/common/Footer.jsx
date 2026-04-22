"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "Linkedin", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
];

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export default function Footer() {
  const pathname = usePathname();

  // Consulting Agency page e footer dekhabe na
  if (pathname === "/consulting-agency") return null;

  return (
    <footer className="bg-primary text-white">
      {/* Top Section */}
      <div className="px-6 md:px-12 lg:px-20 pt-16 pb-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        {/* Logo */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/logo/Foot_logo.png"
            alt="Bitox Logo"
            width={280}
            height={100}
            className="invert"
          />
        </div>

        {/* Contact Info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="border border-white/20 rounded-full px-6 py-3 text-base hover:border-secondary transition-colors duration-300 cursor-pointer">
              infocon@example.com
            </div>
            <div className="border border-white/20 rounded-full px-6 py-3 text-base hover:border-secondary transition-colors duration-300 cursor-pointer">
              (+00685689696)
            </div>
          </div>
          <div className="border border-white/20 rounded-2xl px-6 py-4 text-base hover:border-secondary transition-colors duration-300 cursor-pointer">
            2400 Market Street, Suite 1200 Philadelphia,
            <br />
            PA 19103, United States
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="px-6 md:px-12 lg:px-20 py-6 border-t border-white/10">
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="border border-white/20 rounded-full px-6 py-2.5 text-base hover:border-secondary hover:text-secondary transition-colors duration-300"
            >
              {social.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-6 md:px-12 lg:px-20 py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-base text-white/60">
          Copyright © 2026 Bitox, All Rights Reserved.
        </p>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors duration-300"
        >
          <ArrowUp size={20} className="text-white" />
        </button>

        {/* Bottom Links */}
        <div className="flex items-center gap-6">
          <Link
            href="#"
            className="text-base text-white/60 hover:text-secondary transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-base text-white/60 hover:text-secondary transition-colors duration-300"
          >
            Terms and Conditions
          </Link>
          <Link
            href="#"
            className="text-base text-white/60 hover:text-secondary transition-colors duration-300"
          >
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
}
