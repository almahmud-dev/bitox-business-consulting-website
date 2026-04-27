import React from 'react'
import Herotwo from '@/components/homeTwo/Herotwo'
import OurClients from '@/components/homeTwo/OurClients'
import AboutUs from '@/components/homeTwo/AboutUs'
import CoreFeatures from '@/components/homeTwo/CoreFeatures'
import TestimonialsClient from '@/components/homeTwo/TestimonialsClient'
import PricingPlan from '@/components/homeTwo/PricingPlan'
import OurExperts from '@/components/homeTwo/OurExperts'
import OurTeam from '@/components/homeTwo/OurTeam'
import BlogInsight from '@/components/homeTwo/BlogInsight'
import Services from '@/components/homeTwo/Services'

const page = () => {
  return (
    <>
      <Herotwo/>
      <OurClients/>
      <AboutUs/>
      <CoreFeatures/>
      <Services/>
      <TestimonialsClient/>
      <PricingPlan/>
      <OurExperts/>
      <OurTeam/>
      <BlogInsight/>
    </>
  )
}

export default page