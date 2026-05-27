import Link from "next/link";
import DonationWidget from "../components/DonationWidget";
import CTABanner from "../components/CTABanner";
import { topicContent } from "../data/programData";
import { Metadata } from "next";

type Props = {
  searchParams: { topic?: string; project?: string; album?: string };
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const topic = searchParams.topic?.toString() || "default";
  const albumParam = searchParams.album?.toString()
    ? decodeURIComponent(searchParams.album.toString())
    : undefined;
    
  const programName = topicContent[topic]?.title || programs[topic]?.title || "Gallery Details";

  return {
    title: `${programName} | VIN`,
  };
}

type ProgramActivity = {
  title: string;
  img: string;
  description: string;
  isPlaceholder?: boolean;
};

type Program = {
  title: string;
  description: string;
  focusedProjects?: { title: string; desc?: string; image?: string }[];
  activities: ProgramActivity[];
};

const programs: Record<string, Program> = {
  "womens-empowerment": {
    title: "Women's Empowerment",
    description:
      "Activities that support women's rights, education and economic independence.",
    activities: [
      {
        title: "Women's Education and Life Skills",
        img: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=800&q=80",
        description:
          "Training and support programs to strengthen women's knowledge and confidence.",
      },
      {
        title: "Microcredit Cooperative Support",
        img: "https://images.unsplash.com/photo-1590233465423-40844bb147d3?w=800&q=80",
        description:
          "Financial inclusion and cooperative lending for small businesses.",
      },
      {
        title: "Entrepreneurship Development",
        img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
        description:
          "Business skills training and mentorship for women entrepreneurs.",
      },
      {
        title: "Women's Trafficking Prevention",
        img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80",
        description:
          "Awareness, support, and prevention initiatives against trafficking.",
      },
    ],
  },
  "child-development": {
    title: "Child Development",
    description:
      "Programs that improve education, health, and future opportunities for children.",
    activities: [
      {
        title: "Early Childhood Learning",
        img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
        description:
          "Learning programs designed for young children and preschool readiness.",
      },
      {
        title: "School Support Programs",
        img: "https://images.unsplash.com/photo-1516979178020-5c93d5f7a0d8?w=800&q=80",
        description:
          "Supporting schools with supplies, books, and teacher resources.",
      },
      {
        title: "Nutrition and Health",
        img: "https://images.unsplash.com/photo-1509099836639-18ba9c06a4a5?w=800&q=80",
        description:
          "Improving child health through nutrition and wellness guidance.",
      },
    ],
  },
  "youth-empowerment": {
    title: "Youth Empowerment",
    description:
      "Youth-led programs for leadership, career skills, and community engagement.",
    activities: [
      {
        title: "Youth Leadership Training",
        img: "https://images.unsplash.com/photo-1534430480872-3d3f92c3e4a0?w=800&q=80",
        description: "Building leadership confidence and civic participation.",
      },
      {
        title: "Vocational Skills",
        img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
        description:
          "Practical skills training for better employment prospects.",
      },
      {
        title: "Community Outreach",
        img: "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=800&q=80",
        description: "Youth-driven community projects and awareness campaigns.",
      },
    ],
  },
  "public-health": {
    title: "Public Health and Medical Care",
    description:
      "Health initiatives to improve community wellbeing and access to care.",
    activities: [
      {
        title: "Medical Camps",
        img: "https://images.unsplash.com/photo-1580281657521-62237e8a70b5?w=800&q=80",
        description:
          "Mobile clinics and free medical services for underserved areas.",
      },
      {
        title: "Sanitation Projects",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        description:
          "Improving hygiene through clean water and sanitation education.",
      },
      {
        title: "Health Education",
        img: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&q=80",
        description:
          "Community training on preventive health and lifestyle choices.",
      },
    ],
  },
  environment: {
    title: "Environment and Conservation",
    description:
      "Conservation efforts that protect nature and support sustainable living.",
    activities: [
      {
        title: "Tree Plantation Drives",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
        description:
          "Green planting campaigns to restore forests and support biodiversity.",
      },
      {
        title: "River Cleanup Initiatives",
        img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
        description:
          "Clean-up drives to protect waterways and local ecosystems.",
      },
      {
        title: "Eco Awareness Workshops",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
        description:
          "Training communities in sustainable environmental practices.",
      },
    ],
  },
  "disaster-risk": {
    title: "Disaster Risk Reduction",
    description:
      "Preparedness efforts that make communities safer and more resilient.",
    activities: [
      {
        title: "Emergency Preparedness",
        img: "https://images.unsplash.com/photo-1490101108317-3637d8a9ef8d?w=800&q=80",
        description:
          "Training families and schools for faster response during disasters.",
      },
      {
        title: "Community Resilience Training",
        img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800&q=80",
        description:
          "Strengthening local networks for better disaster recovery.",
      },
      {
        title: "Flood and Landslide Mitigation",
        img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
        description:
          "Infrastructure and awareness programs to reduce hazard risk.",
      },
    ],
  },
  default: {
    title: "Gallery Details",
    description:
      "Choose a program album to view its specific activities and explore the program gallery.",
    activities: [
      {
        title: "Women Empowerment Activities",
        img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
        description:
          "Activities supporting women's education, business, and safety.",
      },
      {
        title: "Children Development Activities",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
        description:
          "Programs focused on child learning, nutrition, and health.",
      },
      {
        title: "Youth Empowerment Activities",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
        description:
          "Youth skill-building, leadership, and community programs.",
      },
    ],
  },
};

export default function GalleryDetailsPage({
  searchParams,
}: {
  searchParams: { topic?: string; project?: string; album?: string };
}) {
  const topic = searchParams.topic?.toString() || "default";
  const projectParam = searchParams.project?.toString()
    ? decodeURIComponent(searchParams.project.toString())
    : undefined;
  const albumParam = searchParams.album?.toString()
    ? decodeURIComponent(searchParams.album.toString())
    : undefined;
  const program = programs[topic] || programs.default;
  const programProjects = topicContent[topic]?.focusedProjects || [];
  const matchedProject = projectParam
    ? programProjects.find((p: any) => p.title === projectParam)
    : undefined;
  const programName = topicContent[topic]?.title || program.title;
  // show up to 6 activity cards (2 rows x 3 columns on large screens)
  const raw = program.activities || [];
  const items: ProgramActivity[] = raw.slice(0, 6);
  while (items.length < 6) {
    items.push({
      title: "More activities coming soon",
      img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800&q=80",
      description: "",
      isPlaceholder: true,
    });
  }

  return (
    <main className="bg-white min-h-screen">
      <section className="pt-4 md:pt-8 pb-5 md:pb-10 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-[#1a1a1a]">{programName}</h1>
      </section>

      <section className="pb-8 md:pb-16">
        <div className="max-w-360 mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-12">
            {items.map((activity, idx) => (
              <div
                key={idx}
                className="relative rounded-[10px] overflow-hidden group w-full aspect-square shadow-xl"
              >
                <img
                  src={activity.img}
                  alt={activity.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 md:pb-8 text-center px-6">
                  <h4 className="text-white text-lg font-semibold mb-2 leading-tight">
                    {activity.title}
                  </h4>
                  {activity.isPlaceholder ? (
                    <button
                      disabled
                      className="bg-(--blue) text-white/60 px-5 md:px-10 py-4 rounded-xl font-bold text-sm opacity-60 cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  ) : (
                    <Link href={`/program-gallery?topic=${topic}&activity=${encodeURIComponent(activity.title)}`}>
                      <button className="bg-(--blue) text-white px-5 md:px-10 py-4 rounded-xl font-bold text-sm hover:bg-white hover:text-(--blue) transition-all shadow-lg active:scale-95">
                        Explore Album
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonationWidget />
      <CTABanner />
    </main>
  );
}
