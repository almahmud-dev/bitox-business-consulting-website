import TeamGrid from "@/components/teamMember/TeamGrid";
import TeamPartners from "@/components/teamMember/TeamPartners";
import TeamWorkspace from "@/components/teamMember/TeamWorkspace";
import InnerPageHero from "@/components/ui/InnerPageHero";
import React from "react";

const Team = () => {
  return (
    <>
      <InnerPageHero
        title="Meet Our Experienced Professionals"
        titleWidth={"lg:!max-w-[650px]"}
      />
      <TeamGrid/>
      <TeamWorkspace/>  
      <TeamPartners/>
    </>
  );
};

export default Team;
