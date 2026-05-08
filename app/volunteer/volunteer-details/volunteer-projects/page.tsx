import React from "react";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "../../../components/CTABanner";

export default function VolunteerProjectsPage() {
  return (
    <main className="bg-white min-h-screen font-montserrat">
      {/* Hero Section */}
      <section className="relative h-[670px] flex items-end bg-[#1a237e] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
            alt="Internship hero"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0A35]/80 to-transparent" />
        </div>
        
        <div className="w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-end">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h1 className="text-white text-[40px] md:text-[56px] font-[900] leading-[1.1]">
                Internship on <br />
                <span className="text-[#F7941D]">Child Development</span> <br />
                Nepal
              </h1>
              <p className="text-white/80 text-[16px] max-w-5xl leading-relaxed font-medium py-4">
                Lorem Ipsum Dipsum We Are Different Locations Lorem Ipsum Dipsum We Are Different Locations Lorem Ipsum Dipsum We
              </p>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5 pt-24 pl-45">
              <div className="bg-white rounded-t-[20px] p-8 shadow-2xl">
                <h2 className="text-[#0D0A35] text-[20px] font-[900] mb-2">Ready to apply?</h2>
                <p className="text-gray-500 text-[12px] mb-6">Secure your placement — spots fill fast.</p>
                
                <div className="bg-[#E6F6EC] border border-[#B7E4C7] rounded-[8px] p-3 mb-6 flex items-center gap-2 text-[#2D6A4F] text-[12px] font-semibold">
                  <div className="w-2 h-1 rounded-full bg-[#2D6A4F]" />
                  Intake opens on 1st & 3rd Monday of each month
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-[#4E4A72] text-[14px] ">
                    <span>University Internship (4 wks)</span>
                    <span className="text-[#1a237e] text-lg font-bold">€ 650</span>
                  </div>
                  <div className="flex justify-between items-center text-[#4E4A72] border-t border-gray-100 text-[14px] ">
                    <span>Each additional week</span>
                    <span className="text-[#1a237e] text-lg font-bold">€ 95</span>
                  </div>
                  <div className="flex justify-between items-center text-[#4E4A72] text-[14px]  border-t-b border-gray-100 pt-4">
                    <span>From week 10 onwards</span>
                    <span className="text-[#1a237e] text-lg font-bold">€ 95 / wk</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-[#221C84] text-white py-4 rounded-[10px]  text-[15px] hover:bg-[#1a237e] transition-colors">
                    Apply for This Internship
                  </button>
                  <button className="w-full bg-white border-2 border-gray-100 text-[#221C84] py-4 rounded-[12px] font-semibold text-[15px] hover:border-[#221C84] transition-all">
                    Ask a Question
                  </button>
                </div>

                <p className="text-center text-gray-400 text-[11px] mt-6 leading-relaxed font-medium">
                  No experience required. Open year-round. <br />
                  Minimum age: 18 years old - Entrance fee is non-refundable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <CTABanner />
    </main>
  );
}
