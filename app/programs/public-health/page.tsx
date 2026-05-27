'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Play, ChevronLeft, ChevronRight, ChevronDown, Stethoscope, Droplets, Heart, Hammer } from 'lucide-react';
import CTABanner from '../../components/CTABanner';
import DonationWidget from '../../components/DonationWidget';

const stats = [
  { value: '25,000+', label: 'Patients Treated in Rural Camps' },
  { value: '450', label: 'Toilets Constructed in Villages' },
  { value: '88%', label: 'Reduction in water-borne diseases' },
];

const goals = [
  { num: '01', title: 'Basic Healthcare Access', desc: "We provide essential medical services and check-ups to remote communities that lack permanent health facilities." },
  { num: '02', title: 'WASH Initiatives', desc: "We promote Water, Sanitation, and Hygiene (WASH) through infrastructure support and community education to prevent diseases." },
  { num: '03', title: 'Maternal & Child Health', desc: "We focus on improving health outcomes for mothers and children through prenatal care, vaccinations, and nutritional guidance." },
  { num: '04', title: 'Health Education', desc: "We empower communities with knowledge about hygiene, disease prevention, and reproductive health to ensure long-term wellness." },
];

const whyItems = [
  { title: 'Lifesaving Care', icon: <Stethoscope size={32} className="text-[var(--blue)]" />, desc: "Providing immediate medical attention to those who would otherwise have no access to healthcare professionals." },
  { title: 'Disease Prevention', icon: <Droplets size={32} className="text-[var(--blue)]" />, desc: "Focusing on hygiene and sanitation to tackle the root causes of common illnesses in rural Nepal." },
  { title: 'Community Wellness', icon: <Heart size={32} className="text-[var(--blue)]" />, desc: "Building a healthier community through consistent support, education, and health monitoring." },
  { title: 'Sustainable Infrastructure', icon: <Hammer size={32} className="text-[var(--blue)]" />, desc: "Building toilets and clean water systems that provide lasting health benefits to entire villages." },
];

const otherPrograms = [
  { title: "Women's Empowerment", img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80', stat: '32,035', label: "Lives impacted", desc: "Is central to empowerment & prosperity of a community.", href: '/programs/womens-empowerment' },
  { title: "Child Development", img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80', stat: '18,400', label: "Lives impacted", desc: "Is central to empowerment & prosperity of a community.", href: '/programs/child-development' },
  { title: "Youth Empowerment", img: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400&q=80', stat: '12,500', label: "Lives impacted", desc: "Is central to empowerment & prosperity of a community.", href: '/programs/youth-empowerment' },
  { title: "Environment & Conservation", img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80', stat: '32,035', label: "Lives impacted", desc: "Is central to empowerment & prosperity of a community.", href: '/programs/environment' },
];

const albums = [
  {
    title: "Mobile Health Camp - Nuwakot",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
  },
  {
    title: "Sanitation Project Gallery",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80",
  },
  {
    title: "Community Dental Checkups",
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
  },
  {
    title: "Women's Health Education",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
  },
];

const mediaItems = [
  { id: '01', type: 'image', img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80' },
  { id: '02', type: 'image', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80' },
  { id: '03', type: 'video', img: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600&q=80' },
  { id: '04', type: 'image', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80' },
];

const testimonials = [
  {
    name: "Dr. Sandeep Pandey",
    signature: "Dr. Sandeep Pandey",
    signatureTitle: "Volunteer Physician",
    text: "Working with VIN on their medical camps has been an eye-opening experience. The gratitude of the people who walk for hours to see a doctor is overwhelming. We are not just treating symptoms; we are providing hope and education that will save lives long after the camp ends. The impact on maternal health in these regions is particularly heartening.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80"
  },
  {
    name: "Binita Thapa",
    signature: "Binita Thapa",
    signatureTitle: "Community Health Volunteer",
    text: "Since VIN started the WASH program in our village, the number of children getting sick from stomach problems has dropped significantly. Every house now has a toilet, and people understand the importance of washing hands. This change in hygiene has made our entire community stronger and more productive.",
    image: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=800&q=80"
  }
];

export default function PublicHealthPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [albumIndex, setAlbumIndex] = useState(0);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);
  const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState('Types of Media');
  const [visibleMediaCount, setVisibleMediaCount] = useState(1);
  const [visibleProjectCount, setVisibleProjectCount] = useState(1);
  const [visibleAlbumCount, setVisibleAlbumCount] = useState(1);

  const filteredMedia = mediaItems.filter(item => {
    if (selectedMedia === 'Types of Media') return true;
    if (selectedMedia === 'Images') return item.type === 'image';
    if (selectedMedia === 'Videos') return item.type === 'video';
    return true;
  });

  const current = testimonials[activeIndex];

  useEffect(() => {
    setMediaIndex(0);
  }, [selectedMedia]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleMediaCount(4);
        setVisibleProjectCount(3);
        setVisibleAlbumCount(2);
      } else if (window.innerWidth >= 640) {
        setVisibleMediaCount(2);
        setVisibleProjectCount(2);
        setVisibleAlbumCount(2);
      } else {
        setVisibleMediaCount(1);
        setVisibleProjectCount(1);
        setVisibleAlbumCount(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main>
      {/* Header Section */}
      <section className="bg-white pt-5 md:pt-10 pb-6">
        <div className=" mx-auto px-6">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-[700] text-[#1a1a1a] mb-3 leading-tight">
            Public Health & Medical Care
          </h1>
          <div className="">
            <p className="text-gray-600 text-[14px] lg:text-[16px] leading-relaxed font-[400] mb-2">
              Our Public Health & Medical Care program works to improve the health status of marginalized rural communities in Nepal. We focus on providing basic healthcare services, promoting hygiene and sanitation (WASH), and conducting health awareness campaigns to ensure a healthier future for all.
              {isExpanded && (
                <>
                  <br /><br />
                  Our comprehensive approach includes mobile health camps that bring physicians to remote districts, the construction of essential sanitation infrastructure, and targeted maternal and child health initiatives. We believe that health is a fundamental right, not a privilege.
                  <br /><br />
                  By combining immediate medical relief with long-term hygiene education and community health volunteer training, we are building resilient health systems from the ground up in Nepal's most vulnerable areas.
                </>
              )}
            </p>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[var(--blue)] text-[16px] font-[600] hover:underline"
            >
              {isExpanded ? "Read Less" : "Read More.."}
            </button>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mb-5 md:mb-10 p-0 !px-0 h-[75vh] min-h-[600px] max-h-[800px]">
        <div className="w-full overflow-hidden h-full">
          <img 
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=1600&q=80" 
            alt="Healthcare professionals at a camp" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Why + Vision Section */}
      <section className="pb-5 md:pb-10 bg-white">
        <div className=" mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Content: Why Section */}
            <div className="lg:w-2/3">
              <h2 className="text-xl md:text-3xl lg:text-[40px] font-[600] text-[#1a1a1a] mb-6">
                Why Public Health Programs
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                {whyItems.map((item, idx) => (
                  <div key={idx} className="h-[325px] p-5 md:p-10 rounded-[10px] border border-[#D9D9D9] shadow-sm hover:shadow-md transition-all duration-300 bg-white">
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
              <div className="bg-[#DFF0FF] pt-5 md:pt-10 pb-4 md:pb-8 px-6 rounded-[10px] text-center shadow-sm">
                <h3 className="text-xl lg:text-[32px] font-[700] text-[#1a1a1a] mb-6 leading-tight">
                  Healthy Community <br /> we envision for all
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
                  src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&q=80" 
                  alt="Mother and child health checkup" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Situation */}
      <section className="py-6 md:py-12 bg-[#E6F4FE]">
        <div className=" mx-auto px-6">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-[700] text-[#1a1a1a] mb-4 md:mb-8">
            Current Situation
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16 lg:gap-32">
            {/* Left Stat Card */}
            <div className="w-full lg:w-[400px] h-[350px] bg-[#B2D2FF] rounded-[10px] flex flex-col items-center justify-center p-6 md:p-12 text-center shadow-sm">
              <div className="text-5xl md:text-7xl lg:text-7xl font-[700] text-[var(--blue)] mb-4 md:mb-8">
                65 %
              </div>
              <p className="text-xl lg:text-2xl font-[600] text-[#1a1a1a] leading-snug">
                Villages lack permanent <br /> healthcare facilities
              </p>
            </div>

            {/* Right List Items */}
            <div className="flex-1 space-y-0">
              {[
                "Critical lack of medical professionals and clinics in remote mountain regions.",
                "High prevalence of water-borne diseases due to lack of clean water and sanitation.",
                "Inadequate awareness of maternal health and prenatal care practices.",
                "Limited access to basic medicines and emergency healthcare services.",
                "Stigma surrounding reproductive health and hygiene in many rural communities."
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`flex gap-4 md:gap-8 py-4 items-start ${i !== 4 ? 'border-b border-gray-300' : ''}`}
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
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative rounded-[10px] overflow-hidden h-[450px] bg-black flex items-center justify-center cursor-pointer group">
            <img 
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1600&q=80" 
              alt="Program Video Thumbnail" 
              className="absolute inset-0 w-full h-full object-cover opacity-60" 
            />
            <div className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform drop-shadow-2xl">
              <Play size={32} fill="currentColor" className="text-gray-900 ml-1" />
            </div>
          </div>
        </div>
      </section>

      {/* Album Gallery Section */}
      <section className="py-10 md:py-20 bg-white overflow-hidden">
        <div className=" mx-auto px-6 relative">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-[700] text-[#1a1a1a] text-center mb-8 md:mb-16">
            Album Gallery
          </h2>

          <div className="relative group">
            {/* Navigation Arrows */}
            {albums.length > visibleAlbumCount && (
              <>
                <button 
                  onClick={() => setAlbumIndex((prev) => (prev - 1 + albums.length) % albums.length)}
                  className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-md hover:bg-gray-50 transition-all z-10"
                >
                  <ChevronLeft size={20} className="text-gray-600" />
                </button>
                <button 
                  onClick={() => setAlbumIndex((prev) => (prev + 1) % albums.length)}
                  className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-md hover:bg-gray-50 transition-all z-10"
                >
                  <ChevronRight size={20} className="text-gray-600" />
                </button>
              </>
            )}

            {/* Album Grid */}
            <div className="overflow-hidden px-4 py-4 -mx-4">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-8 md:gap-16 lg:gap-24 max-w-6xl mx-auto"
                style={{ transform: `translateX(-${albumIndex * (100 / visibleAlbumCount)}%)` }}
              >
                {albums.map((album, idx) => (
                  <div
                    key={idx}
                    className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(50%-3rem)] min-w-full md:min-w-[calc(50%-2rem)] lg:min-w-[calc(50%-3rem)] shrink-0 relative rounded-[20px] overflow-hidden group aspect-square shadow-xl"
                  >
                  <img
                    src={album.img}
                    alt={album.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-5 md:pb-10 text-center px-6">
                    <h4 className="text-white text-lg lg:text-xl font-[600] mb-6 leading-tight">
                      {album.title}
                    </h4>
                    <Link href="/program-gallery?topic=public-health">
                      <button className="bg-[#1e238f] text-white px-4 md:px-8 py-3 rounded-md font-[600] text-sm hover:bg-[#15196d] transition-all active:scale-95 shadow-lg">
                        Explore Album
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className=" mx-auto px-6">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-[700] text-[#1a1a1a] mb-4">
            What we're working toward
          </h2>
          <p className="text-gray-600 text-[14px] lg:text-[15px] max-w-3xl mb-6 md:mb-12">
            Our Public Health initiatives are designed to create a self-sustaining culture of wellness in rural Nepal.
          </p>

          <div className="space-y-4">
            {goals.map((goal, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 md:gap-8 px-4 md:px-8 py-5 lg:px-10 lg:py-6 rounded-[20px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <div className="text-2xl md:text-4xl lg:text-5xl font-[800] text-[var(--blue)] shrink-0 w-20">
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
      <section className="py-6 md:py-12 bg-[#E6F4FE]">
        <div className=" mx-auto px-6">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-[700] text-[#1a1a1a] mb-6 md:mb-12">
            Our Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-4 md:mb-8">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-[#BFD9FF] p-4 md:p-8 rounded-[20px] text-center flex flex-col items-center justify-center min-h-[180px] shadow-sm"
              >
                <div className="text-3xl md:text-5xl font-[800] text-[var(--blue)] mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-700 text-[14px] lg:text-[15px] font-[500] leading-snug max-w-[200px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 md:p-8 lg:p-12 rounded-[25px] shadow-sm border-l-2 border-[#221C84]">
            <p className="text-gray-600 text-[15px] lg:text-[17px] leading-relaxed max-w-5xl mx-auto text-center">
              The Public Health & Medical Care Program has become a lifeline for thousands, proving that with community engagement and dedicated volunteers, we can overcome even the most daunting health challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Related Media */}
      <section className="py-5 md:py-10 bg-white overflow-hidden">
        <div className=" mx-auto px-6 text-center mb-5 md:mb-10">
          <h2 className="text-xl md:text-3xl lg:text-[50px] font-[500] text-[#1a1a1a] mb-5">
            Related Media
          </h2>
          
          {/* Filter Dropdown */}
          <div className="inline-block relative mb-5">
            <button 
              onClick={() => setIsMediaDropdownOpen(!isMediaDropdownOpen)}
              className="flex items-center gap-4 px-5 md:px-10 py-3 border border-gray-400 rounded-[5px] text-gray-700 font-[500] hover:bg-gray-50 transition-all min-w-[200px] justify-between"
            >
              {selectedMedia}
              <ChevronDown size={16} className={`transition-transform duration-300 ${isMediaDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isMediaDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-[5px] shadow-lg z-50 overflow-hidden py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                {['Images', 'Videos'].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedMedia(option);
                      setIsMediaDropdownOpen(false);
                    }}
                    className={`w-full text-left px-6 py-2.5 text-sm transition-colors hover:bg-gray-50 ${
                      selectedMedia === option ? 'text-[var(--blue)] font-semibold' : 'text-gray-600'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          <p className="text-[#555555] text-[16px] font-[400] lg:text-[17px] max-w-4xl mx-auto leading-relaxed">
            See the impact of our health camps and sanitation projects through these captured moments of care and progress.
          </p>
        </div>

        <div className="max-w-[1500px] mx-auto px-6 relative group">
          {/* Navigation Arrows */}
          {filteredMedia.length > visibleMediaCount && (
            <>
              <button 
                onClick={() => setMediaIndex((prev) => (prev - 1 + filteredMedia.length) % filteredMedia.length)}
                className="absolute -left-2 lg:left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-md hover:bg-gray-50 transition-all z-10"
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              <button 
                onClick={() => setMediaIndex((prev) => (prev + 1) % filteredMedia.length)}
                className="absolute -right-2 lg:right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-md hover:bg-gray-50 transition-all z-10"
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </>
          )}

          <div className="overflow-hidden px-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${mediaIndex * (100 / visibleMediaCount)}%)` }}
            >
              {filteredMedia.map((item) => (
                <div key={item.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(25%-18px)] shrink-0 relative aspect-[4/5] rounded-[10px] overflow-hidden shadow-lg group/item">
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
                        <Play size={24} fill="var(--blue)" className="text-[var(--blue)]" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-6 md:py-12 bg-white">
        <div className=" mx-auto px-6 relative">
           <h2 className="text-xl md:text-3xl lg:text-4xl font-[700] text-[#1a1a1a] mb-4">
            Public Health Projects
          </h2>
          <p className="text-gray-600 text-[14px] lg:text-[15px] max-w-3xl mb-6 md:mb-12">
            Explore specific projects focused on improving medical infrastructure and community health knowledge.
          </p>

          <div className="relative group">
            <button 
              onClick={() => setProjectIndex((prev) => (prev - 1 + 3) % 3)}
              className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-md hover:bg-gray-50 transition-all z-10"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button 
              onClick={() => setProjectIndex((prev) => (prev + 1) % 3)}
              className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-md hover:bg-gray-50 transition-all z-10"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>

            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-8"
                style={{ transform: `translateX(-${projectIndex * (100 / visibleProjectCount)}%)` }}
              >
                {[1, 2, 3].map((item) => (
                  <div key={item} className="min-w-full sm:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-22px)] rounded-[10px] overflow-hidden shadow-xl flex flex-col group/card">
                  <div className="relative h-[220px] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80" 
                      alt="Project" 
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-0 bg-[var(--blue)] text-white text-[12px] uppercase font-bold px-4 py-1.5 rounded-sm">
                      Public Health
                    </div>
                  </div>
                  <div className="bg-[#1e238f] p-6 flex-1 flex flex-col">
                    <h4 className="text-white text-[18px] lg:text-xl font-[500] mb-3 leading-tight">
                      Maternal and Child Health Support in Remote Districts
                    </h4>
                    <p className="text-white/80 text-[13px] lg:text-[14px] leading-relaxed mb-4 line-clamp-2">
                      Ensuring safe motherhood and healthy development for children through education and basic care.
                    </p>
                    <Link href="/programs-projects?topic=public-health" className="mt-auto text-white text-sm font-[600] flex items-center gap-2 hover:translate-x-2 transition-transform">
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
      <section className="py-6 md:py-12 bg-white border-t border-gray-50">
        <div className=" mx-auto px-6 relative">
          <h2 className="text-xl md:text-3xl lg:text-5xl font-[700] text-[#1a1a1a] text-center mb-6 md:mb-12">
            Testimonials
          </h2>

          <div className="relative flex items-center gap-4 md:gap-8  mx-auto">
            <button
              onClick={prevTestimonial}
              className="shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white hover:opacity-90 transition-opacity"
              style={{ background: "var(--blue)" }}
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex-1 max-w-10xl">
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 md:gap-12">
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
              style={{ background: "var(--blue)" }}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-end mt-4 md:mt-8 md:mt-12 mx-auto px-4 md:pr-16">
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
      <section className="py-10 md:py-20 bg-[#e6f4fe]">
        <div className=" mx-auto px-6">
          <div className="mb-6 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-[700] text-[#1a1a1a] mb-2">Other Programs</h2>
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
                <div className="p-4 md:p-8 flex flex-col items-center text-center flex-1">
                  <h3 className="text-[#1a1a1a] font-[700] text-lg mb-4 leading-tight group-hover:text-[var(--blue)] transition-colors">{p.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-16">
            <Link href="/programs" className="bg-[#1e238f] text-white px-5 md:px-10 py-3 rounded-md font-[600] text-sm hover:bg-[#15196d] transition-all shadow-lg active:scale-95 inline-block">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
