"use client";

import React, { useState, useEffect } from "react";
import { MoveRight, CheckCircle2, Zap, Sparkles } from "lucide-react";

export default function Banner({ onGetStarted }: { onGetStarted: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger when user scrolls down slightly
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen pt-30 lg:pt-38 pb-20 overflow-hidden bg-white dark:bg-[#0B1120] transition-colors duration-300 z-10">

      {/* 1. GRID BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-[0.08] dark:opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#F54E02 1px, transparent 1px), linear-gradient(90deg, #F54E02 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* 2. AMBIENT GLOWS */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#F54E02]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#F54E02]/5 blur-[100px] rounded-full" />

      {/* FIXED FLOATING THEME BARS 
          Using 'absolute' instead of 'fixed' keeps them locked inside this section.
          'hidden lg:flex' ensures they don't show on mobile as requested.
      */}
      <div
        className={`absolute bottom-30 right-0 z-20 hidden lg:flex transition-all duration-1000 ease-out transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
      >
        <div className="w-16 h-64 bg-[#F54E02]" />
        <div className="w-10 h-64 bg-[#F54E02]/80" />
        <div className="w-6 h-64 bg-[#F54E02]/50" />
        <div className="w-3 h-64 bg-[#F54E02]/30" />
        <div className="w-1.5 h-64 bg-[#F54E02]/10" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 mb-4 lg:mb-6">
              <Sparkles size={14} className="text-[#F54E02]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#F54E02]">
                Code. Create. Conquer.
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-slate-900 dark:text-white mb-4 lg:mb-6">
              Building Digital <br className="hidden lg:block" /> Excellence with <br />
              <span className="text-[#F54E02]">Innovation</span>
            </h1>

            <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 mb-6 lg:mb-10 max-w-xl leading-relaxed">
              Empowering businesses with cutting-edge technology solutions.
              We deliver scalable, secure, and high-performance digital products
              that drive measurable results.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onGetStarted}
                className="group flex items-center gap-2 px-8 lg:px-12 py-3 lg:py-4 border border-[#F54E02] text-[#F54E02] dark:text-white dark:border-[#F54E02] rounded-xl font-bold shadow-lg shadow-orange-500/30 transition-all hover:scale-105 active:scale-95"
              >
                Get Started
                <MoveRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: FLOATING CARDS */}
          <div className="w-full lg:w-1/2 relative h-[300px] lg:h-[400px] flex items-center justify-center -mt-10 lg:-mt-35">
            <div className="absolute w-1/2 h-[2px] bg-slate-200 dark:bg-slate-800 hidden md:block" />

            <div className="absolute top-1/4 left-0 md:left-10 z-20 animate-bounce-slow">
              <div className="flex items-center gap-4 p-4 lg:p-5 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-100 dark:border-slate-800 min-w-[200px] lg:min-w-[240px]">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#F54E02] flex items-center justify-center text-white shadow-lg shadow-orange-500/40">
                  <CheckCircle2 size={20} className="lg:w-6 lg:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm lg:text-base text-slate-900 dark:text-white">Quality Assured</h4>
                  <p className="text-[10px] lg:text-xs text-slate-500">Premium Solutions</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-1/5 right-0 md:right-10 lg:pt-0 lg:mt-0 z-20 animate-bounce-slow delay-700">
              <div className="flex items-center gap-4 p-4 lg:p-5 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-100 dark:border-slate-800 min-w-[200px] lg:min-w-[240px]">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-orange-400 flex items-center justify-center text-white shadow-lg shadow-orange-400/40">
                  <Zap size={20} className="lg:w-6 lg:h-6" fill="white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm lg:text-base text-slate-900 dark:text-white">Fast Delivery</h4>
                  <p className="text-[10px] lg:text-xs text-slate-500">On-time Results</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. STATISTICS SECTION  transform ${isVisible
              ? "translate-y-0 opacity-100 delay-300 lg:delay-500"
              : "translate-y-10 opacity-0 delay-0"
            }*/}
        <div
          className={`mt-0 lg:mt-10 pt-0 lg:pt-12 lg:pb-12 border-slate-100 dark:border-slate-800/50 flex flex-wrap gap-8 lg:gap-24 relative z-10 transition-all duration-1000 `}
        >
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">5+</h3>
            <p className="text-[10px] lg:text-sm text-slate-500 mt-1 uppercase tracking-widest font-medium">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">50+</h3>
            <p className="text-[10px] lg:text-sm text-slate-500 mt-1 uppercase tracking-widest font-medium">Workshops</p>
          </div>
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">100+</h3>
            <p className="text-[10px] lg:text-sm text-slate-500 mt-1 uppercase tracking-widest font-medium">Projects</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @media (min-width: 1024px) {
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
      
    </section>
  );
}