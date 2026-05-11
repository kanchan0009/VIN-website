"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Women's Trafficking Prevention",
    desc: "The EID project aims to ensure economic independence of women by building their skills and providing the necessary support for facilitating women entrepreneurship.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
  },
  {
    title: "Entrepreneurship Development",
    desc: "The EID project aims to ensure economic independence of women by building their skills and providing the necessary support for facilitating women entrepreneurship.",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
  },
  {
    title: "Women's Education and Life Skills",
    desc: "This project empowers women to become self-reliant and resilient by providing them access to relevant education and skills development.",
    img: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400&q=80",
  },
];
export default function CTABanner() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* CTA SECTION */}
      <section className="relative overflow-hidden py-14 bg-gradient-to-r from-[var(--blue)] to-[#CFCCFF]">
        {/* 🔥 S-SHAPE VECTOR */}
        <div className="absolute top-[-40px] right-[-40px] rotate-[5.9deg] opacity-40 pointer-events-none">
          <svg
            width="700"
            height="350"
            viewBox="0 0 700 350"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sGradient" x1="0" y1="0" x2="700" y2="0">
                <stop offset="0%" stopColor="#0A00AE" />
                <stop offset="100%" stopColor="#CFCCFF" />
              </linearGradient>
            </defs>

            <path
              d="M50 250 
                 C150 50, 350 50, 450 200 
                 S650 350, 650 100"
              stroke="url(#sGradient)"
              strokeWidth="60"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className=" mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* LEFT CONTENT */}
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-[600] text-white mb-3">
              Choose where your Impact Begins
            </h2>

            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Make a difference today! Choose to become a volunteer, sponsor a
              child, join an internship, or donate now, and help create lasting
              impact in lives and communities.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Link
                href="/get-involved"
                className="px-5 py-2 text-sm font-[700] bg-white text-[var(--blue)] rounded-md hover:bg-gray-100 transition"
              >
                Get Involved With Us
              </Link>

              <Link
                href="/donate"
                className="px-5 py-2 text-sm font-medium text-white border border-white rounded-md hover:bg-white/10 transition"
              >
                Donate Now
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="mt-10 md:mt-0 md:ml-10">
            <Image
              src="/customers.jpg"
              alt="Volunteers"
              width={360}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* PROJECT SECTION */}
      <section className="py-16 bg-white">
        <div className=" mx-auto px-4 ">
          <h2 className="text-[50px] font-[500] text-center mb-4">
            Choose Ways To Get Involved With Us
          </h2>

          {/* FILTERS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full max-w-4xl mx-auto">
            {["Choose a Category", "Program", "Project"].map((f) => (
              <select
                key={f}
                className="flex-1 w-full px-4 py-2.5 border-2 border-black text-[15px] text-black focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] cursor-pointer text-center"
                style={{ textAlignLast: "center" }}
              >
                <option>{f}</option>
              </select>
            ))}
          </div>
          <div className="w-full mt-8">
            {/* Slider Controls */}
            <div className="flex justify-end gap-3 mb-6">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 flex items-center justify-center border border-black rounded-full hover:bg-gray-100 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 font-bold text-lg"
              >
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 flex items-center justify-center border border-black rounded-full hover:bg-gray-100 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 font-bold text-lg"
              >
                →
              </button>
            </div>

            {/* CARDS */}
            <div className="relative w-full">
              <div
                ref={scrollRef}
                className="scrollbar-hide flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory"
              >
                {projects.map((p, i) => (
                  <div key={i} className="flex-1 min-w-[320px] overflow-hidden bg-white ">
                    <div className="relative h-60 w-full">
                      <Image
                        src={p.img}
                        alt={p.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-6 text-left">
                      <h3 className="font-[700] text-xl mb-3 text-gray-900">{p.title}</h3>

                      <p className="text-base text-gray-600 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

