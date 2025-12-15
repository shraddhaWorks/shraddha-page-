"use client";
import HeroSection from '@/components/HeroSection';
import ContactPage from '@/components/miniContact';
import MovingTestimonials from '@/components/testmonial';
import DevelopmentProcessSection from '@/components/webprocess'
import WebServiceStack from '@/components/WebServiceStack';
import BusinessServicesSection from '@/components/whiteService'


import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from 'react';

const Web = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      <HeroSection
        tag="WEB DEVELOPMENT SERVICES"
        title="Custom Web Solutions for Growing Businesses"
        description="We create custom, responsive, and user-friendly websites designed to showcase your brand and drive conversions. From simple landing pages to complex e-commerce platforms, we build web solutions that deliver results."
        primaryBtnText="Get a Free Quote"
        primaryBtnLink="#"
        secondaryBtnText="View Our Work"
        secondaryBtnLink="#"
        imageSrc="/landing2-left-top.jpg"
      />
      <BusinessServicesSection />
      <WebServiceStack />
      <DevelopmentProcessSection />

      <MovingTestimonials />

      <ContactPage
        title="Ready to build your website?"
        description="Discuss your web project with us and get a free quote today."
        buttonText="Start Your Project"
        buttonLink="/contact"
      />
    </div>
  )
}

export default Web