"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Search, X, Menu } from "lucide-react";
import Image from "next/image";

const navLinks = [
  {
    label: "Home",
    children: [
      { label: "Business Consultant", href: "/" },
      { label: "Consulting Agency", href: "/consulting-agency" },
    ],
  },
  {
    label: "Pages",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Team Member", href: "/team" },
      { label: "Pricing Plan", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Services", href: "/services" },
      { label: "Service Details", href: "/services/details" },
    ],
  },
  {
    label: "Projects",
    children: [
      { label: "Projects", href: "/projects" },
      { label: "Project Details", href: "/projects/details" },
    ],
  },
  {
    label: "Insights",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Blog Details", href: "/blog/details" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <header
        className={`fixed left-5 right-5 top-5 z-50 hidden lg:flex items-center justify-between px-8 h-[70px] rounded-full transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <Image
          src="/images/logo/Nav_logo.png"
          alt="Bitox Logo"
          width={106}
          height={32}
          priority
        />

        {/* Nav Links */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 text-base text-primary hover:text-secondary transition-colors duration-200">
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      openDropdown === link.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                {openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-3 w-52 bg-white rounded-xl shadow-xl border border-primary/5 py-2 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2.5 text-base text-primary hover:text-secondary hover:bg-bg-secondaryOne transition-colors duration-200"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-base text-primary hover:text-secondary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="text-primary hover:text-secondary transition-colors duration-200">
            <Search size={20} />
          </button>
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-primary text-white text-base rounded-full hover:bg-secondary transition-colors duration-300"
          >
            Let's Talk.
          </Link>
        </div>
      </header>

      {/* Mobile Navbar */}
      <header
        className={`fixed left-4 right-4 top-4 z-50 flex lg:hidden items-center justify-between px-5 h-[60px] rounded-full transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="text-xl font-bold font-heading text-primary">
          Bitox
        </Link>

        {/* Mobile Right */}
        <div className="flex items-center gap-3">
          <button className="text-primary hover:text-secondary transition-colors duration-200">
            <Search size={18} />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-primary hover:text-secondary transition-colors duration-200"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-8 overflow-y-auto lg:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() =>
                      setOpenMobileDropdown(
                        openMobileDropdown === link.label ? null : link.label,
                      )
                    }
                    className="flex items-center justify-between w-full py-3 text-primary border-b border-primary/10"
                  >
                    <span className="para-lg font-heading">{link.label}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        openMobileDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openMobileDropdown === link.label && (
                    <div className="pl-4 py-2 flex flex-col gap-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="py-2 text-base text-primary/70 hover:text-secondary transition-colors duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 para-lg font-heading text-primary border-b border-primary/10"
                >
                  {link.label}
                </Link>
              ),
            )}

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 w-full text-center px-6 py-3 bg-primary text-white para-lg rounded-full hover:bg-secondary transition-colors duration-300"
            >
              Let's Talk.
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
