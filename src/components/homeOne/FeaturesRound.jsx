import React from "react";
import Container from "../ui/Container";
import allImages from "../helper/imageProvider";
import Image from "next/image";
import ButtonTwo from "../ui/ButtonTwo";

const FeaturesRound = () => {
  const { featureRound } = allImages;

  return (
    <section className=" overflow-hidden  mb-[60px] lg:mb-0 lg:py-[120px] ">
      <div className="relative  max-w-[932px]  mx-auto">
        <Image
          src={featureRound[1].img}
          height={230}
          width={230}
          alt="feature-cart"
          className=" hidden laptop:block rounded-[6px]  absolute     top-0 laptop:top-[50%] laptop:translate-y-[-50%] laptop:left-[-110px]
           left-[-260px] rotate-[-20deg] xl:left-[-150px] 2xl:left-[-240px] !h-[130px] !w-[130px] xl:!h-[170px] xl:!w-[170px] 2xl:!h-[220px] 2xl:!w-[220px] "
        />
        <h2 className="headingTwo text-primary font-bold  text-center   ">
          We are a strategic consulting firm focused on delivering measurable
          strategy, growth.
        </h2>
        <div className="mt-[60px] flex justify-center">
          <ButtonTwo frontText={"Learn about us"} />
        </div>
        <Image
          src={featureRound[0].img}
          height={230}
          width={230}
          alt="feature-cart"
          className="  hidden laptop:block  rounded-[6px] absolute  laptop:top-[50%] laptop:translate-y-[-50%] laptop:right-[-110px]  xl:right-[-150px] 2xl:right-[-240px]  rotate-[20deg] !h-[130px] !w-[130px] xl:!h-[170px] xl:!w-[170px] 2xl:!h-[220px] 2xl:!w-[220px]"
        />
      </div>

      <div className=" whitespace-nowrap w-full mt-[80px] lg:mt-[120px]">
        <div className="inline-flex animate-marquee">
          {[...Array(6)].map((_, i) => (
            <h2
              key={i}
              className="headingOne text-primary font-bold px-8 flex  gap-x-[60px] items-center"
            >
              Since 1998{" "}
              <span className="inline-block w-[22px] h-[22px] bg-primary rounded-[6px]"></span>
            </h2>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesRound;
