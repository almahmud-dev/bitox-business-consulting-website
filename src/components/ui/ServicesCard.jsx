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
        w-full border border-[#0000001a] last:border-b-0
        ${highlighted ? "bg-color-bg-secondaryTwo" : "bg-color-bg-secondaryTwo"}
        group
      `}
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-[35px] lg:py-[25px] border-b border-black/10 relative">
        {/* Hover Arrow (top-right absolute) */}
        <span className="absolute top-0 right-0 p-3 lg:p-[22px] group-hover:bg-secondary group-hover:text-bg-secondaryTwo transition duration-500 ease-in-out hidden lg:block">
          <ArrowUpRight size={50} />
        </span>

        {/* Icon + Title */}
        <div className="w-full relative">
          <div className="flex items-center gap-3 lg:gap-5">
            <Image
              src={icon}
              alt="services-icon"
              width={40}
              height={40}
              className="!w-8 !h-8 lg:w-10 lg:h-10 shrink-0"
            />
            <h3 className="headingSix font-semibold text-primary">{title}</h3>
          </div>
        </div>

        {/* Arrow Button Link */}
        <Link
          href={href}
          className="
            flex items-center justify-center shrink-0
            w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11
            bg-color-secondary text-white
            hover:bg-color-primary transition-colors duration-300
            ml-3
          "
          aria-label={`Go to ${title}`}
        >
          <ArrowUpRight size={18} strokeWidth={2} />
        </Link>
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
                className="flex items-center gap-2 lg:gap-[10px] para-lg font-normal"
              >
                <Image
                  src={plus}
                  width={16}
                  height={16}
                  alt="services-plus"
                  className="shrink-0"
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
              object-cover
            "
          />
        </div>
      </div>
    </div>
  );
}