"use client";
import Link from 'next/link';
import { MouseEventHandler, CSSProperties } from 'react';
import { CheckCircle, Code, Smartphone, BarChart3, Cloud, Layout, ShieldCheck, LucideIcon } from 'lucide-react';

// --- Configuration ---
const BG_DARK: string = '#212529';
const BRAND_COLOR: string = '#F54E02';

// --- Type Definition ---
interface Service {
  title: string;
  href: string;
  icon: LucideIcon;
  description: string;
  features: string[];
}

// --- Data ---
const SERVICES_DATA: Service[] = [
  { title: "Web Development", href: "/webservices", icon: Code, description: "Custom, responsive, and user-friendly websites designed to showcase your brand and drive conversions.", features: ["Responsive Design", "E-commerce Solutions", "CMS Integration", "SEO Optimization"] },
  { title: "App Development", href: "/appdevelopment", icon: Smartphone, description: "Native and cross-platform mobile applications that engage users and enhance your business operations.", features: ["iOS & Android Apps", "Cross-Platform Solutions", "UI/UX Design", "App Store Optimization"] },
  { title: "Digital Marketing", href: "/digitalmarketing", icon: BarChart3, description: "Strategic digital marketing campaigns designed to increase brand awareness and drive targeted traffic.", features: ["SEO & Content Strategy", "Social Media Marketing", "PPC Advertising", "Analytics & Reporting"] },
  { title: "Cloud Solutions", href: "#", icon: Cloud, description: "Scalable cloud infrastructure and services to optimize your business operations and reduce costs.", features: ["Cloud Migration", "AWS, Azure & Google Cloud", "DevOps Solutions", "Managed Cloud Services"] },
  { title: "UI/UX Design", href: "#", icon: Layout, description: "User-centered design services that create intuitive, engaging digital experiences for your customers.", features: ["User Research", "Wireframing & Prototyping", "Usability Testing", "Design Systems"] },
  { title: "Cybersecurity", href: "#", icon: ShieldCheck, description: "Comprehensive security services to protect your digital assets and ensure business continuity.", features: ["Security Assessments", "Penetration Testing", "Security Monitoring", "Incident Response"] }
];

// --- CTA Button ---
const CtaButtonStyle: CSSProperties = { backgroundColor: BRAND_COLOR, color: 'white' };
const handleCtaButtonHover: MouseEventHandler<HTMLAnchorElement> = (e) => { e.currentTarget.style.backgroundColor = '#FF7530'; };
const handleCtaButtonLeave: MouseEventHandler<HTMLAnchorElement> = (e) => { e.currentTarget.style.backgroundColor = BRAND_COLOR; };

// --- Service Card Component ---
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const Icon = service.icon;

  return (
    <div
      className="
        relative flex flex-col px-6 sm:px-10 lg:px-18 py-6 sm:py-8 rounded-lg shadow-xl 
        bg-[#1c1f21] transition-all duration-300 overflow-hidden
        border border-[#1c1f21] 
        hover:border-[#F54E02]
        hover:shadow-[0_0_25px_rgba(245,78,2,0.4)]
        hover:-translate-y-2
      "
      id='services'
    >
      {/* Inner Card */}
      <div className="relative z-10 flex flex-col h-full">
        
        {/* Icon + Title */}
        <div className="flex items-center mb-4 sm:mb-6">
          <Icon size={24} style={{ color: BRAND_COLOR }} className="mr-3" />
          <h3 className="text-lg sm:text-xl font-semibold" style={{ color: BRAND_COLOR }}>
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed flex-grow">
          {service.description}
        </p>

        {/* Features */}
        <ul className="list-none p-0 mb-6 space-y-3">
          {service.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start text-white text-sm sm:text-base transition-colors duration-300 hover:text-orange-500"
            >
              <CheckCircle
                size={16}
                className="mt-1 mr-2 flex-shrink-0"
                style={{ color: BRAND_COLOR }}
              />
              {feature}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

// --- Main Section ---
export default function BusinessServicesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: BG_DARK }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-2">
            Business Services
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Professional technology solutions to help your business grow
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-14 lg:mt-16">
          <Link
            href="#"
            className="inline-block px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            style={CtaButtonStyle}
            onMouseEnter={handleCtaButtonHover}
            onMouseLeave={handleCtaButtonLeave}
          >
            Request a Free Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}
