"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import CTABanner from "../components/CTABanner";
import DonationWidget from "../components/DonationWidget";

const posts = [
  {
    title: "Women's Development in Nepal: The Myth of Empowerment",
    cat: "Women's Empowerment",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    date: "February 26, 2024",
    slug: "womens-development-nepal",
  },
  {
    title: "Women's Development in Nepal: The Myth of Empowerment",
    cat: "Women's Empowerment",
    img: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400&q=80",
    date: "February 26, 2024",
    slug: "womens-development-nepal-2",
  },
  {
    title: "Women's Development in Nepal: The Myth of Empowerment",
    cat: "Women's Empowerment",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
    date: "February 26, 2024",
    slug: "womens-development-nepal-3",
  },
  {
    title: "Women's Development in Nepal: The Myth of Empowerment",
    cat: "Women's Empowerment",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
    date: "February 26, 2024",
    slug: "child-education",
  },
  {
    title: "Women's Development in Nepal: The Myth of Empowerment",
    cat: "Women's Empowerment",
    img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80",
    date: "February 26, 2024",
    slug: "youth-leadership",
  },
  {
    title: "Women's Development in Nepal: The Myth of Empowerment",
    cat: "Women's Empowerment",
    img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&q=80",
    date: "February 26, 2024",
    slug: "environmental-conservation",
  },
];

const recentPosts = [
  { title: "Volunteering Announcement", month: "May 2021", date: "June 29, 2021" },
  { title: "Volunteering Announcement", month: "May 2021", date: "June 29, 2021" },
  { title: "Volunteering Announcement", month: "May 2021", date: "June 29, 2021" },
  { title: "Volunteering Announcement", month: "May 2021", date: "June 29, 2021" },
  { title: "Volunteering Announcement", month: "May 2021", date: "June 29, 2021" },
];

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Calculate pagination indices
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <main className="font-montserrat">
      {/* Hero */}
      <section className="relative flex items-end overflow-hidden h-[75vh] min-h-[600px] max-h-[800px]">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
          alt="Blogs"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(20,10,70,0.88) 50%, rgba(0,0,0,0.2) 100%)",
          }}
        />
        <div className="relative z-10  mx-auto px-4 pb-5 md:pb-10 w-full text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Blogs</h1>
          <p className="text-white/80 text-lg max-w-4xl mx-auto lg:mx-0">
            Lorem Ipsum Dipsum We Are Different Locations Lorem Ipsum Dipsum We
            Are...
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-white">
        <div className=" mx-auto px-4">
          
          {/* Search Bar centered at top */}
          <div className="flex justify-center mb-8 md:mb-16">
            <div className="relative w-full max-w-md">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-6 md:pl-12 pr-4 py-2 border-1 border-gray-400 rounded focus:outline-none focus:border-black transition-colors text-gray-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 md:gap-16">
            {/* Blog List */}
            <div className="space-y-10">
              {currentPosts.map((post, idx) => (
                <div key={idx} className="group border-b-1 border-[#D9D9D9] pb-6 md:pb-12 last:border-0">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                    <div className="flex-1">
                      <p className="text-[#C3161C] text-[16px] font-[500] mb-3">{post.date}</p>
                      <Link href={`/blogs/${post.slug}`}>
                        <h2 className="text-2xl lg:text-[32px] font-[600] text-[#1a1a1a] mb-4 hover:text-[#e33e33] transition-colors leading-tight">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-gray-500 leading-relaxed text-[17px]">
                        With this news, we are delighted and deeply satisfied
                        to confirm that following BSc (Hons) Computing
                        students have been awarded with the IMS Academic
                        Excellence.
                      </p>
                    </div>
                    <div className="w-full md:w-[225px] shrink-0">
                      <img
                        src={post.img}
                        alt={post.title}
                        className="w-full h-42 object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <div className="flex items-center gap-4 pt-4 md:pt-8">
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
              <h2 className="text-2xl md:text-[30px] font-[800] text-[#333333] mb-4 md:mb-8">Recent Blogs</h2>
              <div className="space-y-0">
                {recentPosts.map((post, i) => (
                  <div key={i} className="py-6 border-b border-[#D9D9D9] last:border-0 first:pt-0">
                    <h3 className="font-semibold text-[#333333] text-[18px] mb-1 leading-snug cursor-pointer hover:text-[#e33e33]">
                      {post.title}
                    </h3>
                    <p className="text-[#333333] text-[18px] font-semibold mb-1">{post.month}</p>
                    <p className="text-[#C3161C] text-[16px] font-[400]">{post.date}</p>
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

