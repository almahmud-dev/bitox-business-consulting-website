import allImages from "@/components/helper/imageProvider";
import { serviceDheckListItems } from "@/components/helper/serviceDetailsHelpers";
import Container from "@/components/ui/Container";
import Responsive from "@/components/ui/Responsive";
import Image from "next/image";
import React from "react";

const ServiceIntroSection = () => {
  const { servivesDetailsIcon, home2Section } = allImages;

  return (
    <section className="py-[60px] sm:py-[80px] lg:py-[120px]">
      <Container size={"lg"}>
        <div>
          <Responsive.Grid gap="30px sm:40px lg:58px" cols={{ base: 1, lg: 2 }}>
            <div className="">
              <h3 className="headingThree text-primary font-bold underline">
                {" "}
                Professional Financial Planning Solutions for Long-Term Wealth
                and Security
              </h3>
              <p className="mt-[20px] mb-[40px] sm:mt-[25px] sm:mb-[50px] lg:mt-[30px] lg:mb-[60px] para-lg text-tarnary font-normal">
                Our financial planning process is designed to help individuals
                and businesses achieve financial stability and growth. We begin
                by understanding your current financial position, goals, and
                risk tolerance. Based on this analysis, our experts develop a
                personalized strategy that includes an investment planning,
                savings management and risk assessment. We focus creating
                sustainable that align with your future objectives.
              </p>
              <div className="space-y-[30px]">
                <h5 className="headingFive text-primary font-bold underline">
                  Consult Offerings
                </h5>
                <ul className="space-y-5">
                  {serviceDheckListItems.map((items) => {
                    return (
                      <li
                        key={items.id}
                        className="flex gap-3 sm:gap-5 para-lg text-tarnary font-normal"
                      >
                        <Image
                          src={servivesDetailsIcon}
                          height={32}
                          width={32}
                          alt="service-details"
                          className="h-[32px] w-[32px]"
                        />
                        {items.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div>
              <div className="relative w-full h-[260px] sm:h-[360px] md:h-[460px] lg:h-full mt-7 md:mt-9 lg:mt-0">
                <Image
                  src={home2Section[1].img}
                  alt="ServiceIntroSection-right-part-images"
                  className="object-cover rounded-[6px]"
                  fill
                />
              </div>
            </div>
          </Responsive.Grid>
        </div>
      </Container>
    </section>
  );
};

export default ServiceIntroSection;