'use client';

const WHY_CHOOSE = [
  '5+ years of industry experience delivering scalable solutions',
  'Trusted by colleges, startups & government institutions',
  'End-to-end IT & Digital Marketing services',
  'Strong expertise in Web, Mobile & LMS solutions',
  'Dedicated support with long-term partnerships',
];

const EXPERIENCE = [
  'Delivered digital solutions for colleges, startups & government departments',
  'Implemented solutions for AP Police & educational institutions',
  'Conducted 50+ workshops and internships',
  'Signed multiple MoUs with institutions for collaboration',
];

export default function WhyChooseShraddha() {
  return (
    <section className="py-16 px-6 lg:px-16 bg-[#ffffff]">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 items-start">

        {/* Left Content */}
        <div className="lg:w-1/2 space-y-8 text-gray-900">

          {/* Why Choose */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
              Why Choose <span className="text-[#F54E02]">Shraddha Group</span>?
            </h2>

            <ul className="space-y-2">
              {WHY_CHOOSE.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#F54E02] text-lg leading-none mt-0.5">▸</span>
                  <span className="text-base lg:text-lg leading-snug text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
              Our Experience & Work
            </h3>

            <ul className="space-y-2">
              {EXPERIENCE.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#F54E02] text-lg leading-none mt-0.5">◆</span>
                  <span className="text-base lg:text-lg leading-snug text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 w-full">
          <div className="w-full rounded-xl overflow-hidden">
            <img
              src="/landing2-right-bottom-new-1.png"
              alt="Why Choose Shraddha"
              className="w-full h-[400px] lg:h-[520px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
