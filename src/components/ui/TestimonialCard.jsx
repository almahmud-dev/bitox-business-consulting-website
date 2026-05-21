import React from "react";
import allImages from "../helper/imageProvider";
import Image from "next/image";
import CountUpStat from "./CountUpStat";

const TestimonialCard = ({
  image,
  quotes,
  role,
  name,
  tashNumOne,
  tashNumTwo,
  tashLabelOne,
  tashLabelTwo,
}) => {
  const { quote } = allImages;

  return (
    <div className="border border-[#0000001a] bg-bg-secondaryTwo">
      <div className="p-4 md:p-[30px]">
        <Image src={quote} width={52} height={42} alt="quote" />
        <p className="pt-[30px] pb-[40px] text-primary font-bold para-xl underline underline-offset-2">
          {quotes}
        </p>
        <div className="flex  mb-[50px] md:mb-[70px] lg:mb-[128px] items-center gap-[15px]">
          <Image
            src={image}
            height={66}
            width={66}
            alt="testimonial-card"
            className="!h-[66px] !w-[66px]"
          />
          <div>
            <p className="font-medium text-primary para-lg">{name}</p>
            <p className="font-medium text-primary para-base">{role}</p>
          </div>
        </div>
      </div>

      {/*  Bottom stats using CountUpStat */}
      <div className="border-y border-[#0000001a]">
        <div className="p-4 md:p-[30px] flex gap-x-[20px] sm:gap-x-0 2xl:gap-x-4 justify-between">
          <CountUpStat
            value={tashNumOne}
            label={tashLabelOne}
            statTextClass="headingSix font-bold text-primary"
            labelClass="text-base pt-1 font-medium text-primary"
          />
          <CountUpStat
            value={tashNumTwo}
            label={tashLabelTwo}
            statTextClass="headingSix font-bold text-primary"
            labelClass="text-base pt-1 font-medium text-primary"
            className="text-end sm:text-start"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
