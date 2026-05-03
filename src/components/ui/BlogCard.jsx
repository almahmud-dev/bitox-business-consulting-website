import Image from "next/image";
import React from "react";
import allImages from "../helper/imageProvider";
import { allIcons } from "../helper/iconProvider";

const BlogCard = ({ batchName, image, itmeText, dateText, description }) => {
  const { plus } = allImages;
  const { chevronRight } = allIcons;
  return (
    <article className="    w-full">
      <div className="relative !h-[250px]  sm:!h-[340px] group  !w-full group rounded-[6px] overflow-hidden">
        <span className="absolute text-xl px-[13px] py-[10px] rounded-[4px] text-primary bg-bg-secondaryTwo z-10 right-5 bottom-5  md:bottom-[-50px] z-10  duration-700 ease-in-out group-hover:bottom-5 ">
          {chevronRight}
        </span>
        <Image
          fill
          src={image}
          alt="blogCard-Images"
          className="rounded-[6px] object-cover  group-hover:scale-[1.1] duration-700 ease-in-out"
        />
        <div className="absolute top-5 left-5 px-[15px] py-[6px] flex items-center gap-x-[10px] rounded-[4px] bg-bg-secondaryTwo">
          <Image
            height={16}
            width={16}
            alt="card-plus"
            src={plus}
            className="!w-4 !h-4"
          />
          <p className="text-base font-medium text-primary">{batchName}</p>
        </div>
      </div>
      <p className="pt-[25px] pb-[20px]  flex items-center gap-x-5 text-base font-medium text-primary">
        {" "}
        {itmeText} <span> //</span> {dateText}
      </p>
      <h6 className="headingSix text-primary font-medium  group-hover:underline underline-offset-2 line-clamp-2 ">
        {description}
      </h6>
    </article>
  );
};

export default BlogCard;
