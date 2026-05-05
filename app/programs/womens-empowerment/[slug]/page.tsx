'use client';
import { useState, use } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import CTABanner from '../../../components/CTABanner';

const testimonials = [
  {
    name: "Shanti Tamang",
    signature: "Shanti Tamang",
    signatureTitle: "Farmer, Devisthan",
    text: "Namaste! My name is Shanti Tamang, I am a 34-year-old farmer from Devisthan, Tarkeshwar Municipality. Two years ago, I had the opportunity to participate in an English class offered by Volunteers Initiative Nepal (VIN) at the Women's Business Center (WBC) in Tinpiple, Tarkeshwar. At first, I hesitated to join because I thought learning English would be useless for someone like me, a farmer and a housewife. I was also worried it would interfere with my daily household activities. However, thanks to the encouragement of the women in my community, I decided to give it a try. Little did I know this decision would change my life in ways I never imagined.",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80"
  },
  {
    name: "Sunita Rai",
    signature: "Sunita Rai",
    signatureTitle: "Micro-entrepreneur",
    text: "Joining the VIN program was a turning point for me. The training in business management and the micro-loan I received helped me start my own small grocery shop. Now, I can support my children's education and feel much more confident in my role within the community. I am grateful for the constant support and guidance from the VIN team.",
    image: "https://images.unsplash.com/photo-1590233465423-40844bb147d3?w=800&q=80"
  }
];

export default function WomensEmpowermentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const [activeIndex, setActiveIndex] = useState(0);
  const currentTestimonial = testimonials[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main>
      {/* Hero Image Section */}
      <section className="w-full h-[670px] m-0 !px-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=80" 
          alt="Women's Empowerment" 
          className="w-full h-full object-cover" 
        />
      </section>

      {/* Info Card Section */}
      <section className="py-6 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#DFF0FF] border border-[#1D1E20]/10 rounded-[20px] p-6 lg:p-10 text-center shadow-sm">
            <h1 className="text-3xl lg:text-5xl font-[600] text-[#1D1E20] mb-4">
              Women's Education & Life Skills
            </h1>
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6 max-w-3xl mx-auto">
              Empowering women in rural and marginalized communities of Nepal through inclusive education, rights awareness, and practical life skills — building a foundation for lasting change. Support This ProjectView Repo
            </p>
            <Link 
              href="/donate" 
              className="inline-block bg-[#1e238f] text-white px-10 py-4 rounded-md font-[600] text-sm hover:bg-[#15196d] transition-all shadow-lg active:scale-95"
            >
              Support This Project
            </Link>
          </div>
        </div>
      </section>

      {/* The Reality Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-8">
            <h2 className="text-4xl lg:text-[50px] font-[600] text-[#1D1E20] mb-4 leading-tight">
              The Reality Nepalese Women Face Today
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Despite progress, deep inequalities persist — rooted in socio-cultural norms, poverty, and systemic exclusion from education and opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {[
              { stat: "1 in 4", text: "Women are enrolled in higher education in Nepal — leaving the vast majority without access to advanced learning and economic mobility." },
              { stat: "9 in 10", text: "Dalit women — from Nepal's most marginalized caste — remain uneducated, facing compounded barriers of caste, gender, and poverty." },
              { stat: "8 in 10", text: "Women experience domestic violence in Nepal, trapping them in cycles of dependence and preventing participation in civic life." },
              { stat: "3 in 10", text: "Parliamentary seats are reserved for women — a mandate that remains unfulfilled without education and civic empowerment at the grassroots level" }
            ].map((item, i) => (
              <div key={i} className="bg-[#DFF0FF] p-8 lg:p-10 rounded-[20px] transition-transform hover:scale-[1.02] duration-300">
                <div className="text-[#1e238f] text-5xl lg:text-5xl font-[600] mb-4">
                  {item.stat}
                </div>
                <p className="text-gray-900 text-[17px] lg:text-[18px] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Summary Box */}
          <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border-l-2 border-[#000000] relative overflow-hidden">
            <p className="text-gray-900 text-[15px] lg:text-[16px] leading-relaxed max-w-4xl mx-auto">
              Rural girl children are groomed for household labour from a young age, depriving them of education and civic participation. Poverty intensifies this cycle — decreasing school enrolment, increasing unpaid domestic work, and entrenching exclusion across generations. VIN works directly within these communities to reverse these patterns through access, skills, and awareness.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col gap-8">
            {/* Video Player */}
            <div className="relative aspect-video bg-red-600 rounded-[10px] overflow-hidden flex items-center justify-center cursor-pointer group shadow-2xl">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#e8172c" stroke="#e8172c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 gap-8">
              <div className="aspect-square rounded-[10px] overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80" 
                  alt="Women working together" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="aspect-square rounded-[10px] overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=800&q=80" 
                  alt="Women Empowerment training" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>

            {/* Wide Impact Image */}
            <div className="aspect-[16/8] rounded-[10px] overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80" 
                alt="Community of women" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>

            {/* CTA Button */}
            <div className="text-center mt-4">
              <Link 
                href="/gallery" 
                className="inline-block bg-[#1e238f] text-white px-10 py-3 rounded-md font-[600] text-sm hover:bg-[#15196d] transition-all shadow-lg active:scale-95"
              >
                Explore Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resilient Women Section */}
      <section className="py-12 lg:py-16 bg-[#eef8ff]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-[40px] font-[700] text-[#1a1a1a] mb-12 leading-tight">
            Building Self-Reliant, Resilient Women
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left: Navy Card */}
            <div className="bg-[#221C84] rounded-[6px] p-10 lg:py-24 lg:px-16 relative overflow-hidden w-120">
              {/* Decorative Circles */}
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-white/5 rounded-full" />
              <div className="absolute bottom-24 right-24 w-32 h-32 bg-white/5 rounded-full" />
              
              <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl font-[600] text-white mb-8 leading-tight">
                  Equal footing in all socio-cultural, economic & civic life
                </h3>
                
                <div className="flex flex-wrap gap-4">
                  {["Rights Awareness", "Literacy", "Life Skills", "Livelihoods"].map((skill) => (
                    <div 
                      key={skill} 
                      className="px-6 py-3 rounded-xl border border-white/30 text-white font-[600] text-sm hover:bg-white hover:text-[#221C84] transition-all cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Content & Target */}
            <div className="space-y-10">
              <p className="text-gray-600 text-xm leading-relaxed">
                The Women Education and Life Skills project empowers women to become self-reliant and resilient by providing access to relevant education and skills development — enabling them to participate on equal footing with men across all sectors of Nepali society.
              </p>
              
              <div className="bg-white rounded-[20px] p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50">
                <p className="text-gray-600 text-xm leading-relaxed">
                  <span className="text-[#221C84] font-[700]">2030 Target:</span> At least 80% of targeted women develop awareness of their rights and necessary life skills for economic independence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver Change Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-6">
            <h2 className="text-4xl lg:text-[46px] font-[600] text-[#1a1a1a] mb-4 leading-tight">
              How We Deliver Change
            </h2>
            <p className="text-gray-500 text-xm leading-relaxed">
              Five interconnected intervention streams, each designed to remove a specific barrier women face in rural Nepal.
            </p>
          </div>

          <div className="space-y-3 max-w-6xl">
            {[
              { num: "01", title: "Basic Education & Life Skills Training", desc: "Targeted training programs for women across different age groups, ensuring no woman is left behind regardless of prior learning" },
              { num: "02", title: "Reading & Writing for Marginalized Women", desc: "Foundational literacy programs specifically designed for Dalit and marginalized women who have never had access to formal schooling." },
              { num: "03", title: "Women's Rights Awareness Programs", desc: "Community workshops and activities that inform women of their legal rights, resources available to them, and how to advocate for themselves." },
              { num: "04", title: "Communication, Confidence & Decision-Making", desc: "Practical training in communication, stress management, self-esteem, problem solving, time management, and creative thinking." },
              { num: "05", title: "Small-Scale Vocational Skills", desc: "Income-generating skills training including candle-making, agro-farming, animal rearing, and soap production — creating real pathways to economic independence." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-10 bg-white border border-gray-300 rounded-[10px] p-4 lg:p-6 transition-all hover:shadow-xl hover:border-transparent group">
                <div className="text-[#221C84] text-4xl lg:text-5xl font-[700] opacity-90 group-hover:opacity-100 transition-opacity">
                  {step.num}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl lg:text-2xl font-[700] text-[#1D1E20] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text- lg:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Impact Section */}
      <section className="py-8 bg-[#eef8ff]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl lg:text-[46px] font-[600] text-[#1a1a1a] mb-6 leading-tight">
            Our Impact So Far
          </h2>

          <div className="flex flex-col gap-4 max-w-5xl mx-auto">
            {/* Main Highlight Card */}
            <div className="bg-[#221C84] rounded-[20px] p-8 lg:py-10 lg:px-12 text-center text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-4xl lg:text-6xl font-[700] mb-2 tracking-tight">10,055</div>
                <div className="text-xl lg:text-2xl font-[600] mb-2 max-w-2xl mx-auto leading-relaxed">
                  Women trained through facilitated workshops & programs
                </div>
                <div className="text-white/60 text-sm lg:text-base font-[400]">
                  Across rural and marginalized communities of Nepal · As of 2020
                </div>
              </div>
            </div>

            {/* Supporting Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { stat: "Multiple", label: "Districts reached across Nepal" },
                { stat: "5+", label: "Types of vocational skills delivered" },
                { stat: "2030", label: "Target year for SDG4 alignment" }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-[20px] p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white">
                  <div className="text-[#221C84] text-3xl lg:text-4xl font-[700] mb-2">
                    {item.stat}
                  </div>
                  <div className="text-gray-500 text-xs lg:text-sm leading-relaxed font-[400] max-w-[180px] mx-auto">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Women's Empowerment Projects */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="mb-8">
            <h2 className="text-3xl lg:text-5xl font-[600] text-[#1a1a1a] mb-6">
              Women's Empowerment Projects
            </h2>
            <p className="text-gray-600 text-[14px] lg:text-[16px] max-w-3xl leading-relaxed">
              We empower women both socially and economically by providing them access to education, life skills and income generation opportunities.
            </p>
          </div>

          <div className="relative group">
            {/* Navigation Arrows */}
            <button className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-md hover:bg-gray-50 transition-all z-10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-md hover:bg-gray-50 transition-all z-10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="rounded-[10px] overflow-hidden shadow-xl flex flex-col group/card">
                  {/* Top Image */}
                  <div className="relative h-[220px] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=800&q=80" 
                      alt="Project" 
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-[#221C84] text-white text-[10px] uppercase font-bold px-4 py-1.5 rounded-sm">
                      Women Empowerment
                    </div>
                  </div>
                  {/* Bottom Content */}
                  <div className="bg-[#1e238f] p-6 flex-1 flex flex-col">
                    <h4 className="text-white text-lg lg:text-xl font-[700] mb-3 leading-tight">
                      Women’s Development in Nepal: The Myth of Empowerment
                    </h4>
                    <p className="text-white/80 text-[13px] lg:text-[14px] leading-relaxed mb-4 line-clamp-2">
                      Loreum ipsum dipsum lorem ipsum dipsum Loreum ipsum dipsum lorem ..
                    </p>
                    <Link href="#" className="mt-auto text-white text-sm font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
                      Read More 
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 className="text-3xl lg:text-5xl font-[700] text-[#1a1a1a] text-center mb-12">
            Testimonials
          </h2>

          <div className="relative">
            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1e238f] flex items-center justify-center shadow-lg hover:bg-[#15196d] transition-all z-10"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1e238f] flex items-center justify-center shadow-lg hover:bg-[#15196d] transition-all z-10"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Column: Text */}
              <div className="order-2 lg:order-1">
                <p className="text-black text-[15px] font-[400] lg:text-[17px] leading-relaxed mb-6">
                  {currentTestimonial.text}
                </p>
                <div>
                  <h4 className="text-[#1a1a1a] text-xl font-[700] mb-1">{currentTestimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{currentTestimonial.signatureTitle}</p>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="order-1 lg:order-2">
                <div className=" overflow-hidden shadow-xl w-full max-w-[400px] h-[380px] ml-auto">
                  <img 
                    src={currentTestimonial.image}
                    alt="Testimonial Author" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </div>

            {/* View All Button */}
            <div className="flex justify-end mt-8">
              <button className="bg-[#1e238f] text-white px-8 py-3 rounded-md font-[600] text-sm hover:bg-[#15196d] transition-all shadow-lg active:scale-95">
                View All Testimonials
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Google Review Wall of Love */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-6xl font-[600] text-[#1a1a1a] mb-4">
              Google Review Wall of Love
            </h2>
            <p className="text-gray-500 text-lg">
              A heartfelt collection testimonials, and appreciation from our amazing community.
            </p>
          </div>

          {/* Rating Header */}
          <div className="bg-[#F8F9FA] rounded-[15px] p-6 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-2">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-6" />
                <span className="text-xl font-[600] text-gray-700">Rating</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl font-[600] text-gray-900">5.0</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill="#FFC107">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-gray-500 text-sm">420 reviews</span>
              </div>
            </div>
            <button className="bg-[#1e40af] text-white px-8 py-3 rounded-md font-[600] text-sm hover:bg-[#1e3a8a] transition-all shadow-md active:scale-95">
              Write A Review
            </button>
          </div>

          {/* Review Cards Carousel */}
          <div className="relative group">
            {/* Navigation Arrows */}
            <button className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1e238f] flex items-center justify-center shadow-lg hover:bg-[#15196d] transition-all z-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1e238f] flex items-center justify-center shadow-lg hover:bg-[#15196d] transition-all z-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "John Smith", title: "CEO, Tech Innovations Inc", initial: "J", date: "March 1, 2024", text: "Exceptional service! The team exceeded our expectations and delivered a top-notch product on time." },
                { name: "Sarah Johnson", title: "Marketing Manager, Bright Solutions", initial: "S", date: "February 15, 2024", text: "Working with this company was a game-changer. Their attention to detail are unmatched!" },
                { name: "Michael Brown", title: "Founder, Brown & Co.", initial: "M", date: "January 10, 2024", text: "A fantastic experience from start to finish. Highly recommended for anyone looking for quality work!" },
                { name: "Emily Davis", title: "HR Director, Global Enterprises", initial: "E", date: "December 20, 2023", text: "Great customer support and seamless service. The team truly cares about their clients." }
              ].map((review, i) => (
                <div key={i} className="bg-[#F8F9FA] rounded-[20px] p-8 flex flex-col items-center text-center shadow-sm border border-gray-50 hover:shadow-md transition-all">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#FFC107">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-8 h-[80px]">
                    {review.text}
                  </p>
                  <div className="w-12 h-12 rounded-full bg-[#9333ea] flex items-center justify-center text-white font-bold text-lg mb-4">
                    {review.initial}
                  </div>
                  <h4 className="text-gray-900 font-bold mb-1">{review.name}</h4>
                  <p className="text-gray-400 text-[12px] mb-4">{review.title}</p>
                  <p className="text-gray-400 text-[11px] mb-4">Posted on {review.date}</p>
                  <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4 opacity-70" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
