"use client";

import { useMemo } from "react";

export default function MovingTestimonials() {
  const testimonials = useMemo(
    () => [
      {
        name: "Ramakanth",
        role: "Managing Director, SVIT",
        quote:
          "Their web solutions are scalable, secure, and perfectly aligned with modern business needs.",
      },
      {
        name: "Ashok",
        role: "Director, SSE",
        quote:
          "A reliable technology partner delivering high-performance web and mobile applications.",
      },
      {
        name: "Sai B.",
        role: "Chairman, Sri Padmavathi Groups (SRI)",
        quote:
          "They transformed our digital presence with a strong blend of design, technology, and strategy.",
      },
      {
        name: "Pavan Kumar",
        role: "CEO, Tackle Prime India Pvt. Ltd.",
        quote:
          "Outstanding execution in app development and digital marketing with measurable growth.",
      },
      {
        name: "Karthik",
        role: "CEO, Timely",
        quote:
          "Exceptional product development with a clear focus on performance and user experience.",
      },
      {
        name: "Vinod Kumar",
        role: "HOD IIT Idupulapaya",
        quote:
          "Enterprise-grade solutions delivered with speed and technical excellence.",
      },
      {
        name: "Dr. Kumaran",
        role: "HOD, Dhanalakshmi Srinivasan University",
        quote:
          "A technology-driven organization delivering modern software solutions.",
      },
      {
        name: "Mallikarjuna Nandhi",
        role: "IIT Ongole",
        quote:
          "Innovative digital platforms backed by strong engineering execution.",
      },
      {
        name: "Ramchandra Reddy",
        role: "Director, Shri Rama Reddy Samastan, Kurnool",
        quote:
          "A trusted partner for digital transformation and automation.",
      },
      {
        name: "Sujith",
        role: "Director, ModernMinds",
        quote:
          "Creative, scalable, and business-focused digital solutions.",
      },
    ],
    []
  );

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-1">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-14">
          <span className="inline-block bg-[#ff4500] w-8 sm:w-10 h-[3px] mb-2"></span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Trusted <span className="text-orange-500">Clients</span>
          </h2>

          <p className="text-gray-600 mt-2 text-xs sm:text-sm lg:text-base">
            Delivering Web, App & Digital Marketing Solutions
          </p>
        </div>

        {/* Infinite Moving Testimonials */}
        <div className="relative group overflow-hidden">
          <style>{`
            @keyframes scrollX {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .testimonial-loop {
              display: flex;
              width: max-content;
              animation: scrollX 50s linear infinite;
            }
            .group:hover .testimonial-loop {
              animation-play-state: paused;
            }
          `}</style>

          <div className="testimonial-loop">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="
                  w-[200px] sm:w-[260px] lg:w-[320px]
                  mx-2 sm:mx-4 lg:mx-6
                  border border-gray-200 rounded-xl
                  p-3 sm:p-5 lg:p-6
                  bg-transparent transition hover:-translate-y-1
                  flex-shrink-0
                "
              >
                <div className="text-orange-500 text-xl sm:text-3xl mb-2">
                  ❝
                </div>

                <p className="text-gray-700 text-[11px] sm:text-sm leading-relaxed mb-2 sm:mb-4">
                  {t.quote}
                </p>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold text-[11px] sm:text-sm">
                    {t.name.charAt(0)}
                  </div>

                  <div>
                    <h5 className="text-gray-900 font-semibold text-[11px] sm:text-sm">
                      {t.name}
                    </h5>
                    <p className="text-gray-500 text-[10px] sm:text-xs">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
