'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Play } from 'lucide-react';
import CTABanner from '../../components/CTABanner';
import GetInvolved from '../../components/GetInvolved';
import DonationWidget from '../../components/DonationWidget';

const stats = [
  { value: '50,000+', label: 'Trees Planted in Rural Nepal' },
  { value: '120', label: 'Community Gardens Established' },
  { value: '75%', label: 'Increase in local biodiversity awareness' },
];

const goals = [
  { num: '01', title: 'Reforestation', desc: "We restore degraded landscapes by planting native tree species, helping to combat soil erosion and climate change." },
  { num: '02', title: 'Waste Management', desc: "We implement sustainable waste collection and recycling systems in rural villages to protect local ecosystems." },
  { num: '03', title: 'Organic Farming', desc: "We promote eco-friendly agricultural practices that preserve soil health and provide sustainable food sources for communities." },
  { num: '04', title: 'Climate Advocacy', desc: "We educate local communities about the impacts of climate change and empower them with adaptation strategies." },
];

const whyItems = [
  { title: 'Ecological Balance', icon: '🌳', desc: "Preserving Nepal's unique biodiversity is essential for the health of both the environment and the people." },
  { title: 'Climate Action', icon: '🌡️', desc: "Taking local steps to address the global climate crisis through reforestation and sustainable living." },
  { title: 'Sustainable Resources', icon: '💧', desc: "Ensuring that future generations have access to clean water, fertile soil, and healthy forests." },
  { title: 'Eco-Education', icon: '🎓', desc: "Building a culture of environmental stewardship among the youth and community leaders." },
];

const otherPrograms = [
  { title: "Women's Empowerment", img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80', stat: '32,035', label: "Lives impacted", desc: "Is central to empowerment & prosperity of a community.", href: '/programs/womens-empowerment' },
  { title: "Child Development", img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80', stat: '18,400', label: "Lives impacted", desc: "Is central to empowerment & prosperity of a community.", href: '/programs/child-development' },
  { title: "Youth Empowerment", img: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400&q=80', stat: '12,500', label: "Lives impacted", desc: "Is central to empowerment & prosperity of a community.", href: '/programs/youth-empowerment' },
  { title: "Disaster Risk Reduction", img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80', stat: '32,035', label: "Lives impacted", desc: "Is central to empowerment & prosperity of a community.", href: '/programs/disaster-risk' },
];

const albums = [
  {
    title: "Community Reforestation Drive",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
  },
  {
    title: "Organic Kitchen Gardening",
    img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80",
  },
];

const testimonials = [
  {
    name: "Pasang Sherpa",
    signature: "Pasang Sherpa",
    signatureTitle: "Community Forest Leader",
    text: "The support from VIN has transformed our approach to forest management. The thousands of saplings we've planted are already making a difference in preventing landslides during the monsoon. Our community now understands the vital link between our forests and our water sources. We are proud to be guardians of our local environment.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80"
  },
  {
    name: "David Miller",
    signature: "David Miller",
    signatureTitle: "Environmental Volunteer",
    text: "Volunteering with the environment program was an incredible journey. Seeing the passion of the local youth for protecting their mountains was inspiring. We worked together on waste management workshops and building community gardens. It's rewarding to know that these small local actions contribute to a much larger global impact.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80"
  }
];

export default function EnvironmentPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main>
      {/* Header Section */}
      <section className="bg-white pt-10 pb-6">
        <div className=" mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-[700] text-[#1a1a1a] mb-3 leading-tight">
            Environment & Conservation
          </h1>
          <div className="">
            <p className="text-gray-600 text-[14px] lg:text-[16px] leading-relaxed font-[400] mb-2">
              Our Environment & Conservation program is dedicated to protecting Nepal's natural heritage and promoting sustainable living. We work with local communities to restore forests, manage waste, and implement eco-friendly agricultural practices to ensure a resilient and healthy ecosystem for future generations.
            </p>
            <Link href="/programs/environment/overview" className="text-[var(--blue)] text-[16px] font-[600] hover:underline">
              Read More..
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mb-10 p-0 !px-0">
        <div className="w-full h-[500px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80" 
            alt="Lush green forest in Nepal" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Why + Vision Section */}
      <section className="pb-10 bg-white">
        <div className=" mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Content: Why Section */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl lg:text-[40px] font-[600] text-[#1a1a1a] mb-6">
                Why Environment Programs
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                {whyItems.map((item, idx) => (
                  <div key={idx} className="h-[325px] p-10 rounded-[10px] border border-[#D9D9D9] shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                    <div className="w-12 h-12 rounded-lg bg-[#E6F4FE] flex items-center justify-center mb-4 text-2xl">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-[700] text-[#1a1a1a] mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-[14px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:w-[35%] space-y-6">
              {/* Vision Box */}
              <div className="bg-[#DFF0FF] pt-10 pb-8 px-6 rounded-[10px] text-center shadow-sm">
                <h3 className="text-xl lg:text-[32px] font-[700] text-[#1a1a1a] mb-6 leading-tight">
                  Sustainable Nepal <br /> we envision for all
                </h3>
                <div className="relative w-full max-w-[300px] mx-auto aspect-[356/375]">
                  <img 
                    src="/pillars.png" 
                    alt="Pillars Diagram" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Sidebar Image */}
              <div className="rounded-[10px] overflow-hidden shadow-lg aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80" 
                  alt="Scenic mountain landscape" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Situation */}
      <section className="py-12 bg-[#E6F4FE]">
        <div className=" mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-[700] text-[#1a1a1a] mb-8">
            Current Situation
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            {/* Left Stat Card */}
            <div className="w-full lg:w-[400px] h-[350px] bg-[#B2D2FF] rounded-[10px] flex flex-col items-center justify-center p-12 text-center shadow-sm">
              <div className="text-7xl lg:text-7xl font-[700] text-[var(--blue)] mb-8">
                22 %
              </div>
              <p className="text-xl lg:text-2xl font-[600] text-[#1a1a1a] leading-snug">
                Annual forest loss <br /> due to rapid urbanization
              </p>
            </div>

            {/* Right List Items */}
            <div className="flex-1 space-y-0">
              {[
                "Increased frequency of landslides and floods due to deforestation and soil erosion.",
                "Lack of organized waste management systems leading to pollution of rivers and soil.",
                "Threat to local biodiversity from habitat loss and climate-induced changes.",
                "Traditional agricultural methods often lead to soil exhaustion and chemical pollution.",
                "Vulnerability of rural communities to the immediate impacts of climate change."
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`flex gap-8 py-4 items-start ${i !== 4 ? 'border-b border-gray-300' : ''}`}
                >
                  <div className="w-4 h-4 rounded-full bg-[var(--blue)] mt-2 shrink-0" />
                  <p className="text-gray-700 text-[15px] lg:text-[16px] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative rounded-[10px] overflow-hidden h-[450px] bg-black flex items-center justify-center cursor-pointer group">
            <img 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80" 
              alt="Program Video Thumbnail" 
              className="absolute inset-0 w-full h-full object-cover opacity-60" 
            />
            <div className="relative z-10 w-20 h-20 group-hover:scale-110 transition-transform drop-shadow-2xl">
              <svg viewBox="0 0 80 80" className="w-full h-full">
                <defs>
                  <mask id="play-mask-env">
                    <rect width="80" height="80" fill="white" rx="40" ry="40" />
                    <path d="M55 40L35 53V27L55 40Z" fill="black" />
                  </mask>
                </defs>
                <rect width="80" height="80" fill="white" mask="url(#play-mask-env)" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Album Gallery Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className=" mx-auto px-6 relative">
          <h2 className="text-3xl lg:text-4xl font-[700] text-[#1a1a1a] text-center mb-16">
            Album Gallery
          </h2>

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

            {/* Album Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
              {albums.map((album, idx) => (
                <div
                  key={idx}
                  className="relative rounded-[20px] overflow-hidden group w-full aspect-square shadow-xl"
                >
                  <img
                    src={album.img}
                    alt={album.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-center px-6">
                    <h4 className="text-white text-lg lg:text-xl font-[600] mb-6 leading-tight">
                      {album.title}
                    </h4>
                    <button className="bg-[#1e238f] text-white px-8 py-3 rounded-md font-[600] text-sm hover:bg-[#15196d] transition-all active:scale-95 shadow-lg">
                      Explore Album
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-white">
        <div className=" mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-[700] text-[#1a1a1a] mb-4">
            What we're working toward
          </h2>
          <p className="text-gray-600 text-[14px] lg:text-[15px] max-w-3xl mb-12">
            Our Environment program aims to create a sustainable balance between community development and nature conservation.
          </p>

          <div className="space-y-4">
            {goals.map((goal, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-8 px-8 py-5 lg:px-10 lg:py-6 rounded-[20px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <div className="text-4xl lg:text-5xl font-[800] text-[var(--blue)] shrink-0 w-20">
                  {goal.num}
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-[700] text-[#1a1a1a] mb-1">
                    {goal.title}
                  </h4>
                  <p className="text-gray-500 text-[14px] lg:text-[15px] leading-relaxed">
                    {goal.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 bg-[#E6F4FE]">
        <div className=" mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-[700] text-[#1a1a1a] mb-12">
            Our Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-[#BFD9FF] p-8 rounded-[20px] text-center flex flex-col items-center justify-center min-h-[180px] shadow-sm"
              >
                <div className="text-5xl font-[800] text-[var(--blue)] mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-700 text-[14px] lg:text-[15px] font-[500] leading-snug max-w-[200px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-[25px] shadow-sm border-l-2 border-[#221C84]">
            <p className="text-gray-600 text-[15px] lg:text-[17px] leading-relaxed max-w-5xl mx-auto text-center">
              The Environment & Conservation Program has not only restored thousands of acres of land but has also inspired a generation of eco-warriors dedicated to protecting Nepal's pristine nature.
            </p>
          </div>
        </div>
      </section>

      {/* Related Media */}
      <section className="py-10 bg-white overflow-hidden">
        <div className=" mx-auto px-6 text-center mb-10">
          <h2 className="text-3xl lg:text-[50px] font-[500] text-[#1a1a1a] mb-5">
            Related Media
          </h2>
          
          <div className="inline-block relative mb-5">
            <button className="flex items-center gap-4 px-10 py-3 border border-gray-400 rounded-[5px] text-gray-700 font-[500] hover:bg-gray-50 transition-all">
              Types of Media
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
          </div>

          <p className="text-[#555555] text-[16px] font-[400] lg:text-[17px] max-w-4xl mx-auto leading-relaxed">
            Explore the beauty of Nepal's nature and the impact of our conservation work through our media gallery.
          </p>
        </div>

        <div className="max-w-[1500px] mx-auto px-6 relative group">
          <button className="absolute -left-2 lg:left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-md hover:bg-gray-50 transition-all z-10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button className="absolute -right-2 lg:right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-md hover:bg-gray-50 transition-all z-10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {[
              { id: '01', type: 'image', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80' },
              { id: '02', type: 'image', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80' },
              { id: '03', type: 'video', img: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&q=80' },
              { id: '04', type: 'image', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80' },
            ].map((item) => (
              <div key={item.id} className="relative aspect-[4/5] rounded-[10px] overflow-hidden shadow-lg group/item">
                <img 
                  src={item.img} 
                  alt={`Media ${item.id}`} 
                  className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[var(--blue)] font-bold text-xs shadow-sm">
                  {item.id}
                </div>
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xl group-hover/item:scale-110 transition-transform">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--blue)" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 bg-white">
        <div className=" mx-auto px-6 relative">
           <h2 className="text-3xl lg:text-4xl font-[700] text-[#1a1a1a] mb-4">
            Environment Projects
          </h2>
          <p className="text-gray-600 text-[14px] lg:text-[15px] max-w-3xl mb-12">
            Explore our specific projects focused on reforestation, sustainable agriculture, and ecological awareness.
          </p>

          <div className="relative group">
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
                  <div className="relative h-[220px] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80" 
                      alt="Project" 
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-0 bg-[var(--blue)] text-white text-[12px] uppercase font-bold px-4 py-1.5 rounded-sm">
                      Environment
                    </div>
                  </div>
                  <div className="bg-[#1e238f] p-6 flex-1 flex flex-col">
                    <h4 className="text-white text-[18px] lg:text-xl font-[500] mb-3 leading-tight">
                      Mountain Reforestation and Watershed Protection
                    </h4>
                    <p className="text-white/80 text-[13px] lg:text-[14px] leading-relaxed mb-4 line-clamp-2">
                      Planting native species to restore mountain ecosystems and ensure sustainable water flow for downstream villages.
                    </p>
                    <Link href="#" className="mt-auto text-white text-sm font-[600] flex items-center gap-2 hover:translate-x-2 transition-transform">
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

      {/* Testimonials */}
      <section className="py-12 bg-white border-t border-gray-50">
        <div className=" mx-auto px-6 relative">
          <h2 className="text-3xl lg:text-5xl font-[700] text-[#1a1a1a] text-center mb-12">
            Testimonials
          </h2>

          <div className="relative flex items-center gap-4 md:gap-8  mx-auto">
            <button
              onClick={prevTestimonial}
              className="shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white hover:opacity-90 transition-opacity"
              style={{ background: "var(--indigo-btn, #1e3a5f)" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
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
                      alt={current.name}
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          <div className="flex justify-end mt-8 md:mt-12 mx-auto px-4 md:pr-16">
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

      {/* Other Programs */}
      <section className="py-20 bg-[#e6f4fe]">
        <div className=" mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-[700] text-[#1a1a1a] mb-2">Other Programs</h2>
            <p className="text-gray-600">Explore our other initiatives making a difference in Nepal.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherPrograms.map((p, i) => (
              <Link href={p.href} key={i} className="group flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative h-[250px] overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-center">
                    <span className="text-white text-2xl font-[700] mb-1">{p.stat}</span>
                    <span className="text-white/80 text-[11px] uppercase tracking-wider">{p.label}</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col items-center text-center flex-1">
                  <h3 className="text-[#1a1a1a] font-[700] text-lg mb-4 leading-tight group-hover:text-[var(--blue)] transition-colors">{p.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/programs" className="bg-[#1e238f] text-white px-10 py-3 rounded-md font-[600] text-sm hover:bg-[#15196d] transition-all shadow-lg active:scale-95 inline-block">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
      <GetInvolved />
    </main>
  );
}
