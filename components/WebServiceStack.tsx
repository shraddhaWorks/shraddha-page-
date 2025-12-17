"use client";
import Image from "next/image";

export default function WebServiceStack() {
    const frontend = [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    ];

    const backend = [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ];

    const cms = [
        { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
        { name: "Vector DB (Pinecone)", icon: "https://avatars.githubusercontent.com/u/79203942?s=200&v=4" },
    ];

    const cardClasses =
        "bg-white rounded-xl shadow-lg p-4 sm:p-6 h-full border border-gray-200";

    const iconClasses =
        "w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] p-3 sm:p-4 bg-[rgba(245,78,2,0.1)] rounded-xl mb-3 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[rgba(245,78,2,0.2)]";

    return (
        <section className="bg-[#1c1f23] py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-18">

                {/* HEADER */}
                <div className="text-center mb-8 sm:mb-10">
                    <span className="inline-block bg-orange-600 w-14 h-[3px]"></span>

                    <h2 className="text-white text-3xl sm:text-4xl font-bold mt-3">
                        Our Technology <span className="text-orange-500">Stack</span>
                    </h2>

                    <p className="text-white/70 w-full md:w-3/4 mx-auto mt-2 text-sm sm:text-base">
                        We use the latest technologies and frameworks to build modern,
                        high-performance websites
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

                    {/* FRONTEND */}
                    <div className={cardClasses}>
                        <h3 className="text-center text-lg sm:text-xl font-semibold mb-5">
                            Frontend Technologies
                        </h3>

                        <div className="grid grid-cols-3 gap-4 sm:gap-6">
                            {frontend.map((tech) => (
                                <div key={tech.name} className="group flex flex-col items-center text-center">
                                    <div className={iconClasses}>
                                        <Image
                                            src={tech.icon}
                                            alt={tech.name}
                                            width={50}
                                            height={50}
                                            className="mx-auto"
                                        />
                                    </div>
                                    <p className="font-medium text-sm sm:text-base mt-1">
                                        {tech.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* BACKEND */}
                    <div className={cardClasses}>
                        <h3 className="text-center text-lg sm:text-xl font-semibold mb-5">
                            Backend Technologies
                        </h3>

                        <div className="grid grid-cols-3 gap-4 sm:gap-6">
                            {backend.map((tech) => (
                                <div key={tech.name} className="group flex flex-col items-center text-center">
                                    <div className={iconClasses}>
                                        <Image
                                            src={tech.icon}
                                            alt={tech.name}
                                            width={50}
                                            height={50}
                                            className="mx-auto"
                                        />
                                    </div>
                                    <p className="font-medium text-sm sm:text-base">
                                        {tech.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CMS & DB */}
                    <div className={cardClasses}>
                        <h3 className="text-center text-lg sm:text-xl font-semibold mb-5">
                            CMS & Database
                        </h3>

                        <div className="grid grid-cols-3 gap-4 sm:gap-6">
                            {cms.map((tech) => (
                                <div key={tech.name} className="group flex flex-col items-center text-center">
                                    <div className={iconClasses}>
                                        <Image
                                            src={tech.icon}
                                            alt={tech.name}
                                            width={50}
                                            height={50}
                                            className="mx-auto"
                                        />
                                    </div>
                                    <p className="font-medium text-sm sm:text-base">
                                        {tech.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
