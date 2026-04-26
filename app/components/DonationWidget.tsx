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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div
          style={{
            maxWidth: "2000px",
            margin: "0 auto",
            display: "flex",
            gap: "28px",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* ── LEFT COLUMN ── */}
          <div
            style={{
              flex: "0 0 62%",
              minWidth: "280px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              paddingBottom: "48px",
              boxSizing: "border-box",
            }}
          >
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Donate us to help empower the most marginalized rural communities
              in Nepal!
            </h2>

            {/* Image + overlapping stats */}
            <div style={{ position: "relative", width: "72%" }}>
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&h=440&fit=crop"
                alt="Child in rural Nepal"
                style={{
                  display: "block",
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />

              {/* Stats card overlapping bottom of image */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-38px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "94%",
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                  boxShadow: "0 2px 14px rgba(0,0,0,0.15)",
                  display: "flex",
                  alignItems: "stretch",
                }}
              >
                {/* Stat 1 */}
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                    padding: "14px 10px",
                    borderRight: "1px solid #e5e7eb",
                    boxSizing: "border-box",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M16 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                      fill="#374151"
                    />
                    <path
                      d="M23 17h-3.2l-1.8-1.8H13c-1.1 0-2 .9-2 2v3.5c0 .5.2 1 .5 1.4L9 24.5l1.2 1.2 2.8-2.8H23c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 4H13.5V17h3.7l1.8 1.8H23V21z"
                      fill="#374151"
                    />
                  </svg>
                  <span
                    style={{
                      fontSize: "10.5px",
                      color: "#374151",
                      textAlign: "center",
                      lineHeight: "1.45",
                      fontWeight: "500",
                    }}
                  >
                    Fund Raised &amp;
                    <br />
                    Donation Treat raised
                  </span>
                </div>

                {/* Stat 2 */}
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                    padding: "14px 10px",
                    boxSizing: "border-box",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M16 7 L7 15 L10 15 L10 25 L14 25 L14 20 L18 20 L18 25 L22 25 L22 15 L25 15 Z"
                      fill="#374151"
                    />
                    <circle cx="11" cy="11" r="2" fill="#374151" />
                    <circle cx="21" cy="11" r="2" fill="#374151" />
                    <path
                      d="M8 25v-3c0-1 .9-1.8 2-1.8h1.5"
                      stroke="#374151"
                      strokeWidth="1.3"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M24 25v-3c0-1-.9-1.8-2-1.8h-1.5"
                      stroke="#374151"
                      strokeWidth="1.3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span
                    style={{
                      fontSize: "10.5px",
                      color: "#374151",
                      textAlign: "center",
                      lineHeight: "1.45",
                      fontWeight: "500",
                    }}
                  >
                    We Helping People &amp;
                    <br />
                    Donation pik
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div
            style={{
              flex: "1 1 280px",
              border: "2px solid #3b5bdb",
              borderRadius: "6px",
              padding: "24px 22px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              backgroundColor: "#fff",
              boxSizing: "border-box",
            }}
          >
            {/* Heading */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#111",
                  textAlign: "center",
                  margin: 0,
                }}
              >
                Make a Difference Today
              </h3>
              <p
                style={{
                  fontSize: "11.5px",
                  color: "#6b7280",
                  textAlign: "center",
                  margin: 0,
                }}
              >
                Your Donation directly supports families in need
              </p>
            </div>

            {/* Donation Amount */}
            <div>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "#111",
                  margin: "0 0 8px 0",
                }}
              >
                Donation Amount
              </p>

              {/* Preset buttons */}
              <div style={{ display: "flex", gap: "6px" }}>
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    onMouseEnter={() => setHoveredAmt(amt)}
                    onMouseLeave={() => setHoveredAmt(null)}
                    onClick={() => {
                      setSelectedAmount(amt);
                      setCustomAmount("");
                    }}
                    style={{
                      flex: 1,
                      padding: "8px 0",
                      borderRadius: "4px",
                      fontSize: "13px",
                      fontWeight: "600",
                      cursor: "pointer",
                      border:
                        selectedAmount === amt
                          ? "1px solid #1e3a5f"
                          : "1px solid #d1d5db",
                      backgroundColor:
                        selectedAmount === amt
                          ? "#1e3a5f"
                          : hoveredAmt === amt
                            ? "#e5e7eb"
                            : "#f3f4f6",
                      color: selectedAmount === amt ? "#fff" : "#374151",
                      textAlign: "center",
                      transition: "all 0.15s",
                      boxSizing: "border-box",
                    }}
                  >
                    $ {amt}
                  </button>
                ))}
              </div>

              {/* Currency + Custom */}
              <div style={{ display: "flex", gap: "6px", marginTop: "8px" }}>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  style={{
                    padding: "8px 10px",
                    border: "1px solid #d1d5db",
                    borderRadius: "4px",
                    fontSize: "12px",
                    color: "#374151",
                    backgroundColor: "#fff",
                    cursor: "pointer",
                    outline: "none",
                    minWidth: "70px",
                    boxSizing: "border-box",
                  }}
                >
                  <option value="USD">USD ∨</option>
                  <option value="EUR">EUR ∨</option>
                  <option value="GBP">GBP ∨</option>
                  <option value="NPR">NPR ∨</option>
                </select>
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  style={{
                    flex: 1,
                    padding: "8px 12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "4px",
                    fontSize: "12px",
                    color: "#9ca3af",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>

            {/* Choose Project */}
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#111",
                  margin: "0 0 8px 0",
                }}
              >
                Choose a Project to Support
              </p>
              <select
                value={project}
                onChange={(e) => setProject(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  fontSize: "13px",
                  color: project ? "#374151" : "#9ca3af",
                  appearance: "none",
                  WebkitAppearance: "none",
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              >
                <option value="" disabled>
                  Choose a project to donate
                </option>
                <option value="education">Education for Children</option>
                <option value="health">Rural Healthcare</option>
                <option value="water">Clean Water Access</option>
                <option value="women">Women Empowerment</option>
                <option value="disaster">Disaster Relief</option>
              </select>
            </div>

            {/* Donate Button */}
            <button
              onMouseEnter={() => setDonateHovered(true)}
              onMouseLeave={() => setDonateHovered(false)}
              style={{
                backgroundColor: donateHovered ? "#176f59" : "#20866b",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                padding: "11px 26px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                alignSelf: "flex-start",
                transition: "background 0.2s",
                boxSizing: "border-box",
              }}
            >
              Donate Once
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
