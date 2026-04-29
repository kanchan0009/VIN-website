import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CTABanner from "../../components/CTABanner";
import DonationWidget from "../../components/DonationWidget";

const orgs = [
  {
    name: "European Commission",
    slug: "european-commission",
    country: "Europe",
    from: "2005",
    to: "Present",
    logo: "🇪🇺",
    desc: "Recognised for community development excellence and transparent governance across EU-partner nations.",
    fullDescription:
      "The European Commission recognition signifies our commitment to upholding the highest standards of community development and transparent governance. Since 2005, we have been partnering with EU institutions to support underserved communities across Europe and beyond.",
    achievements: [
      "Transparent governance practices",
      "Community-led development initiatives",
      "Cross-border collaboration",
      "Sustainable impact measurement",
    ],
    contact:
      "For inquiries about our EU partnerships, please contact partnerships@vin.org",
  },
  {
    name: "2024 Top Rated NGO",
    slug: "top-rated-ngo",
    country: "Global",
    from: "2024",
    to: "2025",
    logo: "🏆",
    desc: "Awarded Top-Rated NGO status for outstanding volunteer engagement and measurable community impact.",
    fullDescription:
      "This prestigious award recognizes our outstanding performance in volunteer engagement and demonstrated community impact. We have been recognized for our innovative approaches to sustainable development and measurable outcomes in all our programs.",
    achievements: [
      "Outstanding volunteer engagement",
      "Measurable community impact",
      "Innovative program design",
      "Transparent reporting and accountability",
    ],
    contact: "For media inquiries and award details, contact media@vin.org",
  },
  {
    name: "IVSA",
    slug: "ivsa",
    country: "Nepal",
    from: "2010",
    to: "Present",
    logo: "🌐",
    desc: "Member of the International Volunteer Service Association, promoting ethical voluntourism standards.",
    fullDescription:
      "As a member of the International Volunteer Service Association, we are committed to promoting ethical voluntourism standards globally. Our membership ensures that all volunteer placements meet international quality and ethical standards.",
    achievements: [
      "Ethical voluntourism standards",
      "International volunteer network",
      "Quality assurance practices",
      "Cultural exchange facilitation",
    ],
    contact: "Learn more about volunteering with us at volunteer@vin.org",
  },
  {
    name: "Forum",
    slug: "forum",
    country: "Europe",
    from: "2008",
    to: "Present",
    logo: "🔵",
    desc: "Member of the Forum network of European Voluntary Service Organisations.",
    fullDescription:
      "Our membership in the Forum network of European Voluntary Service Organisations strengthens our commitment to European solidarity and cross-cultural understanding through voluntary service.",
    achievements: [
      "European network participation",
      "Cross-cultural collaboration",
      "Volunteer exchange programs",
      "European standards compliance",
    ],
    contact: "For European partnerships, contact europe@vin.org",
  },
  {
    name: "CCIVS",
    slug: "ccivs",
    country: "Global",
    from: "2006",
    to: "Present",
    logo: "🌍",
    desc: "Member of the Coordinating Committee for International Voluntary Service, maintaining official UNESCO relations.",
    fullDescription:
      "Our CCIVS membership reflects our commitment to international voluntary service and our partnership with UNESCO in advancing sustainable development goals through volunteer action globally.",
    achievements: [
      "UNESCO official relations",
      "International coordination",
      "SDG alignment",
      "Global volunteer network",
    ],
    contact: "For international programs, contact global@vin.org",
  },
  {
    name: "NVDA",
    slug: "nvda",
    country: "Nepal",
    from: "2012",
    to: "Present",
    logo: "⭐",
    desc: "Registered with the National Volunteer Development Association of Nepal.",
    fullDescription:
      "Our registration with NVDA ensures compliance with Nepal's national volunteer standards and strengthens our role in developing the volunteer sector within Nepal.",
    achievements: [
      "National volunteer standards",
      "Nepal sector development",
      "Local partnership strengthening",
      "Community trust building",
    ],
    contact: "For Nepal-specific inquiries, contact nepal@vin.org",
  },
];

export default function CertificationDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const org = orgs.find((o) => o.slug === params.slug);

  if (!org) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Certification Not Found</h1>
          <p className="text-gray-600 mb-8">
            The certification you are looking for does not exist.
          </p>
          <Link
            href="/certifications"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white"
            style={{ background: "var(--indigo-btn)" }}
          >
            <ArrowLeft size={18} />
            Back to Certifications
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-72 flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600&q=80"
          alt={org.name}
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
          <Link
            href="/certifications"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Certifications
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">{org.logo}</div>
            <div>
              <h1
                className="text-4xl font-bold text-white"
                style={{ }}
              >
                {org.name}
              </h1>
              <p className="text-white/70 text-sm">
                {org.country} • {org.from} to {org.to}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header with Logo and Text */}
          <div className="mb-16 flex flex-col lg:flex-row gap-8 items-start">
            <div
              className="flex-1 flex items-center gap-6 pb-6 border-b-4"
              style={{ borderColor: "#2421a0" }}
            >
              <img
                src="https://images.unsplash.com/photo-1470114716159-e389f8712fda?w=200&q=80"
                alt={org.name}
                className="w-32 h-32 object-contain"
              />
              <div>
                <h1
                  className="text-3xl font-bold text-gray-900"
                  style={{ }}
                >
                  {org.name}
                </h1>
                <p className="text-gray-500 text-sm mt-2">{org.country}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Volunteer Initiative Nepal (VIN) Is Proud To Be Recognised And
              Certified By The {org.name}. This Certification Reflects Our
              Commitment To Excellence In Community Development And Our
              Dedication To Delivering Transparent, Accountable, And Sustainable
              Services That Foster Positive Social Change.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {org.fullDescription}
            </p>
          </div>

          {/* Stats Section */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0 text-2xl">
                ⏱️
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1">Experience Since</p>
                <h3 className="text-2xl font-bold text-gray-900">19+ Years</h3>
                <p className="text-gray-600 text-xs mt-2">
                  Working together with communities to create sustainable
                  development solutions
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center shrink-0 text-2xl">
                👥
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1">Lives Impacted</p>
                <h3 className="text-2xl font-bold text-gray-900">20,000+</h3>
                <p className="text-gray-600 text-xs mt-2">
                  Individuals have benefited from our programs and initiatives
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="mb-16">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
              alt="Community work"
              className="w-full h-80 object-cover rounded-2xl"
            />
          </div>

          {/* Our Commitment Section */}
          <div className="mb-16">
            <h2
              className="text-3xl font-bold text-gray-900 mb-6"
              style={{ }}
            >
              Our Commitment
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              As VIN, We Believe In Empowering Communities Rather Than Creating
              Dependency. Our Collaborative Approach Ensures That Communities
              Are Active Participants In Designing Solutions That Fit Their
              Needs. Through Consistent Efforts And Accountability, We Strive To
              Create Lasting Change.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              With International Recognition From The {org.name}, We Continue To
              Uphold The Highest Standards In Delivering Impactful, Ethical, And
              Sustainable Development Work In Nepal.
            </p>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80"
              alt="Community 1"
              className="w-full h-48 object-cover rounded-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80"
              alt="Community 2"
              className="w-full h-48 object-cover rounded-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
              alt="Community 3"
              className="w-full h-48 object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Related Certifications */}
      <section className="py-16" style={{ background: "var(--sky)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ }}
          >
            Other Certifications & Memberships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {orgs
              .filter((o) => o.slug !== params.slug)
              .slice(0, 3)
              .map((relatedOrg) => (
                <Link
                  key={relatedOrg.slug}
                  href={`/certifications/${relatedOrg.slug}`}
                  className="p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-3">{relatedOrg.logo}</div>
                  <h3 className="font-bold text-lg mb-2">{relatedOrg.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {relatedOrg.country}
                  </p>
                  <p className="text-sm text-gray-700 line-clamp-2 mb-4">
                    {relatedOrg.desc}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: "var(--indigo-btn)" }}
                  >
                    Learn More →
                  </span>
                </Link>
              ))}
          </div>
          <div className="text-center">
            <Link
              href="/certifications"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white"
              style={{ background: "var(--indigo-btn)" }}
            >
              View All Certifications
            </Link>
          </div>
        </div>
      </section>

      <DonationWidget />
      <CTABanner />
    </main>
  );
}
