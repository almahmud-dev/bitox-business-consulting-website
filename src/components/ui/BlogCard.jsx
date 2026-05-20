import Image from "next/image";
import React from "react";
import allImages from "../helper/imageProvider";
import { allIcons } from "../helper/iconProvider";
import Link from "next/link";

const BlogCard = ({
  batchName,
  image,
  itmeText,
  dateText,
  description,
  slug,
}) => {
  const { plus } = allImages;
  const { chevronRight } = allIcons;
  return (
    <article className="group w-full">
      <div className="relative !h-[250px] sm:!h-[340px] !w-full rounded-[6px] overflow-hidden">
        <Image
          fill
          src={image}
          alt="blogCard-Images"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="rounded-[6px] object-cover group-hover:scale-[1.1] duration-700 ease-in-out"
        />

        <Link href={`/blog/${slug}`} className="absolute inset-0 z-10">
          <span className="absolute text-xl px-[13px] py-[10px] rounded-[4px] text-primary bg-bg-secondaryTwo right-5 bottom-5 md:bottom-[-50px] duration-700 ease-in-out group-hover:bottom-5">
            {chevronRight}
          </span>
        </Link>

        <div className="absolute top-5 left-5 px-[15px] py-[6px] flex items-center gap-x-[10px] rounded-[4px] bg-bg-secondaryTwo z-20">
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

      <p className="pt-[25px] pb-[20px] flex items-center gap-x-5 text-base font-medium text-primary">
        {itmeText} <span> //</span> {dateText}
      </p>

      <Link href={`/blog/${slug}`} className="inline-block">
        <h6 className="headingSix text-primary font-medium transition duration-500 ease-in-out group-hover:text-secondary  line-clamp-2">
          {description}
        </h6>
      </Link>
    </article>
  );
};

export default BlogCard;
