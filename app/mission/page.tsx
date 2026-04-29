"use client";
import CTABanner from "../components/CTABanner";
import ProgramSections from "../components/ProgramSections";

export default function MissionPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-72 flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80"
          alt="Mission"
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
          <p className="text-white/60 text-sm mb-2">
            Home / <span className="text-white">Mission, Vision, Goal</span>
          </p>
          <h1
            className="text-5xl font-bold text-white"
            style={{ }}
          >
            Mission, Vision, Goal
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-xl font-semibold mb-2"
            style={{ }}
          >
            Volunteers Initiative Nepal (VIN)
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Established in 2002 by a diverse group drawn from development
            workers, educationalists, social activists and other professionals,
            is a non-religious, non-political, non-profit, and non-governmental
            organization (NGO). VIN is officially registered under the Society
            Act with the District Administration Office.
          </p>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="py-10 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-2 text-center">
            Introducing
          </h2>
          <p className="text-center text-gray-500 text-sm mb-12 max-w-xl mx-auto">
            VIN has been mobilizing local and international volunteers in
            various development programs including education and training, women
            and children, health and sanitation, and construction-related
            activities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "👁️",
                title: "Vision",
                desc: "Creating inclusive and equitable local communities of Nepal.",
                color: "var(--indigo-btn)",
              },
              {
                icon: "🎯",
                title: "Mission",
                desc: "VIN aims at implementing a complete holistic and organized approach to community development in Nepal through sustainable community-development programme approaches.",
                color: "var(--navy)",
              },
              {
                icon: "⭐",
                title: "Values and Principal",
                desc: "Transparency, Accountability, Community-led development, Sustainability, Inclusivity, and Integrity in all our actions and relationships.",
                color: "#10b981",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-5"
                  style={{ background: v.color }}
                >
                  {v.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProgramSections />

      <CTABanner />
    </main>
  );
}
