// components/sections/PricingSection.jsx
import {
  BarChart2,
  ShieldCheck,
  FlaskConical,
  Bug,
  Headphones,
} from "lucide-react";
import Container from "../ui/Container";
import { Grid } from "../ui/Responsive";
import ButtonThree from "../ui/ButtonThree";

const PLANS = [
  {
    id: "pay-per-project",
    label: "Pay Per project",
    price: "$3,399+",
    perMonth: false,
    variant: "light",
    features: [
      { icon: BarChart2, text: "All Analytics Features" },
      { icon: ShieldCheck, text: "Upgrade Anytime Protection" },
      { icon: FlaskConical, text: "40 Days Product Testing" },
      { icon: Bug, text: "500 Malware Removal" },
      { icon: Headphones, text: "24/7 Live Assistance" },
    ],
    tagline: "Ideal for clear, scoped design needs",
  },
  {
    id: "monthly-retainer",
    label: "Monthly Retainer",
    price: "$4,399",
    perMonth: true,
    variant: "dark",
    features: [
      { icon: BarChart2, text: "All Analytics Features" },
      { icon: ShieldCheck, text: "Upgrade Anytime Protection" },
      { icon: FlaskConical, text: "40 Days Product Testing" },
      { icon: Bug, text: "500 Malware Removal" },
      { icon: Headphones, text: "24/7 Live Assistance" },
    ],
    tagline: "Ideal for clear, scoped design needs",
  },
];

function PricingCard({ plan }) {
  const isLight = plan.variant === "light";

  return (
    <div
      className={`flex flex-col rounded-md p-5 lg:p-15 ${
        isLight ? "bg-[#f4f0ec] text-black" : "bg-[#e84b1a] text-white"
      }`}
    >
      {/* Plan Label */}
      <p className="text-[20px] font-medium leading-7.5 mb-3">{plan.label}</p>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-[40px] lg:text-[90px] font-extrabold leading-none">
          {plan.price}
        </span>
        {plan.perMonth && (
          <span className="text-sm font-medium opacity-70">/month</span>
        )}
      </div>

      {/* Divider */}
      <svg
        className="mb-5 lg:mb-[50px] mt-5 lg:mt-[20px]"
        width="100%"
        height="6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="1"
          x2="100%"
          y2="1"
          stroke={isLight ? "#02090F" : "#ffffff"}
          strokeOpacity={isLight ? "0.2" : "0.3"}
          strokeDasharray="2 2"
        />
        <line
          x1="0"
          y1="5"
          x2="100%"
          y2="5"
          stroke={isLight ? "#02090F" : "#ffffff"}
          strokeOpacity={isLight ? "0.2" : "0.3"}
          strokeDasharray="2 2"
        />
      </svg>

      {/* Features */}
      <ul className="flex flex-col gap-3 mb-7">
        {plan.features.map(({ icon: Icon, text }) => (
          <li
            key={text}
            className="flex items-center gap-3 text-sm font-medium"
          >
            <Icon size={16} className="shrink-0" />
            {text}
          </li>
        ))}
      </ul>

      {/* Tagline */}
      <p className="text-sm font-medium opacity-70 mt-auto mb-4">
        {plan.tagline}
      </p>

      {/* CTA Button */}
      <ButtonThree
        frontText="Choose your plan"
        backgroundColor={isLight ? "#000000" : "#ffffff"}
        textColor={isLight ? "#ffffff" : "#000000"}
        paddingTop={16}
        paddingBottom={16}
        paddingLeft={24}
        paddingRight={24}
        fontSize={14}
        fontWeight="600"
        borderRadius={8}
      />
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="py-20">
      <Container size="lg">
        {/* Header */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center justify-center border border-black/10 rounded-[4px] py-1 px-[15px] text-xs font-bold uppercase tracking-widest">
            Pricing Plan
          </span>
        </div>
        <h2 className="text-center text-4xl font-extrabold underline underline-offset-4 max-w-2xl mx-auto mb-12 leading-snug">
          Our transparent offer ensures clear, fair, and trusted solutions for
          clients
        </h2>

        {/* Cards Grid */}
        <Grid cols={{ base: 1, md: 2 }} gap="lg">
          {PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </Grid>
      </Container>
    </section>
  );
}
