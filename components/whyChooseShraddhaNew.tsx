"use client";

import React from 'react';
import {
  CheckCircle2,
  Target,
  BarChart3,
  Award,
  Zap,
  ShieldCheck,
  Users
} from 'lucide-react';

const WHY_CHOOSE = [
  {
    title: "Scalable Solutions",
    desc: "5+ years of delivering software that grows with your business.",
    icon: Zap,
  },
  {
    title: "Expert Partners",
    desc: "Trusted by colleges, startups & government institutions.",
    icon: ShieldCheck,
  },
  {
    title: "Full-Stack Expertise",
    desc: "From Web & Mobile to custom LMS and Digital Marketing.",
    icon: Target,
  },
  {
    title: "Client Support",
    desc: "Dedicated post-launch support with long-term partnerships.",
    icon: Users,
  },
];

const EXPERIENCE_HIGHLIGHTS = [
  { label: "50+", sub: "Workshops" },
  { label: "Multiple", sub: "MoUs Signed" },
  { label: "State-wide", sub: "AP Police Projects" },
];

export default function WhyChooseShraddha() {
  return (
    <section className="relative py-16 px-8 overflow-hidden bg-white dark:bg-[#0B1120] transition-colors duration-300">

      {/* 1. SECTION GRID BACKGROUND */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#F54E02 1px, transparent 1px), linear-gradient(90deg, #F54E02 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="container mx-auto relative z-10">

        {/* HEADER AREA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 mb-4">
              <Award size={14} className="text-[#F54E02]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F54E02]">
                Our Excellence
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Why Industry Leaders <br />
              <span className="text-[#F54E02]">Trust Shraddha Group</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            We don't just build software; we build the digital foundation for
            government agencies and educational giants.
          </p>
        </div>

        {/* BENTO BOX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Main Feature Cards */}
          {WHY_CHOOSE.map((item, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-md hover:border-[#F54E02] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F54E02]/10 dark:bg-[#F54E02]/20 flex items-center justify-center text-[#F54E02] mb-6 group-hover:scale-110 transition-transform">
                <item.icon size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

          {/* Large Experience Showcase Card */}
          <div className="md:col-span-2 lg:col-span-3 relative rounded-3xl overflow-hidden border border-slate-800 bg-[#0B1120] dark:bg-slate-900/80 p-8 lg:p-12">

            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#F54E02]/10 blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F54E02]/5 blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-8">
                  Proven Track Record with <br />
                  <span className="text-[#F54E02]">AP Police & Institutions</span>
                </h3>

                <div className="space-y-5">
                  {[
                    "Implemented high-security solutions for government departments",
                    "Signed strategic MoUs for long-term tech development",
                    "Empowered 50,000+ students through workshops"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 text-slate-300 text-sm md:text-base leading-relaxed">
                      <CheckCircle2 size={18} className="text-[#F54E02] mt-0.5" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 mb-8 h-px w-full bg-slate-800/80" />

              {/* 📊 BOTTOM STATS - Fixed Mobile Alignment */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 text-left">
                {EXPERIENCE_HIGHLIGHTS.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <h4 className="text-4xl font-extrabold text-[#F54E02]">
                      {stat.label}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-400 mt-1 uppercase tracking-wide">
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Smaller CTA/Highlight Card - Fixed Desktop Spacing */}
          <div className="md:col-span-2 lg:col-span-1 p-8 rounded-3xl bg-[#F54E02] text-white flex flex-col justify-between group relative overflow-hidden min-h-[400px]">
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 blur-3xl rounded-full" />

            <BarChart3
              size={40}
              className="opacity-60 group-hover:rotate-12 transition-transform duration-300 mb-4 lg:mb-0" 
            />

            <div>
              <h4 className="text-2xl font-bold leading-tight mb-3">
                Data-Driven Growth.
              </h4>

              <p className="text-white/80 text-sm leading-relaxed mb-6">
                We don’t guess — we track, analyze, and optimize every step to ensure
                your business scales with real, measurable results.
              </p>

              <div className="space-y-3 text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} />
                  Performance-focused strategies
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} />
                  Real-time analytics & insights
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} />
                  ROI-first execution approach
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} />
                  Conversion rate optimization
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} />
                  Competitor market analysis
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} />
                  Audience behavior tracking
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}