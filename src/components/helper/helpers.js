import { BarChart2, Bug, ChevronDown, FlaskConical, Headphones, ShieldCheck } from "lucide-react";
import { FaDribbble, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import imageProvider from "@/components/helper/imageProvider";
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
  { label: "About Us", href: "/about" },
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
      { label: "404", href: "/not-found" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

// =================================
// Nav Components
// =================================

export function DropdownMenu({ children, isOpen, onClose, pathname, style = "rounded" }) {
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

  const activeClass = isActive ? "text-secondary" : "text-primary hover:text-secondary";
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

export function MobileNavItem({ link, openDropdown, onToggle, onClose, pathname }) {
  const isActive = link.children
    ? hasActiveChild(link.children, pathname)
    : isActiveLink(link.href, pathname);

  const activeClass = isActive ? "text-secondary" : "text-primary hover:text-secondary";

  if (link.children) {
    const isOpen = openDropdown === link.label;
    return (
      <div>
        <button
          onClick={() => onToggle(link.label)}
          className={`flex items-center justify-between w-full py-3.5 border-b border-primary/10 transition-colors duration-200 ${activeClass}`}
        >
          <span className="text-base font-heading font-medium">{link.label}</span>
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
// HomeOne — Footer Data
// ============================

export const FOOTER_ONE_DATA = {
  email: "infocon@example.com",
  phone: "(+00685689696)",
  address: "2400 Market Street, Suite 1200 Philadelphia, PA 19103, United States",
  copyright: "Copyright © 2026 Bitox, All Rights Reserved.",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Behance",   href: "#" },
    { label: "Dribbble",  href: "#" },
    { label: "LinkedIn",  href: "#" },
    { label: "Facebook",  href: "#" },
    { label: "You Tube",  href: "#" },
  ],
  bottomLinks: [
    { label: "Privacy Policy",       href: "/privacy-policy" },
    { label: "Terms and Conditions", href: "/terms" },
    { label: "Support",              href: "/support" },
  ],
};

//==============================================
// HomeTwo — Clients
//==============================================

export const CLIENTS = [
  { id: "01", name: "Loreipsum", description: "Lorem ipsum dolor sit amet, consectetur.", logo: "/images/home2_Client/client1.png" },
  { id: "02", name: "Loreipsum", description: "Lorem ipsum dolor sit amet, consectetur.", logo: "/images/home2_Client/client2.png" },
  { id: "03", name: "Loreipsum", description: "Lorem ipsum dolor sit amet, consectetur.", logo: "/images/home2_Client/client3.png" },
  { id: "04", name: "Loreipsum", description: "Lorem ipsum dolor sit amet, consectetur.", logo: "/images/home2_Client/client4.png" },
  { id: "05", name: "Loreipsum", description: "Lorem ipsum dolor sit amet, consectetur.", logo: "/images/home2_Client/client5.png" },
  { id: "06", name: "Loreipsum", description: "Lorem ipsum dolor sit amet, consectetur.", logo: "/images/home2_Client/client6.png" },
  { id: "07", name: "Loreipsum", description: "Lorem ipsum dolor sit amet, consectetur.", logo: "/images/home2_Client/client7.png" },
];

//===================================
// HomeTwo — Core Features
//===================================

export const features = [
  { number: "01.", title: "Information", description: "Enterprise partnerships, built on clarity and craft, are the foundation of sustainable and long-term success." },
  { number: "02.", title: "Planning",    description: "Enterprise partnerships, built on clarity and craft, are the foundation of sustainable and long-term success." },
  { number: "03.", title: "Strategy",   description: "Enterprise partnerships, built on clarity and craft, are the foundation of sustainable and long-term success." },
  { number: "04.", title: "Analysis",   description: "Enterprise partnerships, built on clarity and craft, are the foundation of sustainable and long-term success." },
];

//===============================
// HomeTwo — Footer Data
//===============================

export const companyLinks = [
  "Who We Are?",
  "Our Services",
  "Latest Blog",
  "Meet Our Team",
  "Contact Us",
];

export const serviceLinks = [
  "Corporate Growth",
  "Culture & Change",
  "Finance Advisor",
  "Digital Marketing",
  "Consulting Network",
];

export const legalLinks = ["Privacy Policy", "Terms and Conditions", "Support"];

export const socialLinks = [
  { icon: FaFacebook,  href: "#" },
  { icon: FaXTwitter,  href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaDribbble,  href: "#" },
];

export const MARQUEE_TEXT         = "BUSINESS · CONSULTING · ";
export const MARQUEE_REPEAT_COUNT = 6;
export const BUSINESS_HOURS       = "Saturday – Thursday : 8:30 am – 10:45 pm";
export const COPYRIGHT_TEXT       = "Copyright © 2026 Bitox. All Rights Reserved.";

// ─── Reusable Arrow SVG
export const ArrowIcon = ({ color = "#02090F" }) => (
  <svg width="9" height="12" viewBox="0 0 9 12" fill="none">
    <path
      d="M0.77735 0.0848229C0.445073 -0.136695 0 0.1015 0 0.500848V10.6323C0 11.0317 0.445073 11.2699 0.77735 11.0484L8.37596 5.98261C8.67283 5.7847 8.67283 5.34848 8.37596 5.15056L0.77735 0.0848229Z"
      fill={color}
    />
  </svg>
);

// ─── Reusable Email SVG
export const EmailIcon = () => (
  <svg width="21" height="16" viewBox="0 0 21 16" fill="none">
    <path
      d="M2.89064 16.0032H17.7147C19.3726 16.0032 20.33 15.0374 20.33 13.1242V2.86989C20.33 0.965746 19.3635 0 17.4385 0H2.61486C0.966821 0 0 0.956631 0 2.86989V13.1238C0 15.0461 0.975857 16.0028 2.89143 16.0028M9.06989 8.47058L2.1175 1.55145C2.31982 1.46784 2.55907 1.42147 2.84468 1.42147H17.4943C17.7795 1.42147 18.0282 1.46784 18.24 1.57008L11.2974 8.47098C10.9014 8.87004 10.5514 9.04678 10.1833 9.04678C9.81475 9.04678 9.46511 8.87004 9.06911 8.47098M1.408 13.1242V2.77716L6.70214 8.01604L1.41743 13.2815C1.40839 13.2351 1.40839 13.1792 1.40839 13.1238M18.9212 2.87901V13.2537L13.6636 8.01565L18.9216 2.8053L18.9212 2.87901ZM2.84468 14.5825C2.57754 14.5825 2.35675 14.5452 2.16346 14.4616L7.66936 8.97228L8.26807 9.5667C8.91236 10.2075 9.52914 10.477 10.1833 10.477C10.8275 10.477 11.4538 10.2075 12.0984 9.5667L12.6967 8.97228L18.194 14.4521C18.0003 14.5452 17.7611 14.5821 17.4939 14.5821L2.84468 14.5825Z"
      fill="#555555"
    />
  </svg>
);
//=================================
// HomeTwo — Testimonials
//=================================
export const testimonials = [
  {
    id: 1,
    type: "text",
    rating: 5,
    title: "Remarkable Growth and Results",
    description:
      "We are dedicated to guiding you on your financial journey with expertise integrity, & a personalized business non-stop solution with true professional from Consult agency.",
    authorImg: imageProvider.home2Testimonials[0].img,
    authorName: "Sophia Rahman,",
    authorRole: "BrightEdge",
  },
  {
    id: 2,
    type: "video",
    authorImg: imageProvider.home2Testimonials[2].img,
    authorName: "Michael Torres,",
    authorRole: "CEO, TechNova",
    videoThumbnail: imageProvider.home2Testimonials[1].img,
  },
  {
    id: 3,
    type: "text",
    rating: 5,
    title: "Creative Strategies That Stand Out",
    description:
      "We are dedicated to guiding you on your financial journey with expertise integrity, & a personalized business non-stop solution with true professional from Consult agency.",
    authorImg: imageProvider.home2Testimonials[3].img,
    authorName: "Michael Hayes,",
    authorRole: "CEO, TechNova",
  },
];
//=================================
// HomeTwo — Pricing Plans
//=================================
export const PLANS = [
  {
    id: "pay-per-project",
    label: "Pay Per project",
    price: "$3,399+",
    perMonth: false,
    variant: "light",
    features: [
      { icon: BarChart2, text: "All Analytics Features" },
      { icon: ShieldCheck, text: "Upgrade Anytime Protection" },
      { icon: FlaskConical, text: "40 Days Product Testing" },
      { icon: Bug, text: "500 Malware Removal" },
      { icon: Headphones, text: "24/7 Live Assistance" },
    ],
    tagline: "Ideal for clear, scoped design needs",
  },
  {
    id: "monthly-retainer",
    label: "Monthly Retainer",
    price: "$4,399",
    perMonth: true,
    variant: "dark",
    features: [
      { icon: BarChart2, text: "All Analytics Features" },
      { icon: ShieldCheck, text: "Upgrade Anytime Protection" },
      { icon: FlaskConical, text: "40 Days Product Testing" },
      { icon: Bug, text: "500 Malware Removal" },
      { icon: Headphones, text: "24/7 Live Assistance" },
    ],
    tagline: "Ideal for clear, scoped design needs",
  },
];
//=================================
// HomeTwo — Our Team
//=================================
export const featuresteam = [
  {
    title: "Visual project management",
    description:
      "Enterprise partnerships, built on clarity and craft, are the sustainable and long-term success.",
  },
  {
    title: "Team collaboration",
    description:
      "Enterprise partnerships, built on clarity and craft, are the sustainable and long-term success.",
  },
  {
    title: "Connection to company",
    description:
      "Enterprise partnerships, built on clarity and craft, are the sustainable and long-term success.",
  },
];
//=================================
// HomeTwo — Blog Insight
//=================================
export const blogPosts = [
  {
    id: 1,
    img: null, // allImages.home2blog[0].img — circle clip
    clipShape: "circle",
    readTime: "6 min read",
    date: "Mar 12, 2026",
    title: "5 smart ways to improve your business cash flow",
    excerpt:
      "Enterprise partnerships, built on clarity craft, are the foundation of sustainable and long-term success.",
  },
  {
    id: 2,
    img: null, // allImages.home2blog[1].img — triangle clip
    clipShape: "triangle",
    readTime: "6 min read",
    date: "Mar 12, 2026",
    title: "Smart strategies to grow your business faster",
    excerpt:
      "Enterprise partnerships, built on clarity craft, are the foundation of sustainable and long-term success.",
  },
  {
    id: 3,
    img: null, // allImages.home2blog[2].img — rectangle (no clip)
    clipShape: "rectangle",
    readTime: "6 min read",
    date: "Mar 12, 2026",
    title: "Simple ways to improve your business cash flow",
    excerpt:
      "Enterprise partnerships, built on clarity craft, are the foundation of sustainable and long-term success.",
  },
  {
    id: 4,
    img: null, // allImages.home2blog[3].img — star clip
    clipShape: "star",
    readTime: "6 min read",
    date: "Mar 12, 2026",
    title: "Building a strong financial foundation for business",
    excerpt:
      "Enterprise partnerships, built on clarity craft, are the foundation of sustainable and long-term success.",
  },
];

export const clipStyles = {
  circle: {
    width: "160px",
    height: "160px",
    objectFit: "cover",
  },
  triangle: {
    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
    width: "160px",
    height: "160px",
    objectFit: "cover",
  },
  rectangle: {
    borderRadius: "6px",
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  star: {
    width: "160px",
    height: "160px",
    objectFit: "cover",
  },
};
//=================================
// HomeTwo — Services
//=================================
export const services = [
  {
    number: "01",
    category: "Consultancy",
    title: "Business Consultancy",
    description:
      "Developing smarts, data-driven strategies & practical business plans that turn ideas into profitable scalable outcomes worldwide.",
    features: ["Integrity & Support", "Data Entry", "Growth forecasting"],
  },
  {
    number: "02",
    category: "Planning",
    title: "Financial Planning",
    description:
      "Developing smarts, data-driven strategies & practical business plans that turn ideas into profitable scalable outcomes worldwide.",
    features: [
      "Investment planning",
      "Education planning",
      "Growth forecasting",
    ],
  },
  {
    number: "03",
    category: "Tax & Vat",
    title: "Vat & Tax Consultancy",
    description:
      "Developing smarts, data-driven strategies & practical business plans that turn ideas into profitable scalable outcomes worldwide.",
    features: ["Integrity & Support", "Data Entry", "Growth forecasting"],
  },
];