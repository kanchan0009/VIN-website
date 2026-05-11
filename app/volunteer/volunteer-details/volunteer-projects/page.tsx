import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Mail, Phone, MapPin, Medal, 
  School, BookOpen, Users, Stethoscope, ShieldCheck, HeartHandshake,
  GraduationCap, User, Globe, Lightbulb, MessageSquare, ClipboardCheck,
  CheckCircle2, XCircle,
  Edit3, Plane, Home, Leaf, Briefcase, Award,
  Star, ArrowRight
} from "lucide-react";
import CTABanner from "../../../components/CTABanner";

export default function VolunteerProjectsPage() {
  return (
    <main className="bg-white min-h-screen font-plus-jakarta-sans">
      {/* Hero Section */}
      <section className="relative h-[670px] flex items-end bg-[#1a237e] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
            alt="Internship hero"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0A35]/80 to-transparent" />
        </div>
        
        <div className="w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-end">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h1 className="text-white text-4xl md:text-5xl font-bold leading-[1.1]">
                Internship on <br />
                <span className="text-[#F7941D]">Child Development</span> <br />
                Nepal
              </h1>
              <p className="text-white/80 text-lg max-w-4xl leading-relaxed font-medium py-4">
                Lorem Ipsum Dipsum We Are Different Locations Lorem Ipsum Dipsum We Are Different Locations Lorem Ipsum Dipsum We
              </p>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5 pt-24 pl-45">
              <div className="bg-white rounded-t-[20px] p-8 shadow-2xl">
                <h2   className="font-lora text-[#0D0A35] text-[20px] font-[700] mb-2">Ready to apply?</h2>
                <p className="text-gray-500 text-[12px] mb-6">Secure your placement — spots fill fast.</p>
                
                <div className="bg-[#E6F6EC] border border-[#B7E4C7] rounded-[8px] p-3 mb-6 flex items-center gap-2 text-[#2D6A4F] text-[12px] font-semibold">
                  <div className="w-2 h-1 rounded-full bg-[#2D6A4F]" />
                  Intake opens on 1st & 3rd Monday of each month
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-[#4E4A72] text-[14px] ">
                    <span>University Internship (4 wks)</span>
                    <span className="text-[#1a237e] text-lg font-bold">€ 650</span>
                  </div>
                  <div className="flex justify-between items-center text-[#4E4A72] border-t border-gray-100 text-[14px] ">
                    <span>Each additional week</span>
                    <span className="text-[#1a237e] text-lg font-bold">€ 95</span>
                  </div>
                  <div className="flex justify-between items-center text-[#4E4A72] text-[14px]  border-t-b border-gray-100 pt-4">
                    <span>From week 10 onwards</span>
                    <span className="text-[#1a237e] text-lg font-bold">€ 95 / wk</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-[var(--blue)] text-white py-4 rounded-[10px]  text-[15px] hover:bg-[#1a237e] transition-colors">
                    Apply for This Internship
                  </button>
                  <button className="w-full bg-white border-2 border-gray-100 text-[var(--blue)] py-4 rounded-[12px] font-semibold text-[15px] hover:border-[var(--blue)] transition-all">
                    Ask a Question
                  </button>
                </div>

                <p className="text-center text-gray-400 text-[11px] mt-6 leading-relaxed font-medium">
                  No experience required. Open year-round. <br />
                  Minimum age: 18 years old - Entrance fee is non-refundable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-12 bg-white">
        <div className=" mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 h-[300px] lg:h-[420px]">
            {/* Left: Large Feature Image */}
            <div className="relative rounded-l-[32px] overflow-hidden shadow-sm group">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                alt="Children in classroom"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right: Stacked Images */}
            <div className="grid grid-rows-2 gap-2">
              <div className="relative rounded-tr-[32px] overflow-hidden shadow-sm group">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104&auto=format&fit=crop"
                  alt="ECD Classroom Activity"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-2 left-6 text-white text-[15px] font-medium  px-3 py-1  ">
                  ECD Classroom Activity, Okhaldhunga
                </div>
              </div>
              <div className="relative rounded-br-[32px] overflow-hidden shadow-sm group">
                <Image
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
                  alt="Creative Arts Workshop"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-2 left-6 text-white text-[15px] font-medium  px-3 py-1  ">
                  Creative Arts Workshop with Children
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-12 bg-white">
        <div className=" mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Side: Content and Stats */}
          <div className="lg:col-span-7">
            <div className="mb-12">
              <span className="text-[var(--blue)] font-bold  text-[11px] tracking-[0.15em] uppercase mb-4 block">
                PROJECT OVERVIEW
              </span>
              <h2   className="text-[30px] font-lora font-[700] text-[#0D0A35] leading-[1.2] mb-8">
                Internship on{" "}
                <span className="text-[var(--blue)] font-bold">
                  Child Development
                </span>{" "}
                in Nepal
              </h2>

              <div className="space-y-10 text-[#44403C]  text-[18px] leading-relaxed">
                <p>
                  In developed countries, an internship is a very crucial part of
                  a student's academic career. In Nepal, the practice of
                  internship has just evolved — universities and colleges have now
                  included internship programs in their academic curriculum to
                  move away from purely theoretical education systems.
                </p>
                <p>
                  VIN usually has many international and national volunteers and
                  interns participating in our various community volunteer and
                  internship programs. VIN has several volunteer and internship
                  projects designed to achieve the goal of a holistic community
                  development approach. We empower disadvantaged communities
                  through six major development projects — women's empowerment,
                  community health, children's development, and youth
                  empowerment.
                </p>
                <p>
                  Our four pillars of development initiatives are education,
                  health, income, and basic infrastructure — all vital for
                  empowering disadvantaged rural communities. Children's
                  Development is a major programme of VIN's approach to holistic
                  and integrated community empowerment, following the guiding
                  principles of the{" "}
                  <strong className=" text-[#1D1E2C]">
                    Convention on the Rights of the Child (1989)
                  </strong>
                  : right to Survival, Protection, Development, and
                  Participation.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className=" grid grid-cols-2 md:grid-cols-4 border border-[#E7E5E0] rounded-xl overflow-hidden mt-16">
              {[
                { number: "55+", label: "ECD Centres Established" },
                {
                  number: "32.6%",
                  label: "of Nepal's population are children under 14",
                },
                {
                  number: "10,630",
                  label: "Children benefitted via School Infrastructure",
                },
                {
                  number: "4 in 10",
                  label: "Children suffer from stunting in Nepal",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className={`p-8 text-center ${
                    idx !== 3 ? "border-r border-[#E5E7EB]" : ""
                  }`}
                >
                  <div className="text-[32px]  font-lora font-bold text-[var(--blue)] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[14px]   text-[#6B7280] font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Cards */}
          <div className="lg:col-span-5 space-y-8">
            {/* Program Fees Card */}
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-8 ">
              <h3 className="text-[16px]  font-[700] text-[#44403C] mb-8">
                Program Fees
              </h3>
              <div className="space-y-2 mb-8 ">
                <div className="flex justify-between items-center">
                  <span className="text-[#78716C] text-[16px]">
                    University Internship (4 weeks)
                  </span>
                  <span className="text-[#1D1E2C] text-[14px] font-[600]">
                    € 650
                  </span>
                </div>
                <div className="flex justify-between items-center border-t border-[#E7E5E0] pt-6">
                  <span className="text-[#78716C] text-[14px]">
                    Each additional week
                  </span>
                  <span className="text-[#1D1E2C] text-[14px] font-[600]">
                    € 95
                  </span>
                </div>
                <div className="flex justify-between items-center border-t border-[#E7E5E0] pt-6">
                  <span className="text-[#78716C] text-[14px]">
                    From week 5 onwards
                  </span>
                  <span className="text-[#1D1E2C] text-[14px] font-[600]">
                    € 95/week
                  </span>
                </div>
              </div>

              <div className="bg-[#FFF8E6] border-l-[3.5px] border-[#D97706] p-5 rounded-[18px] mb-4">
                <p className="text-[#4E4E5E] text-[13px] italic leading-relaxed">
                  Fees cover accommodation, meals, airport pickup, induction,
                  mentoring & community project support.
                </p>
              </div>

              <button className="w-full bg-[var(--blue)]  text-white py-4 px-4 rounded-[12px] font-semibold text-[15px] hover:bg-opacity-90 transition-all">
                Apply for This Internship
              </button>
            </div>

            {/* Program Details Card */}
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-8 ">
              <h3 className="text-[18px]  font-bold text-[#1D1E2C] mb-6">
                Program Details
              </h3>
              <div className="space-y-0 divide-y divide-[#E5E7EB]">
                {[
                  { label: "Program Type", value: "University Internship" },
                  { label: "Minimum Duration", value: "4 Weeks" },
                  { label: "Availability", value: "Year-Round" },
                  { label: "Intake Dates", value: "1st & 3rd Monday" },
                  { label: "Minimum Age", value: "18+ (16-17 with consent)" },
                  {
                    label: "Location",
                    value: "Kathmandu, Okhaldhunga, Nuwakot",
                  },
                  {
                    label: "Accommodation",
                    value: "Host Family (Nepal Standard)",
                  },
                  { label: "Meals", value: "3 meals/day included" },
                ].map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-start text-[14px] py-4 first:pt-0 last:pb-0"
                  >
                    <span className="text-[#6B7280] text-[14px] font-[500] ">
                      {detail.label}
                    </span>
                    <span className="text-[#1D1E2C]  font-[700] text-right max-w-[200px]">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-12 ">
        <div className=" mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Side: Content */}
          <div className="lg:col-span-7">
            <div className="mb-12">
              <span className="text-[var(--blue)] font-bold text-[11px] tracking-[0.15em] uppercase mb-4 block">
                THE CHALLENGE
              </span>
              <h2   className="text-[30px] font-[700] font-lora text-[#0D0A35] leading-[1.2] mb-8">
                Why This Work{" "}
                <span className="text-[var(--blue)] font-[700] font-lora">
                  Matters
                </span>
              </h2>

              <div className="space-y-6 text-[#4E4E5E] text-[16px] leading-relaxed">
                <p>
                  Nepal, being one of the poorest countries with over one-fourth
                  of its population living under the poverty line, is a place
                  where child rights are often overlooked. Instead of sending
                  children to school, parents make their children do household
                  chores. The two main reasons are poverty and lack of awareness.
                </p>
                <p>
                  In rural communities, when children are barely teenagers, they
                  are often forced into early marriage. Uneducated and unaware,
                  these children lack the skills they need to sustain a healthy
                  life. Many children end up on the streets begging, while a
                  significant number are sold abroad into labour or sex trade.
                </p>
                <p>
                  Children are by nature the most vulnerable section of the
                  population in Nepal — always at a constant threat for survival.
                  VIN's programme ensures the basic rights of a child are met,
                  aiming to improve a child's holistic development — physical,
                  mental, social, emotional, and creative.
                </p>
                <p className="pt-4">
                  <strong className="text-[#1D1E2C]">
                    By 2030, VIN aims to educate 100% of children
                  </strong>{" "}
                  and ensure child rights are practised in all its working
                  disadvantaged communities.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact & Recommendation */}
          <div className="lg:col-span-5 space-y-4">
            {/* Get in Touch Card */}
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-4">
              <h3 className="text-[20px]   font-bold text-[#1D1E2C] mb-8">
                Get in Touch
              </h3>

              <div className="space-y-4 mb-1">
                <div className="flex items-center gap-1">
                  <div className="w-10 h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[var(--blue)]">
                    <Mail size={18} />
                  </div>
                  <a
                    href="mailto:support@vin.org.np"
                    className="text-[var(--blue)] text-[14px] font-medium hover:text-[var(--blue)]"
                  >
                    support@vin.org.np
                  </a>
                </div>

                <div className="flex items-center gap-4 border-t border-[#F3F4F6] pt-6">
                  <div className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[var(--blue)]">
                    <Phone size={18} />
                  </div>
                  <span className="text-[#4E4E5E] text-[14px] font-medium">
                    +977 (1) 4362560
                  </span>
                </div>

                <div className="flex items-center gap-4 border-t border-[#F3F4F6] pt-6">
                  <div className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[var(--blue)]">
                    <MapPin size={18} />
                  </div>
                  <span className="text-[#4E4E5E] text-[14px] font-medium">
                    Nayabazaar Khusibu, Kathmandu
                  </span>
                </div>
              </div>

              <button className="w-full border-2 border-[var(--blue)] text-[var(--blue)] mt-4 py-2 rounded-[10px] font-[500] text-[16px] hover:bg-[var(--blue)] hover:text-white transition-all">
                Send a Message
              </button>
            </div>

            {/* Recommendation Card */}
            <div className="bg-[#EEEEFF] rounded-[24px] border border-[#D1D5DB] p-10">
              <div className="mb-4 text-[#F7941D]">
                <Medal size={32} fill="currentColor" />
              </div>
              <h4 className="text-[20px] font-bold text-[var(--blue)] font-lora mb-4">
                Recommended by Lonely Planet
              </h4>
              <p className="text-[#4E4E5E] text-[16px]  leading-[24px]">
                VIN is a certified CCIVS member maintaining official relations
                with UNESCO. Operating sustainably since 2005.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Role Section */}
      <section className="py-12 bg-white">
        <div className=" mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Side: Content (Aligned with upper sections) */}
          <div className="lg:col-span-7">
            <div className="mb-12">
              <span className="text-[var(--blue)] font-bold text-[11px] tracking-[0.15em] uppercase mb-4 block">
                YOUR ROLE
              </span>
              <h2   className="font-lora text-[30px] font-[700] text-[#0D0A35] leading-[1.2] mb-8">
                What Will{" "}
                <span className="text-[var(--blue)] font-[700] font-lora">
                  You
                </span>{" "}
                Do?
              </h2>
              <p className="text-[#4E4E5E] text-[16px] leading-relaxed mb-12">
                As a child development intern with VIN, you will work directly
                in communities to support children aged 3–14 through education,
                health, and protection programs. Activities are designed around
                the UN Child Rights Convention and VIN's holistic development
                approach.
              </p>

              {/* Grid of Role Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "ECD Centre Support",
                    icon: <School size={20} />,
                    text: "Assist at Early Childhood Development centres — supporting children aged 3–5 with creative, child-friendly teaching methodologies and motor-neuron skill development.",
                  },
                  {
                    title: "Academic & Life Skills Teaching",
                    icon: <BookOpen size={20} />,
                    text: "Assist in academic lesson plans and engage children in self-expression, creative arts, and structured life skills sessions at schools and community centres.",
                  },
                  {
                    title: "Children's Clubs & Activities",
                    icon: <Users size={20} />,
                    text: "Organise and lead children's clubs that develop leadership, communication, creativity, and teamwork. Evaluate club participation and learning effectiveness.",
                  },
                  {
                    title: "Health Awareness Campaigns",
                    icon: <Stethoscope size={20} />,
                    text: "Organise health campaigns and workshops — fitness, hygiene, and nutrition — to promote overall well-being among children and their families.",
                  },
                  {
                    title: "Child Protection Awareness",
                    icon: <ShieldCheck size={20} />,
                    text: "Conduct awareness sessions on children's rights and protection, coordinate with teachers and school management committees to create safe, child-friendly environments.",
                  },
                  {
                    title: "Parenting & Community Engagement",
                    icon: <HeartHandshake size={20} />,
                    text: "Conduct workshops promoting positive parenting practices, provide guidance on child development and discipline strategies, and monitor impact on reducing violence against children.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-[18px] border border-[#E5E7EB] p-10 hover: transition-shadow group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[var(--blue)] mb-6 group-hover:bg-[var(--blue)] group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-[16px] font-bold text-[#1D1E2C] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#6B7280] text-[13px] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Empty (As requested to align with left column) */}
          <div className="lg:col-span-5" />
        </div>
      </section>

      {/* UN Alignment & Eligibility Sections */}
      <section className="py-12 bg-white">
        <div className=" mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            {/* UN Alignment */}
            <div className="mb-24">
              <span className="text-[var(--blue)] font-[700] text-[11px] tracking-[0.15em] uppercase mb-4 block">
                UN ALIGNMENT
              </span>
              <h2   className="text-[36px] font-[700] font-lora text-[#0D0A35] leading-[1.2] mb-8">
                Sustainable Development{" "}
                <span className="text-[var(--blue)] font-[700] font-lora">
                  Goals
                </span>
              </h2>
              <p className="text-[#4E4E5E] text-[16px] leading-relaxed mb-8">
                All projects under VIN's Children's Development Programme are
                designed based on the four guiding principles of the{" "}
                <strong className="text-[#1D1E2C]">
                  UN Child Rights Convention (CRC) 1989
                </strong>
                : Non-discrimination, Best Interest of the Child, Survival &
                Development, and Participation & Inclusion. VIN's work aligns
                with the following UN Sustainable Development Goals:
              </p>

              {/* SDG Badges */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-[12px] bg-[#FEF3C7] text-[#F7941D] text-[13px] font-bold border border-[#FDE68A]">
                  <span className="text-base">🎯</span> SDG 1 — No Poverty
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-[12px] bg-[#DBEAFE] text-[#007BFF] text-[13px] font-bold border border-[#BFDBFE]">
                  <span className="text-base">📚</span> SDG 4 — Quality Education
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-[12px] bg-[#D1FAE5] text-[#2D6A4F] text-[13px] font-bold border border-[#A7F3D0]">
                  <span className="text-base">❤️</span> SDG 3 — Good Health &
                  Well-being
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-[12px] bg-[#EDE9FE] text-[#7E22CE] text-[13px] font-bold border border-[#DDD6FE]">
                  <span className="text-base">⚖️</span> SDG 10 — Reduced
                  Inequalities
                </div>
              </div>
            </div>

            {/* Eligibility */}
            <div>
              <span className="text-[var(--blue)] font-bold text-[11px] tracking-[0.15em] uppercase mb-4 block">
                ELIGIBILITY
              </span>
              <h2   className="text-[36px] font-[700]  font-lora text-[#0D0A35] leading-[1.2] mb-8">
                Who Should{" "}
                <span className="text-[var(--blue)]  text-[36px] font-[700] font-lora">
                  Apply?
                </span>
              </h2>
              <p className="text-[#4E4E5E] text-[16px] leading-relaxed mb-12">
                This internship is open to students and graduates from diverse
                backgrounds. No prior experience in child development is
                required — VIN will provide full training and ongoing support
                throughout your placement.
              </p>

              {/* Grid of Eligibility Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    text: "University or college students seeking academic internship credit",
                    icon: <GraduationCap size={18} />,
                  },
                  {
                    text: "Recent graduates in Education, Psychology, Social Work, or Public Health",
                    icon: <User size={18} />,
                  },
                  {
                    text: "International volunteers aged 18+ (16–17 with guardian consent)",
                    icon: <Globe size={18} />,
                  },
                  {
                    text: "Individuals passionate about child rights, education, and community empowerment",
                    icon: <Lightbulb size={18} />,
                  },
                  {
                    text: "Basic English communication skills (for international interns)",
                    icon: <MessageSquare size={18} />,
                  },
                  {
                    text: "Willingness to undergo VIN's background check and safeguarding orientation",
                    icon: <ClipboardCheck size={18} />,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-[16px] p-5 hover:border-[var(--blue)] transition-colors group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#F3F4F6] flex items-center justify-center text-[var(--blue)] group-hover:bg-[var(--blue)] group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <p className="text-[#4E4E5E] text-[13px] font-medium leading-snug">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Side: Empty to maintain alignment */}
          <div className="lg:col-span-5" />
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-12 bg-white">
        <div className=" mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <span className="text-[var(--blue)] font-bold text-[11px] tracking-[0.15em] uppercase mb-4 block">
              PROGRAM FEES
            </span>
            <h2   className="text-[36px] font-[700] font-lora text-[#0D0A35] leading-[1.2] mb-8">
              What's{" "}
              <span className="text-[var(--blue)] font-[700] font-lora">
                Included?
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Included */}
              <div className="bg-[#FBFDFB] border border-[#E6F4E6] border-t-4 border-t-green-500 p-8 shadow-sm">
                <div className="flex items-center gap-2 text-green-600 font-bold text-[14px] mb-8">
                  <CheckCircle2 size={18} />
                  Included In Program Fee
                </div>
                <ul className="space-y-4">
                  {[
                    "Food & accommodation during arrival orientation at VIN's hostel / budget hotel (shared)",
                    "Food & accommodation during placement with a Nepali host family — 3 meals per day, Nepali standard",
                    "Airport pick-up and one-time transport to and from the project site",
                    "Comprehensive 2–3 day induction: Nepali language, culture, health & safety, project-specific training",
                    "Regular mentoring, follow-up support by phone, WhatsApp, and email",
                    "Free wireless internet at VIN office",
                    "VIN admin costs, staff salaries, and community project funding",
                    "Meeting and socialising with international volunteers and interns",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-[13px] text-[#4E4E5E] leading-relaxed"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-green-500 shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Included */}
              <div className="bg-[#FFFBFB] border border-[#FDEEEE] border-t-4 border-t-red-400  p-8 shadow-sm">
                <div className="flex items-center gap-2 text-red-500 font-bold text-[14px] mb-8">
                  <XCircle size={18} />
                  Not Included (Your Responsibility)
                </div>
                <ul className="space-y-4">
                  {[
                    "Airfare and VISA fees (Tourist Visa: 15 days US$25, 30 days US$40, 90 days US$100)",
                    "Vaccinations, travel insurance, and medical insurance",
                    "Return airport transfer",
                    "Stationery during volunteering period (if required)",
                    "Breakfast & dinner during induction (~€5/day)",
                    "Personal travel, weekend sightseeing, laundry, and entertainment",
                    "Entrance fees to cultural heritage sites (~$22 max)",
                    "Gifts to project staff and host family (optional)",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-[13px] text-[#4E4E5E] leading-relaxed"
                    >
                      <XCircle
                        size={16}
                        className="text-red-400 shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Right Side: Empty to maintain alignment */}
          <div className="lg:col-span-5" />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-white">
        <div className=" mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <span className="text-[var(--blue)] font-bold text-[11px] tracking-[0.15em] uppercase mb-4 block">
              YOUR JOURNEY
            </span>
            <h2   className="text-[36px] font-[700] font-lora text-[#0D0A35] leading-[1.2] mb-12">
              How{" "}
              <span className="text-[var(--blue)] font-[700] font-lora">
                It Works
              </span>
            </h2>

            <div className="space-y-0">
              {[
                {
                  title: "Apply Online",
                  text: "Submit your application through VIN's online form. Placements are limited — book in advance to secure your spot. Projects are open year-round with intakes on the 1st and 3rd Monday of each month.",
                  icon: <Edit3 size={18} />,
                },
                {
                  title: "Arrive in Kathmandu",
                  text: "Upon arrival at Kathmandu Tribhuvan International Airport (TIA), you will be greeted by VIN staff and transported to your hotel or hostel. Please arrive one day before the induction start date.",
                  icon: <Plane size={18} />,
                },
                {
                  title: "Induction Program (2–3 Days)",
                  text: "A comprehensive orientation covering Nepali language and culture basics, health and safety guidance, project-specific training, and time to connect with fellow volunteers and interns.",
                  icon: <Home size={18} />,
                },
                {
                  title: "Host Family Placement",
                  text: "You will live with a Nepali host family — an essential and immersive part of the VIN experience. All host families are experienced in welcoming volunteers, and VIN staff provide 24/7 support.",
                  icon: <Leaf size={18} />,
                },
                {
                  title: "Internship Work at Project Sites",
                  text: (
                    <>
                      You will be placed in one of VIN's working areas:{" "}
                      <strong>Tarakeshor Municipality</strong> (Kathmandu),{" "}
                      <strong>Taluwa, Thulachhap, and Bhadaure</strong> (Okhaldhunga),
                      or <strong>Okharpouwa and Kaule</strong> (Nuwakot district).
                      Work runs Monday–Friday.
                    </>
                  ),
                  icon: <Briefcase size={18} />,
                },
                {
                  title: "Certificate & Completion",
                  text: "Upon successful completion, you receive a formal internship certificate from VIN. Throughout your placement, VIN maintains regular check-ins and continuous feedback with your volunteer coordinator.",
                  icon: <Award size={18} />,
                },
              ].map((step, idx) => (
                <div key={idx} className="relative pl-20 pb-12 last:pb-0">
                  {/* Vertical Line */}
                  {idx !== 5 && (
                    <div className="absolute left-[20px] top-[40px] bottom-0 w-[2px] bg-gray-100" />
                  )}

                  {/* Icon Circle */}
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full border-2 border-[var(--blue)] bg-white flex items-center justify-center text-[var(--blue)] z-10">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-[18px] font-bold text-[#1D1E2C] mb-2">
                      {idx + 1}. {step.title}
                    </h3>
                    <p className="text-[#6B7280] text-[14px] leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right Side: Empty to maintain alignment */}
          <div className="lg:col-span-5" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-14 bg-[var(--blue)] text-white">
        <div className=" mx-auto px-6">
          <div className="mb-16">
            <span className="text-white/60 font-bold text-[11px] tracking-[0.15em] uppercase mb-4 block">
              WHAT INTERNS SAY
            </span>
            <h2   className="font-lora text-[42px] font-[700] text-white leading-[1.2]">
              Real Experiences, Real Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "I chose the Childcare and Development program together with my sister. For those who like to enjoy the mountains and don't mind being a bit isolated, it is a perfectly fine location. An amazing experience.",
                name: "Angelika & Katalin",
                role: "Child Development Intern, Germany",
                initial: "A",
              },
              {
                quote:
                  "An amazing and unique experience with VIN to feel the Nepalese culture from inside and help marginalized communities. I recommend it — it is a very serious and caring organisation.",
                name: "Maria S.",
                role: "Education Intern, Netherlands",
                initial: "M",
              },
              {
                quote:
                  "It has been a life-changing experience. I found myself very comfortable adapting to the local culture as everyone tried their best to make me feel welcome. A very different type of social work I will never forget.",
                name: "Jonas K.",
                role: "Child Development Intern, Austria",
                initial: "J",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-[24px] p-8 flex flex-col h-full hover:bg-white/15 transition-colors"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6 text-[#FFD700]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/90 text-[15px] leading-relaxed mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-[14px]">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-[12px] text-white/60">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-14 bg-[#F8F9FA] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-[var(--blue)] font-bold text-[11px] tracking-[0.15em] uppercase mb-6 block">
            READY TO MAKE A DIFFERENCE?
          </span>
          <h2   className="font-lora text-[48px] font-[700] text-[#0D0A35] leading-tight mb-8">
            Start Your Journey in{" "}
            <span className="text-[var(--blue)] font-[700]">
              Nepal
            </span>{" "}
            Today
          </h2>
          <p className="text-[#4E4E5E] text-[18px] leading-relaxed mb-12 max-w-2xl mx-auto">
            Join the thousands of international interns who have found their
            calling in the Himalayas. Your contribution can help empower a
            community and change a life — including your own.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[var(--blue)] text-white px-8 py-4 rounded-[12px] font-bold text-[16px] flex items-center gap-2 hover:bg-opacity-90 transition-all group shadow-lg shadow-blue-900/10">
              Apply Now for This Internship
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button className="bg-white border-2 border-[#E5E7EB] text-[#0D0A35] px-8 py-4 rounded-[12px] font-bold text-[16px] hover:border-[var(--blue)] transition-all">
              Contact VIN
            </button>
          </div>
        </div>
      </section>

      {/* Related Programs Section */}
      <section className="py-14 bg-white overflow-hidden">
        <div className=" mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[var(--blue)] font-bold text-[11px] tracking-[0.15em] uppercase mb-4 block">
                EXPLORE MORE
              </span>
              <h2   className="font-lora text-[42px] font-[700] text-[#0D0A35] leading-[1.2]">
                Related Programs at VIN
              </h2>
            </div>
          </div>

          <div className="relative pr-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  category: "TEACHING",
                  categoryColor: "bg-[#F3E8FF] text-[#7E22CE]",
                  title: "Teaching Volunteer Program",
                  text: "Teach English in public schools, Buddhist monasteries, and community centres. Help improve literacy and education outcomes in rural Nepal.",
                  image:
                    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
                },
                {
                  category: "PUBLIC HEALTH",
                  categoryColor: "bg-[#E6F6EC] text-[#2D6A4F]",
                  title: "Public Health Internship",
                  text: "Address local health challenges, promote hygiene and nutrition awareness, and gain professional skills in Nepal's healthcare sector.",
                  image:
                    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
                },
                {
                  category: "WOMEN'S EMPOWERMENT",
                  categoryColor: "bg-[#FFF1E0] text-[#F7941D]",
                  title: "Gender Equality Internship",
                  text: "Join VIN's gender equality program — empower women through education, skill-building, and awareness campaigns across rural communities.",
                  image:
                    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
                },
              ].map((program, idx) => (
                <div
                  key={idx}
                  className="bg-[#FBFBFC] rounded-[24px] border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold mb-4 ${program.categoryColor}`}
                    >
                      {program.category}
                    </span>
                    <h3 className="text-[18px] font-bold text-[#1D1E2C] mb-4">
                      {program.title}
                    </h3>
                    <p className="text-[#6B7280] text-[13px] leading-relaxed mb-6">
                      {program.text}
                    </p>
                    <Link
                      href="#"
                      className="text-[var(--blue)] font-bold text-[13px] flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Explore program <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation Button (Positioned in the whitespace) */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden xl:block z-10">
              <button className="w-12 h-12 rounded-full bg-[#FBFBFC] border border-gray-200 flex items-center justify-center text-gray-600 shadow-sm hover:border-[var(--blue)] hover:text-[var(--blue)] transition-all">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}

