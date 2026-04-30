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
    image: "/images/home01/services/service1.png",
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
    image: "/images/home01/services/service2.png",
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
    image: "/images/home01/services/service3.png",
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
    image: "/images/home01/services/service4.png",
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
// ===============================================
// BlogCardPage - BlogCardPage Section Array Object
// ===============================================
// এই allBlogData টা homeOnehelper.js এর একদম নিচে add করো
// blogData তে কোনো change নেই

export const allBlogData = [
  {
    slug: "craft-a-fulfilling-career",
    batchName: "Business",
    image: "/images/home01/blog/blog1.png",
    itmeText: "6 min read",
    dateText: "Mar 12, 2026",
    description:
      "Craft a fulfilling career and enjoy the comfort you truly deserve",
    content:
      "Building a meaningful career takes more than just landing a job. It requires intentional planning, self-awareness, and a willingness to adapt. In today's competitive market, professionals who invest in their personal development and continuously refine their skills are the ones who thrive. From setting clear goals to embracing lifelong learning, every step you take brings you closer to a career that not only pays the bills but also brings genuine satisfaction and purpose to your everyday life.",
  },
  {
    slug: "building-a-profitable-business-model",
    batchName: "Business",
    image: "/images/home01/blog/blog2.png",
    itmeText: "6 min read",
    dateText: "Mar 12, 2026",
    description: "Building a profitable and sustainable business model",
    content:
      "A sustainable business model is the backbone of any successful company. It goes beyond simply generating revenue — it's about creating long-term value for customers, employees, and stakeholders. By understanding your target market deeply, optimizing your cost structure, and diversifying revenue streams, you can build a business that remains resilient through economic cycles and continues to grow year after year with confidence.",
  },
  {
    slug: "improving-operational-efficiency",
    batchName: "Business",
    image: "/images/home01/blog/blog3.png",
    itmeText: "6 min read",
    dateText: "Mar 12, 2026",
    description: "Improving operational efficiency for higher profitability",
    content:
      "Operational efficiency is the key driver behind higher profit margins and faster growth. Companies that streamline their processes, eliminate bottlenecks, and empower their teams with the right tools consistently outperform their competitors. Whether it's automating repetitive tasks, refining supply chain management, or fostering a culture of continuous improvement, the path to higher profitability often runs directly through operational excellence.",
  },
  {
    slug: "strategic-leadership-in-modern-business",
    batchName: "Business",
    image: "/images/home01/blog/blog4.png",
    itmeText: "6 min read",
    dateText: "Mar 15, 2026",
    description:
      "Strategic leadership principles that drive modern business growth",
    content:
      "Effective leadership in today's business landscape requires more than authority — it demands vision, empathy, and strategic thinking. Great leaders align their teams around a shared purpose, foster psychological safety, and make data-driven decisions while keeping the human element at the forefront. By developing these skills, leaders can navigate uncertainty, inspire innovation, and build organizations that are both high-performing and resilient.",
  },
  {
    slug: "digital-transformation-for-businesses",
    batchName: "Business",
    image: "/images/home01/blog/blog5.png",
    itmeText: "6 min read",
    dateText: "Mar 15, 2026",
    description:
      "Digital transformation strategies every business needs to adopt",
    content:
      "Digital transformation is no longer optional — it's a survival imperative. Businesses that embrace technology to reimagine their operations, customer experiences, and business models are gaining significant competitive advantages. From cloud computing and AI-powered analytics to digital marketing and e-commerce, the tools are available for businesses of all sizes to transform and thrive in the digital age.",
  },
  {
    slug: "financial-planning-for-long-term-success",
    batchName: "Business",
    image: "/images/home01/blog/blog6.png",
    itmeText: "6 min read",
    dateText: "Mar 15, 2026",
    description:
      "Financial planning strategies that secure your long-term success",
    content:
      "Sound financial planning is the foundation of lasting business success. Without a clear financial roadmap, even the most innovative companies can find themselves struggling with cash flow, unexpected expenses, or missed growth opportunities. By establishing robust budgeting practices, maintaining healthy reserves, and investing strategically in growth initiatives, businesses can secure their financial future and position themselves to capitalize on opportunities as they arise.",
  },
];
