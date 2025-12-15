"use client";

import DigitalMarketingProcessSection from "@/components/digitalProcess";
import DigitalMarketingServicesSection from "@/components/digitalService";
import HeroSection from "@/components/HeroSection";
import ContactPage from "@/components/miniContact";
import MovingTestimonials from "@/components/testmonial";
import { motion } from "framer-motion";

const Digital = () => {
  return (
    <div>
      <HeroSection
        tag="DIGITAL MARKETING SERVICES"
        title="Grow Your Online Presence"
        description="Strategic digital marketing solutions designed to increase your brand visibility, drive qualified traffic, and boost conversions for measurable business growth."
        primaryBtnText="Get a Free Consultation"
        primaryBtnLink="#"
        imageSrc="/digital-top-right.jpg"
      />

      <DigitalMarketingServicesSection />

    

      <DigitalMarketingProcessSection />
      <MovingTestimonials/>
       <ContactPage
        title="Ready to grow your online presence?"
        description="Contact us today for a custom digital marketing strategy."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
};

export default Digital;
