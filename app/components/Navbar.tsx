"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone, Globe, Menu, X } from "lucide-react";

const programs = [
  { label: "Women's Empowerment", href: "/programs/womens-empowerment" },
  { label: "Child Development", href: "/programs/child-development" },
  { label: "Youth Empowerment", href: "/programs/youth-empowerment" },
  { label: "Public Health & Medical Care", href: "/programs/public-health" },
  { label: "Environmental Conservation", href: "/programs/environment" },
  { label: "Disaster Risk Reduction", href: "/programs/disaster-risk" },
];

const media = [
  { label: "Gallery", href: "/gallery" },
  { label: "Articles", href: "/media/articles" },
  { label: "News Update", href: "/media/news" },
  { label: "Careers", href: "/media/careers" },
  { label: "Success Stories", href: "/media/success-stories" },
  { label: "Case Studies", href: "/media/case-studies" },
  { label: "Interviews", href: "/media/interviews" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm font-montserrat bg-white">
      {/* Top bar - Hidden on mobile */}
      <div className="hidden lg:block bg-[#F1F6FF] text-[#353535] text-[16px] py-1.5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex gap-6 font-[500]">
            <Link href="/volunteer" className="hover:text-[#221C84] transition-colors">Volunteer</Link>
            <Link href="/partner" className="hover:text-[#221C84] transition-colors">Partner with Us</Link>
            <Link href="/sponsor" className="hover:text-[#221C84] transition-colors">Sponsor a Child</Link>
            <Link href="/faq" className="hover:text-[#221C84] transition-colors">FAQ</Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-[#221C84] transition-colors">
              <Globe size={13} />
              <span className="font-[600]">NP</span>
              <ChevronDown size={11} />
            </div>
            <div className="flex items-center gap-1.5">
              <Phone size={13} className="text-[#221C84]" />
              <span className="font-[600]">+977 (1) 4362560</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between h-[75px] lg:h-[85px]">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#221C84] opacity-10 rounded-full scale-110"></div>
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#221C84]">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="1" />
                <path d="M15 30 C35 30 65 30 85 30 M15 70 C35 70 65 70 85 70" stroke="currentColor" strokeWidth="1" fill="none" />
                <path d="M30 15 C30 35 30 65 30 85 M70 15 C70 35 70 65 70 85" stroke="currentColor" strokeWidth="1" fill="none" />
                <path d="M40 50 C40 40 60 40 60 50 C60 60 40 60 40 50" fill="currentColor" opacity="0.8" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] lg:text-[11px] font-[700] text-[#00AEEF] leading-none mb-0.5 uppercase tracking-wider">
                Empowering Marginalized Communities
              </span>
              <span className="text-[14px] lg:text-[18px] font-[800] text-[#221C84] leading-tight flex items-center gap-1">
                स्वयंसेवी अभियान नेपाल
              </span>
              <span className="text-[11px] lg:text-[13px] font-[700] text-[#221C84] opacity-80 leading-tight">
                Volunteers Initiative Nepal
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-6 px-4">
            <Link href="/" className="text-[15px] font-[600] text-[#4A4A4A] hover:text-[#221C84] transition-colors">Home</Link>
            <Link href="/about" className="text-[15px] font-[600] text-[#4A4A4A] hover:text-[#221C84] transition-colors whitespace-nowrap">About Us</Link>
            
            {/* Programs Dropdown */}
            <div 
              className="relative h-full flex items-center group"
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <button className="text-[15px] font-[600] text-[#4A4A4A] group-hover:text-[#221C84] transition-colors flex items-center gap-1 py-4">
                Programs <ChevronDown size={14} className={`transition-transform duration-300 ${programsOpen ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`absolute top-full left-0 w-72 bg-white shadow-2xl border-t-2 border-[#221C84] py-3 transition-all duration-300 ${programsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}>
                {programs.map((prog) => (
                  <Link 
                    key={prog.href} 
                    href={prog.href}
                    className="block px-6 py-3 text-sm text-[#4A4A4A] font-[500] hover:bg-[#F1F6FF] hover:text-[#221C84] transition-all"
                  >
                    {prog.label}
                  </Link>
                ))}
              </div>
            </div>

            <div 
              className="relative h-full flex items-center group"
              onMouseEnter={() => setMediaOpen(true)}
              onMouseLeave={() => setMediaOpen(false)}
            >
              <button className="text-[15px] font-[600] text-[#4A4A4A] group-hover:text-[#221C84] transition-colors flex items-center gap-1 py-4">
                Media <ChevronDown size={14} className={`transition-transform duration-300 ${mediaOpen ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`absolute top-full left-0 w-64 bg-white shadow-2xl border-t-2 border-[#221C84] py-3 transition-all duration-300 ${mediaOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}>
                {media.map((m) => (
                  <Link 
                    key={m.href} 
                    href={m.href}
                    className="block px-6 py-3 text-sm text-[#4A4A4A] font-[500] hover:bg-[#F1F6FF] hover:text-[#221C84] transition-all"
                  >
                    {m.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="text-[15px] font-[600] text-[#4A4A4A] hover:text-[#221C84] transition-colors whitespace-nowrap">Contact Us</Link>
            <Link href="/blogs" className="text-[15px] font-[600] text-[#4A4A4A] hover:text-[#221C84] transition-colors">Blogs</Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 lg:gap-4">
            <Link
              href="/donate"
              className="bg-[#2A6F7C] text-white px-5 lg:px-9 py-2.5 lg:py-3.5 rounded-[4px] font-[700] text-[13px] lg:text-[15px] hover:bg-[#1e525c] transition-all shadow-md active:scale-95 whitespace-nowrap"
            >
              Donate
            </Link>
            <Link
              href="/volunteer"
              className="hidden sm:flex border-2 border-[#221C84] text-[#221C84] px-5 lg:px-9 py-2 lg:py-3 rounded-[4px] font-[700] text-[13px] lg:text-[15px] hover:bg-[#221C84] hover:text-white transition-all active:scale-95 whitespace-nowrap"
            >
              Volunteer
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="xl:hidden w-10 h-10 flex items-center justify-center text-[#221C84] hover:bg-gray-50 rounded-lg transition-colors ml-1"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu Overlay */}
        <div className={`xl:hidden fixed inset-0 top-[75px] bg-white z-[100] transition-transform duration-500 transform ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="h-full overflow-y-auto px-6 py-8 flex flex-col gap-2">
            <Link href="/" onClick={() => setMobileOpen(false)} className="text-lg font-[700] text-[#1D1E20] py-4 border-b border-gray-50">Home</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="text-lg font-[700] text-[#1D1E20] py-4 border-b border-gray-50">About Us</Link>
            
            <div className="border-b border-gray-50">
              <button 
                onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                className="w-full flex items-center justify-between text-lg font-[700] text-[#1D1E20] py-4"
              >
                Programs <ChevronDown size={20} className={`transition-transform duration-300 ${mobileProgramsOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileProgramsOpen ? "max-h-[500px] mb-4" : "max-h-0"}`}>
                <div className="flex flex-col gap-3 pl-4">
                  {programs.map((prog) => (
                    <Link 
                      key={prog.href} 
                      href={prog.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-[#555] font-[500] text-base py-1 hover:text-[#221C84]"
                    >
                      {prog.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-b border-gray-50">
              <button 
                onClick={() => setMobileMediaOpen(!mobileMediaOpen)}
                className="w-full flex items-center justify-between text-lg font-[700] text-[#1D1E20] py-4"
              >
                Media <ChevronDown size={20} className={`transition-transform duration-300 ${mobileMediaOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileMediaOpen ? "max-h-[500px] mb-4" : "max-h-0"}`}>
                <div className="flex flex-col gap-3 pl-4">
                  {media.map((m) => (
                    <Link 
                      key={m.href} 
                      href={m.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-[#555] font-[500] text-base py-1 hover:text-[#221C84]"
                    >
                      {m.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-lg font-[700] text-[#1D1E20] py-4 border-b border-gray-50">Contact Us</Link>
            <Link href="/blogs" onClick={() => setMobileOpen(false)} className="text-lg font-[700] text-[#1D1E20] py-4 border-b border-gray-50">Blogs</Link>

            <div className="grid grid-cols-2 gap-4 mt-8 pb-12">
              <Link
                href="/donate"
                onClick={() => setMobileOpen(false)}
                className="bg-[#2A6F7C] text-white py-4 rounded-xl font-[700] text-center shadow-lg"
              >
                Donate
              </Link>
              <Link
                href="/volunteer"
                onClick={() => setMobileOpen(false)}
                className="border-2 border-[#221C84] text-[#221C84] py-4 rounded-xl font-[700] text-center"
              >
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
