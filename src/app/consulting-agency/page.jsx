import React from "react";
import Herotwo from "@/components/homeTwo/Herotwo";
import OurClients from "@/components/homeTwo/OurClients";
import AboutUs from "@/components/homeTwo/AboutUs";
import CoreFeatures from "@/components/homeTwo/CoreFeatures";
import Services from "@/components/homeTwo/Services";
import WhyChooseUs from "@/components/homeTwo/WhyChooseUs";
import TestimonialsClient from "@/components/homeTwo/TestimonialsClient";
import PricingPlan from "@/components/homeTwo/PricingPlan";
import OurExperts from "@/components/homeTwo/OurExperts";
import OurTeam from "@/components/homeTwo/OurTeam";
import BlogInsight from "@/components/homeTwo/BlogInsight";
import ThemeInitializer from "@/components/helper/ThemeInitializer";
import MarqueeHeroCTA from "@/components/homeTwo/MarqueeHeroCTA";

const page = () => {
  return (
    <>
      <ThemeInitializer pathName="consulting-agency" />
      <Herotwo />
      <OurClients />
      <AboutUs />
      <CoreFeatures />
      <Services />
      <WhyChooseUs />
      <TestimonialsClient />
      <PricingPlan />
      <OurExperts />
      <OurTeam />
      <BlogInsight />
      <MarqueeHeroCTA/>
    </>
  );
};

export default page;