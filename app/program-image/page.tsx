"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowLeft, Maximize2, X } from "lucide-react";
import CTABanner from "../components/CTABanner";

const photos = [
  // Row 1
  { id: 1, url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800", span: "col-span-2" },
  { id: 2, url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800", span: "col-span-2" },
  { id: 3, url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800", span: "col-span-2" },
  // Row 2
  { id: 4, url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=800", span: "col-span-2" },
  { id: 5, url: "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=800", span: "col-span-2" },
  { id: 6, url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800", span: "col-span-2" },
  // Row 3 (2 items)
  { id: 7, url: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=1200&q=80", span: "col-span-3" },
  { id: 8, url: "https://images.unsplash.com/photo-1590233465423-40844bb147d3?w=1200&q=80", span: "col-span-3" },
  // Row 4
  { id: 9, url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80", span: "col-span-2" },
  { id: 10, url: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=800&q=80", span: "col-span-2" },
  { id: 11, url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80", span: "col-span-2" },
  // Row 5
  { id: 12, url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800", span: "col-span-2" },
  { id: 13, url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800", span: "col-span-2" },
  { id: 14, url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800", span: "col-span-2" },
];

export default function ProgramImagePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Images"); // Updated to "Images" as per design
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const options = [ "Videos", "Images"];

  return (
    <main className="bg-white min-h-screen">
      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={lightboxImage} 
            alt="Lightbox" 
            className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
          />
        </div>
      )}

      {/* Header Section */}
      <section className="pt-16 pb-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-[44px] font-[900] text-[#1a1a1a] leading-tight mb-8">
            Women&apos;s Trafficking Prevention<br />Gallery
          </h1>
          
          {/* Filter Dropdown */}
          <div className="flex justify-center mb-12">
            <div className="relative inline-block text-left">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-48 px-4 py-2 border border-gray-400 rounded-sm text-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="flex-1 text-center font-medium">{selected}</span>
                <ChevronDown size={14} className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>

              {isOpen && (
                <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded shadow-xl z-50 overflow-hidden">
                  {options.map((option) => (
                    <Link
                      key={option}
                      href={option === "Images" ? "/program-image" : (option === "Videos" ? "/program-gallery" : "#")}
                      onClick={() => setIsOpen(false)}
                      className={`block w-full text-center px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${
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

      {/* Grid Section */}
      <section className="pb-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-6 gap-4 md:gap-6">
            {photos.map((photo) => (
              <div 
                key={photo.id} 
                className={`${photo.span} relative aspect-square overflow-hidden cursor-pointer group rounded-sm`}
                style={{ 
                   aspectRatio: photo.span === "col-span-3" ? "16/9" : "1/1" 
                }}
                onClick={() => setLightboxImage(photo.url)}
              >
                <img 
                  src={photo.url} 
                  alt="Gallery" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
