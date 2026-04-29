import AboutOverview from "@/components/aboutUs/AboutOverview";
import AboutVideo from "@/components/aboutUs/AboutVideo";
import InnerPageHero from "@/components/ui/InnerPageHero";
import React from "react";

const About = () => {
  return (
    <div>
      <InnerPageHero  />
      <AboutOverview/>
      <AboutVideo/>
    </div>
  );
};

export default About;
