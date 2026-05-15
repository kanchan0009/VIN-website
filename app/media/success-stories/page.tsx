"use client";
import { useState } from "react";
import CTABanner from "../../components/CTABanner";
import { ChevronLeft, ChevronRight } from "lucide-react";

const stories = [
  {
    id: 1,
    name: "Shanti Tamang",
    location: "Tarakeshwar, Nepal",
    image: "https://images.unsplash.com/photo-1503917988258-f19772042ee6?w=600&q=80",
    text: "Namaste! My name is Shanti Tamang, I am a 34-year-old farmer from Devidhan, Tarakeshwar Municipality. Two years ago, I had the opportunity to participate in an English class offered by Volunteers Initiative Nepal (VIN) at the Women's Business Center (WBC) in Tinpipple, Tarakeshwar. At first, I hesitated to join because I thought learning English would be useless for someone like me, a farmer and a housewife. I was also worried it would interfere with my daily household activities. However, thanks to the encouragement of the women in my community, I decided to give it a try. Little did I know this decision would change my life in ways I never imagined."
  },
  {
    id: 2,
    name: "Rajesh Sharma",
    location: "Kathmandu, Nepal",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
    text: "Through VIN's permaculture project, I learned how to manage my small farm sustainably. The introduction of drip irrigation and organic composting has nearly doubled my seasonal yield. I can now provide better education for my children and have even started training other farmers in my village. The support from international volunteers also opened our eyes to global farming standards and sustainable practices that we never knew were possible."
  },
  {
    id: 3,
    name: "Anjali Rai",
    location: "Okhaldhunga, Nepal",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    text: "I was always shy and lacked confidence until I joined the Women's Empowerment group. VIN provided us with leadership training and career counseling. Today, I am the president of our local savings and credit cooperative. We have empowered over 50 women in our community to start their own small businesses, from poultry farming to traditional weaving. This journey hasn't just been about money; it's about finding our voice and standing on our own feet."
  },
  {
    id: 4,
    name: "Suman Thapa",
    location: "Nuwakot, Nepal",
    image: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=600&q=80",
    text: "After the earthquake, our village school was in ruins. VIN didn't just help rebuild the classrooms; they brought in resources for a child-friendly learning environment. The new Early Childhood Development center has become a hub for the kids. Seeing my son excited to go to school every morning is the greatest gift. The focus on hygiene and WASH programs has also significantly reduced health issues among the children in our community."
  },
  {
    id: 5,
    name: "Sunita Chaudhary",
    location: "Tarakeshwar, Nepal",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
    text: "The health camps organized by VIN saved my mother's life. We live in a remote area where medical facilities are sparse. During one of the screenings, she was diagnosed with a condition that needed urgent attention. VIN's staff coordinated the referral and supported us throughout the treatment. They also taught us about preventative healthcare and nutrition, which has improved the overall well-being of our entire family."
  },
  {
    id: 6,
    name: "Pasang Lhamu",
    location: "Everest Region, Nepal",
    image: "https://images.unsplash.com/photo-1522071823991-b96767a1c56f?w=600&q=80",
    text: "Environmental conservation is vital for our mountains. VIN's waste management and reforestation programs have transformed our village. We've planted thousands of trees and established a community-led waste collection system. This hasn't just beautified our home; it's protecting our water sources and creating a sustainable future for our children. The education on climate change has helped us adapt our traditional ways to the changing environment."
  },
  {
    id: 7,
    name: "Kiran Gurung",
    location: "Pokhara, Nepal",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80",
    text: "Vocational training changed my career path. I was struggling with irregular work until I took the IT and digital literacy course at the VIN community center. Now, I work as a data entry specialist and handle digital marketing for a local tourism agency. The skills I gained are invaluable in today's world. VIN provided the tools and the mentorship I needed to transition into the modern workforce."
  },
  {
    id: 8,
    name: "Maya Devi",
    location: "Kathmandu Valley, Nepal",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
    text: "Joining the micro-credit group allowed me to open my small grocery shop. Before this, I had no access to loans or financial advice. VIN's program taught us financial management and helped us establish a collective fund. My shop is now thriving, and I've even been able to hire another woman from the village to help me. This economic independence has given me a sense of pride and security I never thought possible."
  },
];

export default function SuccessStoriesPage() {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(stories.length / itemsPerPage);
  const currentStories = stories.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            {currentStories.map((story, i) => (
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
            <button 
              onClick={() => goToPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`w-10 h-10 flex items-center justify-center transition-colors ${currentPage === 1 ? 'text-gray-200 cursor-not-allowed' : 'text-gray-400 hover:text-[var(--blue)]'}`}
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-3">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button 
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-[700] transition-colors ${
                    currentPage === page 
                      ? "bg-[var(--blue)] text-white" 
                      : "border border-gray-200 text-[#4A4A4A] hover:border-[var(--blue)]"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button 
              onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 flex items-center justify-center transition-colors ${currentPage === totalPages ? 'text-gray-200 cursor-not-allowed' : 'text-[var(--blue)] hover:opacity-70'}`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
