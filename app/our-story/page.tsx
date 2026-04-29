"use client";
import Link from "next/link";
import CTABanner from "../components/CTABanner";
import DonationWidget from "../components/DonationWidget";
import { useState, useEffect, useRef } from "react";

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
    desc: "Every morning, Bhupi's mother Rupa would wake up at 5 am to study before classes began. It was a one-kilometre vertical climb, equal to ten km uphill by road, and the journey took hours.\nHe reached school by 10 AM, long after the energy from breakfast had faded. There were no lunch boxes, no water bottles, no snacks. Children survived the entire day — and often until 6-7 PM — with nothing but willpower.\nHunger became his classroom companion. And hunger rarely allowed learning. He missed school many times. He failed Grade 8. Years later, he attempted SLC. Not because he lacked dedication, but because the path to education demanded more strength than any child should be expected to give. Very few children made it through high school in those days. The distance alone ended futures long before dreams could begin.",
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
  },
  {
    year: "1998",
    title: "The Story That Changed Everything",
    desc: "One afternoon, while taking the livestock out to graze, Bhupi's mother shared a story that cracked open his world. She had desperately wanted to go to school. But girls in her area were told, 'Your place is at home'.\nBut brothers studied. She stayed behind. At fifteen, she was married. Her dreams ended before they could breathe. Yet she never let this injustice define her. She encouraged her husband to start a school.\nHe completed high school. He became a teacher. Their family slowly rose because of the education she never received. Her voice this day was small, but it struck him like lightning: 'You must study. You are my chance.'\nThat moment reshaped his purpose. He returned to school. He persisted. He completed his SLC on the second attempt. He walked the same steep hill — but this time with determination steeper than the climb.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
  },
  {
    year: "1998",
    title: "Bhupi's Initiation",
    desc: "This has been possible due to our dedicated staff, alliances with like-minded organisations and the efforts and contributions of local and international volunteers. We offer the most affordable international volunteering & internship placements in Nepal.\nVIN funds and runs mid to long-term sustainable community based volunteer service projects, focusing on those most disadvantaged communities with special focus on women, children and minority groups. Our holistic development model — education, health & environment, tools for economic well-being and the provision of basic infrastructure have proved to be effective to those disadvantaged communities.",
    img: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=800&q=80",
  },
  {
    year: "1998",
    title: "Bhupi's Initiation",
    desc: "This has been possible due to our dedicated staff, alliances with like-minded organisations and the efforts and contributions of local and international volunteers. We offer the most affordable international volunteering & internship placements in Nepal.\nVIN funds and runs mid to long-term sustainable community based volunteer service projects, focusing on those most disadvantaged communities with special focus on women, children and minority groups. Our holistic development model — education, health & environment, tools for economic well-being and the provision of basic infrastructure have proved to be effective to those disadvantaged communities.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
  },
];

export default function OurStoryPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold: 0.4, rootMargin: "-100px 0px -50% 0px" }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

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
            style={{ }}
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
            style={{ }}
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

      {/* Timeline Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-12 relative">
          {/* Background Vertical Line (Light) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 transform -translate-x-1/2 hidden lg:block" />

          {/* Progress Vertical Line (Blue) */}
          <div 
            className="absolute left-1/2 top-0 w-[2px] bg-[#221C84] transform -translate-x-1/2 hidden lg:block transition-all duration-700 ease-out"
            style={{ 
              height: `${(activeIndex / (milestones.length - 1)) * 100}%`,
              maxHeight: '100%' 
            }}
          />

          <div className="space-y-32">
            {milestones.map((m, i) => (
              <div
                key={i}
                ref={(el) => (sectionRefs.current[i] = el)}
                onMouseEnter={() => setActiveIndex(i)}
                className={`relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24 transition-all duration-500 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                } ${activeIndex >= i ? "opacity-100" : "opacity-50"}`}
              >
                {/* Timeline Dot */}
                <div 
                  className={`absolute left-1/2 top-10 w-5 h-5 rounded-full transform -translate-x-1/2 hidden lg:block border-4 border-white shadow-md z-10 transition-colors duration-500 ${
                    activeIndex >= i ? "bg-[#221C84]" : "bg-gray-300"
                  }`} 
                />

                {/* Image Side */}
                <div className="flex-1 w-full lg:w-[45%] flex justify-center">
                  <div 
                    className={`relative transition-transform duration-500 hover:rotate-0 hover:scale-110 ${
                      i % 2 === 0 ? "-rotate-6" : "rotate-6"
                    }`}
                    style={{ maxWidth: "400px" }}
                  >
                    <img
                      src={m.img.includes('upload') ? "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80" : m.img}
                      alt={m.title}
                      className="w-full aspect-[4/3] object-cover shadow-2xl"
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className={`flex-1 w-full lg:w-1/2 text-left`}>
                  <div className="max-w-xl">
                    <span className="text-[#221C84] font-bold text-xl mb-2 block">
                      {m.year}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                      {m.title}
                    </h3>
                    <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
                      {m.desc.split('\n').map((para, idx) => (
                        <p key={idx} dangerouslySetInnerHTML={{ 
                          __html: para.replace(/(\d+ AM|\d+ PM|\d+-kilometre vertical climb|ten km uphill|SLC|on the second attempt)/g, '<span class="text-[#221C84] font-bold">$1</span>') 
                        }} />
                      ))}
                    </div>
                  </div>
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
                style={{ }}
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
                    style={{ }}
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
