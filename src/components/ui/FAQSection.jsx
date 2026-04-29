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
      {/* Inner Page Hero at the top */}
      <InnerPageHero
        title="Frequently Asked Questions"
        subtitle="A reputed consultant agency we've spent 13+ years"
      />

      {/* FAQ Section */}
      <div
        className="bg-bg-secondaryOne pt-30 pb-34"
        style={{
          backgroundImage: `url(${faq_bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container size="lg">
          {/* Header */}
          <div className="flex justify-between items-start mb-12">
            <div>
              <p className="text-sm font-bold w-fit uppercase text-[#02090f] leading-5 rounded-sm mb-7.5 border border-[rgba(0,0,0,0.1)] py-2.5 px-3.75">
                Frequently asked questions
              </p>
              <h2 className="text-[50px] font-bold text-[#02090F] leading-[58px] w-[805px] tracking-[0%] underline">
                Frequently Asked Questions: Clear, Concise Answers
              </h2>
            </div>
            <div className="w-[162px] h-[177px] shrink-0">
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
          <div
            className="flex gap-8.75 h-[965px]"
            style={{
              backgroundImage: `url(${faq_full_bg.src})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Sidebar */}
            <div className="shrink-0 flex flex-col gap-[10px] pt-9 pl-7.5 rounded-[15px]">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => handleCategoryChange(cat.key)}
                  className={`text-[20px] text-left transition-colors duration-150 ${
                    activeCategory === cat.key
                      ? "bg-[#FF5101] text-[#FFFFFF]"
                      : "bg-white text-[#02090F] hover:bg-gray-50"
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
            <div className="flex flex-col gap-4 pt-9 bg-[#E0DED7] rounded-[20px]">
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
                      <span className="text-[26px] font-medium text-primary leading-9">
                        {faq.q}
                      </span>
                    </button>
                    {openIndex === index && (
                      <div
                        className="text-lg text-tarnary leading-7"
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
              <div className="w-[1067px] max-w-full bg-white rounded-lg flex items-center justify-between px-10 py-5">
                <div className="">
                  <h3 className="text-[30px] font-bold text-primary max-w-[389px] mb-5 leading-10">
                    Have any questions? we're <br /> here for you.
                  </h3>
                  <p className="text-lg text-tarnary max-w-[407px] leading-7 mb-7.5">
                    If you manage high transaction volumes, multiple entities,
                    or require custom integrations, our team can tailor Makro to
                    your needs.
                  </p>
                  <ButtonTwo frontText="Get in touch" backText="Get in touch" />
                </div>
                <div className="w-[412px] h-[344px]">
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
