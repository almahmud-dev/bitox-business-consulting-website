import AboutContact from "@/components/aboutUs/AboutContact";
import AboutOverview from "@/components/aboutUs/AboutOverview";
import AboutTeam from "@/components/aboutUs/AboutTeam";
import AboutVideo from "@/components/aboutUs/AboutVideo";
import InnerPageHero from "@/components/ui/InnerPageHero";
import React from "react";

const About = () => {
  return (
    <>
      <InnerPageHero />
      <AboutOverview />
      <AboutVideo />
      <AboutTeam />
      <AboutContact />
    </>
  );
};

export default About;
