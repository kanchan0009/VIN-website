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
  ChevronLeft,
  ChevronRight,
  Play,
  X,
  ChevronDown,
} from "lucide-react";
import { useRef, useState, useCallback, useEffect } from "react";
import DonationWidget from "./components/DonationWidget";
import CTABanner from "./components/CTABanner";
import { topicContent } from "./data/programData";
import {
  articles as allArticles,
  newsItems as allNewsItems,
  stories as allStories,
  caseStudies as allCaseStudies,
  openings as allOpenings,
  interviews as allInterviews,
  albums as allAlbums,
} from "./data/mediaData";

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
  {
    id: 2,
    name: "Ram Bahadur",
    role: "Community Leader",
    text: "Working with VIN has been a transformative experience for our village. The focus on holistic development, from education to infrastructure, has empowered us to take charge of our own future. We are grateful for the dedication and passion the volunteers bring to every project.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    signature: "Ram Bahadur",
    signatureTitle: "Community Leader",
  },
  {
    id: 3,
    name: "Anita Kumari",
    role: "Teacher",
    text: "As a teacher, I've seen firsthand the impact of VIN's educational programs. The children are more engaged, and the resources provided have greatly enhanced our learning environment. It's inspiring to see the community coming together for the sake of the next generation.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    signature: "Anita Kumari",
    signatureTitle: "Primary School Teacher",
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

const programData: Record<string, {
  title: string;
  desc: string;
  projects: Array<{
    title: string;
    img: string;
    desc: string;
    href: string;
  }>;
}> = {
  "Choose a Program": {
    title: "All Community Development Projects",
    desc: "VIN implements a complete holistic and integrated approach to community development in Nepal. Explore all our community-based projects across our pillars of empowerment.",
    projects: [
      {
        title: "Women’s Trafficking Prevention",
        img: "/images/img1.jpg",
        desc: "The ED project aims to ensure economic independence of women by building their skills and providing the necessary support.",
        href: "/programs-projects?topic=womens-empowerment",
      },
      {
        title: "Entrepreneurship Development",
        img: "/images/img2.jpg",
        desc: "The ED project aims to ensure economic independence of women by building their skills and facilitating entrepreneurship.",
        href: "/programs-projects?topic=womens-empowerment",
      },
      {
        title: "Women’s Education and Life Skills",
        img: "/images/img3.jpg",
        desc: "This project empowers women to become self-reliant and resilient by providing relevant education and development.",
        href: "/programs-projects?topic=womens-empowerment",
      },
      {
        title: "Youth Empowerment Projects",
        img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80",
        desc: "Engaging youth in community development and providing them with vocational training.",
        href: "/programs-projects?topic=youth-empowerment",
      },
      {
        title: "Public Health & Sanitation",
        img: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400&q=80",
        desc: "Improving health outcomes through sanitation projects and medical outreach.",
        href: "/programs-projects?topic=public-health",
      },
      {
        title: "Environment & Conservation",
        img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
        desc: "Promoting environmental sustainability and conservation through community action.",
        href: "/programs-projects?topic=environment",
      },
    ]
  },
  "Women Empowerment": {
    title: "Women’s Empowerment Projects",
    desc: "VIN aims to empower women socially and economically through education, life skills and income generation opportunities. By 2030, VIN aims to benefit at least 80% of the total women in the marginalized communities of the target areas.",
    projects: [
      {
        title: "Women’s Trafficking Prevention",
        img: "/images/img1.jpg",
        desc: "The ED project aims to ensure economic independence of women by building their skills and providing the necessary support.",
        href: "/programs-projects?topic=womens-empowerment",
      },
      {
        title: "Entrepreneurship Development",
        img: "/images/img2.jpg",
        desc: "The ED project aims to ensure economic independence of women by building their skills and facilitating entrepreneurship.",
        href: "/programs-projects?topic=womens-empowerment",
      },
      {
        title: "Women’s Education and Life Skills",
        img: "/images/img3.jpg",
        desc: "This project empowers women to become self-reliant and resilient by providing relevant education and development.",
        href: "/programs-projects?topic=womens-empowerment",
      },
    ]
  },
  "Youth Empowerment": {
    title: "Youth Empowerment Projects",
    desc: "VIN engages youth in community development, leadership training, and vocational skills to make them active agents of social change in Nepal.",
    projects: [
      {
        title: "Youth Leadership Projects",
        img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80",
        desc: "Engaging youth in community development and providing them with vocational training.",
        href: "/programs-projects?topic=youth-empowerment",
      },
      {
        title: "IT & Vocational Training",
        img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
        desc: "Equipping young people with essential digital and professional skills for today's market.",
        href: "/programs-projects?topic=youth-empowerment",
      },
      {
        title: "Youth Club Empowerment",
        img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
        desc: "Organizing and supporting youth clubs to participate in local environment and community works.",
        href: "/programs-projects?topic=youth-empowerment",
      }
    ]
  },
  "Public Health and Sanitation": {
    title: "Public Health & Sanitation Projects",
    desc: "Improving health and hygiene outcomes through medical outreach camps, sanitation construction projects, and preventive education.",
    projects: [
      {
        title: "Public Health & Sanitation",
        img: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400&q=80",
        desc: "Improving health outcomes through sanitation projects and medical outreach.",
        href: "/programs-projects?topic=public-health",
      },
      {
        title: "Mobile Health Camps",
        img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
        desc: "Conducting free health check-up camps and distributing essential medicines in remote areas.",
        href: "/programs-projects?topic=public-health",
      },
      {
        title: "Hygiene Education Campaign",
        img: "/images/img2.jpg",
        desc: "Raising awareness on essential handwashing, hygiene practices, and clean drinking water solutions in rural communities.",
        href: "/programs-projects?topic=public-health",
      },
    ]
  },
  "Education and Career Development": {
    title: "Education and Career Development Projects",
    desc: "VIN focuses on early childhood development, teaching support, and teacher training to ensure inclusive and quality education.",
    projects: [
      {
        title: "Early Childhood Development",
        img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
        desc: "Providing nursery and early education support for infants and children in rural villages.",
        href: "/programs-projects?topic=child-development",
      },
      {
        title: "Teacher Training Support",
        img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80",
        desc: "Training rural educators on modern and child-friendly teaching methodologies.",
        href: "/programs-projects?topic=child-development",
      },
      {
        title: "School Infrastructure Aid",
        img: "/images/img3.jpg",
        desc: "Assisting schools with child-friendly classroom setups, libraries, and educational materials.",
        href: "/programs-projects?topic=child-development",
      },
    ]
  },
  "Environment & Conservation Projects": {
    title: "Environment & Conservation Projects",
    desc: "Promoting environmental sustainability and conservation through tree planting, organic farming, and clean energy advocacy.",
    projects: [
      {
        title: "Environment & Conservation",
        img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
        desc: "Promoting environmental sustainability and conservation through community action.",
        href: "/programs-projects?topic=environment",
      },
      {
        title: "Agroforestry & Tree Plantation",
        img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&q=80",
        desc: "Restoring local ecosystems by planting fruit trees and promoting sustainable agro-forestry.",
        href: "/programs-projects?topic=environment",
      },
      {
        title: "Organic Farming Initiatives",
        img: "/images/img1.jpg",
        desc: "Supporting rural families to construct plastic tunnel greenhouses and practice organic composting.",
        href: "/programs-projects?topic=environment",
      },
    ]
  },
  "Disaster Risk Reduction": {
    title: "Disaster Risk Reduction Projects",
    desc: "Building resilient communities by preparing them to mitigate the impact of natural hazards and climate change.",
    projects: [
      {
        title: "Disaster Preparedness Training",
        img: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400&q=80",
        desc: "Equipping schools and local community clubs with basic safety, first-aid, and search and rescue tools.",
        href: "/programs-projects?topic=disaster-risk",
      },
      {
        title: "Resilient Reconstruction Support",
        img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&q=80",
        desc: "Assisting earthquake-affected families with safe and earthquake-resistant temporary shelter construction.",
        href: "/programs-projects?topic=disaster-risk",
      },
      {
        title: "Emergency Relief Operations",
        img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
        desc: "Distributing food, clothes, hygiene packages, and emergency tents post natural calamities.",
        href: "/programs-projects?topic=disaster-risk",
      },
    ]
  }
};

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
      href: "/programs/womens-empowerment",
      desc: "A center to empowerment & prosperity of a community.",
      stats: "32,035",
      statsLabel: "women we've empowered",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    },
    {
      title: "Children's Development",
      href: "/programs/child-development",
      desc: "A center to empowerment & prosperity of a community.",
      stats: "32,035",
      statsLabel: "children educated",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
    },
    {
      title: "Youth Empowerment",
      href: "/programs/youth-empowerment",
      desc: "A center to empowerment & prosperity of a community.",
      stats: "33,835",
      statsLabel: "youth empowered",
      image:
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80",
    },
    {
      title: "Public Health & Medical Care",
      href: "/programs/public-health",
      desc: "A center to empowerment & prosperity of a community.",
      stats: "32,035",
      statsLabel: "people served",
      image:
        "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400&q=80",
    },
    {
      title: "Environment & Conservation Projects",
      href: "/programs/environment",
      desc: "A center to empowerment & prosperity of a community.",
      stats: "32,035",
      statsLabel: "projects completed",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
    },
    {
      title: "Disaster Risk Reduction",
      href: "/programs/disaster-risk",
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
  const [expandedCareerId, setExpandedCareerId] = useState<number | null>(null);
  const [currentPlace, setCurrentPlace] = useState(places[0]);
  const [learnMoreIndex, setLearnMoreIndex] = useState(0);
  const [showAllPrograms, setShowAllPrograms] = useState(false);
  const [selectedProgramFilter, setSelectedProgramFilter] = useState("Choose a Program");
  const [heroIndex, setHeroIndex] = useState(0);

  const programToTopicMap: Record<string, string> = {
    "Women Empowerment": "womens-empowerment",
    "Youth Empowerment": "youth-empowerment",
    "Public Health and Sanitation": "public-health",
    "Education and Career Development": "child-development",
    "Environment & Conservation Projects": "environment",
    "Disaster Risk Reduction": "disaster-risk",
  };

  const activeTopic = selectedTopic || programToTopicMap[selectedProgramFilter] || "";

  const heroItems = [
    {
      title: "Women’s Empowerment Program",
      desc: "We Equip Rural Women With Non-Formal Education, Life Skills, Entrepreneurship Support, Microcredit Access, And Leadership Training — Helping Them Rise, Earn, And Live With Confidence And Dignity.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1600",
    },
    {
      title: "Children’s Development Program",
      desc: "Ensuring every child has access to quality education, health care, and a safe environment to grow and thrive in their community.",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600",
    },
    {
      title: "Youth Leadership Initiative",
      desc: "Empowering the next generation with skills and opportunities to become leaders and positive change-makers in their societies.",
      image:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1600",
    },
  ];
  const currentHero = heroItems[heroIndex];

  const currentMedia = mediaItems[currentMediaIndex];

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
    setIsMediaExpanded(false);
  };

  const prevMedia = () => {
    setCurrentMediaIndex(
      (prev) => (prev - 1 + mediaItems.length) % mediaItems.length,
    );
    setIsMediaExpanded(false);
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
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [isMediaExpanded, setIsMediaExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateCount = () => {
      setVisibleCount(
        window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1,
      );
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);
  const maxStartIndex = Math.max(0, mediaItems.length - visibleCount);

  const nextSlide = useCallback(() => {
    setStartIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
  }, [maxStartIndex]);

  const prevSlide = useCallback(() => {
    setStartIndex((prev) => (prev <= 0 ? maxStartIndex : prev - 1));
  }, [maxStartIndex]);

  const openVideo = (url: string) => {
    setActiveVideo(url);
  };

  const openImage = (url: string) => {
    setActiveImage(url);
  };

  // Filter media based on activeTopic
  const filteredArticles = allArticles.filter(item => !activeTopic || item.topic === activeTopic);
  const filteredNews = allNewsItems.filter(item => !activeTopic || item.topic === activeTopic);
  const filteredStories = allStories.filter(item => !activeTopic || item.topic === activeTopic);
  const filteredCaseStudies = allCaseStudies.filter(item => !activeTopic || item.topic === activeTopic);
  const filteredOpenings = allOpenings.filter(item => !activeTopic || item.topic === activeTopic);
  const filteredInterviews = allInterviews.filter(item => !activeTopic || item.topic === activeTopic);
  const filteredAlbums = allAlbums.filter(item => !activeTopic || item.topic === activeTopic);

  return (
    <main>
      {/* Hero */}
      <section className="relative w-full h-[82vh] min-h-[500px] max-h-[700px] flex items-center !px-0">
        {/* Background Images Cross-fade */}
        {heroItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === heroIndex ? "opacity-100 z-0" : "opacity-0 z-[-1]"
              }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)",
          }}
        />

        {/* Left Arrow */}
        <button
          onClick={() =>
            setHeroIndex(
              (prev) => (prev - 1 + heroItems.length) % heroItems.length,
            )
          }
          className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition"
        >
          <ChevronLeft className="w-10 h-10 md:w-14 md:h-14" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => setHeroIndex((prev) => (prev + 1) % heroItems.length)}
          className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition"
        >
          <ChevronRight className="w-10 h-10 md:w-14 md:h-14" />
        </button>

        <div className="relative z-10 w-full h-full pb-2.5 pt-10 md:pt-24 flex flex-col px-4 md:px-[60px]">
          <div className=" mx-auto w-full h-full flex flex-col justify-end flex-grow relative">
            {/* Stats Grid */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
              <div className="bg-white p-3 rounded-xl shadow-2xl grid grid-cols-2 gap-3 w-[220px]">
                {["53%", "53%", "53%", "53%"].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[var(--blue)] text-white rounded-lg flex flex-col items-center justify-center p-3 aspect-square"
                  >
                    <p className="text-[24px] font-[600] mb-1">{item}</p>
                    <p className="text-[10px]  font-[400]  text-center leading-tight">
                      Rural Women’s
                      <br />
                      Literacy
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Content */}
            <div className="mt-auto mb-4 md:mb-8">
              <h1 className="text-xl md:text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight mb-4 transition-all duration-500">
                {currentHero.title}
              </h1>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-3xl font-medium transition-all duration-500">
                  {currentHero.desc}
                </p>

                <Link href="/programs-details">
                  <button className="shrink-0 px-4 md:px-8 py-3 rounded text-sm font-semibold text-white bg-[var(--blue)] hover:bg-indigo-700 transition shadow-lg">
                    View Program
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-10 md:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-[#1a1a2e] leading-snug mb-6">
            A leader in implementing a complete holistic and integrated
            <br className="hidden md:block" />
            Approach to Community Development in Nepal
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-5 md:mb-10">
            At our core, we strive to foster holistic, inclusive and equitable
            development in Nepal. Together, we envision a future where every
            community thrives through collaboration and empowerment.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4">
            {/* Primary Button */}
            <Link href="/our-story">
              <button className="px-4 md:px-8 py-2.5 text-sm font-semibold rounded text-white bg-[var(--blue)] hover:bg-indigo-800 transition-all duration-300">
                Our Story
              </button>
            </Link>

            {/* Outline Button */}
            <Link href="/our-approach">
              <button className="px-4 md:px-8 py-2.5 text-sm font-semibold rounded border border-[var(--blue)] text-[var(--blue)] hover:bg-indigo-50 transition-all duration-300">
                Our Approach
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="w-full bg-[#ffffff] py-5 md:py-10 md:py-24">
        <div className="max-w-[1440px] mx-auto px-0 md:px-[60px]">
          {/* Heading */}
          <h2 className="text-xl md:text-5xl font-bold text-gray-900 leading-snug mb-6 md:mb-12 text-center">
            Welcome to{" "}
            <span className="text-[var(--blue)]">Volunteers Initiative</span>
            <br />
            <span className="text-[var(--blue)]">Nepal</span> ( VIN )
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-stretch">
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
                <Link href="/about">
                  <button className="px-4 md:px-8 py-3 text-base font-semibold rounded-lg text-white bg-[var(--blue)] hover:bg-[var(--blue)] transition-all duration-300 shadow-md hover:shadow-lg">
                    Learn More
                  </button>
                </Link>
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
      <section className="w-full flex justify-center py-5 md:py-10 bg-gray-100">
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
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 md:pb-8 text-white text-center px-4">
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
      <section className="bg-white py-5 md:py-10 md:py-24">
        <div className="max-w-[1440px] mx-auto px-0 md:px-[60px] text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            What We Do
          </h2>
          <p className="text-gray-600 mt-2 text-base font-medium">
            373,331 People Reached
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 md:mt-10">
            {data.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 text-center mx-auto w-full max-w-sm group block"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex flex-col justify-end items-center pb-6 text-white translate-y-1 group-hover:translate-y-0 transition-transform">
                    <p className="text-2xl font-bold">{item.stats}</p>
                    <p className="text-xs font-medium uppercase tracking-wider opacity-90">
                      {item.statsLabel}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-8">
                  <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-[var(--blue)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-5 md:py-10 md:py-24">
        <div className="max-w-[1440px] mx-auto px-0 md:px-[60px] text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl md:text-5xl font-[600] text-gray-900 mb-3">
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
          <div className="mt-5 md:mt-10 bg-gradient-to-r from-[#121412] to-[#171c19] rounded-md p-4 md:p-8 text-white relative overflow-hidden">
            {/* Top Row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-gradient-to-r from-[#121412] to-[#171c19] border-b border-white/20 pb-4 md:pb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-left">
                Location We Worked
              </h3>

              <div className="flex gap-4 md:gap-8 mt-6 md:mt-0 text-center">
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

            {/* Map Image */}
            <div className="-mx-4 md:-mx-8 relative overflow-hidden flex justify-center items-center h-[350px] md:h-[550px]">
              <img
                src="/map.jpg"
                alt="Map of locations"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* Pins Container (acts as a coordinate system locked to the image container) */}
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Nuwakot */}
                <div className="absolute top-[58%] left-[58%] transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer pointer-events-auto">
                  <svg width="24" height="32" viewBox="0 0 24 24" fill="#1c2b82" stroke="none" className="drop-shadow-lg hover:scale-110 transition-transform">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3" fill="#4f62c4"></circle>
                  </svg>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-xs font-bold px-2 py-1 rounded top-full left-1/2 -translate-x-1/2 mt-1 pointer-events-none whitespace-nowrap z-10 shadow-lg">
                    Nuwakot
                  </div>
                </div>

                {/* Kathmandu */}
                <div className="absolute top-[64%] left-[63%] transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer pointer-events-auto">
                  <svg width="24" height="32" viewBox="0 0 24 24" fill="#1c2b82" stroke="none" className="drop-shadow-lg hover:scale-110 transition-transform">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3" fill="#4f62c4"></circle>
                  </svg>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-xs font-bold px-2 py-1 rounded top-full left-1/2 -translate-x-1/2 mt-1 pointer-events-none whitespace-nowrap z-10 shadow-lg">
                    Kathmandu
                  </div>
                </div>

                {/* Okhaldhunga */}
                <div className="absolute top-[70%] left-[71%] transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer pointer-events-auto">
                  <svg width="24" height="32" viewBox="0 0 24 24" fill="#1c2b82" stroke="none" className="drop-shadow-lg hover:scale-110 transition-transform">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3" fill="#4f62c4"></circle>
                  </svg>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-xs font-bold px-2 py-1 rounded top-full left-1/2 -translate-x-1/2 mt-1 pointer-events-none whitespace-nowrap z-10 shadow-lg">
                    Okhaldhunga
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="mt-6 md:mt-10 flex justify-start">
              <Link href="/where-we-work">
                <button className="bg-white text-black text-sm px-6 py-2.5 rounded-[4px] font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#DFF0FF] py-10 md:py-24 px-4 md:px-12">
        <div className=" mx-auto text-center">
          {/* learn more section */}
          <h2 className="text-2xl md:text-4xl md:text-[50px] font-[500] text-gray-900 mb-4 md:mb-8">
            Learn More About Our Programs
          </h2>

          {/* Projects Data */}
          {(() => {
            const activeProgram = programData[selectedProgramFilter] || programData["Choose a Program"];
            const projectsList = activeProgram.projects;
            const maxIndex = Math.max(0, projectsList.length - 3);

            return (
              <>
                {/* Dropdown */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 md:mb-12 w-full max-w-[400px] mx-auto">
                  <div className="relative w-full">
                    <select
                      value={selectedProgramFilter}
                      onChange={(e) => {
                        setSelectedProgramFilter(e.target.value);
                        setLearnMoreIndex(0);
                      }}
                      className="flex-1 w-full px-3 py-2.5 border border-black text-[15px] text-black focus:outline-none cursor-pointer text-center appearance-none bg-white"
                      style={{ textAlignLast: "center" }}
                    >
                      <option>Choose a Program</option>
                      <option>Women Empowerment</option>
                      <option>Youth Empowerment</option>
                      <option>Public Health and Sanitation</option>
                      <option>Education and Career Development</option>
                      <option>Environment & Conservation Projects</option>
                      <option>Disaster Risk Reduction</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-600">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

                {/* Section Header */}
                <div className="text-left mb-5">
                  <h3 className="text-xl md:text-3xl font-[700]">
                    {activeProgram.title}
                  </h3>
                  <p className="text-[16px] text-[#454545AD] mt-2 max-w-3xl">
                    {activeProgram.desc}
                  </p>
                </div>

                {/* Slider Controls */}
                <div className="flex justify-end gap-3 mb-4 md:mb-8">
                  <button
                    onClick={() =>
                      setLearnMoreIndex((prev) => Math.max(0, prev - 1))
                    }
                    className="w-12 h-12 flex items-center justify-center border-2 border-black rounded-full hover:bg-gray-100 transition-all duration-300 font-bold text-lg"
                  >
                    ←
                  </button>
                  <button
                    onClick={() =>
                      setLearnMoreIndex((prev) =>
                        Math.min(maxIndex, prev + 1),
                      )
                    }
                    className="w-12 h-12 flex items-center justify-center border-2 border-black rounded-full hover:bg-gray-100 transition-all duration-300 font-bold text-lg"
                  >
                    →
                  </button>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                  {(showAllPrograms
                    ? projectsList
                    : projectsList.slice(learnMoreIndex, learnMoreIndex + 3)
                  ).map((p, i) => (
                    <Link
                      href={p.href}
                      key={i}
                      className="bg-white shadow-md overflow-hidden group block hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={p.img}
                          alt={p.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-5 text-left">
                        <h4 className="font-[700] text-[22px] mb-2 text-center group-hover:text-[var(--blue)] transition-colors">
                          {p.title}
                        </h4>
                        <p className="font-[400] text-[16px] text-gray-600">
                          {p.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* View All */}
                <div className="mt-5 md:mt-10">
                  <button
                    onClick={() => setShowAllPrograms(!showAllPrograms)}
                    className="bg-[var(--blue)] text-white px-6 py-2 rounded-md hover:bg-[#1a1560] transition-colors"
                  >
                    {showAllPrograms ? "Show Less" : "View All"}
                  </button>
                </div>
              </>
            );
          })()}
        </div>

        {/* Hide scrollbar */}
      </section>
      {/* Team Section */}

      <section className="py-10 md:py-20 bg-[#ffffff]">
        <div className=" mx-auto px-4">
          {/* Title */}
          <h2 className="text-xl md:text-3xl md:text-4xl text-center font-[500] mb-6">
            Our Team
          </h2>

          {/* Dropdown */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 md:mb-12 w-full max-w-[350px] mx-auto">
            <div className="relative w-full">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full px-4 py-2.5 border border-black text-[15px] text-[#212121] focus:outline-none cursor-pointer text-center appearance-none bg-white"
                style={{ textAlignLast: "center" }}
              >
                <option>Board of Directors</option>
                <option>Management Team</option>
                <option>Volunteers</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-600">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
            {filteredTeam.map((m, i) => (
              <div
                key={i}
                className="bg-white  border-1 border-[#9FA0A3]shadow-sm h-[344px] w-[310px]"
              >
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

      <DonationWidget />

      <CTABanner />

      {/* CERTIFICATION  */}
      <section className="w-full bg-[#f3f3f3] py-8 md:py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-5xl md:text-7xl font-[500] md:text-[50px] font-medium text-[#1D1E20] mb-5 md:mb-10">
            Certification, Membership & Affiliation
          </h2>

          <div className="flex flex-wrap items-center justify-between gap-6 md:gap-8 mb-5 md:mb-10 w-full">
            <img
              src="/logoc.png"
              alt="European Commission"
              className="h-20 object-contain grayscale"
            />
            <img
              src="/logoc.png"
              alt="Startup India"
              className="h-20 object-contain grayscale"
            />
            <img
              src="/logoc.png"
              alt="Association"
              className="h-20 object-contain grayscale"
            />
            <img
              src="/logoc.png"
              alt="Forum"
              className="h-20 object-contain grayscale"
            />
            <img
              src="/logoc.png"
              alt="CCIVS"
              className="h-20 object-contain grayscale"
            />
            <img
              src="/logoc.png"
              alt="NVDA"
              className="h-20 object-contain grayscale"
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
      <section className="w-full bg-[#D5F5FF] py-8 md:py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-[26px] md:text-[56px] font-bold text-gray-900 mb-4">
            Reviews About Us
          </h2>

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-2 mb-5 md:mb-10">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="text-[#FFB300] fill-[#FFB300]"
                />
              ))}
            </div>
            <span className="text-2xl md:text-[42px] font-[600] text-[#283449]">
              4.4<span className="text-gray-800 text-[18px]">/5</span>
            </span>
            <span className="text-[#283449] text-[18px] ml-2">|</span>
            <span className="text-[#283449] text-[20px] font-[400]">
              200+ Review
            </span>
          </div>

          {/* Review Cards */}
          <div className="flex flex-wrap items-center justify-between">
            {/* Card 1 (highlighted) */}
            <div className="px-6 py-5 w-[220px] text-center cursor-pointer transition-all duration-300 rounded-[10px] hover:bg-white hover:shadow-md">
              <div className="text-2xl md:text-[41px] font-semibold text-gray-800">
                4.5<span className="text-[20px] text-gray-500">/5</span>
              </div>
              <div className="text-xs text-gray-500 font-semibold mt-1">
                GREAT
              </div>
              <div className="text-[21px] text-gray-500 mt-1 font-quando">
                Great Non-profit
              </div>
            </div>

            {/* Card 2 */}
            <div className="px-6 py-5 w-[220px] text-center cursor-pointer transition-all duration-300 rounded-[10px] hover:bg-white hover:shadow-md">
              <div className="text-2xl md:text-[41px] font-semibold text-gray-800">
                4.2<span className="text-[20px] text-gray-500">/5</span>
              </div>
              <div className="text-sm font-medium text-gray-600 mt-1">
                Google
              </div>
              <div className="text-[21px] text-gray-500 font-quando">
                Google Reviews
              </div>
            </div>

            {/* Card 3 */}
            <div className="px-6 py-5 w-[220px] text-center cursor-pointer transition-all duration-300 rounded-[10px] hover:bg-white hover:shadow-md">
              <div className="text-2xl md:text-[41px] font-semibold text-gray-800">
                4.2<span className="text-[20px] text-gray-500">/5</span>
              </div>
              <div className="text-sm font-medium text-gray-600 mt-1">GO</div>
              <div className="text-[21px] text-gray-500 font-quando">
                go overseas
              </div>
            </div>

            {/* Card 4 */}
            <div className="px-6 py-5 w-[220px] text-center cursor-pointer transition-all duration-300 rounded-[10px] hover:bg-white hover:shadow-md">
              <div className="text-2xl md:text-[41px] font-semibold text-gray-800">
                4.2<span className="text-[20px] text-gray-500">/5</span>
              </div>
              <div className="text-sm font-medium text-gray-600 mt-1">
                review centre
              </div>
              <div className="text-[21px] text-gray-500 font-quando">
                Review Center
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 md:py-20 bg-white">
        <div className=" mx-auto px-4 relative">
          {/* Heading */}
          <h2 className="text-2xl md:text-[56px] font-[600] text-center mb-2 py-4 mb-15">
            Testimonials
          </h2>

          {/* Carousel Container */}
          <div className="flex items-center justify-center gap-2">
            {/* Left Arrow */}
            <button
              onClick={prevTestimonial}
              className="shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white hover:opacity-90 transition-opacity"
              style={{ background: "var(--blue)" }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Testimonial Card */}
            <div className="flex-1 max-w-10xl">
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 md:gap-12">
                {/* Text Content */}
                <div className="flex-1 order-2 md:order-1">
                  <p className="text-gray-700 text-[10px]  font-[500] md:text-base leading-relaxed mb-6 text-justify">
                    {current.text}
                  </p>
                  <p className="font-bold text-sm md:text-base text-gray-900">
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
              style={{ background: "var(--blue)" }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* View All Button */}
          <div className="flex justify-end mt-4 md:mt-8 md:mt-12  mx-auto px-4 md:pr-16">
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
      <section className="py-10 md:py-20 bg-[#e8f0fe]">
        <div className=" mx-auto px-4">
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-[500] text-center mb-4 md:mb-8">Our Media</h2>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 w-full max-w-2xl mx-auto">
            <div className="relative w-full flex-1">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2.5 border-2 border-black text-[15px] text-black focus:outline-none cursor-pointer text-center appearance-none bg-white"
                style={{ textAlignLast: "center" }}
              >
                <option value="">Choose a category</option>
                <option value="gallery">Gallery</option>
                <option value="articles">Articles</option>
                <option value="news">News Update</option>
                <option value="careers">Careers</option>
                <option value="success-stories">Success Stories</option>
                <option value="case-studies">Case Studies</option>
                <option value="interviews">Interviews</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-600">
                <ChevronDown size={16} />
              </div>
            </div>

            <div className="relative w-full flex-1">
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full px-4 py-2.5 border-2 border-black text-[15px] text-black focus:outline-none cursor-pointer text-center appearance-none bg-white"
                style={{ textAlignLast: "center" }}
              >
                <option value="">Topic</option>
                <option value="womens-empowerment">Women's Empowerment</option>
                <option value="child-development">
                  Children's Development
                </option>
                <option value="youth-empowerment">Youth Empowerment</option>
                <option value="public-health">
                  Public Health & Medical Care
                </option>
                <option value="environment">
                  Environment & Conservation Projects
                </option>
                <option value="disaster-risk">Disaster Risk Reduction</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-600">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>

          {/* View All Link */}
          <div className="flex justify-end mb-4 md:mb-8 mx-4 md:mx-8 md:mx-16">
            <Link
              href={(() => {
                let path = "/media";
                if (selectedCategory === "gallery") path = "/gallery";
                else if (selectedCategory) path = `/media/${selectedCategory}`;
                if (selectedTopic) path += `?topic=${selectedTopic}`;
                return path;
              })()}
              className="inline-flex items-center px-5 py-2  text-white text-base font-[700] hover:opacity-90 transition-opacity"
              style={{ background: "var(--blue)" }}
            >
              View All
            </Link>
          </div>

          {/* Dynamic Content Container */}
          <div className="mt-4 md:mt-8">
            {(() => {
              const hasContent =
                (selectedCategory === "gallery" && filteredAlbums.length > 0) ||
                (selectedCategory === "articles" && filteredArticles.length > 0) ||
                (selectedCategory === "news" && filteredNews.length > 0) ||
                (selectedCategory === "careers" && filteredOpenings.length > 0) ||
                (selectedCategory === "success-stories" && filteredStories.length > 0) ||
                (selectedCategory === "case-studies" && filteredCaseStudies.length > 0) ||
                (selectedCategory === "interviews" && filteredInterviews.length > 0) ||
                (selectedCategory === "" && (filteredArticles.length > 0 || filteredNews.length > 0 || filteredStories.length > 0 || filteredInterviews.length > 0));

              if (!hasContent) {
                return (
                  <div className="text-center py-8 md:py-16 bg-white rounded-lg shadow-sm border border-gray-100 mx-4 md:mx-8 md:mx-16">
                    <p className="text-gray-500 text-lg">No media files found matching the selected filters. Please choose another topic or category.</p>
                  </div>
                );
              }

              if (selectedCategory === "gallery") {
                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mx-4 md:mx-8 md:mx-16">
                    {filteredAlbums.map((album, idx) => {
                      const projectTitle = topicContent[album.slug]?.focusedProjects?.[0]?.title || album.title;
                      const projectParam = encodeURIComponent(projectTitle);
                      const albumParam = encodeURIComponent(album.title);
                      return (
                        <div
                          key={idx}
                          className="relative rounded-[10px] overflow-hidden group w-full aspect-square shadow-md hover:shadow-lg transition-shadow"
                        >
                          <img
                            src={album.img}
                            alt={album.title}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />
                          <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 md:pb-8 text-center px-6">
                            <h4 className="text-white text-lg font-semibold mb-4 leading-tight">
                              {album.title}
                            </h4>
                            <Link
                              href={`/gallery-details?topic=${album.slug}&project=${projectParam}&album=${albumParam}`}
                            >
                              <button className="bg-[var(--blue)] text-white px-4 md:px-8 py-3 rounded-xl font-bold text-xs hover:bg-white hover:text-[var(--blue)] transition-all shadow-lg active:scale-95">
                                Explore Album
                              </button>
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              }

              if (selectedCategory === "articles") {
                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mx-4 md:mx-8 md:mx-16">
                    {filteredArticles.map((article) => (
                      <Link href="/article-blogs" key={article.id} className="block group">
                        <article className="h-full bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col hover:shadow-xl transition-all duration-500">
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                          <div className="p-5 flex flex-col flex-1">
                            <span className={`text-[9px] uppercase font-[700] tracking-wider mb-2 ${article.categoryColor || 'text-[var(--blue)]'}`}>
                              {article.category}
                            </span>
                            <h3 className="text-base font-[700] text-[#1D1E20] mb-2 leading-snug group-hover:text-[var(--blue)] transition-colors">
                              {article.title}
                            </h3>
                            <p className="text-gray-500 text-[11px] leading-relaxed mb-4 line-clamp-2">
                              {article.excerpt}
                            </p>
                            <div className="mt-auto flex items-center justify-between text-[10px] text-gray-400 font-[500] pt-3 border-t border-gray-200">
                              <span>{article.date}</span>
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                );
              }

              if (selectedCategory === "news") {
                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mx-4 md:mx-8 md:mx-16">
                    {filteredNews.map((news) => (
                      <div key={news.id} className="group flex flex-col border border-gray-200 shadow-sm hover:shadow-md rounded-lg overflow-hidden h-full transition-shadow bg-white">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <h3 className="text-[20px] font-[600] text-[#212121] mb-2 group-hover:text-[var(--blue)] transition-colors">
                            {news.title}
                          </h3>
                          <p className="text-[#4b5563] text-[16px] leading-relaxed mb-4 line-clamp-3 text-left">
                            {news.summary}
                          </p>
                          <Link
                            href={`/media/news/${news.id}`}
                            className="text-[var(--blue)] font-[600] flex items-center gap-2 hover:gap-3 transition-all mt-auto"
                          >
                            Read Full News <span className="text-xl">→</span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }

              if (selectedCategory === "careers") {
                return (
                  <div className="space-y-4 w-full max-w-4xl mx-auto px-4 md:px-8">
                    {filteredOpenings.map((job) => (
                      <div key={job.id} className="border border-gray-200 overflow-hidden transition-all duration-300 rounded bg-white">
                        {/* Accordion Header */}
                        <button
                          onClick={() => setExpandedCareerId(expandedCareerId === job.id ? null : job.id)}
                          className={`w-full flex items-center justify-between px-4 md:px-8 py-3.5 transition-all duration-300 ${expandedCareerId === job.id
                            ? "bg-[var(--blue)] text-white"
                            : "bg-white text-[#1D1E20] hover:bg-gray-50"
                            }`}
                        >
                          <span className="text-lg lg:text-xl font-[600] text-left">{job.title}</span>
                          <div className={`transition-transform duration-300 ${expandedCareerId === job.id ? "rotate-180" : ""}`}>
                            <ChevronDown size={24} />
                          </div>
                        </button>

                        {/* Accordion Content */}
                        <div
                          className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedCareerId === job.id ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                        >
                          <div className="p-4 md:p-8 lg:p-12 bg-white space-y-8">
                            {/* Info Table */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 max-w-2xl text-left">
                              {[
                                { label: "No. of Vacancy", value: job.vacancy },
                                { label: "Employment Type", value: job.type },
                                { label: "Job Location", value: job.location },
                                { label: "Offered Salary", value: job.salary },
                                { label: "Apply Before (Deadline)", value: job.deadline },
                              ].map((info, idx) => (
                                <div key={idx} className="flex gap-4 text-[15px]">
                                  <span className="w-48 font-[600] text-[#4A4A4A]">{info.label}</span>
                                  <span className="font-[600] text-[#4A4A4A] flex items-center">
                                    <span className="mr-4">:</span>
                                    {info.value}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Job Details Lists */}
                            <div className="space-y-10 text-left">
                              {/* Job Description */}
                              <div className="space-y-2">
                                <h4 className="text-[18px] font-[700] text-[var(--blue)]">Job Description</h4>
                                <ul className="space-y-2 pl-2">
                                  {job.description.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-[15px] text-[#4A4A4A] font-[500]">
                                      <span className="mt-2 w-1.5 h-1.5 bg-[#4A4A4A] rounded-full shrink-0"></span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Job Requirement */}
                              <div className="space-y-2">
                                <h4 className="text-[18px] font-[700] text-[var(--blue)]">Job Requirement</h4>
                                <ul className="space-y-2 pl-2">
                                  {job.requirements.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-[15px] text-[#4A4A4A] font-[500]">
                                      <span className="mt-2 w-1.5 h-1.5 bg-[#4A4A4A] rounded-full shrink-0"></span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Qualifications & Skills */}
                              <div className="space-y-2">
                                <h4 className="text-[18px] font-[700] text-[var(--blue)]">Qualifications & Skills</h4>
                                <ul className="space-y-2 pl-2">
                                  {job.skills.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-[15px] text-[#4A4A4A] font-[500]">
                                      <span className="mt-2 w-1.5 h-1.5 bg-[#4A4A4A] rounded-full shrink-0"></span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }

              if (selectedCategory === "success-stories") {
                return (
                  <div className="space-y-6 w-full max-w-5xl mx-auto px-4 md:px-8">
                    {filteredStories.map((story, i) => (
                      <div
                        key={story.id}
                        className={`p-4 md:p-8 md:p-10 border border-gray-300 rounded-[5px] flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-16 items-center bg-white ${i % 2 !== 0 ? "md:flex-row-reverse" : ""
                          }`}
                      >
                        {/* Text Content */}
                        <div className="flex-1 space-y-4 text-left">
                          <p className="text-[15px] text-[#4A4A4A] leading-[1.8] font-[400]">
                            {story.text}
                          </p>
                          <div>
                            <h4 className="text-[16px] font-[700] text-[#1D1E20]">{story.name}</h4>
                            <p className="text-[13px] text-[#9EA1A6] font-[600]">{story.location}</p>
                          </div>
                        </div>

                        {/* Image */}
                        <div className="w-full md:w-[300px] lg:w-[320px] shrink-0">
                          <div className="aspect-square overflow-hidden rounded-[5px] shadow-sm">
                            <img
                              src={story.image}
                              alt={story.name}
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }

              if (selectedCategory === "case-studies") {
                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mx-4 md:mx-8 md:mx-16">
                    {filteredCaseStudies.map((study) => (
                      <div key={study.id} className="group flex flex-col border border-gray-200 shadow-sm hover:shadow-md rounded-lg overflow-hidden h-full transition-shadow bg-white">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={study.image}
                            alt={study.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <h3 className="text-[24px] font-[600] text-[#212121] mb-2 group-hover:text-[var(--blue)] transition-colors">
                            {study.title}
                          </h3>
                          <p className="text-[#4b5563] text-[16px] leading-relaxed mb-4 line-clamp-3 font-light text-left">
                            {study.summary}
                          </p>
                          <Link
                            href={`/media/case-studies/${study.id}`}
                            className="text-[var(--blue)] font-[600] flex items-center gap-2 hover:gap-3 transition-all mt-auto"
                          >
                            Read Case Study <span className="text-xl">→</span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }

              if (selectedCategory === "interviews") {
                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mx-4 md:mx-8 md:mx-16">
                    {filteredInterviews.map((item, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer shadow-sm bg-white"
                        onClick={() => openVideo(item.videoUrl)}
                      >
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

                        {/* Play Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 drop-shadow-xl">
                            <Play size={24} fill="currentColor" className="text-gray-900 ml-1" />
                          </div>
                        </div>

                        {/* Title display */}
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                          <h4 className="text-white text-sm font-semibold truncate text-left">{item.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }

              // Fallback to Mixed Feed
              const mixedFeed: Array<
                | { type: "article"; data: typeof allArticles[0] }
                | { type: "news"; data: typeof allNewsItems[0] }
                | { type: "story"; data: typeof allStories[0] }
                | { type: "video"; data: typeof allInterviews[0] }
              > = [];

              filteredArticles.slice(0, 2).forEach(item => mixedFeed.push({ type: "article", data: item }));
              filteredNews.slice(0, 2).forEach(item => mixedFeed.push({ type: "news", data: item }));
              filteredStories.slice(0, 1).forEach(item => mixedFeed.push({ type: "story", data: item }));
              filteredInterviews.slice(0, 1).forEach(item => mixedFeed.push({ type: "video", data: item }));

              return (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mx-4 md:mx-8 md:mx-16">
                  {mixedFeed.map((item, idx) => {
                    if (item.type === "article") {
                      const article = item.data;
                      return (
                        <Link href="/article-blogs" key={`art-${article.id}`} className="block group">
                          <article className="h-full bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col hover:shadow-xl transition-all duration-500">
                            <div className="relative h-48 overflow-hidden">
                              <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                              <div className="absolute top-3 right-3 bg-indigo-600 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                                Article
                              </div>
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                              <span className={`text-[9px] uppercase font-[700] tracking-wider mb-2 ${article.categoryColor || 'text-[var(--blue)]'}`}>
                                {article.category}
                              </span>
                              <h3 className="text-base font-[700] text-[#1D1E20] mb-2 leading-snug group-hover:text-[var(--blue)] transition-colors">
                                {article.title}
                              </h3>
                              <p className="text-gray-500 text-[11px] leading-relaxed mb-4 line-clamp-2">
                                {article.excerpt}
                              </p>
                              <div className="mt-auto flex items-center justify-between text-[10px] text-gray-400 font-[500] pt-3 border-t border-gray-200">
                                <span>{article.date}</span>
                                <span>{article.readTime}</span>
                              </div>
                            </div>
                          </article>
                        </Link>
                      );
                    } else if (item.type === "news") {
                      const news = item.data;
                      return (
                        <div key={`news-${news.id}`} className="group flex flex-col border border-gray-200 shadow-sm hover:shadow-md rounded-lg overflow-hidden h-full transition-shadow bg-white">
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <img
                              src={news.image}
                              alt={news.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-3 right-3 bg-amber-500 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                              News Update
                            </div>
                          </div>
                          <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-[20px] font-[600] text-[#212121] mb-2 group-hover:text-[var(--blue)] transition-colors">
                              {news.title}
                            </h3>
                            <p className="text-[#4b5563] text-[16px] leading-relaxed mb-4 line-clamp-3 text-left">
                              {news.summary}
                            </p>
                            <Link
                              href={`/media/news/${news.id}`}
                              className="text-[var(--blue)] font-[600] flex items-center gap-2 hover:gap-3 transition-all mt-auto"
                            >
                              Read Full News <span className="text-xl">→</span>
                            </Link>
                          </div>
                        </div>
                      );
                    } else if (item.type === "story") {
                      const story = item.data;
                      return (
                        <div key={`story-${story.id}`} className="group flex flex-col border border-gray-200 shadow-sm hover:shadow-md rounded-lg overflow-hidden h-full transition-shadow bg-white">
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <img
                              src={story.image}
                              alt={story.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                              Success Story
                            </div>
                          </div>
                          <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-[20px] font-[600] text-[#212121] mb-2 group-hover:text-[var(--blue)] transition-colors">
                              {story.name} ({story.location})
                            </h3>
                            <p className="text-[#4b5563] text-[14px] leading-relaxed mb-4 line-clamp-4 font-light text-left">
                              {story.text}
                            </p>
                            <Link
                              href="/media/success-stories"
                              className="text-[var(--blue)] font-[600] flex items-center gap-2 hover:gap-3 transition-all mt-auto"
                            >
                              View Success Stories <span className="text-xl">→</span>
                            </Link>
                          </div>
                        </div>
                      );
                    } else if (item.type === "video") {
                      const video = item.data;
                      return (
                        <div
                          key={`video-${video.id}`}
                          className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer shadow-sm bg-white"
                          onClick={() => openVideo(video.videoUrl)}
                        >
                          <img
                            src={video.src}
                            alt={video.title}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

                          <div className="absolute top-3 right-3 bg-red-600 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                            Video Interview
                          </div>

                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 drop-shadow-xl">
                              <Play size={24} fill="currentColor" className="text-gray-900 ml-1" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <h4 className="text-white text-sm font-semibold truncate text-left">{video.title}</h4>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Photos & Videos */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          {/* Heading */}
          <h2 className="text-2xl md:text-[56px] font-[500] text-center mb-6">
            Photos & Videos
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base text-center max-w-3xl mx-auto mb-6 md:mb-12 leading-relaxed">
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
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Cards Slider */}
            <div className="flex-1 mx-2 md:mx-4 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-6"
                style={{
                  transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
                }}
              >
                {mediaItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] relative rounded-lg overflow-hidden shadow-sm group cursor-pointer"
                  >
                    {/* Number Badge */}
                    <div className="absolute top-3 left-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-gray-700 shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Image/Video Container */}
                    <div
                      className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
                      onClick={() => {
                        if (item.type !== "video") openImage(item.image);
                      }}
                    >
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
                            <Play
                              size={24}
                              fill="currentColor"
                              className="text-gray-800 ml-0.5"
                            />
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
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
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
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

        {/* Image Modal */}
        {activeImage && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative max-w-5xl max-h-[82vh] rounded-lg overflow-hidden flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage}
                alt="Zoomed media"
                className="w-[95vw] max-w-[1200px] h-[85vh] max-h-[850px] object-cover rounded-lg shadow-2xl"
              />
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </section>
      {/* Know Nepal */}
      <section className="py-10 md:py-20 bg-white">
        <div className=" mx-auto px-4">
          {/* Heading */}
          <h2 className="text-2xl md:text-[56px] font-bold text-center mb-2" style={{}}>
            Know <span className="text-[#221C84]">Nepal</span>
          </h2>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 md:mb-12 w-full max-w-2xl mx-auto">
            <div className="relative w-full flex-1">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2.5 border-2 border-black text-[15px] text-black focus:outline-none cursor-pointer text-center appearance-none bg-white"
                style={{ textAlignLast: "center" }}
              >
                <option value="">Choose a category</option>
                <option value="culture">Culture</option>
                <option value="heritage">Heritage</option>
                <option value="nature">Nature</option>
                <option value="adventure">Adventure</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-600">
                <ChevronDown size={11} />
              </div>
            </div>

            <div className="relative w-full flex-1">
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full px-4 py-2.5 border-2 border-black text-[15px] text-black focus:outline-none cursor-pointer text-center appearance-none bg-white"
                style={{ textAlignLast: "center" }}
              >
                <option value="">Topic</option>
                <option value="kathmandu">Kathmandu</option>
                <option value="pokhara">Pokhara</option>
                <option value="lumbini">Lumbini</option>
                <option value="everest">Everest</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-600">
                <ChevronDown size={11} />
              </div>
            </div>
          </div>

          {/* Place Info + Gallery */}
          <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-12 mb-6 md:mb-12">
            {/* Left Content */}
            <div className="lg:w-1/3 flex flex-col justify-center">
              <h3 className="text-2xl md:text-[54px] font-[600] text-gray-900 mb-6">
                {currentPlace.name}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4 md:mb-8">
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
              <div className="flex flex-col gap-4 pt-4 md:pt-8 md:pt-12">
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
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              {/* Text Content */}
              <div className="md:w-1/2">
                <h4 className="text-[24px] md:text-xl font-bold text-gray-900 mb-4">
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
                      <Play
                        size={28}
                        fill="currentColor"
                        className="text-white ml-1"
                      />
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
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </section>
      {/*FAQ section*/}

      <section className="w-full bg-white pt-10 md:pt-24">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="relative flex items-end pt-16 md:pt-32">
            <div className="absolute left-4 md:left-12 bottom-0 translate-y-[9px] md:translate-y-[13px] z-10 w-[300px] md:w-[480px] h-[350px] md:h-[500px]">
              <img
                src="/faq.png"
                alt="FAQ Volunteers"
                className="w-full h-full object-contain object-bottom block"
              />
            </div>

            {/* Dark Blue Card */}
            <div
              className="w-full flex flex-col md:flex-row items-center justify-between p-5 md:p-10 md:p-16 md:pl-[520px] rounded-[20px] shadow-2xl"
              style={{
                background: "linear-gradient(to right, #1B1464, #08061E)",
              }}
            >
              <div className="text-center md:text-left mb-4 md:mb-8 md:mb-0">
                <h2 className="text-white text-2xl md:text-[36px] md:text-[40px] font-bold mb-4">
                  Any Question?
                </h2>
                <p className="text-gray-300 text-[14px] md:text-[14px] font-light">
                  Any queries check our FAQ page and get your answer.
                </p>
              </div>

              <Link
                href="/faq"
                className="bg-white text-[#1B1464] px-4 md:px-8 py-3 rounded-lg font-bold text-[20px] md:text-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
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
