"use client";

import Link from "next/link";
import {
  ArrowIcon,
  EmailIcon,
  BUSINESS_HOURS,
  COPYRIGHT_TEXT,
  companyLinks,
  legalLinks,
  serviceLinks,
  socialLinks,
} from "../helper/helpers";
import ButtonThree from "../ui/ButtonThree";
import Container from "../ui/Container";
import { Flex, Stack } from "../ui/Responsive";
import { useState } from "react";

// ─── Shared CTA Button
function CTAButton({ frontText, backText, textColor = "#02090F", onClick }) {
  return (
    <div
      className="flex items-center  justify-between w-full gap-2.5  group"
      onClick={onClick}
    >
      <Link href={`${frontText === "Send Message" ? "#" : "/contact"}`}>
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
      </Link>
      <span className="inline-block transition-transform group-hover:translate-x-1">
        <ArrowIcon color={textColor === "#ffffff" ? "#ffffff" : "#02090F"} />
      </span>
    </div>
  );
}

// ─── Contact Form Card
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function FieldError({ message }) {
  if (!message) return null;
  return (
    <p className="text-[11px] mt-1 text-secondary flex items-center gap-1">
      <svg
        width="11"
        height="11"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      {message}
    </p>
  );
}
function ContactCard() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  function validate(data) {
    return {
      name: data.name.trim() ? "" : "Name is required",
      email: !data.email.trim()
        ? "Email is required"
        : !EMAIL_REGEX.test(data.email)
          ? "Enter a valid email"
          : "",
      message: data.message.trim() ? "" : "Message cannot be empty",
    };
  }

  function handleChange(field, value) {
    const updated = { ...fields, [field]: value };
    setFields(updated);
    if (touched[field])
      setErrors((e) => ({ ...e, [field]: validate(updated)[field] }));
  }

  function handleBlur(field) {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((e) => ({ ...e, [field]: validate(fields)[field] }));
  }

  function handleSubmit() {
    setTouched({ name: true, email: true, message: true });
    const newErrors = validate(fields);
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;
    //  submit logic here
  }

  const fieldClass = (field) =>
    `border-b outline-none py-2.5 text-sm text-primary placeholder:text-tarnary bg-transparent transition-colors w-full ${
      errors[field]
        ? "border-secondary"
        : "border-primary/10 focus:border-secondary"
    }`;

  return (
    <div className="bg-bg-secondaryFore shadow-xl px-[38px] xl:px-[48px] py-[30px] xl:py-[38px] w-full lg:max-w-[390px] xl:max-w-[430px]">
      <Stack gap="md">
        <p className="headingFive font-bold text-primary leading-snug">
          Have questions? Get in touch now!
        </p>

        <Stack gap="sm">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={fields.name}
              onChange={(e) => handleChange("name", e.target.value)}
              onBlur={() => handleBlur("name")}
              className={fieldClass("name")}
            />
            <FieldError message={errors.name} />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={fields.email}
              onChange={(e) => handleChange("email", e.target.value)}
              onBlur={() => handleBlur("email")}
              className={fieldClass("email")}
            />
            <FieldError message={errors.email} />
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows={3}
              value={fields.message}
              onChange={(e) => handleChange("message", e.target.value)}
              onBlur={() => handleBlur("message")}
              className={fieldClass("message") + " resize-none"}
            />
            <FieldError message={errors.message} />
          </div>
        </Stack>

        <div className="self-start bg-secondary rounded-[90px] px-6 py-3 hover:bg-secondary/90 transition-colors mt-1">
          <CTAButton
            frontText="Send Message"
            backText="Send Message"
            textColor="#ffffff"
            onClick={handleSubmit}
          />
        </div>
      </Stack>
    </div>
  );
}

// ─── Footer Links Column
function FooterLinksColumn({ title, links }) {
  return (
    <Stack gap="sm">
      <p className="font-bold text-white headingSixAlter mb-2">{title}</p>
      {links.map((link) => (
        <Flex key={link.id} gap="xs" align="center">
          <span className="w-2 h-2 rounded-full bg-[#999999] shrink-0" />
          <Link
            href={link.slug}
            className="para-lg text-[#999999] hover:text-white transition-colors"
          >
            {link.label}
          </Link>
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
      <p className="para-lg text-[#999999] max-w-[384px] ">
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

// ─── Main Export
export default function FooterTwo() {
  return (
    <div className="relative">
      {/* Mobile: card in normal flow */}
      <div className="lg:hidden flex justify-center  pb-0">
        <ContactCard />
      </div>

      <div className="bg-bg-secondaryThree text-white rounded-tl-[15px]">
        {/* Hours + Appointment Bar */}
        <div className="w-full border-b border-white/10">
          <div className="flex flex-col sm:flex-row">
            <div className="  bg-secondary  flex items-center justify-center px-8 py-4 sm:flex-1 lg:ml-[340px] lg:pl-[140px] xl:ml-[300px] xl:pl-[300px]  ">
              <p className="text-sm text-white font-medium text-center">
                {BUSINESS_HOURS}
              </p>
            </div>
            <div className="flex items-center justify-between gap-2.5 px-7 py-4  transition-colors  border-t border-white/10 sm:border-t-0 sm:border-l sm:border-white/10 sm:flex-1 bg-bg-secondaryFore ">
              <CTAButton
                frontText="Call for an appointment"
                backText="Call for an appointment"
                textColor="#02090f"
              />
            </div>
          </div>
        </div>

        {/* Footer Links + Newsletter */}
        <Container size="2xl">
          <div className="py-8 lg:py-16 ">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[minmax(0,35%)_1fr_1fr_1fr] gap-5 xl:pl-[25px] 2xl:pl-[100]">
              <div className="hidden lg:block " />
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
                    target="_blank"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-secondary hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <p className="text-[16px] text-white text-center md:text-right ">
                {COPYRIGHT_TEXT}
              </p>
            </div>
          </Container>
        </div>

        {/* Desktop: card overlapping footer */}
        <div className="hidden lg:block absolute top-[-75px] z-10 pointer-events-none lg:right-[65%]  2xl:right-[68%] ">
          <div className="pointer-events-auto inline-block ">
            <ContactCard />
          </div>
        </div>
      </div>
    </div>
  );
}
