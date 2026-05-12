"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CTABanner from "../components/CTABanner";

export default function ProgramsDetailsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="pt-12 pb-8">
        <div className="container mx-auto  ">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Women's Empowerment Program
          </h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            VIN aims to empower women socially and economically through education, life skills and income generation opportunities. By 2030, VIN aims to benefit at least 80% of the total women in the marginalized communities of the target areas (Kavresthali, Nuwakot and Okhaldhunga).
          </p>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="w-full mb-16">
        <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1600"
            alt="Women Empowerment"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6 ">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left Column */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Why Women Empowerment Programs
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed mb-12">
                <p>
                  We empower women both socially and economically by providing them access to
                  education, life skills and income generation opportunities.
                </p>
                <p>
                  Through our program we hope to build a secure and sustainable future for women
                  by helping them become financially independent, more healthy, equal participants
                  in household decision-making and more knowledgeable of their rights.
                </p>
                <p>
                  We have developed and implemented multiple projects under our women
                  empowerment program and based it on the Sustainable Development Goals (SDGs)
                  2030 – particularly SDG 5 “Achieve gender equality and empower all women and
                  girls”.
                </p>
                <p>
                  Just as the SDG 5 goal states, VIN also has made it it's mission to eliminate gender
                  disparity in all levels of education, wage discrimination at similar work, physical and
                  sexual violence, and all harmful practices, and raising the presence of women in the
                  national parliament and public service decision-making positions.
                </p>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Current Situation
              </h3>
              <ul className="space-y-4 text-gray-600 list-disc pl-5 leading-relaxed">
                <li>1 in 2 women in Nepal are illiterate.</li>
                <li>8 in 10 Nepalese women are working in agricultural sector.</li>
                <li>4 in 5 women do not have ownership over land or property.</li>
                <li>Witch-hunt is common and targeted against low-caste women.</li>
                <li>Nepal is ranked 86 out of 93 countries in Gender Empowerment Measure (GME).</li>
                <li>30,000 females aged 8-25 are smuggled to India every year.</li>
              </ul>
            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:w-1/3">
              <div className="bg-[#EBF5FF] p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center leading-tight">
                  Empowered women <br /> we envision to be
                </h3>
                <div className="relative aspect-square w-full max-w-[300px] mx-auto">
                  {/* Diagram Placeholder - I'll use a descriptive Alt or an actual image if I can find a suitable one */}
                  <img
                    src="/women.png"
                    alt="Empowerment Diagram"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Banner Section */}
      <section className="relative py-20 bg-cover bg-center text-white text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1600')" }}>
        <div className="absolute inset-0 bg-blue-900/80" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <p className="text-sm md:text-base leading-relaxed mb-10">
            Many times, women find themselves weak and violated by the culture and society. They tend to lose their value and identity. Hence, VIN focuses on the overall development of women aged 20-59 in marginalized communities. Numerous life skill development courses are given, such as leadership development, computer courses, stress management, time management etc. Micro-credit programs have been considered to put women in better financial standing. We have been providing entrepreneurship trainings focusing on both agricultural and non-agricultural business. Such initiatives help back warded women to realize their potential and work towards a better life.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Nepali women are born into a patriarchal society that consider Women's Rights secondary to those of men. Married early, with little or no education, no land rights or independent income, women are a voiceless section of society. They are highly dependent on men for their welfare. They bear the continued weight of socio-cultural discrimination and violence against them.
          </p>
        </div>
      </section>

      {/* Goals & Achievements Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 ">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left Column */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Goals</h2>
              <div className="text-gray-600 leading-relaxed space-y-6 mb-12">
                <p>
                  VIN aims to empower women socially and economically through education, life skills and income generation opportunities. By 2030, VIN aims to benefit at least 80% of the total women in the marginalized communities of the target areas (Kavresthali, Nuwakot and Okhaldhunga). Women Empowerment Program focuses its projects under three particularly important SDGs:
                </p>
                <div className="space-y-2 font-medium text-gray-900">
                  <p>Goal 1: No Poverty</p>
                  <p>Goal 4: Quality Education</p>
                  <p>Goal 5: Gender Equality</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">Achievements</h2>
              <div className="text-gray-600 leading-relaxed space-y-6">
                <p>
                  A total of 25,113 women benefited from the Women Empowerment Program.
                </p>
                <ul className="space-y-4 list-disc pl-5">
                  <li>
                    10,055 women were provided with Education and Life Skill Development trainings. They participated in workshops on Women Rights and Domestic Violence, Health and Sanitation, Life Skills etc.
                  </li>
                  <li>
                    Micro-credit Cooperative Support was rendered to 3,442 women via various activities such as Women's Group Formation, Women's Cooperatives and Excursions.
                  </li>
                  <li>
                    Entrepreneurship training was provided to 7,322 women e.g., trainings on Organic Farming, Animal Husbandry, Cheese Making etc.
                  </li>
                  <li>
                    Trafficking Prevention Education project supported 1,294 women. They were provided with trainings such as Embroidery, Knitting, Jewellery Making etc.
                  </li>
                  <li>
                    Construction of Women Business Centre in Kavresthali, Kathmandu, benefitted 3,000 women.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column (Project Links) */}
            <div className="lg:w-1/3">
              <div className="bg-[#EBF5FF] p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 leading-tight">
                  Women's Empowerment Projects
                </h3>
                <div className="space-y-8">
                  {[
                    { title: "Women's Education and Life Skills", img: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=400&q=80", href: "/programs/womens-empowerment/education" },
                    { title: "Microcredit Cooperative Support", img: "https://images.unsplash.com/photo-1590233465423-40844bb147d3?w=400&q=80", href: "/programs/womens-empowerment/microcredit" },
                    { title: "Entrepreneurship Development", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80", href: "/programs/womens-empowerment/entrepreneurship" },
                    { title: "Women's Trafficking Prevention", img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80", href: "/programs/womens-empowerment/trafficking" },
                  ].map((project, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden">
                        <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-bold text-[15px] mb-1 leading-tight">{project.title}</h4>
                        <Link href={project.href} className="text-[var(--blue)] text-sm font-semibold hover:underline flex items-center gap-1">
                          View Project <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <CTABanner />
    </main>
  );
}
