"use client";

import React from "react";

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
      "We begin by understanding your business goals, target audience, and specific requirements. This initial phase includes competitive analysis, user research, and project planning to establish clear objectives and timelines.",
  },
  {
    number: 2,
    title: "Design & Prototyping",
    description:
      "Our designers create wireframes and interactive prototypes that visualize the user interface and experience. We collaborate with you to refine the design until it perfectly matches your vision and brand identity.",
  },
  {
    number: 3,
    title: "Development & Testing",
    description:
      "Our development team transforms designs into fully functional websites using the most appropriate technologies. Rigorous testing ensures your website works flawlessly across all devices and browsers.",
  },
  {
    number: 4,
    title: "Launch & Maintenance",
    description:
      "After final approval, we deploy your website to a production environment. Our relationship continues with ongoing maintenance, updates, and support to ensure your website remains secure and performs optimally.",
  },
];

const ProcessStepCard = ({ step }: { step: ProcessStep }) => {
  return (
    <div className="flex items-start gap-4 sm:gap-6 relative">
      {/* Number & Line */}
      <div className="flex flex-col items-center">
        <div
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
          style={{ backgroundColor: BRAND_COLOR }}
        >
          {step.number}
        </div>

        <div
          className="w-[2px] h-12 sm:h-16 mt-1"
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
    </div>
  );
};

export default function DevelopmentProcessSection() {
  return (
    <section
      className="bg-[#f8f9fa] py-12 sm:py-16 lg:py-20"
      id="development-process"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-18">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className="w-12 h-1 mx-auto mb-3"
            style={{ backgroundColor: BRAND_COLOR }}
          />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Our Development Process
          </h2>
          <p
            className="text-base sm:text-lg max-w-xl mx-auto"
            style={{ color: TEXT_MUTED }}
          >
            A systematic approach to delivering high-quality web solutions
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">

          {/* Image Section */}
          <div className="relative lg:w-1/2 flex justify-start mb-10 lg:mb-0">
            <div className="relative max-w-lg w-full overflow-hidden">

              <img
                src="/slide2.jpeg"
                alt="Presentation"
                className="w-full h-[260px] sm:h-[360px] lg:h-[520px] object-cover"
              />

              {/* Side black label */}
              <div className="hidden sm:flex absolute top-0 bottom-0 -left-20 w-20 bg-black items-center justify-center">
                <span className="text-white font-extrabold text-4xl tracking-[0.5rem] rotate-90 uppercase">
                  Shraddha
                </span>
              </div>

            </div>
          </div>

          {/* Steps */}
          <div className="lg:w-1/2 space-y-6 sm:space-y-8">
            {DEVELOPMENT_PROCESS.map((step) => (
              <ProcessStepCard key={step.number} step={step} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
