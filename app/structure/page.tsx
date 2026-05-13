"use client";
import CTABanner from "../components/CTABanner";
import DonationWidget from "../components/DonationWidget";
import ProgramSections from "../components/ProgramSections";

export default function StructurePage() {
  return (
    <main className="text-[#1a1a2e]">
      {/* Structure Image Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-4 text-center">
          <h2 className="text-[50px] font-[700] mb-12 text-[#212121]">
            Organization Structure
          </h2>
          
          <div className=" mx-auto mb-12">
            <img 
              src="/structure.png" 
              alt="VIN Organization Structure" 
              className="w-full h-auto "
              onError={(e) => {
                e.currentTarget.parentElement!.innerHTML = '<div class="min-h-[600px] flex items-center justify-center bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl"><p class="text-gray-400 text-xl font-medium">Organizational Structure Image (/structure.png)</p></div>';
              }}
            />
          </div>
        </div>
      </section>

      <DonationWidget/>
      <CTABanner />
    </main>
  );
}
