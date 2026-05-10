import Link from "next/link";
import { ArrowLeft, Users } from "lucide-react";
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

export default async function CertificationDetailPage(props: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = "then" in props.params ? await props.params : props.params;
  const { slug } = resolvedParams;
  const org = orgs.find((o) => o.slug === slug);

  if (!org) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Certification Not Found</h1>
          <p className="text-gray-600 mb-8">
            Could not find certification for slug: <span className="font-mono font-bold text-red-500">{slug}</span>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white font-montserrat">
      {/* Hero Section */}
      <section className="relative h-[670px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1594932224828-b4b059b8fe0e?w=1600&q=80"
          alt="Certified By"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-3 pb-8 w-full text-left">
          <h1 className="text-[56px] font-[800] text-white mb-3">
            Certified By
          </h1>
          <p className="text-white/90 text-[20px] max-w-6xl font-[400] leading-tight">
            Volunteer Initiative Nepal (VIN) Is Proud To Be Recognized And Certified By The Highest Global Standards.
            We Are Committed To Transparency, Accountability, And Impactful Community Development.
          </p>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          {/* Main Logo Container */}
          <div className="flex items-center justify-center mb-10 w-full">
            <img 
              src="/european-commission-logo.png" 
              alt={org.name}
              className="h-48 object-contain"
            />
          </div>

          <h2 className="text-5xl font-[600] text-[#333] mb-12 text-center">
            {org.name}
          </h2>

          <div className="w-full text-center space-y-6">
            <p className="text-black text-xl  text-left leading-relaxed">
              Volunteer Initiative Nepal (VIN) Is Proud To Be Recognized And Certified By The {org.name}, 
              Reflecting Our Commitment To Transparency, Accountability, And Impactful Community Development.
            </p>
            <p className="text-black text-xl text-left leading-relaxed">
              This Certification Acknowledges VIN&apos;s Dedication To Delivering Ethical, Sustainable, And Community-Driven 
              Programs Across Nepal. Through Consistent Efforts In Education, Women&apos;s Empowerment, Child Protection, 
              And Disaster Resilience, VIN Has Aligned Its Operations With International Standards Of Social Impact And Organizational Governance.
            </p>
            <p className="text-black text-xl text-left leading-relaxed">
              Being Certified By The {org.name} Strengthens Our Credibility As A Trusted Organization Working At The Grassroots Level. 
              It Also Enables Us To Collaborate With Global Partners, Expand Our Outreach, And Ensure That Every Initiative We Undertake Creates Meaningful And Measurable Change.
            </p>
          </div>
        </div>
      </section>

      {/* Stats and Image Section */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-12 items-start">
            {/* Left: Stats */}
            <div className="space-y-6">
              {/* Stat 1 */}
              <div className="bg-[#DFF0FF] h-[255px] p-8 flex items-center gap-6 border border-blue-50/50">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-[var(--blue)] flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--blue)] mb-2">19+ Years of Service</h3>
                  <p className="text-gray-900 text-[12px] leading-relaxed">
                    For Over 19 Years, VIN Has Been Actively Working To Uplift Marginalized Communities In Nepal Through 
                    Volunteer-Driven Programs And Sustainable Development Initiatives.
                  </p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-[#DFF0FF] h-[255px] p-8 flex items-center gap-6 border border-blue-50/50">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center shrink-0">
                  <Users className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--blue)] mb-2">20,000+ Lives Impacted</h3>
                  <p className="text-gray-900 text-[12px] leading-relaxed">
                    Thousands Of Individuals And Families Have Directly Benefited From Our Programs In Education, Healthcare, 
                    Women&apos;s Empowerment, And Community Development.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-[535px]">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80" 
                alt="Community Impact" 
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Our Commitment Section */}
      <section className="pt-0 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="w-full text-left mb-16">
            <h2 className="text-5xl font-[600] text-[#1a1a1a] mb-10 text-center">Our Commitment</h2>
            <div className="space-y-5 text-black text-xl leading-relaxed font-[400]">
              <p className="text-left">
                At VIN, We Believe In Empowering Communities Rather Than Creating Dependency. Our 
                Projects Are Designed To Build Local Capacity, Promote Inclusivity, And Create Long-Term 
                Solutions That Continue To Benefit Communities Even After Project Completion.
              </p>
              <p className="text-left">
                With International Recognition From The European Commission, We Continue To Uphold 
                The Highest Standards In Delivering Impactful, Ethical, And Sustainable Development Work 
                In Nepal.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="w-full md:w-[365px] h-[450px] overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80" 
                alt="Community capacity" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-[365px] h-[450px] overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1524062794003-ddce336032bb?w=800&q=80" 
                alt="Local empowerment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-[365px] h-[450px] overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80" 
                alt="Sustainable impact" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <DonationWidget />
      <CTABanner />
    </main>
  );
}

