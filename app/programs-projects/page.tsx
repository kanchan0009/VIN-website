'use client';
import { useState, Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Play, ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import CTABanner from '../components/CTABanner';
import { topicContent } from '../data/programData';

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

const googleReviews = [
  { name: "John Smith", title: "Volunteer", initial: "J", date: "March 1, 2024", text: "Exceptional experience! The team exceeded our expectations and delivered a top-notch program." },
  { name: "Sarah Johnson", title: "Intern", initial: "S", date: "February 15, 2024", text: "Working with VIN was a game-changer. Their attention to detail and community focus are unmatched!" },
  { name: "Michael Brown", title: "Supporter", initial: "M", date: "January 10, 2024", text: "A fantastic experience from start to finish. Highly recommended for anyone looking to make an impact!" },
  { name: "Emily Davis", title: "Volunteer", initial: "E", date: "December 20, 2023", text: "Great local support and seamless service. The team truly cares about their volunteers and the community." },
  { name: "David Wilson", title: "Donor", initial: "D", date: "November 5, 2023", text: "A highly transparent organization. It's wonderful to see the direct impact of our contributions." },
  { name: "Jessica Lee", title: "Volunteer", initial: "J", date: "October 12, 2023", text: "The rural immersion was life-changing. I learned so much from the local community." }
];

// topicContent moved to app/data/programData.ts

function ProgramProjectsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const topic = searchParams.get('topic') || 'default';
  const content = topicContent[topic] || topicContent['default'];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex];

  const [reviewIndex, setReviewIndex] = useState(0);
  const [visibleReviewCount, setVisibleReviewCount] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleReviewCount(4);
      } else if (window.innerWidth >= 768) {
        setVisibleReviewCount(2);
      } else {
        setVisibleReviewCount(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextReview = () => {
    if (googleReviews.length <= visibleReviewCount) return;
    setReviewIndex((prev) => (prev + 1) % (googleReviews.length - visibleReviewCount + 1));
  };

  const prevReview = () => {
    if (googleReviews.length <= visibleReviewCount) return;
    setReviewIndex((prev) => (prev - 1 + (googleReviews.length - visibleReviewCount + 1)) % (googleReviews.length - visibleReviewCount + 1));
  };

  const handleDonateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const widget = document.getElementById("donation-widget");
    if (widget) {
      widget.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#donation-widget");
    }
  };

  const [projectIndex, setProjectIndex] = useState(0);
  const projects = content.focusedProjects || [];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextProject = () => {
    if (projects.length <= 3) return;
    setProjectIndex((prev) => (prev + 1) % (projects.length - 2));
  };

  const prevProject = () => {
    if (projects.length <= 3) return;
    setProjectIndex((prev) => (prev - 1 + (projects.length - 2)) % (projects.length - 2));
  };

  return (
    <main>
      {/* Hero Image Section */}
      <section className="w-full m-0 !px-0 overflow-hidden h-[100vh] min-h-[600px] max-h-[800px]">
        <img 
          src={content.heroImage} 
          alt={content.title} 
          className="w-full h-full object-cover" 
        />
      </section>

      {/* Info Card Section */}
      <section className="py-6 lg:py-10 bg-white">
        <div className=" mx-auto px-6">
          <div className="bg-[#DFF0FF] border border-[#1D1E20]/10 rounded-[20px] p-6 lg:p-10 text-center shadow-sm">
            <h1 className="text-3xl lg:text-5xl font-[600] text-[#1D1E20] mb-4">
              {content.infoTitle}
            </h1>
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6 max-w-3xl mx-auto">
              {content.infoDesc}
            </p>
            <button 
              onClick={handleDonateClick}
              className="inline-block bg-[#1e238f] text-white px-10 py-4 rounded-md font-[600] text-sm hover:bg-[#15196d] transition-all shadow-lg active:scale-95"
            >
              Support This Project
            </button>
          </div>
        </div>
      </section>

      {/* The Reality Section */}
      <section className="py-10 bg-white">
        <div className=" mx-auto px-6">
          <div className="max-w-3xl mb-8">
            <h2 className="text-4xl lg:text-[50px] font-[600] text-[#1D1E20] mb-4 leading-tight">
              {content.realityTitle}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              {content.realityDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {content.realityStats.map((item: any, i: number) => (
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
              {content.realitySummary}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col gap-8">
            {/* Video Player */}
            <div className="relative aspect-video bg-gray-900 rounded-[10px] overflow-hidden flex items-center justify-center cursor-pointer group shadow-2xl">
              <img src={content.heroImage} alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 z-10">
                <Play size={32} fill="#e8172c" className="text-[#e8172c] ml-1" />
              </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 gap-8">
              <div className="aspect-square rounded-[10px] overflow-hidden shadow-lg">
                <img 
                  src={content.heroImage} 
                  alt="Project moment" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="aspect-square rounded-[10px] overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=800&q=80" 
                  alt="Training session" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>

            {/* Wide Impact Image */}
            <div className="aspect-[16/8] rounded-[10px] overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80" 
                alt="Community impact" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>

            {/* CTA Button */}
            <div className="text-center mt-4">
              <Link 
                href={`/program-gallery?topic=${topic}`} 
                className="inline-block bg-[#1e238f] text-white px-10 py-3 rounded-md font-[600] text-sm hover:bg-[#15196d] transition-all shadow-lg active:scale-95"
              >
                Explore Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resilient Section */}
      <section className="py-12 lg:py-16 bg-[#DFF0FF]">
        <div className=" mx-auto px-6">
          <h2 className="text-3xl lg:text-[40px] font-[700] text-[#1a1a1a] mb-12 leading-tight">
            {content.resilientTitle}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-5 items-center">
            {/* Left: Navy Card */}
            <div className="bg-[var(--blue)] rounded-[6px] p-10 lg:py-24 lg:px-16 relative overflow-hidden w-120">
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-white/5 rounded-full" />
              <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl font-[600] text-white mb-8 leading-tight">
                  {content.resilientCardTitle}
                </h3>
                
                <div className="flex flex-wrap gap-4">
                  {content.resilientSkills.map((skill: string) => (
                    <div 
                      key={skill} 
                      className="px-6 py-3 rounded-xl border border-white/30 text-white font-[600] text-sm hover:bg-white hover:text-[var(--blue)] transition-all cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-10">
              <p className="text-gray-600 text-xm leading-relaxed">
                {content.resilientDesc}
              </p>
              
              <div className="bg-white rounded-[20px] p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border-l-2 border-[#221C84]">
                <p className="text-gray-600 text-xm leading-relaxed">
                  <span className="text-[var(--blue)] font-[700]">Our Commitment:</span> We ensure sustainable impact through professional guidance and community-led initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver Change Section */}
      <section className="py-8 bg-white">
        <div className=" mx-auto px-6">
          <div className="max-w-3xl mb-6">
            <h2 className="text-4xl lg:text-[46px] font-[600] text-[#1a1a1a] mb-4 leading-tight">
              {content.deliveryTitle}
            </h2>
            <p className="text-gray-500 text-xm leading-relaxed">
              {content.deliveryDesc}
            </p>
          </div>

          <div className="space-y-3 max-w-6xl">
            {content.deliverySteps.map((step: any, i: number) => (
              <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-10 bg-white border border-gray-300 rounded-[10px] p-4 lg:p-6 transition-all hover:shadow-xl hover:border-transparent group">
                <div className="text-[var(--blue)] text-4xl lg:text-5xl font-[700] opacity-90 group-hover:opacity-100 transition-opacity">
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
        <div className=" mx-auto px-6">
          <h2 className="text-[50px] lg:text-[46px] font-[600] text-[#1a1a1a] mb-8 leading-tight">
            {content.impactTitle}
          </h2>

          <div className="flex flex-col gap-4 max-w-5xl mx-auto">
            <div className="bg-[var(--blue)] rounded-[20px] p-8 lg:py-10 lg:px-12 text-center text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-4xl lg:text-6xl font-[700] mb-8 tracking-tight">{content.impactStat}</div>
                <div className="text-xl lg:text-2xl font-[600] mb-3 max-w-3xl mx-auto leading-relaxed">
                  {content.impactLabel}
                </div>
                <div className="text-white/60 text-sm lg:text-base font-[400]">
                  Across rural and marginalized communities of Nepal · Latest Data
                </div>
              </div>
            </div>

            {/* Supporting Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { stat: "Multiple", label: "Districts reached across Nepal" },
                { stat: "Verified", label: "Impact through regular monitoring" },
                { stat: "2030", label: "Alignment with Global SDGs" }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-[20px] p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white">
                  <div className="text-[var(--blue)] text-3xl lg:text-4xl font-[700] mb-2">
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

      {/* Projects Carousel */}
      <section className="py-12 bg-white">
        <div className=" mx-auto px-6 relative">
          <div className="mb-8">
            <h2 className="text-3xl lg:text-5xl font-[600] text-[#1a1a1a] mb-6">
              Our Focused Projects
            </h2>
            <p className="text-gray-600 text-[14px] lg:text-[16px] max-w-3xl leading-relaxed">
              Explore specialized initiatives designed to create lasting positive change in our communities.
            </p>
          </div>

          <div className="relative group">
            {/* Navigation Arrows */}
            {projects.length > 3 && (
              <>
                <button 
                  onClick={prevProject}
                  className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-md hover:bg-gray-50 transition-all z-10"
                >
                  <ChevronLeft size={20} className="text-gray-600" />
                </button>
                <button 
                  onClick={nextProject}
                  className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-md hover:bg-gray-50 transition-all z-10"
                >
                  <ChevronRight size={20} className="text-gray-600" />
                </button>
              </>
            )}

            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-8"
                style={{ transform: `translateX(-${projectIndex * (100 / 3)}%)` }}
              >
                {projects.map((project: any, i: number) => (
                  <div key={i} className="min-w-[calc(33.333%-22px)] rounded-[10px] overflow-hidden shadow-xl flex flex-col group/card">
                    <div className="relative h-[220px] overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-0 bg-[var(--blue)] text-white text-[10px] uppercase font-bold px-4 py-1.5 rounded-sm">
                        {content.title}
                      </div>
                    </div>
                    <div className="bg-[#1e238f] p-6 flex-1 flex flex-col">
                      <h4 className="text-white text-lg lg:text-xl font-[700] mb-3 leading-tight">
                        {project.title}
                      </h4>
                      <p className="text-white/80 text-[13px] lg:text-[14px] leading-relaxed mb-4 line-clamp-2">
                        {project.desc}
                      </p>
                      <Link href="#" className="mt-auto text-white text-sm font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
                        Read More 
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className=" mx-auto px-4 relative">
          <h2 className="text-[56px] font-[600] text-center mb-15 py-4">
            Testimonials
          </h2>

          <div className="flex items-center justify-center gap-2">
            <button
              onClick={prevTestimonial}
              className="shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white hover:opacity-90 transition-opacity"
              style={{ background: "var(--indigo-btn, #1e3a5f)" }}
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <div className="flex-1 max-w-10xl">
              <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                <div className="flex-1 order-2 md:order-1">
                  <p className="text-gray-700 text-[10px] font-[500] md:text-base leading-relaxed mb-6 text-justify">
                    {current.text}
                  </p>
                  <p className="font-bold text-sm md:text-base text-gray-900">
                    {current.signature}
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm mt-1">
                    {current.signatureTitle}
                  </p>
                </div>

                <div className="w-full md:w-80 lg:w-96 shrink-0 order-1 md:order-2">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                    <img
                      src={current.image}
                      alt={current.signature}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white hover:opacity-90 transition-opacity"
              style={{ background: "var(--indigo-btn, #1e3a5f)" }}
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          <div className="flex justify-end mt-8 md:mt-12  mx-auto px-4 md:pr-16">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[5px] font-[700] text-white text-base hover:opacity-90 transition-opacity"
              style={{ background: "var(--blue)" }}
            >
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Google Review Section (Static) */}
      <section className="py-20 bg-white">
        <div className=" mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-6xl font-[600] text-[#1a1a1a] mb-4">
              Google Review Wall of Love
            </h2>
            <p className="text-gray-500 text-lg">
              A heartfelt collection of appreciation from our amazing community.
            </p>
          </div>
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
                    <Star key={star} size={20} fill="#FFC107" className="text-[#FFC107]" />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">420 reviews</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            {/* Navigation Arrows */}
            {googleReviews.length > visibleReviewCount && (
              <>
                <button 
                  onClick={prevReview}
                  className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-md hover:bg-gray-50 transition-all z-10"
                >
                  <ChevronLeft size={20} className="text-gray-600" />
                </button>
                <button 
                  onClick={nextReview}
                  className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-md hover:bg-gray-50 transition-all z-10"
                >
                  <ChevronRight size={20} className="text-gray-600" />
                </button>
              </>
            )}

            <div className="overflow-hidden py-4">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${reviewIndex * (100 / visibleReviewCount)}%)` }}
              >
                {googleReviews.map((review, i) => (
                  <div 
                    key={i} 
                    className="w-full md:w-1/2 lg:w-1/4 px-3 shrink-0"
                  >
                    <div className="h-full bg-[#F8F9FA] rounded-[20px] p-8 flex flex-col items-center text-center shadow-sm border border-gray-50 hover:shadow-md transition-all">
                      <div className="flex gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} size={16} fill="#FFC107" className="text-[#FFC107]" />
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
                      <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4 opacity-70" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}

export default function ProgramProjectsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ProgramProjectsContent />
    </Suspense>
  );
}
