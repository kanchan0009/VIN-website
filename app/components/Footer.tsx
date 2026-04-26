import Link from 'next/link';
import { Phone, Mail, MapPin, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <span className="font-bold text-sm">VIN</span>
            </div>
            <div>
              <div className="font-semibold text-sm">Volunteers Initiative Nepal</div>
              <div className="text-xs text-white/60">Making a Difference</div>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            Clarity gives you the blocks and components you need to create a truly professional website.
          </p>
          <div className="flex gap-3">
            {[Share2].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* All Programs */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">All Programs</h4>
          <ul className="space-y-2.5">
            {["Women's Empowerment", "Children's Development", "Youth Empowerment",
              "Public Health and Medical Care", "Environment and Conservation", "Disaster Risk Reduction"
            ].map(p => (
              <li key={p}>
                <Link href="/programs" className="text-sm text-white/75 hover:text-white transition-colors">{p}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Important Links</h4>
          <ul className="space-y-2.5">
            {["Donate Now", "Get Involved", "Media", "About Us", "Volunteers Initiative Nepal",
              "Volunteering Nepal", "Volunteer Buddhist Monasteries", "Trek for Nepal", "Community Learning Center"
            ].map(l => (
              <li key={l}>
                <Link href="#" className="text-sm text-white/75 hover:text-white transition-colors">{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Contact</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 text-white/50 shrink-0" />
              <span className="text-sm text-white/75">Nayabazaar Khusibu, Kathmandu</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone size={15} className="text-white/50 shrink-0" />
              <div className="text-sm text-white/75">
                <div>01-123456 (Office)</div>
                <div>+977 1 4362560</div>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={15} className="text-white/50 shrink-0" />
              <a href="mailto:support@vin.org.np" className="text-sm text-white/75 hover:text-white">support@vin.org.np</a>
            </div>
          </div>
          {/* Mini map placeholder */}
          <div className="mt-4 w-full h-28 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center">
            <span className="text-white/40 text-xs">📍 Nayabazaar, Kathmandu</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <span>© Copyright 2022, All Rights Reserved</span>
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-white/20 inline-block" />
            Member of CCIVS – maintain official relation with UNESCO
          </span>
        </div>
      </div>
    </footer>
  );
}
