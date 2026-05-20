import CTABanner from "../components/CTABanner";
import VolunteerOpportunities from "../components/VolunteerOpportunities";

export default function VolunteerPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex items-end overflow-hidden h-[75vh] min-h-[600px] max-h-[800px]">
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80"
          alt="Volunteer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(20,10,70,0.88) 50%, rgba(0,0,0,0.2) 100%)",
          }}
        />
        <div className="relative z-10  mx-auto px-4 pb-10 w-full">
          <h1
            className="text-5xl font-bold text-white mb-3"
            style={{ }}
          >
            Volunteer in Nepal
          </h1>
          <p className="text-white/80 text-lg max-w-4xl">
            Join thousands of volunteers who have made a lasting difference in
            Nepal's communities.
          </p>
        </div>
      </section>

      <VolunteerOpportunities />

      <CTABanner />
    </main>
  );
}


