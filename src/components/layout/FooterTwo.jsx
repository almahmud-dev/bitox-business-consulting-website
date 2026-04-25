"use client";

import {
  ArrowIcon,
  EmailIcon,
  BUSINESS_HOURS,
  COPYRIGHT_TEXT,
  MARQUEE_REPEAT_COUNT,
  MARQUEE_TEXT,
  companyLinks,
  legalLinks,
  serviceLinks,
  socialLinks,
} from "../helper/helpers";
import ButtonThree from "../ui/ButtonThree";
import Container from "../ui/Container";
import { Flex, Stack } from "../ui/Responsive";

// ─── Shared CTA Button used across multiple sections
function CTAButton({ frontText, backText, textColor = "#02090F", onClick }) {
  return (
    <div
      className="inline-flex items-center gap-2.5 cursor-pointer group"
      onClick={onClick}
    >
      <ButtonThree
        frontText={frontText}
        backText={backText}
        backgroundColor="transparent"
        textColor={textColor}
        fontSize={14}
        paddingTop={0}
        paddingBottom={0}
        paddingLeft={0}
        paddingRight={0}
      />
      <span className="inline-block transition-transform group-hover:translate-x-1">
        <ArrowIcon color={textColor === "#ffffff" ? "#ffffff" : "#02090F"} />
      </span>
    </div>
  );
}

// ─── Marquee Heading
function MarqueeHeading() {
  return (
    <div className="overflow-hidden">
      <div className="animate-marquee py-4">
        <span className="headingOne font-heading font-black text-primary whitespace-nowrap tracking-tight">
          {MARQUEE_TEXT.repeat(MARQUEE_REPEAT_COUNT)}
        </span>
      </div>
    </div>
  );
}

// ─── Hero CTA Section
function HeroCTA() {
  return (
    <Container size="md">
      <Stack align="center" className="pt-[35px] text-center">
        <p className="text-[28px] sm:text-[36px] md:text-[42px] font-bold text-primary max-w-[625px] underline underline-offset-[4px]">
          Have an idea in your mind? Let&apos;s make something great together
        </p>
        <div className="border border-primary rounded-[90px] px-7 py-3.5 hover:bg-black/5 transition-colors mb-10 lg:mb-[140px]">
          <CTAButton
            frontText="Let's build together"
            backText="Let's Talk."
            textColor="#02090F"
            onClick={() => console.log("clicked")}
          />
        </div>
      </Stack>
    </Container>
  );
}

// ─── Contact Form Card
function ContactCard() {
  return (
    <div className="bg-bg-secondaryFore shadow-xl px-[38px] xl:px-[52px] py-[30px] xl:py-[45px] w-full max-w-[390px] xl:max-w-[430px]">
      <Stack gap="md">
        <p className="headingFive font-bold text-primary leading-snug">
          Have questions? Get in touch now!
        </p>

        <Stack gap="sm">
          {[
            { type: "text", placeholder: "Name" },
            { type: "email", placeholder: "Email" },
          ].map(({ type, placeholder }) => (
            <input
              key={placeholder}
              type={type}
              placeholder={placeholder}
              className="border-b border-primary/10 outline-none py-2.5 text-sm text-primary placeholder:text-tarnary bg-transparent focus:border-secondary transition-colors"
            />
          ))}
          <textarea
            placeholder="Message"
            rows={3}
            className="border-b border-primary/10 outline-none py-2.5 text-sm text-primary placeholder:text-tarnary bg-transparent resize-none focus:border-secondary transition-colors"
          />
        </Stack>

        <div className="self-start bg-secondary rounded-[90px] px-6 py-3 hover:bg-secondary/90 transition-colors mt-1">
          <CTAButton
            frontText="Send Message"
            backText="Let's Talk."
            textColor="#ffffff"
            onClick={() => console.log("send message")}
          />
        </div>
      </Stack>
    </div>
  );
}

// ─── Footer Links Column (Company / Service)
function FooterLinksColumn({ title, links }) {
  return (
    <Stack gap="sm">
      <p className="font-bold text-white headingSixAlter mb-2">{title}</p>
      {links.map((link) => (
        <Flex key={link} gap="xs" align="center">
          <span className="w-2 h-2 rounded-full bg-[#999999] shrink-0" />
          <a
            href="#"
            className="para-lg text-[#999999] hover:text-white transition-colors"
          >
            {link}
          </a>
        </Flex>
      ))}
    </Stack>
  );
}

// ─── Newsletter Column
function NewsletterColumn() {
  return (
    <Stack gap="sm">
      <p className="font-bold text-white headingSixAlter mb-2">Newsletter</p>
      <p className="para-lg text-[#999999] max-w-[384px]">
        Stay updated with design tips, creative strategy, and industry insights.
      </p>
      <div className="relative mt-2">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full bg-bg-secondaryTwo border border-white/20 pl-6 pr-12 py-[16px] rounded-[10px] text-sm text-primary placeholder:text-primary outline-none focus:border-secondary transition-colors"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <EmailIcon />
        </span>
      </div>
    </Stack>
  );
}

// ─── Dark Footer Section
function FooterDark() {
  return (
    <div className="bg-bg-secondaryThree text-white rounded-tl-[15px]">
      {/* Hours + Appointment Bar */}
      <div className="w-full border-b border-white/10">
        <div className="mx-auto max-w-[1265px] flex flex-col sm:flex-row">
          <div className="bg-secondary flex items-center justify-center px-8 py-4 sm:flex-1 lg:pl-[480px] xl:pl-[500px]">
            <p className="text-sm text-white font-medium text-center">
              {BUSINESS_HOURS}
            </p>
          </div>
          <div className="flex items-center justify-between gap-2.5 px-7 py-4 hover:bg-white/5 transition-colors border-t border-white/10 sm:border-t-0 sm:border-l sm:border-white/10 sm:flex-1">
            <CTAButton
              frontText="Call for an appointment"
              backText="Let's Talk."
              textColor="#ffffff"
              onClick={() => console.log("appointment")}
            />
          </div>
        </div>
      </div>

      {/* Footer Links + Newsletter */}
      <Container size="">
        <div className="py-8 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:pl-[460px] xl:pl-[480px]">
            <FooterLinksColumn title="Company" links={companyLinks} />
            <FooterLinksColumn title="Service Link" links={serviceLinks} />
            <NewsletterColumn />
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container size="">
          <div className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-start">
              {legalLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[16px] text-white hover:text-secondary transition-colors whitespace-nowrap"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 items-center justify-center">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-secondary hover:text-white hover:border-transparent transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-[16px] text-white text-center md:text-right whitespace-nowrap">
              {COPYRIGHT_TEXT}
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}

// ─── Main Export
export default function BusinessFooterSection() {
  return (
    <section className="w-full bg-bg-secondaryTwo overflow-hidden">
      <MarqueeHeading />
      <HeroCTA />

      <div className="relative">
        {/* Mobile: card in normal flow */}
        <div className="lg:hidden flex justify-center px-4 pb-0">
          <ContactCard />
        </div>

        {/* Desktop: card overlapping footer */}
        <div className="hidden lg:block absolute top-23 z-10 pointer-events-none right-[65%]">
          <div className="pointer-events-auto inline-block -translate-y-[calc(50%-40px)]">
            <ContactCard />
          </div>
        </div>

        <FooterDark />
      </div>
    </section>
  );
}
