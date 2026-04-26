import AboutSectionHO from "@/components/homeOne/AboutSectionHO";
import BlogSectionHO from "@/components/homeOne/BlogSectionHO";
import BrandLogos from "@/components/homeOne/BrandLogos";
import ContactSectionHO from "@/components/homeOne/ContactSectionHO";
import FeaturesRound from "@/components/homeOne/FeaturesRound";
import HeroSection from "@/components/homeOne/HeroSection";
import PortfolioSection from "@/components/homeOne/PortfolioSection";
import ProcessSteps from "@/components/homeOne/ProcessSteps";
import ServicesSection from "@/components/homeOne/ServicesSection";
import TestimonialsSection from "@/components/homeOne/TestimonialsSection";
import VideoShowcase from "@/components/homeOne/VideoShowcase";
import React from "react";

const Home1 = () => {
  return (
    <>
      <HeroSection />
      <FeaturesRound />
      <AboutSectionHO />
      <BrandLogos />
      <ServicesSection />
      <VideoShowcase />
      <TestimonialsSection/>
      <PortfolioSection/>
      <ProcessSteps/>
      <BlogSectionHO/>
      <ContactSectionHO/>
    </>
  );
};

export default Home1;
