// components/sections/PricingSection.jsx
import { BarChart2, ShieldCheck, FlaskConical, Bug, Headphones } from "lucide-react";
import Container from "../ui/Container";
import { Grid } from "../ui/Responsive";

const PLANS = [
  {
    id: "pay-per-project",
    label: "Pay Per project",
    price: "$3,399+",
    perMonth: false,
    variant: "light",
    features: [
      { icon: BarChart2,     text: "All Analytics Features" },
      { icon: ShieldCheck,   text: "Upgrade Anytime Protection" },
      { icon: FlaskConical,  text: "40 Days Product Testing" },
      { icon: Bug,           text: "500 Malware Removal" },
      { icon: Headphones,    text: "24/7 Live Assistance" },
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
      { icon: BarChart2,     text: "All Analytics Features" },
      { icon: ShieldCheck,   text: "Upgrade Anytime Protection" },
      { icon: FlaskConical,  text: "40 Days Product Testing" },
      { icon: Bug,           text: "500 Malware Removal" },
      { icon: Headphones,    text: "24/7 Live Assistance" },
    ],
    tagline: "Ideal for clear, scoped design needs",
  },
];

function PricingCard({ plan }) {
  const isLight = plan.variant === "light";

  return (
    <div
      className={`flex flex-col rounded-2xl p-10 ${
        isLight ? "bg-[#f4f0ec] text-black" : "bg-[#e84b1a] text-white"
      }`}
    >
      {/* Plan Label */}
      <p className="text-sm font-medium opacity-70 mb-3">{plan.label}</p>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-6xl font-extrabold leading-none">{plan.price}</span>
        {plan.perMonth && (
          <span className="text-sm font-medium opacity-70">/month</span>
        )}
      </div>

      {/* Divider */}
      <hr
        className={`my-5 border-dashed ${
          isLight ? "border-black/20" : "border-white/30"
        }`}
      />

      {/* Features */}
      <ul className="flex flex-col gap-3 mb-7">
        {plan.features.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-3 text-sm font-medium">
            <Icon size={16} className="shrink-0" />
            {text}
          </li>
        ))}
      </ul>

      {/* Tagline */}
      <p className="text-sm font-medium opacity-70 mt-auto mb-4">{plan.tagline}</p>

      {/* CTA Button */}
      <button
        className={`w-full py-4 rounded-lg text-sm font-semibold transition-opacity hover:opacity-85 ${
          isLight ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        Choose your plan
      </button>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="py-20">
      <Container size="lg">
        {/* Header */}
        <p className="text-center text-[11px] font-semibold tracking-widest uppercase text-gray-500 mb-4">
          Pricing Plan
        </p>
        <h2 className="text-center text-4xl font-extrabold underline underline-offset-4 max-w-2xl mx-auto mb-12 leading-snug">
          Our transparent offer ensures clear, fair, and trusted solutions for clients
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