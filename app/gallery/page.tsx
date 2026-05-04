import CTABanner from "../components/CTABanner";
import DonationWidget from "../components/DonationWidget";
import MediaTabs from "../components/MediaTabs";

const photos = [
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80",
  "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=500&q=80",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&q=80",
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=500&q=80",
  "https://images.unsplash.com/photo-1584515933487-779824d29309?w=500&q=80",
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=500&q=80",
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&q=80",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&q=80",
];

export default function GalleryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[670px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80"
          alt="Gallery"
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
            Home / <span className="text-white">Gallery</span>
          </p>
          <h1
            className="text-5xl font-bold text-white mb-2"
            style={{ }}
          >
            Gallery
          </h1>
          <p className="text-white/70 text-sm">
            Lorem Ipsum Dipsum We Are Different Locations Loreum Ipsum Dipsum
          </p>
        </div>
      </section>

      <MediaTabs />

      {/* Filter tabs */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex gap-3 flex-wrap justify-center">
          {[
            "All",
            "Women's Empowerment",
            "Child Development",
            "Youth Empowerment",
            "Environment",
            "Community",
          ].map((cat, i) => (
            <button
              key={cat}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all"
              style={
                i === 0
                  ? { background: "var(--indigo-btn)", color: "white" }
                  : { background: "#f3f4f6", color: "#6b7280" }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {photos.map((src, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden cursor-pointer group ${i === 1 || i === 5 ? "row-span-2" : ""}`}
                style={{ height: i === 1 || i === 5 ? "100%" : 220 }}
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ height: i === 1 || i === 5 ? 460 : 220 }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonationWidget />

      <CTABanner />
    </main>
  );
}

