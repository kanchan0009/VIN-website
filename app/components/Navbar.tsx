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
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div
        style={{ background: "var(--navy)" }}
        className="text-white text-sm py-1.5"
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
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
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
                style={{ color: "var(--navy)", fontFamily: "DM Sans" }}
              >
                Volunteers Initiative
              </div>
              <div className="text-xs text-gray-500">Nepal (VIN)</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { label: "About Us", href: "/about" },
              { label: "Contact Us", href: "/contact" },
              { label: "Blogs", href: "/blogs" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-indigo-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Media dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMediaOpen(true)}
              onMouseLeave={() => setMediaOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-indigo-700 transition-colors">
                Media <ChevronDown size={14} />
              </button>
              {mediaOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {media.map((m) => (
                    <Link
                      key={m.href}
                      href={m.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                    >
                      {m.label}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-2 pt-2 px-4">
                    <Link
                      href="/media"
                      className="text-sm font-semibold"
                      style={{ color: "var(--indigo-btn)" }}
                    >
                      View All Media →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Programs dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-indigo-700 transition-colors">
                Programs <ChevronDown size={14} />
              </button>
              {programsOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {programs.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                    >
                      {p.label}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-2 pt-2 px-4">
                    <Link
                      href="/programs"
                      className="text-sm font-semibold"
                      style={{ color: "var(--indigo-btn)" }}
                    >
                      View All Programs →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/donate"
              className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all"
              style={{ background: "var(--indigo-btn)" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "var(--navy)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = "var(--indigo-btn)")
              }
            >
              Donate
            </Link>
            <Link
              href="/volunteer"
              className="px-5 py-2 rounded-lg text-sm font-semibold border-2 transition-all"
              style={{
                borderColor: "var(--indigo-btn)",
                color: "var(--indigo-btn)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "var(--indigo-btn)";
                e.currentTarget.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--indigo-btn)";
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
            {[
              { label: "About Us", href: "/about" },
              { label: "Programs", href: "/programs" },
              { label: "Contact Us", href: "/contact" },
              { label: "Blogs", href: "/blogs" },
              { label: "FAQ", href: "/faq" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium py-1.5 border-b border-gray-100 text-gray-700"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Media links */}
            <div className="py-1">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Media
              </p>
              <div className="flex flex-col gap-2 pl-2">
                {media.map((m) => (
                  <Link
                    key={m.href}
                    href={m.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm text-gray-600 hover:text-indigo-700 transition-colors"
                  >
                    {m.label}
                  </Link>
                ))}
                <Link
                  href="/media"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-semibold"
                  style={{ color: "var(--indigo-btn)" }}
                >
                  View All Media →
                </Link>
              </div>
            </div>

            <div className="flex gap-3 mt-2">
              <Link
                href="/donate"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center py-2.5 rounded-lg text-white font-semibold text-sm"
                style={{ background: "var(--indigo-btn)" }}
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
