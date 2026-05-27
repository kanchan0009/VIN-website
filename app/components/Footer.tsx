import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#fcfcfc] text-gray-800 border-t border-gray-200 font-sans">
      <div className=" mx-auto px-4 py-8 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
        {/* Brand */}
        <div>
          <div className="mb-4 md:mb-8">
            {/* Replace with actual logo path */}
            <img
              src="/logo.png"
              alt="Volunteers Initiative Nepal"
              className="h-20 object-contain"
            />
          </div>
          <p className="text-gray-500 text-[15px] leading-relaxed pr-4">
            Clarity gives you the blocks and components you need to create a
            truly professional website.
          </p>
        </div>

        {/* All Programs */}
        <div>
          <h4 className="font-bold text-[13px] uppercase tracking-wider text-gray-400 mb-6">
            All Programs
          </h4>
          <ul className="space-y-4">
            {[
              {
                name: "Women's Empowerment",
                href: "/programs/womens-empowerment",
              },
              {
                name: "Children's Development",
                href: "/programs/child-development",
              },
              {
                name: "Youth Empowerment",
                href: "/programs/youth-empowerment",
              },
              {
                name: "Public Health and Medical Care",
                href: "/programs/public-health",
              },
              {
                name: "Environment and Conservation",
                href: "/programs/environment",
              },
              {
                name: "Disaster Risk Reduction",
                href: "/programs/disaster-risk",
              },
            ].map((p) => (
              <li key={p.name}>
                <Link
                  href={p.href}
                  className="text-[15px] text-gray-700 font-medium hover:text-[var(--blue)] transition-colors"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h4 className="font-bold text-[13px] uppercase tracking-wider text-gray-400 mb-6">
            Important Links
          </h4>
          <ul className="space-y-4">
            {[
              { name: "Donate Now", href: "/contact" },
              { name: "Get Involved", href: "/volunteer" },
              { name: "Media", href: "/media" },
              { name: "About Us", href: "/about" },
              { name: "Volunteers Initiative Nepal", href: "/mission" },
              { name: "Volunteering Nepal", href: "/volunteer" },
              { name: "Volunteer Buddhist Monasteries", href: "/volunteer" },
              { name: "Trek for Nepal", href: "/programs-projects" },
              { name: "Community Learning Center", href: "/programs" },
            ].map((l) => (
              <li key={l.name}>
                <Link
                  href={l.href}
                  className="text-[15px] text-gray-700 font-medium hover:text-[var(--blue)] transition-colors"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-[13px] uppercase tracking-wider text-gray-400 mb-6">
            Contact
          </h4>

          <div className="mb-6 text-center">
            {/* Google Maps */}
            <div className="w-full rounded-lg shadow-sm mb-3 overflow-hidden border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.825691135913!2d85.30061927525438!3d27.722667676173806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18dca4ea80c3%3A0x91b2767c204d7a9b!2sVolunteers%20Initiative%20Nepal%20(VIN)!5e0!3m2!1sen!2snp!4v1779110221745!5m2!1sen!2snp"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="text-gray-500 text-[14px]">
              Nayabazaar Khusibu, Kathmandu
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone
                size={18}
                fill="currentColor"
                className="text-gray-700 mt-1 shrink-0"
              />
              <div className="text-[15px] text-gray-700 font-medium">
                <div>01-123456 (Office)</div>
                <div>+977 1 4362560</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail
                size={18}
                fill="currentColor"
                className="text-gray-700 shrink-0"
              />
              <a
                href="mailto:support@vin.org.np"
                className="text-[15px] text-gray-700 font-medium hover:text-[var(--blue)]"
              >
                support@vin.org.np
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className=" mx-auto px-4 py-6 flex flex-col lg:flex-row items-center justify-between gap-6 text-[13px] text-gray-500">
          <div className="flex items-center gap-3">
            <span className="font-medium text-gray-700">Recommended By</span>
            {/* Replace with actual lonely planet logo path */}
            <img
              src="/lonely-planet.png"
              alt="Lonely Planet"
              className="h-6 object-contain"
            />
          </div>

          <div className="text-gray-500 font-medium">
            © Copyright 2022, All Rights Reserved
          </div>

          <div className="flex items-center gap-3">
            {/* Replace with actual ccivs logo path */}
            <img src="/ccivs.png" alt="CCIVS" className="h-6 object-contain" />
            <span className="font-medium">
              Member of CCIVS – maintain official relation with UNESCO
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
