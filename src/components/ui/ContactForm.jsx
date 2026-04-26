import ButtonThree from "./ButtonThree";

const ContactForm = () => {
  return (
    <div className=" h-[620px]  max-w-[478px] bg-bg-secondaryTwo rounded-[6px] p-[35px] flex flex-col gap-[48px] ">
      <div className="flex flex-col gap-[25px]">
        <h2 className="headingFour font-bold text-primary">
          Start your project with bitox growth partners
        </h2>
        <p className="para-lg font-normal text-tarnary">
          Regular updates ensure that readers have access to fresh perspectives,
          making Poster a must-read.
        </p>
      </div>

      <form className="flex flex-col gap-x-[14px] gap-y-[10px] ">
        <div className="flex items-center gap-[14px]">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-5 py-[15px] rounded-[6px] border border-[#0000001b] text-sm text-color-primary placeholder:text-color-tarnary outline-none focus:border-color-primary transition-colors duration-200 bg-transparent"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full  px-5 py-[15px] rounded-[6px] border border-[#0000001b] text-sm text-color-primary placeholder:text-color-tarnary outline-none focus:border-color-primary transition-colors duration-200 bg-transparent"
          />
        </div>

        <textarea
          placeholder="Write your message"
          rows={5}
          className="w-full h-[118px] px-5 py-4 mb-1 rounded-[6px] border border-[#0000001b] text-base text-primary placeholder:text-tarnary outline-none focus:border-color-primary transition-colors duration-200 bg-transparent resize-none"
        />

        <ButtonThree frontText={"Send message"} />
      </form>
    </div>
  );
};

export default ContactForm;
