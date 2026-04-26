"use client";

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
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80",
    imageLeft: true,
    bgColor: "#fff",
    text: "We work to empower women through transformative programs that address the social, economic, and health dimensions of their lives.",
    bullets: [
      "Education and Life Skills (ELS)",
      "Maternal Health Programme (MHP)",
      "Women's Entrepreneurship Development (WED)",
      "Women's Empowerment through Education (WEE) and",
      "Continuous Innovative Gender Issues",
    ],
  },
  {
    id: "youth-empowerment",
    title: "Youth empowerment",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80",
    imageLeft: false,
    bgColor: "#f9f9f9",
    text: "We recognize youth as agents of change. Our youth programs focus on skill building, leadership, and active community participation so young people can drive sustainable development.",
    bullets: [
      "Youth Club & Life Skills Facilitation",
      "Youth Entrepreneurship Development",
      "Leadership & Team Building",
      "Volunteering in the community programs and",
      "Research on youth issues",
    ],
  },
  {
    id: "childrens-development",
    title: "Children's Development",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500&q=80",
    imageLeft: true,
    bgColor: "#fff",
    text: "The goal of Children's Development is achieved by coordinating and managing the following areas.",
    bullets: [
      "Children's Life-skills Facilitation (CLF) through children's clubs",
      "Child Protection",
      "Early Childhood Development Education (ECDE)",
      "",
      "Children's Education Sponsorship",
      "School Infrastructure Development (SID)",
      "Teachers' Development (TD)",
      "Children's innovation (CI)",
      "Research on children's issues",
    ],
  },
  {
    id: "public-health",
    title: "Public Health and Medical Care",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80",
    imageLeft: false,
    bgColor: "#f9f9f9",
    text: "Through primary health and medical interventions from community level, we aim to provide accessible, preventive, and curative health services to underserved communities.",
    bullets: [
      "Community Health Education for community at critical wellness topics: Harm reduction, Sanitation & Hygiene (WASH), Education on health (SHED), Psycho-social support",
      "Yoga, Meditattion, Morming exercise, Fitness",
      "Research on public health issues",
    ],
  },
  {
    id: "environment",
    title: "Environment conservation:",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=500&q=80",
    imageLeft: true,
    bgColor: "#fff",
    text: "We aim to promote practices that protect and restore the natural environment across our working communities.",
    bullets: [
      "Permaculture agricultural systems for sustainable and self-sufficient food production",
      "Conservation and protection of forests and other natural resources within the working communities",
      "Research on nature, climate change, air, dirt and water pollution",
    ],
  },
  {
    id: "disaster-risk",
    title: "Disaster Risk Reduction (DRR)",
    image:
      "https://images.unsplash.com/photo-1569427759983-6b3c4a9cba0c?w=500&q=80",
    imageLeft: false,
    bgColor: "#f9f9f9",
    text: "Nepal is highly vulnerable to natural disasters. Our DRR programs build community resilience through education, preparedness, and response planning.",
    bullets: [
      "Disaster risk reduction preparedness training",
      "Disaster Life reduction preparedness, Earthquake Risk and disaster planning stations",
      "Reconstruction & volunteerism",
      "Research on disaster risk and identified issues",
    ],
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: "1px 0 0 0", padding: 0, listStyle: "none" }}>
      {items.filter(Boolean).map((item, i) => (
        <li
          key={i}
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 5,
            fontSize: 13.5,
            color: "#333",
            lineHeight: 1.5,
          }}
        >
          <span style={{ color: "#c0392b", marginTop: 2, flexShrink: 0 }}>
            •
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Section({ section }: { section: SectionData }) {
  const { title, image, imageLeft, bgColor, text, bullets } = section;

  return (
    <div
      style={{
        background: bgColor,
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          flexDirection: imageLeft ? "row" : "row-reverse",
          gap: 32,
          alignItems: "flex-start",
        }}
      >
        {/* Image */}
        <div style={{ flexShrink: 0, width: 220 }}>
          <img
            src={image}
            alt={title}
            style={{
              width: 220,
              height: 160,
              objectFit: "cover",
              borderRadius: 6,
              display: "block",
            }}
          />
        </div>

        {/* Text */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 20,
              fontWeight: "700",
              color: "#111",
              margin: "0 0 10px 0",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13.5,
              color: "#444",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {text}
          </p>
          <BulletList items={bullets} />
        </div>
      </div>
    </div>
  );
}

export default function ProgramSections() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff" }}>
      {sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </div>
  );
}
