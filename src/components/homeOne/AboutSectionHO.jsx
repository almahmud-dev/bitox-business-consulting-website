import React from "react";
import Container from "../ui/Container";
import Responsive from "../ui/Responsive";
import Image from "next/image";
import allImages from "../helper/imageProvider";
import ButtonTwo from "../ui/ButtonTwo";
import { aboutSectionskills, aboutStats } from "../helper/homeOnehelper";
import StatSectionHo from "../shared/StatSectionHo";

const AboutSectionHO = () => {
  const { aboutsection } = allImages;

  return (
    <section className="bg-secondary py-[60px]">
      <Container size="lg">
        <div className="p-[35px]  bg-bg-secondaryTwo rounded-[6px]">
          <Responsive.Grid gap="none" cols={{ base: 1, md: 2 }} align={"center"}>
            <div className="relative rounded-[6px] h-[675px] overflow-hidden lg:mr-[35px]">
              <Image
                src={aboutsection[0].img}
                alt="about-section"
                className="object-cover "
                fill
              />
            </div>
            <div className="lg:border-l border-[#0000001a] lg:pl-[60px]">
              <h4 className="headingFour font-bold text-primary">
                Achieve goals and coach fast with strategic clarity and focus.
              </h4>
              <p className="text-tarnary para-lg my-[30px]">
                We help businesses move forward with confidence by turning
                complex challenges into clear action plans through structured
                guidance, analysis and targeted coaching,{" "}
              </p>
              <ButtonTwo frontText={"Get in touch"} />

              <div className="mt-[60px]">
                {aboutSectionskills.map((skill, i) => (
                  <div key={i} className="mb-[30px]">
                    {/* Label + Percentage */}
                    <div className="flex items-center justify-between mb-[10px] ">
                      <label className="text-base font-medium text-primary">
                        {skill.label}
                      </label>
                      <span className="text-base font-medium text-primary">
                        {skill.value}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={skill.value}
                      readOnly
                      style={{
                        background: `linear-gradient(to right, #111827 ${skill.value}%, #e5e7eb ${skill.value}%)`,
                      }}
                      className="w-full h-[4px] appearance-none cursor-default rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-0 [&::-webkit-slider-thumb]:h-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Responsive.Grid>
          <Responsive.Grid
            gap="none"
            cols={{ base: 1, md: 2 }}
            align={"flex-start"}
          >
            <div className="lg:border-r border-[#0000001a] lg:pr-[35px] h-full  ">
              <h4 className="headingFour font-bold text-primary mt-[60px]">
                Creating one of the fastest way to grow your business
                successfully
              </h4>
              <p className="text-tarnary para-lg mt-[30px]">
                We help businesses move forward with confidence by turning
                complex challenges into clear action plans through structured
                guidance, analysis and targeted coaching,
              </p>
              
              <div className="my-[60px] h-[2px] w-full bg-[#0000001a]"></div>

              <div>
                <StatSectionHo stats={aboutStats} />
              </div>
            </div>
            <div className="relative rounded-[6px] h-[675px] overflow-hidden lg: ml-[60px]">
              <Image
                src={aboutsection[1].img}
                alt="about-section"
                className="object-cover "
                fill
              />
            </div>
          </Responsive.Grid>
        </div>
      </Container>
    </section>
  );
};

export default AboutSectionHO;
