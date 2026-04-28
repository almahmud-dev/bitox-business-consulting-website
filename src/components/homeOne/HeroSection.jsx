import RotatingBadge from "../ui/RotatingBadge";
import Container from "../ui/Container";
import HeroCard from "../ui/HeroCard";
import Image from "next/image";
import allImages from "../helper/imageProvider";
import Responsive from "../ui/Responsive";
import { heroSections } from "../helper/homeOnehelper";

const HeroSection = () => {
  const { heroBanner } = allImages;

  return (
    <section className=" pt-[140px] lg:pt-[180px] pb-[120px] ">
      <Container size="2xl">
        {/* lg devices */}
        <div className="relative hidden lg:block">
          <h1 className="font-heading headingOne  uppercase tracking-tight ">
            <span className="block font-extrabold ">
              <span className="flex items-center">
                Business <RotatingBadge size="lg" />
              </span>
            </span>
            <span className="block font-medium pl-[520px]">Strategy</span>
          </h1>
          <div className="absolute top-[100%] translate-y-[-13.5%] left-0 ">
            <HeroCard />
          </div>
        </div>
        {/* sm devices */}
        <div className="relative lg:hidden md:hidden block">
          <h1 className="font-heading headingOne uppercase tracking-tight flex flex-col items-center gap-y-2">
            <span className="block font-extrabold ">Business</span>
            <RotatingBadge size="sm" />
            <span className="block font-medium">Strategy</span>
          </h1>
          <div className=" mt-12 flex justify-center ">
            <HeroCard />
          </div>
        </div>
        {/* md devices */}
        <div className="relative lg:hidden md:block hidden">
          <h1 className="font-heading headingOne uppercase tracking-tight flex flex-col items-center gap-y-3">
            <span className="block font-extrabold">Business</span>
            <RotatingBadge size="sm" />
            <span className="block font-medium">Strategy</span>
          </h1>
          <div className=" mt-13 flex justify-center ">
            <HeroCard />
          </div>
        </div>
      </Container>
      <div className=" mt-[50px] lg:mt-[90px] mb-[20px] px-3">
        <Image src={heroBanner} alt="herobanner -images" className="w-full" />
      </div>
      {/* for lg */}
      <div className="px-3 hidden lg:block">
        <Responsive.Flex
          as="ul"
          justify="flex-start"
          gap="none"
          wrap={false}
          style={{ gap: "12px" }}
        >
          {heroSections.map((items, index) => (
            <li
              key={index}
              className="
          flex-1 min-w-0
          flex items-center justify-center
          py-[19px] px-[20px]
          xl:py-[19px] xl:px-[20px]
          lg:py-[16px] lg:px-[16px]
          md:py-[13px] md:px-[12px]
          sm:py-[10px] sm:px-[10px]
          border border-[#0000001a]
          text-primary font-medium
          rounded-[6px]
          text-center
          whitespace-nowrap
        "
            >
              {items.title}
            </li>
          ))}
        </Responsive.Flex>
      </div>
      {/* for sm and md  */}
      <div className="px-3 lg:hidden block">
        <Responsive.Flex
          as="ul"
          justify="flex-start"
          gap="none"
          style={{ gap: "16px" }}
          className=""
        >
          {heroSections.map((items, index) => (
            <li
              key={index}
              className="py-[19px] px-[77px] border border-[#0000001a] text-primary font-medium rounded-[6px]
              lg:py-[16px] lg:px-[77px]
              md:py-[13px] md:px-[30px]
              sm:py-[10px] sm:px-[15px]
              "
            >
              {items.title}
            </li>
          ))}
        </Responsive.Flex>
      </div>
    </section>
  );
};

export default HeroSection;
