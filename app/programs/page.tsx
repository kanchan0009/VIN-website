import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CTABanner from '../components/CTABanner';
import DonationWidget from '../components/DonationWidget';

const programs = [
  {
    title: "Women's Empowerment",
    desc: "We empower women both socially and economically by providing them access to education, healthcare, income generation opportunities, and leadership training.",
    stat: '32,035',
    statLabel: "Women's life Impacted",
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80',
    href: '/programs/womens-empowerment',
    color: '#6366f1',
  },
  {
    title: 'Child Development',
    desc: "Children's life facilitates through children's basic rights awareness. Children Education Foundation and Support to Marginalized Communities.",
    stat: '18,400',
    statLabel: "Children Educated",
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
    href: '/programs/child-development',
    color: '#0ea5e9',
  },
  {
    title: 'Youth Empowerment',
    desc: "Youth empowerment is a process where children and young people are encouraged to take charge of their lives, develop skills, and participate in society.",
    stat: '9,200',
    statLabel: "Youth Trained",
    img: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=600&q=80',
    href: '/programs/youth-empowerment',
    color: '#10b981',
  },
  {
    title: 'Public Health & Medical Care',
    desc: "Public Health focuses on education for the community's health and preventing disease. Basic health service for the marginalized and poor communities.",
    stat: '41,000',
    statLabel: "People Treated",
    img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80',
    href: '/programs/public-health',
    color: '#f59e0b',
  },
  {
    title: 'Environmental Conservation',
    desc: "Environmental conservation targets sustainable agriculture for sustainable and smart development with environment friendly initiatives.",
    stat: '5,600',
    statLabel: "Trees Planted",
    img: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600&q=80',
    href: '/programs/environment',
    color: '#22c55e',
  },
  {
    title: 'Disaster Risk Reduction',
    desc: "Disaster Risk Reduction addresses community disaster prevention plans and response, disaster preparedness and resilience training.",
    stat: '12,000',
    statLabel: "Families Prepared",
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
    href: '/programs/disaster-risk',
    color: '#ef4444',
  },
];

export default function ProgramsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex items-end overflow-hidden h-[75vh] min-h-[600px] max-h-[800px]">
        <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80" alt="All Programs" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,10,70,0.88) 50%, rgba(0,0,0,0.2) 100%)' }} />
        <div className="relative z-10  mx-auto px-4 pb-10 w-full">
          <h1 className="text-5xl font-bold text-white mb-2" style={{ }}>All Programs</h1>
          <p className="text-white/70 text-[16px] max-w-lg">Lorem Ipsum Dipsum: We Are Different Locations Lorem Ipsum Dipsum We Are Different</p>
        </div>
      </section>

      {/* About Programs */}
      <section className="py-14 bg-white">
        <div className=" mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4" style={{ }}>Our Community Development Programs</h2>
          <p className="text-gray-500 text-[16px] max-w-4xl mx-auto leading-relaxed mb-8">
            Volunteers Initiative Nepal (VIN), established in 2002 by a diverse group drawn from development workers, educationalists, social activists and other professionals. VIN is officially registered under the Society Act with the District Administration Office, Kathmandu (Reg. No. 140/062/63), and affiliated with the Social Welfare Council (SWC) (Affiliation No. 20993). VIN focuses on community-based projects involving local volunteers backed-up by international volunteers in Nepal.
          </p>
          <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3 rounded-[10px] font-semibold text-white text-sm" style={{ background: 'var(--blue)' }}>
            Read More <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-10 pb-20 bg-white">
        <div className=" mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {programs.map(p => (
              <div key={p.title} className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-52 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,10,70,0.75) 0%, transparent 60%)' }} />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xl font-bold text-white" style={{ }}>{p.stat}</span>
                    <span className="text-white/80 text-xs block">{p.statLabel}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2" style={{ }}>{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.desc}</p>
                  <Link href={p.href} className="text-sm font-semibold flex items-center gap-1" style={{ color: 'var(--blue)' }}>
                    View Program <ArrowRight size={13} />
                  </Link>
                </div>
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


