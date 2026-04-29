'use client';
import { useState } from 'react';
import CTABanner from '../components/CTABanner';

const amounts = [25, 50, 100, 150, 250, 500];
const projects = ["Women's Empowerment", 'Child Development', 'Youth Empowerment', 'Public Health & Medical Care', 'Environmental Conservation', 'Disaster Risk Reduction'];

const impactItems = [
  { amount: '$25', impact: 'Provides school supplies for one child for a full academic year.' },
  { amount: '$50', impact: 'Funds one month of vocational training for a woman in a rural community.' },
  { amount: '$100', impact: 'Covers health screening and basic medicines for a family of four.' },
  { amount: '$250', impact: 'Sponsors youth leadership training for five young Nepalis.' },
  { amount: '$500', impact: 'Funds a complete disaster preparedness workshop for an entire village.' },
];

export default function DonatePage() {
  const [selected, setSelected] = useState(50);
  const [custom, setCustom] = useState('');
  const [project, setProject] = useState('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');

  return (
    <main>
      {/* Hero */}
      <section className="relative h-72 flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80" alt="Donate" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,10,70,0.88) 50%, rgba(0,0,0,0.2) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-10 w-full">
          <h1 className="text-5xl font-bold text-white mb-2" style={{ }}>Make a Difference Today</h1>
          <p className="text-white/70 text-sm max-w-lg">Your donation directly supports families and communities in Nepal.</p>
        </div>
      </section>

      {/* Donation form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Form */}
            <div className="flex-1">
              {/* Frequency */}
              <div className="flex gap-2 mb-8">
                {(['once', 'monthly'] as const).map(f => (
                  <button key={f} onClick={() => setFrequency(f)}
                    className="flex-1 py-3 rounded-xl text-sm font-semibold transition-all capitalize"
                    style={frequency === f ? { background: 'var(--indigo-btn)', color: 'white' } : { background: '#f3f4f6', color: '#6b7280' }}>
                    Donate {f === 'once' ? 'Once' : 'Monthly'}
                  </button>
                ))}
              </div>

              <p className="font-semibold text-sm mb-3" style={{ color: 'var(--text)' }}>Choose Amount</p>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {amounts.map(a => (
                  <button key={a} onClick={() => { setSelected(a); setCustom(''); }}
                    className="py-3 rounded-xl text-sm font-semibold border-2 transition-all"
                    style={{
                      borderColor: selected === a && !custom ? 'var(--indigo-btn)' : '#e5e7eb',
                      background: selected === a && !custom ? 'var(--indigo-btn)' : 'white',
                      color: selected === a && !custom ? 'white' : 'var(--text)',
                    }}>
                    ${a}
                  </button>
                ))}
              </div>
              <input type="number" placeholder="Custom amount (USD)"
                value={custom}
                onChange={e => { setCustom(e.target.value); setSelected(0); }}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-400 mb-6" />

              <p className="font-semibold text-sm mb-3">Choose Project</p>
              <div className="grid grid-cols-1 gap-2 mb-8">
                {projects.map(p => (
                  <label key={p} className="flex items-center gap-3 p-3 rounded-xl cursor-pointer border transition-all"
                    style={{ borderColor: project === p ? 'var(--indigo-btn)' : '#e5e7eb', background: project === p ? 'var(--sky)' : 'white' }}>
                    <input type="radio" name="project" value={p} checked={project === p} onChange={() => setProject(p)} className="accent-indigo-600" />
                    <span className="text-sm">{p}</span>
                  </label>
                ))}
              </div>

              <div className="rounded-2xl p-5 border border-gray-100 mb-6" style={{ background: 'var(--sky)' }}>
                <p className="font-semibold text-sm mb-1">Your Donation Summary</p>
                <p className="text-3xl font-bold" style={{ color: 'var(--navy)' }}>
                  ${custom || selected} {frequency === 'monthly' && <span className="text-base text-gray-500">/month</span>}
                </p>
                {project && <p className="text-sm text-gray-500 mt-1">For: {project}</p>}
              </div>

              <button className="w-full py-4 rounded-xl font-bold text-white text-base transition-all"
                style={{ background: 'var(--indigo-btn)' }}
                onMouseOver={e => (e.currentTarget.style.background = 'var(--navy)')}
                onMouseOut={e => (e.currentTarget.style.background = 'var(--indigo-btn)')}>
                Donate ${custom || selected} {frequency === 'monthly' ? 'Monthly' : 'Now'}
              </button>
              <p className="text-xs text-center text-gray-400 mt-3">🔒 Secure payment. Your data is protected.</p>
            </div>

            {/* Impact sidebar */}
            <div className="w-full lg:w-64 shrink-0">
              <h3 className="text-xl font-bold mb-6" style={{ }}>Your Impact</h3>
              <div className="space-y-4">
                {impactItems.map(item => (
                  <div key={item.amount} className="flex gap-3 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
                    <div className="font-bold text-sm shrink-0 w-12 text-center py-1 rounded-lg text-white" style={{ background: 'var(--indigo-btn)' }}>{item.amount}</div>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.impact}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-2xl text-white" style={{ background: 'var(--navy)' }}>
                <p className="text-xs font-semibold mb-1">Financial Transparency</p>
                <p className="text-2xl font-bold" style={{ }}>84.2%</p>
                <p className="text-xs text-white/70 mt-1">of every dollar goes directly to programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
