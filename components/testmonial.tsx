"use client";

import { useMemo } from "react";

export default function MovingTestimonials() {
  const testimonials = useMemo(
    () => [
      {
        name: "Ramakanth",
        role: "Managing Director, SVIT",
        quote: "Their web solutions are scalable, secure, and perfectly aligned with modern business needs.",
      },
      {
        name: "Ashok",
        role: "Director, SSE",
        quote: "A reliable technology partner delivering high-performance web and mobile applications.",
      },
      {
        name: "Sai B.",
        role: "Chairman, Sri Padmavathi Groups (SRI)",
        quote: "They transformed our digital presence with a strong blend of design, technology, and strategy.",
      },
      {
        name: "Pavan Kumar",
        role: "CEO, Tackle Prime India Pvt. Ltd.",
        quote: "Outstanding execution in app development and digital marketing with measurable growth.",
      },
      {
        name: "Karthik",
        role: "CEO, Timely",
        quote: "Exceptional product development with a clear focus on performance and user experience.",
      },
      {
        name: "Vinod Kumar",
        role: "HOD IIT Idupulapaya",
        quote: "Enterprise-grade solutions delivered with speed and technical excellence.",
      },
      {
        name: "Dr. Kumaran",
        role: "HOD, Dhanalakshmi Srinivasan University",
        quote: "A technology-driven organization delivering modern software solutions.",
      },
      {
        name: "Mallikarjuna Nandhi",
        role: "IIT Ongole",
        quote: "Innovative digital platforms backed by strong engineering execution.",
      },
      {
        name: "Ramchandra Reddy",
        role: "Director, Shri Rama Reddy Samastan, Kurnool",
        quote: "A trusted partner for digital transformation and automation.",
      },
      {
        name: "Sujith",
        role: "Director, ModernMinds",
        quote: "Creative, scalable, and business-focused digital solutions.",
      },
    ],
    []
  );

  return (
    <section className="bg-white dark:bg-[#0B1120] py-12 sm:py-16 lg:py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading Section */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block bg-[#F54E02] w-10 h-1 rounded-full mb-3"></span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
            Trusted <span className="text-[#F54E02]">Clients</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm sm:text-base lg:text-lg">
            Delivering Web, App & Digital Marketing Solutions
          </p>
        </div>

        {/* Manual Horizontal Scroll Container */}
        <div 
          className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                w-[280px] sm:w-[320px] lg:w-[380px]
                flex-shrink-0 snap-center
                p-6 sm:p-8
                rounded-2xl border
                border-slate-100 dark:border-slate-800
                bg-slate-50/50 dark:bg-slate-900/40
                backdrop-blur-sm
                transition-all duration-300
                hover:border-[#F54E02]
                group
              "
            >
              {/* Quote Icon */}
              <div className="text-[#F54E02] text-4xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                ❝
              </div>

              {/* Quote Text */}
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8 h-20 overflow-hidden line-clamp-3 italic">
                {t.quote}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F54E02] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-[#F54E02]/20">
                  {t.name.charAt(0)}
                </div>

                <div className="overflow-hidden">
                  <h5 className="text-slate-900 dark:text-white font-bold text-sm sm:text-base truncate">
                    {t.name}
                  </h5>
                  <p className="text-[#F54E02] text-[10px] sm:text-xs font-semibold uppercase tracking-wider truncate">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}