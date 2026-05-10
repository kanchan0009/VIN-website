"use client";

import { useState } from "react";

export default function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [project, setProject] = useState("");
  const [hoveredAmt, setHoveredAmt] = useState<number | null>(null);
  const [donateHovered, setDonateHovered] = useState(false);

  const amounts = [25, 50, 100, 150];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-2 items-center">
          
          {/* ── LEFT COLUMN ── */}
          <div className="w-full lg:w-1/2 space-y-3">
            <h2 className="text-2xl lg:text-[36px] font-[700] text-[#1D1E20] leading-[1.1] tracking-tight">
              Donate us to help empower the most marginalized rural communities in Nepal!
            </h2>

            {/* Image + overlapping stats */}
            <div className="relative w-full"> 
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&h=600&fit=crop"
                alt="Child in rural Nepal"
                className="w-full h-[280px] lg:h-[400px] object-cover  shadow-lg"
              />

              {/* Stats card overlapping bottom of image */}
              <div className="absolute -bottom-6 lg:-bottom-10 left-1/2 -translate-x-1/2 w-[97%] lg:w-[500px] bg-white p-6 lg:p-8 shadow-2xl flex items-center justify-between border border-gray-100 ">
                {/* Stat 1 */}
                <div className="flex flex-col items-center gap-3 text-center px-2">
                  <div className="text-[var(--blue)]">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.4-1.4 1"/>
                      <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-5.4a2 2 0 0 0-3-2.7L15 13"/>
                      <path d="M5 11V7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v4"/>
                      <path d="M5 11c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2"/>
                    </svg>
                  </div>
                  <span className="text-[12px] text-[#4A4A4A] font-[600] leading-tight">
                    Fund Raised & <br /> Donation Treat raised
                  </span>
                </div>

                {/* Divider */}
                <div className="h-12 w-px bg-gray-200 hidden lg:block"></div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center gap-3 text-center px-2">
                  <div className="text-[var(--blue)]">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                      <path d="M7 11h10"/>
                    </svg>
                  </div>
                  <span className="text-[12px] text-[#4A4A4A] font-[600] leading-tight">
                    We Helping People & <br /> Donation pik
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN (Donation Box) ── */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-16 lg:mt-0">
            <div className="w-full max-w-[480px] bg-white p-8 lg:p-10 shadow-sm border-[3px] border-[#3B82F6] flex flex-col gap-6 lg:gap-8 rounded-lg">
              {/* Heading */}
              <div className="space-y-1">
                <h3 className="text-[28px] lg:text-[32px] font-[700] text-[#1D1E20] leading-tight">
                  Make a Difference Today
                </h3>
                <p className="text-[13px] text-gray-500 font-[500]">
                  Your Donation directly supports families in need
                </p>
              </div>

              {/* Donation Amount */}
              <div className="space-y-4">
                <p className="text-[15px] font-[700] text-[#1D1E20]">
                  Donation Amount
                </p>

                {/* Preset buttons */}
                <div className="grid grid-cols-4 gap-2.5">
                  {amounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => {
                        setSelectedAmount(amt);
                        setCustomAmount("");
                      }}
                      className={`py-2.5 rounded-[6px] text-[14px] font-[700] transition-all duration-200 border ${
                        selectedAmount === amt
                          ? "bg-[#1a237e] border-[#1a237e] text-white shadow-md"
                          : "bg-[#E9EEF2] border-transparent text-[#1a237e] hover:bg-[#dce4eb]"
                      }`}
                    >
                      $ {amt}
                    </button>
                  ))}
                </div>

                {/* Currency + Custom */}
                <div className="flex gap-2.5">
                  <div className="relative w-1/3">
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="w-full p-3 bg-[#E9EEF2] border-transparent rounded-[6px] text-[13px] font-[600] text-gray-600 appearance-none outline-none cursor-pointer"
                    >
                      <option value="USD">USD ∨</option>
                      <option value="EUR">EUR ∨</option>
                      <option value="GBP">GBP ∨</option>
                    </select>
                  </div>
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="w-2/3 p-3 bg-[#E9EEF2] border-transparent rounded-[6px] text-[13px] font-[500] text-gray-600 outline-none focus:bg-white focus:border-[#3B82F6] transition-all"
                  />
                </div>
              </div>

              {/* Choose Project */}
              <div className="space-y-3">
                <p className="text-[15px] font-[700] text-[#1D1E20]">
                  Choose a Project to Support
                </p>
                <div className="relative">
                  <select
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    className="w-full p-3.5 bg-white border border-gray-200 rounded-[6px] text-[13px] font-[500] text-gray-500 appearance-none cursor-pointer outline-none focus:border-[#3B82F6] transition-colors"
                  >
                    <option value="" disabled>Choose a project to donate</option>
                    <option value="education">Education for Children</option>
                    <option value="health">Rural Healthcare</option>
                    <option value="water">Clean Water Access</option>
                    <option value="women">Women Empowerment</option>
                    <option value="disaster">Disaster Relief</option>
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Donate Button */}
              <button
                onMouseEnter={() => setDonateHovered(true)}
                onMouseLeave={() => setDonateHovered(false)}
                className="bg-[#2A6F7C] hover:bg-[#1e525c] text-white py-3.5 px-9 rounded-[6px] text-[16px] font-[600] transition-all duration-300 shadow-lg active:scale-95 self-start mt-2"
              >
                Donate Once
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

