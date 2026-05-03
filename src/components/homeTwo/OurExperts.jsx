// components/homeTwo/OurExperts.jsx
import Image from "next/image";
import Container from "../ui/Container";
import { Grid } from "../ui/Responsive";
import allImages from "../helper/imageProvider";

const experts = [
  { id: 1, name: "Julian Hayes" },
  { id: 2, name: "Jamie Rivers" },
  { id: 3, name: "Avery Blake" },
];

const socialLinks = ["Facebook", "Twitter", "LinkedIn"];

export default function OurExperts() {
  return (
    <section className="bg-bg-secondaryOne py-10 lg:py-30">
      <Container size="lg">
        {/* ── Header Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-10">
          {/* Left: eyebrow + heading */}
          <div className="max-w-[771px]">
            <p className="inline-flex items-center border border-black/10 rounded-sm py-1 px-3.75 text-xs font-bold uppercase tracking-widest mb-2">
              Meet our experts
            </p>
            <h2 className="text-[20px] md:text-[38px] xl:text-[42px] font-bold leading-8 lg:leading-14.5 underline text-primary underline-offset-4">
              Global business experts on stage worldwide today live
            </h2>
          </div>

          {/* Right: stat box */}
          <div className="max-w-98 p-4 shrink-0 relative">
            {/* Left double dashed border */}
            <svg
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "6px",
                height: "100%",
                pointerEvents: "none",
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="100%"
                stroke="#02090F"
                strokeOpacity="0.2"
                strokeDasharray="2 2"
              />
              <line
                x1="5"
                y1="0"
                x2="5"
                y2="100%"
                stroke="#02090F"
                strokeOpacity="0.2"
                strokeDasharray="2 2"
              />
            </svg>

            {/* Bottom double dashed border */}
            <svg
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "6px",
                pointerEvents: "none",
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="#02090F"
                strokeOpacity="0.2"
                strokeDasharray="2 2"
              />
              <line
                x1="0"
                y1="5"
                x2="100%"
                y2="5"
                stroke="#02090F"
                strokeOpacity="0.2"
                strokeDasharray="2 2"
              />
            </svg>

            <div className="pl-3">
              <p className="text-[20px] md:text-[38px] lg:text-[70px] font-bold leading-none mb-2 text-primary">
                99%
              </p>
              <p className="text-[18px] lg:text-[20px] text-primary lg:leading-7">
                Worldwide client satisfaction through lasting partnerships
              </p>
            </div>
          </div>
        </div>

        {/* ── Expert Cards Grid */}
        <Grid cols={{ base: 1, md: 3 }} gap={30}>
          {allImages.home2OurExperts.map((expert, index) => (
            <div key={expert.id} className="bg-white">
              <div className="relative w-full aspect-3/4">
                <Image
                  src={expert.img}
                  alt={experts[index]?.name ?? "Expert"}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-4 md:px-6 xl:px-20 py-7.5 border-t border-neutral-200">
                <p className="text-[26px] font-bold text-center text-primary mb-4.5">
                  {experts[index]?.name}
                </p>
                <div className="flex items-center justify-center gap-1.5 flex-wrap">
                  {socialLinks.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-[13px] uppercase tracking-[0.06em] text-neutral-400 hover:text-neutral-700 transition-colors border border-black/10 rounded-[90px] py-1 px-2.5 whitespace-nowrap"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
