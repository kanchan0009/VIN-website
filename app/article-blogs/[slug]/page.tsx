import Link from "next/link";
import { Send } from "lucide-react";
import CTABanner from "../../components/CTABanner";
import DonationWidget from "../../components/DonationWidget";

const recentArticles = [
  {
    title: "Building Green Enterprises: From Skills to Income",
    date: "April 28, 2024",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=200&q=80",
    slug: "building-green-enterprises",
  },
  {
    title: "Safe Water, Healthy Communities: Sustainable WASH Solutions",
    date: "April 20, 2024",
    img: "https://images.unsplash.com/photo-1594498653385-d5172b532c00?w=200&q=80",
    slug: "safe-water-healthy-communities",
  },
  {
    title: "Preparing Communities for Climate Uncertainty",
    date: "April 18, 2024",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=200&q=80",
    slug: "preparing-for-climate-uncertainty",
  },
];

export default function ArticleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="font-montserrat">
      <section className=" mx-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">
          
          {/* Main content */}
          <article className="flex-1">
            <div className="rounded-2xl overflow-hidden mb-12">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80"
                alt="Article"
                className="w-full h-auto object-cover aspect-[16/10]"
              />
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-[#1a1a1a] mb-8 uppercase">
              How Sustainable Models Are Transforming Rural Nepal
            </h1>

            <div className="text-gray-700 leading-relaxed space-y-6 text-[15px]">
              <p>
                The development landscape in Nepal is shifting towards community-led, sustainable models that prioritize long-term resilience over short-term aid. At VIN, our approach integrates education, health, and economic empowerment to create a holistic foundation for growth.
              </p>

              <h2 className="text-xl font-bold text-[#1a1a1a] pt-4 uppercase">
                The Role of Local Leadership
              </h2>
              <p>
                Success in rural development hinges on the active participation of local community members. By identifying and training local leaders, we ensure that our projects are culturally sensitive and have the support needed to thrive long after our initial intervention.
              </p>

              <h2 className="text-xl font-bold text-[#1a1a1a] pt-4 uppercase">
                Measuring Impact and Outcomes
              </h2>
              <p>
                We rely on rigorous data collection and community feedback to measure the impact of our programs. This evidence-based approach allows us to refine our methods and ensure that every donation and volunteer hour contributes to meaningful, measurable change.
              </p>
              <p>
                From reforestation efforts to women-led micro-finance cooperatives, our projects are designed to be scalable and replicable across different regions of Nepal, providing a blueprint for sustainable development in the Himalayas.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-16">
            
            {/* Recent Articles */}
            <div>
              <h3 className="font-bold text-2xl mb-8 text-[#1a1a1a]">
                Recent Articles
              </h3>
              <div className="space-y-6">
                {recentArticles.map((article, idx) => (
                  <Link
                    href={`/article-blogs/${article.slug}`}
                    key={idx}
                    className="flex gap-4 group items-start"
                  >
                    <img
                      src={article.img}
                      alt={article.title}
                      className="w-20 h-16 rounded object-cover shrink-0"
                    />
                    <div>
                      <p className="text-[14px] font-[500] text-[#1a1a1a] leading-tight group-hover:text-[var(--blue)] transition-colors mb-1">
                        {article.title}
                      </p>
                      <p className="text-[14px] font-[500] text-[var(--blue)] uppercase tracking-wider">
                        {article.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Us Sidebar Form */}
            <div>
              <h3 className="font-bold text-2xl mb-8 text-[var(--blue)]">
                Contact Us
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-[#F5F7F9] border-none rounded-md px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[var(--blue)]/20"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full bg-[#F5F7F9] border-none rounded-md px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[var(--blue)]/20"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full bg-[#F5F7F9] border-none rounded-md px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[var(--blue)]/20"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-[#F5F7F9] border-none rounded-md px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[var(--blue)]/20 resize-none"
                />
                <button
                  className="w-fit h-[40px] flex items-center justify-center gap-2 px-6 py-3  text-sm  text-white transition-opacity hover:opacity-90"
                  style={{ background: "var(--blue)" }}
                >
                  <Send size={14} className="rotate-[-20deg]" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <DonationWidget />
      <CTABanner />
    </main>
  );
}
