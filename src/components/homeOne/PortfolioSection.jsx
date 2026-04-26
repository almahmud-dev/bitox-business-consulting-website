import React from "react";
import Container from "../ui/Container";
import ProjectCard from "../ui/ProjectCard";
import Responsive from "../ui/Responsive";
import allImages from "../helper/imageProvider";

const PortfolioSection = () => {
  const { projectImages } = allImages;
  return (
    <section className="  py-[70px] md:py-[120px]">
      <Container size={"lg"}>
        <h2 className="headingTwo max-w-[950px]  text-primary font-bold text-center mx-auto">
          Real Challenges. Real Solutions. Real Impact.
        </h2>
        <div className="py-[60px] space-y-[30px]">
          <Responsive.Grid cols={{ base: 1, lg: 2 }} gap="lg">
            {projectImages[0].map((items, index) => {
              return (
                <ProjectCard
                  image={items.img}
                  key={index}
                  mainClass={"w-full !h-[400px] md:!h-[510px]"}
                  title={items.title}
                  subtitleOne={items.subtitleOne}
                  subtitleTwo={items.subtitleTwo}
                />
              );
            })}
          </Responsive.Grid>
          <Responsive.Grid cols={{ base: 1, lg: 3 }} gap="lg">
            {projectImages[1].map((items, index) => {
              return (
                <ProjectCard
                  image={items.img}
                  key={index}
                  mainClass={"w-full !h-[400px] md:!h-[510px] "}
                  title={items.title}
                  subtitleOne={items.subtitleOne}
                  subtitleTwo={items.subtitleTwo}
                />
              );
            })}
          </Responsive.Grid>
        </div>
        <div>
          <button className="w-full cursor-pointer text-center py-5  text-primary font-medium text-base border border-[#0000001a] rounded-[6px  ]">
            See all case studies
          </button>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
