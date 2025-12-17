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

const DIGITAL_MARKETING_PROCESS: ProcessStep[] = [
  {
    number: 1,
    title: "Discovery & Analysis",
    description:
      "We analyze your business, target audience, and competitors to identify opportunities and set clear objectives.",
  },
  {
    number: 2,
    title: "Strategy Development",
    description:
      "We create a customized digital marketing strategy aligned with your goals and budget.",
  },
  {
    number: 3,
    title: "Implementation",
    description:
      "Our team executes the strategy across selected channels with meticulous attention to detail.",
  },
  {
    number: 4,
    title: "Optimization & Reporting",
    description:
      "We monitor performance, make data-driven adjustments, and provide regular reports on key metrics.",
  },
];

const ProcessStepCard = ({ step }: { step: ProcessStep }) => {
  return (
    <motion.div
      className="flex items-start gap-4 sm:gap-6 relative"
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
          className="w-[2px] h-14 sm:h-16 mt-1"
          style={{ backgroundColor: BRAND_COLOR }}
        />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
          {step.title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: TEXT_MUTED }}
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function DigitalMarketingProcessSection() {
  return (
    <section
      className="bg-white py-14 sm:py-20"
      id="digital-marketing-process"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-18">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-[#ff4500] w-12 h-[3px] mb-2"></span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Our Process
          </h2>
          <p
            className="text-base sm:text-lg max-w-xl mx-auto"
            style={{ color: TEXT_MUTED }}
          >
            We follow a systematic approach to ensure your digital marketing
            strategy delivers consistent results
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6 sm:space-y-8">
            {DIGITAL_MARKETING_PROCESS.map((step) => (
              <ProcessStepCard key={step.number} step={step} />
            ))}
          </div>

          {/* Right Image */}
          <motion.div
            className="relative lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ transformOrigin: "bottom" }}
          >
            <div className="relative max-w-lg w-full overflow-hidden rounded-xl">
              <img
                src="/digital-process-right.jpg"
                alt="Digital Marketing"
                className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
              />

              {/* Side label */}
              <div className="absolute top-0 bottom-0 -left-20 w-20 bg-black flex items-center justify-center">
                <span className="text-white font-extrabold text-3xl sm:text-4xl tracking-[0.5rem] rotate-90 uppercase">
                  DM
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
