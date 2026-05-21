// components/homeTwo/OurExperts.jsx

import Container from "../ui/Container";
import { Grid } from "../ui/Responsive";
import allImages from "../helper/imageProvider";
import TeamMemberCard from "../ui/TeamMemberCard";
import TeamIntroHeader from "../ui/TeamIntroHeader";

export default function TeamGrid() {
  const { expertsTeamInfo } = allImages;
  return (
    <section className="bg-bg-secondaryOne py-10 lg:py-[120px]">
      <Container size="lg">
        {/* ── Header Row */}

        <div className="mb-10">
          <TeamIntroHeader />
        </div>

        {/* ── Expert Cards Grid */}
        <Grid cols={{ base: 1, md: 3 }} gap={30}>
          {expertsTeamInfo?.map((expertItems) => {
            return <TeamMemberCard key={expertItems.id} expert={expertItems} />;
          })}
        </Grid>
      </Container>
    </section>
  );
}
