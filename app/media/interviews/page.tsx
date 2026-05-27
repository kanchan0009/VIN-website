"use client";
import { useState } from "react";
import Link from "next/link";
import CTABanner from "../../components/CTABanner";
import DonationWidget from "../../components/DonationWidget";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const mediaItems = [
  {
    type: "video",
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    aspect: "aspect-[4/5]",
  },
  {
    type: "video",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    aspect: "aspect-[4/5]",
  },
  {
    type: "video",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    aspect: "aspect-video",
  },
  {
    type: "video",
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    aspect: "aspect-video",
  },
  {
    type: "video",
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    aspect: "aspect-[4/5]",
  },
  {
    type: "video",
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
    aspect: "aspect-[4/5]",
  },
  // Additional items for pagination
  {
    type: "video",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    aspect: "aspect-[4/5]",
  },
  {
    type: "video",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    aspect: "aspect-[4/5]",
  },
  {
    type: "video",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    aspect: "aspect-video",
  },
  {
    type: "video",
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80",
    aspect: "aspect-video",
  },
  {
    type: "video",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    aspect: "aspect-[4/5]",
  },
  {
    type: "video",
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    aspect: "aspect-[4/5]",
  },
];

export default function InterviewsPage() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(mediaItems.length / itemsPerPage);
  const currentItems = mediaItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  
  const topItems = currentItems.slice(0, 2);
  const midItems = currentItems.slice(2, 4);
  const botItems = currentItems.slice(4, 6);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="text-[#1a1a2e]">
      {/* Hero */}
      <section className="relative flex items-end overflow-hidden full-width-bg h-[75vh] min-h-[600px] max-h-[800px]">
        <img
          src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1600&q=80"
          alt="Interviews"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(20,10,70,0.88) 50%, rgba(0,0,0,0.2) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto px-4 md:px-[60px] pb-5 md:pb-10 w-full">
          <h1 className="text-3xl md:text-5xl md:text-6xl font-bold text-white">
            Interviews
          </h1>
          <p className="text-white/80 max-w-4xl text-lg mt-4">
            Empowering marginalized communities through sustainable development.
          </p>
        </div>
      </section>

      {/* Media Grid Section - EXACT CLONE of program-gallery */}
      <div className="flex flex-col gap-6 md:gap-10 pb-10 md:pb-24 bg-white pt-5 md:pt-10">
        {/* Top Row - Slightly Smaller */}
        <section className="p-0 !px-0">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 gap-6 md:gap-10">
              {topItems.map((item, i) => (
                <div 
                  key={i} 
                  className={`relative ${item.aspect}  overflow-hidden group cursor-pointer shadow-sm`}
                >
                  <img 
                    src={item.src} 
                    alt={`Media ${i + 1}`} 
                    className="w-full h-full object-cover  group-hover: transition-all duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 drop-shadow-xl">
                      <Play size={24} fill="currentColor" className="text-gray-900 ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Middle Row - Max Global Width */}
        <section className="p-0 !px-0">
          <div className=" mx-auto px-6">
            <div className="grid grid-cols-2 gap-6 md:gap-5">
              {midItems.map((item, i) => (
                <div 
                  key={i} 
                  className={`relative ${item.aspect}  overflow-hidden group cursor-pointer shadow-sm`}
                >
                  <img 
                    src={item.src} 
                    alt={`Media ${i + 3}`} 
                    className="w-full h-full object-cover  group-hover: transition-all duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 drop-shadow-xl">
                      <Play size={24} fill="currentColor" className="text-gray-900 ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Row - Slightly Smaller */}
        <section className="p-0 !px-0">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 gap-6 md:gap-10">
              {botItems.map((item, i) => (
                <div 
                  key={i} 
                  className={`relative ${item.aspect} overflow-hidden group cursor-pointer shadow-sm`}
                >
                  <img 
                    src={item.src} 
                    alt={`Media ${i + 5}`} 
                    className="w-full h-full object-cover group-hover: transition-all duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 drop-shadow-xl">
                      <Play size={24} fill="currentColor" className="text-gray-900 ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pagination */}
        <div className="mt-10 md:mt-24 px-4 md:px-[60px] flex items-center justify-start gap-4">
          <button 
            onClick={() => goToPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`w-10 h-10 flex items-center justify-center transition-colors ${currentPage === 1 ? 'text-gray-200 cursor-not-allowed' : 'text-gray-400 hover:text-[var(--blue)]'}`}
          >
            <ChevronLeft size={24} />
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
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <DonationWidget />
      <CTABanner />
    </main>
  );
}
