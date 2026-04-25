import React from "react";
import Container from "../ui/Container";
import { allIcons } from "../helper/iconProvider";
import TestimonialCard from "../ui/TestimonialCard";
import TestimonialsSlider from "../ui/TestimonialsSlider";

const TestimonialsSection = () => {
  const { star } = allIcons;

  return (
    <section>
      <Container size="full">
        <div className="grid grid-cols-4 ">
          <div className="bg-secondary  flex flex-col justify-between">
            <div className="p-[30px]">
              <h2 className="headingOne text-bg-secondaryTwo font-bold text-center">
                4.9
              </h2>
              <ul className="flex gap-[2px] justify-end mt-[10px] mr-[55px]">
                {[...new Array(5)].map((_, index) => {
                  return (
                    <li key={index} className="text-bg-secondaryTwo text-xl">
                      {star}
                    </li>
                  );
                })}
              </ul>
              <h3 className="headingFour mt-[30px]  text-center text-bg-secondaryTwo font-bold">
                Real stories. Real impact.
              </h3>
            </div>
            <div className="     border-t border-b border-[#ffffff1b]">
              <div className="flex items-center justify-between  p-[30px]">
                <div>
                  <h6 className="headingSix font-bold text-bg-secondaryTwo">
                    99%
                  </h6>
                  <p className="text-base pt-1   font-medium text-bg-secondaryTwo">
                    Satisfaction Rate
                  </p>
                </div>
                <div>
                  <h6 className="headingSix font-bold text-bg-secondaryTwo">
                    70+
                  </h6>
                  <p className="text-base pt-1   font-medium text-bg-secondaryTwo">
                    Scompanies automated
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-3    ">
            <TestimonialsSlider />  
           
          </div>
        </div>
      </Container>

     
    </section>
  );
};

export default TestimonialsSection;
