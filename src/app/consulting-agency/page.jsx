import React from 'react'
import Herotwo from '@/components/homeTwo/Herotwo'
import OurClients from '@/components/homeTwo/OurClients'
import AboutUs from '@/components/homeTwo/AboutUs'
import CoreFeatures from '@/components/homeTwo/CoreFeatures'
import TestimonialsClient from '@/components/homeTwo/TestimonialsClient'
import PricingPlan from '@/components/homeTwo/PricingPlan'
import OurExperts from '@/components/homeTwo/OurExperts'

const page = () => {
  return (
    <>
      <Herotwo/>
      <OurClients/>
      <AboutUs/>
      <CoreFeatures/>
      <TestimonialsClient/>
      <PricingPlan/>
      <OurExperts/>
    </>
  )
}

export default page