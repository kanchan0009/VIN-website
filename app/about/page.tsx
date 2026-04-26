import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import CTABanner from "../components/CTABanner";


const programs = [
  {
    title: "Women's Empowerment",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
  },
  {
    title: "Child Development",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
  },
  {
    title: "Youth Empowerment",
    img: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400&q=80",
  },
  {
    title: "Public Health",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&q=80",
  },
  {
    title: "Environment",
    img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&q=80",
  },
  {
    title: "Disaster Risk",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80",
  },
];

const volunteerPrograms = [
  {
    title: "Women's Empowerment",
    sub: "Central to empowerment & prosperity",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80",
  },
  {
    title: "Children's Development",
    sub: "Building futures through education",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&q=80",
  },
  {
    title: "Youth Empowerment",
    sub: "Invest in the next generation",
    img: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=300&q=80",
  },
  {
    title: "Youth Empowerment",
    sub: "Skills and leadership training",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&q=80",
  },
  {
    title: "Public Health & Medical Care",
    sub: "Healthcare for all communities",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=300&q=80",
  },
  {
    title: "Environment & Conservation",
    sub: "Protecting Nepal's natural heritage",
    img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=300&q=80",
  },
  {
    title: "Environment & Conservation",
    sub: "Sustainable land and water use",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&q=80",
  },
  {
    title: "Environment & Conservation",
    sub: "Community forest programs",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&q=80",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-72 flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80"
          alt="About VIN"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(20,10,70,0.85) 50%, rgba(0,0,0,0.2) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-10 w-full">
          <h1
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            About Us
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Mission
          </h2>
          <p className="text-center text-gray-500 max-w-3xl mx-auto text-sm leading-relaxed mb-12">
            Our mission is to provide community empowerment through education,
            livelihood, health, and environment development programs,
            implemented through sustainable community-development programme
            approaches.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {programs.map((p) => (
              <div
                key={p.title}
                className="rounded-xl overflow-hidden h-36 relative group"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 flex items-end p-3"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(20,10,70,0.7) 0%, transparent 60%)",
                  }}
                >
                  <span className="text-white text-xs font-semibold">
                    {p.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-600 text-sm leading-relaxed">
            <p>
              VIN has been mobilizing local and international volunteers in
              various development programs including education and training,
              women and children, health and sanitation, and
              construction-related activities. We have also been deploying its
              volunteers in teaching, treatment, health, and wellness, helping
              children in orphanages, environmental and sustainable development
              programs.
            </p>
            <p>
              Women and children: the nucleus of our development process. We pay
              special attention to women and children's issues. We bring
              awareness and skills and encourage women to challenge the existing
              social norms of patriarchy in society.
            </p>
            <p>
              Hundreds of women have benefited through literacy, life skills,
              income generation, awareness training, child rights awareness,
              microfinance, environmental awareness, waste management, tree
              plantation, cultural promotion, natural resource management,
              sustainable agricultural development programs.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Programs */}
      <section className="py-20" style={{ background: "var(--sky)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="max-w-md">
              <h2
                className="text-4xl font-bold mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Volunteer programs
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Volunteer programs are structured activities where individuals
                contribute their time, skills, and energy to help communities or
                organizations achieve meaningful goals — without financial
                compensation, but with significant personal and social rewards.
              </p>
              <Link
                href="/volunteer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm"
                style={{ background: "var(--indigo-btn)" }}
              >
                Volunteer in Nepal <ArrowRight size={15} />
              </Link>
            </div>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-3">
              {volunteerPrograms.map((p, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-36">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0 flex items-end p-2"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(20,10,70,0.75) 0%, transparent 60%)",
                      }}
                    >
                      <span className="text-white text-xs font-semibold leading-tight">
                        {p.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Most Trusted */}
      <section className="py-16" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Volunteer in Nepal with the most trusted local volunteer
            organization
          </h2>
          <p className="text-white/70 text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
            We are partnered with most of the top volunteer-sending
            organizations in the world. Our experienced local team comprises
            over 1,200 highly trained full-time staff and volunteers. We are
            VIN, FORUM, CCIVS, NVDA, AVSO, NetHope members.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "FORUM",
              "CCIVS",
              "NVDA",
              "AVSO",
              "European Commission",
              "NetHope",
            ].map((org) => (
              <span
                key={org}
                className="px-4 py-2 rounded-full text-xs font-semibold text-white border border-white/30"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                {org}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 10 best programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-3"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            10 best volunteer programs in Nepal includes
          </h2>
          <p className="text-center text-gray-500 text-sm mb-12 max-w-xl mx-auto">
            Thanks to our volunteer friends for providing us with their support.
            We are a non-profit, non-governmental organization working at the
            end of the world with real people.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Women's Empowerment",
                img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80",
              },
              {
                title: "Children's Development",
                img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&q=80",
              },
              {
                title: "Youth Empowerment",
                img: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=300&q=80",
              },
              {
                title: "Youth Empowerment",
                img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&q=80",
              },
              {
                title: "Public Health & Medical Care",
                img: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=300&q=80",
              },
              {
                title: "Environment & Conservation",
                img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=300&q=80",
              },
              {
                title: "Environment & Conservation",
                img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&q=80",
              },
              {
                title: "Disaster Risk Reduction",
                img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&q=80",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden group cursor-pointer border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="h-28 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs font-semibold text-gray-700">
                    {p.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Central to empowerment & prosperity
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nepal's Challenge */}
      <section className="py-20" style={{ background: "var(--sky)" }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2
              className="text-4xl font-bold mb-5"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Nepal's Challenge
            </h2>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Nepal currently ranked as one of the 25 least-developed
                countries in the world has experienced, and continues to deal
                with, challenges including political instability, poverty, and a
                devastating earthquake in 2015. Nepal also faces significant
                public health challenges as a result of its terrain, remoteness
                and lack of resources.
              </p>
              <p>
                As a country of contrast, Nepal sees more than 700 principal
                languages/dialects spoken by its various demographic groups, and
                many issues around gender discrimination remain a significant
                concern for many rural communities. Nepal is ranked 98 out of
                189 countries in terms of gender development.
              </p>
              <p>
                Political Nepal has been a constant challenge. While Nepal has
                had a strong government (2008–2019), it has experienced
                significant political uncertainty amid repeated calls for
                elections, and Nepal is still working to build a functioning
                parliamentary democracy with greater respect for human rights.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80"
              alt="Nepal landscape"
              className="rounded-2xl w-full h-64 object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="py-14" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2
              className="text-3xl font-bold text-white mb-3"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Financial transparency
            </h2>
            <p className="text-white/70 text-sm leading-relaxed">
              The IRS has determined that VIN is an exempt public charity under
              IRC Section 501(c)(3). There are many "1%" or "5%" non-profits.
              Those are 990. Yes, we have a high rate. Our ratio is 84.2% funds
              go directly to programs and 15.8% administrative costs. You will
              find our detailed financial reports and annual budgets
              transparently available on our website.
            </p>
          </div>
          <div className="shrink-0">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80"
              alt="Financial transparency"
              className="rounded-2xl h-48 w-72 object-cover"
            />
          </div>
        </div>
      </section>

      <CTABanner />
      
    </main>
  );
}
