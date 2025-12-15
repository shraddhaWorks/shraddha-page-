"use client";

import React from "react";
import { motion } from "framer-motion";

const BRAND_COLOR = "#F54E02";
const TEXT_MUTED = "#6c757d";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

const DEVELOPMENT_PROCESS: ProcessStep[] = [
  {
    number: 1,
    title: "Discovery & Planning",
    description:
      "We begin by understanding your business objectives, target audience, and app requirements. This phase includes market research, competitor analysis, and defining the app's scope and features.",
  },
  {
    number: 2,
    title: "UI/UX Design",
    description:
      "Our designers create wireframes, prototypes, and visual designs that align with your brand and provide an intuitive user experience. We iterate based on your feedback until the design is perfect.",
  },
  {
    number: 3,
    title: "Development",
    description:
      "Using agile methodology, our developers build your app with clean, efficient code. We provide regular updates and demonstrations throughout this phase to ensure transparency.",
  },
  {
    number: 4,
    title: "Testing & Quality Assurance",
    description:
      "Rigorous testing across multiple devices and scenarios ensures your app functions flawlessly. We check for bugs, usability issues, performance, and security vulnerabilities.",
  },
  {
    number: 5,
    title: "Deployment & Launch",
    description:
      "We handle the submission process to app stores, ensuring all guidelines are met. Our team provides launch support and marketing assistance to maximize your app's initial impact.",
  },
  {
    number: 6,
    title: "Post-Launch Support",
    description:
      "Our relationship continues after launch with ongoing maintenance, updates, and performance monitoring to ensure long-term success and user satisfaction.",
  },
];

const ProcessStepCard = ({ step }: { step: ProcessStep }) => {
  return (
    <motion.div
      className="flex items-start gap-6 relative"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Number & Line */}
      <div className="flex flex-col items-center">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
          style={{ backgroundColor: BRAND_COLOR }}
        >
          {step.number}
        </div>
        <div
          className="w-[2px] h-16 mt-1"
          style={{ backgroundColor: BRAND_COLOR }}
        />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">
          {step.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function DevelopmentProcessSection() {
  return (
    <section className="py-20 bg-white" id="development-process">
      <div className="container mx-auto px-6 lg:px-18">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#ff4500] w-12 h-[3px] mb-2"></span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Our Development Process
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: TEXT_MUTED }}>
            A structured, transparent approach to ensure your app is delivered on time and meets all requirements
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Image Section */}
          <motion.div
            className="relative lg:w-1/2 flex justify-start mb-12 lg:mb-0 "
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative max-w-lg w-full overflow-hidden rounded-xl">
              <img
                src="/web-left-process.webp"
                alt="Mobile App Presentation"
                className="w-full h-[700px] object-cover"
              />
             
              {/* Side black label */}
              <div className="absolute top-0 bottom-0 -left-20 w-20 bg-black flex items-center justify-center">
                <span className="text-white font-extrabold text-4xl tracking-[0.5rem] rotate-90 uppercase">
                  App
                </span>
              </div>
            </div>
          </motion.div>

          {/* Steps */}
          <div className="lg:w-1/2 space-y-8">
            {DEVELOPMENT_PROCESS.map((step) => (
              <ProcessStepCard key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
