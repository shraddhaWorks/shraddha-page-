"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Roopa",
    role: "Lead Developer & Operations",
    image: "/team/rupa.png",
    linkedin: "#",
  },
  {
    name: "Sreedhar",
    role: "Marketing Head",
    image: "/team/sridhar.png",
    linkedin: "#",
  },
  {
    name: "Renuka",
    role: "Frontend & UI/UX",
    image: "/team/renu.jpg",
    linkedin: "#",
  },
  {
    name: "Poojitha",
    role: "UI/UX Designer",
    image: "/team/poojitha.jpg",
    linkedin: "#",
  },
  {
    name: "ABhi Ram",
    role: "Full Stack Developer",
    image: "/team/abhi.jpg",
    linkedin: "#",
  },
  {
    name: "Pravalika",
    role: "Frontend Developer",
    image: "/team/prava.jpg",
    linkedin: "#",
  },
  {
    name: "Supriya",
    role: "Frontend Developer",
    image: "/team/sup.jpg",
    linkedin: "#",
  },
    {
    name: "Dinesh",
    role: "FullStack Developer",
    image: "/team/dinesh.jpeg",
    linkedin: "#",
  },
  {
    name: "Jayasimha",
    role: "Frontend Developer",
    image: "/team/jaya.jpeg",
    linkedin: "#",
  },

  {
    name: "Shankar",
    role: "FullStack Developer",
    image: "/team/shankar.jpg",
    linkedin: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CEO Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center mb-16 sm:mb-20 lg:mb-24">
          
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-xs sm:max-w-sm lg:max-w-md">
              <Image
                src="/team/sujan.png"
                alt="Sai Sujan - CEO"
                width={500}
                height={600}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <p className="uppercase tracking-widest text-xs sm:text-sm text-orange-500 font-semibold">
              Meet Our Captain
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1f3a5f]">
              Sai Sujan
            </h2>

            <p className="mt-1 text-base sm:text-lg font-medium text-gray-600">
              CEO & Co-Founder, Shraddha
            </p>

            <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed">
              Sai Sujan is the driving force behind Shraddha’s vision to build
              scalable web applications, high-performance mobile apps, and
              result-oriented digital marketing solutions. With a strong focus on
              innovation, execution, and long-term partnerships, he leads the
              company with a product-first and client-centric mindset.
            </p>

            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              Under his leadership, Shraddha has helped startups and enterprises
              transform their digital presence and accelerate business growth
              through technology.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 mt-6 text-[#1f3a5f] font-medium hover:text-blue-600 transition text-sm sm:text-base"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Team Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1f3a5f]">
            Meet the People Behind
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1f3a5f] mt-2">
            the Platform
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 transition-all duration-300 hover:shadow-lg"
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="h-[450px] sm:h-[300px] lg:h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="mt-4 sm:mt-5 flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#1f3a5f]">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {member.role}
                  </p>
                </div>

                <a
                  href={member.linkedin}
                  className="text-[#1f3a5f] hover:text-blue-600 transition"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
