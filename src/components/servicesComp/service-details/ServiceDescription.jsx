import { allIcons } from "@/components/helper/iconProvider";
import { servicesDetailProcessSteps } from "@/components/helper/serviceDetailsHelpers";
import Container from "@/components/ui/Container";
import React from "react";

const ServiceDescription = () => {
  const { triangleLeft, triangleRight, dot } = allIcons;
  return (
    <section>
      <Container size="lg">
        <div className="space-y-[30px] ">
          <h5 className="headingFive text-primary font-bold underline">
            Our Financial Planning Process
          </h5>
          <p className="text-tarnary font-normal para-lg ">
            Our financial planning process is designed to help individuals and
            businesses achieve long-term financial stability and growth. We
            begin by understanding your current financial position, goals, and
            risk tolerance. Based on this analysis, our experts develop a
            personalized strategy that includes investment planning, savings
            management, and risk assessment. We focus on creating sustainable
            financial solutions that align with your future objectives. Based on
            this in-depth analysis, our experienced financial experts develop a
            personalized strategy tailored specifically to your needs. This
            strategy may include investment planning, savings and wealth
            management, retirement planning, tax efficiency strategies, and risk
            management solutions. Our goal is to create a well-balanced
            financial roadmap that supports both your short-term priorities and
            long-term ambitions.
          </p>
        </div>
        <div className="mt-[60px]">
          <div className="pb-[90px] relative ">
            <div className="absolute top-[50px] -translate-y-1/2 w-full h-[1px] bg-[#02090f27]">
              <span className="inline-block text-xl text-[#02090f27] absolute top-[-9.5px] left-[-10px]">
                {triangleRight}
              </span>
              <span className="inline-block text-xl text-[#02090f27] absolute right-[-9.5px] top-[-10px]">
                {triangleLeft}
              </span>
            </div>
            <div className="flex justify-around">
              {servicesDetailProcessSteps.map((s) => {
                return (
                  <div
                    className="flex flex-col items-center gap-[10px] relative"
                    key={s.id}
                  >
                    <p className="text-base font-medium text-primary">
                      {s.step}
                    </p>
                    <span className=" group-hover:text-secondary w-[30px] h-[30px] rounded-full bg-bg-secondaryTwo flex items-center  justify-center text-xl text-primary shadow-lg">
                      {dot}
                    </span>
                    <span
                      className={`absolute    w-[1px] bg-[#02090f27] top-full   ${s.id % 2 === 0 ? "h-[130px]" : "h-[70px]"}`}
                    >
                      <span className="absolute  text-[#02090f27] bottom-[-9px] left-[-7.5px] rotate-[-90deg]">
                        {triangleLeft}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="h-[342px]  flex gap-[60px]">
            {servicesDetailProcessSteps.map((step) => (
              <div
                key={step.id}
                className="  group bg-bg-secondaryTwo h-fit  max-w-[355px] px-[38px] py-[30px] even:self-end space-y-[20px] rounded-[10px]"
              >
                <h3 className="text-center para-TwoXl font-bold text-primary">
                  {step.title}
                </h3>
                <p className="text-center text-tarnary font-normal para-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceDescription;
