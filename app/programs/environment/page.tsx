import CTABanner from '../../components/CTABanner';
import GetInvolved from '../../components/GetInvolved';

export default function ProgramPage() {
  const titles: Record<string, string> = {
    'youth-empowerment': 'Youth Empowerment Program',
    'public-health': 'Public Health & Medical Care',
    'environment': 'Environmental Conservation',
    'disaster-risk': 'Disaster Risk Reduction',
  };
  const imgs: Record<string, string> = {
    'youth-empowerment': 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=1600&q=80',
    'public-health': 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=1600&q=80',
    'environment': 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1600&q=80',
    'disaster-risk': 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80',
  };
  const slug = 'environment';
  return (
    <main>
      <section className="relative h-80 flex items-end overflow-hidden">
        <img src={imgs[slug]} alt={titles[slug]} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,10,70,0.88) 50%, rgba(0,0,0,0.2) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-10 w-full">
          <p className="text-white/60 text-sm mb-2">Home / All Programs / <span className="text-white">{titles[slug]}</span></p>
          <h1 className="text-5xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>{titles[slug]}</h1>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>{titles[slug]}</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
            VIN&apos;s {titles[slug]} program is designed to address the specific needs of Nepal&apos;s most marginalized communities. Through evidence-based interventions and community participation, we create lasting positive change in the lives of thousands of Nepalis.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {[{ v: '12,000+', l: 'People Reached' }, { v: '15+', l: 'Districts Covered' }, { v: '95%', l: 'Satisfaction Rate' }].map(s => (
              <div key={s.l} className="text-center p-6 rounded-2xl border border-gray-100">
                <div className="text-2xl font-bold" style={{ color: 'var(--navy)', fontFamily: 'Playfair Display, serif' }}>{s.v}</div>
                <div className="text-xs text-gray-500 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
      <GetInvolved />
    </main>
  );
}
