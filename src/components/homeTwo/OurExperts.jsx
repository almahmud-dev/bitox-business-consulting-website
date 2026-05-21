import Container from "../ui/Container";
import { Grid } from "../ui/Responsive";
import allImages from "../helper/imageProvider";
import TeamIntroHeader from "../ui/TeamIntroHeader";
import TeamMemberCard from "../ui/TeamMemberCard";

export default function OurExperts() {
  const { expertsTeamInfo } = allImages;

  return (
    <section className="bg-bg-secondaryOne py-10 lg:py-30">
      <Container size="lg">
        {/* ── Header Row */}
        <div className="mb-10">
          <TeamIntroHeader />
        </div>

        {/* ── Expert Cards Grid */}
        <Grid cols={{ base: 1, sm: 2, md: 3 }} gap={30}>
          {expertsTeamInfo?.slice(0, 3)?.map((expertItems) => {
            return (
              <TeamMemberCard
                key={expertItems.id}
                expert={expertItems}
                slug={"/team"}
              />
            );
          })}
        </Grid>
      </Container>
    </section>
  );
}
