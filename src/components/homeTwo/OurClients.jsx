import Image from "next/image";
import { CLIENTS } from "../helper/helpers";

function OurClients() {
  return (
    <section className="bg-bg-secondaryOne px-2 py-[80px] xl:py-[120px]">
      {/* Header */}

      <div className="relative mb-[40px] lg:mb-[120px]">
        {/* Badge + Heading — same left alignment */}
        <div className="text-center md:text-left md:pl-[160px] xl:pl-[550px]">
          {/* Badge */}
          <div className="mb-7.5">
            <span className="inline-flex items-center border border-black/10 rounded-[4px] py-1 px-[15px] text-xs font-bold uppercase tracking-widest">
              Our Clients
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-[20px] md:text-[38px] xl:text-[42px] font-bold underline underline-offset-4 max-w-[1005px] text-primary"
            style={{ fontFamily: "'Creato Display', sans-serif" }}
          >
            Enterprise partnerships, built on clarity and craft, driving
            scalable growth and long-term strategic success
          </h2>
        </div>
      </div>

      {/* Cards grid — full width */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap:3 lg:gap-5">
        {CLIENTS.map((client) => (
          <div key={client.id} className="flex flex-col">
            {/* Image box */}
            <div className="border border-black/10 bg-white flex flex-col p-4 rounded-[10px] h-[180px] sm:h-[200px]">
              <span className="text-[12px] text-center text-primary">
                ({client.id})
              </span>
              <div className="flex items-center justify-center flex-1">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={50}
                  className="object-contain max-h-[53px]"
                />
              </div>
            </div>

            {/* Text outside */}
            <div className="pt-4 px-1 text-center">
              <p className="font-bold text-sm">{client.name}</p>
              <p className="text-xs text-black/50 mt-1 leading-snug">
                {client.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default OurClients;
