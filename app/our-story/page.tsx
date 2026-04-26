"use client";
import Link from "next/link";
import CTABanner from "../components/CTABanner";
import DonationWidget from "../components/DonationWidget";
import { useState } from "react";

type Milestone = {
  year: string;
  title: string;
  desc: string;
  img: string;
  note?: string;
};

const milestones: Milestone[] = [
  {
    year: "1998",
    title: "A Childhood Shaped by Hunger and Distance",
    desc: "Every morning, Bhupi's mother Rupa would wake up at 5 am to cook rice and curry for the family. Then, she would set off on a 3-hour journey to the closest school.",
    img: "/mnt/agents/upload/image.png",
  },
  {
    year: "1998",
    title: "The Story That Changed Everything",
    desc: "One afternoon, while walking the 3-hour trek to get to school, Bhupi met a man who would alter the course of his life forever.",
    img: "/mnt/agents/upload/image.png",
  },
  {
    year: "1998",
    title: "Bhupi's Initiation",
    desc: "Bhupi's initiation into the world of education was difficult, yet ultimately rewarding. The transition from village life to a structured school environment was challenging.",
    img: "/mnt/agents/upload/image.png",
  },
  {
    year: "1998",
    title: "Bhupi's Initiation",
    desc: "Bhupi persevered. He woke up every morning at 5 am to study before classes began. He stayed up late, practicing English by candlelight.",
    img: "/mnt/agents/upload/image.png",
  },
];

export default function OurStoryPage() {
  const [activeIndex, setActiveIndex] = useState(0); // ❌ WAS OUTSIDE COMPONENT

  return (
    <main>
      {/* Hero */}
      <section className="relative h-80 flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&q=80"
          alt="Our Story"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(20,10,70,0.88) 50%, rgba(0,0,0,0.25) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-10 w-full">
          <p className="text-white/60 text-sm mb-2">
            Home / <span className="text-white">Our Story</span>
          </p>
          <p className="text-white/60 text-xs mb-2">
            The Boys Are Packed And We&apos;re Ready to Go — Facebook Has An
            Audience Of Over 1b. Beside An Image Of A Car, Best Loaded With
            Luggage, Scrolls Under Mt. Tenpura. The Meaning But Not Quite Good
            Enough To Live The Guilty State.
          </p>
          <h1
            className="text-5xl font-bold text-white"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Story
          </h1>
        </div>
      </section>

      {/* Origin Story Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold mb-3"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            THE ORIGIN STORY OF VOLUNTEERS INITIATIVE NEPAL (VIN)
          </h2>
          <p className="text-gray-500 text-sm italic mb-2">
            A human story of hunger, heartbreak, vision, and a movement built
            from the ground up
          </p>
          <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
            In the mountain village of Sindhuli, Nepal, the 1990s were defined
            by two things: extraordinary natural beauty, and extraordinary
            hardship. In this village was born a boy — Bhupi Ghimire — who would
            one day stand in front of world leaders to tell them that
            community-led development was not just an idea. It was the only idea
            that worked.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-8 pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative">
            {/* Vertical line - base light color */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#d4c8b8] transform -translate-x-1/2 hidden lg:block transition-all duration-700" />

            {/* Active vertical line - darker shade up to active milestone */}
            <div
              className="absolute left-1/2 top-0 w-0.5 bg-[#8b7355] transform -translate-x-1/2 hidden lg:block transition-all duration-700 ease-out"
              style={{
                height:
                  activeIndex === -1
                    ? "0%"
                    : activeIndex === 0
                      ? "25%"
                      : activeIndex === 1
                        ? "50%"
                        : activeIndex === 2
                          ? "75%"
                          : "100%",
              }}
            />

            {milestones.map((m, i) => (
              <div
                key={i}
                className={`relative flex flex-col lg:flex-row gap-8 mb-16 cursor-pointer transition-all duration-500 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                onClick={() => setActiveIndex(i)}
              >
                {/* Year dot */}
                <div
                  className={`hidden lg:flex absolute left-1/2 top-8 transform -translate-x-1/2 w-10 h-10 rounded-full items-center justify-center text-white text-xs font-bold z-10 transition-all duration-500 ${activeIndex === i ? "scale-125 shadow-lg" : ""}`}
                  style={{
                    background: activeIndex === i ? "#6b5a45" : "#c4b5a0",
                    boxShadow:
                      activeIndex === i
                        ? "0 0 0 6px rgba(107, 90, 69, 0.2)"
                        : "none",
                  }}
                >
                  {m.year.slice(2)}
                </div>

                {/* Content */}
                <div
                  className={`flex-1 max-w-sm transition-all duration-500 ${i % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}
                >
                  <div
                    className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-500 relative ${activeIndex === i ? "shadow-2xl scale-[1.02]" : ""}`}
                  >
                    <img
                      src={m.img}
                      alt={m.title}
                      className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {/* Darker shade overlay - appears when active */}
                    <div
                      className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(60, 50, 40, 0.35) 0%, rgba(40, 30, 20, 0.55) 50%, rgba(60, 50, 40, 0.4) 100%)",
                        opacity: activeIndex === i ? 1 : 0,
                      }}
                    />
                    {/* Decorative corner accents */}
                    <div
                      className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 transition-all duration-500"
                      style={{
                        borderColor:
                          activeIndex === i ? "#8b7355" : "transparent",
                        opacity: activeIndex === i ? 1 : 0,
                      }}
                    />
                    <div
                      className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 transition-all duration-500"
                      style={{
                        borderColor:
                          activeIndex === i ? "#8b7355" : "transparent",
                        opacity: activeIndex === i ? 1 : 0,
                      }}
                    />
                  </div>
                </div>
                <div
                  className={`flex-1 max-w-sm flex flex-col justify-center ${i % 2 === 0 ? "lg:pl-12" : "lg:pr-12"}`}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-widest mb-2 block transition-colors duration-500"
                    style={{ color: activeIndex === i ? "#6b5a45" : "#c4b5a0" }}
                  >
                    {m.year}
                  </span>
                  <h3
                    className="text-xl font-bold mb-3 transition-colors duration-500"
                    style={{
                      fontFamily: "Playfair Display, serif",
                      color: activeIndex === i ? "#2c2416" : "#4a3f32",
                    }}
                  >
                    {m.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed transition-colors duration-500"
                    style={{ color: activeIndex === i ? "#3d3326" : "#8a7d6b" }}
                  >
                    {m.desc}
                  </p>
                  {m.note && (
                    <blockquote
                      className="mt-3 border-l-4 pl-4 italic text-sm transition-all duration-500"
                      style={{
                        borderColor: activeIndex === i ? "#8b7355" : "#d4c8b8",
                        color: activeIndex === i ? "#6b5a45" : "#a89f91",
                      }}
                    >
                      {m.note}
                    </blockquote>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-16 pb-24" style={{ background: "#e8e4f3" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="flex-1 order-2 lg:order-1">
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-8"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                Founder&apos;s Message
              </h2>

              <div className="space-y-5 text-[#4a4a5a] text-sm leading-[1.8]">
                <p>
                  Thank you for taking the time to read the story behind
                  Volunteers Initiative Nepal.
                </p>

                <p>
                  It is never easy for me to reduce these memories — the hunger,
                  the distance, the exhaustion of being unseen — and my wish
                  that no child must continue.
                </p>

                <p>
                  Every person, no matter where they are born, deserves dignity,
                  opportunity, and hope.
                </p>

                <p>
                  In my own childhood I saw how deeply poverty can shape a life.
                  I watched as those around me — children with talent and desire
                  — were never given the chance to grow. That reality, and my
                  early belief that change was possible, is what drives me
                  still.
                </p>

                <p>
                  Community-led health, empowerment, education, food,
                  livelihoods, and social mobilization bring together. When
                  people have all of these, they don&apos;t just survive.
                </p>

                <p className="font-semibold text-[#1a1a2e]">They lead.</p>

                <p>
                  A better future for generations. VIN was born from this
                  vision. But VIN grew because people like you believed that
                  change is possible — not through charity alone, but through
                  shared responsibility, service, and compassion. Today, when I
                  look at the thousands of children and families we have
                  reached, and the communities we have nurtured, what began as a
                  dream in a small village in Sindhuli has evolved into a global
                  family dedicated to empowerment.
                </p>

                <p className="font-semibold text-[#1a1a2e]">
                  To everyone who has walked with us — thank you.
                </p>

                <p className="font-semibold text-[#1a1a2e]">
                  To everyone we have yet to meet — I welcome you.
                </p>

                <p>
                  Together, we can build communities where children don&apos;t
                  walk uphill hungry, where women are not denied opportunity,
                  and where no one is forgotten.
                </p>

                <div className="pt-4 space-y-1">
                  <p className="font-semibold text-[#1a1a2e]">With purpose,</p>
                  <p className="font-semibold text-[#1a1a2e]">
                    With gratitude,
                  </p>
                  <p className="text-[#4a4a5a]">
                    And the journey has only just begun.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#d0cce0] mt-6">
                  <p
                    className="font-bold text-lg text-[#1a1a2e]"
                    style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                  >
                    Bhupendra &quot;Bhupi&quot; Ghimire
                  </p>
                  <p className="text-xs text-[#6a6a7a] mt-1">
                    Founder / President
                  </p>
                  <p className="text-xs text-[#6a6a7a]">
                    Volunteers Initiative Nepal (VIN)
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-shrink-0 order-1 lg:order-2 lg:w-[380px]">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80"
                  alt="Bhupi Ghimire - Founder of VIN Nepal"
                  className="w-full h-auto rounded-lg shadow-xl object-cover"
                  style={{ maxHeight: "480px" }}
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[#1a1a2e]/10 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Donation */}
      <DonationWidget />

      {/* CTA Banner */}

      <CTABanner />
    </main>
  );
}
