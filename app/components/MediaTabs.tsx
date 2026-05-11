"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Image,
  FileText,
  Newspaper,
  Briefcase,
  Trophy,
  ClipboardList,
  Mic,
} from "lucide-react";

const tabs = [
  { label: "Gallery", href: "/gallery", icon: Image },
  { label: "Articles", href: "/media/articles", icon: FileText },
  { label: "News Update", href: "/media/news", icon: Newspaper },
  { label: "Careers", href: "/media/careers", icon: Briefcase },
  { label: "Success Stories", href: "/media/success-stories", icon: Trophy },
  { label: "Case Studies", href: "/media/case-studies", icon: ClipboardList },
  { label: "Interviews", href: "/media/interviews", icon: Mic },
];

export default function MediaTabs() {
  const pathname = usePathname();

  return (
    <div className="bg-white border-b border-gray-100 sticky top-[64px] z-40">
      <div className=" mx-auto px-6 lg:px-8">
        <div className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            const Icon = tab.icon;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? "text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
                style={
                  isActive ? { background: "var(--blue)" } : undefined
                }
              >
                <Icon size={16} />
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

