'use client';
import { useState } from 'react';
import CTABanner from '../components/CTABanner';
import DonationWidget from '../components/DonationWidget';

const faqs = [
  {
    q: 'Recognition, Memberships & Global Partnerships',
    a: "See VIN's affiliations and partnerships in Nepal and worldwide — government registration, Social Welfare Council membership, and international NGO networks that recognise our grassroots community development work. VIN is a member of CCIVS (Coordinating Committee for International Voluntary Service), FORUM (Network of European Volunteer Service Organisations), NVDA, and the European Voluntary Service.",
  },
  {
    q: 'How do I apply to volunteer with VIN?',
    a: 'You can apply through our website by filling out the volunteer application form. Our team will review your application and get back to you within 5–7 business days. We accept volunteers year-round and offer placements in various programs depending on your skills, interests, and availability.',
  },
  {
    q: 'What programs can I participate in as a volunteer?',
    a: "Volunteers can participate in Women's Empowerment, Child Development, Youth Empowerment, Public Health & Medical Care, Environmental Conservation, and Disaster Risk Reduction programs. We match volunteers to programs based on their background and skills.",
  },
  {
    q: 'Is there a program fee?',
    a: 'Yes, VIN charges a modest program fee that covers accommodation, meals, orientation, project materials, and local support from our full-time staff. The fee varies depending on the duration and type of program. Fees directly support our community development work. Financial assistance may be available for long-term volunteers.',
  },
  {
    q: 'What is the minimum volunteering duration?',
    a: 'The minimum duration for most programs is 2 weeks, though we recommend a minimum of 4 weeks for a more meaningful experience. Some specialized programs like medical or teaching placements require a minimum of 4–8 weeks.',
  },
  {
    q: 'Do I need to speak Nepali?',
    a: 'No, Nepali language skills are not required. English is widely spoken in project areas, and VIN provides local translators and cultural orientation. However, we do encourage volunteers to learn basic Nepali phrases — it goes a long way with communities!',
  },
  {
    q: 'What is VIN\'s financial transparency policy?',
    a: "VIN maintains full financial transparency. Our annual reports and audited accounts are publicly available on our website. We maintain an 84.2% program expenditure ratio — meaning 84 cents of every dollar donated goes directly to program activities. We are registered under Nepal's Society Act and report to the Social Welfare Council.",
  },
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <main>
      {/* Hero */}
      <section className="relative flex items-end overflow-hidden h-[100vh] min-h-[600px] max-h-[800px]">
        <img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600&q=80" alt="FAQ" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,10,70,0.88) 50%, rgba(0,0,0,0.2) 100%)' }} />
        <div className="relative z-10  mx-auto px-4 pb-10 w-full">
          <p className="text-white/60 text-sm mb-2">Home / <span className="text-white">FAQ&apos;s</span></p>
          <h1 className="text-5xl font-bold text-white mb-2" style={{ }}>FAQ&apos;s</h1>
          <p className="text-white/70 text-sm">Lorem Ipsum Dipsum We Are Different Locations Lorem Ipsum Dipsum We Are Different Locations...</p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-3" style={{ }}>FAQ&apos;s</h2>
          <p className="text-center text-gray-500 text-sm mb-12">Everything you need to know about Volunteering in Nepal with VIN</p>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border overflow-hidden transition-all"
                style={{ borderColor: openIdx === i ? 'var(--blue)' : '#e5e7eb' }}>
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  style={{ background: openIdx === i ? 'var(--sky)' : 'white' }}>
                  <span className="text-sm font-semibold text-gray-800">{faq.q}</span>
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-lg shrink-0 ml-4 transition-transform"
                    style={{
                      background: openIdx === i ? 'var(--blue)' : '#f3f4f6',
                      color: openIdx === i ? 'white' : '#6b7280',
                      transform: openIdx === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}>
                    +
                  </span>
                </button>
                {openIdx === i && (
                  <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed" style={{ background: 'var(--sky)' }}>
                    {faq.a}
                  </div>
                )}
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


