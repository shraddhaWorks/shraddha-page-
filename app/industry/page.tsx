"use client";

import HeroSection from "@/components/HeroSection";
import ContactPage from "@/components/miniContact";
import MovingTestimonials from "@/components/testmonial";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import {
    GraduationCap,
    Building2,
    HeartPulse,
    Leaf,
    Rocket,
    Briefcase,
    ShoppingCart,
    Factory,
    Home,
    Users,
    Megaphone,
    Truck,
} from "lucide-react";

const industries = [
    {
        title: "Education & EdTech",
        icon: GraduationCap,
        points: [
            "School & College Management Systems",
            "Learning Management Platforms",
            "Online Examination & Analytics",
        ],
    },
    {
        title: "Government & Public Sector",
        icon: Building2,
        points: [
            "E-Governance Applications",
            "Police & Administration Systems",
            "Citizen Service Portals",
        ],
    },
    {
        title: "Healthcare & Hospitals",
        icon: HeartPulse,
        points: [
            "Hospital Management Systems",
            "Patient Records & Reports",
            "Telemedicine Platforms",
        ],
    },
    {
        title: "Agriculture & Organic Farming",
        icon: Leaf,
        points: [
            "Farm Management Solutions",
            "Supply Chain Tracking",
            "Organic Market Platforms",
        ],
    },
    {
        title: "Startups & Emerging Businesses",
        icon: Rocket,
        points: [
            "MVP Development",
            "Scalable Web & App Solutions",
            "Growth & Automation Tools",
        ],
    },
    {
        title: "Corporate & Enterprises",
        icon: Briefcase,
        points: [
            "Enterprise Applications",
            "Internal Tools & Dashboards",
            "Process Automation",
        ],
    },
    {
        title: "Retail & E-Commerce",
        icon: ShoppingCart,
        points: [
            "E-Commerce Platforms",
            "Inventory & Order Systems",
            "Customer Analytics",
        ],
    },
    {
        title: "Manufacturing & MSMEs",
        icon: Factory,
        points: [
            "Production Management",
            "Inventory Optimization",
            "ERP Integrations",
        ],
    },
    {
        title: "Real Estate & Infrastructure",
        icon: Home,
        points: [
            "Property Management Systems",
            "CRM for Builders",
            "Project Tracking",
        ],
    },
    {
        title: "NGOs & Social Impact",
        icon: Users,
        points: [
            "Donation Platforms",
            "Volunteer Management",
            "Impact Reporting",
        ],
    },
    {
        title: "Media, Marketing & Advertising",
        icon: Megaphone,
        points: [
            "Campaign Management Tools",
            "Analytics Dashboards",
            "Content Platforms",
        ],
    },
    {
        title: "Logistics & Transportation",
        icon: Truck,
        points: [
            "Fleet Management",
            "Live Tracking Systems",
            "Logistics Optimization",
        ],
    },
];

export default function IndustriesSection() {
    return (
        <div>
            <div>
                <HeroSection
                    tag="INDUSTRIES WE SERVE"
                    title="Technology Solutions Across Diverse Industries"
                    description="We partner with organizations across education, government, healthcare, startups, enterprises, and social sectors to deliver scalable web, mobile, and digital solutions tailored to industry-specific needs."
                    primaryBtnText="Explore Our Expertise"
                    primaryBtnLink="#industries"
                    imageSrc="/industries-hero.jpeg"
                />
            </div>
            <div>
                <section className="bg-white py-24">

                    <div className="px-17 mx-auto">


                        {/* Heading */}
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-semibold text-black">
                                Industries We Serve
                            </h2>
                            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                                We build scalable software, web, mobile, and digital solutions
                                tailored for diverse industries.
                            </p>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {industries.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                    viewport={{ once: true }}
                                    className="group relative overflow-hidden rounded-2xl border border-gray-200 p-8 transition-all duration-500 hover:border-[#f54e02]"
                                >
                                    {/* Hover background */}
                                    <div className="absolute inset-0 bg-[#f54e02] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#f54e02]/10 group-hover:bg-white transition mb-6">
                                            <item.icon className="text-[#f54e02] group-hover:text-[#f54e02]" size={28} />
                                        </div>

                                        <h3 className="text-xl font-semibold text-black group-hover:text-white transition">
                                            {item.title}
                                        </h3>

                                        {/* Bullet Points (always visible) */}
                                        <ul className="mt-6 space-y-2">
                                            {item.points.map((p, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-gray-600 group-hover:text-white text-sm flex items-center gap-2 transition-colors duration-300"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#f54e02] group-hover:bg-white transition" />
                                                    {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <MovingTestimonials />
                <ContactPage
  title="Explore the Industries We Serve"
  description="We provide tailored web, mobile, and digital solutions for a wide range of industries, helping organizations innovate and grow with technology."
  buttonText="See Our Expertise"
  buttonLink="/contact"
/>

            </div>
        </div>

    );
}
