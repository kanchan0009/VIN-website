import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from 'lucide-react';
const projects = [
  {
    title: "Women's Trafficking Prevention",
    desc: "The EID project aims to ensure economic independence of women by building their skills and providing the necessary support for facilitating women entrepreneurship.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    tag: "Women's Empowerment",
  },
  {
    title: "Entrepreneurship Development",
    desc: "The EID project aims to ensure economic independence of women by building their skills and providing the necessary support for facilitating women entrepreneurship.",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
    tag: "Youth Empowerment",
  },
  {
    title: "Women's Education and Life Skills",
    desc: "This project empowers women to become self-reliant and resilient by providing them access to relevant education and skills development to help them participate on...",
    img: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400&q=80",
    tag: "Women's Empowerment",
  },
];

export default function CTABanner() {
  return (
    <>
      <section className="relative overflow-hidden py-14 bg-gradient-to-r from-white via-[#e6e6fa] to-[#7c78c9]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* LEFT CONTENT */}
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Choose where your Impact Begins
            </h2>

            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              Make a difference today! Choose to become a volunteer, sponsor a
              child, join an internship, or donate now, and help create lasting
              impact in lives and communities.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {/* Button 1 */}
              <Link
                href="/get-involved"
                className="px-5 py-2 text-sm font-medium bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Get Involved With Us
              </Link>

              {/* Button 2 */}
              <Link
                href="/donate"
                className="px-5 py-2 text-sm font-medium text-indigo-700 border border-indigo-500 rounded-md bg-white hover:bg-indigo-50 transition"
              >
                Donate Now
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="mt-10 md:mt-0 md:ml-10">
            <img
              src="/images/volunteers.png"
              alt="Volunteers"
              className="w-[280px] md:w-[360px] object-contain"
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Choose Ways To Get Involved With Us
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {['Choose a Category', 'Program', 'Project'].map(f => (
            <select key={f} className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white text-gray-700 focus:outline-none pr-10">
              <option>{f}</option>
            </select>
          ))}
        </div>

        {/* Cards */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="relative h-52 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation arrows */}
          <div className="flex justify-end gap-2 mt-6">
            {[ChevronLeft, ChevronRight].map((Icon, i) => (
              <button key={i}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
      
    </>
  );
}
