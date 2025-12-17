"use client";

import Link from "next/link";
import {
  CheckCircle,
  Search,
  MousePointerClick,
  Share2,
  Mail,
  FileText,
  BarChart2,
  LucideIcon,
} from "lucide-react";

// --- Types ---
interface Service {
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
}

// --- Data ---
const SERVICES_DATA: Service[] = [
  {
    title: "Search Engine Optimization",
    icon: Search,
    description:
      "Improve your website's visibility in search results with our data-driven SEO strategies.",
    features: [
      "On-page & technical SEO",
      "High-quality backlinks",
      "Improved search rankings",
    ],
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    icon: MousePointerClick,
    description:
      "Generate immediate traffic and leads with targeted PPC campaigns across platforms.",
    features: [
      "Google & Bing Ads",
      "Audience targeting",
      "Maximum ROI optimization",
    ],
  },
  {
    title: "Social Media Marketing",
    icon: Share2,
    description:
      "Build your brand and engage your audience with effective social media strategies.",
    features: [
      "Content creation",
      "Community management",
      "Paid social campaigns",
    ],
  },
  {
    title: "Email Marketing",
    icon: Mail,
    description:
      "Nurture leads and drive conversions with personalized email campaigns.",
    features: [
      "Automated workflows",
      "High conversion emails",
      "Audience segmentation",
    ],
  },
  {
    title: "Content Marketing",
    icon: FileText,
    description:
      "Attract and retain your audience with high-quality, relevant content.",
    features: [
      "Blogs & articles",
      "Infographics & videos",
      "Brand authority building",
    ],
  },
  {
    title: "Analytics & Reporting",
    icon: BarChart2,
    description:
      "Make data-driven decisions with detailed analytics and performance reports.",
    features: [
      "KPI tracking",
      "Monthly reports",
      "Actionable insights",
    ],
  },
];

// --- Card ---
const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white p-6 sm:p-8 border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">

      {/* spotlight hover */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#F54E02]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* icon */}
      <div className="relative mb-5 sm:mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#F54E02]/10">
        <Icon className="text-[#F54E02]" size={26} />
      </div>

      {/* title */}
      <h3 className="relative text-lg sm:text-xl font-semibold text-black mb-3">
        {service.title}
      </h3>

      {/* description */}
      <p className="relative text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* features */}
      <ul className="relative space-y-3 mb-8">
        {service.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start text-sm sm:text-base text-gray-800 transition-all duration-300 hover:translate-x-2"
          >
            <CheckCircle size={18} className="text-[#F54E02] mr-2 mt-1" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- Section ---
export default function DigitalMarketingServicesSection() {
  return (
    <section className="bg-gray-50 py-14 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-18">

        {/* header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-[#ff4500] w-12 h-[3px] mb-2"></span>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-3">
            Our Digital Marketing Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital strategies tailored to your business goals
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 sm:mt-20">
          <Link
            href="/contact"
            className="inline-block w-full sm:w-auto px-10 py-4 rounded-lg font-semibold text-base sm:text-lg bg-[#F54E02] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Start Your Digital Growth
          </Link>
        </div>

      </div>
    </section>
  );
}
