import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#fcfcfc] text-gray-800 border-t border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="mb-8">
            {/* Replace with actual logo path */}
            <img src="/logo.png" alt="Volunteers Initiative Nepal" className="h-20 object-contain" />
          </div>
          <p className="text-gray-500 text-[15px] leading-relaxed pr-4">
            Clarity gives you the blocks and components you need to create a truly professional website.
          </p>
        </div>

        {/* All Programs */}
        <div>
          <h4 className="font-bold text-[13px] uppercase tracking-wider text-gray-400 mb-6">All Programs</h4>
          <ul className="space-y-4">
            {["Women's Empowerment", "Children's Development", "Youth Empowerment",
              "Public Health and Medical Care", "Environment and Conservation", "Disaster Risk Reduction"
            ].map(p => (
              <li key={p}>
                <Link href="#" className="text-[15px] text-gray-700 font-medium hover:text-[var(--blue)] transition-colors">{p}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h4 className="font-bold text-[13px] uppercase tracking-wider text-gray-400 mb-6">Important Links</h4>
          <ul className="space-y-4">
            {["Donate Now", "Get Involved", "Media", "About Us", "Volunteers Initiative Nepal",
              "Volunteering Nepal", "Volunteer Buddhist Monasteries", "Trek for Nepal", "Community Learning Center"
            ].map(l => (
              <li key={l}>
                <Link href="#" className="text-[15px] text-gray-700 font-medium hover:text-[var(--blue)] transition-colors">{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-[13px] uppercase tracking-wider text-gray-400 mb-6">Contact</h4>
          
          <div className="mb-6 text-center">
            {/* Replace with actual map image path */}
            <img src="/map.png" alt="Map" className="w-full h-auto rounded-lg shadow-sm mb-3 object-cover border border-gray-100" />
            <p className="text-gray-500 text-[14px]">Nayabazaar Khusibu, Kathmandu</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone size={18} fill="currentColor" className="text-gray-700 mt-1 shrink-0" />
              <div className="text-[15px] text-gray-700 font-medium">
                <div>01-123456 (Office)</div>
                <div>+977 1 4362560</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} fill="currentColor" className="text-gray-700 shrink-0" />
              <a href="mailto:support@vin.org.np" className="text-[15px] text-gray-700 font-medium hover:text-[var(--blue)]">support@vin.org.np</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row items-center justify-between gap-6 text-[13px] text-gray-500">
          <div className="flex items-center gap-3">
            <span className="font-medium text-gray-700">Recommended By</span>
            {/* Replace with actual lonely planet logo path */}
            <img src="/lonely-planet.png" alt="Lonely Planet" className="h-6 object-contain" />
          </div>
          
          <div className="text-gray-500 font-medium">
            © Copyright 2022, All Rights Reserved
          </div>

          <div className="flex items-center gap-3">
            {/* Replace with actual ccivs logo path */}
            <img src="/ccivs.png" alt="CCIVS" className="h-6 object-contain" />
            <span className="font-medium">Member of CCIVS – maintain official relation with UNESCO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

