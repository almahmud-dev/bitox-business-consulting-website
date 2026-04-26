import Image from "next/image";
import React from "react";
import { allIcons } from "../helper/iconProvider";

const ProjectCard = ({
  image,
  title,
  subtitleOne,
  subtitleTwo,
  dotclass,
  mainClass,
}) => {
  const { chevronRight } = allIcons;

  return (
    <div
      className={`relative  group overflow-hidden cursor-pointer ${mainClass}`}
    >
      <span className="bg-bg-secondaryTwo text-primary text-base px-[18px] py-[15px] rounded-[4px] inline-block absolute top-5 md:top-[-60px] right-5 group-hover:top-5  duration-700 ease-in-out z-[20]">
        {chevronRight}
      </span>
      <Image
        src={image}
        fill
        alt="project cart "
        className="z-[0] object-cover "
      />
      <div className=" bottom-5 group-hover:bottom-5   duration-700 ease-in-out  absolute md:bottom-[-180px] left-1/2 -translate-x-1/2 bottom-5 bg-bg-secondaryTwo w-[280px] h-[100px] md:w-[400px] md:h-[166px] z-[10] rounded-t-full flex  flex-col items-center justify-center">
        <h6 className="headingSixAlter text-primary font-bold pb-[6px]">
          {title}
        </h6>{" "}
        <p className="text-sm  font-medium flex items-center gap-x-[10px]">
          {subtitleOne}
          <span
            className={`bg-primary h-[6px] w-[6px] rounded-full inline-block ${dotclass}`}
          ></span>{" "}
          {subtitleTwo}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
