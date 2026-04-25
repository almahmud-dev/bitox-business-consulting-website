"use client";

import Container from "../ui/Container";
import { Flex, Grid, Stack } from "../ui/Responsive";

// ─── Marquee heading
function MarqueeHeading() {
  const text = "BUSINESS · CONSULTING · ";
  const repeated = text.repeat(6);
  return (
    <div className="overflow-hidden border-b border-primary/10">
      <div className="animate-marquee py-4">
        <span className="headingOne font-heading font-black text-primary whitespace-nowrap tracking-tight">
          {repeated}
        </span>
      </div>
    </div>
  );
}

// ─── Hero CTA section
function HeroCTA() {
  return (
    <Container size="md">
      <Stack gap="lg" align="center" className="py-16 text-center">
        <p className="headingTwo font-heading font-semibold text-primary max-w-xl underline underline-offset-4">
          Have an idea in your mind? Let&apos;s make something great together
        </p>
        <div
          className="inline-flex items-center gap-2.5 border border-primary text-primary text-sm font-medium rounded-[90px] px-7 py-3.5 cursor-pointer hover:bg-black/5 transition-colors group"
          onClick={() => console.log("clicked")}
        >
          <span>Let&apos;s build together</span>
          <span className="inline-block transition-transform group-hover:translate-x-1">
            <svg width="9" height="12" viewBox="0 0 9 12" fill="none">
              <path
                d="M0.77735 0.0848229C0.445073 -0.136695 0 0.1015 0 0.500848V10.6323C0 11.0317 0.445073 11.2699 0.77735 11.0484L8.37596 5.98261C8.67283 5.7847 8.67283 5.34848 8.37596 5.15056L0.77735 0.0848229Z"
                fill="#02090F"
              />
            </svg>
          </span>
        </div>
      </Stack>
    </Container>
  );
}

// ─── Contact Form Card
function ContactCard() {
  return (
    <div className="bg-bg-secondaryTwo rounded-2xl shadow-lg p-8 w-full max-w-xs">
      <Stack gap="md">
        <p className="headingSix font-heading font-bold text-primary leading-snug">
          Have questions? Get in touch now!
        </p>
        <Stack gap="sm">
          <input
            type="text"
            placeholder="Name"
            className="border-b border-primary/20 outline-none py-2 text-sm text-primary placeholder:text-tarnary bg-transparent focus:border-secondary transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-b border-primary/20 outline-none py-2 text-sm text-primary placeholder:text-tarnary bg-transparent focus:border-secondary transition-colors"
          />
          <textarea
            placeholder="Message"
            rows={3}
            className="border-b border-primary/20 outline-none py-2 text-sm text-primary placeholder:text-tarnary bg-transparent resize-none focus:border-secondary transition-colors"
          />
        </Stack>
        <div
          className="self-start inline-flex items-center gap-2.5 bg-secondary text-white text-sm font-medium rounded-[90px] px-6 py-3 cursor-pointer hover:bg-secondary/90 transition-colors group"
          onClick={() => console.log("send message")}
        >
          <span>Send message</span>
          <span className="inline-block transition-transform group-hover:translate-x-1">
            <svg width="9" height="12" viewBox="0 0 9 12" fill="none">
              <path
                d="M0.77735 0.0848229C0.445073 -0.136695 0 0.1015 0 0.500848V10.6323C0 11.0317 0.445073 11.2699 0.77735 11.0484L8.37596 5.98261C8.67283 5.7847 8.67283 5.34848 8.37596 5.15056L0.77735 0.0848229Z"
                fill="#ffffff"
              />
            </svg>
          </span>
        </div>
      </Stack>
    </div>
  );
}

// ─── Dark Footer Section
function FooterDark() {
  const companyLinks = [
    "Who We Are?",
    "Our Services",
    "Latest Blog",
    "Meet Our Team",
    "Contact Us",
  ];
  const serviceLinks = [
    "Corporate Growth",
    "Culture & Change",
    "Finance Advisor",
    "Digital Marketing",
    "Consulting Network",
  ];

  return (
    <div className="bg-bg-secondaryThree text-white">
      {/* Hours + Appointment bar */}
      <Flex
        align="stretch"
        justify="space-between"
        gap="none"
        className="border-b border-white/10"
      >
        {/* LEFT: orange bg — text centered vertically & horizontally */}
        <div className="bg-secondary flex-1 flex items-center justify-center px-8 py-4">
          <p className="text-sm text-white font-medium text-center">
            Saturday – Thursday : 8:30 am – 10:45 pm
          </p>
        </div>

        {/* RIGHT: appointment CTA */}
        <div
          className="px-8 py-4 flex items-center gap-3 cursor-pointer group hover:opacity-80 transition-opacity shrink-0"
          onClick={() => console.log("appointment")}
        >
          <p className="text-sm text-white/80">Call for an appointment</p>
          <span className="inline-block transition-transform group-hover:translate-x-1">
            <svg width="9" height="12" viewBox="0 0 9 12" fill="none">
              <path
                d="M0.77735 0.0848229C0.445073 -0.136695 0 0.1015 0 0.500848V10.6323C0 11.0317 0.445073 11.2699 0.77735 11.0484L8.37596 5.98261C8.67283 5.7847 8.67283 5.34848 8.37596 5.15056L0.77735 0.0848229Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </Flex>

      {/* Footer links + newsletter */}
      <Container size="md">
        <Grid cols={{ base: 1, md: 3 }} gap="xl" className="py-16">
          {/* Company */}
          <Stack gap="sm">
            <p className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-2">
              Company
            </p>
            {companyLinks.map((link) => (
              <Flex key={link} gap="xs" align="center">
                <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                <a
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link}
                </a>
              </Flex>
            ))}
          </Stack>

          {/* Service Link */}
          <Stack gap="sm">
            <p className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-2">
              Service Link
            </p>
            {serviceLinks.map((link) => (
              <Flex key={link} gap="xs" align="center">
                <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                <a
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link}
                </a>
              </Flex>
            ))}
          </Stack>

          {/* Newsletter */}
          <Stack gap="sm">
            <p className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-2">
              Newsletter
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Stay updated with design tips, creative strategy, and industry
              insights.
            </p>
            <Flex gap="none" align="center" className="mt-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 bg-white/10 border border-white/20 rounded-l-full px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-secondary transition-colors"
              />
              <button
                className="bg-white/10 border border-l-0 border-white/20 rounded-r-full px-4 py-2.5 hover:bg-secondary hover:border-secondary transition-colors"
                onClick={() => console.log("subscribe")}
              >
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 6H15M15 6L10 1M15 6L10 11"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Flex>
          </Stack>
        </Grid>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container size="md">
          <Flex
            align="center"
            justify="space-between"
            gap="sm"
            className="py-5"
          >
            {/* Left: legal links */}
            <Flex gap="md" align="center" wrap={false}>
              {["Privacy Policy", "Terms and Conditions", "Support"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm text-white/50 hover:text-white transition-colors whitespace-nowrap"
                  >
                    {item}
                  </a>
                )
              )}
            </Flex>

            {/* Center: social icons */}
            <Flex gap="sm" align="center" justify="center">
              {/* Facebook — always bg-secondary (orange), no hover change */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
                  <path
                    d="M5.5 5.5V4C5.5 3.17 6.17 2.5 7 2.5H8.5V0H6.5C4.84 0 3.5 1.34 3.5 3V5.5H1.5V8H3.5V16H6.5V8H8.5L9 5.5H5.5Z"
                    fill="white"
                  />
                </svg>
              </a>

              {/* X / Twitter — white/10 bg, hover white/20 */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M10.9 0H13.05L8.4 5.33L14 14H9.6L6.18 9.1L2.27 14H0.12L5.1 8.29L0 0H4.5L7.61 4.48L10.9 0ZM10.14 12.58H11.3L3.92 1.2H2.67L10.14 12.58Z"
                    fill="white"
                  />
                </svg>
              </a>

              {/* Instagram — white/10 bg, hover white/20 */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect
                    x="1"
                    y="1"
                    width="12"
                    height="12"
                    rx="3"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="7"
                    cy="7"
                    r="2.5"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <circle cx="10.5" cy="3.5" r="0.75" fill="white" />
                </svg>
              </a>

              {/* Dribbble — white/10 bg, hover white/20 */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle
                    cx="7"
                    cy="7"
                    r="6"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M2 5c1.5 0 3.5.5 5 2 1.5 1.5 2 3.5 2 5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 9.5c1 .5 2.5.5 4 0"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </Flex>

            {/* Right: copyright */}
            <p className="text-sm text-white/50 whitespace-nowrap">
              Copyright © 2026 Bitox. All Rights Reserved.
            </p>
          </Flex>
        </Container>
      </div>
    </div>
  );
}

// ─── Main Export
export default function BusinessFooterSection() {
  return (
    <section className="w-full bg-bg-secondaryOne overflow-hidden">
      <MarqueeHeading />
      <HeroCTA />

      {/* Contact card overlapping dark footer */}
      <div className="relative">
        <Container size="md">
          <div className="absolute -top-20 left-4 sm:left-6 md:left-10 lg:left-16 2xl:left-20 z-10">
            <ContactCard />
          </div>
        </Container>
        <FooterDark />
      </div>
    </section>
  );
}