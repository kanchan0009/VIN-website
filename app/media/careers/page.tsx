import CTABanner from "../../components/CTABanner";
import MediaTabs from "../../components/MediaTabs";

const openings = [
  {
    id: 1,
    title: "Program Coordinator - Women's Empowerment",
    department: "Programs",
    location: "Kathmandu / Field",
    type: "Full-time",
    description:
      "Lead and coordinate women's empowerment programs across multiple communities. Develop training modules, manage field staff, and monitor program outcomes.",
    requirements: [
      "Master's in Social Work, Development Studies, or related field",
      "3+ years experience in NGO/development sector",
      "Fluent in Nepali and English",
      "Strong leadership and communication skills",
    ],
  },
  {
    id: 2,
    title: "Public Health Officer",
    department: "Health",
    location: "Okhaldhunga / Nuwakot",
    type: "Full-time",
    description:
      "Implement public health programs in rural communities. Organize health camps, conduct health education sessions, and coordinate with local health facilities.",
    requirements: [
      "Bachelor's in Public Health or Nursing",
      "2+ years relevant experience",
      "Willingness to travel to remote areas",
      "Knowledge of WASH programs preferred",
    ],
  },
  {
    id: 3,
    title: "Finance and Admin Manager",
    department: "Administration",
    location: "Kathmandu",
    type: "Full-time",
    description:
      "Manage organizational finances, prepare budgets, ensure compliance with donor requirements, and oversee administrative operations.",
    requirements: [
      "Bachelor's in Accounting, Finance, or Business Administration",
      "5+ years experience in NGO finance",
      "Proficiency in accounting software",
      "Knowledge of FDRA and tax regulations",
    ],
  },
  {
    id: 4,
    title: "Youth Program Facilitator",
    department: "Youth Empowerment",
    location: "Kavre / Okhaldhunga",
    type: "Full-time",
    description:
      "Facilitate youth empowerment programs including life skills training, leadership development, and entrepreneurship workshops.",
    requirements: [
      "Bachelor's in Education, Social Sciences, or related field",
      "Experience working with youth groups",
      "Excellent facilitation skills",
      "Creative and energetic personality",
    ],
  },
  {
    id: 5,
    title: "Monitoring and Evaluation Officer",
    department: "M&E",
    location: "Kathmandu / Field",
    type: "Full-time",
    description:
      "Develop M&E frameworks, collect and analyze program data, prepare reports, and ensure evidence-based program improvements.",
    requirements: [
      "Master's in Statistics, Economics, or Development Studies",
      "3+ years M&E experience",
      "Proficiency in data analysis tools",
      "Strong report writing skills",
    ],
  },
];

export default function CareersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-72 flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
          alt="Careers"
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
            Home / Media / <span className="text-white">Careers</span>
          </p>
          <h1
            className="text-5xl font-bold text-white"
            style={{ }}
          >
            Careers
          </h1>
        </div>
      </section>

      <MediaTabs />

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ }}
          >
            Join Our Team
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Be part of a dedicated team working to create lasting change in
            Nepal's marginalized communities. We offer meaningful work,
            professional growth, and the opportunity to make a real difference.
          </p>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 space-y-6">
          {openings.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3
                  className="text-xl font-bold text-gray-900"
                  style={{ }}
                >
                  {job.title}
                </h3>
                <div className="flex gap-2 mt-2 md:mt-0">
                  <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium">
                    {job.type}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                    {job.department}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
                <span>Location: {job.location}</span>
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {job.description}
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">
                  Requirements:
                </h4>
                <ul className="space-y-1">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "var(--indigo-btn)" }}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
