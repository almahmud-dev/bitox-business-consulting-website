import React from "react";
import Container from "../ui/Container";
import allImages from "../helper/imageProvider";
import Image from "next/image";
import ContactForm from "../ui/ContactForm";

const ContactSectionHO = () => {
  const { contactImage } = allImages;
  return (
    <section>
      <Container size={"lg"}>
        <div className="w-full !h-[690px] relative ">
          <Image
            fill
            src={contactImage}
            className="object-cover"
            alt="contact-page-images"
          />
          <div className="absolute top-1/2 translate-y-[-50%] left-[35px]">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSectionHO;
