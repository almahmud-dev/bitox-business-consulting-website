import React from "react";
import Container from "../ui/Container";
import RotatingBadge from "../ui/RotatingBadge";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <section className="pt-[180px] pb-[120px] bg-bg-secondaryOne">
      <Container size="2xl">
        <div>
          <h1 className="font-heading headingOne  uppercase tracking-tight ">
            <span className="block font-extrabold ">
              <span className="flex items-center">
                Business{" "}
                <RotatingBadge
                  text="BEST SOLUTION • " // text change
                  className="w-[146px] h-[146px] ml-[30px] " // size change
                />
              </span>
            </span>
            <span className="block font-medium pl-[450px]">Strategy</span>
          </h1>
        </div>
      </Container>
      
    </section>
    
  );
};

export default HeroSection;
