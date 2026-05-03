import allImages from "@/components/helper/imageProvider";
import Container from "@/components/ui/Container";
import Image from "next/image";

const ServiceImage = () => {
  const { servivesDetailsBannaer } = allImages;
  return (
    <section className="py-[60px] sm:py-[80px] lg:py-[120px]">
      <Container>
        <div className="w-full h-[220px] sm:h-[380px] md:h-[500px] lg:h-[690px] relative z-10 group overflow-hidden rounded-[6px]">
          <Image
            alt="servivesDetailsBannaer"
            className="object-cover rounded-[6px] z-0 transition-transform duration-700 ease-in-out group-hover:scale-105"
            fill
            src={servivesDetailsBannaer}
          />

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 ease-in-out rounded-[6px] z-10" />

          {/* Stats card */}
          <div className="
            w-[170px] h-[120px]
            sm:w-[260px] sm:h-[160px]
            md:w-[360px] md:h-[200px]
            lg:w-[470px] lg:h-[242px]
            flex flex-col justify-center items-center
            space-y-[6px] sm:space-y-[10px]
            right-[10px] sm:right-[20px] lg:right-[30px]
            bottom-[-120px] sm:bottom-[-160px] md:bottom-[-200px] lg:bottom-[-242px]
            group-hover:bottom-[15px] sm:group-hover:bottom-[25px] lg:group-hover:bottom-[35px]
            absolute rounded-t-full bg-secondary
            transition-all duration-600 ease-in-out z-20
          ">
            <h2 className="font-bold text-[40px]/[40px] sm:text-[60px]/[60px] md:text-[75px]/[75px] lg:text-[90px]/[90px] text-bg-secondaryTwo">
              29+
            </h2>
            <h5 className="text-bg-secondaryTwo headingSix font-medium text-center px-2">
              Our talented consultant
            </h5>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceImage;