import CTABanner from "../../components/CTABanner";
import MediaTabs from "../../components/MediaTabs";
import { Play } from "lucide-react";

const interviews = [
  {
    id: 1,
    title: "Executive Director on VIN's Vision for 2030",
    guest: "Bhupendra Ghimire",
    role: "Executive Director, VIN",
    duration: "18:45",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    description:
      "An in-depth conversation about VIN's strategic vision, upcoming programs, and the organization's roadmap for creating sustainable community development across Nepal.",
    date: "Dec 20, 2024",
  },
  {
    id: 2,
    title: "A Volunteer's Journey: From Australia to Rural Nepal",
    guest: "Sarah Mitchell",
    role: "International Volunteer",
    duration: "24:30",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    description:
      "Sarah shares her transformative experience volunteering with VIN's child development program and how it changed her perspective on community-led development.",
    date: "Nov 15, 2024",
  },
  {
    id: 3,
    title:
      "Empowering Communities Through Education: A Program Manager's Perspective",
    guest: "Prakash Sharma",
    role: "Education Program Manager",
    duration: "15:20",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    description:
      "Prakash discusses the challenges and successes of implementing education programs in remote areas and the importance of community ownership in sustainable development.",
    date: "Oct 28, 2024",
  },
  {
    id: 4,
    title: "Women Leading Change: Stories from the Field",
    guest: "Sita Devi Sharma",
    role: "Community Leader & Entrepreneur",
    duration: "21:10",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    description:
      "Sita shares her inspiring journey from a homemaker to a community leader and successful entrepreneur, and how VIN's programs enabled her transformation.",
    date: "Oct 10, 2024",
  },
  {
    id: 5,
    title: "Building Resilience: Disaster Management in Himalayan Communities",
    guest: "Ram Bahadur Thapa",
    role: "DRR Program Coordinator",
    duration: "19:55",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    description:
      "Ram discusses the importance of community-based disaster risk reduction and shares success stories from VIN's DRR programs in Nuwakot and surrounding districts.",
    date: "Sep 22, 2024",
  },
  {
    id: 6,
    title: "Youth Voices: The Next Generation of Changemakers",
    guest: "Ramesh Gurung & Team",
    role: "Youth Leaders",
    duration: "27:15",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80",
    description:
      "A panel discussion with young leaders who are driving environmental and social change in their communities through VIN's youth empowerment programs.",
    date: "Sep 05, 2024",
  },
];

export default function InterviewsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[670px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1600&q=80"
          alt="Interviews"
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
            Interviews
          </h1>
        </div>
      </section>

      <MediaTabs />

      {/* Featured Interview */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-2xl font-bold mb-6"
            style={{ }}
          >
            Featured Interview
          </h2>
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src={interviews[0].image}
              alt={interviews[0].title}
              className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="text-white ml-1" size={32} fill="white" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-medium mb-3 inline-block">
                Latest
              </span>
              <h3
                className="text-xl md:text-2xl font-bold text-white mb-2"
                style={{ }}
              >
                {interviews[0].title}
              </h3>
              <p className="text-white/80 text-sm">
                {interviews[0].guest} · {interviews[0].role} ·{" "}
                {interviews[0].duration}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interviews Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-2xl font-bold mb-8"
            style={{ }}
          >
            All Interviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interviews.slice(1).map((interview) => (
              <div key={interview.id} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={interview.image}
                    alt={interview.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play
                        className="text-white ml-0.5"
                        size={20}
                        fill="white"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/60 text-white text-xs font-medium">
                    {interview.duration}
                  </div>
                </div>
                <h3
                  className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors"
                  style={{ }}
                >
                  {interview.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">
                  {interview.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="font-medium text-gray-700">
                    {interview.guest}
                  </span>
                  <span>·</span>
                  <span>{interview.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}

