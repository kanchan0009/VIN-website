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

  return (
    <header className="sticky top-0 z-50 w-full h-[48px] bg-[#F1F6FF] shadow-sm">
      {/* Top bar */}
      <div
        style={{ background: "background:#F1F6FF" }}
        className="text-[3353535] text-sm py-1.5"
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex gap-6">
            <Link href="/volunteer" className="hover:underline opacity-90">
              Volunteer
            </Link>
            <Link href="/partner" className="hover:underline opacity-90">
              Partner with Us
            </Link>
            <Link href="/sponsor" className="hover:underline opacity-90">
              Sponsor a Child
            </Link>
            <Link href="/faq" className="hover:underline opacity-90">
              FAQ
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Globe size={14} />
              <span>NP</span>
              <ChevronDown size={12} />
            </div>
            <div className="flex items-center gap-1.5">
              <Phone size={14} />
              <span>+977 (1) 4362560</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-[#FFFFFF] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[89px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div
              style={{ background: "var(--navy)" }}
              className="w-10 h-10 rounded-full flex items-center justify-center"
            >
              <span className="text-white font-bold text-sm">VIN</span>
            </div>
            <div>
              <div
                className="font-bold text-sm"
                style={{ color: "var(--navy)", }}
              >
                Volunteers Initiative
              </div>
              <div className="text-xs text-gray-500">Nepal (VIN)</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/about" className="btn nav-btn">About Us</Link>
            
            {/* Programs Dropdown */}
            <div 
              className="relative group h-full flex items-center"
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <Link href="/programs" className="btn nav-btn flex items-center gap-1">
                Programs <ChevronDown size={14} className={`transition-transform duration-200 ${programsOpen ? "rotate-180" : ""}`} />
              </Link>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 w-64 bg-white shadow-xl border-t-2 border-[#206673] py-2 transition-all duration-200 ${programsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}>
                {programs.map((prog) => (
                  <Link 
                    key={prog.href} 
                    href={prog.href}
                    className="block px-6 py-3 text-sm text-gray-700 hover:bg-[#F1F6FF] hover:text-[#206673] transition-colors"
                  >
                    {prog.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/blogs" className="btn nav-btn">Blogs</Link>
            
            {/* Media Dropdown */}
            <div 
              className="relative group h-full flex items-center"
              onMouseEnter={() => setMediaOpen(true)}
              onMouseLeave={() => setMediaOpen(false)}
            >
              <Link href="/media" className="btn nav-btn flex items-center gap-1">
                Media <ChevronDown size={14} className={`transition-transform duration-200 ${mediaOpen ? "rotate-180" : ""}`} />
              </Link>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 w-64 bg-white shadow-xl border-t-2 border-[#206673] py-2 transition-all duration-200 ${mediaOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}>
                {media.map((m) => (
                  <Link 
                    key={m.href} 
                    href={m.href}
                    className="block px-6 py-3 text-sm text-gray-700 hover:bg-[#F1F6FF] hover:text-[#206673] transition-colors"
                  >
                    {m.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="btn nav-btn">Contact Us</Link>
          </div>

          {/* CTA buttons */}
          <div className=" lg:flex items-center gap-3">
            <Link
              href="/donate"
              className="absolute  left-[1200px] h-[48px] px-[30px] py-[10px] rounded-[5px] text-sm font-semibold text-white bg-[#206673] flex items-center justify-center transition-all hover:bg-[#1b5a5f]"
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "background:#1b5a5f")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = "background:#206673")
              }
            >
              Donate
            </Link>
            <Link
              href="/volunteer"
              className="absolute  left-[1320px] h-[48px] px-[30px] py-[10px] rounded-[2px] border border-[#206673] text-[#206673] flex items-center justify-center gap-[5px] transition-all hover:bg-[#206673] hover:text-white"
              style={{
                borderColor: "#221C84",
                color: "#221C84",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "background:#206673";
                e.currentTarget.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "background:#206673";
              }}
            >
              Volunteer
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-3">
            {/* Mobile links */}
            <div className="flex flex-col gap-1">
              <Link href="/about" onClick={() => setMobileOpen(false)} className="text-base font-medium py-2.5 border-b border-gray-50 text-gray-700">About Us</Link>
              
              {/* Mobile Programs Dropdown */}
              <div className="border-b border-gray-50">
                <button 
                  onClick={() => setProgramsOpen(!programsOpen)}
                  className="w-full flex items-center justify-between text-base font-medium py-2.5 text-gray-700"
                >
                  Programs <ChevronDown size={18} className={`transition-transform duration-200 ${programsOpen ? "rotate-180" : ""}`} />
                </button>
                {programsOpen && (
                  <div className="pl-4 pb-3 flex flex-col gap-2">
                    {programs.map((prog) => (
                      <Link 
                        key={prog.href} 
                        href={prog.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-sm text-gray-600 py-1"
                      >
                        {prog.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/blogs" onClick={() => setMobileOpen(false)} className="text-base font-medium py-2.5 border-b border-gray-50 text-gray-700">Blogs</Link>
              
              {/* Mobile Media Dropdown */}
              <div className="border-b border-gray-50">
                <button 
                  onClick={() => setMediaOpen(!mediaOpen)}
                  className="w-full flex items-center justify-between text-base font-medium py-2.5 text-gray-700"
                >
                  Media <ChevronDown size={18} className={`transition-transform duration-200 ${mediaOpen ? "rotate-180" : ""}`} />
                </button>
                {mediaOpen && (
                  <div className="pl-4 pb-3 flex flex-col gap-2">
                    {media.map((m) => (
                      <Link 
                        key={m.href} 
                        href={m.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-sm text-gray-600 py-1"
                      >
                        {m.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-base font-medium py-2.5 border-b border-gray-50 text-gray-700">Contact Us</Link>
              <Link href="/faq" onClick={() => setMobileOpen(false)} className="text-base font-medium py-2.5 border-b border-gray-50 text-gray-700">FAQ</Link>
            </div>

            <div className="flex gap-3 mt-2">
              <Link
                href="/donate"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center py-2.5 rounded-lg text-white  text-sm"
                style={{ background: "#206673" }}
              >
                Donate
              </Link>
              <Link
                href="/volunteer"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center py-2.5 rounded-lg font-semibold text-sm border-2"
                style={{
                  borderColor: "var(--indigo-btn)",
                  color: "var(--indigo-btn)",
                }}
              >
                Volunteer
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
