"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const BRAND_COLOR = "#F54E02";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/aboutt" },
  { name: "Industries", href: "/industry" },
  { name: "Team", href: "/team" },
];

const SERVICES = [
  { name: "Custom App Development", href: "/appDevelop" },
  { name: "Web Development", href: "/web" },
  { name: "Digital Marketing", href: "/digital" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300
        ${scrolled ? "bg-black shadow-md" : "bg-transparent"}`}
      >
        <div className="mx-auto flex h-16 max-w-8xl items-center px-5 lg:px-16">
          {/* LOGO (DESKTOP ONLY) */}
          <Link href="/" className="hidden md:block">
            <img
              src="/shraddha-logo-navbar.svg"
              alt="Shraddha"
              className="h-8"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="ml-auto hidden md:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white transition hover:text-[#F54E02]"
              >
                {link.name}
              </Link>
            ))}

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className="text-white transition hover:text-[#F54E02]"
              >
                Services
              </Link>

              {servicesOpen && (
                <div className="absolute left-0 top-full mt-2 w-60 rounded-lg bg-black shadow-xl overflow-hidden">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-white hover:bg-[#F54E02]"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="rounded px-5 py-2 text-white text-sm"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              Contact
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="ml-auto md:hidden"
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
            </div>
          </button>
        </div>
      </nav>

      {/* ================= OVERLAY ================= */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ================= MOBILE DRAWER ================= */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[58%] max-w-xs
        transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ backgroundColor: BRAND_COLOR }}
      >
        {/* CLOSE BUTTON ONLY */}
        <div className="flex justify-end px-5 py-5">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-xl"
          >
            ✕
          </button>
        </div>

        {/* MENU */}
        <div className="px-6 space-y-6 text-white">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-base tracking-wide transition hover:translate-x-1 hover:opacity-90"
            >
              {link.name}
            </Link>
          ))}

          {/* SERVICES */}
          <div className="pt-4 border-t border-white/30">
            <p className="mb-3 text-xs uppercase tracking-widest opacity-80">
              Services
            </p>
            <div className="space-y-3">
              {SERVICES.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm transition hover:translate-x-1 hover:opacity-90"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block mt-8 rounded-md bg-black/90 py-2.5 text-center text-sm font-semibold transition hover:bg-black"
          >
            Contact Us
          </Link>
        </div>
      </aside>
    </>
  );
}
