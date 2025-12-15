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

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center font-bold text-lg">
            A
          </div>
          <div>
            <h5 className="font-semibold">Ashok</h5>
            <p className="text-xs text-gray-400">Director SSE</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#101113] border border-gray-700 p-10 rounded-xl">
        <div className="text-orange-500 text-5xl mb-4">❝</div>

        <p className="text-gray-300 mb-8 leading-relaxed text-lg">
          "The AI workshop delivered by the Shraddha team was intellectually
          stimulating and spiritually enriching. They introduced students to the
          evolving world of AI with a unique blend of technical insight and
          ethical awareness."
        </p>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center font-bold text-lg">
            V
          </div>
          <div>
            <h5 className="font-semibold">Vinod</h5>
            <p className="text-xs text-gray-400">
              Placement Officer, IIT Idupulapaya
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#101113] border border-gray-700 p-10 rounded-xl">
        <div className="text-orange-500 text-5xl mb-4">❝</div>

        <p className="text-gray-300 mb-8 leading-relaxed text-lg">
          "The Shraddha team demonstrated deep expertise in IoT technologies and
          presented the concepts in a way that was both accessible and engaging
          for students from various technical backgrounds."
        </p>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center font-bold text-lg">
            K
          </div>
          <div>
            <h5 className="font-semibold">Dr. Kumaran</h5>
            <p className="text-xs text-gray-400">
              HOD, Dhanalakshmi Srinivasan University
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      <ContactPage
        title="Ready to kickstart your journey?"
        description="Let's discuss your ideas and make your vision a reality."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  )
}

export default Home