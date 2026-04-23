"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Phone, X, Menu } from "lucide-react";
import { NAV_LINKS, DesktopNavItem, MobileNavItem } from "@/components/helper/helpers";

// ─── Logic ────────────────────────────────────────────────────────────────────

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
    return () => { document.body.style.overflow = ""; };
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

  const toggleMobileMenu = useCallback(() => setMobileOpen((prev) => !prev), []);
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

// UI

export default function NavbarTwo() {
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
        className={`fixed left-0 right-0 top-0 z-50 hidden lg:flex items-center justify-between px-10 h-[100px] bg-white transition-all duration-300 ${
          scrolled ? "shadow-md" : ""
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
              dropdownStyle="flat"
              height="full"
            />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
            <Phone size={18} className="text-white" />
          </div>
          <span className="text-base font-semibold text-primary tracking-wide">
            9 500 212 09 88
          </span>
        </div>
      </header>

      {/* ── Mobile Navbar */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 flex lg:hidden items-center justify-between px-5 h-[70px] bg-white transition-all duration-300 ${
          scrolled ? "shadow-md" : ""
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

        <button
          onClick={toggleMobileMenu}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="text-primary hover:text-secondary transition-colors duration-200 cursor-pointer"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
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

          <div className="mt-6 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
              <Phone size={16} className="text-white" />
            </div>
            <span className="text-base font-semibold text-primary">
              9 500 212 09 88
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}