import { Lightbulb, Users, Search, ShieldCheck } from "lucide-react";

// =================================
// HomeOne - Hero Section Array Object
// =================================
export const heroSections = [
  {
    id: 1,
    title: "Financial Planning",
    slug: "financial-planning",
  },
  {
    id: 2,
    title: "Human Resource",
    slug: "human-resource",
  },
  {
    id: 3,
    title: "Organisations",
    slug: "organisations",
  },
  {
    id: 4,
    title: "Research & Analysis",
    slug: "research-analysis",
  },
  {
    id: 5,
    title: "Risk Management",
    slug: "risk-management",
  },
];

// ===============================================
// HomeOne - feature-round Section Array Object
// ===============================================

export const aboutSectionskills = [
  { label: "Analysis", value: 52 },
  { label: "User Experience", value: 82 },
  { label: "Development", value: 92 },
];

export const aboutStats = [
  {
    value: "68+",
    label: "Completed Projects",
    description: "Include a simple sentence about completed work.",
  },
  {
    value: "98+",
    label: "Satisfied Clients",
    description: "Include a simple sentence about satisfied clients.",
  },
];

// ===============================================
// HomeOne - Service Section Array Object
// ===============================================

const SHARED_DESCRIPTION =
  "We're a creative branding and communications company of creative thinkers, strategists, digital innovators.";

const SHARED_FEATURES = [
  "Strategic roadmapping",
  "Business model development",
  "Growth forecasting",
  "Competitive positioning",
];

export const serviceCards = [
  {
    id: 1,
    icon: "/images/home01/services/service-icon1.png",
    title: "Strategy & Planning",
    description: SHARED_DESCRIPTION,
    features: SHARED_FEATURES,
    image: "/images/home01/services/services1.png",
    imageAlt: "Two professionals discussing strategy at a desk",
    href: "/services/strategy-planning",
    highlighted: true,
  },
  {
    id: 2,
    icon: "/images/home01/services/service-icon2.png",
    title: "Human Resource",
    description: SHARED_DESCRIPTION,
    features: SHARED_FEATURES,
    image: "/images/home01/services/services1.png",
    imageAlt: "Team members collaborating in a dark-themed office",
    href: "/services/human-resource",
    highlighted: false,
  },
  {
    id: 3,
    icon: "/images/home01/services/service-icon3.png",
    title: "Research & Analysis",
    description: SHARED_DESCRIPTION,
    features: SHARED_FEATURES,
    image: "/images/home01/services/services1.png",
    imageAlt: "Woman and man reviewing data on a laptop",
    href: "/services/research-analysis",
    highlighted: false,
  },
  {
    id: 4,
    icon: "/images/home01/services/service-icon4.png",
    title: "Risk Management",
    description: SHARED_DESCRIPTION,
    features: SHARED_FEATURES,
    image: "/images/home01/services/services1.png",
    imageAlt: "Professional standing in a well-lit corridor",
    href: "/services/risk-management",
    highlighted: false,
  },
];

// ===============================================
// HomeOne - TestimonialsSection Section Array Object
// ===============================================

export const testimonialsData = [
  {
    id: 1,
    quote:
      "From discovery to execution, every step was handled professionally. Their insights growth opportunities we hadn't considered before & either strategic guidance",
    name: "Cameron Diaz",
    role: "Co-Founder",
    image: "/images/home01/testimonial/tesmonial1.png",
    stats: [
      { id: 1, percentage: "85%", label: "Process Improvement" },
      { id: 2, percentage: "70%", label: "Revenue Growth in 6 Months" },
    ],
  },
  {
    id: 2,
    quote:
      "From discovery to execution, every step was handled professionally. Their insights growth opportunities we hadn't considered before & either strategic guidance",
    name: "Taylor Brooks",
    role: "Web Designer",
    image: "/images/home01/testimonial/tesmonial2.png",
    stats: [
      { id: 1, percentage: "85%", label: "Process Improvement" },
      { id: 2, percentage: "70%", label: "Revenue Growth in 6 Months" },
    ],
  },
  {
    id: 3,
    quote:
      "From discovery to execution, every step was handled professionally. Their insights growth opportunities we hadn't considered before & either strategic guidance",
    name: "Alex Morgan",
    role: "Co-Founder",
    image: "/images/home01/testimonial/tesmonial3.png",
    stats: [
      { id: 1, percentage: "85%", label: "Process Improvement" },
      { id: 2, percentage: "70%", label: "Revenue Growth in 6 Months" },
    ],
  },

  {
    id: 4,
    quote:
      "From discovery to execution, every step was handled professionally. Their insights growth opportunities we hadn't considered before & either strategic guidance",
    name: "Cameron Diaz",
    role: "Co-Founder",
    image: "/images/home01/testimonial/tesmonial1.png",
    stats: [
      { id: 1, percentage: "85%", label: "Process Improvement" },
      { id: 2, percentage: "70%", label: "Revenue Growth in 6 Months" },
    ],
  },
  {
    id: 5,
    quote:
      "From discovery to execution, every step was handled professionally. Their insights growth opportunities we hadn't considered before & either strategic guidance",
    name: "Taylor Brooks",
    role: "Web Designer",
    image: "/images/home01/testimonial/tesmonial2.png",
    stats: [
      { id: 1, percentage: "85%", label: "Process Improvement" },
      { id: 2, percentage: "70%", label: "Revenue Growth in 6 Months" },
    ],
  },
  {
    id: 6,
    quote:
      "From discovery to execution, every step was handled professionally. Their insights growth opportunities we hadn't considered before & either strategic guidance",
    name: "Alex Morgan",
    role: "Co-Founder",
    image: "/images/home01/testimonial/tesmonial3.png",
    stats: [
      { id: 1, percentage: "85%", label: "Process Improvement" },
      { id: 2, percentage: "70%", label: "Revenue Growth in 6 Months" },
    ],
  },
];

// ===============================================
// HomeOne - BlogSectionHO Section Array Object
// ===============================================
export const blogData = [
  {
    batchName: "Business",
    image: "/images/home01/blog/blog1.png",
    itmeText: "6 min read",
    dateText: "Mar 12, 2026",
    description:
      "Craft a fulfilling career and enjoy the comfort you truly deserve",
  },
  {
    batchName: "Business",
    image: "/images/home01/blog/blog2.png",
    itmeText: "6 min read",
    dateText: "Mar 12, 2026",
    description: "Building a profitable and sustainable business model",
  },
  {
    batchName: "Business",
    image: "/images/home01/blog/blog3.png",
    itmeText: "6 min read",
    dateText: "Mar 12, 2026",
    description: "Improving operational efficiency for higher profitability",
  },
];
