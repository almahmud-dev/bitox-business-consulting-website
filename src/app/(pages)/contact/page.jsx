import ContactForm from "@/components/ui/ContactForm";
import InnerPageHero from "@/components/ui/InnerPageHero";
import React from "react";

const Contact = ({ params }) => {
  const { slug } = params;

  return (
    <>
      <InnerPageHero
        title="Partner Ours Contact 
        Today"
        subtitle="A reputed consultant agency we've spent 13+ year's"
        hasOffset={true}
      />
      <ContactForm />
    </>
  );
};

export default Contact;
