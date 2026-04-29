import React from "react";
import allImages from "../helper/imageProvider";
import Image from "next/image";
import Button from "../ui/Button";

const AboutVideo = () => {
  const { aboutUsVideo } = allImages;

  return (
    <section className="relative  flex justify-end ">
      <div className=" top-1/2 -translate-y-1/2 left-0 absolute w-[919px] h-[656px] ">
        <Image
          src={aboutUsVideo}
          fill
          alt="aboutUsVideo"
          className="object-cover"
        />
      </div>
      <div className="w-[1228px]  h-[896px]    bg-bg-secondaryTwo  flex items-center  justify-center ">
        <div className="max-w-[538px] ">
          <p className="rounded-[4px] w-fit border border-[#0000001b] text-sm text-bold uppercase text-primary font-bold py-[5px] px-[15px]">
            about company
          </p>
          <h3 className="pt-[30px]  headingThree font-bold text-primary underline">
            Creating trust through creativity and powerful business analytics
          </h3>
          <p className="text-tarnary para-lg font-normal py-[35px]">
            Enterprise partnerships, built on clarity & craft, are the
            foundation of sustainable growth and long term success. By aligning
            strategic goals & thoughtful executionscan create meaningful
            collaborations that drives innovation
          </p>
          <Button  label={"Get started now"}  showIcon={true} />
        </div>
      </div>
    </section>
  );
};

export default AboutVideo;
