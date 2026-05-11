"use client";

import Link from 'next/link';
import { ArrowRight, MapPin, Users, Building2, Award, Briefcase, Home, Calendar, Star, Navigation } from 'lucide-react';
import CTABanner from '../components/CTABanner';
import DonationWidget from '../components/DonationWidget';

const locations = [
  {
    id: 1,
    name: 'Tarakeshor Municipality',
    badge: 'MAIN HUB',
    distance: '~20 km from city',
    subtitle: 'Kathmandu District',
    description: "Located in the north-west part of Kathmandu District, named after the revered Tarakeshwar temple. VIN's primary urban-fringe placement hub since 2007 — where holistic community development began.",
    image: 'https://images.unsplash.com/photo-1540553016722-983f2a288e69?w=600&q=80',
    tags: ["Women's Empowerment", "Child Development", "Youth Empowerment", "Public Health", "Environment"],
    footerInfo: 'Communities served: 12+',
    footerIcon: <Users size={14} className="text-gray-400" />
  },
  {
    id: 2,
    name: 'Okhaldhunga District',
    badge: 'EVEREST REGION',
    distance: '250 km east',
    subtitle: 'Taluwa · Thulachhap · Bhadaure',
    description: "250 km east of Kathmandu, south of Solukhumbu in the Everest region. Remote communities where VIN runs ECD, health and women's empowerment projects.",
    image: 'https://images.unsplash.com/photo-1571868665914-d318cf7b653f?w=600&q=80',
    tags: ["Early Childhood Dev.", "Women's Empowerment", "WASH / Sanitation"],
    footerInfo: 'Altitude: 1,400m+',
    footerIcon: <Navigation size={14} className="text-gray-400 rotate-45" />
  },
  {
    id: 3,
    name: 'Nuwakot District',
    badge: 'BAGMATI PROVINCE',
    distance: '~80 km north',
    subtitle: 'Okharpouwa · Kaule (Kakani)',
    description: "Kakani — a rural municipality in Nuwakot, Bagmati Province. A post-earthquake recovery zone where VIN has focused on rebuilding and disaster resilience programming.",
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76bbb17e?w=600&q=80',
    tags: ["Disaster Risk Reduction", "Infrastructure", "Education"],
    footerInfo: 'Rural Municipality',
    footerIcon: <MapPin size={14} className="text-green-500" />
  },
];

export default function WhereWeWork() {
  return (
    <main className="w-full min-h-screen bg-white font-montserrat">
      {/* Hero Section */}
      <section className="relative h-[670px] flex items-end overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1611591901457-b763bc0629c8?w=1600&q=80" 
          alt="Our Working Sites" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,10,70,0.88) 50%, rgba(0,0,0,0.2) 100%)' }} />
        <div className="relative z-10  mx-auto px-4 pb-16 w-full">
          <h1 className="text-5xl lg:text-5xl font-bold text-white mb-2">
            Our Working Sites
          </h1>
          <p className="text-white/80 max-w-4xl text-lg leading-relaxed">
            Loreum Ipsum Dipsum We Are Different Locations Loreum Ipsum Dipsum We Are Different Locations Loreum Ipsum Dipsum We Are Different L
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-white">
        <div className=" mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-10 leading-tight">
                Volunteer Placement Sites Across Nepal
              </h2>
              <div className="space-y-6 text-gray-500 text-[15px] leading-relaxed max-w-xl">
                <p>
                  Volunteers are placed in one of VIN&apos;s carefully selected working areas — Tarakeshor Municipality of Kathmandu, Taluwa, Thulachhap and Bhadaure of Okhaldhunga, and Okharpouwa, Kaule of Nuwakot district.
                </p>
                <p>
                  Since 2007, VIN has been building strong foundations of education, health & environment, basic economy, and infrastructure in these communities.
                </p>
              </div>
            </div>

            {/* Right Info Box */}
            <div className="lg:w-[554px] w-full">
              <div className="bg-[#F8FAFC] border border-gray-200 rounded-3xl p-10 divide-y divide-gray-200/60">
                
                {/* Item 1 */}
                <div className="flex gap-5 pb-10">
                  <div className="w-12 h-12 bg-[var(--blue)] rounded-xl flex items-center justify-center shrink-0">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a1a] mb-2 text-sm">What to Bring on Site</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Pack your own lunch, water bottle, safety gear, face mask, and essentials. Comfortable, modest attire with long sleeves is advised.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-5 py-10">
                  <div className="w-12 h-12 bg-[var(--blue)] rounded-xl flex items-center justify-center shrink-0">
                    <Home className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a1a] mb-2 text-sm">Local Host Family Stay</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      You&apos;ll stay with a Nepali host family — 3 meals a day included. A genuine cultural immersion experience.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-5 pt-10">
                  <div className="w-12 h-12 bg-[var(--blue)] rounded-xl flex items-center justify-center shrink-0">
                    <Calendar className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a1a] mb-2 text-sm">Minimum 2-Week Commitment</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Work 5-6 days a week, up to 6 hours per day. The longer you commit, the greater your impact.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 px-6 bg-white">
        <div className=" mx-auto">
          <div className="mb-16">
            <h2 className="text-[36px] font-[700] text-[var(--blue)]">Our Working Sites</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <div key={loc.id} className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden flex flex-col shadow-sm">
                {/* Image Section */}
                <div className="relative h-64">
                  <img 
                    src={loc.image} 
                    alt={loc.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-[var(--blue)] text-white text-[10px] font-bold py-1.5 px-3 rounded-full flex items-center gap-1.5 tracking-wider">
                    <Star size={10} fill="white" />
                    {loc.badge}
                  </div>
                  {/* Distance Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white text-[10px] py-1.5 px-3 rounded-full flex items-center gap-1.5 font-medium">
                    <MapPin size={10} className="text-red-500" fill="currentColor" />
                    {loc.distance}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2 leading-tight">
                    {loc.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[#f39c12] text-xs font-bold mb-4 uppercase tracking-wide">
                    <MapPin size={12} fill="#f39c12" />
                    {loc.subtitle}
                  </div>
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-6">
                    {loc.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {loc.tags.map(tag => (
                      <span key={tag} className="bg-[#f1f5f9] text-[var(--blue)] text-[10px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-auto pt-2 border-t border-gray-300 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[11px] text-gray-400 font-bold">
                      {loc.footerIcon}
                      <span>{loc.footerInfo}</span>
                    </div>
                    <Link 
                      href={`/where-we-work/${loc.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/^-|-$/g, '')}`}
                      className="bg-[#f1f5f9] text-[var(--blue)] text-[11px] font-bold py-2 px-5 rounded-lg hover:bg-[var(--blue)] hover:text-white transition-all flex items-center gap-1"
                    >
                      Explore →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonationWidget />
      <CTABanner />
    </main>
  );
}

