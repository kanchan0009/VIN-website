import Link from "next/link";
import DonationWidget from "../components/DonationWidget";
import CTABanner from "../components/CTABanner";

const albums = [
  {
    title: "Women Empowerment Album",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
  },
  {
    title: "Women Empowerment Album",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
  },
  {
    title: "Women Empowerment Album",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
  },
  {
    title: "Women Empowerment Album",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
  },
  {
    title: "Women Empowerment Album",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
  },
  {
    title: "Women Empowerment Album",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Title */}
      <section className="pt-8 pb-7 text-center">
        <h1 className="text-4xl font-bold text-[#1a1a1a]">
         Programs Gallery
        </h1>
      </section>

      {/* Album Grid */}
      <section className="pb-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {albums.map((album, idx) => (
              <div
                key={idx}
                className="relative rounded-[10px] overflow-hidden group w-full aspect-square shadow-xl"
              >
                <img
                  src={album.img}
                  alt={album.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 text-center px-6">
                  <h4 className="text-white text-lg font-[600] mb-4 leading-tight">
                    {album.title}
                  </h4>
                  <Link href="/program-gallery?topic=default">
                    <button className="bg-[var(--blue)] text-white px-10 py-4 rounded-xl font-bold text-sm hover:bg-white hover:text-[var(--blue)] transition-all shadow-lg active:scale-95">
                      Explore Album
                    </button>
                  </Link>
                </div>
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


