// TestimonialsSection.jsx
import React from "react";
import Container from "../ui/Container";
import { allIcons } from "../helper/iconProvider";
import TestimonialsSlider from "../ui/TestimonialsSlider";

const TestimonialsSection = () => {
  const { star } = allIcons;
  return (
    <section>
      <Container size="full">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Left Info Panel */}
          <div className="bg-secondary flex flex-col justify-between">
            <div className="p-[20px] sm:p-[25px] lg:p-[30px]">
              <h2 className="headingOne text-bg-secondaryTwo font-bold text-center">
                4.9
              </h2>
              <ul className="flex gap-[2px] justify-center lg:justify-end mt-[10px]  lg:mr-[55px]">
                {[...new Array(5)].map((_, index) => (
                  <li
                    key={index}
                    className="text-bg-secondaryTwo text-lg sm:text-xl"
                  >
                    {star}
                  </li>
                ))}
              </ul>
              <h3 className="headingFour mt-[20px] lg:mt-[30px] text-center text-bg-secondaryTwo font-bold">
                Real stories. Real impact.
              </h3>
            </div>

            {/* Stats Row */}
            <div className="border-t border-b border-[#ffffff1b]">
              <div className="flex items-center justify-between p-[20px] sm:p-[25px] lg:p-[30px]">
                <div>
                  <h6 className="headingSix font-bold text-bg-secondaryTwo">
                    99%
                  </h6>
                  <p className="text-sm sm:text-base pt-1 font-medium text-bg-secondaryTwo">
                    Satisfaction Rate
                  </p>
                </div>
                <div className="text-end sm:text-start  ">
                  <div className="">
                    <h6 className="headingSix font-bold text-bg-secondaryTwo">
                      70+
                    </h6>
                    <p className="text-sm sm:text-base pt-1 font-medium text-bg-secondaryTwo">
                      Companies Automated
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Slider */}
          <div className="lg:col-span-3">
            <TestimonialsSlider />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
