import Link from "next/link";
import CTABanner from "../components/CTABanner";
import {
  Image,
  FileText,
  Newspaper,
  Briefcase,
  Trophy,
  ClipboardList,
  Mic,
} from "lucide-react";

const sections = [
  {
    label: "Gallery",
    href: "/gallery",
    description:
      "Explore photos from our programs, events, and community activities across Nepal.",
    icon: Image,
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
  },
  {
    label: "Articles",
    href: "/media/articles",
    description:
      "In-depth articles covering our initiatives, impact stories, and development insights.",
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
  },
  {
    label: "News Update",
    href: "/media/news",
    description:
      "Latest news, program launches, grants, and organizational updates from VIN.",
    icon: Newspaper,
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
  },
  {
    label: "Careers",
    href: "/media/careers",
    description:
      "Join our team. Browse current job openings and become part of the change.",
    icon: Briefcase,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
  },
  {
    label: "Success Stories",
    href: "/media/success-stories",
    description:
      "Real stories of transformation from the communities we serve.",
    icon: Trophy,
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80",
  },
  {
    label: "Case Studies",
    href: "/media/case-studies",
    description:
      "Detailed impact studies and evidence-based reports on our programs.",
    icon: ClipboardList,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    label: "Interviews",
    href: "/media/interviews",
    description:
      "Conversations with our team, volunteers, partners, and community leaders.",
    icon: Mic,
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80",
  },
];

export default function MediaPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-72 flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80"
          alt="Media"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(20,10,70,0.88) 50%, rgba(0,0,0,0.2) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-10 w-full">
          <p className="text-white/60 text-sm mb-2">
            Home / <span className="text-white">Media</span>
          </p>
          <h1
            className="text-5xl font-bold text-white"
            style={{ }}
          >
            Media
          </h1>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Link
                  key={section.href}
                  href={section.href}
                  className="group rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={section.image}
                      alt={section.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: "var(--indigo-btn)" }}
                      >
                        <Icon size={16} className="text-white" />
                      </div>
                      <h3
                        className="text-lg font-bold text-gray-900 group-hover:text-indigo-700 transition-colors"
                        style={{ }}
                      >
                        {section.label}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
