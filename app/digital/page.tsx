"use client";

import DigitalMarketingProcessSection from "@/components/digitalProcess";
import DigitalMarketingServicesSection from "@/components/digitalService";
import HeroSection from "@/components/HeroSection";
import ContactPage from "@/components/miniContact";
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

      {/* ================= RESULTS ================= */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6 lg:px-18 text-center">
          <span className="inline-block bg-[#ff4500] w-12 h-[3px] mb-2"></span>
          <h2 className="text-4xl font-bold mb-12">
            Results That Drive Growth
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "150%", label: "Average Traffic Increase" },
              { num: "200+", label: "Successful Campaigns" },
              { num: "85%", label: "Client Retention Rate" },
              { num: "3x", label: "Average ROI" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow"
              >
                <h3 className="text-4xl font-bold text-orange-500">
                  {stat.num}
                </h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DigitalMarketingProcessSection />
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
