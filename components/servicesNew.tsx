"use client";
import Link from 'next/link';
import React from 'react';
import { CheckCircle, Code, Smartphone, BarChart3, Cloud, Layout, ShieldCheck, LucideIcon, ArrowRight } from 'lucide-react';

// --- Configuration ---
const BRAND_COLOR: string = '#F54E02';

interface Service {
    title: string;
    href: string;
    icon: LucideIcon;
    description: string;
    features: string[];
    image: string;
}

const SERVICES_DATA: Service[] = [
    { title: "Web Development", href: "/web", icon: Code, description: "Custom, responsive, and user-friendly websites designed to showcase your brand and drive conversions.", features: ["Responsive Design", "E-commerce Solutions", "CMS Integration", "SEO Optimization"], image: "/webdev.jpg" },
    { title: "App Development", href: "/appDevelop", icon: Smartphone, description: "Native and cross-platform mobile applications that engage users and enhance your business operations.", features: ["iOS & Android Apps", "Cross-Platform Solutions", "UI/UX Design", "App Store Optimization"], image: "/appService-top-right.jpg" },
    { title: "Digital Marketing", href: "/digital", icon: BarChart3, description: "Strategic digital marketing campaigns designed to increase brand awareness and drive targeted traffic.", features: ["SEO & Content Strategy", "Social Media Marketing", "PPC Advertising", "Analytics & Reporting"], image: "/digital-process-right.jpg" },
    { title: "Cloud Solutions", href: "#", icon: Cloud, description: "Scalable cloud infrastructure and services to optimize your business operations and reduce costs.", features: ["Cloud Migration", "AWS, Azure & Google Cloud", "DevOps Solutions", "Managed Cloud Services"], image: "/cloud.jpg" },
    { title: "UI/UX Design", href: "#", icon: Layout, description: "User-centered design services that create intuitive, engaging digital experiences for your customers.", features: ["User Research", "Wireframing & Prototyping", "Usability Testing", "Design Systems"], image: "/uiuxnew.png" },
    { title: "Cybersecurity", href: "#", icon: ShieldCheck, description: "Comprehensive security services to protect your digital assets and ensure business continuity.", features: ["Security Assessments", "Penetration Testing", "Security Monitoring", "Incident Response"], image: "/cyber.png" }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const Icon = service.icon;

    return (
        <div className="group relative flex flex-col h-[400px] md:h-[450px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 bg-slate-200 dark:bg-black shadow-xl active:scale-[0.98]">
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
            />
            <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-100" />

            <div className="relative z-10 flex flex-col h-full p-6 md:p-8 justify-end">
                <div className="absolute top-6 left-6 md:top-8 md:left-8 p-2.5 md:p-3 rounded-xl bg-[#F54E02] text-white shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
                    <Icon size={20} className="md:w-6 md:h-6" />
                </div>

                <div className="flex flex-col transition-all duration-500">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 transition-colors duration-300 group-hover:text-[#F54E02]">
                        {service.title}
                    </h3>

                    <div className="max-h-0 opacity-0 transform -translate-x-10 transition-all duration-700 ease-in-out 
                          group-hover:max-h-[350px] group-hover:opacity-100 group-hover:translate-x-0
                          group-active:max-h-[350px] group-active:opacity-100 group-active:translate-x-0">
                        <p className="text-gray-200 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
                            {service.description}
                        </p>

                        <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                            {service.features.map((feature, index) => (
                                <li key={index} className="flex items-center text-white text-[13px] md:text-sm">
                                    <CheckCircle size={14} className="mr-2 text-[#F54E02] flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Link href={service.href} className="inline-flex items-center gap-2 text-[#F54E02] font-bold text-xs md:text-sm uppercase tracking-wider">
                            Learn More
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F54E02] transition-all duration-500 group-hover:w-full" />
        </div>
    );
};

export default function BusinessServicesSection() {
    return (
        <>
            <section
                className="relative z-20 -mt-10 md:-mt-16 py-12 md:py-20 lg:py-20 bg-white dark:bg-[#0B1120] transition-colors duration-500"

            >
                <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-12 md:mb-20">
                        <div className="inline-block w-12 h-1 bg-[#F54E02] mb-4"></div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                            Business Services
                        </h2>
                        <p className="text-slate-500 dark:text-gray-400 text-sm md:text-lg max-w-2xl mx-auto px-4">
                            Professional technology solutions designed to scale your operations and drive measurable business growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {SERVICES_DATA.map((service, index) => (
                            <ServiceCard key={index} service={service} />
                        ))}
                    </div>

                    <div className="text-center mt-12 md:mt-20">
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center gap-3 px-6 md:px-10 py-3.5 md:py-4 border border-[#F54E02] text-[#F54E02] dark:text-white dark:border-[#F54E02] rounded-xl font-bold text-base md:text-lg transition-all duration-300 hover:bg-[#F54E02] hover:text-white"
                        >
                            Request a Free Consultation
                            <ArrowRight className="transition-transform group-hover:translate-x-1 w-5 h-5 md:w-6 md:h-6" />
                        </Link>
                    </div>
                </div>
            </section>
            {/* GRID CONTINUATION (FADED) */}
            <div
                className="absolute inset-0 z-0 opacity-[0.06] dark:opacity-[0.08] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#F54E02 1px, transparent 1px), linear-gradient(90deg, #F54E02 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, black 0%, transparent 300px)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 300px)'
                }}
            />
        </>
    );
}