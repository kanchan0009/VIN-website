import Link from "next/link";

export default function GetInvolved() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Get Involved
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Join us in making a difference. Whether you want to volunteer, donate,
          or partner with us, there are many ways to support our mission.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/volunteer"
            className="px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: "var(--indigo-btn)" }}
          >
            Volunteer
          </Link>
          <Link
            href="/donate"
            className="px-6 py-3 rounded-lg text-sm font-semibold border-2 transition-all"
            style={{
              borderColor: "var(--indigo-btn)",
              color: "var(--indigo-btn)",
            }}
          >
            Donate
          </Link>
        </div>
      </div>
    </section>
  );
}
