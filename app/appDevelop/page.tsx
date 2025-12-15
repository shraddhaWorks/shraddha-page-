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
  tag = "APP DEVELOPMENT"
  title = "Transform Your Ideas Into Reality"
  description = "We build innovative, user-friendly mobile applications that engage users and drive business growth. From concept to deployment, our development team creates custom solutions for iOS and Android platforms."
  primaryBtnText = "Discuss Your Project"
  primaryBtnLink = "#"
  imageSrc = "/appService-top-right.jpeg"
/>
        <AppDevelopmentServicesSection/>
        <AppDevelopmentStack/>
        <DevelopmentProcessSection/>
        <MovingTestimonials/>
        <ContactPage
        title="Want to develop a mobile app?"
        description="Our experts will help you create a seamless mobile experience."
        buttonText="Get a Free Quote"
        buttonLink="/contact"
      />
    </div>
  )
}

export default AppDevelop