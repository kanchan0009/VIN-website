import CTABanner from "../../components/CTABanner";
import MediaTabs from "../../components/MediaTabs";
import { Quote } from "lucide-react";

const stories = [
  {
    id: 1,
    name: "Sita Devi Sharma",
    role: "Entrepreneur & Community Leader",
    location: "Okhaldhunga District",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    quote:
      "Before VIN, I had no income of my own. Today, I run a successful tailoring business and employ three other women from my village. VIN gave me skills, confidence, and hope.",
    story:
      "Sita joined VIN's women's empowerment program in 2019. Through skills training in tailoring and business management, she started her own enterprise. Within two years, she expanded her business and now mentors other women in her community. She has also become an active member of the local women's cooperative.",
    impact: [
      "Started own tailoring business",
      "Employs 3 women from her village",
      "Mentors 15+ aspiring entrepreneurs",
      "Active member of women's cooperative",
    ],
  },
  {
    id: 2,
    name: "Ramesh Gurung",
    role: "Youth Leader & Change Maker",
    location: "Nuwakot District",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&q=80",
    quote:
      "VIN's youth program showed me that young people can be leaders. I now run workshops on climate action and have mobilized over 50 youth volunteers in my district.",
    story:
      "Ramesh was a quiet student when he first joined VIN's youth club. Through leadership training and life skills sessions, he discovered his passion for community organizing. He now leads environmental initiatives and has become a role model for other young people in his community.",
    impact: [
      "Leads district youth climate network",
      "Mobilized 50+ youth volunteers",
      "Conducted 20+ awareness workshops",
      "Recognized by local government",
    ],
  },
  {
    id: 3,
    name: "Maya Tamang",
    role: "Community Health Volunteer",
    location: "Kavre District",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&q=80",
    quote:
      "I am the first person in my family to receive health training. Now I help my entire village access better health information and services.",
    story:
      "Maya became a community health volunteer through VIN's public health program. She received training in basic healthcare, first aid, and health education. She now organizes monthly health awareness sessions in her village and coordinates with local health posts for medical camps.",
    impact: [
      "Trained community health volunteer",
      "Serves 200+ households",
      "Organizes monthly health sessions",
      "Reduced waterborne diseases by 60%",
    ],
  },
  {
    id: 4,
    name: "Hari Bahadur Thapa",
    role: "Organic Farmer & Trainer",
    location: "Okhaldhunga District",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80",
    quote:
      "VIN taught me that farming can be both sustainable and profitable. My organic produce now fetches better prices, and I train other farmers in my region.",
    story:
      "Hari attended VIN's permaculture and organic farming training in 2020. He transformed his traditional farm into an organic operation using agroforestry techniques. His success has inspired many neighboring farmers to adopt sustainable practices.",
    impact: [
      "Converted 3 acres to organic farming",
      "Income increased by 40%",
      "Trains 25+ farmers annually",
      "Established seed bank for community",
    ],
  },
];

export default function SuccessStoriesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-72 flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600&q=80"
          alt="Success Stories"
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
            Home / Media / <span className="text-white">Success Stories</span>
          </p>
          <h1
            className="text-5xl font-bold text-white"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Success Stories
          </h1>
        </div>
      </section>

      <MediaTabs />

      {/* Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-16">
          {stories.map((story, i) => (
            <div
              key={story.id}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center`}
            >
              <div className="w-full md:w-80 shrink-0">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3
                    className="font-bold text-lg"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {story.name}
                  </h3>
                  <p className="text-sm text-indigo-700 font-medium">
                    {story.role}
                  </p>
                  <p className="text-xs text-gray-500">{story.location}</p>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-indigo-50 rounded-xl p-6 mb-6 relative">
                  <Quote className="text-indigo-300 mb-2" size={28} />
                  <p
                    className="text-gray-700 italic leading-relaxed"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {story.quote}
                  </p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {story.story}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Key Impact:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {story.impact.map((item, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
