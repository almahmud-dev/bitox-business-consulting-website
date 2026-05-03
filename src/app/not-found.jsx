import error_bg from "../../public/images/404/404_bg.png";
import error_img from "../../public/images/404/error_text.png";
import Image from "next/image";
import ButtonThree from "@/components/ui/ButtonThree";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="
        w-full h-screen
        flex flex-col items-center justify-center
        px-3 sm:px-6 md:px-8
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${error_bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Error Image */}
      <div className="flex justify-center w-full mb-3 sm:mb-4 md:mb-5 lg:mb-6">
        <Image
          src={error_img}
          width={777}
          height={350}
          alt="404 error"
          className="
            w-[55vw]
            sm:w-[45vw]
            md:w-95
            lg:w-120
            xl:w-145
            2xl:w-162.5
            h-auto
            max-h-[25vh]
            object-contain
          "
        />
      </div>

      {/* Heading Banner */}
      <div className="w-full mb-3 sm:mb-4 md:mb-5 lg:mb-6">
        <h3
          className="
      w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
      bg-[#FF5101] text-white font-bold text-center uppercase
      py-2 sm:py-2.5 md:py-3 lg:py-4
      px-3 sm:px-4
      text-[3.5vw] sm:text-[2.5vw] md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl
      leading-snug
    "
        >
          Sorry, we can't find the page you're looking for.
        </h3>
      </div>

      {/* Description + Button */}
      <div className="w-full max-w-[90vw] sm:max-w-120 md:max-w-130 lg:max-w-150 text-center">
        <p
          className="
            font-medium
            text-[#02090F]
            text-[3vw]
            sm:text-sm
            md:text-base
            lg:text-lg
            leading-snug
            mb-4 sm:mb-5 md:mb-6
          "
        >
          It looks like you’ve taken a wrong turn, but don’t worry we’re here to
          help! Head back to the homepage please
        </p>

        <div className="flex justify-center w-full">
          <Link
            href="/"
            className="flex items-center gap-2 border border-primary text-primary text-base font-medium rounded-[90px] px-4 py-2 sm:px-7.5 sm:py-5 cursor-pointer hover:bg-white/90 transition-colors group"
          >
            <ButtonThree
              frontText="Back to home page"
              backText="Let's Talk."
              backgroundColor="transparent"
              textColor="#02090F"
              fontSize={14}
              paddingTop={0}
              paddingBottom={0}
              paddingLeft={0}
              paddingRight={0}
              showIcon={true}
            />
            <span className="inline-block transition-transform group-hover:translate-x-1">
              <svg width="9" height="12" viewBox="0 0 9 12" fill="none">
                <path
                  d="M0.77735 0.0848229C0.445073 -0.136695 0 0.1015 0 0.500848V10.6323C0 11.0317 0.445073 11.2699 0.77735 11.0484L8.37596 5.98261C8.67283 5.7847 8.67283 5.34848 8.37596 5.15056L0.77735 0.0848229Z"
                  fill="#02090F"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
