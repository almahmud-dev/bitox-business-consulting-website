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
  const [searchOpen, setSearchOpen] = useState(false); // ← NEW
  const closeTimer = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
    setSearchOpen(false); // ← close on route change
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

  // ← close search on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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

  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

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
    isHovered,
    setIsHovered,
    searchOpen, // ← NEW
    openSearch, // ← NEW
    closeSearch, // ← NEW
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
    isHovered,
    setIsHovered,
    searchOpen,
    openSearch,
    closeSearch,
  } = useNavbar();

  const searchInputRef = useRef(null);

  // auto-focus input when overlay opens
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [searchOpen]);

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
        <nav
          className="flex items-center  gap-[clamp(1rem,2vw,2rem)]"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <DesktopNavItem
              key={link.label}
              link={link}
              openDropdown={openDropdown}
              onEnter={handleMouseEnter}
              onLeave={handleMouseLeave}
              height="auto"
              pathname={pathname}
              dropdownStyle="flat"
            />
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {/* ← onClick added */}
          <button
            onClick={openSearch}
            aria-label="Search"
            className="text-primary hover:text-secondary border border-black/10 rounded-md py-[14px] px-[15px] transition-colors duration-200 cursor-pointer"
          >
            <Search size={20} />
          </button>
          <Link
            href="/contact"
            className="px-6.25 py-3.75 bg-primary text-white text-sm font-medium rounded-md transition-colors duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <ButtonThree
              frontText="Let's Talk."
              backText="Let's Talk."
              backgroundColor="transparent"
              fontSize={14}
              paddingTop={0}
              paddingBottom={0}
              paddingLeft={0}
              paddingRight={0}
              externalHovered={isHovered}
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
          {/* ← onClick added */}
          <button
            onClick={openSearch}
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
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden transition-opacity duration-300  ${
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

      {/* ── Search Overlay */}
      <div
        className={`fixed inset-0 z-60 transition-opacity duration-300 ${
          searchOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* dark backdrop */}
        <div onClick={closeSearch} className="absolute inset-0 bg-black/60 " />

        {/* search bar — perfectly centered */}
        <div
          className="absolute inset-0 flex items-center justify-center px-4"
          onClick={closeSearch}
        >
          <div
            className="w-full max-w-[820px] flex items-center bg-white/[0.07] border border-white/10 rounded-full p-1.5"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search here.."
              className="flex-1 min-w-0 h-[52px] px-4 sm:px-6 text-base text-white outline-none bg-transparent placeholder:text-white/40"
            />
            <div className="flex items-center  gap-x-3">
              <button
                className="flex items-center gap-2 h-[52px] px-4 sm:px-7 bg-primary text-white text-sm sm:text-base font-medium rounded-full transition-opacity hover:opacity-90 cursor-pointer flex-shrink-0 whitespace-nowrap"
                onClick={closeSearch}
              >
                <Search size={18} />
                <span className="hidden sm:inline">Search</span>
              </button>
              {/* X button — top-right corner */}
              <button
                onClick={closeSearch}
                aria-label="Close search"
                className=" w-11 h-11 flex items-center justify-center bg-primary text-white rounded-full hover:opacity-90 cursor-pointer z-10 transition duration-300 ease-in-out hover:bg-red-600"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
