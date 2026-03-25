"use client";

export default function OurClients() {
  const clients = [
    "Sanskrithi School of Engineering",
    "Sanskrithi School of Business",
    "Sri Padmavathi colleges",
    "Tackle Prime India Pvt Ltd",
    "RGUKT Ongole",
    "RGUKT Idupulapaya",
    "Dhanalakshmi Srinivasan University",
    "SVIT",
    "Police Dept, SSS Dist",
    "Rangam Adi Wedding Silks",
    "Timelly",
    "KS Group India Pvt Ltd",
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-18">
        
        {/* Heading */}
        <div className="text-center mb-10 text-black">
          <span className="inline-block bg-[#ff4500] w-12 h-[3px]"></span>
          <h2 className="mt-3 text-3xl md:text-4xl ">
            Our <span className="font-bold">Clients</span>
          </h2>
          <p className="max-w-xl mx-auto mt-2 text-gray-600">
            Trusted by leading institutions and growing businesses
          </p>
        </div>

        {/* Infinite Text-Card Loop */}
        <div className="relative group mt-8">
          <style>{`
            @keyframes scrollLeft {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .client-loop {
              display: flex;
              width: max-content;
              animation: scrollLeft 30s linear infinite;
            }
            .group:hover .client-loop {
              animation-play-state: paused;
            }
          `}</style>

          <div className="client-loop">
            {/* Doubling the array to create a seamless infinite loop */}
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[250px] mx-4"
              >
                <div
                  className="
                    w-full px-6 py-8 bg-white rounded-xl 
                    shadow-md border border-gray-100 flex items-center justify-center
                    transition-all duration-300 text-center
                    hover:-translate-y-2 hover:shadow-xl hover:border-[#ff4500]/20
                  "
                >
                  <span className="text-gray-800 font-medium text-lg leading-tight">
                    {client}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
            </div>

      </div>
    </section>
  );
}