import InnerPageHero from "@/components/ui/InnerPageHero";
import PricingPlan from "@/components/homeTwo/PricingPlan";
import ProcessSteps from "@/components/homeOne/ProcessSteps";
import ServiceShowcase from "@/components/servicesComp/ServiceShowcase";

const Services = () => {
  return (
    <>
      <InnerPageHero title="Trusted High Quality Services" />
      <ServiceShowcase />
      <ProcessSteps />
      <PricingPlan />
    </>
  );
};

export default Services;
