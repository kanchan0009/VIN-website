"use client";

import { useState } from "react";
import CTABanner from "../../components/CTABanner";
import MediaTabs from "../../components/MediaTabs";
import DonationWidget from "@/app/components/DonationWidget";

const openings = [
  {
    id: 1,
    title: "Sales Executive / Senior Sales Executive",
    vacancy: "1",
    type: "Full Time",
    location: "Sundhara, Kathmandu",
    salary: "Negotiable",
    deadline: "Jan 12, 2025",
    description: [
      "Drive secondary sales generation across the assigned territory",
      "Manage and strengthen relationships with dealers",
      "Ensure product availability, visibility, and execution of sales plans",
      "Use SFA tools to track daily sales, orders, and market activities",
      "Conduct regular market visits and share competitor and market insights"
    ],
    requirements: [
      "Graduate with min 3 years of experience in field sales, preferably in building materials or allied industries",
      "Hands-on experience in secondary sales generation and dealer/retailer management",
      "Familiarity with using SFA/CRM tools for sales tracking and reporting",
      "Strong communication, negotiation, and relationship-management skills",
      "Willingness to travel extensively within the assigned territory and work in the field"
    ],
    skills: [
      "Bachelor's degree in Business, Marketing, or a related field.",
      "Proven experience in business development, sales, or a related role within the electrical or cable industry.",
      "Strong understanding of electrical wires and cable products, market dynamics, and industry regulations.",
      "Excellent communication and interpersonal skills to establish and maintain client relationships.",
      "Strategic thinking and problem-solving abilities to drive business growth.",
      "Ability to work independently and collaboratively within a team.",
      "Results-oriented with a proven track record of meeting or exceeding sales targets."
    ]
  },
  {
    id: 2,
    title: "Program Coordinator - Women's Empowerment",
    vacancy: "1",
    type: "Full Time",
    location: "Okhaldhunga District",
    salary: "Negotiable",
    deadline: "Feb 05, 2025",
    description: [
      "Lead and coordinate women's empowerment programs in rural communities",
      "Develop training modules for entrepreneurship and financial literacy",
      "Manage field staff and monitor program outcomes",
      "Collaborate with local government bodies and stakeholders"
    ],
    requirements: [
      "Master's in Social Work, Development Studies, or related field",
      "3+ years experience in NGO/development sector",
      "Fluent in Nepali and English",
      "Strong leadership and facilitation skills"
    ],
    skills: [
      "Project management and coordination",
      "Training and capacity building",
      "Report writing and documentation",
      "Community mobilization"
    ]
  }
];

export default function CareersPage() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <main className="font-montserrat">
      {/* Hero */}
      <section className="relative h-[550px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
          alt="Careers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(20,10,70,0.85) 40%, rgba(0,0,0,0.2) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <h1 className="text-5xl lg:text-6xl font-[800] text-white">Careers</h1>
          <p className="text-xl text-white/90 mt-5 max-w-3xl font-[400] leading-relaxed">
            Join our mission to empower marginalized communities in Nepal. 
            We offer meaningful careers where your work creates lasting impact.
          </p>
        </div>
      </section>

      <MediaTabs />

      {/* Open Positions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl lg:text-[42px] font-[600] text-[#1D1E20] text-center mb-16">
            Open Positions
          </h2>

          <div className="space-y-4">
            {openings.map((job) => (
              <div key={job.id} className="border border-gray-200 overflow-hidden transition-all duration-300">
                {/* Accordion Header */}
                <button
                  onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}
                  className={`w-full flex items-center justify-between px-8 py-3.5 transition-all duration-300 ${
                    expandedId === job.id 
                      ? "bg-[var(--blue)] text-white" 
                      : "bg-white text-[#1D1E20] hover:bg-gray-50"
                  }`}
                >
                  <span className="text-xl lg:text-xl font-[600]">{job.title}</span>
                  <div className={`transition-transform duration-300 ${expandedId === job.id ? "rotate-180" : ""}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </div>
                </button>

                {/* Accordion Content */}
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    expandedId === job.id ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-8 lg:p-12 bg-white space-y-8">
                    {/* Info Table */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 max-w-2xl">
                      {[
                        { label: "No. of Vacancy", value: job.vacancy },
                        { label: "Employment Type", value: job.type },
                        { label: "Job Location", value: job.location },
                        { label: "Offered Salary", value: job.salary },
                        { label: "Apply Before (Deadline)", value: job.deadline },
                      ].map((info, idx) => (
                        <div key={idx} className="flex gap-4 text-[15px]">
                          <span className="w-48 font-[600] text-[#4A4A4A]">{info.label}</span>
                          <span className="font-[600] text-[#4A4A4A] flex items-center">
                            <span className="mr-4">:</span>
                            {info.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Job Details Lists */}
                    <div className="space-y-10">
                      {/* Job Description */}
                      <div className="space-y-2">
                        <h4 className="text-[18px] font-[700] text-[var(--blue)]">Job Description</h4>
                        <ul className="space-y-2 pl-2">
                          {job.description.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-[15px] text-[#4A4A4A] font-[500]">
                              <span className="mt-2 w-1.5 h-1.5 bg-[#4A4A4A] rounded-full shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Job Requirement */}
                      <div className="space-y-2">
                        <h4 className="text-[18px] font-[700] text-[var(--blue)]">Job Requirement</h4>
                        <ul className="space-y-2 pl-2">
                          {job.requirements.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-[15px] text-[#4A4A4A] font-[500]">
                              <span className="mt-2 w-1.5 h-1.5 bg-[#4A4A4A] rounded-full shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Qualifications & Skills */}
                      <div className="space-y-2">
                        <h4 className="text-[18px] font-[700] text-[var(--blue)]">Qualifications & Skills</h4>
                        <ul className="space-y-2 pl-2">
                          {job.skills.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-[15px] text-[#4A4A4A] font-[500]">
                              <span className="mt-2 w-1.5 h-1.5 bg-[#4A4A4A] rounded-full shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <DonationWidget/>

      <CTABanner />
    </main>
  );
}


