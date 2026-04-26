import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTABanner from "../../components/CTABanner";
import DonationWidget from "../../components/DonationWidget";

const recentPosts = [
  {
    title: "Women's Development in Nepal: The Myth of Empowerment",
    date: "Feb 2, 2026",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    slug: "womens-development-nepal",
  },
  {
    title: "Women's Development in Nepal: The Myth of Empowerment",
    date: "Feb 2, 2026",
    img: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=100&q=80",
    slug: "womens-development-nepal-2",
  },
  {
    title: "Women's Development in Nepal: The Myth of Empowerment",
    date: "Feb 2, 2026",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=100&q=80",
    slug: "womens-development-nepal-3",
  },
];

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main content */}
          <article className="flex-1">
            <div className="rounded-4xl overflow-hidden mb-10 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80"
                alt="Blog"
                className="w-full h-96 object-cover"
              />
            </div>

            <div className="rounded-4xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8162f]">
                  Women's Empowerment
                </span>
                <p className="text-sm text-gray-500">
                  Feb 2, 2026 · 8 min read
                </p>
              </div>

              <h1
                className="text-4xl font-semibold leading-tight tracking-tight mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Women's Development in Nepal: The Myth of Empowerment
              </h1>

              <p className="text-lg text-gray-700 leading-8 mb-8">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>

              <div className="prose prose-lg max-w-none text-gray-600 leading-8">
                <h2
                  className="text-2xl font-semibold"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Why do we use it?
                </h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>

                <h2
                  className="text-2xl font-semibold"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Where does it come from?
                </h2>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage.
                </p>
                <p>
                  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                  Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                  Cicero, written in 45 BC. This book is a treatise on the
                  theory of ethics, very popular during the Renaissance.
                </p>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                  also reproduced in their exact original form, accompanied by
                  English versions from the 1914 translation by H. Rackham.
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-72 shrink-0 space-y-8">
            {/* Recent Posts */}
            <div className="rounded-2xl p-5 border border-gray-100">
              <h3
                className="font-bold text-base mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Recent Blogs
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Link
                    href={`/blogs/${post.slug}`}
                    key={post.slug}
                    className="flex gap-3 group"
                  >
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                    <div>
                      <p className="text-xs font-semibold leading-snug group-hover:text-indigo-700 transition-colors line-clamp-2">
                        {post.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-2xl p-5 border border-gray-100">
              <h3
                className="font-bold text-base mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Contact Us
              </h3>
              <div className="space-y-3">
                {["Full Name", "Address", "Phone Number", "Message"].map(
                  (field) =>
                    field === "Message" ? (
                      <textarea
                        key={field}
                        placeholder={field}
                        rows={3}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-400 resize-none"
                      />
                    ) : (
                      <input
                        key={field}
                        type="text"
                        placeholder={field}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-400"
                      />
                    ),
                )}
                <button
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white"
                  style={{ background: "var(--indigo-btn)" }}
                >
                  Send Message <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <DonationWidget />

      <CTABanner />
    </main>
  );
}
