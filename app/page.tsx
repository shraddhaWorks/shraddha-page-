"use client";

import React, { useState, useEffect } from "react";
import AboutSection from "@/components/aboutus";
import Banner from "@/components/baneerNew";
import { motion } from "framer-motion";
import BusinessServicesSection from "@/components/servicesNew";
import ContactPopup from "@/components/miniContact"; // Make sure this matches your actual file
import WhyChooseShraddha from "@/components/whyChooseShraddhaNew"; // Updated import for the new component
import MovingTestimonials from "@/components/testmonial";
import ContactCTA from "@/components/contactCTA";


const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 15000); // 15 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <Banner onGetStarted={() => setShowPopup(true)} />
      <BusinessServicesSection />
      <WhyChooseShraddha />
      
      <MovingTestimonials />
      <ContactCTA onGetStarted={() => setShowPopup(true)} />
       {/* Contact Popup */}
       <ContactPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </div>
  );
};

export default Home;
