"use client";
import CTABanner from "../components/CTABanner";
import ProgramSections from "../components/ProgramSections";
import { Binoculars, Target, Gem } from "lucide-react";

export default function MissionPage() {
  return (
    <main className="text-[#1a1a2e]">
      {/* Hero Section */}
      <section className="relative flex items-end overflow-hidden full-width-bg h-[75vh] min-h-[600px] max-h-[800px]">
        <img
          src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=2070&auto=format&fit=crop"
          alt="Mission"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(20,10,70,0.88) 50%, rgba(0,0,0,0.2) 100%)",
          }}
        />
        <div className="relative z-10 w-full mx-auto px-4 md:px-[60px] pb-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Mission, Vision, Goal
          </h1>
          <p className="text-white text-lg md:text-xl opacity-90 max-w-4xl">
            Lorem Ipsum Ipsum We Are Different Locations Lorem Ipsum Ipsum
          </p>
        </div>
      </section>

      {/* Introducing Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-4">
          <h2 className="text-[50px] font-[600] mb-10 text-[#1a1a2e]">
            Introducing
          </h2>
          <div className="space-y-3 text-[18px] text-[#4b5563] leading-[1.7]">
            <p>
              Volunteers Initiative Nepal (VIN), established in 2005 by a
              diverse group drawn from development workers, educationalists,
              social activists and other professionals, is a non-religious,
              non-political, non-profit, and non-governmental organization
              (NGO). VIN is officially registered under the Society Act with the
              District Administration Office, Kathmandu (Reg. No. 147/062/63),
              and affiliated with the Social Welfare Council Nepal (SWC)
              (Affiliation No. 20110). VIN focuses on community-based projects
              involving local volunteers backed-up by international volunteers
              in Nepal.
            </p>
            <p>
              VIN has been mobilizing local and international volunteers in
              various development sectors including educational programs,
              trainings and counseling that significantly contribute to enhance
              the livelihoods of poor and marginalized / disadvantaged
              communities in Nepal. VIN has also been deploying its volunteers
              in teaching, teacher training, environment, health and
              sanitation, helping children in orphanages, women empowerment
              support, youth empowerment and entrepreneurship development.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Cards */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <div className="bg-[#DFF0FF] p-10 flex flex-col items-center text-center transition-all hover:shadow-md duration-300">
              <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mb-8 shadow-sm">
                <Binoculars className="w-10 h-10 text-[#221C84]" />
              </div>
              <h3 className="text-[34px] font-[700] mb-4 text-[#1a1a2e]">
                Vision
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                Creating peaceful, prosperous, equitable and happy Nepal for all.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-[#DFF0FF] p-10 flex flex-col items-center text-center transition-all hover:shadow-md duration-300">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Target className="w-10 h-10 text-[#221C84]" />
              </div>
              <h3 className="text-[34px] font-[700] mb-4 text-[#1a1a2e]">
                Mission
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                Empowering marginalized communities through equitable, inclusive
                and holistic development programmes.
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-[#DFF0FF] p-10 flex flex-col items-center text-center transition-all hover:shadow-md duration-300">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Gem className="w-10 h-10 text-[#221C84]" />
              </div>
              <h3 className="text-[34px] font-[700] mb-6 text-[#1a1a2e]">
                Values and Principal
              </h3>
              <p className="text-[#4b5563] leading-relaxed text-[15px]">
                Participatory, Voluntarism, Openness, Transparency, Honesty,
                Cost effectiveness, Respect for minority/disadvantaged/
                marginalized groups, Sustainability, Faith in indigenous
                Knowledge, Skill and Capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Empowerment Programmes Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto px-4">
          <h2 className="text-[50px] font-[600] mb-10 text-[#1a1a2e]">
            Community Empowerment Programmes
          </h2>
          <div className="space-y-3 text-[18px] text-[#4b5563] leading-[1.7]">
            <p>
              To improve the socio-economic status of poor and marginalized
              communities through sustainable, inclusive and equitable
              integrated community empowerment programmes representing in all 6
              programme areas.
            </p>
            <p>
              This will be done through enhanced Education, Health and
              Environment, Economy & basic infrastructure Development by
              implementing Women&apos;s empowerment, Children&apos;s development, Youth
              empowerment and Public health & Medical care, Environment
              Conservation and Disaster Risk Reduction programmes with special
              focus on women and children by conducting soft skills & hands-on
              training and research, developing basic infrastructure, mobilising
              skilled local and international volunteers to promote equality,
              economic well-being and basic human rights.
            </p>
          </div>
        </div>
      </section>

      <ProgramSections />
      <CTABanner />
    </main>
  );
}
