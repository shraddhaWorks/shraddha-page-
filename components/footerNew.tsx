"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Clock
} from "lucide-react";

const BRAND_COLOR = "#F54E02";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden transition-colors duration-300 
      bg-white text-slate-900 
      dark:bg-[#0B1120] dark:text-white border-t border-slate-100 dark:border-slate-800"
    >
      {/* 1. GRID BACKGROUND - Using your requested style */}
      <div
        className="absolute inset-0 z-0 opacity-[0.06] dark:opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${BRAND_COLOR} 1px, transparent 1px), 
                            linear-gradient(90deg, ${BRAND_COLOR} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* 2. AMBIENT GLOW (Subtle version for Footer) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#F54E02]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 z-10">

        {/* ===== TOP GRID ===== */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* 1. Brand & Description */}
          <div className="space-y-6">
            {/* LOGO: No filters added so it keeps its original colors in both themes */}
            {/* Light Logo */}
            <img
              src="/shraddha-Logo-black.svg"
              alt="Shraddha Logo"
              className="h-9 w-auto dark:hidden"
            />

            {/* Dark Logo */}
            <img
              src="/shraddha-logo-navbar.svg"
              alt="Shraddha Logo"
              className="h-9 w-auto hidden dark:block"
            />
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              India's premier <span className="text-slate-900 dark:text-white font-medium">software solutions company</span> delivering innovative, scalable, and secure digital products.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <Link key={idx} href="#" className="w-10 h-10 rounded-full flex items-center justify-center border transition-all group
                  bg-white border-slate-200 hover:border-[#F54E02] hover:bg-[#F54E02]
                  dark:bg-slate-900 dark:border-slate-700 dark:hover:border-[#F54E02] dark:hover:bg-[#F54E02]">
                  <Icon size={18} className="text-slate-500 group-hover:text-white dark:text-slate-400" />
                </Link>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#F54E02]">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/aboutt">About Us</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* 3. Services */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#F54E02]">
              Our Services
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/web">Web Development</FooterLink>
              <FooterLink href="/appDevelop">App Development</FooterLink>
              <FooterLink href="/digital">Digital Marketing</FooterLink>
              <FooterLink href="#">Bootcamps</FooterLink>
            </ul>
          </div>

          {/* 4. Contact Us */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#F54E02]">
              Contact Us
            </h4>
            <div className="space-y-5">
              <ContactItem icon={MapPin} text="Ratan Tata Innovation Hub, JNTUA, Anantapur, AP – 515002" />
              <ContactItem icon={Phone} text="+91 9494777697" href="tel:+919494777697" />
              <ContactItem icon={Mail} text="info@shraddha.org.in" href="mailto:info@shraddha.org.in" />
              <ContactItem icon={Clock} text="Mon – Sat: 9:00 AM – 7:00 PM" />
            </div>
          </div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="mt-12 pt-2  border-slate-200 dark:border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">
            © 2026 <span className="text-slate-900 dark:text-white font-semibold">Shraddha</span>. All rights reserved.
          </p>

          <div className="flex space-x-8 text-sm text-slate-500">
            <Link href="/#" className="hover:text-[#F54E02] transition-colors">Privacy Policy</Link>
            <Link href="/#" className="hover:text-[#F54E02] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ===== Sub-Components ===== */

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-slate-600 dark:text-slate-400 hover:text-[#F54E02] dark:hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
        {children}
      </Link>
    </li>
  );
}

function ContactItem({ icon: Icon, text, href }: { icon: any, text: string, href?: string }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300
        bg-[#F54E02]/10 border border-[#F54E02]/20 group-hover:bg-[#F54E02]">
        <Icon size={16} className="text-[#F54E02] group-hover:text-white" />
      </div>
      {href ? (
        <a href={href} className="text-sm pt-1.5 transition-colors text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
          {text}
        </a>
      ) : (
        <p className="text-sm pt-1.5 leading-tight text-slate-600 dark:text-slate-400">
          {text}
        </p>
      )}
    </div>
  );
}