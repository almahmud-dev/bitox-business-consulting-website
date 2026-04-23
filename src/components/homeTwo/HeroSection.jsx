import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: '950px' }}>

      {/* Background Image */}
      <Image
        src="/images/hero/hero2.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div
        className="absolute z-[1]"
        style={{
          width: '1920px',
          height: '950px',
          left: '0px',
          top: '0px',
          background: 'rgba(0, 0, 0, 0.35)',
        }}
      />

      {/* Content Wrapper */}
      <div className="absolute inset-0 z-[5] w-full h-full">

        {/* (Est. 2010) */}
        <div
          className="absolute text-white"
          style={{
            width: '404px',
            height: '90px',
            left: '1439px',
            top: '130px',
            fontFamily: 'Creato Display',
            fontWeight: 400,
            fontSize: '90px',
            lineHeight: '90px',
          }}
        >
          (Est. 2010)
        </div>

        {/* Service List */}
        <div
          className="absolute flex flex-col gap-[6px]"
          style={{
            width: '202px',
            height: '144px',
            left: '1441px',
            top: '332px',
          }}
        >
          {[
            'Business Consultancy',
            'Financial Planning',
            'Vat & Tax Consultancy',
            'Strategic Business Advisory',
            'Sales & CRM Strategy',
          ].map((service) => (
            <span
              key={service}
              className="text-white hover:text-secondary cursor-pointer transition-colors"
              style={{ fontSize: '13px', lineHeight: '20px' }}
            >
              {service}
            </span>
          ))}
        </div>

        {/* CONSULTANT */}
        <h1
          className="absolute text-white uppercase"
          style={{
            left: '75px',
            top: '200px',
            fontSize: '260px',
            fontWeight: 600,
            lineHeight: '250px',
            letterSpacing: '-2px',
          }}
        >
          CONSULTANT
        </h1>

        {/* AGENCY */}
        <h1
          className="absolute text-white uppercase"
          style={{
            right: '75px',
            bottom: '130px',
            fontSize: '260px',
            fontWeight: 600,
            lineHeight: '250px',
            letterSpacing: '-2px',
          }}
        >
          AGENCY_
        </h1>

        {/* Tagline + Button - bottom left */}
        <div
          className="absolute flex flex-col gap-[20px]"
          style={{ left: '75px', bottom: '75px' }}
        >
          <p
            className="text-white font-medium"
            style={{ fontSize: '24px', lineHeight: '32px' }}
          >
            Transforming your vision<br />
            into measurable success
          </p>
          <button className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full w-fit text-sm font-medium hover:bg-secondary hover:text-white transition-all">
            Get started now →
          </button>
        </div>

      </div>
    </section>
  )
}

export default HeroSection