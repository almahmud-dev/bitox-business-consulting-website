import Image from "next/image";
import React from "react";
import allImages from "../helper/imageProvider";

const BlogCard = ({ batchName, image, itmeText, dateText, description }) => {
  const { plus } = allImages;
  return (
    <article className="group   w-full">
      <div className="relative !h-[340px]  !w-full ">
        <Image
          fill
          src={image}
          alt="blogCard-Images"
          className="rounded-[6px]  object-cover  "
        />
        <div className="absolute top-5 left-5    px-[15px] py-[6px] flex items-center gap-x-[10px] rounded-[4px] bg-bg-secondaryTwo">
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
