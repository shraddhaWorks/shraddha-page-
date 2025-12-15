import AppDevelopmentStack from '@/components/appdevelopmentstack'
import DevelopmentProcessSection from '@/components/appProcess'
import AppDevelopmentServicesSection from '@/components/appServices'
import HeroSection from '@/components/HeroSection'
import ContactPage from '@/components/miniContact'
import MovingTestimonials from '@/components/testmonial'
import React from 'react'

const AppDevelop = () => {
  return (
    <div>
      <HeroSection
        tag="CUSTOM APP DEVELOPMENT"
        title="Enterprise-Grade Custom Applications Built to Scale"
        description="We design and develop fully customized web and mobile applications tailored to complex business and institutional requirements. From idea to deployment, our solutions focus on security, scalability, and long-term performance to solve real operational challenges."
        primaryBtnText="Discuss Your Project"
        primaryBtnLink="#"
        imageSrc="/appService-top-right.jpeg"
      />

      <AppDevelopmentServicesSection />
      <AppDevelopmentStack />
      <DevelopmentProcessSection />
      
    </div>
  )
}

export default AppDevelop