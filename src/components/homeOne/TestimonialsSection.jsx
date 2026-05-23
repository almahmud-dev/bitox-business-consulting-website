import Container from "../ui/Container";
import { allIcons } from "../helper/iconProvider";
import TestimonialsSlider from "../ui/TestimonialsSlider";
import CountUpStat from "../ui/CountUpStat";

const TestimonialsSection = () => {
  const { star } = allIcons;

  return (
    <section>
      <Container size="full">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Left Info Panel */}
          <div className="bg-secondary flex flex-col justify-between">
            <div className="p-4 sm:px-5 sm:py-[30px] xl:p-[30px]">
              <div className="max-w-[290px]  mx-auto">
                {/* CountUpStat for 4.9 rating */}
                <CountUpStat
                  value="4.9"
                  statTextClass="headingOne font-bold text-bg-secondaryTwo text-center"
                  textClassName="headingOne text-bg-secondaryTwo font-bold text-center"
                  hideLabel
                />

                <ul className="flex gap-[2px] justify-center lg:justify-end mt-[10px] ">
                  {[...new Array(5)].map((_, index) => (
                    <li
                      key={index}
                      className="text-bg-secondaryTwo text-lg sm:text-xl"
                    >
                      {star}
                    </li>
                  ))}
                </ul>
              </div>
              <h3 className="headingFour mt-[20px] lg:mt-[30px] text-center text-bg-secondaryTwo font-bold">
                Real stories. Real impact.
              </h3>
            </div>

            {/*  CountUpStat for bottom stats */}
            <div className="border-t border-b border-[#ffffff1b] h-[144.8px]">
              <div className="flex items-center  justify-between gap-4    p-4 sm:px-5 sm:py-[30px] xl:p-[30px]  w-full">
                <div>
                  <CountUpStat
                    value="99%"
                    label="Satisfaction Rate"
                    duration={1800}
                    statTextClass="headingSix font-bold text-bg-secondaryTwo"
                    labelClass="text-sm sm:text-base pt-1 font-medium text-bg-secondaryTwo"
                  />
                </div>
                <div className=" ">
                  <CountUpStat
                    value="70+"
                    label="Companies Automated"
                    duration={1800}
                    statTextClass="headingSix font-bold text-bg-secondaryTwo"
                    labelClass="text-sm sm:text-base pt-1 font-medium text-bg-secondaryTwo"
                    className="text-end sm:text-start"
                  />
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
