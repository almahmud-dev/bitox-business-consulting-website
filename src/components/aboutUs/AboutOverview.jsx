import React from "react";
import Container from "../ui/Container";
import AboutStatCard from "../ui/AboutStatCard";
import Responsive from "../ui/Responsive";
import { aboutStatsTwo } from "../helper/aboutHelper";

const AboutOverview = () => {
  return (
    <section className="py-[120px] ">
      <Container size={"lg"}>
        <div className="">
          <Responsive.Flex>
            {aboutStatsTwo.map((items, index) => {
              return (
                <AboutStatCard
                  key={index}
                  description={items.description}
                  value={items.value}
                  title={items.title}
                />
              );
            })}
          </Responsive.Flex>
        </div>
      </Container>
    </section>
  );
};

export default AboutOverview;
