"use client"
import AboutSection from '@/components/aboutus'
import Banner from '@/components/baneer'
import React from 'react'
import { motion } from "framer-motion";
import BusinessServicesSection from '@/components/services';
import ContactPage from '@/components/miniContact';
import WhyChooseShraddha from '@/components/WhyChooseShraddha';

const Home = () => {
  return (
    <div>
        <Banner/>
        <BusinessServicesSection/>
        <WhyChooseShraddha/>
       {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[#1C1F24] py-20">
  <div className="container mx-auto px-17 text-white">
    {/* Heading */}
    <h2 className="text-4xl font-bold text-center mb-4">
      Client <span className="text-orange-500">Testimonials</span>
    </h2>
    <p className="text-center text-gray-400 mb-16">
      What our clients say about our web development services
    </p>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-[#101113] border border-gray-700 p-10 rounded-xl">
        <div className="text-orange-500 text-5xl mb-4">❝</div>

        <p className="text-gray-300 mb-8 leading-relaxed text-lg">
          "We approached Shraddha for a complete website redesign, and they
          exceeded our expectations. The new website perfectly represents our
          brand and has significantly improved our conversion rates."
        </p>

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
