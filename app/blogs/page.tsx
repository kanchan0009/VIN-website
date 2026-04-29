import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import CTABanner from "../components/CTABanner";
import DonationWidget from "../components/DonationWidget";

const posts = [
  {
    title: "Women's Development in Nepal: The Myth of Empowerment",
    cat: "Women's Empowerment",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    date: "Feb 2, 2026",
    slug: "womens-development-nepal",
  },
  {
    title: "Women's Development in Nepal: The Myth of Empowerment",
    cat: "Women's Empowerment",
    img: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400&q=80",
    date: "Feb 2, 2026",
    slug: "womens-development-nepal-2",
  },
  {
    title: "Women's Development in Nepal: The Myth of Empowerment",
    cat: "Women's Empowerment",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
    date: "Feb 2, 2026",
    slug: "womens-development-nepal-3",
  },
  {
    title: "Child Education Programs Transforming Rural Communities",
    cat: "Child Development",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
    date: "Jan 18, 2026",
    slug: "child-education",
  },
  {
    title: "Youth Leadership: Building Nepal's Next Generation",
    cat: "Youth Empowerment",
    img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80",
    date: "Jan 10, 2026",
    slug: "youth-leadership",
  },
  {
    title: "Environmental Conservation Efforts in Himalayan Communities",
    cat: "Environment",
    img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&q=80",
    date: "Dec 22, 2025",
    slug: "environmental-conservation",
  },
];

export default function BlogsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-72 flex items-end overflow-hidden">
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-10 w-full">
          <p className="text-white/60 text-sm mb-2">
            Home / <span className="text-white">Blogs</span>
          </p>
          <h1
            className="text-5xl font-bold text-white mb-2"
            style={{ }}
          >
            Blogs
          </h1>
          <p className="text-white/70 text-sm">
            Lorem Ipsum Dipsum We Are Different Locations Lorem Ipsum Dipsum We
            Are...
          </p>
        </div>
      </section>

      {/* Search + Blog list with sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-10">
                <div className="relative w-full max-w-sm">
                  <Search
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Search blogs..."
                    className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-indigo-400"
                  />
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center text-sm font-semibold px-6 py-3 rounded-full text-white"
                  style={{ background: "var(--indigo-btn)" }}
                >
                  View All
                </Link>
              </div>

              <div className="space-y-7">
                {posts.map((post) => (
                  <Link
                    href={`/blogs/${post.slug}`}
                    key={post.slug}
                    className="group block rounded-4xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-2xl"
                  >
                    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_240px] items-center">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8162f] mb-4">
                          {post.date}
                        </p>
                        <h2
                          className="text-2xl sm:text-3xl font-semibold leading-tight mb-4"
                          style={{ }}
                        >
                          {post.title}
                        </h2>
                        <p className="text-sm text-gray-600 leading-7">
                          With this news, we are delighted and deeply satisfied
                          to confirm that following BSc (Hons) Computing
                          students have been awarded with the IMS Academic
                          Excellence.
                        </p>
                      </div>
                      <div className="overflow-hidden rounded-[30px] bg-gray-100">
                        <img
                          src={post.img}
                          alt={post.title}
                          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex justify-center items-center gap-3 mt-12">
                <button className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-sm text-gray-500 hover:bg-gray-50">
                  ←
                </button>
                {[1, 2, 3, 4].map((n) => (
                  <button
                    key={n}
                    className={`w-11 h-11 rounded-full text-sm font-semibold transition ${n === 2 ? "bg-[#2421a0] text-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50"}`}
                  >
                    {n}
                  </button>
                ))}
                <button className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-sm text-gray-500 hover:bg-gray-50">
                  →
                </button>
              </div>
            </div>

            <aside className="w-full">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-4xl border border-gray-100 bg-[#f9fafb] p-6">
                  <h2 className="text-lg font-semibold mb-4">Recent Blogs</h2>
                  <div className="space-y-4">
                    {posts.slice(0, 5).map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blogs/${post.slug}`}
                        className="block rounded-3xl border border-transparent bg-white p-4 transition hover:border-gray-200"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8162f] mb-2">
                          {post.date}
                        </p>
                        <p className="text-sm font-semibold leading-snug">
                          {post.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
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
