"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import CTABanner from "../components/CTABanner";
import DonationWidget from "../components/DonationWidget";

const orgs = [
  {
    name: "European Commission",
    slug: "european-commission",
    region: "Europe",
    typeOfInstitution: "Government",
    typeOfCertification: "ESC humanitarian Aid quality level",
    typeOfMembership: "Non-Governmental Org",
    membershipSince: "2014 AD",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/European_Commission.svg/1200px-European_Commission.svg.png",
    desc: "Recognised for community development excellence and transparent governance across EU-partner nations.",
  },
  {
    name: "2024 Top Rated NGO",
    slug: "top-rated-ngo",
    region: "Global",
    typeOfInstitution: "Non-Profit",
    typeOfCertification: "Gold Tier Excellence",
    typeOfMembership: "International Member",
    membershipSince: "2018 AD",
    logo: "https://greatnonprofits.org/images/top-rated-awards/top-rated-award-2024.png",
    desc: "Awarded Top-Rated NGO status for outstanding volunteer engagement and measurable community impact.",
  },
  {
    name: "Alliance of Voluntary Service Organizations",
    slug: "alliance",
    region: "Europe",
    typeOfInstitution: "Network",
    typeOfCertification: "Strategic Partner",
    typeOfMembership: "Full Member",
    membershipSince: "2015 AD",
    logo: "https://alliance-network.eu/wp-content/uploads/2021/04/Alliance-Logo-Blue.png",
    desc: "Member of the network of European Voluntary Service Organisations.",
  },
];

const sections = [
  {
    title: "Certified by",
    bg: "bg-[#0F0D40]",
    textColor: "text-white",
    cardBg: "bg-white",
    type: "certification",
    orgSlugs: ["european-commission", "top-rated-ngo", "alliance"],
  },
  {
    title: "Membership",
    bg: "bg-[#E8F4FD]",
    textColor: "text-[#0F0D40]",
    cardBg: "bg-white",
    type: "membership",
    orgSlugs: ["european-commission", "top-rated-ngo", "alliance"],
  },
  {
    title: "Partnership",
    bg: "bg-[#0F0D40]",
    textColor: "text-white",
    cardBg: "bg-white",
    type: "membership", // Mockup shows membership-style details for Partnership
    orgSlugs: ["european-commission", "top-rated-ngo", "alliance"],
  },
  {
    title: "Friends of VIN",
    bg: "bg-[#E8F4FD]",
    textColor: "text-[#0F0D40]",
    cardBg: "bg-white",
    type: "membership",
    orgSlugs: ["european-commission", "top-rated-ngo", "alliance"],
  },
  {
    title: "Recognitions",
    bg: "bg-[#0F0D40]",
    textColor: "text-white",
    cardBg: "bg-white",
    type: "membership",
    orgSlugs: ["european-commission", "top-rated-ngo", "alliance"],
  },
];

export default function CertificationsPage() {
  const [searchTerms, setSearchTerms] = useState<Record<string, string>>({});

  const handleSearchChange = (sectionTitle: string, value: string) => {
    setSearchTerms((prev) => ({ ...prev, [sectionTitle]: value }));
  };

  return (
    <main className="font-montserrat">
      {/* Hero Section */}
      <section className="relative h-[670px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600&q=80"
          alt="Certifications"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-12 w-full">
          <h1 className="text-5xl font-[800] text-white leading-tight">
            Certification, Membership,& Partnership
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-xl font-[400] leading-tight">
            We maintain the highest global standards in volunteering and community development through rigorous certifications and strategic partnerships.
          </p>
        </div>
      </section>

      {/* Dynamic Sections */}
      {sections.map((section, sIdx) => {
        const query = (searchTerms[section.title] || "").toLowerCase();
        const filteredOrgs = orgs
          .filter((org) => section.orgSlugs.includes(org.slug))
          .filter((org) =>
            [org.name, org.region, org.desc]
              .join(" ")
              .toLowerCase()
              .includes(query)
          );

        return (
          <section key={sIdx} className={`${section.bg} py-24 relative overflow-hidden`}>
            <div className="max-w-7xl mx-auto px-4">
              {/* Header */}
              <div className="text-center mb-16">
                <h2 className={`text-[42px] font-[700] ${section.textColor} mb-8`}>
                  {section.title}
                </h2>
                
                {/* Search Box */}
                <div className="relative max-w-[300px] mx-auto">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Search className="text-gray-400" size={18} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search Country"
                    className="w-full bg-white border-none py-3 pl-12 pr-4 rounded-md shadow-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#f39c12] transition-all"
                    value={searchTerms[section.title] || ""}
                    onChange={(e) => handleSearchChange(section.title, e.target.value)}
                  />
                </div>
              </div>

              {/* Cards Carousel Container */}
              <div className="relative px-12">
                {/* Navigation Arrows */}
                <button className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-all z-10">
                  <ChevronLeft className="text-[#0F0D40]" size={20} />
                </button>
                <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-all z-10">
                  <ChevronRight className="text-[#0F0D40]" size={20} />
                </button>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {filteredOrgs.map((org, idx) => (
                    <div 
                      key={idx} 
                      className={`${section.cardBg} rounded-[0.5rem] p-8  flex flex-col h-[500px] border border-transparent hover:border-[#f39c12]/20 transition-all group`}
                    >
                      {/* Logo Container */}
                      <div className="h-40 flex items-center justify-center mb-8 p-4">
                        <img 
                          src={org.logo} 
                          alt={org.name} 
                          className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <h4 className="text-[var(--blue)] text-xl font-[600] mb-2 leading-tight min-h-[2.5rem]">
                          {org.name}
                        </h4>

                        <div className="space-y-4">
                          <div className="flex items-center gap-3 text-[10px] font-bold">
                            <span className="text-gray-400  tracking-wider w-32">Region :</span>
                            <span className="bg-[#E2462F1F] text-[#E2462F] px-3 py-1 rounded-full ">
                              {org.region}
                            </span>
                          </div>

                          {section.type === "certification" ? (
                            <>
                              <div className="flex items-center gap-3 text-[10px] font-bold">
                                <span className="text-gray-400  tracking-wider w-32">Type of Institution :</span>
                                <span className="bg-[#E2462F1F] text-[#E2462F] px-3 py-1 rounded-full ">
                                  {org.typeOfInstitution}
                                </span>
                              </div>
                              <div className="flex items-center gap-3 text-[10px] font-bold">
                                <span className="text-gray-400  tracking-wider w-32">Type of Certification :</span>
                                <span className="bg-[#E2462F1F] text-[#E2462F] px-3 py-1 rounded-full  leading-tight">
                                  {org.typeOfCertification}
                                </span>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex items-center gap-3 text-[10px] font-bold">
                                <span className="text-gray-400  tracking-wider w-32">Type of Institution :</span>
                                <span className="bg-[#E2462F1F] text-[#E2462F] px-3 py-1 rounded-full ">
                                  {org.typeOfMembership}
                                </span>
                              </div>
                              <div className="flex items-center gap-3 text-[10px] font-bold">
                                <span className="text-gray-400  tracking-wider w-32">Membership Since :</span>
                                <span className="bg-[#E2462F1F] text-[#E2462F] px-3 py-1 rounded-full ">
                                  {org.membershipSince}
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Action */}
                      <Link 
                        href="/certifications/european-commission"
                        className="mt-10 w-40 mx-auto bg-[var(--blue)] hover:bg-[#1a1563] text-white py-3 rounded-md font-bold text-sm transition-all shadow-lg active:scale-95 flex items-center justify-center"
                      >
                        Explore More
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* View More Button */}
              <div className="text-center mt-16">
                <button className="bg-white text-[#0F0D40] px-10 py-3 rounded-md font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 border border-gray-100">
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

