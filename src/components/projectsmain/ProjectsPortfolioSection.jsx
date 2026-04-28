// src/app/(pages)/projects/page.jsx

import InnerPageHero from "@/components/ui/InnerPageHero";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import Responsive from "@/components/ui/Responsive";
import allImages from "@/components/helper/imageProvider";

const ProjectsPage = () => {
  const { projectImages } = allImages;
  const extraImages = projectImages[2] ?? [];

  return (
    <main>
      <section className="py-17.5 md:py-30 bg-bg-secondaryOne">
        <Container size={"lg"}>
          <div className="flex justify-center">
            <span className="inline-flex items-center justify-center border border-black/10 rounded-sm py-1 px-3.75 text-xs font-bold uppercase mb-3">
              bitox projects
            </span>
          </div>
          <h2 className="headingTwo max-w-[950px] text-primary font-bold text-center mx-auto">
            Real Challenges. Real Solutions. Real Impact.
          </h2>
          <div className="py-15 space-y-7.5">
            {/* Row 1 — 2-col (homeOne er same 2 ta image) */}
            <Responsive.Grid cols={{ base: 1, lg: 2 }} gap="lg">
              {projectImages[0].map((item, index) => (
                <ProjectCard
                  key={index}
                  image={item.img}
                  mainClass={"w-full !h-[400px] md:!h-[510px]"}
                  title={item.title}
                  subtitleOne={item.subtitleOne}
                  subtitleTwo={item.subtitleTwo}
                />
              ))}
            </Responsive.Grid>

            {/* Row 2 — 3-col (homeOne er same 3 ta image) */}
            <Responsive.Grid cols={{ base: 1, lg: 3 }} gap="lg">
              {projectImages[1].map((item, index) => (
                <ProjectCard
                  key={index}
                  image={item.img}
                  mainClass={"w-full !h-[400px] md:!h-[510px]"}
                  title={item.title}
                  subtitleOne={item.subtitleOne}
                  subtitleTwo={item.subtitleTwo}
                />
              ))}
            </Responsive.Grid>

            {/* Row 3 — 2-col (new 2ta image) */}
            {extraImages.length > 0 && (
              <Responsive.Grid cols={{ base: 1, lg: 2 }} gap="lg">
                {extraImages.map((item, index) => (
                  <ProjectCard
                    key={index}
                    image={item.img}
                    mainClass={"w-full !h-[400px] md:!h-[510px]"}
                    title={item.title}
                    subtitleOne={item.subtitleOne}
                    subtitleTwo={item.subtitleTwo}
                  />
                ))}
              </Responsive.Grid>
            )}
          </div>

          <button className="w-full cursor-pointer text-center py-5 text-primary font-medium text-base border border-[#0000001a] rounded-md">
            See all case studies
          </button>
        </Container>
      </section>
    </main>
  );
};

export default ProjectsPage;
