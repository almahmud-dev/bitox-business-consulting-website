import React from "react";
import Container from "../ui/Container";
import allImages from "../helper/imageProvider";
import Image from "next/image";
import ContactFormHO from "../ui/ContactFormHO";

const ContactSectionHO = () => {
  const { contactImage } = allImages;
  return (
    <section>
      <Container size={"lg"}>
        <div className="w-full !h-[690px] relative hidden lg:block  rounded-[6px] overflow-hidden">
          <Image
            fill
            src={contactImage}
            className="object-cover "
            alt="contact-page-images"
          />
          <div className="absolute top-1/2 translate-y-[-50%] left-[35px]">
            <ContactFormHO />
          </div>
        </div>
        <div className=" block lg:hidden  r">
          <Image
            src={contactImage}
            height={690}
            width={1600}
            className="object-cover  rounded-[6px] overflow-hidden"
            alt="contact-page-images"
          />
          <div className="mt-10">
            <ContactFormHO />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSectionHO;
