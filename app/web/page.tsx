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
        tag="WEB DEVELOPMENT"
        title="Websites That Work for Your Business"
        description="We build responsive, fast, and conversion-focused websites tailored to your business goals. From corporate websites to complex web applications, we ensure performance, scalability, and usability at every level."
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