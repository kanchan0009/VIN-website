import Link from 'next/link';
import { ArrowRight, CheckCircle, Play } from 'lucide-react';
import CTABanner from '../../components/CTABanner';
import GetInvolved from '../../components/GetInvolved';
import DonationWidget from '../../components/DonationWidget';

const stats = [
  { value: '1,800+', label: 'Women Trained in Education & Life Skills' },
  { value: '340', label: 'Women Micro-enterprise Supported' },
  { value: '96%', label: 'Participants report greater confidence' },
];

const goals = [
  { num: '01', title: 'Economic Sufficient', desc: "We empower women both socially and economically by providing them access to education. We also make a positive impact on the economic income generation opportunities." },
  { num: '02', title: 'Social Equality', desc: "We empower women both socially and economically by providing them access to education. We also ensure a positive impact on the local communities of their environment." },
  { num: '03', title: 'Quality Education', desc: "We empower women both socially and economically by providing them access to education. We also ensure a positive impact of gender equality." },
  { num: '04', title: 'Gender Equality', desc: "We empower women both socially and economically by providing them access to education. We also make a positive impact on the income generation opportunities." },
];

const whyItems = [
  { title: 'Social Equality', icon: '⚖️', desc: "We empower women both socially and economically by providing them access to education and income generation opportunities." },
  { title: 'Social Equality', icon: '📚', desc: "We empower women both socially and economically by providing them access to education and income generation opportunities." },
  { title: 'Social Equality', icon: '💼', desc: "We empower women both socially and economically by providing them access to education and income generation opportunities." },
  { title: 'Social Equality', icon: '🌱', desc: "We empower women both socially and economically by providing them access to education and income generation opportunities." },
];

const otherPrograms = [
  { title: "Children's Development", img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&q=80', stat: '18,400', href: '/programs/child-development' },
  { title: 'Youth Empowerment', img: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=300&q=80', stat: '9,200', href: '/programs/youth-empowerment' },
  { title: 'Public Health & Medical', img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=300&q=80', stat: '41,000', href: '/programs/public-health' },
  { title: 'Disaster Risk Reduction', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&q=80', stat: '12,000', href: '/programs/disaster-risk' },
];

export default function WomensEmpowermentPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-80 flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=80" alt="Women's Empowerment" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,10,70,0.88) 50%, rgba(0,0,0,0.2) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-10 w-full">
          <p className="text-white/60 text-sm mb-2">Home / All Programs / <span className="text-white">Women's Empowerment</span></p>
          <h1 className="text-5xl font-bold text-white" style={{ }}>Women's Empowerment Program</h1>
        </div>
      </section>

      {/* Why + Empowered Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-14">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-8" style={{ }}>Why Women Empowerment Programs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyItems.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-2xl shrink-0 mt-1">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-sm mb-1" style={{ }}>{item.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="max-w-xs w-full">
              <div className="rounded-2xl p-6 border-2 text-center" style={{ borderColor: 'var(--indigo-btn)', background: 'var(--sky)' }}>
                <h3 className="text-lg font-bold mb-4" style={{ }}>Empowered women we envision to be</h3>
                <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl" style={{ background: 'var(--indigo-btn)' }}>
                  ♀
                </div>
                <ul className="text-xs text-gray-600 space-y-2 text-left">
                  {["I'm a woman in Nepal on 6%lands", '4 in 4 women do not have ownership over property.', 'We are women are confronted against violence-type cases: women', 'Nepal is ranked 98 out of 189 countries in Gender Empowerment Measure (GEM).', 'GBV remains a risk to 85 women struggle to break the cycle annually.'].map((fact, i) => (
                    <li key={i} className="flex gap-2"><CheckCircle size={12} className="shrink-0 mt-0.5" style={{ color: 'var(--indigo-btn)' }} />{fact}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Situation */}
      <section className="py-16" style={{ background: 'var(--sky)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8" style={{ }}>Current Situation</h2>
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="shrink-0 text-center p-8 rounded-2xl text-white" style={{ background: 'var(--indigo-btn)' }}>
              <div className="text-6xl font-bold mb-2" style={{ }}>58%</div>
              <div className="text-sm text-white/80">Women lack economic independence in rural areas</div>
            </div>
            <div className="flex-1 space-y-3">
              {['We empower women both socially and economically by providing them access to education. We also provide access to income generation opportunities.',
                'We empower women both socially and economically by providing them access to education. We also provide access to income generation opportunities.',
                'We empower women both spatially and economically by providing access to education. We also make a positive impact on income generation.',
                'We empower women both spatially and economically by providing them access to education. We also ensure a positive impact of social generation.'].map((item, i) => (
                <div key={i} className="flex gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: 'var(--indigo-btn)' }} />
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ }}>What we're working toward</h2>
          <div className="relative rounded-2xl overflow-hidden h-72 bg-red-600 flex items-center justify-center cursor-pointer group">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80" alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" />
            <div className="relative z-10 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <Play size={22} fill="var(--indigo-btn)" stroke="var(--indigo-btn)" className="ml-1" />
            </div>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-16" style={{ background: 'var(--sky)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10" style={{ }}>Goals</h2>
          <div className="space-y-6">
            {goals.map(g => (
              <div key={g.num} className="flex gap-6 bg-white rounded-xl p-6 border border-gray-100">
                <div className="text-4xl font-bold shrink-0" style={{ color: 'var(--indigo-btn)', opacity: 0.3 }}>{g.num}</div>
                <div>
                  <h4 className="font-bold text-base mb-2" style={{ }}>{g.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ }}>Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map(s => (
              <div key={s.label} className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold mb-2" style={{ color: 'var(--navy)', }}>{s.value}</div>
                <div className="text-sm text-gray-500 leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-gray-50 rounded-2xl p-6 text-sm text-gray-600 leading-relaxed">
            <p>Since 2015, the Women's Empowerment Program has partnered with local women groups, NGOs and international partners to facilitate holistic change. During this time the programs have helped over 32,000 women across Nepal gain access to quality education and vocational training.</p>
            <br />
            <p>Entrepreneurship training was provided to 1300 women e.g. trainings on entrepreneurship, Animal Husbandry, Cheese Making etc. The Trafficking Prevention Education project supported 175 women. They were provided with trainings/inputs in Embroidery Writing, Jewelry Making and Business Management. Establishment of Women Business Centre in Banekhali, Kathmandu, benefitted 1,000 women.</p>
          </div>
        </div>
      </section>

      {/* Photos & Videos */}
      <section className="py-16" style={{ background: 'var(--sky)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ }}>Photos & Videos</h2>
          <p className="text-center text-gray-500 text-sm mb-8 max-w-xl mx-auto">VIN facilitates projects focused on the women and children of marginalized communities against this challenging separation. VIN believes that the women and children will bring about positive change.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80', 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400&q=80', 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80', 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80'].map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden h-36">
                <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ }}>Testimonials</h2>
          <div className="max-w-3xl mx-auto rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 items-start">
            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80" alt="" className="w-16 h-16 rounded-full object-cover shrink-0" />
            <div>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-3">
                "Namaste my name is Bharti Tamang. I am a 26-year-old farmer from Devisthan-Maharjganj. Two years ago, I had the opportunity to participate in a VIN English class offered in Thapatali, Kathmandu. At first I was skeptical that learning English would be useless for someone like me, a farmer and a housewife. I also wanted to earn more to assist my daily household activities. However, thanks to the encouragement of the women in my community, I decided to give it a try. Little did I know this decision would change my life in ways I never imagined."
              </p>
              <p className="font-bold text-sm" style={{ }}>Bharjit Morsali</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link href="/testimonials" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm" style={{ background: 'var(--indigo-btn)' }}>
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Other Programs */}
      <section className="py-16" style={{ background: 'var(--sky)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6" style={{ }}>Other Programs</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {otherPrograms.map(p => (
              <Link href={p.href} key={p.title} className="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative h-32 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-2 left-2">
                    <span className="text-base font-bold text-white" style={{ }}>{p.stat}</span>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-xs font-bold" style={{ }}>{p.title}</p>
                  <Link href={p.href} className="text-xs font-semibold mt-1 block" style={{ color: 'var(--indigo-btn)' }}>View Project →</Link>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/programs" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm" style={{ background: 'var(--indigo-btn)' }}>
              View More
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
      <GetInvolved />
    </main>
  );
}
