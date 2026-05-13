"use client";
import Link from "next/link";
import CTABanner from "../../components/CTABanner";
import DonationWidget from "../../components/DonationWidget";

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
    <main className="text-[#1a1a2e]">
      {/* Hero */}
      <section className="relative h-[500px] flex items-end overflow-hidden full-width-bg">
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
        <div className="relative z-10 mx-auto px-4 md:px-[60px] pb-10 w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            News Update
          </h1>
          <p className="text-white/80 max-w-4xl text-lg mt-4">
            Stay updated with our latest stories, impact reports, and community developments from across Nepal.
          </p>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {[...newsItems, ...newsItems].slice(0, 9).map((news, i) => (
              <div key={i} className="group flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[20px] font-[600] text-[#212121] mb-2 group-hover:text-[var(--blue)] transition-colors">
                  {news.title}
                </h3>
                <p className="text-[#4b5563] text-[16px] leading-relaxed mb-2 line-clamp-3">
                  {news.summary}
                </p>
                <Link 
                  href={`/media/news/${news.id}`}
                  className="text-[var(--blue)] font-[600] flex items-center gap-2 hover:gap-3 transition-all mt-auto"
                >
                  Read Full News <span className="text-xl">→</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-24 flex items-center justify-start gap-4">
            <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[var(--blue)] transition-colors">
              <span className="text-2xl">←</span>
            </button>
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-sm font-medium hover:bg-gray-50">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--blue)] text-white text-sm font-medium">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-sm font-medium hover:bg-gray-50">3</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-sm font-medium hover:bg-gray-50">4</button>
            </div>
            <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[var(--blue)] transition-colors">
              <span className="text-2xl">→</span>
            </button>
          </div>
        </div>
      </section>
      <DonationWidget/>

      <CTABanner />
    </main>
  );
}
