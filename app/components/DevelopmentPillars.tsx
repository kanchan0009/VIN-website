"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const tabs = [
  { id: "education", label: "Education" },
  { id: "health", label: "Health and environment" },
  { id: "economy", label: "Economy" },
  { id: "infrastructure", label: "Basic infrastructure" },
];

const tabContent = {
  education: {
    title: "Education",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80",
    paragraphs: [
      "Education is one of the major pillars of development- Education is the inevitable aspect of our development approach. To imagine an empowered community without educating its people is impossible.",
      "The major social issues we face in Nepal are: corruption, poverty, hunger, unemployment, illiteracy, gambling, smuggling, bullying, drug abuse, drug addiction, alcoholism, vandalism, robbery and theft, illegal hunting and poaching, sexual assault, gender and caste discrimination, domestic violence, rape, female foetus killing, women trafficking, child labour, child abuse, child marriage, early marriage, dowry system, superstitious beliefs like chhaupadi pratha, witch / witch doctor, injustice, nepotism, abuse of media, declining of ethnicity, political instability, misuse youth by political parties in academic institutions, marginalization, trade deficit, youth migration, discrimination to transgender / differently able people, political conflict, unplanned urbanization.",
      "The most issues mentioned above are due to lack of proper education. So at VIN, to achieve our vision of \"a peaceful, prosperous and equitable society throughout Nepal\", we first have to educate our people. It's very important to build people's right knowledge, skills and attitude (KSA) for their transformation of life positively. People's knowledge and awareness about what matters to them is very important for the empowerment.",
      "People can build their knowledge formally (by joining an academic institution), non-formally (out of usual school education) or informally (not organized one like learning by doing something). We therefore have education component in each development program.",
      "Our programs are designed to build knowledge and awareness to the people through formal schooling, campaign, workshops, trainings, seminars etc. The women in our working communities receive education and life skills sessions on literacy, women's rights and domestic violence, women trafficking, leadership, team building, effective communication, health education etc.",
      "Children are educated on their basic rights and responsibilities, social life skills and creativity. Youth are also educated on their basic rights & responsibilities. Life skills like leadership, team building, communication, personality development, professionalism development etc.",
      "Entire community people are educated on health & environment. It covers health hygiene and sanitation education, nutrition, infectious and non-communicable / chronic diseases, first aid, women's reproductive health etc.",
      "Farmers are trained on permaculture, agro forestry, organic farming etc. Entire community people are educated on water purification techniques, water resource management, waste management and climate action. People are trained on disaster preparedness and management.",
    ],
  },
  health: {
    title: "Health and environment",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    paragraphs: [
      "Health and environment form the second major pillar of our development approach. A healthy community thrives in a sustainable environment.",
      "We work to improve access to basic healthcare services, promote preventive health practices, and raise awareness about communicable and non-communicable diseases.",
      "Environmental education focuses on climate action, waste management, water conservation, and sustainable agriculture practices.",
      "Our programs train communities on disaster preparedness, environmental conservation, and sustainable resource management to build resilience.",
    ],
  },
  economy: {
    title: "Economy",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
    paragraphs: [
      "Economic empowerment is central to our mission of building self-sufficient communities across Nepal.",
      "We support income generation through skill development, entrepreneurship training, and access to microfinance opportunities.",
      "Our programs focus on sustainable livelihoods, fair trade practices, and connecting communities to broader markets.",
      "We work with farmers, artisans, and small business owners to improve productivity, quality, and market access for their products and services.",
    ],
  },
  infrastructure: {
    title: "Basic infrastructure",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    paragraphs: [
      "Basic infrastructure development is essential for community growth and quality of life improvement in underserved regions of Nepal.",
      "We support construction and improvement of schools, health posts, community centers, and sanitation facilities.",
      "Clean water access, road connectivity, and renewable energy solutions are key focus areas of our infrastructure programs.",
      "Community-led infrastructure projects ensure local ownership, sustainability, and long-term maintenance of all developed assets.",
    ],
  },
};

export default function DevelopmentPillars() {
  const [activeTab, setActiveTab] = useState("education");
  const content = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section className={`bg-[#DFF0FF] py-12 lg:py-24 ${montserrat.className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-2xl lg:text-4xl font-[800] text-[#1D1E20] mb-12 lg:mb-16 leading-tight lg:leading-[1.1] max-w-5xl text-center mx-auto">
          Four areas of development resembling pillars of the house are Education,
          Health & Environment, Economy and Basic infrastructure
        </h1>

        {/* Tab Navigation - Scrolling on Mobile */}
        <div className="overflow-x-auto scrollbar-hide -mx-6 px-6 mb-10">
          <div className="flex lg:justify-between items-center border-b border-gray-200 min-w-max lg:min-w-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-sm lg:text-[16px] transition-all duration-300 font-[800] border-b-2 pb-4 px-4 lg:px-0 ${
                  activeTab === tab.id 
                  ? "text-[#221C84] border-[#221C84]" 
                  : "text-gray-400 border-transparent hover:text-[#221C84]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Content Container */}
        <div className="flex flex-col gap-10">
          {/* Hero Image with Title Overlay */}
          <div className="relative w-full aspect-video lg:h-[450px] rounded-[30px] lg:rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src={content.image}
              alt={content.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-8 lg:pb-12">
              <h2 className="text-3xl lg:text-5xl font-[700] text-white tracking-tight">
                {content.title}
              </h2>
            </div>
          </div>

          {/* Body Text */}
          <div className="max-w-4xl mx-auto space-y-6">
            {content.paragraphs.map((para, i) => (
              <p 
                key={i} 
                className="text-gray-700 text-[14px] lg:text-[15px] leading-relaxed font-[400] text-left lg:text-justify"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
