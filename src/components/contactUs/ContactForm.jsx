"use client";
import contact_logo from "../../../public/images/contact/contact_logo.png";
import Image from "next/image";
import ButtonThree from "../ui/ButtonThree";
import { ClockIcon, MapPinIcon, PhoneIcon } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="bg-bg-secondaryOne">
      <div className="bg-[#f0ede6] min-h-screen py-10 lg:py-30 px-4 md:px-6">
        <div className="max-w-400 mx-auto flex flex-col gap-10">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            {/* Headline */}
            <div className="w-full lg:max-w-97.75 lg:w-full lg:shrink-0">
              <h1
                className="
                text-[26px] font-bold leading-9 underline text-primary
                md:text-[34px] lg:text-[43px]
                md:leading-12 lg:leading-14.5 "
              >
                Reach out for inquiries, collaborations, or just to say hello.
                We're eager to connect!
              </h1>
            </div>

            {/* Form Card */}
            <form className="w-full lg:max-w-266.75 bg-white rounded-2xl p-6 md:p-10 lg:p-15">
              <div className="
                  grid grid-cols-1 gap-5 mb-5
                  md:grid-cols-2 md:gap-6 md:mb-6
                  lg:gap-7.5 lg:mb-7.5">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="
                  bg-[#F5F5F5] rounded-md px-5 py-4 text-base
                  lg:px-6.25 lg:py-5 text-tarnary outline-none
                  placeholder:text-gray-400 w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="
                  bg-[#F5F5F5] rounded-md px-5 py-4
                  lg:px-6.25 lg:py-5 text-base text-tarnary outline-none
                  placeholder:text-gray-400 w-full"
                />
              </div>

              <div className="
                  grid grid-cols-1 gap-5 mb-5
                  md:grid-cols-2 md:gap-6 md:mb-6
                  lg:gap-7.5 lg:mb-7.5">
                <input
                  type="email"
                  placeholder="Your Email ID"
                  className="
                  bg-[#F5F5F5] rounded-md px-5 py-4 text-base
                  lg:px-6.25 lg:py-5 text-tarnary outline-none
                  placeholder:text-gray-400 w-full"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-[#F5F5F5] rounded-md px-5 py-4
                  lg:px-6.25 lg:py-5 text-base text-tarnary
                  outline-none placeholder:text-gray-400 w-full"
                />
              </div>

              <textarea
                placeholder="Write your message"
                rows={5}
                className="bg-[#F5F5F5] rounded-md px-5 py-4
                text-base text-tarnary resize-none
                outline-none placeholder:text-gray-400 w-full
                mb-5 md:mb-6 lg:mb-7.5 lg:px-6.25 lg:py-5"
              />

              <div className="flex justify-center">
                <div className="self-start flex items-center gap-2 text-white text-base font-medium rounded-[90px] px-4 py-2 sm:px-7.5 sm:py-5 cursor-pointer bg-secondary transition-colors group">
                  <ButtonThree
                    frontText="Submit message"
                    backText="Let's Talk."
                    backgroundColor="transparent"
                    textColor="#FFFFFF"
                    fontSize={14}
                    paddingTop={0}
                    paddingBottom={0}
                    paddingLeft={0}
                    paddingRight={0}
                  />
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    <svg width="9" height="12" viewBox="0 0 9 12" fill="none">
                      <path
                        d="M0.77735 0.0848229C0.445073 -0.136695 0 0.1015 0 0.500848V10.6323C0 11.0317 0.445073 11.2699 0.77735 11.0484L8.37596 5.98261C8.67283 5.7847 8.67283 5.34848 8.37596 5.15056L0.77735 0.0848229Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </form>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Logo */}
            <div className="shrink-0">
              <Image
                src={contact_logo}
                alt="Bitox Logo"
                className="w-45 md:w-65 lg:w-97.75"
              />
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 flex-1 w-full">
              {/* Address */}
              <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPinIcon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="para-TwoXl font-bold text-primary">Address</h3>
                </div>
                <p className="para-lg text-tarnary leading-relaxed">
                  Valentin, Street Road 24, New York, USA – 67452
                </p>
              </div>

              {/* Phone / Message */}
              <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <PhoneIcon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="para-TwoXl font-bold text-primary">
                    Phone / Message
                  </h3>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="para-lg text-tarnary">
                    supportadmin@example.com
                  </p>
                  <p className="para-lg text-tarnary">(255) 864-6308</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <ClockIcon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="para-TwoXl font-bold text-primary">
                    Working Hours
                  </h3>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="para-lg text-tarnary">
                    Monday – Friday: 09:00 – 18:30
                  </p>
                  <p className="para-lg text-tarnary">Saturday: until 15:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full max-w-400 h-75 rounded-md overflow-hidden mx-auto mb-16
      md:h-125 md:mb-20 md:px-6
      lg:h-172.5 lg:mb-30 px-4 lg:px-0">
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
