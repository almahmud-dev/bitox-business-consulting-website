"use client";
import Image from "next/image";
import allImages from "../helper/imageProvider";
import { usePathname } from "next/navigation";
import Link from "next/link";

const InnerPageHero = ({
  title = "Empowering Growth & Success",
  subtitle = "A reputed consultant agency we've spent 13+ year's",
  navVariant = "homeOne",
  titleWidth,
}) => {
  const { commonHeroImages } = allImages;

  const pathname = usePathname();

  const pageName =
    pathname
      .split("/")
      .filter(Boolean)
      .pop()
      ?.replace(/-/g, " ")
      ?.replace(/\b\w/g, (c) => c.toUpperCase()) || "Home";

  return (
    <section className={navVariant === "homeTwo" ? "pt-[100px]" : "pt-[70px]"}>
      {/* 
        Height breakdown:
        320px  → h-[320px]
        480px  → h-[400px]
        640px  → h-[500px]
        768px+ → h-[580px]
        1024px+→ h-[662px]
      */}
      <div className="relative !w-full h-[320px] xs:h-[400px] sm:h-[500px] md:h-[580px] lg:h-[662px]">
        <Image
          src={commonHeroImages}
          fill
          alt="commonHeroImages"
          className="object-cover z-0"
          priority
        />

        <div className="absolute z-[20] inset-0">
          {/* Title */}
          {/*
            320px  → top-[60px],  left-1/2, translate-x-[-50%],  max-w-[280px], text-center
            480px  → top-[80px],  left-1/2, translate-x-[-60%],  max-w-[340px]
            640px  → top-[100px], left-1/2, translate-x-[-70%],  max-w-[420px]
            768px  → top-[120px], left-1/2, translate-x-[-75%],  max-w-[500px]
            1024px → top-[150px], left-1/2, translate-x-[-80%],  max-w-[600px]
          */}
          <h2
            className={`
              
               headingTwo font-bold text-bg-secondaryTwo
              absolute
              top-[60px]   left-1/2 -translate-x-1/2 max-w-[280px]  text-center
              xs:top-[80px]  xs:max-w-[340px]
              sm:top-[100px] sm:-translate-x-[60%]  sm:max-w-[420px] sm:text-left
              md:top-[120px] md:-translate-x-[70%]  md:max-w-[500px]
              lg:top-[150px] lg:-translate-x-[80%]  lg:max-w-[600px]

              ${titleWidth}

              `}
          >
            {title}
          </h2>

          {/* Breadcrumb / subtitle card */}
          {/*
            320px  → bottom-[16px], left-1/2, -translate-x-1/2, w-[calc(100%-32px)], p-[16px]
            480px  → bottom-auto,   top-[200px], left-1/2, -translate-x-1/2
            640px  → top-[240px],   left-1/2, -translate-x-[55%]
            768px  → top-[280px]
            1024px → top-[330px], left-1/2, -translate-x-[unset] (original)
          */}
          <div
            className="
              absolute
              p-[16px] sm:p-[24px] lg:p-[30px]
              rounded-[10px] backdrop-blur-[5px] bg-white/5
              space-y-3 sm:space-y-4 lg:space-y-5

              bottom-[16px] left-1/2 -translate-x-1/2
              w-[calc(100%-32px)] max-w-[480px]

              xs:bottom-[24px]
              sm:bottom-auto sm:top-[240px] sm:-translate-x-[55%]
              md:top-[280px]  md:-translate-x-[60%]
              lg:top-[330px]  lg:-translate-x-[unset] lg:left-1/2
            "
          >
            <p className=" border border-[#ffffff1a] rounded-[4px] px-[15px]  py-[5px] w-fit flex gap-x-3 text-sm uppercase font-bold">
              <Link href={"/"}>
                <span className="text-bg-secondaryTwo">home</span>
              </Link>
              <span className="text-bg-secondaryTwo">//</span>
              <span className="text-secondary">{pageName}</span>
            </p>
            <p className="para-xl text-bold text-bg-secondaryTwo max-w-[327px]">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerPageHero;
