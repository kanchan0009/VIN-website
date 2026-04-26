"use client";

import Link from "next/link";
import { Quote } from "lucide-react";
import { useState } from "react";
import DonationWidget from "../components/DonationWidget";
import CTABanner from "../components/CTABanner";

const testimonials = [
  {
    id: 1,
    name: "Shanti Tamang",
    role: "Farmer, Devisthan",
    text: "Namaste! My name is Shanti Tamang, I am a 34-year-old farmer from Devisthan, Tarkeshwar Municipality. Two years ago, I had the opportunity to participate in an English class offered by Volunteers Initiative Nepal (VIN) at the Women's Business Center (WBC) in Tiniple, Tarkeshwar. At first, I hesitated to join because I thought learning English would be useless for someone like me, a farmer and a housewife. I was also worried it would interfere with my daily household activities. However, thanks to the encouragement of the women in my community, I decided to give it a try. Little did I know this decision would change my life in ways I never imagined.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    signature: "Dagrur Manalo",
    signatureTitle: "Volunteer, VIN",
  },
  {
    id: 2,
    name: "Maya Gurung",
    role: "Community Health Worker, Okhaldhunga",
    text: "Before VIN came to our village, many women delivered babies at home without any medical support. After receiving training from VIN's Public Health program, I now provide basic maternal health education and first aid to expecting mothers in my community. VIN didn't just teach me skills — they gave me the confidence to serve my people. Today, our village has seen a significant reduction in maternal complications, and more mothers are choosing safer delivery practices.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    signature: "Maya Gurung",
    signatureTitle: "Community Health Worker",
  },
  {
    id: 3,
    name: "Ramesh Poudel",
    role: "Youth Leader, Jitpur",
    text: "Growing up in a rural community, I never thought I would have the opportunity to develop leadership skills or learn about entrepreneurship. VIN's Youth Empowerment Program opened doors I didn't even know existed. Through their life skills training and workshops, I discovered my passion for community organizing. Today, I lead a youth group of 25 members, working together on local development projects and environmental conservation efforts.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    signature: "Ramesh Poudel",
    signatureTitle: "Youth Leader",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "International Volunteer, USA",
    text: "Volunteering with VIN was the most transformative experience of my life. I spent three months teaching English and computer skills at a rural school in Kathmandu Valley. The warmth and resilience of the Nepali people deeply moved me. VIN's staff provided excellent support, ensuring that my skills matched the community's needs. I didn't just teach — I learned so much about community-driven development, cultural humility, and the true meaning of service.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    signature: "Sarah Johnson",
    signatureTitle: "International Volunteer",
  },
  {
    id: 5,
    name: "Bimala Shrestha",
    role: "Micro-entrepreneur, Kavre",
    text: "After completing VIN's Entrepreneurship Development training, I started my own small tailoring business. With the microcredit support and ongoing mentorship from VIN, I was able to purchase a sewing machine and expand my product line. What started as a small home-based venture now employs three other women from my community. VIN believed in me when no one else did, and now I am able to send my two children to school.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    signature: "Bimala Shrestha",
    signatureTitle: "Micro-entrepreneur",
  },
  {
    id: 6,
    name: "Dr. Anil Kumar",
    role: "Medical Volunteer, India",
    text: "As a medical professional, I wanted to contribute my skills where they were most needed. VIN's Public Health & Medical Program gave me the platform to provide healthcare services in remote communities with little to no medical infrastructure. Over the course of my six-week placement, our team conducted health camps, provided dental care, and trained local health volunteers. The impact was immediate and deeply rewarding.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    signature: "Dr. Anil Kumar",
    signatureTitle: "Medical Volunteer",
  },
];

export default function TestimonialsPage() {
  const [filter, setFilter] = useState("Beneficiary");

  return (
    <main>
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header with Filter */}
          <div className="flex items-center justify-center mb-12 gap-4">
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Testimonials
            </h2>
            <div className="relative bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-xl">😊</span>
            </div>
          </div>

          {/* Filter Dropdown */}
          <div className="flex justify-center mb-12">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-6 py-2 text-sm bg-white focus:outline-none"
            >
              <option>Beneficiary</option>
              <option>Volunteer</option>
              <option>Community Member</option>
            </select>
          </div>

          {/* Testimonials Grid - Alternating Layout */}
          <div className="space-y-12">
            {testimonials.map((t, idx) => (
              <div key={t.id}>
                {idx % 2 === 0 ? (
                  /* Text Left, Image Right */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="border-l-4 border-[#c97a5c] pl-6">
                      <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        {t.text}
                      </p>
                      <div className="border-t border-gray-200 pt-4">
                        <p className="font-bold text-sm text-gray-900">
                          {t.signature}
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          {t.signatureTitle}
                        </p>
                      </div>
                    </div>
                    <div>
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                ) : (
                  /* Image Left, Text Right */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    <div className="border-l-4 border-[#c97a5c] pl-6">
                      <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        {t.text}
                      </p>
                      <div className="border-t border-gray-200 pt-4">
                        <p className="font-bold text-sm text-gray-900">
                          {t.signature}
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          {t.signatureTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <button className="text-gray-400 hover:text-gray-600">←</button>
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className={`w-8 h-8 rounded-full text-sm ${
                  num === 1
                    ? "bg-[#2421a0] text-white"
                    : "border border-gray-300 text-gray-600"
                }`}
              >
                {num}
              </button>
            ))}
            <button className="text-gray-400 hover:text-gray-600">→</button>
          </div>
        </div>
      </section>
      <DonationWidget />
      <CTABanner />
    </main>
  );
}
