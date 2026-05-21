"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

interface Project {
  title: string;
  desc: string;
  img: string;
  category: string;
  program: string;
  topic: string;
}

const projects: Project[] = [
  {
    title: "Women's Trafficking Prevention",
    desc: "The EID project aims to ensure economic independence of women by building their skills and providing the necessary support for facilitating women entrepreneurship.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    category: "Volunteer",
    program: "Women Empowerment",
    topic: "womens-empowerment",
  },
  {
    title: "Entrepreneurship Development",
    desc: "The EID project aims to ensure economic independence of women by building their skills and providing the necessary support for facilitating women entrepreneurship.",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
    category: "Internship",
    program: "Women Empowerment",
    topic: "womens-empowerment",
  },
  {
    title: "Women's Education and Life Skills",
    desc: "This project empowers women to become self-reliant and resilient by providing them access to relevant education and skills development.",
    img: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400&q=80",
    category: "Volunteer",
    program: "Women Empowerment",
    topic: "womens-empowerment",
  },
  {
    title: "Children's Health Program",
    desc: "Ensuring every child has access to basic healthcare and nutrition in the most remote areas of Nepal.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
    category: "Volunteer",
    program: "Public Health & Medical",
    topic: "public-health",
  },
  {
    title: "Organic Farming Initiative",
    desc: "Supporting local farmers to transition to sustainable organic methods for better yield and health.",
    img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&q=80",
    category: "Internship",
    program: "Environment Conservation",
    topic: "environment",
  },
  {
    title: "Youth Leadership Training",
    desc: "Empowering the next generation with the skills and confidence to lead their communities.",
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&q=80",
    category: "Volunteer",
    program: "Youth Empowerment",
    topic: "youth-empowerment",
  },
  {
    title: "Child Sponsorship Support",
    desc: "Direct support providing school tuition, uniforms, books, and daily nutritious meals to children in remote villages.",
    img: "https://images.unsplash.com/photo-1503919919749-646747424564?q=80&w=800",
    category: "Sponsor a Child",
    program: "Children Development",
    topic: "child-development",
  },
  {
    title: "Disabled Children Special Care",
    desc: "Providing assistive devices, therapy, and specialized educational materials for kids with disabilities in marginalized communities.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
    category: "Sponsor a Child",
    program: "Children Development",
    topic: "kids-disabilities",
  },
  {
    title: "Disaster Preparedness Training",
    desc: "Equipping schools and local community clubs with basic safety, first-aid, and search and rescue tools.",
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800",
    category: "Volunteer",
    program: "Disaster Risk Reduction",
    topic: "disaster-risk",
  },
  {
    title: "Eco-Friendly Toilets Construction",
    desc: "Constructing safe toilets, water systems, and promoting sustainable waste management structures in rural areas.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80",
    category: "Internship",
    program: "Environment Conservation",
    topic: "environment",
  },
  {
    title: "IT & Vocational Training for Youth",
    desc: "Teaching digital skills, hardware repair, and tailoring to rural youth to prepare them for local job opportunities.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    category: "Internship",
    program: "Youth Empowerment",
    topic: "youth-empowerment",
  },
  {
    title: "Mobile Health Camp Volunteering",
    desc: "Join our healthcare campaigns to deliver medical services, distribute medicine, and run basic sanitation drives.",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
    category: "Volunteer",
    program: "Public Health & Medical",
    topic: "public-health",
  }
];

export default function CTABanner() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Filter state variables
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProgram, setSelectedProgram] = useState("all");
  const [selectedProject, setSelectedProject] = useState("all");

  // Dynamic Options derived from projects dataset (Cross-filtering)
  const categoryOptions = Array.from(
    new Set(
      projects
        .filter((p) => {
          const progMatch = selectedProgram === "all" || p.program === selectedProgram;
          const projMatch = selectedProject === "all" || p.title === selectedProject;
          return progMatch && projMatch;
        })
        .map((p) => p.category)
    )
  ).sort();

  const programOptions = Array.from(
    new Set(
      projects
        .filter((p) => {
          const catMatch = selectedCategory === "all" || p.category === selectedCategory;
          const projMatch = selectedProject === "all" || p.title === selectedProject;
          return catMatch && projMatch;
        })
        .map((p) => p.program)
    )
  ).sort();

  const projectOptions = Array.from(
    new Set(
      projects
        .filter((p) => {
          const catMatch = selectedCategory === "all" || p.category === selectedCategory;
          const progMatch = selectedProgram === "all" || p.program === selectedProgram;
          return catMatch && progMatch;
        })
        .map((p) => p.title)
    )
  ).sort();

  // Automatically reset filters that become incompatible/unavailable
  useEffect(() => {
    if (selectedCategory !== "all" && !categoryOptions.includes(selectedCategory)) {
      setSelectedCategory("all");
    }
  }, [categoryOptions, selectedCategory]);

  useEffect(() => {
    if (selectedProgram !== "all" && !programOptions.includes(selectedProgram)) {
      setSelectedProgram("all");
    }
  }, [programOptions, selectedProgram]);

  useEffect(() => {
    if (selectedProject !== "all" && !projectOptions.includes(selectedProject)) {
      setSelectedProject("all");
    }
  }, [projectOptions, selectedProject]);

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

  // Filtered projects to be rendered as cards
  const filteredProjects = projects.filter((p) => {
    const catMatch = selectedCategory === "all" || p.category === selectedCategory;
    const progMatch = selectedProgram === "all" || p.program === selectedProgram;
    const projMatch = selectedProject === "all" || p.title === selectedProject;
    return catMatch && progMatch && projMatch;
  });

  const getCardHref = (p: Project) => {
    // 1. If we choose a project from the dropdown
    if (selectedProject !== "all") {
      return `/programs-projects?topic=${p.topic}`;
    }

    // 2. If we choose a program from the dropdown
    if (selectedProgram !== "all") {
      return `/programs/${p.topic}`;
    }

    // 3. If we choose "Volunteer" category
    if (selectedCategory === "Volunteer") {
      const volunteerIds = [
        "child-dev-internship",
        "kids-disabilities",
        "winter-camp",
        "child-rights",
        "summer-camp",
        "child-clubs",
        "child-protection",
        "ecd-education",
        "child-care",
        "child-internship-abroad"
      ];
      if (volunteerIds.includes(p.topic)) {
        return `/volunteer/volunteer-details?id=${p.topic}`;
      }
      return "/volunteer/volunteer-details";
    }

    // Fallback card click behavior (when no dropdown filter is active):
    // - If the card's category is "Volunteer", direct to volunteer-details
    if (p.category === "Volunteer") {
      const volunteerIds = [
        "child-dev-internship",
        "kids-disabilities",
        "winter-camp",
        "child-rights",
        "summer-camp",
        "child-clubs",
        "child-protection",
        "ecd-education",
        "child-care",
        "child-internship-abroad"
      ];
      if (volunteerIds.includes(p.topic)) {
        return `/volunteer/volunteer-details?id=${p.topic}`;
      }
      return "/volunteer/volunteer-details";
    }

    // - Otherwise, direct to the respective project details page
    return `/programs-projects?topic=${p.topic}`;
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 w-full max-w-5xl mx-auto">
            {/* Category Select */}
            <div className="relative w-full flex-1">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2.5 border-2 border-black text-[15px] text-black focus:outline-none cursor-pointer text-center appearance-none bg-white hover:bg-gray-50 transition font-medium"
                style={{ textAlignLast: "center" }}
              >
                <option value="all">Choose a Category</option>
                {categoryOptions.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-600">
                <ChevronDown size={16} />
              </div>
            </div>

            {/* Program Select */}
            <div className="relative w-full flex-1">
              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="w-full px-4 py-2.5 border-2 border-black text-[15px] text-black focus:outline-none cursor-pointer text-center appearance-none bg-white hover:bg-gray-50 transition font-medium"
                style={{ textAlignLast: "center" }}
              >
                <option value="all">Program</option>
                {programOptions.map((prog) => (
                  <option key={prog} value={prog}>
                    {prog}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-600">
                <ChevronDown size={16} />
              </div>
            </div>

            {/* Project/Topic Select */}
            <div className="relative w-full flex-1">
              <select
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                className="w-full px-4 py-2.5 border-2 border-black text-[15px] text-black focus:outline-none cursor-pointer text-center appearance-none bg-white hover:bg-gray-50 transition font-medium"
                style={{ textAlignLast: "center" }}
              >
                <option value="all">Project</option>
                {projectOptions.map((proj) => (
                  <option key={proj} value={proj}>
                    {proj}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-600">
                <ChevronDown size={16} />
              </div>
            </div>
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
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((p, i) => (
                    <Link
                      key={i}
                      href={getCardHref(p)}
                      className="flex-none w-full sm:w-1/2 lg:w-1/3 px-3 snap-start block group cursor-pointer"
                    >
                      <div className="bg-white border border-gray-200 shadow-md group-hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 h-full flex flex-col">
                        <div className="relative h-60 w-full flex-shrink-0 overflow-hidden">
                          <Image
                            src={p.img}
                            alt={p.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        <div className="p-6 text-left flex-1 flex flex-col">
                          <h3 className="font-[700] text-xl mb-3 text-gray-900 group-hover:text-[var(--blue)] transition-colors">
                            {p.title}
                          </h3>

                          <p className="text-base text-gray-600 leading-relaxed">
                            {p.desc}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="w-full py-16 px-4 flex flex-col items-center justify-center text-center bg-gray-50 border border-dashed border-gray-300 rounded-2xl mx-3">
                    <p className="text-xl font-semibold text-gray-600 mb-2">No matching projects found</p>
                    <p className="text-sm text-gray-400 max-w-md">We couldn't find any opportunities matching this combination of filters. Try exploring a different category or program.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
