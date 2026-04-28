"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Search, X, Menu } from "lucide-react";
import {
  NAV_LINKS,
  DesktopNavItem,
  MobileNavItem,
} from "@/components/helper/helpers";
import ButtonThree from "../ui/ButtonThree";

// ─── Logic

function useNavbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMouseEnter = useCallback((label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  }, []);

  const toggleMobileDropdown = useCallback((label) => {
    setOpenMobileDropdown((prev) => (prev === label ? null : label));
  }, []);

  const toggleMobileMenu = useCallback(
    () => setMobileOpen((prev) => !prev),
    [],
  );
  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);

  return {
    pathname,
    scrolled,
    mobileOpen,
    openDropdown,
    openMobileDropdown,
    handleMouseEnter,
    handleMouseLeave,
    toggleMobileDropdown,
    toggleMobileMenu,
    closeMobileMenu,
  };
}

// ─── UI

export default function NavbarOne() {
  const {
    pathname,
    scrolled,
    mobileOpen,
    openDropdown,
    openMobileDropdown,
    handleMouseEnter,
    handleMouseLeave,
    toggleMobileDropdown,
    toggleMobileMenu,
    closeMobileMenu,
  } = useNavbar();

  return (
    <>
      {/* ── Desktop Navbar */}
      <header
        className={`fixed left-5 right-5 top-5 z-50 hidden lg:flex items-center justify-between px-8 h-[70px] rounded-md transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/images/logo/Nav_logo.png"
            alt="Bitox"
            width={106}
            height={32}
            priority
          />
        </Link>
        <nav className="flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <DesktopNavItem
              key={link.label}
              link={link}
              openDropdown={openDropdown}
              onEnter={handleMouseEnter}
              onLeave={handleMouseLeave}
              pathname={pathname}
              dropdownStyle="rounded"
            />
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="text-primary hover:text-secondary border border-black/10 rounded-md py-[14px] px-[15px] transition-colors duration-200 cursor-pointer"
          >
            <Search size={20} />
          </button>
          <Link
            href="/contact"
            className="px-6.25 py-3.75 bg-primary text-white text-sm font-medium rounded-md hover:bg-secondary transition-colors duration-300"
          >
            <ButtonThree
              frontText="Let's Talk."
              backText="Get started now"
              backgroundColor="transparent"
              fontSize={14}
              paddingTop={0}
              paddingBottom={0}
              paddingLeft={0}
              paddingRight={0}
            />
          </Link>
        </div>
      </header>

      {/* ── Mobile Navbar */}
      <header
        className={`fixed left-4 right-4 top-4 z-50 flex lg:hidden items-center justify-between px-5 h-[60px] rounded-md transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/images/logo/Nav_logo.png"
            alt="Bitox"
            width={90}
            height={28}
            priority
          />
        </Link>

        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="text-primary border border-black/10 rounded-md py-3.25 px-3.25 transition-colors duration-200 cursor-pointer"
          >
            <Search size={18} />
          </button>
          <button
            onClick={toggleMobileMenu}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="text-primary hover:text-secondary transition-colors duration-200 cursor-pointer"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Backdrop */}
      <div
        onClick={closeMobileMenu}
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-white pt-24 px-6 pb-8 overflow-y-auto lg:hidden transition-all duration-300 max-h-screen ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <MobileNavItem
              key={link.label}
              link={link}
              openDropdown={openMobileDropdown}
              onToggle={toggleMobileDropdown}
              onClose={closeMobileMenu}
              pathname={pathname}
            />
          ))}

          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="mt-6 w-full text-center px-6 py-3 bg-primary text-white text-base font-medium rounded-md hover:bg-secondary transition-colors duration-300 block"
          >
            Let&apos;s Talk.
          </Link>
        </nav>
      </div>
    </>
  );
}
