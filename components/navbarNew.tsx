"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

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

  // const [darkMode, setDarkMode] = useState(true); ❌ not needed now
  const pathname = usePathname();

  // ✅ Force dark mode always
  useEffect(() => {
    document.documentElement.classList.add("dark");

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ❌ Toggle removed (kept as comment)
  /*
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  */

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 flex items-center h-20
        ${scrolled
            ? "bg-[#0B1120]/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
          }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-12">

          {/* LEFT: LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/shraddha-logo-navbar.svg"
              alt="Shraddha"
              className="h-8 w-auto"
            />
          </Link>

          {/* CENTER: DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-white hover:text-[#F54E02]">
              Home
            </Link>

            {NAV_LINKS.slice(1).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white hover:text-[#F54E02]"
              >
                {link.name}
              </Link>
            ))}

            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-white hover:text-[#F54E02]">
                Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 top-full pt-4 w-56 animate-in fade-in slide-in-from-top-2">
                  <div className="rounded-xl border border-slate-800 bg-[#0F172A] shadow-xl overflow-hidden">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-[#F54E02]"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center space-x-5">

            {/* ❌ Theme Toggle Removed */}
            {/*
            {pathname === "/" && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            */}

            <Link
              href="/contact"
              className="hidden md:block rounded-lg px-7 py-2.5 text-white text-sm font-bold transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              Contact Us
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-1 text-white"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-[70] h-full w-[75%] max-w-sm bg-[#0B1120] p-6 shadow-2xl transition-transform duration-300 md:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-10">
          <img src="/shraddha-logo-navbar.svg" alt="Logo" className="h-7" />
          <button onClick={() => setOpen(false)} className="text-slate-400">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col space-y-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-bold text-slate-200"
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-6 border-t border-slate-800">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Our Services</p>
            {SERVICES.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-slate-400 font-medium"
              >
                {service.name}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full py-4 text-center text-white font-bold"
            style={{ backgroundColor: BRAND_COLOR }}
          >
            Contact Us
          </Link>
        </div>
      </aside>
    </>
  );
}