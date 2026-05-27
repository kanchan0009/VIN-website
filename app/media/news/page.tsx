"use client";
import { useState } from "react";
import Link from "next/link";
import CTABanner from "../../components/CTABanner";
import DonationWidget from "../../components/DonationWidget";
import { ChevronLeft, ChevronRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "VIN Launches New Women's Entrepreneurship Program in Okhaldhunga",
    date: "Jan 10, 2025",
    summary: "Volunteers Initiative Nepal (VIN) has launched a new entrepreneurship program aimed at empowering 200 women in Okhaldhunga district with skills in micro-business development and financial literacy.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    tag: "Program Launch",
  },
  {
    id: 2,
    title: "International Volunteers Contribute 10,000+ Hours in 2024",
    date: "Dec 28, 2024",
    summary: "Over 300 international volunteers from 25 countries contributed more than 10,000 service hours across VIN's community development programs throughout Nepal.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    tag: "Volunteers",
  },
  {
    id: 3,
    title: "VIN Receives Grant for Disaster Resilience Project",
    date: "Dec 15, 2024",
    summary: "A significant grant has been awarded to VIN to implement community-based disaster risk reduction initiatives across 12 villages in Nuwakot district.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    tag: "Funding",
  },
  {
    id: 4,
    title: "New School Infrastructure Completed in Kavre",
    date: "Nov 30, 2024",
    summary: "VIN has completed the construction of a new school building including classrooms, library, and sanitation facilities benefiting over 300 students in Kavre district.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
    tag: "Infrastructure",
  },
  {
    id: 5,
    title: "Health Camp Reaches 1,000+ Beneficiaries in Remote Communities",
    date: "Nov 18, 2024",
    summary: "A month-long health camp organized by VIN provided free medical checkups, medicines, and health education to over 1,000 people in marginalized communities.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    tag: "Health",
  },
  {
    id: 6,
    title: "Youth Climate Action Network Established",
    date: "Nov 05, 2024",
    summary: "VIN facilitated the establishment of a youth-led climate action network bringing together young environmental leaders from 8 communities.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80",
    tag: "Environment",
  },
  {
    id: 7,
    title: "Digital Literacy for Rural Teachers",
    date: "Oct 22, 2024",
    summary: "VIN partnered with local education authorities to provide digital literacy training to 50 teachers in remote mountain schools.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80",
    tag: "Education",
  },
  {
    id: 8,
    title: "Water Filtration Systems Installed in 10 Villages",
    date: "Oct 10, 2024",
    summary: "Clean drinking water access was improved for 500 families through the installation of sustainable biosand filtration systems.",
    image: "https://images.unsplash.com/photo-1594498653385-d5172b532c00?w=600&q=80",
    tag: "WASH",
  },
  {
    id: 9,
    title: "VIN Annual General Meeting Highlights Impact",
    date: "Sep 25, 2024",
    summary: "The annual review meeting showcased significant progress in community health and women's empowerment metrics for the fiscal year.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80",
    tag: "Governance",
  },
];

export default function NewsUpdatePage() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  const currentItems = newsItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="text-[#1a1a2e]">
      {/* Hero */}
      <section className="relative flex items-end overflow-hidden full-width-bg h-[75vh] min-h-[600px] max-h-[800px]">
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
        <div className="relative z-10 mx-auto px-4 md:px-[60px] pb-5 md:pb-10 w-full">
          <h1 className="text-3xl md:text-5xl md:text-6xl font-bold text-white">
            News Update
          </h1>
          <p className="text-white/80 max-w-4xl text-lg mt-4">
            Stay updated with our latest stories, impact reports, and community developments from across Nepal.
          </p>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {currentItems.map((news, i) => (
              <div key={news.id} className="group flex flex-col border border-gray-200 shadow-sm hover:shadow-md rounded-lg overflow-hidden h-full transition-shadow bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[20px] font-[600] text-[#212121] mb-2 group-hover:text-[var(--blue)] transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-[#4b5563] text-[16px] leading-relaxed mb-4 line-clamp-3">
                    {news.summary}
                  </p>
                  <Link 
                    href={`/media/news/${news.id}`}
                    className="text-[var(--blue)] font-[600] flex items-center gap-2 hover:gap-3 transition-all mt-auto"
                  >
                    Read Full News <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 md:mt-24 flex items-center justify-start gap-4">
            <button 
              onClick={() => goToPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`w-10 h-10 flex items-center justify-center transition-colors ${currentPage === 1 ? 'text-gray-200 cursor-not-allowed' : 'text-gray-400 hover:text-[var(--blue)]'}`}
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button 
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full border text-sm font-medium transition-all ${
                    currentPage === page 
                      ? "bg-[var(--blue)] text-white border-[var(--blue)]" 
                      : "border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button 
              onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 flex items-center justify-center transition-colors ${currentPage === totalPages ? 'text-gray-200 cursor-not-allowed' : 'text-gray-400 hover:text-[var(--blue)]'}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
      <DonationWidget/>

      <CTABanner />
    </main>
  );
}
