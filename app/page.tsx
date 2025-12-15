"use client"
import AboutSection from '@/components/aboutus'
import Banner from '@/components/baneer'
import React from 'react'
import { motion } from "framer-motion";
import BusinessServicesSection from '@/components/services';
import ContactPage from '@/components/miniContact';
import WhyChooseShraddha from '@/components/WhyChooseShraddha';


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
