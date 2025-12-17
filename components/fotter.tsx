import Link from "next/link";

const BRAND_COLOR = "#D94500";
const BG_COLOR = "#000000";

export default function Footer() {
  return (
    <footer className="w-full text-white" style={{ backgroundColor: BG_COLOR }}>
      <div className="mx-auto max-w-11xl px-4 sm:px-6 py-8 sm:py-10 md:px-10 lg:px-18">

        {/* ===== TOP GRID ===== */}
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <img
              src="/shraddha-logo-navbar.svg"
              alt="Shraddha Logo"
              className="mb-4 h-8 sm:h-9"
            />

            <p className="text-sm sm:text-base leading-relaxed text-gray-400">
              India&apos;s premier{" "}
              <span className="font-semibold text-white">
                Software Solutions company
              </span>{" "}
              delivering innovative, scalable, and secure digital solutions.
              We help businesses grow with{" "}
              <span className="font-semibold text-white">
                cutting-edge technology and expert development services
              </span>
              .
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="mb-3 sm:mb-4 text-sm sm:text-base font-bold uppercase tracking-wide"
              style={{ color: BRAND_COLOR }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/aboutt">About Us</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="mb-3 sm:mb-4 text-sm sm:text-base font-bold uppercase tracking-wide"
              style={{ color: BRAND_COLOR }}
            >
              Our Services
            </h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <FooterLink href="/webs">Web Development</FooterLink>
              <FooterLink href="/appDevelop">App Development</FooterLink>
              <FooterLink href="/digital">Digital Marketing</FooterLink>
              <FooterLink href="/bootcamp">Bootcamps</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-3 sm:mb-4 text-sm sm:text-base font-bold uppercase tracking-wide"
              style={{ color: BRAND_COLOR }}
            >
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              <li className="leading-relaxed">
                Ratan Tata Innovation Hub, JNTUA,
                Anantapur, Andhra Pradesh – 515002
              </li>

              <li className="font-medium text-white">
                <a href="tel:+919494777697">+91 9494777697</a>
              </li>
              <li className="font-medium text-white">
                <a href="mailto:info@shraddha.org.in">
                  info@shraddha.org.in
                </a>
              </li>
              <li>Mon – Sat: 9:00 AM – 7:00 PM</li>
            </ul>
          </div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="mt-6 sm:mt-8 pt-4 border-t border-gray-800 flex justify-center sm:justify-end">
          <div className="text-xs sm:text-sm md:text-base text-gray-400 text-center sm:text-right space-y-2 sm:space-y-1">
            <p>
              © 2025{" "}
              <span className="font-semibold text-white">Shraddha</span>. All
              rights reserved.
            </p>

            <div className="flex justify-center sm:justify-end space-x-6">
              <Link
                href="/privacy-policy"
                className="font-medium hover:text-white transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="font-medium hover:text-white transition"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

/* ===== Footer Link Component ===== */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="font-medium text-gray-400 hover:text-white transition"
      >
        {children}
      </Link>
    </li>
  );
}
