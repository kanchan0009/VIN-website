"use client";
import Link from "next/link";

interface Opportunity {
  id: string;
  title: string;
  image: string;
}

const opportunities: Opportunity[] = [
  {
    id: "children-development",
    title: "Children Development",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80",
  },
  {
    id: "gender-equality",
    title: "Gender Equality",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
  },
  {
    id: "teaching-program",
    title: "Teaching Program",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
  },
  {
    id: "public-health",
    title: "Public Health",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  },
  {
    id: "medical",
    title: "Medical",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
  },
  {
    id: "youth-empowerment",
    title: "Youth Empowerment",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
  },
  {
    id: "environment",
    title: "Environment",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80",
  },
  {
    id: "disaster-risk",
    title: "Disaster Risk Management",
    image:
      "https://images.unsplash.com/photo-1569427759983-6b3c4a9cba0c?w=600&q=80",
  },
  {
    id: "teacher-development",
    title: "Teacher Development",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
  },
  {
    id: "admin-management",
    title: "Admin & Management",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
];

function OpportunityCard({ item }: { item: Opportunity }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col group hover:shadow-md transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-[16/9.5] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2.5">
        <h3 className="text-[20px] font-[600] text-[#1D1E20] font-montserrat">
          {item.title}
        </h3>
        <p className="text-[13px] text-[#4A4A4A] font-[500] leading-snug">
          Loreum Ipsum Dipsum We Are Different Locations Loreum Ipsum Dipsum We
        </p>

        <div className="pt-1.5">
          <Link
            href="/volunteer/volunteer-details"
            className="bg-[#1a237e] hover:bg-[#283593] text-white px-5 py-2 rounded-md text-[14px] font-[650] transition-colors duration-200 inline-block shadow-sm"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function VolunteerOpportunities() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <h2 className="text-center text-3xl lg:text-[38px] font-[600] text-[#1D1E20] mb-12 font-montserrat tracking-tight">
          Volunteer Opportunities
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {opportunities.map((item) => (
            <OpportunityCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

