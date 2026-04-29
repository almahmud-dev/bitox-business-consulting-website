"use client";

import Image from "next/image";
import { useState } from "react";
import imageProvider from "@/components/helper/imageProvider";
import ButtonTwo from "@/components/ui/ButtonTwo";
import InnerPageHero from "@/components/ui/InnerPageHero";
import Container from "@/components/ui/Container";
import { categories, faqData } from "../helper/faqhelper";

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

  const { headerImg, bottomImg, faq_bg, faq_full_bg } =
    imageProvider.FaqSection;

  return (
    <section>
      {/* Inner Page Hero */}
      <InnerPageHero
        title="Frequently Asked Questions"
        subtitle="A reputed consultant agency we've spent 13+ years"
      />

      {/* FAQ Section */}
      <div
        className="bg-bg-secondaryOne pt-16 pb-20 sm:pt-20 sm:pb-24 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32 xl:pt-30 xl:pb-34"
        style={{
          backgroundImage: `url(${faq_bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container size="lg">

          {/* ── Header ── */}
          <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-start mb-8 sm:mb-10 md:mb-12">
            <div className="flex-1">
              <p className="text-sm font-bold w-fit uppercase text-[#02090f] leading-5 rounded-sm mb-5 sm:mb-6 md:mb-7.5 border border-[rgba(0,0,0,0.1)] py-2.5 px-3.75">
                Frequently asked questions
              </p>
              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] font-bold text-[#02090F] leading-tight lg:leading-[58px] w-full lg:w-[805px] tracking-[0%] underline">
                Frequently Asked Questions: Clear, Concise Answers
              </h2>
            </div>

            {/* Header illustration — hidden on mobile, visible sm+ */}
            <div className="hidden sm:block w-[110px] h-[120px] md:w-[140px] md:h-[154px] lg:w-[162px] lg:h-[177px] shrink-0">
              <Image
                src={headerImg}
                alt="FAQ illustration"
                width={162}
                height={177}
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          </div>

          {/* ── Body ── */}
          <div
            className="flex flex-col lg:flex-row gap-5 md:gap-6 lg:gap-8 xl:gap-8.75 h-auto lg:h-[965px]"
            style={{
              backgroundImage: `url(${faq_full_bg.src})`,
              backgroundRepeat: "no-repeat",
            }}
          >

            {/* ── Sidebar (category buttons) ── */}
            {/* Mobile: horizontal scroll strip */}
            {/* lg+: vertical list */}
            <div className="
              flex flex-row gap-2 overflow-x-auto pb-2 scrollbar-hide
              lg:flex-col lg:gap-[10px] lg:overflow-x-visible lg:pb-0
              lg:shrink-0 lg:pt-9 lg:pl-7.5 lg:rounded-[15px]
            ">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => handleCategoryChange(cat.key)}
                  className={`
                    text-sm sm:text-base lg:text-[20px]
                    text-left whitespace-nowrap lg:whitespace-normal
                    transition-colors duration-150 rounded-xl lg:rounded-[15px]
                    px-4 py-3 sm:px-5 sm:py-3.5
                    lg:pt-[27px] lg:pb-[27px] lg:pl-[35px]
                    shrink-0 lg:shrink
                    ${
                      activeCategory === cat.key
                        ? "bg-[#FF5101] text-[#FFFFFF]"
                        : "bg-white text-[#02090F] hover:bg-gray-50"
                    }
                  `}
                  style={{
                    // lg and above: fixed 443px; below: auto
                    width: undefined,
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* ── Right side (FAQ list + CTA) ── */}
            <div className="flex flex-col gap-3 sm:gap-4 lg:pt-9 bg-[#E0DED7] rounded-[15px] sm:rounded-[18px] lg:rounded-[15px] p-4 sm:p-5 lg:p-0 lg:pr-0 flex-1 min-w-0">

              {/* FAQ List */}
              <div className="w-full flex flex-col gap-2 sm:gap-2.5">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => handleToggle(index)}
                      className="w-full flex items-center gap-3 sm:gap-4 lg:gap-5 px-4 sm:px-6 lg:px-8.75 py-4 sm:py-5 lg:py-6 text-left"
                    >
                      <span
                        className={`shrink-0 transition-transform duration-200 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      >
                        <svg
                          width="15"
                          height="9"
                          viewBox="0 0 15 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.25 1.25L7.25 7.25L1.25 1.25"
                            stroke="#02090F"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-base sm:text-lg md:text-xl lg:text-[26px] font-medium text-primary leading-snug lg:leading-9">
                        {faq.q}
                      </span>
                    </button>

                    {openIndex === index && (
                      <div
                        className="text-sm sm:text-base lg:text-lg text-tarnary leading-6 sm:leading-7 pb-4 sm:pb-5 lg:pb-6 pr-4 sm:pr-6 lg:pr-8.75"
                        style={{
                          paddingLeft: "calc(1rem + 15px + 0.75rem)",
                        }}
                      >
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* ── Bottom CTA ── */}
              <div className="w-full bg-white rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 px-5 sm:px-8 lg:px-10 py-5 sm:py-6">
                <div className="w-full sm:flex-1">
                  <h3 className="text-xl sm:text-2xl lg:text-[30px] font-bold text-primary max-w-full sm:max-w-[389px] mb-3 sm:mb-4 lg:mb-5 leading-snug lg:leading-10">
                    Have any questions? we're <br className="hidden sm:block" /> here for you.
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-tarnary max-w-full sm:max-w-[407px] leading-6 sm:leading-7 mb-5 sm:mb-6 lg:mb-7.5">
                    If you manage high transaction volumes, multiple entities,
                    or require custom integrations, our team can tailor Makro to
                    your needs.
                  </p>
                  <ButtonTwo frontText="Get in touch" backText="Get in touch" />
                </div>

                {/* CTA illustration — hidden on mobile, shown sm+ */}
                <div className="hidden sm:block w-[260px] h-[218px] md:w-[320px] md:h-[268px] lg:w-[412px] lg:h-[344px] shrink-0">
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
        </Container>
      </div>
    </section>
  );
};

export default Faq;