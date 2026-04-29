import TeamGrid from "@/components/teamMember/TeamGrid";
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
    </>
  );
};

export default Team;
