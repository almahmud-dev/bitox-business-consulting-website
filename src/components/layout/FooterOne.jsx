"use client";

import Image from "next/image";
import Link from "next/link";
import { FOOTER_ONE_DATA } from "@/components/helper/helpers";
import allImages from "../helper/imageProvider";

// ─── Scroll To Top
function ScrollToTop() {
  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className="flex items-center justify-center flex-shrink-0 transition-colors duration-300 cursor-pointer bg-secondary hover:bg-secondary/80"
      style={{ width: "58px", height: "70px", borderRadius: "2px 2px 20px 20px" }}
    >
      <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M17.6572 9.51453C17.8767 9.30145 18 9.01262 18 8.71147C18 8.41032 17.8767 8.12148 17.6572 7.90841L9.8434 0.332347C9.62363 0.119535 9.32573 0 9.01513 0C8.70453 0 8.40663 0.119535 8.18687 0.332347L0.373044 7.90841C0.257889 8.01245 0.165526 8.13791 0.101466 8.2773C0.0374048 8.4167 0.00295911 8.56718 0.00018241 8.71977C-0.00259429 8.87236 0.026355 9.02392 0.0853041 9.16542C0.144253 9.30693 0.231994 9.43547 0.343292 9.54338C0.45459 9.65129 0.587165 9.73636 0.733109 9.79352C0.879053 9.85067 1.03538 9.87874 1.19275 9.87605C1.35012 9.87336 1.50533 9.83996 1.6491 9.77785C1.79287 9.71574 1.92227 9.62618 2.02958 9.51453L7.84306 3.87794V16.2875C7.84306 17.3679 7.49925 19.0149 6.50065 20.3589C5.54736 21.6438 3.94552 22.7272 1.20131 22.7272C0.890457 22.7272 0.592335 22.8469 0.372529 23.06C0.152722 23.2731 0.0292364 23.5622 0.0292364 23.8636C0.0292364 24.165 0.152722 24.454 0.372529 24.6672C0.592335 24.8803 0.890457 25 1.20131 25C4.70815 25 7.0148 23.5575 8.40409 21.6862C9.74963 19.874 10.1872 17.7315 10.1872 16.2875V3.87794L16.0007 9.51453C16.2205 9.72734 16.5184 9.84688 16.829 9.84688C17.1396 9.84688 17.4375 9.72734 17.6572 9.51453Z" fill="white"/>
      </svg>
    </button>
  );
}

// ─── Main Footer
export default function FooterOne() {
  return (
    <footer className="w-full text-white bg-primary">

      {/* ── Centered Container */}
      <div className="max-w-[1770px] mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 3xl:px-0">

        {/* ── Top Section */}
        <div className="pt-10 sm:pt-14 md:pt-16 lg:pt-18 3xl:pt-22.5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">

          {/* Logo */}
          <div className="shrink-0 w-[160px] sm:w-[220px] md:w-[300px] lg:w-[380px] xl:w-[460px] 2xl:w-[540px] 3xl:w-auto">
            <Image
              src={allImages.footerLogo}
              alt="Bitox"
              width={1056}
              height={318}
              className="w-full h-auto"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3 w-full lg:w-[420px] xl:w-[500px] 2xl:w-[580px] 3xl:w-[654px] lg:mt-10 xl:mt-12 3xl:mt-16">

            {/* Email + Phone */}
            <div className="flex flex-col gap-3 sm:flex-row">
              
              <a  href={`mailto:${FOOTER_ONE_DATA.email}`}
                className="flex-1 border border-[rgba(255,255,255,0.1)] rounded-md
                  text-sm md:text-base lg:text-lg 3xl:text-xl
                  text-white text-center transition-all duration-200 hover:bg-white/10 leading-7.5
                  py-3 px-4 sm:py-4 sm:px-5 md:py-5 md:px-6 3xl:py-[25px] 3xl:px-[60px]"
              >
                {FOOTER_ONE_DATA.email}
              </a>
              
              <a  href={`tel:${FOOTER_ONE_DATA.phone}`}
                className="flex-1 border border-[rgba(255,255,255,0.1)] rounded-md
                  text-sm md:text-base lg:text-lg 3xl:text-xl
                  text-white text-center transition-all duration-200 hover:bg-white/10 leading-7.5
                  py-3 px-4 sm:py-4 sm:px-5 md:py-5 md:px-6 3xl:py-[25px] 3xl:px-[60px]"
              >
                {FOOTER_ONE_DATA.phone}
              </a>
            </div>

            {/* Address */}
            <div
              className="border border-[rgba(255,255,255,0.1)] rounded-md
                text-sm md:text-base lg:text-lg 3xl:text-xl
                text-white text-center leading-7.5
                py-5 px-6 sm:py-7 sm:px-8 md:py-8 md:px-10 3xl:py-[47px] 3xl:px-[120px]"
            >
              {FOOTER_ONE_DATA.address}
            </div>
          </div>
        </div>

        {/* ── Social Links */}
        <div className="py-10 sm:py-14 md:py-16 lg:py-18 3xl:py-22.5 flex flex-wrap items-center justify-center gap-3 sm:gap-4 3xl:gap-5 border-b border-[rgba(255,255,255,0.1)]">
          {FOOTER_ONE_DATA.socials.map((social) => (
            
             <a key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 rounded-full text-center
                text-sm md:text-[15px] 3xl:text-[16px]
                py-2 px-5 sm:py-2.5 sm:px-7 3xl:py-2.5
                w-full sm:w-auto sm:min-w-[160px] md:min-w-[200px] lg:min-w-[220px] 3xl:w-[278px]
                text-white hover:text-white hover:border-white/50 hover:bg-secondary hover:border-none  transition-all duration-200 leading-7"
            >
              {social.label}
            </a>
          ))}
        </div>

        {/* ── Bottom Bar */}
        <div className="py-3 3xl:py-2.5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm md:text-[15px] 3xl:text-[16px] leading-6.5 text-white text-center sm:text-left">
            {FOOTER_ONE_DATA.copyright}
          </p>
          <ScrollToTop />
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {FOOTER_ONE_DATA.bottomLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm md:text-[15px] 3xl:text-[16px] leading-6.5 text-white hover:text-white/30 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}