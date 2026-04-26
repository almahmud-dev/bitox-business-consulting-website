import { serviceCards } from "../helper/homeOnehelper";
import Container from "../ui/Container";
import Responsive from "../ui/Responsive";
import ServiceCard from "../ui/ServicesCard";

export default function ServicesSection() {
  return (
    <section className=" ">
      <Container size="lg">
        <h2 className="text-primary headingTwo text-primary font-bold max-w-[803px] mx-auto text-center mb-[60px]">
          {" "}
          Get the most valuable expert service now
        </h2>
        <div className="rounded-[6px] overflow-hidden">
          <Responsive.Grid cols={{ base: 1, lg:2 }} gap="none">
            {serviceCards.map((card) => (
              <ServiceCard key={card.id} card={card} />
            ))}
          </Responsive.Grid>
        </div>
      </Container>
    </section>
  );
}
