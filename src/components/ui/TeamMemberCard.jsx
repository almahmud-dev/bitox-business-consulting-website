import Image from "next/image";
import Link from "next/link";

const TeamMemberCard = ({ expert, slug = "#" }) => {
  return (
    <div className="bg-white group ">
      <div className="relative w-full aspect-[3/4]  overflow-hidden">
        <Link href={slug} className="relative block w-full h-full">
          <Image
            src={expert.image}
            alt={expert.name ?? "Expert"}
            sizes="(max-width: 768px) 50vw, 25vw"
            fill
            className="object-cover"
          />

          {/* Gradient overlay - slides in from right on hover */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#ff5101]/70 via-[#ff5101]/35 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
        </Link>

        {/* Social links - right side, slides in on hover */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4  md:gap-2 lg:gap-4 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-10 pr-4 sm:pr-3 md:pr-2 lg:pr-5 ">
          {expert.socials.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              className="text-[11px] hover:bg-black hover:text-white uppercase tracking-[0.06em] text-white border border-white hover:border-black transition duration-300 ease-in-out rounded-full py-1 px-2.5 whitespace-nowrap hover:scale-110"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>

      {/* Card footer */}
      <div className="px-4 md:px-6 xl:px-20 py-7.5 border-t border-neutral-200">
        <Link href={slug}>
          <p className="text-[26px] font-bold text-center text-primary mb-4.5  duration-500 ease-in-out group-hover:text-secondary">
            {expert.name}
          </p>
        </Link>
        <div className="flex items-center justify-center gap-1.5 flex-wrap">
          {expert.socials.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              className="text-[13px] uppercase tracking-[0.06em] text-neutral-400 hover:text-neutral-700 transition-colors border border-black/10 rounded-[90px] py-1 px-2.5 whitespace-nowrap"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
