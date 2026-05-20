"use client";

import Image from "next/image";
import allImages from "../helper/imageProvider";
import Link from "next/link";
const WhyChooseUs = () => {
  const { whyChooseUsImg } = allImages;

  return (
    <section className="pt-10 lg:pt-30 bg-black overflow-hidden">
      {/* ai 2ta container er vitore thakbe */}
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[935px] mx-auto mb-16">
          <p className="text-white text-base lg:text-[31px] lg:leading-11 underline underline-offset-4">
            Empowering your financial journey with expertise integrity and
            tailored solutions. The Consult Agency team provides continuous
            support to help your business with confidence and success your
            future growth.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="relative w-70 h-78.75">
            <Image
              src="/images/home2_whychoose/whychoose1.png"
              alt="Why Choose Us Icon"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
      {/* Image section container er bahire — full width pabe */}
      <div className="relative mx-auto w-full h-155">
        <Image
          src="/images/home2_whychoose/whychoose2.png"
          alt="Team Meeting"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        {/* Floating Card */}
        <div
          className="absolute top-[68%] -translate-y-1/2 right-20 xl:right-37.5 
                w-full max-w-95 
                sm:right-20 sm:max-w-95
                max-[640px]:right-auto max-[640px]:left-4 max-[640px]:max-w-[260px]
                bg-white flex flex-col shadow-2xl z-10"
        >
          <div className="py-11.25 pl-8.75 pr-13.5 max-[640px]:py-5 max-[640px]:pl-4 max-[640px]:pr-5">
            <div className="flex relative items-center mb-[89px]  ">
              {whyChooseUsImg.map((items) => {
                return (
                  <div
                    className={`absolute h-[58.72px] border-2 border-white w-[58.72px] rounded-full overflow-hidden ${items.other}`}
                    key={items.id}
                  >
                    <Image
                      src={items.img}
                      alt="Team Members"
                      fill
                      className="object-cover "
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                );
              })}
            </div>

            <div>
              <h2 className="text-[90px] font-bold text-black leading-none max-[640px]:text-[52px]">
                2k+
              </h2>
              <p className="text-primary text-[17px] leading-7 max-[640px]:text-[13px] max-[640px]:leading-5">
                Serving happy customers worldwide with trusted excellence
              </p>
            </div>
          </div>

          <Link href={"/contact"}
            className="flex items-center justify-between w-full bg-red-500 hover:bg-red-600 
                     transition-colors text-white px-6 py-4 text-sm font-medium
                     max-[640px]:px-4 max-[640px]:py-3 max-[640px]:text-xs"
          >
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
              className="max-[640px]:w-5 max-[640px]:h-5 "
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
