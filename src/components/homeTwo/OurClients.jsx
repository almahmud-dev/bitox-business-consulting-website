import Image from "next/image";
import Container from "@/components/ui/Container";
import { Stack, Grid } from "@/components/ui/Responsive";

const CLIENTS = [
  {
    id: "01",
    name: "Loreipsum",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    logo: "/images/home2_Client/client1.png",
  },
  {
    id: "02",
    name: "Loreipsum",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    logo: "/images/home2_Client/client2.png",
  },
  {
    id: "03",
    name: "Loreipsum",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    logo: "/images/home2_Client/client3.png",
  },
  {
    id: "04",
    name: "Loreipsum",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    logo: "/images/home2_Client/client4.png",
  },
  {
    id: "05",
    name: "Loreipsum",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    logo: "/images/home2_Client/client5.png",
  },
  {
    id: "06",
    name: "Loreipsum",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    logo: "/images/home2_Client/client6.png",
  },
  {
    id: "07",
    name: "Loreipsum",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    logo: "/images/home2_Client/client7.png",
  },
];

function OurClients() {
  return (
    <section className="bg-[#F5F0EA]">
      {/* Header */}
      <Container size="xl">
        <div className="py-[80px] xl:py-[120px]">
          {/* Badge — center */}
          <div className="flex justify-center mb-6">
            <span className="inline-block border border-black/20 py-[5px] px-[15px] text-xs font-bold uppercase tracking-widest">
              Our Clients
            </span>
          </div>

          {/* Heading — left, pl-160px */}
          <h2
            className="text-[clamp(28px,4vw,52px)] font-bold leading-tight underline underline-offset-4 max-w-[1005px]"
            style={{ paddingLeft: "clamp(20px, 8vw, 160px)" }}
          >
            Enterprise partnerships, built on clarity and craft, driving
            scalable growth and long-term strategic success
          </h2>
        </div>
      </Container>

      {/* Cards grid — full width */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap:3 lg:gap-5">
        {CLIENTS.map((client) => (
          <div key={client.id} className="flex flex-col">
            {/* Image box */}
            <div className="border border-black/10 bg-white flex flex-col p-4 h-[180px] sm:h-[200px]">
              <span className="text-[15px] text-center text-black/40 tracking-wide">
                ({client.id})
              </span>
              <div className="flex items-center justify-center flex-1">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={50}
                  className="object-contain max-h-[50px]"
                />
              </div>
            </div>

            {/* Text outside */}
            <div className="pt-4 px-1">
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
// import Image from "next/image";
// import Container from "@/components/ui/Container";
// import { Stack, Grid } from "@/components/ui/Responsive";

// const CLIENTS = [
//   { id: "01", name: "Loreipsum", description: "Lorem ipsum dolor sit amet, consectetur.", logo: "/images/home2_Client/client1.png" },
//   { id: "02", name: "Loreipsum", description: "Lorem ipsum dolor sit amet, consectetur.", logo: "/images/home2_Client/client2.png" },
//   { id: "03", name: "Loreipsum", description: "Lorem ipsum dolor sit amet, consectetur.", logo: "/images/home2_Client/client3.png" },
//   { id: "04", name: "Loreipsum", description: "Lorem ipsum dolor sit amet, consectetur.", logo: "/images/home2_Client/client4.png" },
//   { id: "05", name: "Loreipsum", description: "Lorem ipsum dolor sit amet, consectetur.", logo: "/images/home2_Client/client5.png" },
//   { id: "06", name: "Loreipsum", description: "Lorem ipsum dolor sit amet, consectetur.", logo: "/images/home2_Client/client6.png" },
//   { id: "07", name: "Loreipsum", description: "Lorem ipsum dolor sit amet, consectetur.", logo: "/images/home2_Client/client7.png" },
// ];

// function OurClients() {
//   return (
//     <section className="bg-[#F5F0EA]">

//       {/* Header */}
//       <Container size="xl">
//         <div className="py-[80px] xl:py-[120px]">

//           {/* Badge — center */}
//           <div className="flex justify-center mb-6">
//             <span className="inline-block border border-black/20 py-[5px] px-[15px] text-xs font-bold uppercase tracking-widest">
//               Our Clients
//             </span>
//           </div>

//           {/* Heading — left, pl-160px */}
//           <h2
//             className="text-[clamp(28px,4vw,52px)] font-bold leading-tight underline underline-offset-4 max-w-[700px]"
//             style={{ paddingLeft: "clamp(20px, 8vw, 160px)" }}
//           >
//             Enterprise partnerships, built on clarity and craft, driving scalable growth and long-term strategic success
//           </h2>

//         </div>
//       </Container>

//       {/* Cards grid — full width, no container */}
//       <div className="w-full">
//         <Grid cols={{ base: 2, sm: 3, md: 4, lg: 7 }} gap="none">
//           {CLIENTS.map((client) => (
//             <div key={client.id} className="flex flex-col">

//               {/* Image box — border */}
//               <div className="border border-black/10 bg-white flex flex-col p-4 h-[180px] sm:h-[200px]">
//                 {/* Index */}
//                 <span className="text-[11px] text-black/40 tracking-wide mb-auto">
//                   ({client.id})
//                 </span>
//                 {/* Logo */}
//                 <div className="flex items-center justify-center flex-1">
//                   <Image
//                     src={client.logo}
//                     alt={client.name}
//                     width={120}
//                     height={50}
//                     className="object-contain max-h-[50px]"
//                   />
//                 </div>
//               </div>

//               {/* Text — outside border box */}
//               <div className="pt-4 px-1 text-left">
//                 <p className="font-bold text-sm">{client.name}</p>
//                 <p className="text-xs text-black/50 mt-1 leading-snug">{client.description}</p>
//               </div>

//             </div>
//           ))}
//         </Grid>
//       </div>

//     </section>
//   );
// }

// export default OurClients;
