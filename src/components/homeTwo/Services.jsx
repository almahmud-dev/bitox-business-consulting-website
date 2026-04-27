"use client"

import { useState } from "react"
import Container from "../ui/Container"
import { Stack } from "../ui/Responsive"
const services = [
  {
    number: "01",
    category: "Consultancy",
    title: "Business Consultancy",
    description:
      "Developing smarts, data-driven strategies & practical business plans that turn ideas into profitable scalable outcomes worldwide.",
    features: ["Integrity & Support", "Data Entry", "Growth forecasting"],
    image: "/images/home2_services/business_consultancy.png",
  },
  {
    number: "02",
    category: "Planning",
    title: "Financial Planning",
    description:
      "Developing smarts, data-driven strategies & practical business plans that turn ideas into profitable scalable outcomes worldwide.",
    features: ["Investment planning", "Education planning", "Growth forecasting"],
    image: "/images/home2_services/business_consultancy.png",
  },
  {
    number: "03",
    category: "Tax & Vat",
    title: "Vat & Tax Consultancy",
    description:
      "Developing smarts, data-driven strategies & practical business plans that turn ideas into profitable scalable outcomes worldwide.",
    features: ["Integrity & Support", "Data Entry", "Growth forecasting"],
    image: "/images/home2_services/business_consultancy.png",
  },
]

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 shrink-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-[260px] sm:h-[340px] md:h-[465px] object-cover md:rounded-tl-[6px] md:rounded-bl-[6px]"
        />
      </div>

      {/* Right: Text Content */}
      <div
        className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-10 md:py-14 transition-colors duration-300 cursor-pointer"
        style={{ backgroundColor: isHovered ? "#FF5101" : "#ffffff" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Category label */}
        <p
          className="text-xs sm:text-sm mb-3 tracking-wide transition-colors duration-300"
          style={{ color: isHovered ? "rgba(255,255,255,0.8)" : "#6b7280" }}
        >
          {service.number} — {service.category}
        </p>

        {/* Title */}
        <h2
          className="text-2xl sm:text-3xl font-bold underline mb-4 transition-colors duration-300"
          style={{ color: isHovered ? "#ffffff" : "#111827" }}
        >
          {service.title}
        </h2>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-6 max-w-sm transition-colors duration-300"
          style={{ color: isHovered ? "rgba(255,255,255,0.9)" : "#4b5563" }}
        >
          {service.description}
        </p>

        {/* Feature List */}
        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm transition-colors duration-300"
              style={{ color: isHovered ? "#ffffff" : "#374151" }}
            >
              <span
                className="w-2 h-2 rounded-full shrink-0 transition-colors duration-300"
                style={{ backgroundColor: isHovered ? "#ffffff" : "#374151" }}
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Services = () => {
  return (
    <section className="w-full">
      <Container size="lg">
        <Stack gap="none">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </Stack>
      </Container>
    </section>
  )
}

export default Services