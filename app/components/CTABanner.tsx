"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

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
  {
    title: "Children's Health Program",
    desc: "Ensuring every child has access to basic healthcare and nutrition in the most remote areas of Nepal.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
  },
  {
    title: "Organic Farming Initiative",
    desc: "Supporting local farmers to transition to sustainable organic methods for better yield and health.",
    img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&q=80",
  },
  {
    title: "Youth Leadership Training",
    desc: "Empowering the next generation with the skills and confidence to lead their communities.",
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&q=80",
  },
];
export default function CTABanner() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleDonateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const widget = document.getElementById("donation-widget");
    if (widget) {
      widget.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#donation-widget");
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* CTA SECTION */}
      <section className="relative mt-32 py-20 bg-gradient-to-r from-[var(--blue)] to-[#CFCCFF]">
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
                href="/volunteer"
                className="px-5 py-2 text-sm font-[700] bg-white text-[var(--blue)] rounded-md hover:bg-gray-100 transition"
              >
                Get Involved With Us
              </Link>

              <button
                onClick={handleDonateClick}
                className="px-5 py-2 text-sm font-medium text-white border border-white rounded-md hover:bg-white/10 transition"
              >
                Donate Now
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE - Positioned absolutely to not affect section height */}
          <div className="hidden lg:block absolute bottom-0 right-[5%] z-20 pointer-events-none">
            <img
              src="/cta-banner.png"
              alt="Volunteers"
              className="h-[500px] object-contain"
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
            <select className="flex-1 w-full px-4 py-2.5 border-2 border-black text-[15px] text-black focus:outline-none  focus:ring-[#1e3a5f] cursor-pointer text-center" style={{ textAlignLast: "center" }}>
              <option>Choose a Category</option>
              <option>Volunteer</option>
              <option>Internship</option>
              <option>Sponsor a Child</option>
            </select>

            <select className="flex-1 w-full px-4 py-2.5 border-2 border-black text-[15px] text-black focus:outline-none focus:ring-[#1e3a5f] cursor-pointer text-center" style={{ textAlignLast: "center" }}>
              <option>Program</option>
              <option>Women Empowerment</option>
              <option>Children Development</option>
              <option>Youth Empowerment</option>
              <option>Public Health & Medical</option>
              <option>Environment Conservation</option>
              <option>Disaster Risk Reduction</option>
            </select>

            <select className="flex-1 w-full px-4 py-2.5 border-2 border-black text-[15px] text-black focus:outline-none  focus:ring-[#1e3a5f] cursor-pointer text-center" style={{ textAlignLast: "center" }}>
              <option>Project</option>
              <option>Women's Trafficking Prevention</option>
              <option>Entrepreneurship Development</option>
              <option>Women's Education and Life Skills</option>
            </select>
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
                className="scrollbar-hide flex overflow-x-auto pb-4 snap-x snap-mandatory"
              >
                {projects.map((p, i) => (
                  <div key={i} className="flex-none w-full sm:w-1/2 lg:w-1/3 px-3 snap-start">
                    <div className="bg-white border border-gray-200 shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 h-full flex flex-col">
                      <div className="relative h-60 w-full flex-shrink-0">
                        <Image
                          src={p.img}
                          alt={p.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="p-6 text-left flex-1 flex flex-col">
                        <h3 className="font-[700] text-xl mb-3 text-gray-900">{p.title}</h3>

                        <p className="text-base text-gray-600 leading-relaxed">
                          {p.desc}
                        </p>
                      </div>
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

