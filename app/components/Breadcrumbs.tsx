"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
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
    <nav aria-label="Breadcrumb" className="breadcrumbs py-4 md:py-5 min-h-[60px] flex items-center">
      <div className=" mx-auto px-4 md:px-[60px] w-full">
        <ol className="flex items-center flex-wrap gap-y-2 space-x-2.5 text-[17px] text-[var(--blue)] font-medium">
          {crumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center">
              {index === 0 ? (
                <Link
                  href={crumb.href}
                  className="hover:opacity-80 transition-opacity"
                >
                  <span>{crumb.label}</span>
                </Link>
              ) : (
                <>
                  <ChevronRight
                    size={16}
                    className="shrink-0 text-[var(--blue)] opacity-70"
                    aria-hidden="true"
                  />
                  {index === crumbs.length - 1 ? (
                    <span
                      className="font-semibold"
                      aria-current="page"
                    >
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="hover:opacity-80 transition-opacity"
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

