"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Heart,
  Users,
  Shield,
  Leaf,
  Zap,
  Baby,
  Star,
  Download,
  MapPin,
  Quote,
} from "lucide-react";
import { useRef, useState, useCallback } from "react";
import DonationWidget from "./components/DonationWidget";
import CTABanner from "./components/CTABanner";
import GetInvolved from "./components/GetInvolved";
const testimonials = [
  {
    id: 1,
    name: "Shanti Tamang",
    role: "Farmer, Devisthan",
    text: "Namaste! My name is Shanti Tamang, I am a 34-year-old farmer from Devisthan, Tarkeshwar Municipality. Two years ago, I had the opportunity to participate in an English class offered by Volunteers Initiative Nepal (VIN) at the Women's Business Center (WBC) in Tiniple, Tarkeshwar. At first, I hesitated to join because I thought learning English would be useless for someone like me, a farmer and a housewife. I was also worried it would interfere with my daily household activities. However, thanks to the encouragement of the women in my community, I decided to give it a try. Little did I know this decision would change my life in ways I never imagined.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    signature: "Dagrur Manalo",
    signatureTitle: "Volunteer, VIN",
  },
];
const places = [
  {
    id: 1,
    name: "Place Name",
    description:
      "Lorem ipsum dipsum we are different locations Lorem ipsum dipsum we are different locations Lorem ipsum dipsum we are different locations Lorem ipsum dipsum we are different locations Lorem ipsum dipsum we are different locationsLorem ipsum dipsum we are different locationsLorem ipsum dipsum we are different locations",
    images: [
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
      "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80",
    ],
    exploreLink: "/nepal/place-name",
    videoDescription:
      "Lorem ipsum dipsum we are different locations Lorem ipsum dipsum we are different locations Lorem ipsum dipsum we are different locations Lorem ipsum dipsum we are different locationsLorem ipsum dipsum we are different locationsLorem ipsum dipsum we are different locations",
    videoThumbnail:
      "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&q=80",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    category: "culture",
    topic: "kathmandu",
  },
];
const mediaItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    title: "Community Cleanup",
    type: "photo",
    description:
      "A short description for the blog and make it short and loreum ipsum and something better  short and starting of the blog...A short description for the blog and make it short and loreum ipsum and something better  short and starting of the blog...A short description for the blog and make it short and loreum ipsum and something better  short and starting of the blog...A short description for the blog and make it short and loreum ipsum and something better  short and starting of the blog...A short description for the blog and make it short and loreum ipsum and something better  short and starting of the blog......",
    readMoreLink: "/programs/environment",
    downloadLink: "/downloads/photo-1.jpg",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
    title: "Children Education",
    type: "photo",
    description:
      "Providing quality education and learning opportunities to children in underserved communities.",
    readMoreLink: "/programs/child-development",
    downloadLink: "/downloads/photo-2.jpg",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80",
    title: "Volunteer Work",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    description:
      "Watch our dedicated volunteers in action, making a real difference in people's lives.",
    readMoreLink: "/volunteer",
    downloadLink: "/downloads/video-3.mp4",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&q=80",
    title: "Construction Project",
    type: "photo",
    description:
      "Building sustainable infrastructure to support community development and growth.",
    readMoreLink: "/programs/disaster-risk",
    downloadLink: "/downloads/photo-4.jpg",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400&q=80",
    title: "Health Camp",
    type: "photo",
    description:
      "Providing essential healthcare services and medical checkups to those in need.",
    readMoreLink: "/programs/public-health",
    downloadLink: "/downloads/photo-5.jpg",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
    title: "Women Empowerment",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    description:
      "Empowering women through education, skills training, and economic opportunities.",
    readMoreLink: "/programs/womens-empowerment",
    downloadLink: "/downloads/video-6.mp4",
  },
];

const team = [
  {
    name: "Bhupi Ghimire",
    role: "Founder & Director",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    name: "Sita Sharma",
    role: "Program Manager",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  },
  {
    name: "Ram Thapa",
    role: "Field Coordinator",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Anita Rai",
    role: "Community Officer",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [filter, setFilter] = useState("Board of Directors");

  const filteredTeam = team.filter((member) => {
    if (filter === "Board of Directors") {
      return member.role.includes("Director");
    } else if (filter === "Management Team") {
      return (
        member.role.includes("Manager") || member.role.includes("Coordinator")
      );
    } else if (filter === "Volunteers") {
      return member.role.includes("Volunteer");
    } else {
      return true;
    }
  });

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const data = [
    {
      title: "Women's Empowerment",
      desc: "A center to empowerment & prosperity of a community.",
      stats: "32,035",
      statsLabel: "women we've empowered",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    },
    {
      title: "Children's Development",
      desc: "A center to empowerment & prosperity of a community.",
      stats: "32,035",
      statsLabel: "children educated",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
    },
    {
      title: "Youth Empowerment",
      desc: "A center to empowerment & prosperity of a community.",
      stats: "33,835",
      statsLabel: "youth empowered",
      image:
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80",
    },
    {
      title: "Public Health & Medical Care",
      desc: "A center to empowerment & prosperity of a community.",
      stats: "32,035",
      statsLabel: "people served",
      image:
        "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400&q=80",
    },
    {
      title: "Environment & Conservation Projects",
      desc: "A center to empowerment & prosperity of a community.",
      stats: "32,035",
      statsLabel: "projects completed",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
    },
    {
      title: "Disaster Risk Reduction",
      desc: "A center to empowerment & prosperity of a community.",
      stats: "32,035",
      statsLabel: "projects completed",
      image:
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&q=80",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [currentPlace, setCurrentPlace] = useState(places[0]);

  const currentMedia = mediaItems[currentMediaIndex];

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex(
      (prev) => (prev - 1 + mediaItems.length) % mediaItems.length,
    );
  };

  const handleDownload = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [startIndex, setStartIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const itemsPerPage = 4;

  const visibleItems = mediaItems.slice(startIndex, startIndex + itemsPerPage);

  const nextSlide = useCallback(() => {
    setStartIndex((prev) =>
      prev + itemsPerPage >= mediaItems.length ? 0 : prev + 1,
    );
  }, []);

  const prevSlide = useCallback(() => {
    setStartIndex((prev) =>
      prev === 0 ? Math.max(0, mediaItems.length - itemsPerPage) : prev - 1,
    );
  }, []);

  const openVideo = (url: string) => {
    setActiveVideo(url);
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative w-full min-h-[500px] flex items-center overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1600"
          alt="Women Empowerment"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)",
          }}
        />

        {/* Left Arrow */}
        <button className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-10 h-10 md:w-14 md:h-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-10 h-10 md:w-14 md:h-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        <div className="relative z-10 w-full h-full pb-2.5 pt-24 min-h-[800px] flex flex-col">
          <div className=" mx-auto w-full h-full flex flex-col justify-end flex-grow relative">
            {/* Stats Grid */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
              <div className="bg-white p-3 rounded-xl shadow-2xl grid grid-cols-2 gap-3 w-[220px]">
                {["53%", "53%", "53%", "53%"].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[var(--blue)] text-white rounded-lg flex flex-col items-center justify-center p-3 aspect-square"
                  >
                    <p className="text-xl font-bold mb-1">{item}</p>
                    <p className="text-[10px] opacity-90 text-center leading-tight font-medium">
                      Rural Women’s
                      <br />
                      Literacy
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Content */}
            <div className="mt-auto mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight mb-4">
                Women’s Empowerment Program
              </h1>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-3xl font-medium">
                  We Equip Rural Women With Non-Formal Education, Life Skills,
                  Entrepreneurship Support, Microcredit Access, And Leadership
                  Training — Helping Them Rise, Earn, And Live With Confidence
                  And Dignity.
                </p>

                <button className="shrink-0 px-8 py-3 rounded text-sm font-semibold text-white bg-[var(--blue)] hover:bg-indigo-700 transition shadow-lg">
                  View Program
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-[#1a1a2e] leading-snug mb-6">
            A leader in implementing a complete holistic and integrated
            <br className="hidden md:block" />
            Approach to Community Development in Nepal
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10">
            At our core, we strive to foster holistic, inclusive and equitable
            development in Nepal. Together, we envision a future where every
            community thrives through collaboration and empowerment.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4">
            {/* Primary Button */}
            <Link href="/our-story">
              <button className="px-8 py-2.5 text-sm font-semibold rounded text-white bg-[var(--blue)] hover:bg-indigo-800 transition-all duration-300">
                Our Story
              </button>
            </Link>

            {/* Outline Button */}
            <Link href="/our-approach">
              <button className="px-8 py-2.5 text-sm font-semibold rounded border border-[var(--blue)] text-[var(--blue)] hover:bg-indigo-50 transition-all duration-300">
                Our Approach
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="w-full bg-[#ffffff] py-24">
        <div className=" mx-auto">
          {/* Heading */}
          <h2 className="text-xl md:text-5xl font-bold text-gray-900 leading-snug mb-12 text-center">
            Welcome to{" "}
            <span className="text-[var(--blue)]">Volunteers Initiative</span>
            <br />
            <span className="text-[var(--blue)]">Nepal</span> ( VIN )
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center">
              {/* Paragraph */}
              <p className="text-gray-700 text-base leading-relaxed mb-5 font-light text-justify">
                Volunteers Initiative Nepal (VIN), established in 2005 by a
                diverse group drawn from development workers, educationalists,
                social activists and other professionals, is a non-religious,
                non-political, non-profit, and non-governmental organization
                (NGO). VIN focuses on community-based projects involving local
                volunteers backed-up by international volunteers in Nepal.
              </p>

              <p className="text-gray-700 text-base leading-relaxed mb-5 font-light text-justify">
                Our mission is to empower marginalized communities through
                equitable, inclusive and holistic development programs.
              </p>

              <p className="text-gray-500 text-sm leading-relaxed mb-6 text-justify">
                There are four pillars in our developmental approach: Education,
                Health & Environment, Economy and Basic infrastructure
                development. These four pillars of development are supported by
                six major community empowerment programs namely Women’s
                Empowerment Program, Children’s Development Program, Youth
                Empowerment Program, Public Health & Medical Program,
                Environment Conservation Program and Disaster Risk Reduction
                Program. All VIN’s developmental and humanitarian programs are
                aligned with UN Sustainable Development Goals (SDGs).
              </p>

              {/* Button */}
              <div>
                <button className="px-8 py-3 text-base font-semibold rounded-lg text-white bg-[var(--blue)] hover:bg-[var(--blue)] transition-all duration-300 shadow-md hover:shadow-lg">
                  Learn More
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center items-center">
              <img
                src="/pillar.png"
                alt="VIN Pillars"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center py-10 bg-gray-100">
        <div className="relative w-full max-w-4xl h-96 overflow-hidden shadow-lg translate-x-4 md:translate-x-12">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80"
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 text-white text-center px-4">
            <p className="text-sm md:text-base mb-3">
              “VIN has helped a lot for disable women like us”
            </p>

            <div className="flex items-center space-x-2">
              {/* Play Button */}
              <button className="flex items-center justify-center w-8 h-8 bg-white text-black rounded-full hover:scale-105 transition"></button>
              <span className="text-sm font-medium">PLAY VIDEO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Programs grid */}
      <section className="bg-white py-24 mx-30">
        <div className=" mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            What We Do
          </h2>
          <p className="text-gray-600 mt-2 text-base font-medium">
            373,331 People Reached
          </p>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-4 mt-10 px-70px-7">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white  shadow-md overflow-hidden hover:shadow-lg transition-shadow text-center max-w-sm"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-center pb-4 text-white">
                    <p className="text-lg font-semibold">{item.stats}</p>
                    <p className="text-xs opacity-90">{item.statsLabel}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-base mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
        <div className=" mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-[600] text-gray-900 mb-3">
            Where We Work
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-base mt-6 max-w-2xl mx-auto leading-relaxed font-light">
            Lorem ipsum dipsum we are different locations Lorem ipsum dipsum we
            are different locations Lorem ipsum dipsum we are different
            locations Lorem ipsum dipsum we are different locations Lorem ipsum
            dipsum we are different locations Lorem ipsum dipsum we are
            different locations
          </p>

          {/* Dark Card */}
          <div className="mt-10 bg-gradient-to-r from-[#1c1f1d] to-[#1f2a24] rounded-md p-8 text-white relative overflow-hidden">
            {/* Top Row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/20 pb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-left">
                Location We Worked
              </h3>

              <div className="flex gap-8 mt-6 md:mt-0 text-center">
                <div className="border-l border-white/20 pl-6">
                  <p className="font-bold text-2xl">100,549</p>
                  <p className="text-sm text-white/80 mt-1 font-medium">
                    People Served
                  </p>
                </div>

                <div className="border-l border-white/20 pl-6">
                  <p className="font-bold text-2xl">500+</p>
                  <p className="text-sm text-white/80 mt-1 font-medium">
                    Projects
                  </p>
                </div>

                <div className="border-l border-white/20 pl-6">
                  <p className="font-bold text-2xl">3</p>
                  <p className="text-sm text-white/80 mt-1 font-medium">
                    Locations
                  </p>
                </div>
              </div>
            </div>

            {/* Map Area */}
            <div className="relative mt-8 flex items-center justify-center">
              {/* Map Image */}
              <img
                src="/map.png"
                alt="Map"
                className="opacity-60 max-h-[220px] object-contain"
              />

              {/* Pins */}
              <div className="absolute bottom-10 left-[55%] w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="absolute bottom-14 left-[60%] w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="absolute bottom-8 left-[65%] w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>

            {/* Button */}
            <div className="absolute left-8 bottom-8">
<Link href="/where-we-work">
  <button className="bg-white text-black text-sm px-6 py-2.5  font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
    Learn More
  </button>
</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#DFF0FF] py-24 px-4 md:px-12">
        <div className=" mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-[500] text-gray-900 mb-8">
            Learn More About Our Programs
          </h2>

          {/* Dropdown */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full max-w-[250px] mx-auto">
            <select className="flex-1 w-full px-4 py-2.5 border border-black text-[15px] text-black focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] cursor-pointer text-center" style={{ textAlignLast: "center" }}>
              <option >Choose a Program</option>
              <option>Women Empowerment</option>
              <option>Entrepreneurship</option>
              <option>Education</option>
            </select>
          </div>

          {/* Section Header */}
          <div className="text-left mb-5">
            <h3 className="text-3xl font-[700]">Women’s Empowerment Projects</h3>
            <p className="text-[16px] text-[#454545AD] mt-2 max-w-3xl">
              VIN aims to empower women socially and economically through
              education, life skills and income generation opportunities. By
              2030, VIN aims to benefit at least 80% of the total women in the
              marginalized communities of the target areas.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex justify-end gap-3 mb-8">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 flex items-center justify-center border-2 border-black rounded-full hover:bg-gray-100 hover:(--blue)* 5,8848 transition-all duration-300 font-bold text-lg"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 flex items-center justify-center border-2 border-black rounded-full hover:bg-gray-100 hover:border-indigo-500 transition-all duration-300 font-bold text-lg"
            >
              →
            </button>
          </div>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-7 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {/* Card 1 */}
            <div className="min-w-[280px] md:min-w-[190px] bg-white shadow-md overflow-hidden">
              <img
                src="/images/img1.jpg"
                alt="Trafficking Prevention"
                className="w-full h-56 object-cover"
              />
              <div className="p-5 text-left">
                <h4 className="font-[700] text-[22px] mb-2 text-center">
                  Women’s Trafficking
                  <br/> Prevention
                </h4>
                <p className="font-[400] text-[16px] text-gray-600">
                  The ED project aims to ensure economic independence of women
                  by building their skills and providing the necessary support.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="min-w-[280px] md:min-w-[190px] bg-white shadow-md overflow-hidden">
              <img
                src="/images/img2.jpg"
                alt="Entrepreneurship"
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-left">
                <h4 className="font-[700] text-[22px] mb-2 text-center">
                  Entrepreneurship 
                  <br/>
                  Development
                </h4>
                <p className="font-[400] text-[16px] text-gray-600">
                  The ED project aims to ensure economic independence of women
                  by building their skills and facilitating entrepreneurship.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="min-w-[280px] md:min-w-[190px] bg-white shadow-md overflow-hidden">
              <img
                src="/images/img3.jpg"
                alt="Education"
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-left">
                <h4 className="font-[700] text-[22px] mb-2 text-center">
                  Women’s Education and Life Skills
                </h4>
                <p className="font-[400] text-[16px] text-gray-600">
                  This project empowers women to become self-reliant and
                  resilient by providing relevant education and development.
                </p>
              </div>
            </div>
          </div>

          {/* View All */}
          <div className="mt-10">
            <button className="bg-[var(--blue)] text-white px-6 py-2 rounded-md hover:bg-[#1a1560]">
              View All
            </button>
          </div>
        </div>

        {/* Hide scrollbar */}
      </section>
      {/* Team Section */}

      <section className="py-20 bg-[#ffffff]">
        <div className=" mx-auto px-4">
          {/* Title */}
          <h2
            className="text-3xl md:text-4xl text-center font-[500] mb-6"
            
          >
            Our Team
          </h2>

          {/* Dropdown */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full max-w-[250px] mx-auto">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="flex-1 w-full px-4 py-2.5 border-1 border-black text-[15px] text-[#212121] focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] cursor-pointer text-center"
              style={{ textAlignLast: "center" }}
            >
              <option>Board of Directors</option>
              <option>Management Team</option>
              <option>Volunteers</option>
            </select>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
            {filteredTeam.map((m, i) => (
              <div key={i} className="bg-white  border-1 border-[#9FA0A3]shadow-sm h-[344px] w-[310px]">
                {/* Image */}
                <div className="w-full h-[230px] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="p-4 text-left">
                  <h4 className="text-[18px] font-[600]">{m.name}</h4>
                  <p className="text-[14px] text-[#221C84] mt-1">{m.role}</p>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </section>

      <DonationWidget/>

      <CTABanner />

      {/* CERTIFICATION  */}
      <section className="w-full bg-[#f3f3f3] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-7xl font-[500] md:text-[28px] font-medium text-[#1D1E20] mb-10">
            Certification, Membership & Affiliation
          </h2>

          {/* Logos Row */}
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 mb-10">
            <img
              src="/logos/eu.png"
              alt="European Commission"
              className="h-10 object-contain grayscale"
            />
            <img
              src="/logos/startup.png"
              alt="Startup India"
              className="h-12 object-contain grayscale"
            />
            <img
              src="/logos/association.png"
              alt="Association"
              className="h-12 object-contain grayscale"
            />
            <img
              src="/logos/forum.png"
              alt="Forum"
              className="h-10 object-contain grayscale"
            />
            <img
              src="/logos/ccivs.png"
              alt="CCIVS"
              className="h-10 object-contain grayscale"
            />
            <img
              src="/logos/nvda.png"
              alt="NVDA"
              className="h-10 object-contain grayscale"
            />
          </div>

          {/* Button */}
          <Link
            href="/certifications"
            className="bg-[#221C84] text-white text-[18px] font-[700] px-6 py-2 rounded-[5px] hover:opacity-90 transition inline-block"
          >
            View All
          </Link>
        </div>
      </section>
      {/* Affiliate program */}
      <section className="w-full bg-[#D5F5FF] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-[26px] md:text-[56px] font-bold text-gray-900 mb-4">
            Reviews About Us
          </h2>

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="text-[#FFB300] fill-[#FFB300]"
                />
              ))}
            </div>
            <span className="text-[42px] font-[600] text-[#283449]">
              4.4<span className="text-gray-800 text-[18px]">/5</span>
            </span>
            <span className="text-[#283449] text-[18px] ml-2">|</span>
            <span className="text-[#283449] text-[20px] font-[400]">200+ Review</span>
          </div>

          {/* Review Cards */}
          <div className="flex flex-wrap items-center justify-between">
            {/* Card 1 (highlighted) */}
            <div className="px-6 py-5 w-[220px] text-center">
              <div className="text-[41px] font-semibold text-gray-800">
                4.5<span className="text-[20px] text-gray-500">/5</span>
              </div>
              <div className="text-xs text-gray-500 font-semibold mt-1">
                 GREAT
              </div>
              <div className="text-[21px] text-gray-500 mt-1 font-quando">Great Non-profit</div>
            </div>

            {/* Card 2 */}
            <div className="text-center w-[220px]">
              <div className="text-[41px] font-semibold text-gray-800">
                4.2<span className="text-[20px] text-gray-500">/5</span>
              </div>
              <div className="text-sm font-medium text-gray-600 mt-1">
                Google
              </div>
              <div className="text-[21px] text-gray-500 font-quando">Google Reviews</div>
            </div>

            {/* Card 3 */}
            <div className="text-center w-[220px]">
              <div className="text-[41px] font-semibold text-gray-800">
                4.2<span className="text-[20px] text-gray-500">/5</span>
              </div>
              <div className="text-sm font-medium text-gray-600 mt-1">GO</div>
              <div className="text-[21px] text-gray-500 font-quando">go overseas</div>
            </div>

            {/* Card 4 */}
            <div className="text-center w-[220px]">
              <div className="text-[41px] font-semibold text-gray-800">
                4.2<span className="text-[20px] text-gray-500">/5</span>
              </div>
              <div className="text-sm font-medium text-gray-600 mt-1">
                review centre
              </div>
              <div className="text-[21px] text-gray-500 font-quando">Review Center</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className=" mx-auto px-4 relative">
          {/* Heading */}
          <h2
            className="text-[56px] font-[600] text-center mb-2 py-4 mb-15"
            
          >
            Testimonials
          </h2>
         

          {/* Carousel Container */}
          <div className="flex items-center justify-center gap-2">
            {/* Left Arrow */}
            <button
              onClick={prevTestimonial}
              className="shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white hover:opacity-90 transition-opacity"
              style={{ background: "var(--indigo-btn, #1e3a5f)" }}
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* Testimonial Card */}
            <div className="flex-1 max-w-10xl">
              <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                {/* Text Content */}
                <div className="flex-1 order-2 md:order-1">
                  <p className="text-gray-700 text-[10px]  font-[500] md:text-base leading-relaxed mb-6 text-justify">
                    {current.text}
                  </p>
                  <p
                    className="font-bold text-sm md:text-base text-gray-900"
                    
                  >
                    {current.signature}
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm mt-1">
                    {current.signatureTitle}
                  </p>
                </div>

                {/* Image */}
                <div className="w-full md:w-80 lg:w-96 shrink-0 order-1 md:order-2">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextTestimonial}
              className="shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white hover:opacity-90 transition-opacity"
              style={{ background: "var(--indigo-btn, #1e3a5f)" }}
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          {/* View All Button */}
          <div className="flex justify-end mt-8 md:mt-12  mx-auto px-4 md:pr-16">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[5px] font-[700] text-white text-base hover:opacity-90 transition-opacity"
              style={{ background: "var(--blue)" }}
            >
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>
      {/* Our Media */}
      <section className="py-20 bg-[#e8f0fe]">
        <div className=" mx-auto px-4">
          {/* Heading */}
          <h2
            className="text-4xl font-[500] text-center mb-8"
            
          >
            Our Media
          </h2>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 w-full max-w-lg mx-auto">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="flex-1 w-full px-4 py-2.5 border-2 border-black text-[15px] text-black focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] cursor-pointer text-center"
              style={{ textAlignLast: "center" }}
            >
              <option value="">Choose a category</option>
              <option value="news">News</option>
              <option value="press">Press Release</option>
              <option value="gallery">Gallery</option>
              <option value="video">Video</option>
            </select>

            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="flex-1 w-full px-4 py-2.5 border-2 border-black text-[13px] text-black focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] cursor-pointer text-center"
              style={{ textAlignLast: "center" }}
            >     
              <option value="">Topic</option>
              <option value="education">Education</option>
              <option value="health">Health</option>
              <option value="environment">Environment</option>
              <option value="community">Community</option>
            </select>
          </div>

          {/* View All Link */}
          <div className="flex justify-end mb-8 mx-8 md:mx-16">
            <Link
              href="/media"
              className="inline-flex items-center px-5 py-2  text-white text-base font-[700] hover:opacity-90 transition-opacity"
              style={{ background: "var(--blue)" }}
            >
              View All
            </Link>
          </div>

          {/* Carousel Container */}
          <div className="relative flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={prevMedia}
              className="absolute left-0 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white hover:opacity-90 transition-opacity -translate-x-2 md:-translate-x-6"
              style={{ background: "var(--blue)" }}
              aria-label="Previous media"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* Media Card */}
            <div className="flex-1  mx-8 md:mx-16">
              <div className=" rounded-lg overflow-hidden  border border-gray-200">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="w-full md:w-2/5 lg:w-1/3 shrink-0">
                    <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                      <img
                        src={currentMedia.image}
                        alt={currentMedia.title}
                        className="w-full h-[400px] object-cover grayscale"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8 lg:p-10">
                    <h3
                      className="text-lg md:text-xl font-bold text-gray-900 mb-4"
                      style={{ }}
                    >
                      {currentMedia.title}
                    </h3>

                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 line-clamp-6">
                      {currentMedia.description}
                    </p>

                    <div className="flex items-center gap-4">
                      <Link
                        href={currentMedia.readMoreLink}
                        className="inline-flex items-center px-5 py-2 rounded text-white text-xs md:text-sm font-medium hover:opacity-90 transition-opacity"
                        style={{ background: "var(--blue)" }}
                      >
                        Read More
                      </Link>

                      <button
                        onClick={() =>
                          handleDownload(currentMedia.downloadLink)
                        }
                        className="inline-flex items-center px-5 py-2 rounded border text-xs md:text-sm font-medium hover:bg-gray-50 transition-colors"
                        style={{
                          borderColor: "var(--blue)",
                          color: "var(--blue)",
                        }}
                      >
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextMedia}
              className="absolute right-0 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white hover:opacity-90 transition-opacity translate-x-2 md:translate-x-6"
              style={{ background: "var(--blue)" }}
              aria-label="Next media"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Photos & Videos */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          {/* Heading */}
          <h2
            className="text-[56px] font-[500] text-center mb-6"
            
          >
            Photos & Videos
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            VIN facilitates projects focused on the women and children of
            marginalized communities against this challenging backdrop. VIN
            believes that the empowerment of women and children will bring about
            positive change so desperately needed in Nepal.
          </p>

          {/* Carousel Container */}
          <div className="relative flex items-center">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 transition-colors -translate-x-2 md:-translate-x-5"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 md:w-5 md:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* Cards Grid */}
            <div className="flex-1 mx-2 md:mx-4 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {visibleItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="relative rounded-lg overflow-hidden shadow-sm group cursor-pointer"
                  >
                    {/* Number Badge */}
                    <div className="absolute top-3 left-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-gray-700 shadow-sm">
                      {String(startIndex + index + 1).padStart(2, "0")}
                    </div>

                    {/* Image/Video Container */}
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                      {/* Video Play Overlay */}
                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                          <button
                            onClick={() =>
                              item.videoUrl && openVideo(item.videoUrl)
                            }
                            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              className="w-5 h-5 md:w-6 md:h-6 text-gray-800 ml-0.5"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 transition-colors translate-x-2 md:translate-x-5"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 md:w-5 md:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={activeVideo}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </section>
      {/* Know Nepal */}
      <section className="py-20 bg-white">
        <div className=" mx-auto px-4">
          {/* Heading */}
          <h2
            className="text-[56px] font-bold text-center mb-2"
            style={{ }}
          >
            Know <span className="text-[#221C84]">Nepal</span>
          </h2>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full max-w-lg mx-auto">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="flex-1 w-full px-4 py-2.5 border-2 border-black text-[15px] text-black focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] cursor-pointer text-center"
              style={{ textAlignLast: "center" }}
            >
              <option value="">Choose a category</option>
              <option value="culture">Culture</option>
              <option value="heritage">Heritage</option>
              <option value="nature">Nature</option>
              <option value="adventure">Adventure</option>
            </select>

            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="flex-1 w-full px-4 py-2.5 border-2 border-black text-[15px] text-black focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] cursor-pointer text-center"
              style={{ textAlignLast: "center" }}
            >
              <option value="">Topic</option>
              <option value="kathmandu">Kathmandu</option>
              <option value="pokhara">Pokhara</option>
              <option value="lumbini">Lumbini</option>
              <option value="everest">Everest</option>
            </select>
          </div>

          {/* Place Info + Gallery */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
            {/* Left Content */}
            <div className="lg:w-1/3 flex flex-col justify-center">
              <h3
                className="text-[54px] font-[600] text-gray-900 mb-6"
               
              >
                {currentPlace.name}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                {currentPlace.description}
              </p>

              <Link
                href={currentPlace.exploreLink}
                className="inline-flex items-center px-6 py-2.5 rounded text-white text-sm font-medium hover:opacity-90 transition-opacity w-fit"
                style={{ background: "var(--blue)" }}
              >
                Explore More
              </Link>
            </div>

            {/* Right Gallery */}
            <div className="lg:w-2/3 grid grid-cols-2 gap-4">
              {/* Left Column of Gallery */}
              <div className="flex flex-col gap-4">
                <div className="relative  overflow-hidden aspect-[21/9]">
                  <img
                    src={currentPlace.images[0]}
                    alt={currentPlace.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative  overflow-hidden aspect-[4/3]">
                  <img
                    src={currentPlace.images[1]}
                    alt={currentPlace.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column of Gallery */}
              <div className="flex flex-col gap-4 pt-8 md:pt-12">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={currentPlace.images[2]}
                    alt={currentPlace.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden aspect-[21/9]">
                  <img
                    src={currentPlace.images[3] || currentPlace.images[0]}
                    alt={currentPlace.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Documentary Video Section */}
          <div className="bg-[#D5F5FF] rounded-lg p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Text Content */}
              <div className="md:w-1/2">
                <h4
                  className="text-[24px] md:text-xl font-bold text-gray-900 mb-4"
                  
                >
                  Documentary video on Nepal Infography
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {currentPlace.videoDescription}
                </p>
              </div>

              {/* Video Thumbnail */}
              <div className="md:w-1/2 relative rounded-lg overflow-hidden group cursor-pointer">
                <div className="relative aspect-video">
                  <img
                    src={currentPlace.videoThumbnail}
                    alt="Nepal Documentary"
                    className="w-full h-full object-cover"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <button
                      onClick={() => setActiveVideo(currentPlace.videoUrl)}
                      className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-red-600 text-white shadow-lg hover:scale-110 transition-transform"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 md:w-7 md:h-7 ml-1"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={activeVideo}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </section>
      {/*FAQ section*/}

      <section className="w-full bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="relative flex items-end pt-32">
            {/* FAQ Image - Overlapping at the top */}
            <div className="absolute left-4 md:left-12 bottom-0 z-10 w-[300px] md:w-[480px] h-[350px] md:h-[500px]">
              <img
                src="/faq.png"
                alt="FAQ Volunteers"
                className="w-full h-full object-contain object-bottom"
              />
            </div>

            {/* Dark Blue Card */}
            <div
              className="w-full flex flex-col md:flex-row items-center justify-between p-10 md:p-16 md:pl-[520px] rounded-[20px] shadow-2xl"
              style={{ background: "linear-gradient(to right, #1B1464, #08061E)" }}
            >
              <div className="text-center md:text-left mb-8 md:mb-0">
                <h2 className="text-white text-[36px] md:text-[40px] font-bold mb-4">
                  Any Question?
                </h2>
                <p className="text-gray-300 text-[14px] md:text-[14px] font-light">
                  Any queries check our FAQ page and get your answer.
                </p>
              </div>
              
              <Link
                href="/faq"
                className="bg-white text-[#1B1464] px-8 py-3 rounded-lg font-bold text-[20px] md:text-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
              >
                Visit FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

