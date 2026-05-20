"use client";

import RotatingBadge from "../ui/RotatingBadge";
import Container from "../ui/Container";
import HeroCard from "../ui/HeroCard";
import Image from "next/image";
import allImages from "../helper/imageProvider";
import Responsive from "../ui/Responsive";
import { heroSections } from "../helper/homeOnehelper";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const { heroBanner } = allImages;

  const [currentID, setCurrentID] = useState(0);
  const [nextID, setNextID] = useState(null);
  const [fading, setFading] = useState(false);
  const intervalRef = useRef(null);
  const fadingRef = useRef(false);

  // Preload all images on mount
  useEffect(() => {
    heroBanner.slice(1).forEach((banner) => {
      const img = new window.Image();
      img.src = banner.img.src;
    });
  }, []);

  const changeBanner = (newID) => {
    if (fadingRef.current || newID === currentID) return;

    fadingRef.current = true;
    setNextID(newID);
    setFading(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setFading(true);
      });
    });

    setTimeout(() => {
      setCurrentID(newID);
      setNextID(null);
      setFading(false);
      fadingRef.current = false;
    }, 800);
  };

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrentID((prev) => {
        const next = (prev + 1) % heroBanner.length;
        changeBanner(next);
        return prev;
      });
    }, 5000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleBannerClick = (id) => {
    changeBanner(id);
    clearInterval(intervalRef.current);
    startAutoPlay();
  };

  return (
    <section className=" pt-[140px] lg:pt-[180px] pb-[90px] ">
      <Container size="2xl">
        {/* lg, xl, 2xl */}
        <div className="relative hidden lg:block">
          <h1 className="font-heading headingOne uppercase tracking-tight">
            <span className="block font-extrabold">
              <span className="flex items-center">
                Business <RotatingBadge size="lg" />
              </span>
            </span>
            <span className="block font-medium lg:pl-[363px] xl:pl-[479px] 2xl:pl-[520px]">
              Strategy
            </span>
          </h1>
        </div>
        {/* sm devices */}
        <div className="relative lg:hidden md:hidden block">
          <h1 className="font-heading headingOne uppercase tracking-tight flex flex-col items-center gap-y-2">
            <span className="block font-extrabold ">Business</span>
            <RotatingBadge size="sm" />
            <span className="block font-medium">Strategy</span>
          </h1>
          <div className=" mt-12 flex justify-center ">
            <HeroCard />
          </div>
        </div>
        {/* md devices */}
        <div className="relative lg:hidden md:block hidden">
          <h1 className="font-heading headingOne uppercase tracking-tight flex flex-col items-center gap-y-3">
            <span className="block font-extrabold">Business</span>
            <RotatingBadge size="sm" />
            <span className="block font-medium">Strategy</span>
          </h1>
          <div className=" mt-13 flex justify-center ">
            <HeroCard />
          </div>
        </div>
      </Container>
      <div className="mt-[50px] lg:mt-[90px] mb-[20px] px-3 max-w-[1880px] h-[320px] sm:h-[400px] md:h-[500px] lg:h-[580px] xl:h-[600px] 2xl:h-[650px] relative mx-2">
        <div className="absolute inset-0 z-0">
          {/* Current image */}
          <Image
            src={heroBanner[currentID].img}
            alt="herobanner-images"
            className="rounded-[6px] object-cover"
            fill
            sizes="100vw"
            loading="eager"
            priority={currentID === 0}
          />

          {/* Next image - cross fade */}
          {nextID !== null && (
            <div
              className={`absolute inset-0 z-10 transition-opacity duration-700 ease-in-out ${
                fading ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={heroBanner[nextID].img}
                alt="herobanner-images"
                className="rounded-[6px] object-cover"
                fill
                sizes="100vw"
                loading="eager"
                priority={false}
              />
            </div>
          )}

          <div className="absolute inset-0 bg-[#02090f30] z-20" />
        </div>

        {/* for lg */}
        <div className="absolute top-[-155px] xl:top-[-176px] left-[6%] translate-x-[-2.5%] hidden lg:block  z-10">
          <HeroCard />
        </div>

        <div className="absolute bottom-[15px] right-[15px] sm:bottom-[20px] sm:right-[20px] md:bottom-[25px] md:right-[25px] lg:bottom-[30px] lg:right-[30px] xl:bottom-[35px] xl:right-[35px] z-[20] flex gap-x-2 sm:gap-x-3 md:gap-x-4 xl:gap-x-5">
          {heroBanner.map((items) => {
            return (
              <li
                key={items.id}
                className="rounded-[6px] inline-block overflow-hidden border border-bg-secondaryTwo cursor-pointer"
                onClick={() => handleBannerClick(items.id)}
              >
                <Image
                  height={153}
                  width={153}
                  className="object-cover hover:scale-[1.1] transition duration-400 ease-in-out !h-[80px] !w-[80px] sm:!h-[100px] sm:!w-[100px] md:!h-[120px] md:!w-[120px] lg:!h-[135px] lg:!w-[135px] xl:!h-[153px] xl:!w-[153px]"
                  src={items.img}
                  alt={`hero-banner-${items.id}`}
                />
              </li>
            );
          })}
        </div>
      </div>
      {/* for lg */}
      <div className="px-3 hidden lg:block">
        <Responsive.Flex
          as="ul"
          justify="flex-start"
          gap="none"
          wrap={false}
          style={{ gap: "12px" }}
        >
          {heroSections.map((items, index) => (
            <li
              key={index}
              className="
            flex-1 min-w-0
            flex items-center justify-center
            py-[19px] px-[20px]
            xl:py-[19px] xl:px-[20px]
            lg:py-[16px] lg:px-[16px]
            md:py-[13px] md:px-[12px]
            sm:py-[10px] sm:px-[10px]
            border border-[#0000001a]
            text-primary font-medium
            rounded-[6px]
            text-center
            whitespace-nowrap
          "
            >
              {items.title}
            </li>
          ))}
        </Responsive.Flex>
      </div>
      {/* for md   */}
      <div className="px-3 hidden md:block lg:hidden">
        <Responsive.Flex
          as="ul"
          justify="flex-start"
          gap="none"
          style={{ gap: "16px" }}
          className=""
        >
          {heroSections.map((items, index) => (
            <li
              key={index}
              className="py-[19px] px-[77px] border border-[#0000001a] text-primary font-medium rounded-[6px]
                lg:py-[16px] lg:px-[77px]
                md:py-[13px] md:px-[30px]
                sm:py-[10px] sm:px-[15px]
              
                "
            >
              {items.title}
            </li>
          ))}
        </Responsive.Flex>
      </div>
      {/* for sm   */}
      <div className="px-3 md:hidden block">
        <ul className="flex flex-wrap gap-5 justify-center">
          {heroSections.map((items, index) => (
            <li
              key={index}
              className="py-[19px]  text-center w-[250px] border border-[#0000001a] text-primary font-medium rounded-[6px]"
            >
              {items.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;
