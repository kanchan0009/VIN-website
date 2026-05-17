"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import CTABanner from "../components/CTABanner";

const testimonialsData = [
  {
    id: 1,
    name: "Shanti Tamang",
    role: "Farmer, Devisthan",
    text: "Namaste! My name is Shanti Tamang, I am a 34-year-old farmer from Devisthan, Tarkeshwar Municipality. Two years ago, I had the opportunity to participate in an English class offered by Volunteers Initiative Nepal (VIN) at the Women's Business Center (WBC) in Tiniple, Tarkeshwar. At first, I hesitated to join because I thought learning English would be useless for someone like me, a farmer and a housewife. I was also worried it would interfere with my daily household activities. However, thanks to the encouragement of the women in my community, I decided to give it a try. Little did I know this decision would change my life in ways I never imagined.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    signature: "Dagrur Manalo",
    signatureTitle: "Volunteer, VIN",
  },
];

const mediaItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    title: "Community Cleanup",
    type: "photo",
    description: "A short description for the blog and make it short and loreum ipsum...",
    readMoreLink: "/programs/environment",
    downloadLink: "/downloads/photo-1.jpg",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
    title: "Children Education",
    type: "photo",
    description: "Providing quality education and learning opportunities to children in underserved communities.",
    readMoreLink: "/programs/child-development",
    downloadLink: "/downloads/photo-2.jpg",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80",
    title: "Volunteer Work",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    description: "Watch our dedicated volunteers in action, making a real difference in people's lives.",
    readMoreLink: "/volunteer",
    downloadLink: "/downloads/video-3.mp4",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&q=80",
    title: "Construction Project",
    type: "photo",
    description: "Building sustainable infrastructure to support community development and growth.",
    readMoreLink: "/programs/disaster-risk",
    downloadLink: "/downloads/photo-4.jpg",
  },
];

export default function ProgramsDetailsPage() {
  // Testimonial State & Logic
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonialsData[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // Media State & Logic
  const [startIndex, setStartIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const itemsPerPage = 4;
  const visibleItems = mediaItems.slice(startIndex, startIndex + itemsPerPage);

  const nextSlide = useCallback(() => {
    setStartIndex((prev) => (prev + itemsPerPage >= mediaItems.length ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setStartIndex((prev) => (prev === 0 ? Math.max(0, mediaItems.length - itemsPerPage) : prev - 1));
  }, []);

  const openVideo = (url: string) => {
    setActiveVideo(url);
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="pt-8 pb-4">
        <div className="">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Women's Empowerment Program
          </h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            VIN aims to empower women socially and economically through education, life skills and income generation opportunities. By 2030, VIN aims to benefit at least 80% of the total women in the marginalized communities of the target areas (Kavresthali, Nuwakot and Okhaldhunga).
          </p>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="w-full mb-8 !px-0 h-[100vh] min-h-[600px] max-h-[800px]">
        <div className="w-full md: overflow-hidden h-full">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1600"
            alt="Women Empowerment"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="pb-12">
        <div className="">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left Column */}
            <div className="lg:flex-1">
              <h2 className="text-[40px] font-[600] text-gray-900 mb-8">
                Why Women Empowerment Programs
              </h2>
              <div className="space-y-6 text-[18px] text-[#414141]font-[400] leading-relaxed mb-12">
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

              <h3 className="text-[40px] font-[600] text-gray-900 mb-8">
                Current Situation
              </h3>
              <ul className="space-y-2 text-[18px] text-[#414141] font-[500] list-disc pl-5 leading-relaxed">
                <li>1 in 2 women in Nepal are illiterate.</li>
                <li>8 in 10 Nepalese women are working in agricultural sector.</li>
                <li>4 in 5 women do not have ownership over land or property.</li>
                <li>Witch-hunt is common and targeted against low-caste women.</li>
                <li>Nepal is ranked 86 out of 93 countries in Gender Empowerment Measure (GME).</li>
                <li>30,000 females aged 8-25 are smuggled to India every year.</li>
              </ul>
            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:w-[410px] shrink-0">
              <div className="bg-[#DFF0FF] pt-12 px-5 pb-16 rounded-xl shadow-sm">
                <h3 className="text-[28px] font-[700] text-gray-900 mb-10 text-center leading-tight">
                  Empowered women <br /> we envision to be
                </h3>
                <div className="relative aspect-square w-full max-w-[300px] mx-auto">
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

      <section className="relative py-12 bg-cover bg-center text-white text-center !px-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1600')" }}>
        <div className="absolute inset-0 bg-blue-900/80" />
        <div className="relative z-10">
          <p className="text-sm md:text-[18px] font-[400] text-[#FFFFFF] leading-relaxed mb-10">
            Many times, women find themselves weak and violated by the culture and society. They tend to lose their value and identity. Hence, VIN focuses on the overall development of women aged 20-59 in marginalized communities. Numerous life skill development courses are given, such as leadership development, computer courses, stress management, time management etc. Micro-credit programs have been considered to put women in better financial standing. We have been providing entrepreneurship trainings focusing on both agricultural and non-agricultural business. Such initiatives help back warded women to realize their potential and work towards a better life.
          </p>
          <p className="text-sm md:text-[18px] font-[400] text-[#FFFFFF] leading-relaxed">
            Nepali women are born into a patriarchal society that consider Women's Rights secondary to those of men. Married early, with little or no education, no land rights or independent income, women are a voiceless section of society. They are highly dependent on men for their welfare. They bear the continued weight of socio-cultural discrimination and violence against them.
          </p>
        </div>
      </section>

      {/* Goals, Achievements & Research Section */}
      <section className="py-12 bg-white">
        <div className="">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left Column */}
            <div className="lg:flex-1">
              <h2 className="text-[40px] font-[600] text-gray-900 mb-6">Goals</h2>
              <div className="text-[18px] text-[#212121] font-[400] leading-relaxed space-y-4 mb-12">
                <p>
                  VIN aims to empower women socially and economically through education, life skills and income generation opportunities. By 2030, VIN aims to benefit at least 80% of the total women in the marginalized communities of the target areas (Kavresthali, Nuwakot and Okhaldhunga). Women Empowerment Program focuses its projects under three particularly important SDGs:
                </p>
                <div className="space-y-2 font-medium text-[#212121]">
                  <p>Goal 1: No Poverty</p>
                  <p>Goal 4: Quality Education</p>
                  <p>Goal 5: Gender Equality</p>
                </div>
              </div>

              <h2 className="text-[40px] font-[600] text-gray-900 mb-8">Achievements</h2>
              <div className="text-[18px] text-[#212121] font-[400] leading-relaxed space-y-4 mb-12">
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

              <h2 className="text-[40px] font-[600] text-gray-900 mb-8">
                Research/Reports
              </h2>
              <p className="text-[18px] text-[#212121] font-[400] leading-relaxed mb-8">
                To know more about the status of women in Nepal, please go through the following reports:
              </p>
              <ul className="space-y-4 text-[#212121] font-[400] leading-relaxed list-disc pl-5">
                <li>
                  Women&apos;s Development in Nepal: The Myth of Empowerment – By Ishara Mahat
                </li>
                <li>
                  Progress of the Women in Nepal Report, 1995-2015 – By UN Women
                </li>
              </ul>
            </div>

            {/* Right Column (Sidebars) */}
            <div className="lg:w-[410px] shrink-0 flex flex-col gap-12 h-full">
              <div className="bg-[#DFF0FF] pl-4 pr-8 pt-10 pb-16 rounded-xl shadow-sm flex-1">
                <h3 className="text-[26px] font-[700] text-gray-900 mb-10 leading-tight">
                  Women's Empowerment Projects
                </h3>
                <div className="space-y-6">
                  {[
                    { title: "Women's Education and Life Skills", img: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=400&q=80", href: "/programs/womens-empowerment/education" },
                    { title: "Microcredit Cooperative Support", img: "https://images.unsplash.com/photo-1590233465423-40844bb147d3?w=400&q=80", href: "/programs/womens-empowerment/microcredit" },
                    { title: "Entrepreneurship Development", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80", href: "/programs/womens-empowerment/entrepreneurship" },
                    { title: "Women's Trafficking Prevention", img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80", href: "/programs/womens-empowerment/trafficking" },
                  ].map((project, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="w-23 h-23 shrink-0 overflow-hidden">
                        <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-[500] text-[20px] mb-1 leading-tight">{project.title}</h4>
                        <Link href={project.href} className="text-[var(--blue)] text-[18px] font-[700] hover:underline flex items-center gap-1">
                          View Project <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#DFF0FF] pl-4 pr-8 pt-10 pb-16 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-10 leading-tight">
                  Other Programs
                </h3>
                <div className="space-y-6">
                  {[
                    { title: "Women's Education and Life Skills", img: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=400&q=80", href: "/programs/womens-empowerment/education" },
                    { title: "Microcredit Cooperative Support", img: "https://images.unsplash.com/photo-1590233465423-40844bb147d3?w=400&q=80", href: "/programs/womens-empowerment/microcredit" },
                    { title: "Entrepreneurship Development", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80", href: "/programs/womens-empowerment/entrepreneurship" },
                    { title: "Women's Trafficking Prevention", img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80", href: "/programs/womens-empowerment/trafficking" },
                  ].map((project, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="w-23 h-23 shrink-0  overflow-hidden">
                        <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-[500] text-[20px] mb-1 leading-tight">{project.title}</h4>
                        <Link href={project.href} className="text-[var(--blue)] text-[18px] font-[700] hover:underline flex items-center gap-1">
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


      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="relative">
          {/* Heading */}
          <h2 className="text-[56px] font-[600] text-center mb-2 py-4 mb-15">
            Testimonials
          </h2>

          {/* Carousel Container */}
          <div className="flex items-center justify-center gap-2">
            {/* Left Arrow */}
            <button
              onClick={prevTestimonial}
              className="shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white hover:opacity-90 transition-opacity"
              style={{ background: "var(--indigo-btn, #1e3a5f)" }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Testimonial Card */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                {/* Text Content */}
                <div className="flex-1 order-2 md:order-1">
                  <p className="text-gray-700 text-[10px] font-[500] md:text-base leading-relaxed mb-6 text-justify">
                    {currentTestimonial.text}
                  </p>
                  <p className="font-bold text-sm md:text-base text-gray-900">
                    {currentTestimonial.signature}
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm mt-1">
                    {currentTestimonial.signatureTitle}
                  </p>
                </div>

                {/* Image */}
                <div className="w-full md:w-80 lg:w-96 shrink-0 order-1 md:order-2">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
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
              style={{ background: "var(--indigo-btn, #1e3a5f)" }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* View All Button */}
          <div className="flex justify-end mt-8 md:mt-12 pr-16">
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

      {/* Photos & Videos */}
      <section className="py-12 bg-white">
        <div className="">
          {/* Heading */}
          <h2 className="text-[56px] font-[500] text-center mb-6">
            Photos & Videos
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base text-center mb-12 leading-relaxed">
            VIN facilitates projects focused on the women and children of marginalized communities against this challenging backdrop. VIN believes that the empowerment of women and children will bring about positive change so desperately needed in Nepal.
          </p>

          {/* Carousel Container */}
          <div className="relative flex items-center">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 transition-colors -translate-x-2 md:-translate-x-5"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Cards Grid */}
            <div className="flex-1 mx-2 md:mx-4 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {visibleItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="relative rounded-lg overflow-hidden shadow-sm group cursor-pointer"
                  >
                    {/* Number Badge */}
                    <div className="absolute top-3 left-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-gray-700 shadow-sm">
                      {String(startIndex + index + 1).padStart(2, "0")}
                    </div>

                    {/* Image/Video Container */}
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                      {/* Video Play Overlay */}
                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                          <button
                            onClick={() => item.videoUrl && openVideo(item.videoUrl)}
                            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform"
                          >
                            <Play size={24} fill="currentColor" className="text-gray-800 ml-0.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 transition-colors translate-x-2 md:translate-x-5"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={activeVideo}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </section>

      <CTABanner />
    </main>
  );
}
