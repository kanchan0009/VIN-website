"use client";

import { useState } from "react";

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
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=900&q=80",
    paragraphs: [
      "Education is one of the major pillars of our development approach. Education is the inevitable aspect of our development approach. To imagine an empowered community without educating its people is impossible.",
      "The major social issues we face in Nepal are corruption, poverty, hunger, unemployment, illiteracy, gambling, smuggling, bullying, drug abuse, drug addiction, alcoholism, vandalism, robbery and theft, illegal hunting and poaching, sexual assault, gender and caste discrimination, domestic violence, rape, female foetus killing, women trafficking, child labour, child abuse, child marriage, early marriage, dowry system, superstitious beliefs like chhaupadi pratha, witch / witch doctor, injustice, nepotism, abuse of media, declining of ethnicity, political instability, misuse youth by political parties in academic institutions, marginalization, trade deficit, youth migration, discrimination to transgender / differently able people, political conflict, unplanned urbanization.",
      "The most issues mentioned above are due to lack of proper education. So at VIN, to achieve our vision of \"a peaceful, prosperous and equitable society throughout Nepal\", we first have to educate our people. It's very important to build people's right knowledge, skills and attitude (KSA) for their transformation of life positively. People's knowledge and awareness about what matters to them is very important for the empowerment.",
      "People can build their knowledge formally (by joining an academic institution), non-formally (out of usual school education) or informally (not organized one like learning by doing something). We therefore have education component in each development program.",
      "Our programs are designed to build knowledge and awareness to the people through formal schooling, campaign, workshops, trainings, seminars etc. The women in our working communities receive education and life skills sessions on literacy, women's rights and domestic violence, women trafficking, leadership, team building, effective communication, health education etc.",
      "Children are educated on their basic rights and responsibilities, social life skills and creativity. Youth are also educated on their basic rights & responsibilities. Life skills like leadership, team building, communication, personality development, professionalism development etc.",
      "Entire community people are educated on health & environment. It covers health hygiene and sanitation education, nutrition, infectious and non-communicable / chronic diseases, first aid, women's reproductive health etc.",
      "Farmers are trained on permaculture, agro forestry, organic farming etc. Entire community people are educated on water purification techniques, water resource management, waste management and climate action. People are trained on disaster preparedness and management.",
    ],
  },
  health: {
    title: "Health and Environment",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
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
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80",
    paragraphs: [
      "Economic empowerment is central to our mission of building self-sufficient communities across Nepal.",
      "We support income generation through skill development, entrepreneurship training, and access to microfinance opportunities.",
      "Our programs focus on sustainable livelihoods, fair trade practices, and connecting communities to broader markets.",
      "We work with farmers, artisans, and small business owners to improve productivity, quality, and market access for their products and services.",
    ],
  },
  infrastructure: {
    title: "Basic Infrastructure",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80",
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
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        maxWidth: 1280,
        margin: "0 auto",
        padding: "40px 24px",
        color: "#1a1a1a",
      }}
    >
      {/* Header */}
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(22px, 4vw, 32px)",
          fontWeight: "700",
          lineHeight: 1.3,
          marginBottom: 32,
          color: "#111",
        }}
      >
        Four areas of development resembling pillars of the house are Education,
        Health &amp; Environment, Economy and Basic infrastructure
      </h1>

      {/* Tab Navigation */}
      <div
        style={{
          display: "flex",
          borderBottom: "2px solid #e0e0e0",
          marginBottom: 32,
          gap: 0,
          flexWrap: "wrap",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "10px 20px",
              fontSize: 14,
              fontWeight: activeTab === tab.id ? "700" : "400",
              color: activeTab === tab.id ? "#c0392b" : "#555",
              background: "none",
              border: "none",
              borderBottom:
                activeTab === tab.id
                  ? "3px solid #c0392b"
                  : "3px solid transparent",
              marginBottom: -2,
              cursor: "pointer",
              transition: "color 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Hero Image with Title Overlay */}
      <div
        style={{
          position: "relative",
          marginBottom: 32,
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <img
          src={content.image}
          alt={content.title}
          style={{
            width: "100%",
            height: 280,
            objectFit: "cover",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(transparent, rgba(0,0,0,0.65))",
            padding: "48px 24px 20px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#fff",
              fontSize: 28,
              fontWeight: "700",
              margin: 0,
              textShadow: "0 1px 4px rgba(0,0,0,0.4)",
            }}
          >
            {content.title}
          </h2>
        </div>
      </div>

      {/* Body Text */}
      <div style={{ lineHeight: 1.75, fontSize: 15 }}>
        {content.paragraphs.map((para, i) => (
          <p key={i} style={{ marginBottom: 16, color: "#333" }}>
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}
