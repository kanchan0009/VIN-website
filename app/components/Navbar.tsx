"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

const aboutLinks = [
  { label: "Our Story", href: "/our-story" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Our Mission", href: "/mission" },
  { label: "Our Structure", href: "/structure" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm font-montserrat bg-white">
      {/* Top bar - Hidden on mobile */}
      <div className="hidden lg:block bg-[#F1F6FF] text-[#353535] text-[16px] py-1.5">
        <div className="mx-auto px-4 md:px-[60px] flex items-center justify-between">
          <div className="flex gap-6 font-[500]">
            <Link href="/volunteer" className="hover:text-[var(--blue)] transition-colors">Volunteer</Link>
            <Link href="/partner" className="hover:text-[var(--blue)] transition-colors">Partner with Us</Link>
            <Link href="/sponsor" className="hover:text-[var(--blue)] transition-colors">Sponsor a Child</Link>
            <Link href="/faq" className="hover:text-[var(--blue)] transition-colors">FAQ</Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-[var(--blue)] transition-colors">
              <Globe size={13} />
              <span className="font-[600]">NP</span>
              <ChevronDown size={11} />
            </div>
            <div className="flex items-center gap-1.5">
              <Phone size={13} className="text-[var(--blue)]" />
              <span className="font-[600]">+977 (1) 4362560</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="border-b border-gray-100">
        <div className="mx-auto px-4 md:px-[60px] flex items-center justify-between h-[75px] lg:h-[85px]">
          {/* Logo Section */}
          <Link href="/" className="flex items-center shrink-0 py-2">
            <div className="relative h-[50px] w-[155px] lg:h-[65px] lg:w-[210px]">
              <Image 
                src="/vin-logo.png" 
                alt="Volunteers Initiative Nepal Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-6 px-4">
            <Link href="/" className="text-[18px] font-[500] text-[#353535] hover:text-[var(--blue)] transition-colors">Home</Link>
            
            {/* About Us Dropdown */}
            <div 
              className="relative h-full flex items-center group"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="text-[18px] font-[500] text-[#353535] group-hover:text-[var(--blue)] transition-colors flex items-center gap-1 py-4">
                About Us <ChevronDown size={14} className={`transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`absolute top-full left-0 w-64 bg-white shadow-2xl border-t-2 border-[var(--blue)] py-3 transition-all duration-300 ${aboutOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}>
                <Link 
                  href="/about"
                  className="block px-6 py-3 text-sm text-[#4A4A4A] font-[700] hover:bg-[#F1F6FF] hover:text-[var(--blue)] transition-all border-b border-gray-50"
                >
                  Overview
                </Link>
                {aboutLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className="block px-6 py-3 text-sm text-[#4A4A4A] font-[500] hover:bg-[#F1F6FF] hover:text-[var(--blue)] transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Programs Dropdown */}
            <div 
              className="relative h-full flex items-center group"
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <button className="text-[18px] font-[500] text-[#353535] group-hover:text-[var(--blue)] transition-colors flex items-center gap-1 py-4">
                Programs <ChevronDown size={14} className={`transition-transform duration-300 ${programsOpen ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`absolute top-full left-0 w-72 bg-white shadow-2xl border-t-2 border-[var(--blue)] py-3 transition-all duration-300 ${programsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}>
                {programs.map((prog) => (
                  <Link 
                    key={prog.href} 
                    href={prog.href}
                    className="block px-6 py-3 text-sm text-[#4A4A4A] font-[500] hover:bg-[#F1F6FF] hover:text-[var(--blue)] transition-all"
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
              <button className="text-[18px] font-[500] text-[#353535] group-hover:text-[var(--blue)] transition-colors flex items-center gap-1 py-4">
                Media <ChevronDown size={14} className={`transition-transform duration-300 ${mediaOpen ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`absolute top-full left-0 w-64 bg-white shadow-2xl border-t-2 border-[var(--blue)] py-3 transition-all duration-300 ${mediaOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}>
                {media.map((m) => (
                  <Link 
                    key={m.href} 
                    href={m.href}
                    className="block px-6 py-3 text-sm text-[#4A4A4A] font-[500] hover:bg-[#F1F6FF] hover:text-[var(--blue)] transition-all"
                  >
                    {m.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="text-[18px] font-[500] text-[#353535] hover:text-[var(--blue)] transition-colors whitespace-nowrap">Contact Us</Link>
            <Link href="/blogs" className="text-[18px] font-[500] text-[#353535] hover:text-[var(--blue)] transition-colors">Blogs</Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 lg:gap-4">
            <Link
              href="/#donation-widget"
              className="bg-[#2A6F7C] text-white px-5 lg:px-9 py-2.5 lg:py-3.5 rounded-[4px] font-[700] text-[13px] lg:text-[15px] hover:bg-[#1e525c] transition-all shadow-md active:scale-95 whitespace-nowrap"
            >
              Donate
            </Link>
            <Link
              href="/volunteer"
              className="hidden sm:flex border-2 border-[var(--blue)] text-[var(--blue)] px-5 lg:px-9 py-2 lg:py-3 rounded-[4px] font-[700] text-[13px] lg:text-[15px] hover:bg-[var(--blue)] hover:text-white transition-all active:scale-95 whitespace-nowrap"
            >
              Volunteer
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="xl:hidden w-10 h-10 flex items-center justify-center text-[var(--blue)] hover:bg-gray-50 rounded-lg transition-colors ml-1"
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
            
            {/* Mobile About Us */}
            <div className="border-b border-gray-50">
              <button 
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex items-center justify-between text-lg font-[700] text-[#1D1E20] py-4"
              >
                About Us <ChevronDown size={20} className={`transition-transform duration-300 ${mobileAboutOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileAboutOpen ? "max-h-[500px] mb-4" : "max-h-0"}`}>
                <div className="flex flex-col gap-3 pl-4">
                  <Link 
                    href="/about"
                    onClick={() => setMobileOpen(false)}
                    className="text-[#555] font-[700] text-base py-1 hover:text-[var(--blue)]"
                  >
                    Overview
                  </Link>
                  {aboutLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-[#555] font-[500] text-base py-1 hover:text-[var(--blue)]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
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
                      className="text-[#555] font-[500] text-base py-1 hover:text-[var(--blue)]"
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
                      className="text-[#555] font-[500] text-base py-1 hover:text-[var(--blue)]"
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
                href="/#donation-widget"
                onClick={() => setMobileOpen(false)}
                className="bg-[#2A6F7C] text-white py-4 rounded-xl font-[700] text-center shadow-lg"
              >
                Donate
              </Link>
              <Link
                href="/volunteer"
                onClick={() => setMobileOpen(false)}
                className="border-2 border-[var(--blue)] text-[var(--blue)] py-4 rounded-xl font-[700] text-center"
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
