"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Plane, Home, Shield, Calendar, Trophy, Target, Star, 
  Baby, Hospital, Rocket, Heart, BookOpen, Leaf, 
  Globe, Landmark, TrendingUp, MapPin, 
  UserCheck, ClipboardList, PhoneCall, CheckCircle, Award, GraduationCap, Quote
} from "lucide-react";
import CTABanner from "../../components/CTABanner";
import DonationWidget from "../../components/DonationWidget"

const features = [
  {
    icon: <Plane className="w-5 h-5 text-blue-400" />,
    title: "Airport Pickup",
    desc: "Included on arrival",
  },
  {
    icon: <Home className="w-5 h-5 text-green-500" />,
    title: "Homestay Included",
    desc: "3 meals daily",
  },
  {
    icon: <Shield className="w-5 h-5 text-yellow-500" />,
    title: "24/7 Support",
    desc: "Coordinators always on call",
  },
  {
    icon: <Calendar className="w-5 h-5 text-red-400" />,
    title: "Min. 2-Week Stay",
    desc: "Flexible, longer = more impact",
  },
];

const stats = [
  {
    value: "$7",
    label: "Return on every $1 invested in early childhood",
  },
  {
    value: "30%",
    label: "Children in low-income areas miss early ed.",
  },
  {
    value: "2005",
    label: "VIN has been serving Nepal's children",
  },
];

const programs = [
  {
    id: "child-dev-internship",
    title: "Internship on Child Development",
    desc: "Gain hands-on International NGO experience while directly contributing to child development outcomes across Nepal's most underserved communities.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
    heroTitle: "Child Development Internship in Nepal",
    heroSubtitle: "Gain professional experience while shaping the futures of children in underserved communities.",
    aboutSubtitle: "ABOUT OUR INTERNSHIP",
    aboutTitle: "Why Child Development Matters",
    aboutDesc: [
      "Childhood is the foundation of every great society. Quality childcare during early years sets the stage for lifelong learning and success. Globally, research shows that every dollar invested in early childhood education returns up to $7 in economic benefits.",
      "Yet, in Nepal, many children still lack access to supportive, quality care. Statistics from UNICEF indicate that over 30% of children in low-income areas miss out on essential early education programs. Such gaps can hinder cognitive and social development, perpetuating cycles of poverty and inequality.",
      "The need for robust childcare support is urgent. By engaging in Childcare volunteer opportunities and serving as a Volunteer in Child Development, you contribute directly to breaking these cycles. Your involvement helps foster safe, nurturing environments where children can thrive, learn, and grow."
    ],
    stats: [
      { value: "$7", label: "Return on every $1 invested in early childhood" },
      { value: "30%", label: "Children in low-income areas miss early ed." },
      { value: "2005", label: "VIN has been serving Nepal's children" },
    ],
    experienceBadge: "15+",
    experienceLabel: "International interns joined us last year"
  },
  {
    id: "kids-disabilities",
    title: "Volunteering for Kids with Disabilities in Nepal",
    desc: "Support children with physical or learning disabilities through inclusive education, therapy assistance, and compassionate daily care.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070",
    heroTitle: "Support Children with Disabilities",
    heroSubtitle: "Make a direct impact through inclusive care and therapeutic support in Nepal.",
    aboutSubtitle: "INCLUSIVE EDUCATION",
    aboutTitle: "Empowering Every Child",
    aboutDesc: [
      "In many parts of Nepal, children with disabilities face significant barriers to education and social integration. Often, these children are marginalized due to lack of specialized infrastructure and community awareness.",
      "Our program focuses on providing these children with the specialized attention they need. From basic therapy assistance to inclusive classroom support, volunteers play a crucial role in enhancing their quality of life.",
      "By volunteering, you help create a more inclusive society where every child, regardless of their physical or mental abilities, is given the opportunity to reach their full potential."
    ],
    stats: [
      { value: "500+", label: "Children with disabilities supported" },
      { value: "50+", label: "Specialized centers partnered with VIN" },
      { value: "100%", label: "Focus on inclusive development" },
    ],
    experienceBadge: "12+",
    experienceLabel: "Years of specialized inclusive programming"
  },
  {
    id: "winter-camp",
    title: "Volunteer for Children Winter Camp",
    desc: "Bring warmth, games, creative arts, and educational activities to children during Nepal's cold winter months through energizing camp programmes.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1972",
    heroTitle: "Children's Winter Camp Adventure",
    heroSubtitle: "Brighten the cold winter months with joy, learning, and creative activities.",
    aboutSubtitle: "WINTER ENRICHMENT",
    aboutTitle: "Learning Through Play",
    aboutDesc: [
      "Winter in the Himalayan region can be challenging, especially for children in rural areas where schools often close for long breaks. Without structured activities, many children miss out on continuous learning.",
      "Our Winter Camp provides a safe and warm environment where children can engage in creative arts, sports, and educational games. It's a time for them to build confidence and make lasting friendships.",
      "Volunteers bring fresh energy and ideas to the camp, teaching everything from basic English to environmental awareness, all through the power of play."
    ],
    stats: [
      { value: "1,200+", label: "Children attending winter camps annually" },
      { value: "40+", label: "Villages reached across Nepal" },
      { value: "95%", label: "Student satisfaction and engagement" },
    ],
    experienceBadge: "20+",
    experienceLabel: "Different winter workshops organized"
  },
  {
    id: "child-rights",
    title: "Volunteer for Child Rights",
    desc: "Advocate for children's rights, raise awareness about child protection, and support communities in upholding the rights of every child.",
    image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=2070",
    heroTitle: "Advocate for Child Rights in Nepal",
    heroSubtitle: "Ensure every child is protected, respected, and given a voice.",
    aboutSubtitle: "ADVOCACY & PROTECTION",
    aboutTitle: "Protecting the Future",
    aboutDesc: [
      "Child rights are fundamental to a healthy society, yet many children in marginalized communities remain vulnerable to exploitation, labor, and lack of education.",
      "Our advocacy program works directly with local leaders, parents, and children to raise awareness about child protection laws and the importance of a safe environment.",
      "As a volunteer, you will help organize workshops, conduct research, and support community initiatives that ensure the UN Convention on the Rights of the Child is more than just a document—it's a reality."
    ],
    stats: [
      { value: "10k+", label: "People reached through advocacy" },
      { value: "150+", label: "Community workshops conducted" },
      { value: "24/7", label: "Commitment to child safety" },
    ],
    experienceBadge: "100%",
    experienceLabel: "Alignment with international human rights standards"
  },
  {
    id: "summer-camp",
    title: "Children's Summer Camp Volunteer in Nepal",
    desc: "Organize joyful, educational and creative summer camp activities that build confidence, teamwork and life skills in children.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
    heroTitle: "Summer Camp Joy and Discovery",
    heroSubtitle: "Make the summer break unforgettable through creative learning and fun.",
    aboutSubtitle: "SUMMER ENGAGEMENT",
    aboutTitle: "A Season of Growth",
    aboutDesc: [
      "Summer in Nepal is a vibrant time, but for many rural children, it's also a time of limited opportunities. Our Summer Camp program bridges this gap by providing an intensive period of enrichment.",
      "The camp focuses on holistic development, including public speaking, team building, and artistic expression. We believe that every child has a hidden talent waiting to be discovered.",
      "Volunteers act as mentors and facilitators, guiding children through various projects that encourage them to think critically and act creatively."
    ],
    stats: [
      { value: "2,500+", label: "Summer camp graduates to date" },
      { value: "80+", label: "Creative projects completed each session" },
      { value: "15+", label: "Years of successful camp management" },
    ],
    experienceBadge: "30+",
    experienceLabel: "International volunteers per camp"
  },
  {
    id: "child-clubs",
    title: "Volunteer for Children's Clubs Abroad",
    desc: "Help facilitate children's clubs where young people develop leadership, social, and life skills through structured group activities.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070",
    heroTitle: "Empower Youth through Children's Clubs",
    heroSubtitle: "Foster leadership and life skills in the next generation of Nepalese leaders.",
    aboutSubtitle: "CLUB FACILITATION",
    aboutTitle: "Building Future Leaders",
    aboutDesc: [
      "Children's clubs are vital spaces where young people can express themselves freely, learn about their rights, and develop essential leadership skills.",
      "As a volunteer, you will help facilitate club meetings, organize debates, sports competitions, and community service projects led by the children themselves.",
      "Your role is to empower them to take initiative, solve problems, and become active citizens in their own communities."
    ],
    stats: [
      { value: "200+", label: "Active children's clubs established" },
      { value: "5,000+", label: "Youth members participating" },
      { value: "50+", label: "Leadership workshops held annually" },
    ],
    experienceBadge: "100+",
    experienceLabel: "Youth-led community projects supported"
  },
  {
    id: "child-protection",
    title: "Child Protection Volunteer Abroad",
    desc: "Work on safeguarding initiatives, help identify at-risk children and support local child protection systems and social workers.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1972",
    heroTitle: "Champion Child Protection in Nepal",
    heroSubtitle: "Work alongside local experts to safeguard vulnerable children.",
    aboutSubtitle: "SAFEGUARDING INITIATIVES",
    aboutTitle: "Ensuring a Safe Childhood",
    aboutDesc: [
      "Child protection is a critical issue in developing regions. Many children face risks that require specialized intervention and systematic monitoring.",
      "This program places volunteers with local social workers and NGOs to help strengthen child protection mechanisms at the grassroots level.",
      "You will assist in case management, home visits, and awareness campaigns designed to prevent child labor, trafficking, and abuse."
    ],
    stats: [
      { value: "300+", label: "At-risk children reintegrated into families" },
      { value: "100%", label: "Strict adherence to protection protocols" },
      { value: "50+", label: "Local partner organizations" },
    ],
    experienceBadge: "24/7",
    experienceLabel: "Support system for child welfare"
  },
  {
    id: "ecd-education",
    title: "Volunteer for Early Childhood Development Education",
    desc: "Support ECD centres with play-based learning, teacher assistance, and resources that shape children's critical first years of development.",
    image: "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?q=80&w=2070",
    heroTitle: "Early Childhood Development Education",
    heroSubtitle: "Shape the most critical years of a child's learning journey.",
    aboutSubtitle: "EARLY LEARNING",
    aboutTitle: "The Power of ECD",
    aboutDesc: [
      "The first five years of life are the most critical for brain development. Quality early education can set a child on a path to lifelong success.",
      "Many ECD centers in Nepal lack the resources and trained staff to provide high-quality play-based learning. Volunteers fill this gap by introducing new teaching methods and creating educational materials.",
      "By supporting local teachers, you help ensure that children from even the most disadvantaged backgrounds get a strong start in life."
    ],
    stats: [
      { value: "85%", label: "Improvement in school readiness" },
      { value: "150+", label: "ECD centers modernized by VIN" },
      { value: "2,000+", label: "Teachers trained in play-based learning" },
    ],
    experienceBadge: "1st",
    experienceLabel: "Five years of life are our priority"
  },
  {
    id: "child-care",
    title: "Volunteer for Child Care Abroad",
    desc: "Provide loving, attentive childcare in community centres and orphanages, ensuring every child receives the attention and support they deserve.",
    image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=2070",
    heroTitle: "Compassionate Child Care in Nepal",
    heroSubtitle: "Provide the love and attention every child deserves.",
    aboutSubtitle: "DIRECT CARE",
    aboutTitle: "Nurturing the Next Generation",
    aboutDesc: [
      "In busy community centers and orphanages, staff are often overwhelmed. Individual attention—essential for a child's emotional health—can be hard to come by.",
      "Childcare volunteers provide that missing piece. From helping with homework to simply playing and listening, your presence makes a world of difference to a child who needs it most.",
      "This program is for those who want to provide direct, hands-on care and form meaningful connections with children in need."
    ],
    stats: [
      { value: "400+", label: "Children receiving daily care support" },
      { value: "20+", label: "Community centers active" },
      { value: "1,000+", label: "Smiles generated every day" },
    ],
    experienceBadge: "❤️",
    experienceLabel: "Focus on emotional well-being"
  },
  {
    id: "child-internship-abroad",
    title: "Child Development Internship Abroad in Nepal",
    desc: "An immersive international internship placement where you develop professional skills while shaping the futures of children in Nepal.",
    image: "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?q=80&w=2070",
    heroTitle: "International Internship on Child Development",
    heroSubtitle: "Launch your career in international development with hands-on impact.",
    aboutSubtitle: "PROFESSIONAL INTERNSHIP",
    aboutTitle: "Grow while you Give",
    aboutDesc: [
      "Looking to gain professional experience in the NGO sector? Our internship program offers a structured environment where you can apply your academic knowledge to real-world challenges.",
      "Interns work on specific projects related to child development monitoring, program evaluation, and curriculum design, gaining invaluable insights into international development.",
      "This is an immersive experience that will challenge you professionally and personally, all while contributing to sustainable change in Nepal."
    ],
    stats: [
      { value: "100%", label: "Professional mentorship provided" },
      { value: "40+", label: "University partnerships globally" },
      { value: "12", label: "Months of impact per internship year" },
    ],
    experienceBadge: "GraduationCap",
    experienceLabel: "Career-defining international experience"
  }
];

const additionalOfferings = [
  {
    title: "Volunteer in Child Development",
    desc: "Engage in projects that support comprehensive child development and welfare.",
    icon: "Baby"
  },
  {
    title: "Volunteer for Children's Support Services",
    desc: "Assist organizations providing essential services, from health care to educational enrichment.",
    icon: "Hospital"
  },
  {
    title: "Youth Development Volunteer Opportunities",
    desc: "Mentor and support older children and adolescents to promote continuous learning and growth.",
    icon: "Rocket"
  },
  {
    title: "Child Care Volunteer Positions",
    desc: "Take on roles involving direct care, ensuring children receive the attention they need.",
    icon: "Heart"
  },
  {
    title: "Volunteer in Child Education Programs",
    desc: "Contribute to educational initiatives that enhance literacy and numeracy among children.",
    icon: "BookOpen"
  },
  {
    title: "Child Welfare Volunteer Opportunities",
    desc: "Work on projects to improve child welfare, ensuring safety, health, and well-being.",
    icon: "Leaf"
  }
];

const benefits = [
  {
    title: "Transform Lives",
    desc: "Your work can transform individual lives and entire communities. You directly contribute to lowering social inequalities and improving living conditions for Nepal's most vulnerable children.",
    icon: "Globe"
  },
  {
    title: "Cultural Immersion",
    desc: "Working in Nepal provides a unique opportunity to immerse yourself in a vibrant culture. Engage with local traditions, festivals, and daily practices that enrich your personal experience and broaden your perspective.",
    icon: "Landmark"
  },
  {
    title: "Professional Development",
    desc: "Gain invaluable skills in leadership, project management, and cross-cultural communication. These experiences enhance your resume and prepare you for future challenges.",
    icon: "TrendingUp"
  },
  {
    title: "Global Network",
    desc: "Join a worldwide community of change-makers. Collaborate with international volunteers and local experts, building lasting relationships and expanding your professional network.",
    icon: "Globe"
  }
];

const testimonials = [
  {
    quote: "Volunteering here has changed my perspective on what real empowerment means. Every day, I see lives transformed by our collective efforts. The skills I gained and the friendships I formed are priceless.",
    author: "Former Volunteer",
    program: "Women's Empowerment Program, Nepal",
    icon: "Globe"
  },
  {
    quote: "I was amazed by the resilience of the communities. Through this program, I contributed to meaningful projects and learned a great deal about myself and the power of advocacy.",
    author: "Priya",
    program: "Volunteer for Women's Advocacy, Nepal",
    icon: "MapPin"
  }
];

const steps = [
  {
    num: "1",
    title: "Apply Online",
    desc: "Begin by completing our easy online application form. Share your interests, background, and reasons for wanting to contribute. We value your passion and look forward to matching you with the right program.",
    color: "bg-[var(--blue)]"
  },
  {
    num: "2",
    title: "Get Matched",
    desc: "Our team reviews your application and connects you with the volunteer program that fits your passion and expertise. Whether inclined towards educational, economic or health projects, we have a role for you.",
    color: "bg-[#2B239E]"
  },
  {
    num: "3",
    title: "Train & Prepare",
    desc: "Before deployment, you will participate in comprehensive training sessions covering cultural nuances, program specifics, and safety protocols. This preparation ensures you are ready from day one.",
    color: "bg-[#3A32C8]"
  },
  {
    num: "4",
    title: "Volunteer & Impact",
    desc: "Once trained, embark on your journey. Engage in workshops, mentorship sessions, community outreach and more. Your contributions will drive change and empower children across Nepal.",
    color: "bg-[#F7941D]"
  }
];

const expectations = [
  {
    title: "On-Site Assistance",
    desc: "Whether you need help with logistics, cultural integration, or project implementation, our local team ensures your success every step of the way.",
    icon: "UserCheck"
  },
  {
    title: "Clear Program Guidelines",
    desc: "You will receive detailed guidelines outlining your responsibilities and the project's objectives. This clarity ensures you know how your efforts contribute to the larger mission.",
    icon: "ClipboardList"
  },
  {
    title: "Support from Experienced Coordinators",
    desc: "Our coordinators are available 24/7 to provide guidance, answer questions, and support you throughout your entire volunteer experience in Nepal.",
    icon: "PhoneCall"
  }
];

export default function VolunteerDetailsPage() {
  const [selectedProgram, setSelectedProgram] = useState(programs[0]);

  const getIcon = (iconName: string, size = 24, className = "text-[var(--blue)]") => {
    const iconMap: Record<string, any> = {
      Baby: <Baby size={size} className={className} />,
      Hospital: <Hospital size={size} className={className} />,
      Rocket: <Rocket size={size} className={className} />,
      Heart: <Heart size={size} className={className} />,
      BookOpen: <BookOpen size={size} className={className} />,
      Leaf: <Leaf size={size} className={className} />,
      Globe: <Globe size={size} className={className} />,
      Landmark: <Landmark size={size} className={className} />,
      TrendingUp: <TrendingUp size={size} className={className} />,
      MapPin: <MapPin size={size} className={className} />,
      UserCheck: <UserCheck size={size} className={className} />,
      ClipboardList: <ClipboardList size={size} className={className} />,
      PhoneCall: <PhoneCall size={size} className={className} />,
      GraduationCap: <GraduationCap size={size} className={className} />,
    };
    return iconMap[iconName] || <CheckCircle size={size} className={className} />;
  };

  const handleProgramSelect = (program: any) => {
    setSelectedProgram(program);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-white min-h-screen font-montserrat">
      {/* Hero Section */}
      <section className="relative h-[670px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
          alt="Childcare Volunteer Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-5 md:p-10 md:pb-10">
          <div className=" mx-auto">
            <h1 className="text-white text-5xl md:text-[60px] font-bold mb-2 leading-tight">
              {selectedProgram.heroTitle}
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-4xl leading-relaxed">
              {selectedProgram.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      

      {/* Features Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className=" mx-auto px-6 md:px-16 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-[#0D0A35] font-bold text-sm">{feature.title}</h3>
                  <p className="text-gray-400 text-xs mt-0.5">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className=" mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <p className="text-[#f15b2d] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
                  {selectedProgram.aboutSubtitle}
                </p>
                <h2 className="text-[#1a237e] text-[40px] md:text-[44px] font-[900] leading-[1.1] mb-6">
                  {selectedProgram.aboutTitle}
                </h2>
                <div className="flex w-16 h-[2px]">
                  <div className="w-[30%] h-full bg-[#f15b2d]" />
                  <div className="w-[70%] h-full bg-[#1a237e]" />
                </div>
              </div>

              <div className="text-[#6b7280] space-y-6 leading-[1.6] text-[15px]">
                {selectedProgram.aboutDesc.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-gray-100 mt-8 mb-4" />

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {selectedProgram.stats.map((stat, idx) => (
                  <div key={idx} className="bg-[#f3f4f9] p-8 rounded-[24px] flex flex-col items-center text-center">
                    <span className="text-[#1a237e] text-[36px] font-[1000] mb-3 leading-none">{stat.value}</span>
                    <p className="text-[#6b7280] text-[11px] leading-[1.4] font-medium max-w-[150px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image Collage */}
            <div className="relative mt-12 lg:mt-[130px]">
              <div className="relative w-full aspect-[4/3.5] rounded-[10px] overflow-visible">
                {/* Main Image */}
                <div className="relative w-full h-full rounded-[10px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                  <Image
                    src="https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=2070&auto=format&fit=crop"
                    alt="Volunteer with children"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Overlay Badge - Bottom Left */}
                <div className="absolute -bottom-8 -left-8 w-[240px] bg-[#1a237e] p-8 rounded-[30px] shadow-[0_20px_40px_rgba(26,35,126,0.3)] z-20">
                  <div className="text-white">
                    <span className="text-[48px] font-[1000] leading-none block mb-3 flex items-center gap-2">
                      {selectedProgram.experienceBadge === "❤️" ? (
                        <Heart className="w-10 h-10 text-[#f15b2d]" fill="currentColor" />
                      ) : selectedProgram.experienceBadge === "GraduationCap" ? (
                        <GraduationCap className="w-10 h-10 text-[#f15b2d]" />
                      ) : (
                        <>
                          {selectedProgram.experienceBadge}
                          <span className="text-[#f15b2d] ml-1">+</span>
                        </>
                      )}
                    </span>
                    <p className="text-[13px] leading-[1.4] font-medium opacity-90">
                      {selectedProgram.experienceLabel}
                    </p>
                  </div>
                </div>

                {/* Overlay Badge - Top Right (UNICEF) */}
                <div className="absolute top-10 -right-6 bg-white p-5 rounded-[24px] shadow-[0_15px_35px_rgba(0,0,0,0.1)] flex items-center gap-4 z-20 min-w-[200px]">
                  <div className="flex-shrink-0">
                    <div className="bg-[#fff9e6] p-2 rounded-xl">
                      <Trophy className="w-6 h-6 text-[#d4af37]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#1a237e] font-black text-[12px] leading-tight">UNICEF Aligned</h4>
                    <p className="text-[#9ca3af] text-[10px] mt-1 font-medium ">Evidence-based programs</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Mission & Vision Section */}
      <section className="bg-[#f8faff] py-24">
        <div className=" mx-auto px-6 md:px-10 text-center">
          <p className="text-[#f15b2d] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
            OUR MISSION & VISION
          </p>
          <h2 className="text-[#0D0A35] text-[40px] md:text-[44px] font-[900] leading-[1.1] mb-16">
            What Drives Everything We Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Mission Card */}
            <div className="bg-white p-12 rounded-[40px] shadow-[0_15px_50px_rgba(0,0,0,0.03)] border-t-[6px] border-[#1a237e] text-left">
              <div className="w-14 h-14 bg-[#f3f4ff] rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-7 h-7 text-[#1a237e]" />
              </div>
              <h3 className="text-[#0D0A35] text-2xl font-black mb-6">Our Mission</h3>
              <p className="text-[#6b7280] leading-[1.8] text-[15px]">
                Our mission is to empower children by providing comprehensive volunteer-led childcare services that nurture early learning, ensure safety, and support overall development. Through sustainable programs, we aim to impact families and communities positively.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-12 rounded-[40px] shadow-[0_15px_50px_rgba(0,0,0,0.03)] border-t-[6px] border-[#f15b2d] text-left">
              <div className="w-14 h-14 bg-[#fff9f4] rounded-2xl flex items-center justify-center mb-8">
                <Star className="w-7 h-7 text-[#f15b2d]" />
              </div>
              <h3 className="text-[#0D0A35] text-2xl font-black mb-6">Our Vision</h3>
              <p className="text-[#6b7280] leading-[1.8] text-[15px]">
                We envision a future where every child in Nepal has access to quality care and educational opportunities. Our vision is a world where volunteer-driven child support systems uplift communities, foster resilience and pave the way for a brighter, more equitable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Life on the Ground Gallery Section */}
      <section className="bg-[#1a237e] py-15 overflow-hidden">
        <div className=" mx-auto px-6 md:px-10 text-center">
          <p className="text-[#f15b2d] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
            LIFE ON THE GROUND
          </p>
          <h2 className="text-white text-[40px] md:text-[44px] font-[900] leading-[1.1] mb-6">
            Real Moments, Real Impact
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12 font-light">
            Every photo tells a story of connection, growth and transformation — join us and become part of it.
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-10 gap-3 h-[480px]">
            {/* Left Large Image */}
            <div className="md:col-span-4 relative h-full">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                alt="Volunteer moment 1"
                fill
                className="object-cover rounded-[12px]"
              />
            </div>

            {/* Middle Column */}
            <div className="md:col-span-3 grid grid-rows-2 gap-3 h-full">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
                  alt="Volunteer moment 2"
                  fill
                  className="object-cover rounded-[12px]"
                />
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1972&auto=format&fit=crop"
                  alt="Volunteer moment 3"
                  fill
                  className="object-cover rounded-[12px]"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="md:col-span-3 grid grid-rows-2 gap-3 h-full">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1484820540004-14229fe36ca4?q=80&w=2070&auto=format&fit=crop"
                  alt="Volunteer moment 4"
                  fill
                  className="object-cover rounded-[12px]"
                />
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=2070&auto=format&fit=crop"
                  alt="Volunteer moment 5"
                  fill
                  className="object-cover rounded-[12px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Volunteer Programs Section */}
      <section className="bg-white py-24">
        <div className=" mx-auto px-6 md:px-10 text-center">
          <p className="text-[#f15b2d] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
            VOLUNTEER PROGRAMS
          </p>
          <h2 className="text-[#0D0A35] text-[40px] md:text-[44px] font-[900] leading-[1.1] mb-6">
            Explore Our Volunteer Programs
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-16 leading-relaxed">
            We offer a diverse range of specialized projects catering to different interests and expertise within childcare. Each program addresses key aspects of child development and support services in Nepal.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {programs.map((program, idx) => (
              <div key={idx} className="flex flex-col md:flex-row bg-white border-1 border-gray-200 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-50 overflow-hidden hover:shadow-md transition-shadow">
                <div className="w-full md:w-[220px] h-[180px] relative flex-shrink-0">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-left flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-[#0D0A35] text-lg font-bold mb-2 leading-tight">
                      {program.title}
                    </h3>
                    <p className="text-gray-500 text-[13px] mb-4 leading-relaxed line-clamp-3">
                      {program.desc}
                    </p>
                  </div>
                  <div>
                    <div className="w-full h-[1px] bg-gray-100 mb-4" />
                    <button 
                      onClick={() => handleProgramSelect(program)}
                      className="text-[#1a237e] text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Learn More <span className="text-lg leading-none">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Offerings Section */}
      <section className="bg-white pb-24">
        <div className=" mx-auto px-6 md:px-10">
          <div className="bg-[#F7F7FC] border-1 border-[#E5E2F0] rounded-[32px] p-10 md:p-16">
            <h2 className="text-[#0D0A35] text-[24px] md:text-[28px] font-[700] mb-6">
              Additional Offerings
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalOfferings.map((offering, idx) => (
                <div key={idx} className="bg-white p-6 rounded-[14px]  border border-gray-50 flex flex-col items-start hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-6">{getIcon(offering.icon, 32)}</div>
                  <h3 className="text-[#0D0A35] text-[13px] font-bold mb-2 leading-tight">
                    {offering.title}
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">
                    {offering.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Testimonials Section */}
      <section className="bg-white py-24">
        <div className=" mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Left Column - Impact & Benefits */}
            <div className="space-y-12">
              <div>
                <p className="text-[#f15b2d] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
                  IMPACT & BENEFITS
                </p>
                <h2 className="text-[#0D0A35] text-[40px] md:text-[44px] font-[900] leading-[1.1] mb-8">
                  Why Volunteer <br /> with VIN?
                </h2>
                <div className="w-16 h-[2px] bg-[#1a237e] mb-10" />
                <p className="text-[#4E4A72] text-lg leading-relaxed max-w-lg">
                  Volunteering with our programs is more than just an activity — it's a life-changing experience that benefits both the community and the volunteer.
                </p>
              </div>

              <div className="space-y-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-[14px] border-1 border-gray-200 flex gap-6 hover:shadow-md transition-shadow">
                    <div className="text-3xl flex-shrink-0 bg-[#f8faff] w-14 h-14 rounded-xl flex items-center justify-center">
                      {getIcon(benefit.icon, 32)}
                    </div>
                    <div>
                      <h3 className="text-[#0D0A35] text-xm font-bold mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-[#4E4A72]text-[14px] leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Testimonials */}
            <div className="space-y-12 lg:mt-13">
              <div>
                <p className="text-[#f15b2d] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
                  REAL STORIES, REAL IMPACT
                </p>
                <h2 className="text-[#0D0A35] text-[30px] md:text-[24px] font-[900] leading-[1.1] mb-1 ">
                  What Our Volunteers Say
                </h2>
              </div>

              <div className="space-y-8">
                {testimonials.map((t, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-[12px] border-1 border-gray-200  border border-gray-50 relative">
                    <div className="flex gap-1 mb-6 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-[#4E4A72] text-[15px] leading-relaxed mb-8 ">
                      "{t.quote}"
                    </p>
                    <div className="w-full h-[1px] bg-gray-100 mb-6" />
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#f3f4ff] rounded-full flex items-center justify-center text-xl">
                        {getIcon(t.icon, 24)}
                      </div>
                      <div>
                        <h4 className="text-[#0D0A35] font-bold text-sm">{t.author}</h4>
                        <p className="text-gray-400 text-xs mt-0.5">{t.program}</p>
                      </div>
                    </div>
                    {/* Quote Decoration */}
                    <div className="absolute top-10 right-10 text-gray-100">
                      <Quote className="w-10 h-10 fill-current opacity-20" />
                    </div>
                  </div>
                ))}

                {/* Impact Stat Box */}
                <div className="bg-[#1a237e] p-12 rounded-[22px] text-white">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-[48px] font-black leading-none">30%</span>
                    <span className="text-[52px] font-black text-[#F7941D] leading-none">+</span>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed max-w-[220px]">
                    School enrollment increase in VIN supported communities
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-12">
        <div className=" mx-auto px-6 md:px-16 text-center">
          <p className="text-[#f15b2d] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
            GET INVOLVED TODAY
          </p>
          <h2 className="text-[#0D0A35] text-[40px] md:text-[50px] font-[700] leading-[1.1] mb-6">
            How It Works
          </h2>
          <p className="text-[#4E4A72] text-[17px] max-w-2xl mx-auto mb-18 leading-relaxed">
            Becoming a part of our volunteer programs is straightforward. We have designed an inclusive and supportive process to ensure your journey is smooth and impactful.
          </p>

          {/* Process Steps */}
          <div className="relative mb-32">
            {/* Connecting Line */}
            <div className="absolute top-10 left-0 w-full h-[2px] bg-[#ffffff] hidden md:block">
              <div className="absolute top-0 left-0 w-[75%] h-full bg-[#1a237e]" />
              <div className="absolute top-0 left-[75%] w-[25%] h-full bg-[#f15b2d]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center text-white text-2xl font-black mb-8 border-4 border-white`}>
                    {step.num}
                  </div>
                  <h3 className="text-[#0D0A35] text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-[#4E4A72] text-[15px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What to Expect Box */}
          <div className="bg-[#f8f9ff] rounded-[15px] p-6 md:p-6 text-left">
            <h2 className="text-[#0D0A35] text-[22px] md:text-[26px] font-[900] mb-6">
              What to Expect on the Ground
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {expectations.map((exp, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-14 h-14 bg-[#1a237e] rounded-xl flex-shrink-0 flex items-center justify-center text-2xl">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-[#0D0A35] text-sm font-bold mb-3 leading-tight">{exp.title}</h3>
                    <p className="text-[#4E4A72] text-[13px] leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <DonationWidget/>

      <CTABanner />
    </main>
  );
}



