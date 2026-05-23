import React from "react";
import allImages from "../helper/imageProvider";
import Image from "next/image";

import { allIcons } from "../helper/iconProvider";

import Link from "next/link";
import ButtonThree from "../ui/ButtonThree";

const AboutVideo = () => {
  const { aboutUsVideo } = allImages;
  const { play } = allIcons;

  return (
    <section className="relative flex flex-col lg:block overflow-hidden">
      {/* Image — mobile: full width stack, lg+: absolute overlap */}
      <div
        className="
          relative w-full h-[300px] sm:h-[400px]
          lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0 lg:z-10
          lg:w-[440px] lg:h-[500px]
          xl:w-[560px] xl:h-[560px]
          2xl:w-[919px] 2xl:h-[656px]
          relative
        "
      >
        <Image
          src={aboutUsVideo}
          fill
          alt="aboutUsVideo"
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 440px, (max-width: 1536px) 560px, 919px"
        />
        <Link
          href={"/aboutVideo"}
          className="absolute w-full top-0 z-10 left-0 h-full flex items-center justify-center"
        >
          <div className="relative flex items-center justify-center w-[52px] h-[52px]">
            {/* for  under sm */}
            <span
              className="absolute inset-0  z-10 rounded-full bg-blue-500/30 block sm:hidden animate-wave2sm"
              style={{ animationDelay: "0s" }}
            />
            <span
              className="absolute inset-0 z-10 rounded-full bg-sky-500/30 block sm:hidden animate-wave2sm"
              style={{ animationDelay: "0.6s" }}
            />
            <span
              className="absolute inset-0 z-10  rounded-full bg-sky-400/30 block sm:hidden animate-wave2sm"
              style={{ animationDelay: "1.2s" }}
            />
            {/* for sm , md ,lg */}
            <span
              className="absolute inset-0  z-10 hidden sm:block rounded-full bg-blue-500/30  animate-wave2"
              style={{ animationDelay: "0s" }}
            />
            <span
              className="absolute inset-0 z-10  hidden sm:block rounded-full bg-sky-500/30  animate-wave2"
              style={{ animationDelay: "0.6s" }}
            />
            <span
              className="absolute inset-0 z-10  hidden sm:block rounded-full bg-sky-400/30  animate-wave2"
              style={{ animationDelay: "1.2s" }}
            />

            <div className="relative  rounded-full  flex items-center  justify-center shadow-md">
              <span className="absolute inline-block h-[60px] w-[60px] sm:h-[90px] sm:w-[90px]  md:h-[100px] md:w-[100px]  lg:h-[150px] lg:w-[150px]  rounded-full bg-white/5 backdrop-blur-[20px] z-5" />

              <span className="relative !z-20 text-white text-xl">{play}</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Content box */}
      <div
        className="
          w-full bg-bg-secondaryTwo
          flex items-center justify-center
          px-6 py-12
          sm:px-10 sm:py-16
          lg:ml-[240px] lg:min-h-[700px] lg:px-16 lg:py-20
          xl:ml-[320px] xl:min-h-[780px] xl:px-20 xl:py-24
          2xl:ml-[460px] 2xl:min-h-[896px] 2xl:px-24 2xl:py-0
          lg:justify-center
          
        "
      >
        <div className="w-full max-w-[538px]">
          <p className="rounded-[4px] w-fit border border-[#0000001b] text-sm font-bold uppercase text-primary py-[5px] px-[15px]">
            about company
          </p>
          <h3 className="pt-6 lg:pt-[30px] headingThree font-bold text-primary underline">
            Creating trust through creativity and powerful business analytics
          </h3>
          <p className="text-tarnary para-lg font-normal py-6 lg:py-[35px]">
            Enterprise partnerships, built on clarity & craft, are the
            foundation of sustainable growth and long term success. By aligning
            strategic goals & thoughtful execution can create meaningful
            collaborations that drives innovation
          </p>

          <div className="self-start flex items-center w-fit gap-2 border border-primary text-primary text-sm sm:text-base font-medium rounded-[90px] px-4 py-2 sm:px-7.5 sm:py-4 cursor-pointer hover:bg-white/90 transition-colors group">
            <Link href={"/contact"} className="inline-block">
              <ButtonThree
                frontText="Get started now"
                backText="Get started now"
                backgroundColor="transparent"
                textColor="#02090F"
                fontSize={14}
                paddingTop={0}
                paddingBottom={0}
                paddingLeft={0}
                paddingRight={0}
              />
            </Link>
            <span className="inline-block transition-transform group-hover:translate-x-1">
              <svg
                width="9"
                height="12"
                viewBox="0 0 9 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0.77735 0.0848229C0.445073 -0.136695 0 0.1015 0 0.500848V10.6323C0 11.0317 0.445073 11.2699 0.77735 11.0484L8.37596 5.98261C8.67283 5.7847 8.67283 5.34848 8.37596 5.15056L0.77735 0.0848229Z"
                  fill="#02090F"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVideo;
