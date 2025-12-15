"use client";

import React, { useEffect, useState } from "react";
import Banner from "@/components/baneer";
import AboutSection from "@/components/aboutus";
import BusinessServicesSection from "@/components/services";
import ContactPopup from "@/components/ContactPopup";
import MovingTestimonials from "@/components/testmonial";

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

    <MovingTestimonials/>

      {/* Contact Popup */}
      <ContactPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </div>
  );
};

export default Home;
