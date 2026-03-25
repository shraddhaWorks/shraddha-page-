"use client";

import { Mail, Phone, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
export default function ContactCTA({ onGetStarted }: { onGetStarted: () => void }) {
  const router = useRouter();
  return (
    <section className="relative bg-[#0B1120] py-20 lg:py-16 overflow-hidden">
      {/* Background Grid Pattern - Matching your reference */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(#F54E02 0.5px, transparent 0.5px), radial-gradient(#F54E02 0.5px, #0B1120 0.5px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      ></div>

      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#F54E02] rounded-full blur-[160px] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Top Badge */}
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-md">
          <span className="text-slate-300 text-sm font-medium tracking-wide">
            Let's Build Something Amazing
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Ready to <span className="text-[#F54E02]">Transform</span> <br className="hidden md:block" /> Your Business?
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-12 leading-relaxed">
          Partner with India's premier software solutions company. We deliver innovative,
          scalable, and secure digital solutions with cutting-edge technology.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onGetStarted}
            className="group flex items-center gap-2 border border-[#F54E02] hover:bg-[#d44302] text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-[#F54E02]/20"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => router.push("/contact")}
            className="px-8 py-4 rounded-lg border border-slate-700 text-white font-bold hover:bg-slate-800 transition-colors backdrop-blur-sm"
          >
            Schedule a Consultation
          </button>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Call Us Card */}
          <div className="flex items-center gap-5 p-6 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl group hover:border-[#F54E02]/50 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-[#F54E02] flex items-center justify-center shadow-lg shadow-[#F54E02]/20 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Call Us</p>
              <a href="tel:+919494777697" className="text-white text-xl font-bold hover:text-[#F54E02] transition-colors">
                +91 9494777697
              </a>
            </div>
          </div>

          {/* Email Us Card */}
          <div className="flex items-center gap-5 p-6 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl group hover:border-[#F54E02]/50 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-[#F54E02] flex items-center justify-center shadow-lg shadow-[#a855f7]/20 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Email Us</p>
              <a href="mailto:info@shraddha.org.in" className="text-white text-xl font-bold hover:text-[#F54E02] transition-colors">
                info@shraddha.org.in
              </a>
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <p className="mt-12 text-slate-500 text-sm font-medium">
          Mon — Sat: 9:00 AM — 7:00 PM
        </p>
      </div>
    </section>
  );
}