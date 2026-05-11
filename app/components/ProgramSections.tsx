"use client";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

interface SectionData {
  id: string;
  title: string;
  image: string;
  imageLeft: boolean;
  bgColor: string;
  text: string;
  bullets: string[];
}

const sections: SectionData[] = [
  {
    id: "womens-empowerment",
    title: "Women's empowerment",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    imageLeft: true,
    bgColor: "#F2F1FF",
    text: "The goal is to empower women socially and economically through education, life skills and income generative initiatives. Women of 20-59 years are included in the program.",
    bullets: [
      "Education and Life Skills (ELS)",
      "Micro Credit Cooperative (MCC)",
      "Women's Entrepreneurship Development (WED)",
      "Women's Trafficking Prevention Education (WTPE) and",
      "Continuous research on Gender Issues",
    ],
  },
  {
    id: "youth-empowerment",
    title: "Youth empowerment",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    imageLeft: false,
    bgColor: "#FFFFFF",
    text: "The goal is to empower youth social and economically through education, life skills and entrepreneurship development. Youth of 16-30 age groups are included in the program.",
    bullets: [
      "Youth Club & Life Skills Facilitation",
      "Youth Entrepreneurship Development",
      "English, IT & Career Development",
      "Volunteering in the community projects and",
      "Research on youth issues",
    ],
  },
  {
    id: "childrens-development",
    title: "Children's Development",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80",
    imageLeft: true,
    bgColor: "#F2F1FF",
    text: "The goal of Children's Development is achieved by coordinating and managing the following holistic areas to ensure every child reaches their full potential.",
    bullets: [
      "Children's Life-skills Facilitation (CLF) through children's clubs",
      "Child Protection & Rights Advocacy",
      "Early Childhood Development Education (ECDE)",
      "Children's Education Sponsorship Program",
      "School Infrastructure Development (SID)",
      "Teachers' Professional Development (TD)",
      "Children's innovation & Creativity",
      "Research on children's issues",
    ],
  },
  {
    id: "public-health",
    title: "Public Health and Medical Care",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    imageLeft: false,
    bgColor: "#FFFFFF",
    text: "Through primary health and medical interventions at the community level, we aim to provide accessible, preventive, and curative health services to underserved communities.",
    bullets: [
      "Community Health Education: Sanitation & Hygiene (WASH)",
      "Psycho-social support and Wellness Programs",
      "Yoga, Meditation, and Fitness Initiatives",
      "Medical Camps and Primary Care Services",
      "Research on public health issues",
    ],
  },
  {
    id: "environment",
    title: "Environment conservation",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
    imageLeft: true,
    bgColor: "#F2F1FF",
    text: "We aim to promote practices that protect and restore the natural environment across our working communities through sustainable systems.",
    bullets: [
      "Permaculture systems for sustainable food production",
      "Conservation and protection of forest resources",
      "Community-led waste management initiatives",
      "Research on climate change and pollution control",
    ],
  },
  {
    id: "disaster-risk",
    title: "Disaster Risk Reduction (DRR)",
    image:
      "https://images.unsplash.com/photo-1569427759983-6b3c4a9cba0c?w=800&q=80",
    imageLeft: false,
    bgColor: "#FFFFFF",
    text: "Nepal is highly vulnerable to natural disasters. Our DRR programs build community resilience through education, preparedness, and response planning.",
    bullets: [
      "Disaster preparedness training and simulation",
      "Community-based risk assessment and planning",
      "Post-disaster reconstruction & volunteer coordination",
      "Research on regional disaster risks",
    ],
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 space-y-2">
      {items.filter(Boolean).map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-gray-700 text-[14px] lg:text-[15px] leading-relaxed group"
        >
          <span className="text-[var(--blue)] mt-1.5 flex-shrink-0 text-[10px] group-hover:scale-125 transition-transform">
            ●
          </span>
          <span className="font-[600]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Section({ section }: { section: SectionData }) {
  const { title, image, imageLeft, bgColor, text, bullets } = section;

  return (
    <section 
      style={{ backgroundColor: bgColor }}
      className={`py-10 lg:py-12 ${montserrat.className}`}
    >
      <div className=" mx-auto px-6">
        <div 
          className={`flex flex-col ${
            imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
          } gap-12 lg:gap-24 items-center`}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square lg:aspect-[4/4.5] overflow-hidden shadow-2xl">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl lg:text-[32px] font-[700] text-[#1D1E20] mb-1 leading-tight">
              {title}
            </h2>
            <div className="space-y-2">
              <p className="text-[#212121] text-[15px] lg:text-[16px] leading-relaxed font-[400]">
                {text}
              </p>
              <div className="mt-3">
                <p className="text-[#212121] text-[14px] lg:text-[18px] leading-relaxed font-[700] ">
                  We achieve the goal of {title.toLowerCase()} program by implementing the following holistic projects:
                </p>
                <BulletList items={bullets} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProgramSections() {
  return (
    <div className="bg-white">
      {sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </div>
  );
}

