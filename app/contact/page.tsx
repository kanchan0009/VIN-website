import { Send } from "lucide-react";
import CTABanner from "../components/CTABanner";

const FacebookIcon = ({ size = 22 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 22 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TikTokIcon = ({ size = 22 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function ContactPage() {
  return (
    <main className="font-montserrat">
      {/* Hero */}
      <section className="relative flex items-end overflow-hidden h-[75vh] min-h-[600px] max-h-[800px]">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(20,10,70,0.88) 50%, rgba(0,0,0,0.2) 100%)",
          }}
        />
        <div className="relative z-10  mx-auto px-4 pb-5 md:pb-10 w-full">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-white/80 text-lg max-w-4xl">
            Lorem Ipsum Dipsum We Are Different Locations Lorem Ipsum Dipsum We
            Are Different Locations Lorem Ipsum Dipsum We Are Different L
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-10 md:py-24 bg-white">
        <div className=" mx-auto px-4 flex flex-col lg:flex-row gap-8 md:gap-16 items-start">
          {/* Form */}
          <div className="flex-1 w-full max-w-xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">
              Stay In Touch!
            </h2>
            <p className="text-gray-600 text-lg mb-5 md:mb-10 leading-relaxed">
              Learn More about your next tour destination and make the best
              decision with Tyrolean Adventures
            </p>
            <div className="space-y-6">
              {["Full Name", "Address", "Phone Number"].map((field) => (
                <input
                  key={field}
                  type="text"
                  placeholder={field}
                  className="w-full bg-[#F5F7F9] border-none rounded-lg px-6 py-5 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-[var(--blue)]/20 outline-none transition-all"
                />
              ))}
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full bg-[#F5F7F9] border-none rounded-lg px-6 py-5 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-[var(--blue)]/20 outline-none transition-all resize-none"
              />
              <button
                className="flex items-center gap-2 px-4 md:px-8 py-4 rounded-full font-bold text-white transition-all hover:opacity-90 active:scale-95"
                style={{ background: "var(--blue)" }}
              >
                <span>Send Message</span>
                <Send size={18} className="rotate-[25deg]" />
              </button>
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:w-[600px] w-full flex-none">
            <div className="bg-[#EBF5FF] rounded-none p-6 md:p-12 lg:p-16">
              <h3 className="text-xl md:text-3xl font-bold mb-6 md:mb-12 text-[#1a1a1a]">
                How can we help you?
              </h3>

              <div className="space-y-10">
                {/* Contact Us */}
                <div>
                  <p className="text-sm text-gray-700 mb-2">Contact Us</p>
                  <div className="text-[var(--blue)] font-bold text-base space-y-1">
                    <p>01-123456 (Office)</p>
                    <p>+977 1 4362560</p>
                  </div>
                </div>

                {/* Email Us */}
                <div>
                  <p className="text-sm text-gray-700 mb-2">Email Us</p>
                  <p className="text-[#1a1a1a] font-bold text-base">
                    support@vin.org.np
                  </p>
                </div>

                {/* Address */}
                <div>
                  <p className="text-sm text-gray-700 mb-2">Address</p>
                  <p className="text-[#1a1a1a] font-bold text-base leading-snug">
                    Nayabazaar Khusibu, Kathmandu
                  </p>
                </div>

                {/* Follow Us */}
                <div className="flex items-center gap-6 pt-4">
                  <p className="text-xm text-gray-700">Follow Us :</p>
                  <div className="flex items-center gap-5">
                    <a
                      href="#"
                      className="text-[var(--blue)] hover:opacity-70 transition-opacity"
                    >
                      <FacebookIcon />
                    </a>
                    <a
                      href="#"
                      className="text-[var(--blue)] hover:opacity-70 transition-opacity"
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      href="#"
                      className="text-[var(--blue)] hover:opacity-70 transition-opacity"
                    >
                      <TikTokIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-10 md:pb-24 bg-white">
        <div className=" mx-auto px-4">
          <div className="rounded-2xl overflow-hidden h-[400px] border border-gray-100 flex items-center justify-center bg-[#F8FAFC]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.825691135913!2d85.30061927525438!3d27.722667676173806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18dca4ea80c3%3A0x91b2767c204d7a9b!2sVolunteers%20Initiative%20Nepal%20(VIN)!5e0!3m2!1sen!2snp!4v1779110221745!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
