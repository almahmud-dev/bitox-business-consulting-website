"use client";

import Image from "next/image";
import { useState } from "react";

import headerImg from "../../../../public/images/faq/laptop.png";
import bottomImg from "../../../../public/images/faq/discuss.png";
import faq_bg from "../../../../public/images/faq//faq_bg.png";
import ButtonTwo from "@/components/ui/ButtonTwo";




const faqData = {
  general: [
    {
      q: "What does a business consultant do?",
      a: "A business consultant analyzes your company's challenges, identifies growth opportunities and provides strategic solutions to improve performance, profitability, and scalability.",
    },
    {
      q: "How can consulting help my business grow?",
      a: "Consulting provides expert insight and proven strategies tailored to your business goals, helping you scale faster and more efficiently.",
    },
    {
      q: "Who should hire a business consultant?",
      a: "Any business — from startups to enterprises — looking to solve complex problems, improve processes, or accelerate growth can benefit.",
    },
    {
      q: "How long does a consulting project take?",
      a: "Project timelines vary depending on scope and complexity, typically ranging from a few weeks to several months.",
    },
    {
      q: "Do you offer customized business solutions?",
      a: "Yes, every engagement is tailored to your specific needs, industry, and business objectives.",
    },
  ],
  pricing: [
    {
      q: "What are your pricing plans?",
      a: "We offer flexible pricing plans to suit businesses of all sizes, from startups to enterprise clients.",
    },
    {
      q: "Is there a free trial available?",
      a: "Yes, we offer a 14-day free trial so you can experience the full platform before committing.",
    },
    {
      q: "Can I upgrade or downgrade my plan?",
      a: "Absolutely. You can change your plan at any time from your account settings.",
    },
    {
      q: "Are there any hidden fees?",
      a: "No hidden fees. Everything is clearly outlined in your plan details before you subscribe.",
    },
    {
      q: "Do you offer discounts for annual billing?",
      a: "Yes, annual billing comes with up to 20% discount compared to monthly plans.",
    },
  ],
  process: [
    {
      q: "How does the onboarding process work?",
      a: "After signing up, you'll be guided through a step-by-step onboarding flow to set up your account.",
    },
    {
      q: "What is the typical project timeline?",
      a: "Most projects are scoped and kicked off within 1–2 weeks after initial consultation.",
    },
    {
      q: "How do we communicate during the project?",
      a: "We use scheduled calls, shared project boards, and async messaging to keep everything aligned.",
    },
    {
      q: "What happens after the project ends?",
      a: "We offer post-project support packages to ensure a smooth transition and continued success.",
    },
    {
      q: "Can we pause or extend a project?",
      a: "Yes, timelines can be adjusted based on mutual agreement and scope changes.",
    },
  ],
  strategy: [
    {
      q: "How do you develop a growth strategy?",
      a: "We start with a deep-dive audit of your business, then build a data-driven roadmap aligned with your goals.",
    },
    {
      q: "Do you work with early-stage startups?",
      a: "Yes, we have dedicated packages for early-stage startups focused on product-market fit and scaling.",
    },
    {
      q: "How do you measure success?",
      a: "We define clear KPIs at the start of every engagement and report on them regularly.",
    },
    {
      q: "Can you help with market expansion?",
      a: "Yes, we specialize in market entry strategies, competitive analysis, and localization planning.",
    },
    {
      q: "What industries do you serve?",
      a: "We work across tech, e-commerce, healthcare, finance, and more.",
    },
  ],
};

const categories = [
  { key: "general", label: "General question" },
  { key: "pricing", label: "Pricing & plans" },
  { key: "process", label: "Process & timeline" },
  { key: "strategy", label: "Strategy & growth" },
];

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = faqData[activeCategory];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryChange = (key) => {
    setActiveCategory(key);
    setOpenIndex(0);
  };

  return (
    <section className="bg-[#fff] mt-40  pt-30 pb-34 " style={{
    backgroundImage: `url(${faq_bg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
      <div
  className="w-[1600px] max-w-full mx-auto "
  
>
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <p className="text-sm font-bold w-fit uppercase text-[#02090f] leading-5  rounded-sm  mb-7.5 border border-[rgba(0,0,0,0.1)] py-2.5 px-3.75">
              Frequently asked questions
            </p>
            <h2 className="text-[50px] font-bold text-[#02090F] leading-[58px] w-[805px] tracking-[0%] underline">
               Frequently Asked Questions:
              Clear, Concise Answers
            </h2>
          </div>

          <div className="w-[162px] h-[177px] flex-shrink-0">
            <Image
              src={headerImg}
              alt="FAQ illustration"
              width={162}
              height={177}
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
        </div>

        {/* Body */}
        <div className="flex gap-8.75 ">

          {/* Sidebar */}
          <div className="flex-shrink-0 flex flex-col gap-[10px] bg-[#E0DED7] pt-9 pl-7.5 rounded-[15px]">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => handleCategoryChange(cat.key)}
                className={`text-sm text-left transition-colors duration-150 ${
                  activeCategory === cat.key
                    ? "bg-[#FF5101] text-white"
                    : "bg-white text-gray-800 hover:bg-gray-50"
                }`}
                style={{
                  width: "443px",
                  paddingTop: "27px",
                  paddingBottom: "27px",
                  paddingLeft: "35px",
                  borderRadius: "15px",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex flex-col gap-4 bg-[#E0DED7] ">

            {/* FAQ List */}
            <div className="w-[1067px] max-w-full flex flex-col gap-[10px]">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full flex items-center gap-[20px] px-[35px] py-[24px] text-left"
                  >
                    <span
                      className={`flex-shrink-0 transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M3 6l5 5 5-5" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {faq.q}
                    </span>
                  </button>

                  {openIndex === index && (
                    <div
                      className="text-sm text-gray-500 leading-relaxed"
                      style={{
                        paddingLeft: "calc(35px + 16px + 20px)",
                        paddingRight: "35px",
                        paddingBottom: "24px",
                        marginTop: "-8px",
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="w-[1067px] max-w-full bg-white rounded-lg flex items-center justify-between px-10 py-8">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 leading-snug">
                  Have any questions? we're <br /> here for you.
                </h3>
                <p className="text-sm text-gray-500 max-w-[280px] leading-relaxed mb-5">
                  If you manage high transaction volumes, multiple entities, or
                  require custom integrations, our team can tailor Makro to your
                  needs.
                </p>
                <ButtonTwo frontText="Get in touch" backText="Get in touch" />
              </div>

              <div className="w-[412px] h-[344px] flex-shrink-0">
                <Image
                  src={bottomImg}
                  alt="Support illustration"
                  width={412}
                  height={344}
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;