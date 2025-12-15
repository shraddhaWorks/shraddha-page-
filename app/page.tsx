"use client";

import React, { useState, useEffect } from "react";
import AboutSection from "@/components/aboutus";
import Banner from "@/components/baneer";
import { motion } from "framer-motion";
import BusinessServicesSection from "@/components/services";
import ContactPopup from "@/components/miniContact"; // Make sure this matches your actual file
import WhyChooseShraddha from "@/components/WhyChooseShraddha";
import MovingTestimonials from "@/components/MovingTestimonials"; // Add this import if you have it

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
      <Banner />
      <BusinessServicesSection />
      <AboutSection />
      <WhyChooseShraddha />
      <MovingTestimonials />

      {/* Contact Popup */}
      <ContactPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </div>
  );
};

export default Home;
