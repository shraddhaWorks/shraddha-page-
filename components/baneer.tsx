"use client";

import Image from "next/image";

export default function Banner() {
    return (
        <section className="relative overflow-hidden py-25 min-h-screen bg-black">
            <div className="container mx-auto px-6 lg:px-18">

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
                        width={200}
                        height={200}
                        className="opacity-75 pointer-events-none select-none"
                    />
                </div>

                <div className="md:hidden absolute bottom-0 right-0 z-[1]">
                    <Image
                        src="/Mobile/banner-mb-right-bg.svg"
                        alt=""
                        width={200}
                        height={200}
                        className="opacity-75 pointer-events-none select-none"
                    />
                </div>

                {/* CONTENT */}
                <div className="relative h-full z-[2] mt-4 pt-10">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

                        {/* LEFT CONTENT */}
                        <div className="w-full lg:w-1/2 text-center md:text-left">

                            {/* Tagline */}
                            <span className="block text-white opacity-90 mb-3 text-xl font-bold">
                                <span className="text-[#F54E02]">Code.</span> Create.{" "}
                                <span className="text-[#F54E02]">Conquer.</span>
                            </span>

                            {/* Heading */}
                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-fredoka">
                                Transforming Ideas into
                                <br className="md:hidden" />
                                <span className="text-[#F54E02]"> Digital Solutions</span>
                            </h1>

                            {/* Description */}
                            <p className="text-white/70 mb-6 max-w-md lg:max-w-lg">
                                We build powerful, scalable, and modern software solutions tailored for businesses. From apps to enterprise systems, we deliver high-quality technology that drives real results.    </p>


                            {/* Buttons */}
                            <div className="flex gap-4 justify-center md:justify-start">
                                <a
                                    href="#services"
                                    className="px-5 py-2 bg-[#F54E02] text-white rounded-lg font-medium"
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
                                className="max-h-[600px]"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
