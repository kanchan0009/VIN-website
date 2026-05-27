"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Play } from "lucide-react";
import DonationWidget from "../components/DonationWidget";
import CTABanner from "../components/CTABanner";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { topicContent } from "../data/programData";

const mediaItems = [
  {
    type: "video",
    src: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=800&q=80",
    aspect: "aspect-[4/5]",
    gridClass: "col-start-2 col-span-2",
  },
  {
    type: "video",
    src: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=800&q=80",
    aspect: "aspect-[4/5]",
    gridClass: "col-span-2",
  },
  {
    type: "video",
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    aspect: "aspect-[4/5]",
    gridClass: "col-span-3",
  },
  {
    type: "video",
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    aspect: "aspect-video",
    gridClass: "col-span-3",
  },
  {
    type: "video",
    src: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=800&q=80",
    aspect: "aspect-video",
    gridClass: "col-start-2 col-span-2",
  },
  {
    type: "video",
    src: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=800&q=80",
    aspect: "aspect-video",
    gridClass: "col-span-2",
  },
  {
    type: "video",
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    aspect: "aspect-[4/5]",
    gridClass: "col-span-3",
  },
  {
    type: "video",
    src: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=800&q=80",
    aspect: "aspect-[4/5]",
    gridClass: "col-span-3",
  },
];

function ProgramGalleryContent() {
  const searchParams = useSearchParams();
  const topic = searchParams.get('topic') || 'default';
  const activityParam = searchParams.get('activity');
  const content = topicContent[topic] || topicContent['default'];
  
  const displayTitle = activityParam ? decodeURIComponent(activityParam) : content.title;
  
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Videos");

  const options = ["All", "Videos", "Images"];

  const topItems = mediaItems.slice(0, 3);
  const midItems = mediaItems.slice(3, 6);
  const botItems = mediaItems.slice(6, 8);

  return (
    <main className="bg-white min-h-screen">
      {/* Title Section */}
      <section className="pt-8 md:pt-16 pb-4 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-xl md:text-3xl md:text-5xl font-extrabold text-[#1a1a1a] leading-tight mb-4 md:mb-8">
            {displayTitle}<br />Gallery
          </h1>
          
          {/* Filter Dropdown */}
          <div className="flex justify-center mb-5 md:mb-10 relative">
            <div className="relative inline-block text-left">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-48 px-4 py-2 border border-gray-300 rounded text-sm text-gray-600 bg-white hover:bg-gray-50 transition-colors"
              >
                <span>{selected}</span>
                <ChevronDown size={16} className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>

              {isOpen && (
                <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-50 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200">
                  {options.map((option) => (
                    <Link
                      key={option}
                      href={option === "Images" ? `/program-image?topic=${topic}` : (option === "Videos" ? `/program-gallery?topic=${topic}` : "#")}
                      onClick={() => {
                        setSelected(option);
                        setIsOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${
                        selected === option ? "text-[var(--blue)] font-semibold bg-gray-50" : "text-gray-600"
                      }`}
                    >
                      {option}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Media Grid Section */}
      <div className="flex flex-col gap-6 md:gap-10 pb-10 md:pb-24">
        {/* Top Row - Slightly Smaller */}
        <section className="p-0 !px-0">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
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
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Play size={32} fill="currentColor" className="text-gray-900 ml-1" />
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Middle Row - Max Global Width */}
        <section className="p-0 !px-0">
          <div className=" max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Play size={32} fill="currentColor" className="text-gray-900 ml-1" />
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Row - Slightly Smaller */}
        <section className="p-0 !px-0">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
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
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Play size={32} fill="currentColor" className="text-gray-900 ml-1" />
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <DonationWidget />
      <CTABanner />
    </main>
  );
}

export default function ProgramGalleryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ProgramGalleryContent />
    </Suspense>
  );
}

