"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import CTABanner from "../components/CTABanner";
import DonationWidget from "../components/DonationWidget";

const articles = [
  {
    title: "Building Green Enterprises: From Skills to Income",
    cat: "Livelihoods",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
    date: "April 28, 2024",
    slug: "building-green-enterprises",
    excerpt: "Practical steps to start and scale eco-friendly micro-enterprises in rural communities."
  },
  {
    title: "Safe Water, Healthy Communities: Sustainable WASH Solutions",
    cat: "WASH",
    img: "https://images.unsplash.com/photo-1594498653385-d5172b532c00?w=600&q=80",
    date: "April 20, 2024",
    slug: "safe-water-healthy-communities",
    excerpt: "Understanding simple and sustainable water solutions that transform community health."
  },
  {
    title: "Preparing Communities for Climate Uncertainty",
    cat: "Climate Resilience",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
    date: "April 18, 2024",
    slug: "preparing-for-climate-uncertainty",
    excerpt: "Building resilience through local knowledge and proactive action against climate change."
  },
  {
    title: "Life Skills Education for Rural Youth Empowerment",
    cat: "Education",
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
    date: "April 14, 2024",
    slug: "life-skills-education-youth",
    excerpt: "Empowering the next generation with essential skills for life and sustainable livelihood."
  },
  {
    title: "Soil Health: The Foundation of Community Abundance",
    cat: "Permaculture",
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80",
    date: "April 12, 2024",
    slug: "soil-health-foundation",
    excerpt: "How improving soil naturally can increase long-term productivity and food security."
  },
  {
    title: "Mindset Shifts for Lasting Community Change",
    cat: "Leadership & KSA",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80",
    date: "April 10, 2024",
    slug: "mindset-shifts-community-change",
    excerpt: "Attitudes and leadership qualities that inspire collective action and sustainable growth."
  },
];

const recentArticles = [
  { title: "Building Green Enterprises", month: "April 2024", date: "April 28, 2024" },
  { title: "Safe Water Solutions", month: "April 2024", date: "April 20, 2024" },
  { title: "Climate Resilience Training", month: "April 2024", date: "April 18, 2024" },
  { title: "Youth Life Skills", month: "April 2024", date: "April 14, 2024" },
  { title: "Permaculture Principles", month: "April 2024", date: "April 12, 2024" },
];

export default function ArticleBlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Calculate pagination indices
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(articles.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <main className="font-montserrat">
      {/* Hero */}
      <section className="relative h-[670px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1600&q=80"
          alt="Articles"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(20,10,70,0.88) 50%, rgba(0,0,0,0.2) 100%)",
          }}
        />
        <div className="relative z-10  mx-auto px-4 pb-10 w-full text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">Articles</h1>
          <p className="text-white/80 text-lg max-w-4xl mx-auto lg:mx-0">
            Explore deep dives into our development models, success stories, and technical insights from our projects in rural Nepal.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className=" mx-auto px-4">
          
          {/* Search Bar centered at top */}
          <div className="flex justify-center mb-16">
            <div className="relative w-full max-w-md">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-2 border-1 border-gray-400 rounded focus:outline-none focus:border-black transition-colors text-gray-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">
            {/* Article List */}
            <div className="space-y-10">
              {currentPosts.map((article, idx) => (
                <div key={idx} className="group border-b-1 border-[#D9D9D9] pb-12 last:border-0">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1">
                      <p className="text-[#C3161C] text-[16px] font-[500] mb-3">{article.date}</p>
                      <Link href={`/article-blogs/${article.slug}`}>
                        <h2 className="text-2xl lg:text-[32px] font-[600] text-[#1a1a1a] mb-4 hover:text-[#e33e33] transition-colors leading-tight">
                          {article.title}
                        </h2>
                      </Link>
                      <p className="text-gray-500 leading-relaxed text-[17px]">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="w-full md:w-[225px] shrink-0">
                      <img
                        src={article.img}
                        alt={article.title}
                        className="w-full h-42 object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <div className="flex items-center gap-4 pt-8">
                <button 
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`text-gray-600 transition-colors ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:text-black focus:text-[var(--blue)]'}`}
                >
                  ←
                </button>
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                    <button
                      key={n}
                      onClick={() => paginate(n)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium transition-all outline-none ${
                        n === currentPage 
                        ? "bg-[var(--blue)] text-white shadow-lg" 
                        : "border border-gray-300 text-gray-600 hover:bg-[var(--blue)] hover:text-white hover:border-[var(--blue)] focus:bg-[var(--blue)] focus:text-white focus:border-[var(--blue)]"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`text-gray-600 transition-colors ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:text-black focus:text-[var(--blue)]'}`}
                >
                  →
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <h2 className="text-[30px] font-[800] text-[#333333] mb-8">Recent Articles</h2>
              <div className="space-y-0">
                {recentArticles.map((article, i) => (
                  <div key={i} className="py-6 border-b border-[#D9D9D9] last:border-0 first:pt-0">
                    <h3 className="font-semibold text-[#333333] text-[18px] mb-1 leading-snug cursor-pointer hover:text-[#e33e33]">
                      {article.title}
                    </h3>
                    <p className="text-[#333333] text-[18px] font-semibold mb-1">{article.month}</p>
                    <p className="text-[#C3161C] text-[16px] font-[400]">{article.date}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <DonationWidget />
      <CTABanner />
    </main>
  );
}
