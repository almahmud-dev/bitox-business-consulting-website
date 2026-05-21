"use client";

import allImages from "../helper/imageProvider";

import { categories, faqData } from "../helper/faqhelper";
import { useState } from "react";
import AccordionItem from "../ui/AccordionItem";
import ButtonTwo from "../ui/ButtonTwo";
import Image from "next/image";
import Link from "next/link";

const FaqBody = () => {
  const { bottomImg } = allImages.FaqSection;
  const [activeCategory, setActiveCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState(null);

  const handleCategoryChange = (key) => {
    setActiveCategory(key);
    setOpenIndex(null);
  };

  const faqItems = faqData[activeCategory];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-0 overflow-hidden bg-[#E0DED7] md:bg-transparent rounded-[20px] md:rounded-[0px]">
        <div className="flex flex-col gap-[10px] md:ml-[15px] relative z-0  md:bg-[#E0DED7] py-5  pl-5  pr-[15px]   md:rounded-bl-[20px] md:rounded-tl-[20px] h-fit ">
          {categories.map((item) => (
            <button
              key={item.key}
              className={`px-[35px] py-[27px] rounded-[15px] text-primary bg-bg-secondaryTwo hover:bg-secondary hover:text-bg-secondaryTwo para-xl text-bold transition duration-500 ease-in-out text-start ${
                activeCategory === item.key
                  ? "bg-secondary !text-bg-secondaryTwo"
                  : ""
              }`}
              onClick={() => handleCategoryChange(item.key)}
            >
              {item.label}
            </button>
          ))}
          <div className=" hidden md:block absolute w-[100%] h-[1000px] bg-bg-secondaryOne z-10 md:rounded-tr-[20px] top-[99%] left-[5.5px] "></div>
        </div>

        <div className="lg:col-span-2 space-y-[10px] md:bg-[#E0DED7] md:rounded-tr-[20px]  md:rounded-br-[20px] md:rounded-bl-[20px]  p-5 ">
          <div className="flex flex-col gap-[10px] md:pl-2">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                index={index}
                question={item.q}
                answer={item.a}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
          {/* <div className="  bg-white rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 px-5 sm:px-8 lg:px-10 py-5 sm:py-6 ml-2"> */}
          <div className="  bg-white rounded-lg flex flex-col sm:flex-row  md:flex-col lg:flex-row items-center justify-between gap-6 sm:gap-4 px-5 sm:px-8 lg:px-10 py-5 sm:py-6 md:ml-2">
            <div className="w-full sm:flex-1">
              <h3 className="text-xl sm:text-2xl lg:text-[30px] font-bold text-primary max-w-full sm:max-w-[389px] mb-3 sm:mb-4 lg:mb-5 leading-snug lg:leading-10 ">
                Have any questions? we're{" "}
                <br className="hidden sm:block md:hidden lg:block" /> here for
                you.
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-tarnary max-w-full sm:max-w-[407px] leading-6 sm:leading-7 mb-5 sm:mb-6 lg:mb-7.5">
                If you manage high transaction volumes, multiple entities, or
                require custom integrations, our team can tailor Makro to your
                needs.
              </p>
              <Link href={"/contact"}>
                <ButtonTwo frontText="Get in touch" backText="Get in touch" />
              </Link>
            </div>

            {/* CTA illustration — hidden on mobile, shown sm+ */}
            <div className="hidden sm:block ">
              <Image
                src={bottomImg}
                alt="Support illustration"
                width={412}
                height={344}
                className="object-cover rounded-lg w-[260px] h-[218px] md:w-[320px] md:h-[268px] lg:w-[412px] lg:h-[344px]"
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqBody;
