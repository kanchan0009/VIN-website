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
      <section className="relative flex items-end overflow-hidden h-[100vh] min-h-[600px] max-h-[800px]">
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
        <div className="relative z-10  mx-auto px-4 pb-10 w-full">
          <h1
            className="text-[56px] font-bold text-white"
          >
            Our Story
          </h1>
          <p className="text-white/60  text-[16px] font-[400] ">
            The bags are packed and we’re ready to go!’  Facebook tells an audience of over 11k, beside an image of a 4×4; roof loaded with luggage secured under red tarpaulin, the morning sun not quite high enough to light the dusty street.
          </p>
          
        </div>
      </section>

      {/* Origin Story Intro */}
      <section className="py-16 bg-white">
        <div className=" mx-auto px-4 text-center">
          <h2
            className="text-[56px] font-[600] text-gray-900 mb-3"
          >
            THE ORIGIN STORY OF VOLUNTEERS INITIATIVE NEPAL (VIN)
          </h2>
          <p className="text-[#221C84] text-[20px]  font-[500] mb-2">
            A human story of hunger, heartbreak, vision, and a movement built
            from the ground up
          </p>
          <p className="text-gray-600 text-[16px] leading-relaxed max-w-4xl mx-auto">
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
        <div className=" mx-auto px-4 relative">
          {/* Background Vertical Line (Light) */}
          <div className="absolute left-1/2 top-[40px] bottom-[40px] w-[2px] bg-gray-100 transform -translate-x-1/2 hidden lg:block" />

          {/* Progress Vertical Line (Blue) */}
          <div 
            className="absolute left-1/2 top-[40px] w-[2px] bg-[var(--blue)] transform -translate-x-1/2 hidden lg:block transition-all duration-700 ease-out"
            style={{ 
              height: `${(activeIndex / (milestones.length - 1)) * 100}%`,
              maxHeight: 'calc(100% - 80px)' 
            }}
          />

          <div className="space-y-32">
            {milestones.map((m, i) => (
              <div
                key={i}
                ref={(el) => { sectionRefs.current[i] = el; }}
                onMouseEnter={() => setActiveIndex(i)}
                className={`relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24 transition-all duration-500 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                } ${activeIndex >= i ? "opacity-100" : "opacity-50"}`}
              >
                {/* Timeline Dot */}
                <div 
                  className={`absolute left-1/2 top-10 w-5 h-5 rounded-full transform -translate-x-1/2 hidden lg:block border-4 border-white shadow-md z-10 transition-colors duration-500 ${
                    activeIndex >= i ? "bg-[var(--blue)]" : "bg-gray-300"
                  }`} 
                />

                {/* Image Side */}
                <div className="flex-1 w-full lg:w-[45%] flex justify-center">
                  <div 
                    className={`relative transition-transform duration-500 hover:rotate-0 hover:scale-110 ${
                      i % 2 === 0 ? "-rotate-6" : "rotate-6"
                    }`}
                    style={{ maxWidth: "500px" }}
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
                    <span className="text-[var(--blue)] font-bold text-xl mb-2 block">
                      {m.year}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                      {m.title}
                    </h3>
                    <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
                      {m.desc.split('\n').map((para, idx) => (
                        <p key={idx} dangerouslySetInnerHTML={{ 
                          __html: para.replace(/(\d+ AM|\d+ PM|\d+-kilometre vertical climb|ten km uphill|SLC|on the second attempt)/g, '<span class="text-[var(--blue)] font-bold">$1</span>') 
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
      <section className="py-16 pb-24" style={{ background: "#DFF0FF" }}>
        <div className=" mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
            {/* Left Content */}
            <div className="flex-1 order-2 lg:order-1">
              <h2 className="text-[56px] font-bold text-gray-900 mb-2 leading-tight">
                Founder&apos;s Message
              </h2>
              <p className="text-[20px] font-medium text-[#221C84] mb-8">From Bhupi</p>

              <div className="space-y-6 text-[#212121] text-[16px] leading-[1.7] font-[400]">
                <p>
                  Thank you for taking the time to read the story behind Volunteers Initiative Nepal.
                </p>

                <p>
                  It is never easy for me to revisit these memories — the hunger, the distance, the failures, the heartbreaks — but they remind me why VIN exists, and why our work must continue. I founded VIN with one simple belief:
                </p>

                <p className="text-[#221C84] font-semibold text-[18px]">
                  Every person, no matter where they are born, deserves dignity, opportunity, and hope.
                </p>

                <p>
                  My own childhood taught me how deeply poverty can shape a life. My mother&apos;s sacrifices reminded me of the dreams many people are never allowed to pursue. And the children I met during my early career showed me the painful truth: Temporary help is not enough.
                </p>

                <p>
                  Communities need holistic empowerment — education, health, livelihoods, infrastructure, and social inclusion rising together. When people have all of these, they don&apos;t just survive.
                  <br />They thrive.
                  <br /><span className="text-[#221C84] font-semibold">They lead.</span>
                </p>

                <p>
                  They build a better future for generations. VIN was born from this vision. But VIN grew because people like you believed that change is possible — not through charity alone, but through shared responsibility, service, and compassion. Today, when I look at the thousands of volunteers, partners, supporters, and community members who stand with VIN, I am humbled. What began as a dream in a small village in Okhaldhunga has evolved into a global family dedicated to empowerment.
                </p>

                <p>
                  To everyone who has walked with us — <span className="text-[#221C84] font-bold">thank you.</span><br />
                  To everyone new to our story — <span className="text-[#221C84] font-bold">I welcome you.</span>
                </p>

                <p>
                  Whether you volunteer, partner, donate, advocate, or share our vision, you become part of this movement. Together, we can build communities where children don&apos;t walk uphill hungry, where women are not denied opportunity, and where no family feels forgotten.
                </p>

                <div className="space-y-1 text-[#221C84] font-bold text-[18px]">
                  <p>This is my promise.</p>
                  <p>This is VIN&apos;s purpose.</p>
                  <p>And this journey has only just begun.</p>
                </div>

                <div className="pt-8">
                  <p className="text-gray-600 mb-1">Warm regards,</p>
                  <p className="font-bold text-[20px] text-[#221C84] mb-0">Bhupendra &quot;Bhupi&quot; Ghimire</p>
                  <p className="text-gray-500 text-sm">Founder / President</p>
                  <p className="text-gray-500 text-sm">Volunteers Initiative Nepal (VIN)</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-[480px] shrink-0 order-1 lg:order-2 mt-4 lg:mt-12 sticky top-10">
              <div className="relative group">
                <img
                  src="/images/founder_bhupi.png"
                  alt="Bhupi Ghimire - Founder of VIN Nepal"
                  className="w-full h-auto shadow-2xl object-cover"
                  style={{ maxHeight: "500px" }}
                />
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


