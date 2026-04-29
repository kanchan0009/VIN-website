"use client";

import Link from "next/link";
import { useState } from "react";
import CTABanner from "../components/CTABanner";

import DonationWidget from "../components/DonationWidget";

const orgs = [
  {
    name: "European Commission",
    slug: "european-commission",
    country: "Europe",
    type: "Non-Governmental Org",
    from: "2014",
    to: "Present",
    logo: "🇪🇺",
    desc: "Recognised for community development excellence and transparent governance across EU-partner nations.",
  },
  {
    name: "2024 Top Rated NGO",
    slug: "top-rated-ngo",
    country: "Global",
    type: "Non-Governmental Org",
    from: "2014",
    to: "2025",
    logo: "🏆",
    desc: "Awarded Top-Rated NGO status for outstanding volunteer engagement and measurable community impact.",
  },
  {
    name: "IVSA",
    slug: "ivsa",
    country: "Nepal",
    type: "Non-Governmental Org",
    from: "2014",
    to: "Present",
    logo: "🌐",
    desc: "Member of the International Volunteer Service Association, promoting ethical voluntourism standards.",
  },
  {
    name: "Forum",
    slug: "forum",
    country: "Europe",
    type: "Non-Governmental Org",
    from: "2014",
    to: "Present",
    logo: "🔵",
    desc: "Member of the Forum network of European Voluntary Service Organisations.",
  },
  {
    name: "CCIVS",
    slug: "ccivs",
    country: "Global",
    type: "Non-Governmental Org",
    from: "2014",
    to: "Present",
    logo: "🌍",
    desc: "Member of the Coordinating Committee for International Voluntary Service, maintaining official UNESCO relations.",
  },
  {
    name: "NVDA",
    slug: "nvda",
    country: "Nepal",
    type: "Non-Governmental Org",
    from: "2014",
    to: "Present",
    logo: "⭐",
    desc: "Registered with the National Volunteer Development Association of Nepal.",
  },
];

const sections = [
  {
    title: "Certified by",
    bg: "#171c64",
    textColor: "white",
    cardBg: "white",
    cardBorder: "rgba(255,255,255,0.12)",
    orgSlugs: ["european-commission", "top-rated-ngo", "forum"],
  },
  {
    title: "Membership",
    bg: "#eaf4ff",
    textColor: "#111827",
    cardBg: "white",
    cardBorder: "#dbeafe",
    orgSlugs: ["ivsa", "ccivs", "nvda"],
  },
  {
    title: "Partnership",
    bg: "#171c64",
    textColor: "white",
    cardBg: "white",
    cardBorder: "rgba(255,255,255,0.14)",
    orgSlugs: ["forum", "ccivs", "european-commission"],
  },
  {
    title: "Friends of VIN",
    bg: "#eaf4ff",
    textColor: "#111827",
    cardBg: "white",
    cardBorder: "#dbeafe",
    orgSlugs: ["nvda", "top-rated-ngo", "ivsa"],
  },
  {
    title: "Recognitions",
    bg: "#171c64",
    textColor: "#white",
    cardBg: "white",
    cardBorder: "#dbeafe",
    orgSlugs: ["european-commission", "top-rated-ngo", "ccivs"],
  },
];

export default function CertificationsPage() {
  const [searchTerms, setSearchTerms] = useState<Record<string, string>>({});

  const handleSearchChange = (sectionTitle: string, value: string) => {
    setSearchTerms((prev) => ({ ...prev, [sectionTitle]: value }));
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative h-72 flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600&q=80"
          alt="Certifications"
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
            Home /{" "}
            <span className="text-white">
              Certification, Membership, Partnership
            </span>
          </p>
          <h1
            className="text-4xl font-bold text-white"
            style={{ }}
          >
            Certification, Membership, Partnership...
          </h1>
          <p className="text-white/70 text-sm mt-2 max-w-lg">
            Lorem Ipsum Dipsum We Are Different Locations Lorem Ipsum Dipsum We
            Are Different Locations...
          </p>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section) => {
        const query = (searchTerms[section.title] || "").toLowerCase();
        const filteredOrgs = orgs
          .filter((org) => section.orgSlugs.includes(org.slug))
          .filter((org) =>
            [org.name, org.country, org.desc]
              .join(" ")
              .toLowerCase()
              .includes(query),
          );

        return (
          <section
            key={section.title}
            className="py-14"
            style={{ background: section.bg }}
          >
            <div className="max-w-7xl mx-auto px-4">
              <h2
                className="text-3xl font-bold text-center mb-3"
                style={{
                  color: section.textColor,
                }}
              >
                {section.title}
              </h2>
              <div className="flex justify-center mb-8">
                <div className="relative w-full max-w-sm">
                  <input
                    value={searchTerms[section.title] || ""}
                    onChange={(event) =>
                      handleSearchChange(section.title, event.target.value)
                    }
                    type="text"
                    placeholder="Search by country or name"
                    className="w-full rounded-full border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {filteredOrgs.length > 0 ? (
                  filteredOrgs.map((org) => (
                    <div
                      key={org.name}
                      className="rounded-[30px] border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl"
                      style={{ borderColor: section.cardBorder }}
                    >
                      <div className="flex justify-center mb-5">
                        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#f5f8ff] shadow-sm text-3xl">
                          {org.logo}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {org.name}
                      </h3>
                      <div className="space-y-3 mb-6 text-sm text-gray-700">
                        <div className="flex items-center justify-between rounded-2xl bg-[#fff4f0] px-4 py-3">
                          <span className="text-xs text-gray-500">
                            Region :
                          </span>
                          <span className="rounded-full bg-[#ffddd4] px-3 py-1 text-xs font-semibold text-[#c13c2a]">
                            {org.country}
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded-2xl bg-[#fff4f0] px-4 py-3">
                          <span className="text-xs text-gray-500">
                            Type Of Institution :
                          </span>
                          <span className="rounded-full bg-[#ffddd4] px-3 py-1 text-xs font-semibold text-[#c13c2a]">
                            {org.type}
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded-2xl bg-[#fff4f0] px-4 py-3">
                          <span className="text-xs text-gray-500">
                            Membership Since :
                          </span>
                          <span className="rounded-full bg-[#ffddd4] px-3 py-1 text-xs font-semibold text-[#c13c2a]">
                            {org.from} AD
                          </span>
                        </div>
                      </div>
                      <Link
                        href="/certifications/european-commission"
                        className="inline-flex w-full items-center justify-center rounded-2xl bg-[#171c64] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#14164f]"
                      >
                        Explore More
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center text-sm text-gray-500">
                    No certifications match your search.
                  </div>
                )}
              </div>
              <div className="text-center">
                <button
                  className="px-7 py-3 rounded-full text-sm font-semibold transition-all"
                  style={{
                    border:
                      section.textColor === "white"
                        ? "1px solid rgba(255,255,255,0.4)"
                        : "1px solid var(--indigo-btn)",
                    color: section.textColor,
                    background:
                      section.bg === "white" ? "transparent" : "transparent",
                  }}
                >
                  View More
                </button>
              </div>
            </div>
          </section>
        );
      })}
      <DonationWidget />
      <CTABanner />
    </main>
  );
}
