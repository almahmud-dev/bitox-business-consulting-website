import React from "react";
import RotatingBadge from "../ui/RotatingBadge";
import Container from "../ui/Container";
import HeroCard from "../ui/HeroCard";
import Image from "next/image";
import allImages from "../helper/imageProvider";
import { heroSections } from "../helper/helpers";
import Responsive from "../ui/Responsive";

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
      <div className="mt-[90px] mb-[20px] px-3">
        <Image src={heroBanner} alt="herobanner -images" className="w-full" />
      </div>

      <div className="px-3">
        <Responsive.Flex
          as="ul"
          justify="space-between"
          gap="none"
          style={{ rowGap: "16px" }}
        >
          {heroSections.map((items, index) => (
            <li
              key={index}
              className="py-[19px] px-[77px] lg:py-[16px] lg:px-[77px] md:py-[13px] md:px-[30px] sm:py-[10px] sm:px-[15px] border border-[#0000001a] text-primary font-medium rounded-[6px]"
            >
              {items.title}
            </li>
          ))}
        </Responsive.Flex>
      </div>
      <div className="mt-[90px] mb-[20px]">
          <Image src={heroBanner} alt="Hero banner" />
        </div>
    </section>
  );
};

export default HeroSection;
