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
        tag="DIGITAL MARKETING"
        title="Strategic Digital Marketing for Sustainable Growth"
        description="We help brands build a strong online presence through SEO, paid advertising, and performance-driven campaigns. Our approach combines creativity, analytics, and continuous optimization to deliver measurable results."
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
