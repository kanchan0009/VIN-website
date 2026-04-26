import { Phone, Mail, MapPin, Share2 } from 'lucide-react';
import CTABanner from '../components/CTABanner';


export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-72 flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80" alt="Contact Us" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,10,70,0.88) 50%, rgba(0,0,0,0.2) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-10 w-full">
          <p className="text-white/60 text-sm mb-2">Home / <span className="text-white">Contact Us</span></p>
          <h1 className="text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Contact Us</h1>
          <p className="text-white/70 text-sm max-w-lg">Lorem Ipsum Dipsum We Are Different Locations Lorem Ipsum Dipsum We Are Different Locations Lorem Ipsum Dipsum We Are Different L</p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-14">
          {/* Form */}
          <div className="flex-1 max-w-lg">
            <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Stay In Touch!</h2>
            <p className="text-gray-500 text-sm mb-8">Learn More about your next tour destination and make the best decision with Tyrolean Adventures</p>
            <div className="space-y-4">
              {['Full Name', 'Address', 'Phone Number'].map(field => (
                <input key={field} type="text" placeholder={field}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-indigo-400 transition-colors" />
              ))}
              <textarea placeholder="Message" rows={4}
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-indigo-400 transition-colors resize-none" />
              <button className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all"
                style={{ background: 'var(--indigo-btn)' }}>
                Send Message
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <div className="rounded-2xl p-8 h-full" style={{ background: 'var(--sky)' }}>
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>How can we help you?</h3>
              <div className="space-y-5 mb-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Contact Us</p>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Phone size={14} style={{ color: 'var(--indigo-btn)' }} />
                    <div>
                      <div>01-123456 (Office)</div>
                      <div>+977 1 4362560</div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Email Us</p>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Mail size={14} style={{ color: 'var(--indigo-btn)' }} />
                    <a href="mailto:support@vin.org.np" className="hover:underline">support@vin.org.np</a>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Address</p>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <MapPin size={14} style={{ color: 'var(--indigo-btn)' }} />
                    <span>Nayabazaar Khusibu, Kathmandu</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Follow Us</p>
                  <div className="flex gap-3">
                    {[Share2].map((Icon, i) => (
                      <a key={i} href="#"
                        className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors"
                        style={{ background: 'var(--indigo-btn)' }}>
                        <Icon size={15} />
                      </a>
                    ))}
                    <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs transition-colors" style={{ background: 'var(--indigo-btn)' }}>TK</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden h-80 border border-gray-100 flex items-center justify-center" style={{ background: '#f0f4ff' }}>
            {/* Map placeholder – in production integrate Google Maps */}
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-500 font-medium">Interactive Map of Nepal</p>
              <p className="text-gray-400 text-sm">VIN field offices across 20+ districts</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
