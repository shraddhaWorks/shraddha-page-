"use client";

import { motion } from "framer-motion";
import { Award, Lightbulb, Handshake, Users } from "lucide-react";
import Image from "next/image";
import MovingTestimonials from "./testmonial";

export default function AboutPage() {
  return (
    <div className="w-full bg-white">

      {/* ================= OUR STORY ================= */}
      <section className="container mx-auto px-6 md:px-16 py-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="relative">
          <motion.div className="overflow-hidden rounded-xl">
            <Image
              src="/aboutus-section1-img.png"
              alt="Team Discussion"
              width={500}
              height={500}
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Orange Blob */}
          <div className="absolute -z-10 -left-10 top-16 w-64 h-64 bg-orange-500 rounded-[60%]" />
        </div>

        {/* Right Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Shraddha began with a simple observation: while India produces
            numerous engineering graduates each year, there was a significant
            gap between academic knowledge and industry requirements.
          </p>

          <p className="text-gray-600 mb-10 leading-relaxed">
            Founded by a team of technology professionals and educators,
            Shraddha provides targeted, practical training that focuses on
            real-world skills and workplace readiness.
          </p>

          {/* Highlights */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex items-start gap-3">
              <div className="bg-orange-500 text-white p-3 rounded-full">🚀</div>
              <div>
                <h4 className="font-semibold">Our Beginning</h4>
                <p className="text-sm text-gray-600">
                  Started with 2 courses and a single classroom.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-orange-500 text-white p-3 rounded-full">👥</div>
              <div>
                <h4 className="font-semibold">Growing Community</h4>
                <p className="text-sm text-gray-600">
                  Trained 5,000+ students with 95% placement rate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

   <section className="container mx-auto px-17 md:px-16 py-10 text-center">
      <h2 className="text-4xl font-bold mb-4 text-black">
        Our Core Values
      </h2>

      <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
        The principles that guide our approach to education and business
      </p>

      <div className="grid md:grid-cols-4 gap-8">
        {[
          { icon: <Award size={24} />, title: "Excellence" },
          { icon: <Lightbulb size={24} />, title: "Innovation" },
          { icon: <Handshake size={24} />, title: "Integrity" },
          { icon: <Users size={24} />, title: "Community" },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-8 shadow hover:shadow-xl transition"
          >
            <div className="bg-orange-500 text-white w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-4">
              {item.icon}
            </div>

            <h3 className="font-semibold text-lg text-black">
              {item.title}
            </h3>

            <p className="text-gray-500 mt-3 text-sm">
              We focus on delivering the highest value in everything we do.
            </p>
          </motion.div>
        ))}
      </div>
    </section>

    <MovingTestimonials/>
    </div>
  );
}
