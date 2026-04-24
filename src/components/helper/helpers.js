import { ChevronDown } from "lucide-react";
import Link from "next/link";

//============================
// Utils 
//============================

export function isActiveLink(href, pathname) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function hasActiveChild(children, pathname) {
  return children?.some((child) => isActiveLink(child.href, pathname));
}
//==============================
// Nav Data 
//==============================

export const NAV_LINKS = [
  {
    label: "Home",
    children: [
      { label: "Business Consultant", href: "/" },
      { label: "Consulting Agency", href: "/consulting-agency" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
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
    label: "Pages",
    children: [
      { label: "Team", href: "/team" },
      { label: "Blog", href: "/blog" },
      { label: "Blog Details", href: "/blog/details" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
// =================================
// Nav Components
// =================================

export function DropdownMenu({
  children,
  isOpen,
  onClose,
  pathname,
  style = "rounded",
}) {
  const base = `absolute top-full left-0 w-52 bg-white py-2 z-50 transition-all duration-200 ${
    isOpen
      ? "opacity-100 translate-y-0 pointer-events-auto"
      : "opacity-0 -translate-y-2 pointer-events-none"
  }`;

  const styles = {
    rounded: "mt-3 rounded-xl shadow-xl border border-black/5",
    flat: "mt-0 shadow-xl border-t-2 border-secondary",
  };

  return (
    <div className={`${base} ${styles[style]}`}>
      {children.map((child) => (
        <Link
          key={child.href}
          href={child.href}
          onClick={onClose}
          className={`block px-5 py-2.5 text-[16px] transition-colors duration-200 ${
            isActiveLink(child.href, pathname)
              ? "text-secondary font-medium bg-secondary/5"
              : "text-primary hover:text-secondary hover:bg-secondary/5"
          }`}
        >
          {child.label}
        </Link>
      ))}
    </div>
  );
}

export function DesktopNavItem({
  link,
  openDropdown,
  onEnter,
  onLeave,
  pathname,
  dropdownStyle = "rounded",
  height = "auto",
}) {
  const isActive = link.children
    ? hasActiveChild(link.children, pathname)
    : isActiveLink(link.href, pathname);

  const activeClass = isActive
    ? "text-secondary"
    : "text-primary hover:text-secondary";
  const heightClass = height === "full" ? "h-[100px] flex items-center" : "";

  if (link.children) {
    return (
      <div
        className={`relative ${heightClass}`}
        onMouseEnter={() => onEnter(link.label)}
        onMouseLeave={onLeave}
      >
        <button
          className={`flex items-center gap-1 text-[16px] font-bold transition-colors duration-200 cursor-pointer ${activeClass}`}
        >
          {link.label}
          <ChevronDown
            size={13}
            className={`transition-transform duration-200 ${
              openDropdown === link.label ? "rotate-180" : ""
            }`}
          />
        </button>

        <DropdownMenu
          children={link.children}
          isOpen={openDropdown === link.label}
          onClose={onLeave}
          pathname={pathname}
          style={dropdownStyle}
        />
      </div>
    );
  }

  return (
    <div className={heightClass}>
      <Link
        href={link.href}
        className={`text-[16px] font-bold transition-colors duration-200 ${activeClass}`}
      >
        {link.label}
      </Link>
    </div>
  );
}

export function MobileNavItem({
  link,
  openDropdown,
  onToggle,
  onClose,
  pathname,
}) {
  const isActive = link.children
    ? hasActiveChild(link.children, pathname)
    : isActiveLink(link.href, pathname);

  const activeClass = isActive
    ? "text-secondary"
    : "text-primary hover:text-secondary";

  if (link.children) {
    const isOpen = openDropdown === link.label;
    return (
      <div>
        <button
          onClick={() => onToggle(link.label)}
          className={`flex items-center justify-between w-full py-3.5 border-b border-primary/10 transition-colors duration-200 ${activeClass}`}
        >
          <span className="text-base font-heading font-medium">
            {link.label}
          </span>
          <span className="text-[16px] font-heading font-medium">{link.label}</span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pl-4 py-2 flex flex-col gap-1">
            {link.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onClose}
                className={`py-2 text-[16px] transition-colors duration-200 ${
                  isActiveLink(child.href, pathname)
                    ? "text-secondary font-medium"
                    : "text-primary/70 hover:text-secondary"
                }`}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={link.href}
      onClick={onClose}
      className={`py-3.5 text-[16px] font-heading font-medium border-b border-primary/10 block transition-colors duration-200 ${activeClass}`}
    >
      {link.label}
    </Link>
  );
}

// ============================
// HomeOne Footer One Data
// ============================

export const FOOTER_ONE_DATA = {
  email: "infocon@example.com",
  phone: "(+00685689696)",
  address:
    "2400 Market Street, Suite 1200 Philadelphia, PA 19103, United States",
  copyright: "Copyright © 2026 Bitox, All Rights Reserved.",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Behance", href: "#" },
    { label: "Dribbble", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "You Tube", href: "#" },
  ],
  bottomLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms and Conditions", href: "/terms" },
    { label: "Support", href: "/support" },
  ],
};

//==============================================
// HomeTwo - Our Clients
//==============================================
export const CLIENTS = [
  {
    id: "01",
    name: "Loreipsum",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    logo: "/images/home2_Client/client1.png",
  },
  {
    id: "02",
    name: "Loreipsum",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    logo: "/images/home2_Client/client2.png",
  },
  {
    id: "03",
    name: "Loreipsum",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    logo: "/images/home2_Client/client3.png",
  },
  {
    id: "04",
    name: "Loreipsum",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    logo: "/images/home2_Client/client4.png",
  },
  {
    id: "05",
    name: "Loreipsum",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    logo: "/images/home2_Client/client5.png",
  },
  {
    id: "06",
    name: "Loreipsum",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    logo: "/images/home2_Client/client6.png",
  },
  {
    id: "07",
    name: "Loreipsum",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    logo: "/images/home2_Client/client7.png",
  },
];
//===================================
// Hometwo - Core Features
//===================================
export const features = [
  {
    number: "01.",
    title: "Information",
    description:
      "Enterprise partnerships, built on clarity and craft, are the foundation of sustainable and long-term success.",
  },
  {
    number: "02.",
    title: "Planning",
    description:
      "Enterprise partnerships, built on clarity and craft, are the foundation of sustainable and long-term success.",
  },
  {
    number: "03.",
    title: "Strategy",
    description:
      "Enterprise partnerships, built on clarity and craft, are the foundation of sustainable and long-term success.",
  },
  {
    number: "04.",
    title: "Analysis",
    description:
      "Enterprise partnerships, built on clarity and craft, are the foundation of sustainable and long-term success.",
  },
];
