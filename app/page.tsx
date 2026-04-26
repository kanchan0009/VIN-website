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
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&q=80",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
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
      "Our volunteers working together to clean up local communities and create a better environment for everyone.",
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
      title: "Women’s Empowerment Program",
      desc: "We Equip Rural Women With Non-Formal Education, Life Skills, Entrepreneurship Support, Microcredit Access, And Leadership Training — Helping Them Rise, Earn, And Live With Confidence And Dignity.",
    },
    {
      title: "Children’s Development Program",
      desc: "Focused on providing education, health, and protection to children in marginalized communities.",
    },
    {
      title: "Youth Empowerment Program",
      desc: "Empowering youth through education, skills training, and leadership development.",
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
      <section className="relative h-[85vh] min-h-96 flex items-center overflow-hidden">
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
              "linear-gradient(to right, rgba(10, 5, 40, 0.85) 35%, rgba(0,0,0,0.2) 100%)",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Women’s Empowerment Program
            </h1>

            <p className="text-white/75 text-base md:text-lg leading-relaxed mb-6">
              We Equip Rural Women With Non-Formal Education, Life Skills,
              Entrepreneurship Support, Microcredit Access, And Leadership
              Training — Helping Them Rise, Earn, And Live With Confidence And
              Dignity.
            </p>

            <button className="px-8 py-4 rounded-lg text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition">
              View Program
            </button>
          </div>

          {/* RIGHT FLOATING STATS CARD */}
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/20 grid grid-cols-2 gap-3">
              {["53%", "53%", "53%", "53%"].map((item, index) => (
                <div
                  key={index}
                  className="bg-indigo-700 text-white rounded-lg p-4 text-center"
                >
                  <p className="text-lg font-bold">{item}</p>
                  <p className="text-[10px] opacity-80 mt-1">
                    Dual Women’s Literacy
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* About / Intro Section */}
      <section className="w-full bg-[#f5f6f8] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
            A leader in implementing a complete holistic and integrated
            <br className="hidden md:block" />
            Approach to Community Development in Nepal
          </h2>

          {/* Subtext */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-light">
            At our core, we strive to foster holistic, inclusive and equitable
            development in Nepal. Together, we envision a future where every
            community thrives through collaboration and empowerment.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {/* Primary Button */}
            <Link href="/our-story">
              <button className="px-8 py-3 text-base font-semibold rounded-lg text-white bg-indigo-700 hover:bg-indigo-800 transition-all duration-300 shadow-md hover:shadow-lg">
                Our Story
              </button>
            </Link>

            {/* Outline Button */}
            <Link href="/our-approach">
              <button className="px-8 py-3 text-base font-semibold rounded-lg border-2 border-indigo-700 text-indigo-700 hover:bg-indigo-50 transition-all duration-300">
                Our Approach
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="w-full bg-[#f5f6f8] py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
              Welcome to{" "}
              <span className="text-indigo-700">
                Volunteers Initiative Nepal
              </span>{" "}
              ( VIN )
            </h2>

            {/* Paragraph */}
            <p className="text-gray-700 text-base leading-relaxed mb-5 font-light">
              Volunteers Initiative Nepal (VIN), established in 2005 by a
              diverse group drawn from development workers, educationalists,
              social activists and other professionals, is a non-religious,
              non-political, non-profit, and non-governmental organization
              (NGO). VIN focuses on community-based projects involving local
              volunteers backed-up by international volunteers in Nepal.
            </p>

            <p className="text-gray-700 text-base leading-relaxed mb-5 font-light">
              Our mission is to empower marginalized communities through
              equitable, inclusive and holistic development programs.
            </p>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              There are four pillars in our developmental approach: Education,
              Health & Environment, Economy and Basic infrastructure
              development. These four pillars of development are supported by
              six major community empowerment programs namely Women’s
              Empowerment Program, Children’s Development Program, Youth
              Empowerment Program, Public Health & Medical Program, Environment
              Conservation Program and Disaster Risk Reduction Program. All
              VIN’s developmental and humanitarian programs are aligned with UN
              Sustainable Development Goals (SDGs).
            </p>

            {/* Button */}
            <button className="px-8 py-3 text-base font-semibold rounded-lg text-white bg-indigo-700 hover:bg-indigo-800 transition-all duration-300 shadow-md hover:shadow-lg">
              Learn More
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80"
              alt="VIN Model"
              className="w-70 md:w-80 object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center py-10 bg-gray-100">
        <div className="relative w-full max-w-4xl h-96 rounded-xl overflow-hidden shadow-lg">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80"
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-white text-center px-4">
            <p className="text-sm md:text-base mb-3">
              “VIN has helped a lot for disable women like us”
            </p>

            {/* Play Button */}
            <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full hover:scale-105 transition">
              <span className="w-3 h-3 bg-black rounded-full inline-block"></span>
              <span className="text-sm font-medium">PLAY VIDEO</span>
            </button>
          </div>
        </div>
      </section>

      {/* Programs grid */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            What We Do
          </h2>
          <p className="text-gray-600 mt-2 text-base font-medium">
            373,331 People Reached
          </p>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={
                      index === 0
                        ? "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80"
                        : index === 1
                          ? "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80"
                          : "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80"
                    }
                    alt={item.title}
                    className="w-full h-52 object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-center pb-4 text-white">
                    <p className="text-lg font-semibold">
                      {index === 0
                        ? "32,035"
                        : index === 1
                          ? "15,200"
                          : "8,500"}
                    </p>
                    <p className="text-xs opacity-90">
                      {index === 0
                        ? "Women we've impacted"
                        : index === 1
                          ? "Children educated"
                          : "Youth empowered"}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 text-left">
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
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
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
                src="/map.png" // replace with your map shape image
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
              <button className="bg-white text-black text-sm px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-blue-100 to-indigo-100 py-24 px-4 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Learn More About Our Programs
          </h2>

          {/* Dropdown */}
          <div className="mb-12">
            <select className="border-2 border-gray-300 px-6 py-3 rounded-lg bg-white text-gray-700 font-medium hover:border-indigo-500 transition-all duration-300 cursor-pointer">
              <option>Choose a Program</option>
              <option>Women Empowerment</option>
              <option>Entrepreneurship</option>
              <option>Education</option>
            </select>
          </div>

          {/* Section Header */}
          <div className="text-left mb-6">
            <h3 className="text-xl font-bold">Women’s Empowerment Projects</h3>
            <p className="text-sm text-gray-600 mt-2 max-w-3xl">
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
              className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 rounded-full bg-white hover:bg-gray-100 hover:border-indigo-500 transition-all duration-300 font-bold text-lg"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 rounded-full bg-white hover:bg-gray-100 hover:border-indigo-500 transition-all duration-300 font-bold text-lg"
            >
              →
            </button>
          </div>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {/* Card 1 */}
            <div className="min-w-[280px] md:min-w-[320px] bg-white shadow-md">
              <img
                src="/images/img1.jpg"
                alt="Trafficking Prevention"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h4 className="font-semibold mb-2">
                  Women’s Trafficking Prevention
                </h4>
                <p className="text-sm text-gray-600">
                  The ED project aims to ensure economic independence of women
                  by building their skills and providing the necessary support.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="min-w-[280px] md:min-w-[320px] bg-white shadow-md">
              <img
                src="/images/img2.jpg"
                alt="Entrepreneurship"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h4 className="font-semibold mb-2">
                  Entrepreneurship Development
                </h4>
                <p className="text-sm text-gray-600">
                  The ED project aims to ensure economic independence of women
                  by building their skills and facilitating entrepreneurship.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="min-w-[280px] md:min-w-[320px] bg-white shadow-md">
              <img
                src="/images/img3.jpg"
                alt="Education"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h4 className="font-semibold mb-2">
                  Women’s Education and Life Skills
                </h4>
                <p className="text-sm text-gray-600">
                  This project empowers women to become self-reliant and
                  resilient by providing relevant education and development.
                </p>
              </div>
            </div>
          </div>

          {/* View All */}
          <div className="mt-10">
            <button className="bg-indigo-700 text-white px-6 py-2 rounded-md hover:bg-indigo-800">
              View All
            </button>
          </div>
        </div>

        {/* Hide scrollbar */}
      </section>
      {/* Team Section */}

      <section className="py-20 bg-[#e9e9e9]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <h2
            className="text-3xl md:text-4xl text-center font-semibold mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Team
          </h2>

          {/* Dropdown */}
          <div className="flex justify-center mb-12">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-400 px-6 py-2 bg-white text-sm rounded-sm"
            >
              <option>Board of Directors</option>
              <option>Management Team</option>
              <option>Volunteers</option>
            </select>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredTeam.map((m, i) => (
              <div key={i} className="bg-white shadow-sm">
                {/* Image */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="p-4 text-left">
                  <h4 className="text-sm font-semibold">{m.name}</h4>
                  <p className="text-xs text-indigo-700 mt-1">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      {/* CERTIFICATION  */}
      <section className="w-full bg-[#f3f3f3] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold  md:text-[28px] font-medium text-gray-800 mb-10">
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
            className="bg-[#2f2c7a] text-white text-sm px-6 py-2 rounded-md hover:opacity-90 transition inline-block"
          >
            View All
          </Link>
        </div>
      </section>
      {/* Affiliate program */}
      <section className="w-full bg-[#a9c7d3] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-[26px] md:text-[30px] font-semibold text-gray-900 mb-4">
            Reviews About Us
          </h2>

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="text-[18px] font-semibold text-gray-800">
              4.4<span className="text-gray-500 text-sm">/5</span>
            </span>
            <span className="text-gray-500 text-sm ml-2">|</span>
            <span className="text-gray-500 text-sm">200+ Review</span>
          </div>

          {/* Review Cards */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* Card 1 (highlighted) */}
            <div className="bg-white rounded-lg shadow-md px-6 py-5 w-[160px] text-center">
              <div className="text-[20px] font-semibold text-gray-800">
                4.5<span className="text-sm text-gray-500">/5</span>
              </div>
              <div className="text-xs text-yellow-500 font-semibold mt-1">
                ● GREAT
              </div>
              <div className="text-xs text-gray-500 mt-1">Great Non-profit</div>
            </div>

            {/* Card 2 */}
            <div className="text-center w-[140px]">
              <div className="text-[18px] font-semibold text-gray-800">
                4.2<span className="text-sm text-gray-500">/5</span>
              </div>
              <div className="text-sm font-medium text-gray-600 mt-1">
                Google
              </div>
              <div className="text-xs text-gray-500">Google Reviews</div>
            </div>

            {/* Card 3 */}
            <div className="text-center w-[140px]">
              <div className="text-[18px] font-semibold text-gray-800">
                4.2<span className="text-sm text-gray-500">/5</span>
              </div>
              <div className="text-sm font-medium text-gray-600 mt-1">GO</div>
              <div className="text-xs text-gray-500">go overseas</div>
            </div>

            {/* Card 4 */}
            <div className="text-center w-[140px]">
              <div className="text-[18px] font-semibold text-gray-800">
                4.2<span className="text-sm text-gray-500">/5</span>
              </div>
              <div className="text-sm font-medium text-gray-600 mt-1">
                review centre
              </div>
              <div className="text-xs text-gray-500">Review Center</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Heading */}
          <h2
            className="text-4xl font-bold text-center mb-2"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Testimonials
          </h2>
          <div className="w-48 h-0.5 bg-gray-900 mx-auto mb-12 rounded-full"></div>

          {/* Carousel Container */}
          <div className="flex items-center justify-center gap-4">
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
            <div className="flex-1 max-w-5xl">
              <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                {/* Text Content */}
                <div className="flex-1 order-2 md:order-1">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 text-justify">
                    {current.text}
                  </p>
                  <p
                    className="font-bold text-sm md:text-base text-gray-900"
                    style={{ fontFamily: "Playfair Display, serif" }}
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
          <div className="flex justify-end mt-8 md:mt-12 max-w-5xl mx-auto md:pr-8">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white text-sm hover:opacity-90 transition-opacity"
              style={{ background: "var(--indigo-btn, #1e3a5f)" }}
            >
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>
      {/* Our Media */}
      <section className="py-20 bg-[#e8f0fe]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2
            className="text-4xl font-bold text-center mb-8"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Media
          </h2>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-48 px-4 py-2.5 bg-white border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] cursor-pointer"
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
              className="w-full sm:w-48 px-4 py-2.5 bg-white border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] cursor-pointer"
            >
              <option value="">Topic</option>
              <option value="education">Education</option>
              <option value="health">Health</option>
              <option value="environment">Environment</option>
              <option value="community">Community</option>
            </select>
          </div>

          {/* View All Link */}
          <div className="flex justify-end mb-8 max-w-5xl mx-auto">
            <Link
              href="/media"
              className="inline-flex items-center px-5 py-2 rounded text-white text-sm font-medium hover:opacity-90 transition-opacity"
              style={{ background: "var(--indigo-btn, #1e3a5f)" }}
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
              style={{ background: "var(--indigo-btn, #1e3a5f)" }}
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
            <div className="flex-1 max-w-5xl mx-8 md:mx-16">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="w-full md:w-2/5 lg:w-1/3 shrink-0">
                    <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                      <img
                        src={currentMedia.image}
                        alt={currentMedia.title}
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8 lg:p-10">
                    <h3
                      className="text-lg md:text-xl font-bold text-gray-900 mb-4"
                      style={{ fontFamily: "Playfair Display, serif" }}
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
                        style={{ background: "var(--indigo-btn, #1e3a5f)" }}
                      >
                        Read More
                      </Link>

                      <button
                        onClick={() =>
                          handleDownload(currentMedia.downloadLink)
                        }
                        className="inline-flex items-center px-5 py-2 rounded border text-xs md:text-sm font-medium hover:bg-gray-50 transition-colors"
                        style={{
                          borderColor: "var(--indigo-btn, #1e3a5f)",
                          color: "var(--indigo-btn, #1e3a5f)",
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
              style={{ background: "var(--indigo-btn, #1e3a5f)" }}
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
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2
            className="text-4xl font-bold text-center mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
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
            <div className="flex-1 mx-6 md:mx-12 overflow-hidden">
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
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2
            className="text-4xl font-bold text-center mb-2"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Know <span className="text-[#1e3a5f]">Nepal</span>
          </h2>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-48 px-4 py-2.5 bg-white border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] cursor-pointer"
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
              className="w-full sm:w-48 px-4 py-2.5 bg-white border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] cursor-pointer"
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
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {currentPlace.name}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                {currentPlace.description}
              </p>

              <Link
                href={currentPlace.exploreLink}
                className="inline-flex items-center px-6 py-2.5 rounded text-white text-sm font-medium hover:opacity-90 transition-opacity w-fit"
                style={{ background: "var(--indigo-btn, #1e3a5f)" }}
              >
                Explore More
              </Link>
            </div>

            {/* Right Gallery */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* Large Image */}
                <div className="col-span-2 row-span-2 relative rounded-lg overflow-hidden">
                  <img
                    src={currentPlace.images[0]}
                    alt={currentPlace.name}
                    className="w-full h-full object-cover min-h-[300px] md:min-h-[400px]"
                  />
                </div>

                {/* Side Images */}
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={currentPlace.images[1]}
                    alt={currentPlace.name}
                    className="w-full h-full object-cover min-h-[145px] md:min-h-[195px]"
                  />
                </div>

                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={currentPlace.images[2]}
                    alt={currentPlace.name}
                    className="w-full h-full object-cover min-h-[145px] md:min-h-[195px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Documentary Video Section */}
          <div className="bg-[#e0f7ff] rounded-lg p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Text Content */}
              <div className="md:w-1/2">
                <h4
                  className="text-lg md:text-xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
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

      <section
        style={{ width: "100%", backgroundColor: "#ffffff", padding: "40px 0" }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            {/* Image - exact overlap positioning */}
            <div
              style={{
                position: "absolute",
                left: "-20px",
                bottom: "-40px",
                zIndex: 10,
                width: "400px",
                height: "450px",
              }}
            >
              <Image
                src="/images/volunteers.png"
                alt="Volunteers"
                fill
                style={{ objectFit: "contain", objectPosition: "bottom" }}
                priority
              />
            </div>

            {/* Dark Blue Card */}
            <div
              style={{
                marginLeft: "180px",
                width: "100%",
                backgroundColor: "#060b2e",
                borderRadius: "8px",
                minHeight: "160px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "30px 40px",
                paddingLeft: "220px",
              }}
            >
              {/* Text */}
              <div>
                <h2
                  style={{
                    color: "#ffffff",
                    fontSize: "28px",
                    fontWeight: 700,
                    marginBottom: "8px",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  Any Question?
                </h2>
                <p
                  style={{
                    color: "#9ca3af",
                    fontSize: "13px",
                    maxWidth: "260px",
                    lineHeight: "1.5",
                    margin: 0,
                  }}
                >
                  Any queries check out our FAQ page and get your answer.
                </p>
              </div>

              {/* Button */}
              <Link
                href="/faq"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#060b2e",
                  fontSize: "14px",
                  fontWeight: 600,
                  padding: "10px 24px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  marginLeft: "20px",
                }}
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
