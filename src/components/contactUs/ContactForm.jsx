"use client";
import contact_bg from "../../../public/images/contact/contact-bg.png";
import contact_logo from "../../../public/images/contact/contact_logo.png";
import { useState } from "react";
import Image from "next/image";

import { CONTACT_INPUTS, CONTACT_INFO } from "@/components/helper/helpers";
import Button from "../ui/Button";

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!form.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    console.log(form);
  };

  return (
    <div style={{ backgroundImage: `url(${contact_bg.src})` }}>
      <div className="w-[1583px] mx-auto my-30">
        <div className="flex justify-between">
          <div>
            <h2 className="w-103.75 text-[50px] leading-14.5 font-bold text-primary underline mb-[305px]">
              Reach out for inquiries, collaborations, or just to say
              hello.We&apos;re eager to connect!
            </h2>
            <Image width={391} height={117} alt="Bitox" src={contact_logo} />
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white py-15 px-15 rounded-[15px] mb-7.5"
            >
              <div className="flex flex-col gap-7.5">
                {submitted && (
                  <p className="text-sm font-medium text-center text-green-500">
                    Message sent successfully!
                  </p>
                )}

                {/* Inputs (from array) */}
                {[0, 2].map((start) => (
                  <div key={start} className="flex gap-[30px]">
                    {CONTACT_INPUTS.slice(start, start + 2).map((field) => (
                      <div key={field.name} className="flex flex-col gap-1">
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={form[field.name]}
                          onChange={handleChange}
                          className={`w-[458px] h-[60px] py-5 px-6.25 bg-[#F5F5F5] rounded-md outline-none text-md text-tarnary ${
                            errors[field.name] ? "ring-1 ring-red-400" : ""
                          }`}
                        />
                        {errors[field.name] && (
                          <p className="pl-1 text-xs text-red-400">
                            {errors[field.name]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ))}

                {/* Textarea */}
                <div className="flex flex-col gap-1">
                  <textarea
                    name="message"
                    placeholder="Write your message"
                    value={form.message}
                    onChange={handleChange}
                    className={`w-[946px] h-[176px] py-5 px-6.25 bg-[#F5F5F5] rounded-md outline-none text-md text-tarnary ${
                      errors.message ? "ring-1 ring-red-400" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="pl-1 text-xs text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-center">
                  <Button
                    label="Submit message"
                    bgColor="#f97316"
                    textColor="#ffffff"
                    showIcon={true}
                  />
                </div>
              </div>
            </form>

            {/* Info Cards (from array) */}
            <div className="flex gap-[30px]">
              {CONTACT_INFO.map((card, index) => (
                <div
                  key={index}
                  className="w-[335px] py-[35px] pl-8.75 pr-4 bg-white rounded-md"
                >
                  <h4 className="mb-5 font-bold leading-8.5 text-2xl text-primary">
                    {card.title}
                  </h4>
                  {card.content.map((text, i) => (
                    <p
                      key={i}
                      className="text-lg text-tarnary font-normal leading-6.5"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-400 h-[690px] rounded-md overflow-hidden mx-auto mb-30">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.036955468959!2d90.36556226218187!3d23.747049949764218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1777483156468!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ContactForm;
