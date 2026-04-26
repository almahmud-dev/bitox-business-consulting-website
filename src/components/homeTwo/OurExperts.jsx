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
    <section className="bg-bg-secondaryOne py-10 lg:py-[120px]">
      <Container size="lg">
        {/* ── Header Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-10">
          {/* Left: eyebrow + heading */}
          <div className="max-w-[771px]">
            <p className="inline-flex items-center border border-black/10 rounded-[4px] py-1 px-[15px] text-xs font-bold uppercase tracking-widest mb-2">
              Meet our experts
            </p>
            <h2 className="text-[28px] md:text-[36px] font-bold leading-[1.2] underline text-neutral-900">
              Global business experts on stage worldwide today live
            </h2>
          </div>

          {/* Right: stat box */}
          <div className="max-w-[392px] border border-neutral-300 p-4 shrink-0">
            <p className="text-[40px] font-bold leading-none mb-2 text-neutral-900">
              99%
            </p>
            <p className="text-[12px] text-neutral-500 leading-relaxed">
              Worldwide client satisfaction through lasting partnerships
            </p>
          </div>
        </div>

        {/* ── Expert Cards Grid */}
        <Grid cols={{ base: 1, md: 3 }} gap={30}>
          {allImages.home2OurExperts.map((expert, index) => (
            <div key={expert.id} className="bg-white">
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={expert.img}
                  alt={experts[index]?.name ?? "Expert"}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-5 py-4 border-t border-neutral-200">
                <p className="text-[14px] font-semibold text-center text-neutral-900 mb-2">
                  {experts[index]?.name}
                </p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-[10px] uppercase tracking-[0.06em] text-neutral-400 hover:text-neutral-700 transition-colors"
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
