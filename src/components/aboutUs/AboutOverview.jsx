import React from "react";
import Container from "../ui/Container";
import AboutStatCard from "../ui/AboutStatCard";
import Responsive from "../ui/Responsive";
import {
  aboutFeatures,
  aboutStatsThree,
  aboutStatsTwo,
} from "../helper/aboutHelper";
import { allIcons } from "../helper/iconProvider";
import Image from "next/image";
import allImages from "../helper/imageProvider";

const AboutOverview = () => {
  // for images and icons
  const { triangleLeft, triangleRight, square } = allIcons;
  const { aboutUsBanner } = allImages;

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-[120px]   ">
      <Container size={"lg"}>
        <div className="">
          <Responsive.Flex>
            {aboutStatsTwo.map((items, index) => {
              return (
                <AboutStatCard
                  key={index}
                  description={items.description}
                  value={items.value}
                  title={items.title}
                />
              );
            })}
          </Responsive.Flex>
        </div>
        <h1 className="font-bold text-[clamp(2.5rem,10vw,140px)] leading-[120%]  text-primary text-center lg:text-start py-10 md:py-[50px] lg:py-[60px]">
          Established in 2013
        </h1>
        <div>
          <Responsive.Grid gap="xl" cols={{ base: 1, lg: 2 }}>
            <h3 className="headingThree text-primary font-bold flex-1 text-center lg:text-start ">
              A reputed consultant agency with 15+ years helping businesses grow
              worldwide.
            </h3>
            <div className="flex-1 mt-4 lg:mt-0 hidden sm:block">
              <Responsive.Flex wrap={false} >
                {aboutStatsThree.map((items, index) => {
                  return (
                    <AboutStatCard
                      key={index}
                      description={items.description}
                      value={items.value}
                      title={items.title}
                      className={" flex flex-col md:items-end w-full md:w-fit"}
                      childClassOne={"md:text-end"}
                      childClassTwo={"md:text-end"}
                    />
                  );
                })}
              </Responsive.Flex>
            </div>
            <div className="flex-1 mt-4 lg:mt-0 block sm:hidden">
              <Responsive.Flex wrap={true} >
                {aboutStatsThree.map((items, index) => {
                  return (
                    <AboutStatCard
                      key={index}
                      description={items.description}
                      value={items.value}
                      title={items.title}
                      className={" flex flex-col md:items-end w-full md:w-fit"}
                      childClassOne={"md:text-end"}
                      childClassTwo={"md:text-end"}
                    />
                  );
                })}
              </Responsive.Flex>
            </div>
          </Responsive.Grid>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-[120px] mb-8 sm:mb-10 lg:mb-[60px] ">
          <div className="  mb-8 md:mb-12 lg:mb-0 lg:flex   justify-between space-y-[30px] md:space-y-[50px] lg:space-y-0 lg:border-t-2 lg:border-primary relative ">
            <span className=" absolute top-[-11.7px] left-[-12px]  text-[20px] hidden lg:block">
              {triangleRight}
            </span>
            <span className="absolute top-[-11.7px]  right-[-12px] text-[20px]  hidden lg:block">
              {triangleLeft}
            </span>
            <div className="] bg-primary h-full w-[2px] bg-primary absolute top-0 left-1/2 -translate-x-1/2 hidden lg:block"></div>
            <div className="lg:py-[60px] space-y-[25px]">
              <h5 className="headingFive text-primary font-bold">
                Our Mission
              </h5>
              <p className="font-normal text-tarnary para-lg max-w-[643px] ">
                Enterprise partnerships, built on clarity and craft, are the
                foundation of sustainable growth and long term success. By
                aligning strategic goals & thoughtful executions can create
                meaningful collaborations that drives innovation & measurable
                value of strong partnerships enable business to leverage shared
                expertise expand market opportunities, and respond effectively
              </p>
            </div>
            <div className="lg:py-[60px] space-y-[25px]">
              <h5 className="headingFive text-primary font-bold lg:text-end">
                Our Vision
              </h5>
              <p className="font-normal text-tarnary para-lg lg:text-end  max-w-[643px] ">
                Enterprise partnerships, built on clarity and craft, are the
                foundation of sustainable growth and long term success. By
                aligning strategic goals & thoughtful executions can create
                meaningful collaborations that drives innovation & measurable
                value of strong partnerships enable business to leverage shared
                expertise expand market opportunities, and respond effectively
              </p>
            </div>
          </div>
          <div>
            <Image
              src={aboutUsBanner}
              width={1600}
              height={750}
              className="rounded-[10px] object-cover"
              alt="aboutUsBanner"
            />
          </div>
        </div>

        <div className="mt-10 lg:mt-0   ">
          <h3 className="  headingThree text-primary font-bold max-w-[655px] text-center mx-auto underline">
            Why Businesses Choose Us With Confidence
          </h3>

          <div className="my-[60px] ">
            <div className="h-[120px] hidden lg:block  relative border-b border-primary ">
              <span className="absolute bottom-[-10px] left-[-12px]  text-[20px] hidden lg:block">
                {triangleRight}
              </span>
              <span className="absolute bottom-[-10px]  right-[-12px] text-[20px]  hidden lg:block">
                {triangleLeft}
              </span>
              <div className="absolute h-full w-[1px] bg-primary left-1/2 -translate-x-1/2">
                <span className="absolute top-[0px] rotate-[45deg]  left-1/2 -translate-x-1/2 !text-[5px]   hidden lg:block">
                  {square}
                </span>
              </div>
            </div>
          </div>

          <div className="   ">
            <Responsive.Grid gap="lg">
              {aboutFeatures.map((items) => {
                return (
                  <div className="" key={items.id}>
                    <p className="headingSixAlter font-bold text-primary">
                      {items.id}.
                    </p>
                    <p className=" mt-[10px] whitespace-nowrap mb-5 flex items-center gap-x-[15px] headingSixAlter text-primary font-bold ">
                      {" "}
                      <span className="relative     w-[96px] bg-primary h-[1px] ">
                        <span className="absolute  top-[-10px]    right-[-7px]  !text-[20px] hidden lg:block">
                          {triangleRight}
                        </span>
                      </span>
                      {items.title}
                    </p>
                    <p className="max-w-[339px]   font-normal para-lg text-tarnary">
                      {items.description}
                    </p>
                  </div>
                );
              })}
            </Responsive.Grid>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutOverview;
