import React from "react";
import Container from "../ui/Container";
import Services from "../homeTwo/Services";

const ServiceShowcase = () => {
  return (
    <section className="py-[120px]">
      <Container size="lg">
        <div>
          <div className="flex justify-center mb-[30px]   ">
            <span className="inline-flex items-center justify-center border border-black/10 rounded-sm py-1 px-3.75 text-xs font-bold uppercase tracking-widest">
              Services
            </span>
          </div>
          <h2 className="text-center text-[20px] md:text-[38px] xl:text-[42px] font-bold underline underline-offset-4 max-w-2xl mx-auto mb-12 leading-snug">
            Innovative Solutions That Drive Business Forward
          </h2>
        </div>
        <div>
          <Services lastValue={4} />
        </div>
      </Container>
    </section>
  );
};

export default ServiceShowcase;
