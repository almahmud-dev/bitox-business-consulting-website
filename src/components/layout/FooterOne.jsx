"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FOOTER_ONE_DATA } from "@/components/helper/helpers";

// ─── Scroll To Top

function ScrollToTop() {
  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors duration-300 cursor-pointer"
    >
      <ArrowUp size={20} className="text-white" />
    </button>
  );
}

// ─── Main Footer

export default function FooterOne() {
  return (
    <footer className="bg-primary text-white">
      {/* ── Top Section */}
      <div className="px-10 pt-16 pb-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 border-b border-white/10">
        {/* Logo */}
        <div className="shrink-0">
          <Image
            src="/images/logo/Foot_logo.png"
            alt="Bitox"
            width={220}
            height={80}
            priority
          />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`mailto:${FOOTER_ONE_DATA.email}`}
              className="border border-white/20 rounded-full px-6 py-2.5 text-sm text-white/80 hover:text-white hover:border-white/50 transition-all duration-200 text-center"
            >
              {FOOTER_ONE_DATA.email}
            </a>
            <a
              href={`tel:${FOOTER_ONE_DATA.phone}`}
              className="border border-white/20 rounded-full px-6 py-2.5 text-sm text-white/80 hover:text-white hover:border-white/50 transition-all duration-200 text-center"
            >
              {FOOTER_ONE_DATA.phone}
            </a>
          </div>
          <div className="border border-white/20 rounded-full px-6 py-2.5 text-sm text-white/80 text-center">
            {FOOTER_ONE_DATA.address}
          </div>
        </div>
      </div>

      {/* ── Social Links */}
      <div className="px-10 py-8 flex flex-wrap items-center justify-center gap-4 border-b border-white/10">
        {FOOTER_ONE_DATA.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 rounded-full px-8 py-2.5 text-sm text-white/80 hover:text-white hover:border-white/50 transition-all duration-200"
          >
            {social.label}
          </a>
        ))}
      </div>

      {/* ── Bottom Bar */}
      <div className="px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/50">{FOOTER_ONE_DATA.copyright}</p>
        <ScrollToTop />
        <div className="flex items-center gap-6">
          {FOOTER_ONE_DATA.bottomLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-white/50 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
