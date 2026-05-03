import React from "react";

const  AboutStatCard = ({
  value = "30k",
  title = "customers",
  description = "Happy customers we have world-wide",
  className,
  childClassOne,
  childClassTwo
}) => {
  return (
    <div
      className={`border-2 border-bg-secondaryTwo rounded-[8px] sm:rounded-[10px]  ${className}`}
    >
      <div className={`space-y-1.5 sm:space-y-2.5 px-4 sm:px-5 md:px-[25px] py-3.5 sm:py-4 md:py-5 ${childClassOne}`}>
        <h2 className="text-primary font-bold text-[40px]/[36px] sm:text-[55px]/[44px] md:text-[70px]/[50px]">
          {value}
        </h2>
        <p className="text-sm sm:text-base para-lg text-primary font-bold">
          {title}
        </p>
      </div>
      <div
        className={`py-3.5 sm:py-4 md:py-5 px-4 sm:px-5 md:px-[25px] border-t-2 border-bg-secondaryTwo ${childClassTwo}`}
      >
        <p className="text-sm sm:text-base font-medium text-primary max-w-full sm:max-w-[200px] md:max-w-[230px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutStatCard;