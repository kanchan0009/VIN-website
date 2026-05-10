"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  MapPin,
  Users,
  Calendar,
  Star,
  Phone,
  Mail,
  Clock,
  Landmark,
  Image as ImageIcon,
  Map,
  GraduationCap,
  Heart,
  Shield,
  Building2,
  Plane,
  Utensils,
  Home,
  Bus,
  Info,
  Key,
  ChevronRight,
  Puzzle,
  PenTool,
  ClipboardList,
} from "lucide-react";
import { notFound, useParams } from "next/navigation";
import CTABanner from "../../components/CTABanner";
import DonationWidget from "../../components/DonationWidget";

const locationsData = {
  "tarakeshor-municipality": {
    name: "Tarakeshor Municipality",
    heroSubtitle:
      "NORTH-WEST KATHMANDU, NAMED AFTER THE REVERED TARAKESHWAR TEMPLE. VIN'S FLAGSHIP COMMUNITY DEVELOPMENT HUB SINCE 2007 — WHERE HOLISTIC CHANGE STARTED.",
    mainHeading: "Where Community Empowerment Took Root",
    heroImage:
      "https://images.unsplash.com/photo-1540553016722-983f2a288e69?w=1400&q=80",
    description:
      "Tarakeshor Municipality sits in the north-west part of Kathmandu District — home to the ancient Tarakeshwar Shiva temple. VIN initiated on-site community development here in 2007, starting in Jitpur Phedi village, a rural community less than 20 miles from the capital. Over the years, VIN has built schools, community centres, early childhood education centres, and WASH infrastructure in these communities, working in coordination with District Health Councils, District Education Offices, Village Councils, Women & Youth Clubs, Buddhist monasteries, and public schools.",
    sidebarDesc:
      "Join our holistic community programs in Tarakeshor. Transform lives — including your own. Minimum age: 18 years.",
    testimonial:
      "While in Tarakeshor I got to see the beautiful blend of urban and rural life. The local community is so welcoming and the development work is truly impactful. I wish to come back soon.",
    quickInfo: {
      location: "North-west Kathmandu District, Bagmati Province",
      distance: "~20 km · approx. 45-60 min by road",
      activeSince: "2007 - 17+ years of continuous work",
      programs: "5 of 6 core VIN programs run here",
    },
    programs: [
      {
        name: "Women's Empowerment Program (WEP)",
        desc: "Education, life skills, income generation & trafficking prevention for women",
        color: "bg-[#FFF4E5]",
      },
      {
        name: "Children's Development Program (CDP)",
        desc: "ECD centres, school attendance, children's clubs, orphanage support",
        color: "bg-[#F0EEFF]",
      },
      {
        name: "Environment Conservation Program (ECP)",
        desc: "Eco-friendly conservation, animal welfare, environmental education",
        color: "bg-[#E6F6F1]",
      },
      {
        name: "Public Health & Medical Care Program (PHaMCP)",
        desc: "Health awareness, WASH / sanitation, mobile medical camps",
        color: "bg-[#FFF0F0]",
      },
      {
        name: "Youth Empowerment Program (YEP)",
        desc: "Leadership training, life skills, youth clubs and mentorship",
        color: "bg-[#F0EEFF]",
      },
    ],
    albums: [
      {
        title: "Women Empowerment Album",
        img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
      },
      {
        title: "Children Development Album",
        img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
      },
    ],
  },
  "okhaldhunga-district": {
    name: "Okhaldhunga District",
    heroSubtitle:
      "A REMOTE MOUNTAINOUS REGION IN THE EVEREST FOOTHILLS. ONE OF VIN'S MOST CHALLENGING YET REWARDING PROJECT SITES, FOCUSING ON RURAL RESILIENCE.",
    mainHeading: "Pioneering Rural Development in the Everest Region",
    heroImage:
      "https://images.unsplash.com/photo-1571868665914-d318cf7b653f?w=1400&q=80",
    description:
      "Okhaldhunga is characterized by its rugged terrain and breathtaking views of the Himalayas. The communities of Taluwa, Thulachhap, and Bhadaure are primarily agricultural-based. VIN's work here is essential due to the geographic isolation. We prioritize agriculture and irrigation development, empowering marginalized Dalit and indigenous communities, and providing basic healthcare access.",
    sidebarDesc:
      "Experience authentic rural Nepali life in Okhaldhunga. Work directly on ground-level initiatives. Minimum age: 18 years.",
    testimonial:
      "While in Okhaldhunga I got to see multiple festivals including Gai Jatra and Teej — unforgettable! VIN allowed me to truly see the beautiful culture of Nepal. I wish to come back soon.",
    quickInfo: {
      location: "Okhaldhunga District, Everest Region, Nepal",
      distance: "~250 km · 10-12 hours drive east of Kathmandu",
      activeSince: "2010 - Building rural sustainability",
      programs: "4 of 6 core VIN programs run here",
    },
    programs: [
      {
        name: "Women's Empowerment Program (WEP)",
        desc: "Empowering rural women through literacy and savings groups",
        color: "bg-[#FFF4E5]",
      },
      {
        name: "Children's Development Program (CDP)",
        desc: "Supporting mountain schools and child nutrition",
        color: "bg-[#F0EEFF]",
      },
      {
        name: "Environment Conservation Program (ECP)",
        desc: "Sustainable mountain farming and water management",
        color: "bg-[#E6F6F1]",
      },
      {
        name: "Public Health & Medical Care Program (PHaMCP)",
        desc: "Health outposts and remote village medical support",
        color: "bg-[#FFF0F0]",
      },
    ],
    albums: [
      {
        title: "Rural Health Album",
        img: "https://images.unsplash.com/photo-1571868665914-d318cf7b653f?w=800&q=80",
      },
      {
        title: "Mountain Education Album",
        img: "https://images.unsplash.com/photo-1544735032-6a71dd6414fe?w=800&q=80",
      },
    ],
  },
  "nuwakot-district": {
    name: "Nuwakot District",
    heroSubtitle:
      "POST-EARTHQUAKE RECOVERY EPICENTER. A MODEL FOR COMMUNITY-LED RECONSTRUCTION AND DISASTER RESILIENCE PROGRAMMING SINCE 2015.",
    mainHeading: "Building Resilience in the Wake of Change",
    heroImage:
      "https://images.unsplash.com/photo-1558618047-3c8c76bbb17e?w=1400&q=80",
    description:
      "Nuwakot became VIN's largest reconstruction program site after the 2015 Gorkha earthquake destroyed 85% of local schools. Since then, we have rebuilt 25 schools with earthquake-resistant designs and completed over 200 infrastructure projects. Our ongoing focus remains on disaster preparedness training and climate-resilient agriculture.",
    sidebarDesc:
      "Lead reconstruction efforts in Nuwakot. Build sustainable infrastructure for rural communities. Minimum age: 18 years.",
    testimonial:
      "Nuwakot showed me the true meaning of resilience. Seeing schools rebuilt and communities thriving after the earthquake was an incredible experience. Proud to have been part of it.",
    quickInfo: {
      location: "Nuwakot District, Bagmati Province, Nepal",
      distance: "~80 km · approx. 3-4 hours drive north",
      activeSince: "2015 - Earthquake recovery epicenter",
      programs: "3 of 6 core VIN programs run here",
    },
    programs: [
      {
        name: "Environment Conservation Program (ECP)",
        desc: "Climate resilience and eco-friendly reconstruction",
        color: "bg-[#E6F6F1]",
      },
      {
        name: "Public Health & Medical Care Program (PHaMCP)",
        desc: "WASH infrastructure and community health resilience",
        color: "bg-[#FFF0F0]",
      },
      {
        name: "Youth Empowerment Program (YEP)",
        desc: "Disaster preparedness and youth leadership training",
        color: "bg-[#F0EEFF]",
      },
    ],
    albums: [
      {
        title: "School Reconstruction Album",
        img: "https://images.unsplash.com/photo-1558618047-3c8c76bbb17e?w=800&q=80",
      },
      {
        title: "Youth Leadership Album",
        img: "https://images.unsplash.com/photo-1570549717069-33bed1aa152b?w=800&q=80",
      },
    ],
  },
};

export default function LocationDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const location = locationsData[slug as keyof typeof locationsData];

  if (!location) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen font-montserrat">
      {/* Hero Section */}
      <section className="relative h-[670px] flex items-end overflow-hidden">
        <img
          src={location.heroImage}
          alt={location.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-5 w-full">
          <h1 className="text-[32px] lg:text-[50px] font-[800] text-white mb-3 drop-shadow-lg">
            {location.name}
          </h1>
          <p className="text-white/90 max-w-4xl lg:text-[16px] font-[400] leading-relaxed">
            {location.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
          {/* Left Column */}
          <div className="space-y-16">
            {/* Header and Description */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-[#1a1a1a] leading-tight max-w-2xl">
                {location.mainHeading}
              </h2>
              <p className="text-gray-500 text-base leading-relaxed text-justify">
                {location.description}
              </p>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F8F9FB] rounded-2xl p-8 flex flex-col items-start shadow-sm border border-gray-50 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                  <MapPin size={20} className="text-[#e33e33]" />
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  Location
                </p>
                <p className="text-[#0F0D40] font-bold text-[15px] leading-snug">
                  {location.quickInfo.location}
                </p>
              </div>

              <div className="bg-[#F8F9FB] rounded-2xl p-8 flex flex-col items-start shadow-sm border border-gray-50 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                  <PenTool
                    size={20}
                    className="text-[var(--blue)] rotate-[-45deg]"
                  />
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  Distance from Kathmandu
                </p>
                <p className="text-[#0F0D40] font-bold text-[15px] leading-snug">
                  {location.quickInfo.distance}
                </p>
              </div>

              <div className="bg-[#F8F9FB] rounded-2xl p-8 flex flex-col items-start shadow-sm border border-gray-50 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                  <Calendar size={20} className="text-[#e33e33]" />
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  VIN Active Since
                </p>
                <p className="text-[#0F0D40] font-bold text-[15px] leading-snug">
                  {location.quickInfo.activeSince}
                </p>
              </div>

              <div className="bg-[#F8F9FB] rounded-2xl p-8 flex flex-col items-start shadow-sm border border-gray-50 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                  <Puzzle size={20} className="text-green-500" />
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  Programs Available
                </p>
                <p className="text-[#0F0D40] font-bold text-[15px] leading-snug">
                  {location.quickInfo.programs}
                </p>
              </div>
            </div>

            {/* Programs Running Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#0F0D40]">
                Programs Running at This Site
              </h3>
              <div className="space-y-3">
                {location.programs.map((prog, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center justify-between hover:shadow-lg hover:border-[var(--blue)]/10 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-6">
                      <div
                        className={`w-14 h-14 ${prog.color} rounded-xl flex-shrink-0`}
                      />
                      <div>
                        <h4 className="font-bold text-[#1a1a1a] text-xm mb-0.5 group-hover:text-[var(--blue)] transition-colors">
                          {prog.name}
                        </h4>
                        <p className="text-gray-400 text-sm">{prog.desc}</p>
                      </div>
                    </div>
                    <ChevronRight
                      className="text-gray-500 group-hover:text-[var(--blue)] transition-all"
                      size={20}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Volunteer Guidelines Section */}
            <div className="bg-[#E8E7F3] rounded-[1.5rem] p-12 border border-gray-100">
              <div className="flex items-center gap-3 mb-10">
                <ClipboardList className="text-[var(--blue)]" size={24} />
                <h3 className="text-[19px] font-[800] text-[#0F0D40]">
                  Volunteer Guidelines at This Site
                </h3>
              </div>
              <div className="space-y-5">
                {[
                  "Bring your own lunch, reusable water bottle, safety gear, and face mask to the working site each day.",
                  "Dress modestly — comfortable attire with preferably long sleeves, respecting local culture and norms.",
                  "Work 5-6 days per week, up to 6 hours per day. A minimum 2-week commitment is required for all placements.",
                  "You will be in constant communication with your VIN Volunteer Coordinator. In any emergency, coordinators are available at all times.",
                  "VIN maintains a culture of continuous feedback — work constructively, cooperatively, and uphold VIN's reputation at all times.",
                ].map((text, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="w-8 h-8 bg-[var(--blue)] rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0 mt-0.5 shadow-lg">
                      {idx + 1}
                    </div>
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:pt-2 space-y-8">
            {/* Apply Now Card */}
            <div className="bg-[var(--blue)] rounded-[2rem] p-10 flex flex-col items-start text-left border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Volunteer at This Site
              </h3>
              <p className="text-white/90 text-sm leading-relaxed mb-10">
                {location.sidebarDesc}
              </p>
              <Link
                href="/volunteer"
                className="w-full bg-[#f39c12] hover:bg-[#e67e22] text-white py-4 rounded-full font-bold text-sm transition-all hover:shadow-orange-500/20 active:scale-95 flex items-center justify-center gap-2"
              >
                Apply Now →
              </Link>
            </div>

            {/* What's Included Card */}
            <div className="bg-[#F8FAFC] rounded-[2rem] p-10 border border-gray-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-6 bg-[#f39c12]/20 rounded flex items-center justify-center">
                  <Star
                    size={14}
                    className="text-[#f39c12]"
                    fill="currentColor"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D40]">
                  What&apos;s Included
                </h3>
              </div>

              <div className="space-y-0 divide-y divide-gray-200">
                <div className="flex items-center justify-between py-5">
                  <div className="flex items-center gap-3">
                    <Plane size={16} className="text-gray-400" />
                    <span className="text-gray-500 text-sm">
                      Airport Pickup
                    </span>
                  </div>
                  <span className="font-bold text-[#0F0D40] text-sm">
                    ✓ Included
                  </span>
                </div>
                <div className="flex items-center justify-between py-5">
                  <div className="flex items-center gap-3">
                    <Utensils size={16} className="text-gray-400" />
                    <span className="text-gray-500 text-sm">Meals (3/day)</span>
                  </div>
                  <span className="font-bold text-[#0F0D40] text-sm">
                    Host family
                  </span>
                </div>
                <div className="flex items-center justify-between py-5">
                  <div className="flex items-center gap-3">
                    <Home size={16} className="text-gray-400" />
                    <span className="text-gray-500 text-sm">Accommodation</span>
                  </div>
                  <span className="font-bold text-[#0F0D40] text-sm">
                    Homestay
                  </span>
                </div>
                <div className="flex items-center justify-between py-5">
                  <div className="flex items-center gap-3">
                    <Bus size={16} className="text-gray-400" />
                    <span className="text-gray-500 text-sm">
                      Transport (1-time)
                    </span>
                  </div>
                  <span className="font-bold text-[#0F0D40] text-sm">
                    To/from site
                  </span>
                </div>
                <div className="flex items-center justify-between py-5">
                  <div className="flex items-center gap-3">
                    <Info size={16} className="text-gray-400" />
                    <span className="text-gray-500 text-sm">Orientation</span>
                  </div>
                  <span className="font-bold text-[#0F0D40] text-sm">
                    2-3 days
                  </span>
                </div>
                <div className="flex items-center justify-between py-5 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <Key size={16} className="text-gray-400" />
                    <span className="text-gray-500 text-sm">24/7 Support</span>
                  </div>
                  <span className="font-bold text-[#0F0D40] text-sm">
                    ✓ Always
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-[var(--blue)] rounded-[1.5rem] p-10  relative overflow-hidden">
              <span className="text-4xl text-[#f39c12] absolute top-8 left-8">
                &quot;
              </span>
              <div className="relative z-10">
                <p className="text-white/90 text-[15px] leading-relaxed mb-10 pt-6">
                  {location.testimonial}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#f39c12] rounded-full flex-shrink-0" />
                  <div>
                    <p className="text-white font-bold text-sm">
                      International Volunteer
                    </p>
                    <p className="text-white/60 text-xs tracking-wide">
                      VIN Placement, 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Life at the Site Section (Back Inside Grid for Perfect Alignment) */}
          <section className="lg:col-span-full mt-5 pt-10 relative">
            <h2 className="text-[24px] font-[700] text-[#0F0D40] mb-12">
              Life at the Site
            </h2>

            <div className="relative">
              {/* Navigation Arrows */}
              <div className="absolute top-1/2 -left-4 lg:-left-20 -translate-y-1/2 z-10">
                <button className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center bg-white hover:bg-gray-50 transition-all shadow-sm">
                  <ArrowLeft size={20} className="text-gray-600" />
                </button>
              </div>
              <div className="absolute top-1/2 -right-4 lg:-right-20 -translate-y-1/2 z-10">
                <button className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center bg-white hover:bg-gray-50 transition-all shadow-sm">
                  <ArrowRight size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Album Grid (Covers Width of Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                {location.albums.map((album, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-xi overflow-hidden group w-full h-[540px] shadow-2xl"
                  >
                    <img
                      src={album.img}
                      alt={album.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all" />
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center px-8">
                      <h4 className="text-white text-[16px] lg:text-[24px] font-bold mb-8 leading-tight ">
                        {album.title}
                      </h4>
                      <button className="bg-[var(--blue)] text-white px-10 py-4 rounded-xl font-bold text-sm hover:bg-white hover:text-[var(--blue)] transition-all shadow-lg active:scale-95">
                        Explore Album
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <DonationWidget />
      <CTABanner />
    </main>
  );
}
