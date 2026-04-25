import React from "react";
import allImages from "../helper/imageProvider";
import Image from "next/image";

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
    <div className="   border border-[#0000001a] bg-bg-secondaryTwo">
      <div className="p-[30px]">
        <Image src={quote} width={52} height={42} alt="quote" />
        <p className="pt-[30px] pb-[40px] text-primary font-bold para-xl  underline underline-offset-2">
          {quotes}
        </p>
        <div className=" flex  mb-[128px] items-center gap-[15px]">
          <Image
            src={image}
            height={66}
            width={66}
            alt="tesmonial-card"
            className="!h-[66px] !w-[66px]"
          />
          <div>
            <p className="font-medium text-primary para-lg">{name}</p>
            <p className="font-medium text-primary para-base">{role}</p>
          </div>
        </div>
      </div>
      <div className="border-y  border-[#0000001a]">
        <div className=" p-[30px]  flex  justify-between ">
          <div className=" ">
            <h6 className="headingSix font-bold text-primary">{tashNumOne}</h6>
            <p className="text-base pt-1   font-medium text-primary">
              {tashLabelOne}
            </p>
          </div>
          <div>
            <h6 className="headingSix font-bold text-primary">{tashNumTwo}</h6>
            <p className="text-base pt-1   font-medium text-primary">
              {tashLabelTwo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
