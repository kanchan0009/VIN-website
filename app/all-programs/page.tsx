"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTABanner from "../components/CTABanner";
import DonationWidget from "../components/DonationWidget";

const programs = [
  {
    id: "womens-empowerment",
    title: "Women's Empowerment",
    desc: "Loreum Ipsum dipsum loreum ipsum dipsum Loreum ipsum dipsum loreum...",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    href: "/programs-details",
  },
  {
    id: "child-development",
    title: "Child Development",
    desc: "Loreum ipsum dipsum loreum ipsum dipsum Loreum ipsum dipsum loreum...",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    href: "/programs-details",
  },
  {
    id: "youth-empowerment",
    title: "Youth Empowerment",
    desc: "Loreum ipsum dipsum loreum ipsum dipsum Loreum ipsum dipsum loreum...",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
    href: "/programs-details",
  },
  {
    id: "public-health",
    title: "Public Health and Medical Care",
    desc: "Loreum ipsum dipsum loreum ipsum dipsum Loreum ipsum dipsum loreum...",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
    href: "/programs-details",
  },
  {
    id: "environmental-conservation",
    title: "Environmental Conservation",
    desc: "Loreum ipsum dipsum loreum ipsum dipsum Loreum ipsum dipsum loreum...",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    href: "/programs-details",
  },
  {
    id: "disaster-risk-reduction",
    title: "Disaster Risk Reduction",
    desc: "Loreum ipsum dipsum loreum ipsum dipsum Loreum ipsum dipsum loreum...",
    image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80",
    href: "/programs-details",
  },
];

export default function AllProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-end overflow-hidden !px-0">
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1600"
          alt="All Programs Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient Overlay for text readability */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" 
        />
        
        <div className="relative z-10 w-full px-[60px] pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            All Programs
          </h1>
          <p className="text-white text-lg max-w-4xl opacity-90 leading-relaxed">
            Loreum Ipsum Dipsum We Are Different Locations Loreum Ipsum Dipsum We Are Different:
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className=" mx-auto text-center px-4">
          <h2 className="text-[56px] font-[600] text-[#212121] mb-3">
            Our Community Development Programs
          </h2>
          <p className="text-[#414141] text-[18px] leading-relaxed mb-10 font-[400]">
            Volunteers Initiative Nepal (VIN), established in 2005 by a diverse group drawn from development workers, educationalists, social activists and other professionals, is a non-religious, non-political, non-profit, and non-governmental organization (NGO). VIN is officially registered under the Society Act with the District Administration Office, Kathmandu (Reg. No. 147/062/63), and affiliated with the Social Welfare Council Nepal (SWC) (Affiliation No. 20110). VIN focuses on community-based projects involving local volunteers backed-up by international volunteers in Nepal.
          </p>
          <button className="bg-[#221C84] text-white px-8 py-3 rounded-md font-[700] text-[18px] hover:opacity-90 transition-opacity">
            Read More
          </button>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="pb-24 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {programs.map((program) => (
            <div key={program.id} className="flex flex-col group">
              {/* Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm mb-6">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-[22px] font-[500] text-[#1a1a1a] mb-4">
                  {program.title}
                </h3>
                <p className="text-[#414141] text-[16px] leading-relaxed mb-6 font-[400] line-clamp-2">
                  {program.desc}
                </p>
                <Link
                  href={program.href}
                  className="text-[#221C84] font-[600] text-[16px] flex items-center gap-1 hover:underline"
                >
                  View Program <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <DonationWidget/>
      <CTABanner/>

    </div>
      
  );
}
