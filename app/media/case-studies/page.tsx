import CTABanner from "../../components/CTABanner";
import MediaTabs from "../../components/MediaTabs";

const caseStudies = [
  {
    id: 1,
    title: "Women's Economic Empowerment in Okhaldhunga: A 5-Year Impact Study",
    location: "Okhaldhunga District",
    duration: "2019 - 2024",
    summary:
      "A comprehensive analysis of VIN's women's empowerment program showing significant improvements in economic independence, social status, and community participation among 500+ women.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    outcomes: [
      { metric: "85%", label: "Women reported increased income" },
      { metric: "72%", label: "Started micro-enterprises" },
      { metric: "90%", label: "Improved family decision-making role" },
      { metric: "500+", label: "Women directly benefited" },
    ],
    approach:
      "The program combined skills training (tailoring, agriculture, handicrafts), microfinance access, literacy education, and leadership development through women's cooperatives.",
  },
  {
    id: 2,
    title: "Community-Led Disaster Risk Reduction in Nuwakot",
    location: "Nuwakot District",
    duration: "2020 - 2024",
    summary:
      "Documenting the transformation of 12 disaster-prone villages into resilient communities through community-based disaster management systems and preparedness training.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    outcomes: [
      { metric: "12", label: "Villages with disaster plans" },
      { metric: "36", label: "Community Emergency Response Teams" },
      { metric: "95%", label: "Households with emergency kits" },
      { metric: "0", label: "Casualties in recent floods" },
    ],
    approach:
      "Established early warning systems, trained Community Emergency Response Teams (CERTs), created village disaster management plans, and constructed flood-resilient infrastructure.",
  },
  {
    id: 3,
    title:
      "Improving Rural Education Access in Kavre Through Infrastructure Development",
    location: "Kavre District",
    duration: "2021 - 2024",
    summary:
      "A case study on how school infrastructure improvements combined with teacher training increased enrollment rates and learning outcomes in 8 rural schools.",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
    outcomes: [
      { metric: "8", label: "Schools renovated/constructed" },
      { metric: "45%", label: "Increase in enrollment" },
      { metric: "2,400+", label: "Students benefiting" },
      { metric: "60%", label: "Improvement in test scores" },
    ],
    approach:
      "Constructed classrooms, libraries, and sanitation facilities. Provided teacher training, learning materials, and established school management committees.",
  },
  {
    id: 4,
    title: "Youth-Led Climate Action and Environmental Conservation",
    location: "Multiple Districts",
    duration: "2022 - 2024",
    summary:
      "Evaluating the effectiveness of youth empowerment programs in driving environmental conservation and climate adaptation practices across 15 communities.",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80",
    outcomes: [
      { metric: "15", label: "Youth clubs formed" },
      { metric: "300+", label: "Youth actively engaged" },
      { metric: "5,000", label: "Trees planted" },
      { metric: "40%", label: "Reduction in plastic use" },
    ],
    approach:
      "Youth clubs were established with training on climate action, waste management, and sustainable agriculture. Peer-to-peer education models were used to spread awareness.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-72 flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
          alt="Case Studies"
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
            Home / Media / <span className="text-white">Case Studies</span>
          </p>
          <h1
            className="text-5xl font-bold text-white"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Case Studies
          </h1>
        </div>
      </section>

      <MediaTabs />

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-3/5 p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium">
                      {study.location}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                      {study.duration}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-900 mb-3"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {study.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    {study.summary}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {study.outcomes.map((outcome, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 rounded-lg p-3 text-center"
                      >
                        <div className="text-xl font-bold text-indigo-700">
                          {outcome.metric}
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          {outcome.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Approach:
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {study.approach}
                    </p>
                  </div>

                  <button
                    className="mt-5 px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                    style={{ background: "var(--indigo-btn)" }}
                  >
                    Read Full Report
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
