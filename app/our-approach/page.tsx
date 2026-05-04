"use client";

import CTABanner from "../components/CTABanner";
import DevelopmentPillars from "../components/DevelopmentPillars";
import ProgramSections from "../components/ProgramSections";

export default function OurApproachPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[670px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80"
          alt="Our Approach"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(20,10,70,0.88) 50%, rgba(0,0,0,0.2) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-10 w-full">
          
          <h1
            className="text-5xl font-bold text-white"
            style={{ }}
          >
            Our Approach
          </h1>
        </div>
      </section>

      {/* House of VIN */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ }}
          >
            A Holistic Approach to Community Development
          </h2>
          <p className="text-gray-500 text-sm mb-12 max-w-xl mx-auto leading-relaxed">
            House of VIN represents our integrated development philosophy — four
            pillars of community empowerment that together support a thriving
            community.
          </p>

          {/* House diagram */}
          <div className="max-w-lg mx-auto mb-16">
            <div
              className="rounded-t-3xl py-4 text-white font-bold text-lg"
              style={{ background: "var(--navy)" }}
            >
              HOUSE OF VIN
            </div>
            <div
              className="py-3 text-white font-semibold text-sm"
              style={{ background: "var(--indigo-btn)" }}
            >
              EMPOWERED COMMUNITY
            </div>
            <div className="grid grid-cols-4 border border-gray-200">
              {[
                "EDUCATION",
                "HEALTH & ENVIRONMENT",
                "ECONOMY",
                "BASIC INFRASTRUCTURE",
              ].map((pillar, i) => (
                <div
                  key={pillar}
                  className={`p-3 text-xs font-semibold text-center border-r border-gray-200 last:border-0 ${i % 2 === 0 ? "bg-indigo-50" : "bg-blue-50"}`}
                >
                  {pillar}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-6 border border-t-0 border-gray-200">
              {[
                "Womens",
                "Youth",
                "Children",
                "Public Health",
                "Environment",
                "DRR",
              ].map((p, i) => (
                <div
                  key={p}
                  className="py-2 px-1 text-xs text-center text-gray-500 border-r border-gray-100 last:border-0"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mx-auto mb-4">
            House of VIN represents our community empowerment strategy as a
            house. A house is built on four strong pillars — representing the
            four areas of development that VIN focuses on. The four areas of
            development resembling pillars of the house are Education, Health &
            Environment, Economy and Basic Infrastructure.
          </p>
        </div>
      </section>

      {/* Programs */}
      <ProgramSections />

      {/* Four Pillars detail */}
      <DevelopmentPillars />

      <CTABanner />
    </main>
  );
}

