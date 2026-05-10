"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { useMemo } from "react";

// Map of slug to display name for certifications
const certificationNames: Record<string, string> = {
  "european-commission": "European Commission",
  "top-rated-ngo": "2024 Top Rated NGO",
  ivsa: "IVSA",
  forum: "Forum",
  ccivs: "CCIVS",
  nvda: "NVDA",
};

export default function Breadcrumbs() {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(Boolean);

  if (pathSegments.length === 0) {
    return null;
  }

  // Skip breadcrumb for certification detail pages (they have their own breadcrumb)
  if (pathSegments[0] === "certifications" && pathSegments.length > 1) {
    return null;
  }

  const crumbs = useMemo(() => {
    const breadcrumbs: { label: string; href: string }[] = [
      { label: "Home", href: "/" },
    ];

    let href = "";
    pathSegments.forEach((segment, index) => {
      href += `/${segment}`;

      // Check if this is a certification slug and use the proper name
      let label = segment;
      if (pathSegments[0] === "certifications" && index === 1) {
        label = certificationNames[segment] || segment;
      } else {
        label = segment
          .split("-")
          .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
          .join(" ");
      }

      breadcrumbs.push({
        label,
        href,
      });
    });

    return breadcrumbs;
  }, [pathname, pathSegments]);

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <div className="max-w-7xl mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          {crumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center">
              {index === 0 ? (
                <Link
                  href={crumb.href}
                  className="flex items-center gap-1 hover:text-gray-700 transition-colors"
                >
                  <Home size={16} />
                  <span>{crumb.label}</span>
                </Link>
              ) : (
                <>
                  <ChevronRight
                    size={16}
                    className="shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  {index === crumbs.length - 1 ? (
                    <span
                      className="font-medium text-gray-900"
                      aria-current="page"
                    >
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="hover:text-gray-700 transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

