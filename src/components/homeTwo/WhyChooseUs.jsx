"use client";

import Image from "next/image";
const WhyChooseUs = () => {
  return (
    <section className="pt-10 lg:pt-[120px] bg-black overflow-hidden">
      {/* ai 2ta container er vitore thakbe */}
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[935px] mx-auto mb-16">
          <p className="text-white text-base lg:text-[31px] lg:leading-[44px] underline underline-offset-4">
            Empowering your financial journey with expertise integrity and
            tailored solutions. The Consult Agency team provides continuous
            support to help your business with confidence and success your
            future growth.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="relative w-[280px] h-[315px]">
            <Image
              src="/images/home2_whychoose/whychoose1.png"
              alt="Why Choose Us Icon"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      {/* Image section container er bahire — full width pabe */}
      <div className="relative mx-auto w-full h-[620px]">
        <Image
          src="/images/home2_whychoose/whychoose2.png"
          alt="Team Meeting"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        {/* Floating Card */}
        <div className="absolute top-[68%] -translate-y-1/2 right-[80px] xl:right-[150px] w-full max-w-[380px] bg-white flex flex-col shadow-2xl z-10">
          <div className="py-[45px] pl-[35px] pr-[54px]">
            <div className="flex items-center mb-[30px]">
              <div className="relative w-[162px] h-[60px]">
                <Image
                  src="/images/home2_whychoose/whychoose3.png"
                  alt="Team Members"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-[90px] font-bold text-black leading-none">
                2k+
              </h2>
              <p className="text-primary text-[17px] leading-7">
                Serving happy customers worldwide with trusted excellence
              </p>
            </div>
          </div>
          <button className="flex items-center justify-between w-full bg-red-500 hover:bg-red-600 transition-colors text-white px-6 py-4 text-sm font-medium">
            <span>
              Book your
              <br />
              <span className="font-semibold">free consultation today</span>
            </span>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 26H26M26 26V2M26 26L2 2"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
