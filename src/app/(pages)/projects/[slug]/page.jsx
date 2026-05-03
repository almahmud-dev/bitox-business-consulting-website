import InnerPageHero from "@/components/ui/InnerPageHero";
import ProjectsPortfolioDetails from "@/components/projectsmain/ProjectsPortfolioDetails";

const ProjectsDetails = async ({ params }) => {
  const { slug } =  await params;
  
  return (
    <>
      <InnerPageHero
        title="Smart Digital Business Solutions"
        subtitle="A reputed consultant agency we've spent 13+ year's"
        hasOffset={true}
      />
      <ProjectsPortfolioDetails slug={slug} />
    </>
  );
};

export default ProjectsDetails;
