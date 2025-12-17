"use client";

import Link from "next/link";
import {
  CheckCircle,
  Smartphone,
  Layers,
  PenTool,
  Server,
  Wrench,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

/* ---------- Types ---------- */
interface Service {
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
}

/* ---------- Data ---------- */
const SERVICES_DATA: Service[] = [
  {
    title: "Native App Development",
    icon: Smartphone,
    description:
      "High-performance native applications for iOS and Android platforms with platform-specific features and optimal user experience.",
    features: [
      "iOS & Android native apps",
      "High performance & smooth UX",
      "Platform-specific capabilities",
    ],
  },
  {
    title: "Cross-Platform Development",
    icon: Layers,
    description:
      "Cost-effective cross-platform solutions using React Native and Flutter that maintain native-like performance and feel.",
    features: [
      "React Native & Flutter",
      "Single codebase",
      "Native-like performance",
    ],
  },
  {
    title: "UI/UX Design",
    icon: PenTool,
    description:
      "Intuitive, engaging user interfaces with seamless user experiences that keep your audience coming back.",
    features: [
      "User-centered design",
      "Wireframing & prototyping",
      "Smooth user journeys",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    description:
      "Robust, scalable backend solutions and APIs that power your mobile applications with reliable performance.",
    features: [
      "Scalable APIs",
      "Secure architecture",
      "High availability systems",
    ],
  },
  {
    title: "App Maintenance & Support",
    icon: Wrench,
    description:
      "Continuous updates, bug fixes, and performance optimizations to keep your app running smoothly.",
    features: [
      "Regular updates",
      "Bug fixing",
      "Performance monitoring",
    ],
  },
  {
    title: "App Store Optimization",
    icon: TrendingUp,
    description:
      "Strategic optimization to improve visibility and increase downloads in the App Store and Google Play.",
    features: [
      "Keyword optimization",
      "Higher app visibility",
      "Improved download rates",
    ],
  },
];

/* ---------- Card ---------- */
const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;

  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 sm:p-7 lg:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Animated lines */}
      <span className="pointer-events-none absolute inset-0">
        <span className="absolute top-0 left-0 h-[2px] w-full bg-[#F54E02] -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        <span className="absolute right-0 top-0 w-[2px] h-full bg-[#F54E02] -translate-y-full group-hover:translate-y-full transition-transform duration-700 delay-100" />
        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#F54E02] translate-x-full group-hover:-translate-x-full transition-transform duration-700 delay-200" />
        <span className="absolute left-0 top-0 w-[2px] h-full bg-[#F54E02] translate-y-full group-hover:-translate-y-full transition-transform duration-700 delay-300" />
      </span>

      {/* Icon & Title */}
      <div className="relative flex items-center mb-4 sm:mb-5">
        <Icon size={26} className="text-[#F54E02] mr-3 sm:size-[30]" />
        <h3 className="text-lg sm:text-xl font-semibold text-black">
          {service.title}
        </h3>
      </div>

      {/* Description */}
      <p className="relative text-gray-600 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
        {service.description}
      </p>

      {/* Features */}
      <ul className="relative space-y-3 mb-4 sm:mb-6">
        {service.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start text-gray-800 transition-all duration-300 hover:translate-x-2 text-sm sm:text-base"
          >
            <CheckCircle size={18} className="text-[#F54E02] mr-2 mt-1" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

/* ---------- Main Section ---------- */
export default function AppDevelopmentServicesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-18">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-[#ff4500] w-10 sm:w-12 h-[3px] mb-2"></span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3">
            App Development Services
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            End-to-end mobile application development tailored to your business needs
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 sm:mt-18 lg:mt-20">
          <Link
            href="/contact"
            className="inline-block px-7 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg bg-[#F54E02] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Request a Free Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}
