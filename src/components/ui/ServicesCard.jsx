import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import allImages from "../helper/imageProvider";

export default function ServiceCard({ card }) {
  const {
    icon,
    title,
    description,
    features,
    image,
    imageAlt,
    href,
    highlighted,
  } = card;

  const { plus } = allImages;

  return (
    <div
      className={`
        w-full border border-[#0000001a] 
        ${highlighted ? "bg-color-bg-secondaryTwo" : "bg-color-bg-secondaryTwo"}
        group
      `}
    >
      {/* Top Header Row  for desktop*/}
      <div className=" hidden lg:block flex items-center justify-between px-2 sm:px-4 py-4 sm:px-6 sm:py-5 lg:px-[35px] lg:py-[25px] border-b border-black/10 relative">
        {/* Hover Arrow (top-right absolute) */}
        <Link href={"/services"}>
          <span className="absolute top-0 right-[-1.5px] p-3 lg:p-[clamp(16.5px,1.5vw,19.5px)] group-hover:bg-secondary group-hover:text-bg-secondaryTwo transition duration-500 ease-in-out hidden lg:block z-10 ">
            {" "}
            <ArrowUpRight size={50} />
          </span>
        </Link>

        {/* Icon + Title */}
        <div className="w-full relative">
          <div className="flex items-center gap-3 lg:gap-5">
            <Image
              src={icon}
              alt="services-icon"
              width={40}
              height={40}
              className="!w-8 !h-8 lg:w-10 lg:h-10 shrink-0 "
            />
            <Link href={"/services"}>
              <h3 className="headingSix font-semibold text-primary transition duration-500 ease-in-out group-hover:text-secondary ">
                {title}
              </h3>
            </Link>
          </div>
        </div>
      </div>
      {/* Top Header Row  for xs devices 320-639px*/}
      <div className="  py-3  block lg:hidden  border-b border-black/10">
        {/* Icon + Title */}

        <div className="flex items-center  justify-around ">
          <Image
            src={icon}
            alt="services-icon"
            width={40}
            height={40}
            className="!w-8 !h-8 lg:w-10 lg:h-10 shrink-0 "
          />
          <Link href={"/services"}>
            <h3 className="headingSix  max-w-[400px] text-center font-semibold text-primary  ">
              {title}
            </h3>
          </Link>
          {/* Hover Arrow (top-right absolute) */}
          <Link href={"/services"} className="inline-block">
            <span className=" inline-block bg-secondary  text-bg-secondaryTwo rounded-lg p-2 mt-1 ">
              {" "}
              <ArrowUpRight size={22} />
            </span>
          </Link>
        </div>
      </div>

      {/* Body */}
      <div className="py-5 px-4 sm:px-6 lg:py-6 lg:px-[35px] flex flex-col lg:flex-row justify-between gap-5 lg:gap-8">
        {/* Left: Description + Features */}
        <div className="flex-1 flex flex-col gap-4 lg:gap-[25px]">
          <p className="para-lg text-tarnary font-normal">{description}</p>

          <ul className="flex flex-col gap-2 lg:gap-[10px]">
            {features.map((feature, i) => (
              <li
                key={i}
                className="flex items-center whitespace-nowrap gap-2 lg:gap-[10px] para-lg font-normal "
              >
                <Image
                  src={plus}
                  width={16}
                  height={16}
                  alt="services-plus"
                  className="shrink-0 "
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-auto">
          <Image
            src={image}
            alt={imageAlt}
            width={290}
            height={260}
            className="
              w-full h-[200px]
              sm:h-[240px]
              lg:w-[290px] lg:h-[260px]
              object-cover rounded-[6px]
            "
          />
        </div>
      </div>
    </div>
  );
}
