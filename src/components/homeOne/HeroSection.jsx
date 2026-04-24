import React from "react";
import RotatingBadge from "../ui/RotatingBadge";
import Container from "../ui/Container";
import HeroCard from "../ui/HeroCard";
import Image from "next/image";
import allImages from "../helper/imageProvider";

const HeroSection = () => {
  const { heroBanner } = allImages;

  return (
    <section className="pt-[180px] pb-[120px] bg-bg-secondaryOne">
      <Container size="2xl">
        <div className="relative">
          <h1 className="font-heading headingOne  uppercase tracking-tight ">
            <span className="block font-extrabold ">
              <span className="flex items-center">
                Business{" "}
                <RotatingBadge
                  text="BEST SOLUTION • " // text change
                  className="w-[146px] h-[146px] ml-[30px] " // size change
                />
              </span>
            </span>
            <span className="block font-medium pl-[520px]">Strategy</span>
          </h1>
          <div className="absolute top-[100%] translate-y-[-13.5%] left-0 ">
            <HeroCard />
          </div>
        </div>
        
      </Container>
      <div className="mt-[90px] mb-[20px]">
          <Image src={heroBanner} />
        </div>
    </section>
  );
};

export default HeroSection;
