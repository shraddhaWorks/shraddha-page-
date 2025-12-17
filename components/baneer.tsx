"use client";

import Image from "next/image";

export default function Banner() {
    return (
        <section className="relative overflow-hidden min-h-screen bg-black py-16 sm:py-20 lg:py-25">
            <div className="container mx-auto px-4 sm:px-6 lg:px-18">

                {/* BG Left */}
                <div className="hidden md:block absolute top-0 left-0 z-[1]">
                    <Image
                        src="/banner-left-bg.svg"
                        alt=""
                        width={300}
                        height={300}
                        className="opacity-75 pointer-events-none select-none"
                    />
                </div>

                {/* BG Right */}
                <div className="hidden md:block absolute bottom-0 right-0 z-[1]">
                    <Image
                        src="/banner-right-bg.svg"
                        alt=""
                        width={1100}
                        height={300}
                        className="opacity-75 pointer-events-none select-none"
                    />
                </div>

                {/* Mobile BG */}
                <div className="md:hidden absolute top-0 left-0 z-[1]">
                    <Image
                        src="/Mobile/banner-mb-left-bg.svg"
                        alt=""
                        width={160}
                        height={160}
                        className="opacity-75 pointer-events-none select-none"
                    />
                </div>

                <div className="md:hidden absolute bottom-0 right-0 z-[1]">
                    <Image
                        src="/Mobile/banner-mb-right-bg.svg"
                        alt=""
                        width={160}
                        height={160}
                        className="opacity-75 pointer-events-none select-none"
                    />
                </div>

                {/* CONTENT */}
                <div className="relative z-[2] mt-2 sm:mt-4 pt-6 sm:pt-10">
                    <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12">

                        {/* LEFT CONTENT */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">

                            {/* Tagline */}
                            <span className="block text-white opacity-90 mb-3 text-base sm:text-lg font-bold">
                                <span className="text-[#F54E02]">Code.</span> Create.{" "}
                                <span className="text-[#F54E02]">Conquer.</span>
                            </span>

                            {/* Heading */}
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-fredoka leading-tight">
                                Transforming Ideas into
                                <br className="md:hidden" />
                                <span className="text-[#F54E02]"> Digital Solutions</span>
                            </h1>

                            {/* Description */}
                            <p className="text-white/70 mb-6 max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 text-sm sm:text-base">
                                We build powerful, scalable, and modern software solutions tailored for businesses. From apps to enterprise systems, we deliver high-quality technology that drives real results.
                            </p>

                            {/* Buttons */}
                            <div className="flex justify-center lg:justify-start">
                                <a
                                    href="#services"
                                    className="px-5 py-2.5 bg-[#F54E02] text-white rounded-lg font-medium text-sm sm:text-base"
                                >
                                    Our Services
                                </a>
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                            <Image
                                src="/banner-girl.png"
                                alt="Shraddha Training"
                                width={500}
                                height={500}
                                className="w-[280px] sm:w-[360px] md:w-[420px] lg:w-auto max-h-[520px] sm:max-h-[600px]"
                                priority
                            />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
