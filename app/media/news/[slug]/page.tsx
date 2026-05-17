import Link from "next/link";
import { Send } from "lucide-react";
import CTABanner from "../../../components/CTABanner";
import DonationWidget from "../../../components/DonationWidget";

const recentPosts = [
  {
    title: "International Volunteers Contribute 10,000+ Hours in 2024",
    date: "December 28, 2024",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&q=80",
    slug: "2",
  },
  {
    title: "VIN Receives Grant for Disaster Resilience Project",
    date: "December 15, 2024",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=200&q=80",
    slug: "3",
  },
  {
    title: "New School Infrastructure Completed in Kavre",
    date: "November 30, 2024",
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&q=80",
    slug: "4",
  },
];

export default function NewsDetailPage({
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
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80"
                alt="News Update"
                className="w-full h-auto object-cover aspect-[16/10]"
              />
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-[#1a1a1a] mb-8">
              VIN Launches New Women's Entrepreneurship Program in Okhaldhunga
            </h1>

            <div className="text-gray-700 leading-relaxed space-y-6 text-[15px]">
              <p>
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem ipsum.
              </p>

              <h2 className="text-xl font-bold text-[#1a1a1a] pt-4">
                Program Overview
              </h2>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>

              <h2 className="text-xl font-bold text-[#1a1a1a] pt-4">
                Future Goals
              </h2>
              <p>
                Contrary to popular belief, Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.
              </p>
              <p>
                The standard chunk of Lorem ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-16">
            
            {/* Recent Posts */}
            <div>
              <h3 className="font-bold text-2xl mb-8 text-[#1a1a1a]">
                Recent News
              </h3>
              <div className="space-y-6">
                {recentPosts.map((post, idx) => (
                  <Link
                    href={`/media/news/${post.slug}`}
                    key={idx}
                    className="flex gap-4 group items-start"
                  >
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-20 h-16 rounded object-cover shrink-0"
                    />
                    <div>
                      <p className="text-[14px] font-[500] text-[#1a1a1a] leading-tight group-hover:text-[var(--blue)] transition-colors mb-1">
                        {post.title}
                      </p>
                      <p className="text-[14px] font-[500] text-[var(--blue)] uppercase tracking-wider">
                        {post.date}
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
                  <span>Send Message</span>
                  <Send size={14} className="rotate-[-20deg]" />
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
