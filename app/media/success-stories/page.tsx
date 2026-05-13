import CTABanner from "../../components/CTABanner";
import Link from "next/link";

const stories = [
  {
    id: 1,
    name: "Dagruel Mamulo",
    location: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1503917988258-f19772042ee6?w=600&q=80",
    text: "Namaste! My name is Shanti Tamang, I am a 34-year-old farmer from Devidhan, Tarakeshwar Municipality. Two years ago, I had the opportunity to participate in an English class offered by Volunteers Initiative Nepal (VIN) at the Women's Business Center (WBC) in Tinpipple, Tarakeshwar. At first, I hesitated to join because I thought learning English would be useless for someone like me, a farmer and a housewife. I was also worried it would interfere with my daily household activities. However, thanks to the encouragement of the women in my community, I decided to give it a try. Little did I know this decision would change my life in ways I never imagined."
  },
  {
    id: 2,
    name: "Dagruel Mamulo",
    location: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1503917988258-f19772042ee6?w=600&q=80",
    text: "Namaste! My name is Shanti Tamang, I am a 34-year-old farmer from Devidhan, Tarakeshwar Municipality. Two years ago, I had the opportunity to participate in an English class offered by Volunteers Initiative Nepal (VIN) at the Women's Business Center (WBC) in Tinpipple, Tarakeshwar. At first, I hesitated to join because I thought learning English would be useless for someone like me, a farmer and a housewife. I was also worried it would interfere with my daily household activities. However, thanks to the encouragement of the women in my community, I decided to give it a try. Little did I know this decision would change my life in ways I never imagined."
  },
  {
    id: 3,
    name: "Dagruel Mamulo",
    location: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1503917988258-f19772042ee6?w=600&q=80",
    text: "Namaste! My name is Shanti Tamang, I am a 34-year-old farmer from Devidhan, Tarakeshwar Municipality. Two years ago, I had the opportunity to participate in an English class offered by Volunteers Initiative Nepal (VIN) at the Women's Business Center (WBC) in Tinpipple, Tarakeshwar. At first, I hesitated to join because I thought learning English would be useless for someone like me, a farmer and a housewife. I was also worried it would interfere with my daily household activities. However, thanks to the encouragement of the women in my community, I decided to give it a try. Little did I know this decision would change my life in ways I never imagined."
  },
  {
    id: 4,
    name: "Dagruel Mamulo",
    location: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1503917988258-f19772042ee6?w=600&q=80",
    text: "Namaste! My name is Shanti Tamang, I am a 34-year-old farmer from Devidhan, Tarakeshwar Municipality. Two years ago, I had the opportunity to participate in an English class offered by Volunteers Initiative Nepal (VIN) at the Women's Business Center (WBC) in Tinpipple, Tarakeshwar. At first, I hesitated to join because I thought learning English would be useless for someone like me, a farmer and a housewife. I was also worried it would interfere with my daily household activities. However, thanks to the encouragement of the women in my community, I decided to give it a try. Little did I know this decision would change my life in ways I never imagined."
  },
  {
    id: 5,
    name: "Dagruel Mamulo",
    location: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1503917988258-f19772042ee6?w=600&q=80",
    text: "Namaste! My name is Shanti Tamang, I am a 34-year-old farmer from Devidhan, Tarakeshwar Municipality. Two years ago, I had the opportunity to participate in an English class offered by Volunteers Initiative Nepal (VIN) at the Women's Business Center (WBC) in Tinpipple, Tarakeshwar. At first, I hesitated to join because I thought learning English would be useless for someone like me, a farmer and a housewife. I was also worried it would interfere with my daily household activities. However, thanks to the encouragement of the women in my community, I decided to give it a try. Little did I know this decision would change my life in ways I never imagined."
  }
];

export default function SuccessStoriesPage() {
  return (
    <main className="font-montserrat">

      {/* Main Content */}
      <section className="py-18 bg-white">
        <div className=" mx-auto px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-center text-4xl lg:text-[45px] font-[800] text-[#1D1E20] mb-20 tracking-tight">
            Success Story
          </h2>

          {/* Stories List */}
          <div className="space-y-4">
            {stories.map((story, i) => (
              <div 
                key={story.id} 
                className={`p-8 md:p-10 border border-gray-300 rounded-[5px] flex flex-col md:flex-row gap-10 lg:gap-16 items-center ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-4">
                  <p className="text-[15px] text-[#4A4A4A] leading-[1.8] font-[400]">
                    {story.text}
                  </p>
                  <div>
                    <h4 className="text-[16px] font-[700] text-[#1D1E20]">{story.name}</h4>
                    <p className="text-[13px] text-[#9EA1A6] font-[600]">{story.location}</p>
                  </div>
                </div>

                {/* Image */}
                <div className="w-full md:w-[300px] lg:w-[320px] shrink-0">
                  <div className="aspect-square overflow-hidden rounded-[5px] shadow-sm">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex items-center justify-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[var(--blue)] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[15px] font-[700] text-[#4A4A4A] hover:border-[var(--blue)] transition-colors">1</button>
            <button className="w-10 h-10 rounded-full bg-[var(--blue)] flex items-center justify-center text-[15px] font-[700] text-white">2</button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[15px] font-[700] text-[#4A4A4A] hover:border-[var(--blue)] transition-colors">3</button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[15px] font-[700] text-[#4A4A4A] hover:border-[var(--blue)] transition-colors">4</button>
            <button className="w-10 h-10 flex items-center justify-center text-[var(--blue)] hover:opacity-70 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}


