"use client";
import { useState } from "react";
import Link from "next/link";
import CTABanner from "../../components/CTABanner";

const caseStudies = [
  {
    id: 1,
    title: "Case Study Heading",
    summary: "Lorem ipsum dipsum lorem ipsum dipsum Loreum ipsum dipsum lorem ..",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
  },
  {
    id: 2,
    title: "Case Study Heading",
    summary: "Lorem ipsum dipsum lorem ipsum dipsum Loreum ipsum dipsum lorem ..",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
  },
  {
    id: 3,
    title: "Case Study Heading",
    summary: "Lorem ipsum dipsum lorem ipsum dipsum Loreum ipsum dipsum lorem ..",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
  },
  {
    id: 4,
    title: "Case Study Heading",
    summary: "Lorem ipsum dipsum lorem ipsum dipsum Loreum ipsum dipsum lorem ..",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
  },
  {
    id: 5,
    title: "Case Study Heading",
    summary: "Lorem ipsum dipsum lorem ipsum dipsum Loreum ipsum dipsum lorem ..",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
  },
  {
    id: 6,
    title: "Case Study Heading",
    summary: "Lorem ipsum dipsum lorem ipsum dipsum Loreum ipsum dipsum lorem ..",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
  },
  {
    id: 7,
    title: "Community Outreach",
    summary: "How VIN reached 5000 families with essential supplies and healthcare education.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
  },
  {
    id: 8,
    title: "Women's Literacy",
    summary: "Impact report on our 12-month literacy program for rural women in Okhaldhunga.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
  },
  {
    id: 9,
    title: "Eco-Enterprises",
    summary: "Supporting sustainable livelihoods through organic farming and local market access.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  },
];

export default function CaseStudiesPage() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(caseStudies.length / itemsPerPage);
  const currentItems = caseStudies.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="text-[#1a1a2e]">
      {/* Hero */}
      <section className="relative flex items-end overflow-hidden full-width-bg h-[90vh] min-h-[600px] max-h-[800px]">
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
        <div className="relative z-10 mx-auto px-4 md:px-[60px] pb-10 w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Case Studies
          </h1>
          <p className="text-white/80 max-w-4xl text-lg">
            Empowering marginalized communities through sustainable development.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {currentItems.map((study) => (
              <div key={study.id} className="group flex flex-col border border-gray-200 shadow-sm hover:shadow-md rounded-lg overflow-hidden h-full transition-shadow bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[24px] font-[600] text-[#212121] mb-2 group-hover:text-[var(--blue)] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-[#4b5563] text-[16px] leading-relaxed mb-4 line-clamp-3">
                    {study.summary}
                  </p>
                  <Link 
                    href={`/media/case-studies/${study.id}`}
                    className="text-[var(--blue)] font-[600] flex items-center gap-2 hover:gap-3 transition-all mt-auto"
                  >
                    Read Case Study <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-24 flex items-center justify-start gap-4">
            <button 
              onClick={() => goToPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`w-10 h-10 flex items-center justify-center transition-colors ${currentPage === 1 ? 'text-gray-200 cursor-not-allowed' : 'text-gray-400 hover:text-[var(--blue)]'}`}
            >
              <span className="text-2xl">←</span>
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button 
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full border text-sm font-medium transition-all ${
                    currentPage === page 
                      ? "bg-[var(--blue)] text-white border-[var(--blue)]" 
                      : "border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button 
              onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 flex items-center justify-center transition-colors ${currentPage === totalPages ? 'text-gray-200 cursor-not-allowed' : 'text-gray-400 hover:text-[var(--blue)]'}`}
            >
              <span className="text-2xl">→</span>
            </button>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
