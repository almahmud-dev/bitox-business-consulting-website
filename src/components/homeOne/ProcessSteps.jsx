import React from "react";
import Container from "../ui/Container";
import Responsive from "../ui/Responsive";
import allImages from "../helper/imageProvider";
import Image from "next/image";

const ProcessSteps = () => {
  const { plusImages, processImage } = allImages;
  return (
    <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-primary">
      <Container size={"lg"}>
        <div>
          <h2 className="headingTwo text-center max-w-[944px] font-bold text-bg-secondaryTwo mx-auto">
            3 Simple Steps to Accelerate Your Business Growth
          </h2>

          {/* Tab List */}
          <div className="py-[30px] md:py-[40px] lg:py-[60px]">
            <Responsive.Flex as="ul" gap="none">
              <li className="py-[12px] md:py-[15px] lg:py-[19px] text-bg-secondaryTwo text-center rounded-[6px] flex-1 border border-[#ffffff1b] hover:bg-secondary hover:border-transparent transition duration-400 ease-in-out text-xs sm:text-sm lg:text-base">
                01. Discovery & Insights
              </li>
              <li className="py-[12px] md:py-[15px] lg:py-[19px] text-bg-secondaryTwo text-center rounded-[6px] flex-1 border border-[#ffffff1b] hover:bg-secondary hover:border-transparent transition duration-400 ease-in-out text-xs sm:text-sm lg:text-base">
                02. Strategic Planning
              </li>
              <li className="py-[12px] md:py-[15px] lg:py-[19px] text-bg-secondaryTwo text-center rounded-[6px] flex-1 border border-[#ffffff1b] hover:bg-secondary hover:border-transparent transition duration-400 ease-in-out text-xs sm:text-sm lg:text-base">
                03. Execution & Optimization
              </li>
            </Responsive.Flex>
          </div>

          {/* Content */}
          <div className="mt-[20px]">
            <div className="flex flex-col lg:flex-row items-center gap-[30px] lg:gap-0">

              {/* Left Text */}
              <div className="w-full lg:w-auto">
                <p className="text-base text-bg-secondaryTwo font-medium">
                  Step 1
                </p>
                <h4 className="headingFour text-bg-secondaryTwo font-bold py-[15px] lg:py-[25px] max-w-[480px]">
                  Understanding your business
                </h4>
                <div className="space-y-[15px]">
                  <div className="flex items-center gap-3 lg:gap-5">
                    <Image
                      src={plusImages}
                      alt="services-icon"
                      width={20}
                      height={20}
                      className="!w-5 !h-5 lg:w-10 lg:h-10 shrink-0"
                    />
                    <h3 className="para-lg font-semibold text-[#999999] lg:whitespace-nowrap">
                      Analyze your goals, challenges, & long-term vision
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 lg:gap-5">
                    <Image
                      src={plusImages}
                      alt="services-icon"
                      width={20}
                      height={20}
                      className="!w-5 !h-5 lg:w-10 lg:h-10 shrink-0"
                    />
                    <h3 className="para-lg font-semibold text-[#999999] lg:whitespace-nowrap">
                      Review current operations and performance
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 lg:gap-5">
                    <Image
                      src={plusImages}
                      alt="services-icon"
                      width={20}
                      height={20}
                      className="!w-5 !h-5 lg:w-10 lg:h-10 shrink-0"
                    />
                    <h3 className="para-lg font-semibold text-[#999999] lg:whitespace-nowrap">
                      This helps us align our services with exact needs
                    </h3>
                  </div>
                </div>
              </div>

              {/* Right Image + Line */}
              <div className="flex  lg:justify-end w-full lg:w-auto">
                <div className="flex items-center gap-[15px]">
                  {/* Gradient Line — hidden on mobile */}
                  <div className="hidden lg:block">
                    <div className="relative flex items-center">
                      <div className="  lg:w-[clamp(100px,17vw,400px)] xl:w-[clamp(200px,25vw,533px)] 2xl:w-[553px] h-[2px] bg-gradient-to-l from-white/90 via-white/20 to-transparent" />
                      <div className="absolute right-0 w-[10px] h-[10px] rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Image */}
                  <div>
                    <Image
                      width={493}
                      height={372}
                      src={processImage}
                      alt="prcess-step"
                      className="w-full h-auto lg:!h-[372px] lg:!w-[493px] object-cover rounded-[6px]"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSteps;