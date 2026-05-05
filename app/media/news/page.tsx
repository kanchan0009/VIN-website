import Link from "next/link";
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
            className="text-5xl font-[800] text-white"
          >
            News Update
          </h1>
          <p className="text-xl text-white/90 mt-5 max-w-6xl font-[400] leading-relaxed">
            Stay updated with our latest stories, impact reports, and community developments from across Nepal. 
            Discover how your support is making a real difference.
          </p>
        </div>
      </section>

      <MediaTabs />

      {/* News Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {[...newsItems, ...newsItems].slice(0, 9).map((news, i) => (
              <div key={i} className="flex flex-col group">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-[5px] mb-5 shadow-sm">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Content */}
                <div className="space-y-4 pr-4">
                  <h3 className="text-[17px] font-[800] text-[#1D1E20] leading-[1.3] group-hover:text-[#221C84] transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-[15px] text-[#4A4A4A] leading-[1.6] font-[500] line-clamp-3">
                    {news.summary}
                  </p>
                  <Link 
                    href={`/media/news/${news.id}`}
                    className="inline-flex items-center gap-2 text-[#221C84] text-[14px] font-[600] hover:underline pt-2"
                  >
                    Read Full News →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-24 flex items-center justify-start gap-5">
            <button className="text-gray-400 hover:text-[#221C84] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            
            <div className="flex items-center gap-4">
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  className={`w-11 h-11 flex items-center justify-center rounded-full text-[15px] font-[700] transition-all ${
                    page === 2 
                      ? "bg-[#221C84] text-white" 
                      : "border border-gray-300 text-gray-600 hover:border-[#221C84] hover:text-[#221C84]"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button className="text-gray-400 hover:text-[#221C84] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}

