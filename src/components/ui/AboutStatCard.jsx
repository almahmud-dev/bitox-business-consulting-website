import React from "react";

const AboutStatCard = ({
  value = "30k",
  title = "customers",
  description = "Happy customers we have world-wid",
  className,
  childClassOne,
  childClassTwo
}) => {
  return (
    <div
      className={`border-2 border-bg-secondaryTwo rounded-[10px] ${className}`}
    >
      <div className={`space-y-[10px] px-[25px] py-5 ${childClassOne}`}>
        <h2 className="text-primary font-bold text-[70px]/[50px]">{value}</h2>
        <p className="para-lg text-primary font-bold">{title}</p>
      </div>
      <div className={`py-5 px-[25px] border-t-2 border-bg-secondaryTwo ${childClassTwo}`}>
        <p className="text-base  font-medium text-primary max-w-[230px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutStatCard;
