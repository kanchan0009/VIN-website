import CTABanner from "../../components/CTABanner";
import MediaTabs from "../../components/MediaTabs";

const articles = [
  {
    id: 1,
    title: "Empowering Women in Rural Nepal: A Journey of Transformation",
    excerpt:
      "Discover how VIN's women's empowerment programs are changing lives across marginalized communities in Nepal through education, skill development, and economic independence.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    date: "Dec 15, 2024",
    author: "VIN Communications",
    category: "Women's Empowerment",
  },
  {
    id: 2,
    title: "Youth Leadership: Building Tomorrow's Change Makers",
    excerpt:
      "Exploring the impact of youth empowerment initiatives on community development and how young leaders are driving positive change in their neighborhoods.",
    image:
      "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=600&q=80",
    date: "Nov 28, 2024",
    author: "VIN Communications",
    category: "Youth Empowerment",
  },
  {
    id: 3,
    title: "Sustainable Agriculture Practices in the Himalayas",
    excerpt:
      "An in-depth look at how organic farming and permaculture techniques are helping Nepali farmers adapt to climate change while improving food security.",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80",
    date: "Nov 10, 2024",
    author: "VIN Communications",
    category: "Environment",
  },
  {
    id: 4,
    title: "Education for All: Bridging the Rural-Urban Gap",
    excerpt:
      "Examining the challenges and successes of bringing quality education to remote villages in Nepal, and the role of volunteer teachers in this mission.",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
    date: "Oct 22, 2024",
    author: "VIN Communications",
    category: "Education",
  },
  {
    id: 5,
    title: "Community Health: Prevention is Better Than Cure",
    excerpt:
      "How VIN's public health programs are transforming healthcare access in rural Nepal through awareness campaigns, medical camps, and preventive education.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    date: "Oct 05, 2024",
    author: "VIN Communications",
    category: "Public Health",
  },
  {
    id: 6,
    title: "Disaster Preparedness: Communities Taking Charge",
    excerpt:
      "The story of how community-led disaster risk reduction programs are building resilience and saving lives in disaster-prone regions of Nepal.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    date: "Sep 18, 2024",
    author: "VIN Communications",
    category: "DRR",
  },
];

export default function ArticlesPage() {
  return (
    <main>
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-10 w-full">
          <p className="text-white/60 text-sm mb-2">
            Home / Media / <span className="text-white">Articles</span>
          </p>
          <h1
            className="text-5xl font-bold text-white"
            style={{ }}
          >
            Articles
          </h1>
        </div>
      </section>

      <MediaTabs />

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="group cursor-pointer">
                <div className="rounded-2xl overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-medium">
                    {article.category}
                  </span>
                  <span>{article.date}</span>
                </div>
                <h3
                  className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors"
                  style={{ }}
                >
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <p className="text-xs text-gray-400 mt-3">
                  By {article.author}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}

