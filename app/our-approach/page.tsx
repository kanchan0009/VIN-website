"use client";

import CTABanner from "../components/CTABanner";
import ProgramSections from "../components/ProgramSections";

export default function OurApproachPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex items-end overflow-hidden h-[75vh] min-h-[600px] max-h-[800px]">
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80"
          alt="Our Approach"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(20,10,70,0.88) 50%, rgba(0,0,0,0.2) 100%)",
          }}
        />
        <div className="relative z-10  mx-auto px-4 pb-5 md:pb-10 w-full">
          
          <h1
            className="text-3xl md:text-5xl font-bold text-white"
            style={{ }}
          >
            Our Approach
          </h1>
          <p className="text-white/60  text-[16px] font-[400] ">
            The bags are packed and we’re ready to go!’  Facebook tells an audience of over 11k, beside an image of a 4×4; roof loaded with luggage secured under red tarpaulin, the morning sun not quite high enough to light the dusty street.
          </p>
        </div>
      </section>

      {/* House of VIN */}
      <section className="py-10 md:py-20 bg-white">
        <div className=" mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-[52px] font-[600] text-[#1a1a1a] mb-8 md:mb-16 leading-tight">
            A Holistic Approach to Community <br/> Development
          </h2>

          {/* House Diagram Image */}
          <div className="max-w-4xl mx-auto mb-8 md:mb-16">
            <img 
              src="/pillar.png" 
              alt="House of VIN - Community Empowerment Strategy" 
              className="w-full h-auto"
            />
          </div>

          {/* Explanatory Text */}
          <div className="max-w-6xl mx-auto space-y-6">
            <p className="text-[#212121] text-[16px] lg:text-[18px] leading-relaxed font-[400]">
              &quot;House of VIN&quot; resembles the community empowerment strategy adopted by us. Here, different units representing the part of house signifies the importance of those in community empowerment. As for the strength of the house foundation and pillars have strong role, introduced programs and sectors have similar role in empowering communities. Six development programs signifies foundation of community empowerment and four pillars signify development areas. The ultimate outcome from the intervention is an empowered community like a strong house is an outcome of the strong foundation and pillars.
            </p>
            <p className="text-[#212121] text-[16px] lg:text-[18px] leading-relaxed font-[400]">
              Six development programs resembling foundation of a house in the pictures are: Women&apos;s Empowerment, Youth empowerment, Children&apos;s Development, Public Health and Medical Care, Environment Conservation and Disaster Risk Reduction (DRR). These programs are collectively presented as a holistic approach of community empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <ProgramSections />

      

      <CTABanner />
    </main>
  );
}


