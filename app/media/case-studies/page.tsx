"use client";
import Link from "next/link";
import CTABanner from "../../components/CTABanner";

const caseStudies = [
  {
    id: 1,
    title: "Case Study Heading",
    summary: "Lorem ipsum dipsum lorem ipsum dipsum Loreum ipsum dipsum lorem ..",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
  },
  {
    id: 2,
    title: "Case Study Heading",
    summary: "Lorem ipsum dipsum lorem ipsum dipsum Loreum ipsum dipsum lorem ..",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
  },
  {
    id: 3,
    title: "Case Study Heading",
    summary: "Lorem ipsum dipsum lorem ipsum dipsum Loreum ipsum dipsum lorem ..",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
  },
  {
    id: 4,
    title: "Case Study Heading",
    summary: "Lorem ipsum dipsum lorem ipsum dipsum Loreum ipsum dipsum lorem ..",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
  },
  {
    id: 5,
    title: "Case Study Heading",
    summary: "Lorem ipsum dipsum lorem ipsum dipsum Loreum ipsum dipsum lorem ..",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
  },
  {
    id: 6,
    title: "Case Study Heading",
    summary: "Lorem ipsum dipsum lorem ipsum dipsum Loreum ipsum dipsum lorem ..",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
  },
  {
    id: 7,
    title: "Case Study Heading",
    summary: "Lorem ipsum dipsum lorem ipsum dipsum Loreum ipsum dipsum lorem ..",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
  },
  {
    id: 8,
    title: "Case Study Heading",
    summary: "Lorem ipsum dipsum lorem ipsum dipsum Loreum ipsum dipsum lorem ..",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
  },
  {
    id: 9,
    title: "Case Study Heading",
    summary: "Lorem ipsum dipsum lorem ipsum dipsum Loreum ipsum dipsum lorem ..",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="text-[#1a1a2e]">
      {/* Hero */}
      <section className="relative h-[500px] flex items-end overflow-hidden full-width-bg">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
          alt="Case Studies"
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
            Case Studies
          </h1>
          <p className="text-white/80 max-w-4xl text-lg">
            Empowering marginalized communities through sustainable development.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {caseStudies.map((study) => (
              <div key={study.id} className="group flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[24px] font-[600] text-[#212121] mb-2">
                  {study.title}
                </h3>
                <p className="text-[#4b5563] text-[16px] leading-relaxed mb-3">
                  {study.summary}
                </p>
                <Link 
                  href={`/media/case-studies/${study.id}`}
                  className="text-[var(--blue)] font-[600] flex items-center gap-2 hover:gap-3 transition-all mt-auto"
                >
                  Read Case Study <span className="text-xl">→</span>
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

      <CTABanner />
    </main>
  );
}
