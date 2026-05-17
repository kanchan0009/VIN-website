'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Play, ChevronLeft, ChevronRight, ChevronDown, Star, Users } from 'lucide-react';
import CTABanner from '../../components/CTABanner'
import DonationWidget from '../../components/DonationWidget';

const stats = [
  { value: '1,800+', label: 'Women Trained in Education & Life Skills' },
  { value: '340', label: 'Women Micro-enterprise Supported' },
  { value: '96%', label: 'Participants report greater confidence' },
];

const goals = [
  { num: '01', title: 'Economic Sufficient', desc: "We empower women both socially and economically by providing them access to education. We also make a positive impact on the economic income generation opportunities." },
  { num: '02', title: 'Social Equality', desc: "We empower women both socially and economically by providing them access to education. We also ensure a positive impact on the local communities of their environment." },
  { num: '03', title: 'Quality Education', desc: "We empower women both socially and economically by providing them access to education. We also ensure a positive impact of gender equality." },
  { num: '04', title: 'Gender Equality', desc: "We empower women both socially and economically by providing them access to education. We also make a positive impact on the income generation opportunities." },
];

const whyItems = [
  { title: 'Social Equality', icon: '⚖️', desc: "We empower women both socially and economically by providing them access to education and income generation opportunities." },
  { title: 'Social Equality', icon: '📚', desc: "We empower women both socially and economically by providing them access to education and income generation opportunities." },
  { title: 'Social Equality', icon: '💼', desc: "We empower women both socially and economically by providing them access to education and income generation opportunities." },
  { title: 'Social Equality', icon: '🌱', desc: "We empower women both socially and economically by providing them access to education and income generation opportunities." },
];

const otherPrograms = [
  { title: "Children's Development", img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80', stat: '32,035', label: "Women's life impacted", desc: "Is central to empowerment & prosperity of a community.", href: '/programs/child-development' },
  { title: "Youth Empowerment", img: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400&q=80', stat: '32,035', label: "Women's life impacted", desc: "Is central to empowerment & prosperity of a community.", href: '/programs/youth-empowerment' },
  { title: "Public Health & Medical Care", img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&q=80', stat: '32,035', label: "Women's life impacted", desc: "Is central to empowerment & prosperity of a community.", href: '/programs/public-health' },
  { title: "Environment & Conservation Projects", img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80', stat: '32,035', label: "Women's life impacted", desc: "Is central to empowerment & prosperity of a community.", href: '/programs/disaster-risk' },
];
 const albums = [
      {
        title: "School Reconstruction Album",
        img: "https://images.unsplash.com/photo-1558618047-3c8c76bbb17e?w=800&q=80",
      },
      {
        title: "Youth Leadership Album",
        img: "https://images.unsplash.com/photo-1570549717069-33bed1aa152b?w=800&q=80",
      },
    ];

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

const mediaItems = [
  { id: '01', type: 'image', img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80' },
  { id: '02', type: 'image', img: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=600&q=80' },
  { id: '03', type: 'video', img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80' },
  { id: '04', type: 'image', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80' },
];

const projects = [
  {
    id: 1,
    title: "Women’s Development in Nepal: The Myth of Empowerment",
    slug: "myth-of-empowerment",
    image: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=800&q=80",
    desc: "Loreum ipsum dipsum lorem ipsum dipsum Loreum ipsum dipsum lorem .."
  },
  {
    id: 2,
    title: "Income Generation through Micro-credit",
    slug: "micro-credit-income",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    desc: "Loreum ipsum dipsum lorem ipsum dipsum Loreum ipsum dipsum lorem .."
  },
  {
    id: 3,
    title: "Education & Life Skills for Rural Women",
    slug: "education-life-skills",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    desc: "Loreum ipsum dipsum lorem ipsum dipsum Loreum ipsum dipsum lorem .."
  }
];

export default function WomensEmpowermentPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [albumIndex, setAlbumIndex] = useState(0);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);
  const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState('Types of Media');
  const [visibleMediaCount, setVisibleMediaCount] = useState(1);
  const [visibleProjectCount, setVisibleProjectCount] = useState(1);

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
      } else if (window.innerWidth >= 640) {
        setVisibleMediaCount(2);
        setVisibleProjectCount(2);
      } else {
        setVisibleMediaCount(1);
        setVisibleProjectCount(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextProject = () => {
    setProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

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
            Women's Empowerment Program
          </h1>
          <div className="">
            <p className="text-gray-600 text-[14px] lg:text-[16px] leading-relaxed font-[400] mb-2">
              VIN aims to empower women socially and economically through education, life skills and income generation opportunities. By 2030, VIN aims to benefit at least 80% of the total women in the marginalized communities of the target areas (Kavresthali, Nuwakot and Okhaldhunga).
              {isExpanded && (
                <>
                  <br /><br />
                  Our comprehensive approach focuses on four key pillars: Education and Life Skills, Micro-credit access through cooperatives, Entrepreneurship Development, and Women's Trafficking Prevention. Through these initiatives, we provide women with the tools they need to achieve financial independence and become leaders in their communities.
                  <br /><br />
                  Since its inception, the program has reached thousands of women, helping them start small businesses, improve their literacy rates, and advocate for their rights. We believe that empowering a woman is the fastest way to transform a whole family and community.
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
      <section className="mb-10 p-0 !px-0 h-[100vh] min-h-[600px] max-h-[800px]">
        <div className="w-full overflow-hidden h-full">
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=80" 
            alt="Women's Empowerment Group" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Why + Empowered Vision Section */}
      <section className="pb-10 bg-white">
        <div className=" mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Content: Why Section */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl lg:text-[40px] font-[600] text-[#1a1a1a] mb-6">
                Why Women Empowerment Programs
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="h-[325px] p-10 rounded-[10px] border border-[#D9D9D9] shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                    <div className="w-12 h-12 rounded-lg bg-[#E6F4FE] flex items-center justify-center mb-4">
                      <Users size={24} className="text-[var(--blue)]" />
                    </div>
                    <h4 className="text-xl font-[700] text-[#1a1a1a] mb-2">Social Equality</h4>
                    <p className="text-gray-500 text-[14px] leading-relaxed">
                      We empower women both socially and economically by providing them access to education, life skills and income generation opportunities.
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
                  Empowered women <br /> we envision to be
                </h3>
                <div className="relative w-full max-w-[300px] mx-auto aspect-[356/375]">
                  <img 
                    src="/women.png" 
                    alt="Envision Diagram" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Sidebar Image */}
              <div className="rounded-[10px] overflow-hidden shadow-lg aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80" 
                  alt="Community group in mountains" 
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
                58 %
              </div>
              <p className="text-xl lg:text-2xl font-[600] text-[#1a1a1a] leading-snug">
                Women lack economic <br /> incidences in rural areas
              </p>
            </div>

            {/* Right List Items */}
            <div className="flex-1 space-y-0">
              {[1, 2, 3, 4, 5].map((item, i) => (
                <div 
                  key={i} 
                  className={`flex gap-8 py-4 items-start ${i !== 4 ? 'border-b border-gray-300' : ''}`}
                >
                  <div className="w-4 h-4 rounded-full bg-[var(--blue)] mt-2 shrink-0" />
                  <p className="text-gray-700 text-[15px] lg:text-[16px] leading-relaxed">
                    We empower women both socially and economically by providing them access to education, life skills and income generation opportunities.
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
          
          <div className="relative  rounded-[10px] overflow-hidden h-[450px] bg-red-600 flex items-center justify-center cursor-pointer group">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80" alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" />
            <div className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform drop-shadow-2xl">
              <Play size={32} fill="currentColor" className="text-gray-900 ml-1" />
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
                    <Link href="/program-gallery?topic=default">
                      <button className="bg-[#1e238f] text-white px-8 py-3 rounded-md font-[600] text-sm hover:bg-[#15196d] transition-all active:scale-95 shadow-lg">
                        Explore Album
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we're working toward */}
      <section className="py-20 bg-white">
        <div className=" mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-[700] text-[#1a1a1a] mb-4">
            What we're working toward
          </h2>
          <p className="text-gray-600 text-[14px] lg:text-[15px] max-w-3xl mb-12">
            We empower women both socially and economically by providing them access to education, life skills and income generation opportunities.
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

      {/* Our Achievements */}
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
              Since 2010, the women's Empowerment Program has partnered with local governments, NGO's and international donors to deliver a holistic model of change - from front-line service delivery to policy advocacy at the national level.
            </p>
          </div>
        </div>
      </section>

      {/* Related Media Section */}
      <section className="py-10 bg-white overflow-hidden">
        <div className=" mx-auto px-6 text-center mb-10">
          <h2 className="text-3xl lg:text-[50px] font-[500] text-[#1a1a1a] mb-5">
            Related Media
          </h2>
          
          {/* Filter Dropdown */}
          <div className="inline-block relative mb-5">
            <button 
              onClick={() => setIsMediaDropdownOpen(!isMediaDropdownOpen)}
              className="flex items-center gap-4 px-10 py-3 border border-gray-400 rounded-[5px] text-gray-700 font-[500] hover:bg-gray-50 transition-all min-w-[200px] justify-between"
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

          <p className="text-[#555555] text-[16px]  font-[400] lg:text-[17px] max-w-4xl mx-auto leading-relaxed">
            VIN facilitates projects focused on the women and children of marginalized communities against this challenging backdrop. VIN believes that the empowerment of women and children will bring about positive change so desperately needed in Nepal.
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
                  {/* Overlay for numbering */}
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[var(--blue)] font-bold text-xs shadow-sm">
                    {item.id}
                  </div>
                  {/* Play Button for Video */}
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

      {/* Women's Empowerment Projects */}
      <section className="py-12 bg-white">
        <div className=" mx-auto px-6 relative">
           <h2 className="text-3xl lg:text-4xl font-[700] text-[#1a1a1a] mb-4">
            Women's Empowerment Projects
          </h2>
          <p className="text-gray-600 text-[14px] lg:text-[15px] max-w-3xl mb-12">
            We empower women both socially and economically by providing them access to education, life skills and income generation opportunities.
          </p>
          

          <div className="relative group">
            {/* Navigation Arrows */}
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

            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-8"
                style={{ transform: `translateX(-${projectIndex * (100 / visibleProjectCount)}%)` }}
              >
                {projects.map((project) => (
                  <div key={project.id} className="min-w-full sm:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-22px)] rounded-[10px] overflow-hidden shadow-xl flex flex-col group/card">
                  {/* Top Image */}
                  <div className="relative h-[220px] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-0 bg-[var(--blue)] text-white text-[12px] uppercase font-bold px-4 py-1.5 rounded-sm">
                      Women Empowerment
                    </div>
                  </div>
                  {/* Bottom Content */}
                  <div className="bg-[#1e238f] p-6 flex-1 flex flex-col">
                    <h4 className="text-white text-[18px] lg:text-xl font-[500] mb-3 leading-tight">
                      {project.title}
                    </h4>
                    <p className="text-white/80 text-[13px] lg:text-[14px] leading-relaxed mb-4 line-clamp-2">
                      {project.desc}
                    </p>
                    <Link href={`/programs/womens-empowerment/${project.slug}`} className="mt-auto text-white text-sm font-[600] flex items-center gap-2 hover:translate-x-2 transition-transform">
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

      {/* Testimonials Section */}
      <section className="py-12 bg-white border-t border-gray-50">
        <div className=" mx-auto px-6 relative">
          <h2 className="text-3xl lg:text-5xl font-[700] text-[#1a1a1a] text-center mb-12">
            Testimonials
          </h2>

          <div className="relative flex items-center gap-4 md:gap-8  mx-auto">
            {/* Left Arrow */}
            <button
              onClick={prevTestimonial}
              className="shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white hover:opacity-90 transition-opacity"
              style={{ background: "var(--blue)" }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex-1 max-w-10xl">
              <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                {/* Text Content */}
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

                {/* Image */}
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

            {/* Right Arrow */}
            <button
              onClick={nextTestimonial}
              className="shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white hover:opacity-90 transition-opacity"
              style={{ background: "var(--blue)" }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* View All Button */}
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

      

      
      {/* Google Review Wall of Love */}
      <section className="py-20 bg-white">
        <div className="   mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[50px] font-[700] text-[#1a1a1a] mb-4">
              Google Review Wall of Love
            </h2>
            <p className="text-gray-500 text-lg">
              A heartfelt collection testimonials, and appreciation from our amazing community.
            </p>
          </div>

          {/* Rating Header */}
          <div className="bg-[#F2F2F2] rounded-[15px] p-6 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100">
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

          {/* Review Cards Carousel */}
          <div className="relative group">
            {/* Navigation Arrows */}
            <button className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1e238f] flex items-center justify-center shadow-lg hover:bg-[#15196d] transition-all z-10">
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1e238f] flex items-center justify-center shadow-lg hover:bg-[#15196d] transition-all z-10">
              <ChevronRight size={24} className="text-white" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "John Smith", title: "CEO, Tech Innovations Inc", initial: "J", date: "March 1, 2024", text: "Exceptional service! The team exceeded our expectations and delivered a top-notch product on time." },
                { name: "Sarah Johnson", title: "Marketing Manager, Bright Solutions", initial: "S", date: "February 15, 2024", text: "Working with this company was a game-changer. Their attention to detail are unmatched!" },
                { name: "Michael Brown", title: "Founder, Brown & Co.", initial: "M", date: "January 10, 2024", text: "A fantastic experience from start to finish. Highly recommended for anyone looking for quality work!" },
                { name: "Emily Davis", title: "HR Director, Global Enterprises", initial: "E", date: "December 20, 2023", text: "Great customer support and seamless service. The team truly cares about their clients." }
              ].map((review, i) => (
                <div key={i} className="bg-[#F2F2F2] rounded-[20px] p-8 flex flex-col items-center text-center shadow-sm border border-gray-50 hover:shadow-md transition-all">
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
                  <p className="text-gray-400 text-[11px] mb-4">Posted on {review.date}</p>
                  <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4 opacity-70" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Other Programs */}
      <section className="py-20 bg-[#e6f4fe]">
        <div className=" mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-[700] text-[#1a1a1a] mb-2">Other Programs</h2>
            <p className="text-gray-600">Our other featuring programs that you might be interested</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherPrograms.map((p, i) => (
              <Link href={p.href} key={i} className="group flex flex-col bg-white  overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                {/* Top: Image with Overlay */}
                <div className="relative h-[250px] overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-center">
                    <span className="text-white text-2xl font-[700] mb-1">{p.stat}</span>
                    <span className="text-white/80 text-[11px] uppercase tracking-wider">{p.label}</span>
                  </div>
                </div>
                {/* Bottom: Content */}
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
              View More
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
      
    </main>
  );
}


