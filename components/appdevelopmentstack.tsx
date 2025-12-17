"use client";

import Image from "next/image";

export default function AppDevelopmentStack() {
  const platforms = [
    {
      name: "iOS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/IOS_logo.svg/1200px-IOS_logo.svg.png",
    },
    {
      name: "Android",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png",
    },
    {
      name: "React Native",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
      name: "Flutter",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-flutter-logo.svg/2560px-Google-flutter-logo.svg.png",
    },
    {
      name: "Swift",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png",
    },
    {
      name: "Kotlin",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png",
    },
  ];

  const techs = [
    "Node.js",
    "Firebase",
    "AWS",
    "MongoDB",
    "GraphQL",
    "REST API",
    "Push Notifications",
    "In-App Purchases",
    "AR/VR",
  ];

  return (
    <section className="py-12 sm:py-14 lg:py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-18">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 text-black">
          <span className="inline-block bg-[#ff4500] w-10 sm:w-12 h-[3px]"></span>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-fredoka">
            Platforms & <span className="font-bold">Technologies</span>
          </h2>

          <p className="max-w-xl mx-auto mt-2 text-sm sm:text-base text-black">
            We use the latest technologies to build high-quality mobile
            applications
          </p>
        </div>

        {/* Infinite Loop */}
        <div className="overflow-hidden py-4 sm:py-6 mt-6 sm:mt-8 relative group">
          <style>{`
            @keyframes scrollLeft {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .loop {
              display: flex;
              animation: scrollLeft 15s linear infinite;
            }
            .group:hover .loop {
              animation-play-state: paused;
            }
          `}</style>

          {/* Twice list → Seamless Loop */}
          <div className="loop">
            {[...platforms, ...platforms].map((p, i) => (
              <div
                key={i}
                className="flex flex-col items-center min-w-[90px] sm:min-w-[120px] mx-4 sm:mx-6"
              >
                <div
                  className="
                    w-[56px] h-[56px] sm:w-[70px] sm:h-[70px]
                    bg-white rounded-2xl shadow-md
                    flex items-center justify-center mb-2 sm:mb-3
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                  "
                >
                  <Image
                    src={p.icon}
                    alt={p.name}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold text-gray-800 text-xs sm:text-sm">
                  {p.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Pills */}
        <div className="mt-8 sm:mt-10 text-center">
          {techs.map((t) => (
            <span
              key={t}
              className="
                inline-block px-3 sm:px-4 py-1.5 sm:py-2
                rounded-full text-xs sm:text-sm font-medium text-gray-700
                mx-1.5 sm:mx-2 my-1
                transition duration-300
                hover:bg-[#ff4500] hover:text-white hover:-translate-y-1
              "
            >
              {t}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
