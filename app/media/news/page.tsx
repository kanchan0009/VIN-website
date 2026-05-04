import CTABanner from "../../components/CTABanner";
import MediaTabs from "../../components/MediaTabs";

const newsItems = [
  {
    id: 1,
    title: "VIN Launches New Women's Entrepreneurship Program in Okhaldhunga",
    date: "Jan 10, 2025",
    summary:
      "Volunteers Initiative Nepal (VIN) has launched a new entrepreneurship program aimed at empowering 200 women in Okhaldhunga district with skills in micro-business development and financial literacy.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    tag: "Program Launch",
  },
  {
    id: 2,
    title: "International Volunteers Contribute 10,000+ Hours in 2024",
    date: "Dec 28, 2024",
    summary:
      "Over 300 international volunteers from 25 countries contributed more than 10,000 service hours across VIN's community development programs throughout Nepal.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    tag: "Volunteers",
  },
  {
    id: 3,
    title: "VIN Receives Grant for Disaster Resilience Project",
    date: "Dec 15, 2024",
    summary:
      "A significant grant has been awarded to VIN to implement community-based disaster risk reduction initiatives across 12 villages in Nuwakot district.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    tag: "Funding",
  },
  {
    id: 4,
    title: "New School Infrastructure Completed in Kavre",
    date: "Nov 30, 2024",
    summary:
      "VIN has completed the construction of a new school building including classrooms, library, and sanitation facilities benefiting over 300 students in Kavre district.",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
    tag: "Infrastructure",
  },
  {
    id: 5,
    title: "Health Camp Reaches 1,000+ Beneficiaries in Remote Communities",
    date: "Nov 18, 2024",
    summary:
      "A month-long health camp organized by VIN provided free medical checkups, medicines, and health education to over 1,000 people in marginalized communities.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    tag: "Health",
  },
  {
    id: 6,
    title: "Youth Climate Action Network Established",
    date: "Nov 05, 2024",
    summary:
      "VIN facilitated the establishment of a youth-led climate action network bringing together young environmental leaders from 8 communities.",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80",
    tag: "Environment",
  },
];

export default function NewsUpdatePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[670px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80"
          alt="News Update"
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
          
          <h1
            className="text-5xl font-bold text-white"
            style={{ }}
          >
            News Update
          </h1>
        </div>
      </section>

      <MediaTabs />

      {/* News List */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-10">
          {newsItems.map((news) => (
            <div
              key={news.id}
              className="flex flex-col md:flex-row gap-6 items-start group cursor-pointer"
            >
              <div className="w-full md:w-64 shrink-0 rounded-xl overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-medium">
                    {news.tag}
                  </span>
                  <span className="text-xs text-gray-400">{news.date}</span>
                </div>
                <h3
                  className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors"
                  style={{ }}
                >
                  {news.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {news.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </main>
  );
}

