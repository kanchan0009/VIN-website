import Link from 'next/link';
import { Play } from 'lucide-react';
import CTABanner from '../../components/CTABanner';
import GetInvolved from '../../components/GetInvolved';

export default function ChildDevelopmentPage() {
  return (
    <main>
      <section className="relative h-[670px] flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80" alt="Child Development" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,10,70,0.88) 50%, rgba(0,0,0,0.2) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-10 w-full">
          
          <h1 className="text-5xl font-bold text-white" style={{ }}>Child Development Program</h1>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-5" style={{ }}>Why Child Development Programs</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Children's life facilitates through children's basic rights awareness. VIN believes that every child deserves access to quality education, healthcare, and a safe environment to grow and flourish. Our Child Development program addresses barriers that prevent children from reaching their full potential.
              </p>
              <div className="grid grid-cols-3 gap-5 mb-8">
                {[{ v: '18,400', l: 'Children Educated' }, { v: '250+', l: 'Schools Supported' }, { v: '95%', l: 'Attendance Rate' }].map(s => (
                  <div key={s.l} className="text-center p-5 rounded-2xl border border-gray-100">
                    <div className="text-2xl font-bold" style={{ color: 'var(--navy)', }}>{s.v}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our programs include after-school tutoring, school supply distribution, teacher training, child rights awareness, and nutritional support. We work with local schools and communities to create child-friendly environments that foster learning and development.
              </p>
            </div>
            <div className="flex-1 max-w-md">
              <div className="relative rounded-2xl overflow-hidden h-72 bg-red-600 flex items-center justify-center cursor-pointer group">
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80" alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                <div className="relative z-10 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play size={22} fill="var(--blue)" stroke="var(--blue)" className="ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16" style={{ background: 'var(--sky)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8" style={{ }}>Our Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['Ensure access to quality education for all children', 'Support children\'s health and nutritional needs', 'Create safe learning environments', 'Raise awareness of children\'s rights'].map((g, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 flex gap-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0" style={{ background: 'var(--blue)' }}>{i + 1}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{g}</p>
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


