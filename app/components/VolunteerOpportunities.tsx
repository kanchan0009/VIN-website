"use client";
import Link from "next/link";

interface Opportunity {
  id: string;
  title: string;
  images: string[];
}

const opportunities: Opportunity[] = [
  {
    id: "children-development",
    title: "Children Development",
    images: [
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
    ],
  },
  {
    id: "gender-equality",
    title: "Gender Equality",
    images: [
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80",
    ],
  },
  {
    id: "teaching-program",
    title: "Teaching Program",
    images: [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
    ],
  },
  {
    id: "public-health",
    title: "Public Health",
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
    ],
  },
  {
    id: "medical",
    title: "Medical",
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80",
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
    ],
  },
  {
    id: "youth-empowerment",
    title: "Youth Empowerment",
    images: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&q=80",
    ],
  },
  {
    id: "environment",
    title: "Environment",
    images: [
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&q=80",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80",
    ],
  },
  {
    id: "disaster-risk",
    title: "Disaster Risk Management",
    images: [
      "https://images.unsplash.com/photo-1569427759983-6b3c4a9cba0c?w=400&q=80",
      "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=400&q=80",
    ],
  },
  {
    id: "teacher-development",
    title: "Teacher Development",
    images: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80",
    ],
  },
  {
    id: "admin-management",
    title: "Admin & Management",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80",
    ],
  },
];

function OpportunityCard({ item }: { item: Opportunity }) {
  return (
    <div className="bg-[#ddeeff] rounded-xl p-5 md:p-6 flex flex-col gap-3 md:gap-4 border-l-3 border-black">
      {/* Title */}
      <h3
        className="text-lg md:text-xl font-bold text-[#111]"
        
      >
        {item.title}
      </h3>

      {/* Two images side by side */}
      <div className="flex gap-2 md:gap-3">
        {item.images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${item.title} ${i + 1}`}
            className="flex-1 w-0 h-32 md:h-48 object-cover rounded-lg"
          />
        ))}
      </div>

      {/* Explore More button */}
      <div>
        <Link
          href="/certifications/european-commission"
          className="bg-[#1a237e] hover:bg-[#283593] text-white border-none rounded-md px-5 py-2 text-sm font-semibold transition-colors duration-200 inline-block"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Explore More
        </Link>
      </div>
    </div>
  );
}

export default function VolunteerOpportunities() {
  return (
    <section
      className="min-h-screen bg-white py-8 md:py-12"
      
    >
      {/* Outer bordered container */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Title */}
        <h1
          className="text-center text-xl md:text-4xl font-bold text-[#111] mb-8 md:mb-12"
          
        >
          Volunteer Opportunities
        </h1>

        {/* Responsive grid: 1 col mobile, 2 col tablet+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {opportunities.map((item) => (
            <OpportunityCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
