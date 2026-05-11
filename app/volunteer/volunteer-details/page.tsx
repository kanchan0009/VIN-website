"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Plane, Home, Shield, Calendar, Trophy, Target, Star } from "lucide-react";
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
    title: "Internship on Child Development",
    desc: "Gain hands-on International NGO experience while directly contributing to child development outcomes across Nepal's most underserved communities.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070"
  },
  {
    title: "Volunteering for Kids with Disabilities in Nepal",
    desc: "Support children with physical or learning disabilities through inclusive education, therapy assistance, and compassionate daily care.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070"
  },
  {
    title: "Volunteer for Children Winter Camp",
    desc: "Bring warmth, games, creative arts, and educational activities to children during Nepal's cold winter months through energizing camp programmes.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1972"
  },
  {
    title: "Child Development Internship Abroad in Nepal",
    desc: "An immersive international internship placement where you develop professional skills while shaping the futures of children in Nepal.",
    image: "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?q=80&w=2070"
  },
  {
    title: "Volunteer for Child Rights",
    desc: "Advocate for children's rights, raise awareness about child protection, and support communities in upholding the rights of every child.",
    image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=2070"
  },
  {
    title: "Children's Summer Camp Volunteer in Nepal",
    desc: "Organize joyful, educational and creative summer camp activities that build confidence, teamwork and life skills in children.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070"
  },
  {
    title: "Volunteer for Children's Clubs Abroad",
    desc: "Help facilitate children's clubs where young people develop leadership, social, and life skills through structured group activities.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070"
  },
  {
    title: "Child Protection Volunteer Abroad",
    desc: "Work on safeguarding initiatives, help identify at-risk children and support local child protection systems and social workers.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1972"
  },
  {
    title: "Volunteer for Early Childhood Development Education in Nepal",
    desc: "Support ECD centres with play-based learning, teacher assistance, and resources that shape children's critical first years of development.",
    image: "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?q=80&w=2070"
  },
  {
    title: "Volunteer for Child Care Abroad",
    desc: "Provide loving, attentive childcare in community centres and orphanages, ensuring every child receives the attention and support they deserve.",
    image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=2070"
  }
];

const additionalOfferings = [
  {
    title: "Volunteer in Child Development",
    desc: "Engage in projects that support comprehensive child development and welfare.",
    icon: "👶"
  },
  {
    title: "Volunteer for Children's Support Services",
    desc: "Assist organizations providing essential services, from health care to educational enrichment.",
    icon: "🏥"
  },
  {
    title: "Youth Development Volunteer Opportunities",
    desc: "Mentor and support older children and adolescents to promote continuous learning and growth.",
    icon: "🚀"
  },
  {
    title: "Child Care Volunteer Positions",
    desc: "Take on roles involving direct care, ensuring children receive the attention they need.",
    icon: "❤️"
  },
  {
    title: "Volunteer in Child Education Programs",
    desc: "Contribute to educational initiatives that enhance literacy and numeracy among children.",
    icon: "📖"
  },
  {
    title: "Child Welfare Volunteer Opportunities",
    desc: "Work on projects to improve child welfare, ensuring safety, health, and well-being.",
    icon: "🌿"
  }
];

const benefits = [
  {
    title: "Transform Lives",
    desc: "Your work can transform individual lives and entire communities. You directly contribute to lowering social inequalities and improving living conditions for Nepal's most vulnerable children.",
    icon: "🌍"
  },
  {
    title: "Cultural Immersion",
    desc: "Working in Nepal provides a unique opportunity to immerse yourself in a vibrant culture. Engage with local traditions, festivals, and daily practices that enrich your personal experience and broaden your perspective.",
    icon: "🏮"
  },
  {
    title: "Professional Development",
    desc: "Gain invaluable skills in leadership, project management, and cross-cultural communication. These experiences enhance your resume and prepare you for future challenges.",
    icon: "📈"
  },
  {
    title: "Global Network",
    desc: "Join a worldwide community of change-makers. Collaborate with international volunteers and local experts, building lasting relationships and expanding your professional network.",
    icon: "🌐"
  }
];

const testimonials = [
  {
    quote: "Volunteering here has changed my perspective on what real empowerment means. Every day, I see lives transformed by our collective efforts. The skills I gained and the friendships I formed are priceless.",
    author: "Former Volunteer",
    program: "Women's Empowerment Program, Nepal",
    icon: "🌍"
  },
  {
    quote: "I was amazed by the resilience of the communities. Through this program, I contributed to meaningful projects and learned a great deal about myself and the power of advocacy.",
    author: "Priya",
    program: "Volunteer for Women's Advocacy, Nepal",
    icon: "🇮🇳"
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
    icon: "🤠"
  },
  {
    title: "Clear Program Guidelines",
    desc: "You will receive detailed guidelines outlining your responsibilities and the project's objectives. This clarity ensures you know how your efforts contribute to the larger mission.",
    icon: "📋"
  },
  {
    title: "Support from Experienced Coordinators",
    desc: "Our coordinators are available 24/7 to provide guidance, answer questions, and support you throughout your entire volunteer experience in Nepal.",
    icon: "📞"
  }
];

export default function VolunteerDetailsPage() {
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
              Childcare Volunteer Opportunities In Nepal
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-4xl leading-relaxed">
              Loreum Ipsum Dipsum We Are Different Locations Loreum Ipsum Dipsum We
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
                  ABOUT OUR INITIATIVE
                </p>
                <h2 className="text-[#1a237e] text-[40px] md:text-[44px] font-[900] leading-[1.1] mb-6">
                  Why Childcare <br /> Matters
                </h2>
                <div className="flex w-16 h-[2px]">
                  <div className="w-[30%] h-full bg-[#f15b2d]" />
                  <div className="w-[70%] h-full bg-[#1a237e]" />
                </div>
              </div>

              <div className="text-[#6b7280] space-y-6 leading-[1.6] text-[15px]">
                <p>
                  Childhood is the foundation of every great society. Quality childcare during early years sets the stage for lifelong learning and success. Globally, research shows that <span className="font-extrabold text-gray-600">every dollar invested in early childhood education returns up to $7 in economic benefits.</span>
                </p>
                <p>
                  Yet, in Nepal, many children still lack access to supportive, quality care. Statistics from UNICEF indicate that <span className="font-extrabold text-gray-600">over 30% of children in low-income areas miss out on essential early education programs.</span> Such gaps can hinder cognitive and social development, perpetuating cycles of poverty and inequality.
                </p>
                <p>
                  The need for robust childcare support is urgent. By engaging in Childcare volunteer opportunities and serving as a Volunteer in Child Development, you contribute directly to breaking these cycles. Your involvement helps foster safe, nurturing environments where children can thrive, learn, and grow.
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-gray-100 mt-8 mb-4" />

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-[#f3f4f9] p-8 rounded-[24px] flex flex-col items-center text-center">
                    <span className="text-[#1a237e] text-[36px] font-[1000] mb-3 leading-none">{stat.value}</span>
                    <p className="text-[#6b7280] text-[11px] leading-[1.4] font-medium max-w-[150px]">
                      {stat.label.replace("Nepal's", "Nepal's")}
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
                
                {/* Overlay Badge - Bottom Left (10+) */}
                <div className="absolute -bottom-8 -left-8 w-[240px] bg-[#1a237e] p-8 rounded-[30px] shadow-[0_20px_40px_rgba(26,35,126,0.3)] z-20">
                  <div className="text-white">
                    <span className="text-[48px] font-[1000] leading-none block mb-3">
                      10<span className="text-[#f15b2d] ml-1">+</span>
                    </span>
                    <p className="text-[13px] leading-[1.4] font-medium opacity-90">
                      Active childcare volunteer programs running across Nepal
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
                    <Link href="/volunteer/volunteer-details/volunteer-projects" className="text-[#1a237e] text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                      Learn More <span className="text-lg leading-none">→</span>
                    </Link>
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
                  <div className="text-3xl mb-6">{offering.icon}</div>
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
                      {benefit.icon}
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
                        {t.icon}
                      </div>
                      <div>
                        <h4 className="text-[#0D0A35] font-bold text-sm">{t.author}</h4>
                        <p className="text-gray-400 text-xs mt-0.5">{t.program}</p>
                      </div>
                    </div>
                    {/* Quote Decoration */}
                    <div className="absolute top-10 right-10 text-gray-100">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V15M14.017 21H10.017V15M3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V15M3.017 21H0.017V15" />
                      </svg>
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



