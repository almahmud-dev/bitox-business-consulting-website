import ServiceDescription from "@/components/servicesComp/service-details/ServiceDescription";
import ServiceImage from "@/components/servicesComp/service-details/ServiceImage";
import ServiceIntroSection from "@/components/servicesComp/service-details/ServiceIntroSection";
import InnerPageHero from "@/components/ui/InnerPageHero";
import React from "react";

const ServicesDetails = () => {
  return (
    <>
      <InnerPageHero title="Trusted High Quality Services" titleWidth={"!w-[300px] sm:!w-auto"} />
      <ServiceIntroSection />
      <ServiceDescription />
      <ServiceImage />
    </>
  );
};

export default ServicesDetails;
