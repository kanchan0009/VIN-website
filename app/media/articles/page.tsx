"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Leaf, 
  Droplets, 
  GraduationCap, 
  Globe, 
  Users 
} from "lucide-react";
import CTABanner from "../../components/CTABanner";
import DonationWidget from "@/app/components/DonationWidget";

const articles = [
  {
    id: 1,
    title: "Building Green Enterprises: From Skills to Income",
    excerpt: "Practical steps to start and scale eco-friendly micro-enterprises.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
    date: "Apr 28, 2024",
    readTime: "6 min read",
    category: "Livelihoods",
    categoryColor: "text-orange-500"
  },
  {
    id: 2,
    title: "Safe Water, Healthy Communities",
    excerpt: "Understanding simple and sustainable water solutions.",
    image: "https://images.unsplash.com/photo-1594498653385-d5172b532c00?w=600&q=80",
    date: "Apr 20, 2024",
    readTime: "5 min read",
    category: "WASH",
    categoryColor: "text-blue-500"
  },
  {
    id: 3,
    title: "Preparing Communities for Climate Uncertainty",
    excerpt: "Building resilience through local knowledge and action.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
    date: "Apr 18, 2024",
    readTime: "7 min read",
    category: "Climate Resilience",
    categoryColor: "text-indigo-600"
  },
  {
    id: 4,
    title: "Life Skills Education for Rural Youth",
    excerpt: "Empowering youth with skills for life and livelihood.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
    date: "Apr 14, 2024",
    readTime: "5 min read",
    category: "Education",
    categoryColor: "text-orange-600"
  },
  {
    id: 5,
    title: "Soil Health: The Foundation of Abundance",
    excerpt: "Improve soil naturally and increase long-term productivity.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80",
    date: "Apr 12, 2024",
    readTime: "5 min read",
    category: "Permaculture",
    categoryColor: "text-green-600"
  },
  {
    id: 6,
    title: "Mindset Shifts for Community Change",
    excerpt: "Attitudes that inspire leadership and collective action.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80",
    date: "Apr 10, 2024",
    readTime: "4 min read",
    category: "Leadership & KSA",
    categoryColor: "text-purple-600"
  },
  {
    id: 7,
    title: "Value Addition in Local Agriculture",
    excerpt: "Turn local produce into sustainable income.",
    image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?w=600&q=80",
    date: "Apr 04, 2024",
    readTime: "6 min read",
    category: "Livelihoods",
    categoryColor: "text-orange-500"
  },
  {
    id: 8,
    title: "Water Harvesting That Works",
    excerpt: "Low-cost techniques for water-scarce communities.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
    date: "Apr 01, 2024",
    readTime: "5 min read",
    category: "Permaculture",
    categoryColor: "text-green-600"
  }
];

const topics = [
  { name: "All Topics", desc: "View all articles", icon: <Globe size={18} className="text-green-600" />, bg: "bg-green-50" },
  { name: "Permaculture", desc: "Soil, food, forest, design", icon: <Leaf size={18} className="text-green-700" />, bg: "bg-green-100" },
  { name: "WASH", desc: "Water, sanitation, hygiene", icon: <Droplets size={18} className="text-blue-500" />, bg: "bg-blue-50" },
  { name: "Education", desc: "Learning, life skills", icon: <GraduationCap size={18} className="text-orange-600" />, bg: "bg-orange-50" },
  { name: "Climate Resilience", desc: "Adaptation, mitigation", icon: <Globe size={18} className="text-indigo-600" />, bg: "bg-indigo-50" },
  { name: "Leadership & KSA", desc: "Knowledge, skills, attitude", icon: <Users size={18} className="text-purple-600" />, bg: "bg-purple-50" },
];

export default function ArticlesPage() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <main className="bg-[#fcfcfc] min-h-screen font-inter">
      {/* Hero Header */}
      <section className="relative flex items-end overflow-hidden h-[75vh] min-h-[600px] max-h-[800px]">
        <img
          src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1600&q=80"
          alt="Articles Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 pb-5 md:pb-10 w-full">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-[800] text-white tracking-tight">
            Articles
          </h1>
          <p className="text-white/80 max-w-4xl text-lg mt-4">
            Stay updated with our latest stories, impact reports, and community developments from across Nepal.
          </p>
        </div>
      </section>



      <section className="py-6 md:py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-5 md:gap-10">
            {/* Main Content Area */}
            <div className="lg:w-3/4 space-y-12">
              
              {/* Featured Article Card */}
              <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row">
                <div className="md:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
                  <span className="text-[10px] uppercase font-[700] tracking-widest text-[var(--blue)] mb-3">Featured Article</span>
                  <h2 className="text-2xl lg:text-3xl font-[700] text-[#1D1E20] mb-4 leading-tight">
                    Permaculture Design: A Pathway to Regenerative Communities
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Explore how permaculture principles can transform the way we grow food, manage water, and live in harmony with nature.
                  </p>
                  <div className="flex items-center gap-6 text-gray-400 text-[11px] mb-6">
                    <div className="flex items-center gap-2">
                      <Leaf size={12} className="text-green-600" />
                      <span>Permaculture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={12} />
                      <span>May 6, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={12} />
                      <span>8 min read</span>
                    </div>
                  </div>
                  <Link 
                    href="/article-blogs" 
                    className="inline-flex items-center justify-center gap-2 bg-[var(--blue)] text-white px-6 py-3 rounded-lg font-[600] text-xs hover:bg-[#15196d] transition-all w-fit"
                  >
                    Read Article →
                  </Link>
                </div>
                <div className="md:w-1/2 relative h-[250px] md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1000&q=80" 
                    alt="Permaculture vegetables" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Latest Articles Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-2xl lg:text-3xl font-[700] text-[var(--blue)]">Latest Articles</h2>

              </div>

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.slice(0, visibleCount).map((article) => (
                  <article key={article.id} className="group bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col hover:shadow-xl transition-all duration-500">
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <span className={`text-[9px] uppercase font-[700] tracking-wider mb-2 ${article.categoryColor}`}>
                        {article.category}
                      </span>
                      <h3 className="text-base font-[700] text-[#1D1E20] mb-2 leading-snug group-hover:text-[var(--blue)] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-500 text-[11px] leading-relaxed mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="mt-auto flex items-center justify-between text-[10px] text-gray-400 font-[500] pt-3 border-t border-gray-500">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              {visibleCount < articles.length && (
                <div className="text-center pt-4 md:pt-8">
                  <button 
                    onClick={handleLoadMore}
                    className="px-5 md:px-10 py-3 rounded-xl border border-[var(--blue)] text-[var(--blue)] font-[700] text-sm hover:bg-[var(--blue)] hover:text-white transition-all active:scale-95"
                  >
                    Load More Articles →
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4 space-y-8">
              <div className="bg-[#E7E2D8] rounded-[20px] p-4 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-50">
                <h3 className="text-xl font-[700] text-[#1D1E20] mb-4 md:mb-8">Explore Topics</h3>
                <div className="space-y-4">
                  {topics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-4 cursor-pointer group pb-4 border-b border-gray-300 last:border-0 last:pb-0">
                      <div className={`w-10 h-10 rounded-xl ${topic.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        {topic.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-[700] text-[#1D1E20] group-hover:text-[var(--blue)] transition-colors">{topic.name}</h4>
                        <p className="text-[10px] text-gray-400">{topic.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Learning Quote Box */}
                <div className="mt-6 md:mt-12 bg-[#F2F7E9] rounded-[20px] p-6 border border-[#d1fae5]">
                  <h4 className="text-[#065f46] font-[700] text-lg mb-2 leading-tight">
                    Knowledge shared is impact multiplied.
                  </h4>
                  <p className="text-[#059669] text-xs font-[500]">
                    — VIN Learning Philosophy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DonationWidget/>

      <CTABanner />
    </main>
  );
}


