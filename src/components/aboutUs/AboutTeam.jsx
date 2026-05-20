import allImages from "../helper/imageProvider";
import Container from "../ui/Container";
import { Grid } from "../ui/Responsive";
import TeamIntroHeader from "../ui/TeamIntroHeader";
import TeamMemberCard from "../ui/TeamMemberCard";
const AboutTeam = () => {
  const { expertsTeamInfo } = allImages;
  return (
    <section className="py-10 md:py-16 lg:py-[120px]">
      <Container size="lg">
        {/* ── Header Row */}
        <div className="mb-10">
          <TeamIntroHeader />
        </div>

        {/* ── Expert Cards Grid */}
        <Grid cols={{ base: 1, sm: 2, md: 3 }} gap={30}>
          {expertsTeamInfo?.slice(0, 3)?.map((expertItems) => {
            return <TeamMemberCard key={expertItems.id} expert={expertItems}  slug={"team"}/>;
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default AboutTeam;
