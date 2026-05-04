import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import CTABanner from "../components/CTABanner";


const programs = [
  {
    title: "Women's Empowerment",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
  },
  {
    title: "Child Development",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
  },
  {
    title: "Youth Empowerment",
    img: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400&q=80",
  },
  {
    title: "Public Health",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&q=80",
  },
  {
    title: "Environment",
    img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&q=80",
  },
  {
    title: "Disaster Risk",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80",
  },
];

const volunteerPrograms = [
  {
    title: "Women's Empowerment",
    sub: "Central to empowerment & prosperity",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80",
  },
  {
    title: "Children's Development",
    sub: "Building futures through education",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&q=80",
  },
  {
    title: "Youth Empowerment",
    sub: "Invest in the next generation",
    img: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=300&q=80",
  },
  {
    title: "Youth Empowerment",
    sub: "Skills and leadership training",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&q=80",
  },
  {
    title: "Public Health & Medical Care",
    sub: "Healthcare for all communities",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=300&q=80",
  },
  {
    title: "Environment & Conservation",
    sub: "Protecting Nepal's natural heritage",
    img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=300&q=80",
  },
  {
    title: "Environment & Conservation",
    sub: "Sustainable land and water use",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&q=80",
  },
  {
    title: "Environment & Conservation",
    sub: "Community forest programs",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&q=80",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[670px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80"
          alt="About VIN"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(20,10,70,0.85) 50%, rgba(0,0,0,0.2) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-16 w-full">
          <h1
            className="text-5xl font-bold text-white mb-2"
          >
            About Us
          </h1>
          <p className="text-white/80 max-w-xl text-lg">
            Empowering marginalized communities through sustainable development.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 text-left mb-4"
          >
            Our Mission
          </h2>
          <p className="text-left text-gray-600 text-base leading-relaxed mb-16">
            Our mission is to provide community empowerment through education,
            livelihood, health, and environment development programs,
            implemented through sustainable community-development programme
            approaches.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
            {programs.map((p) => (
              <div
                key={p.title}
                className="overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Section */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Title Bar Section */}
                <div className="bg-[#221C84] py-3 px-4 text-center">
                  <span className="text-white text-[15px] font-medium tracking-wide">
                    {p.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6 text-gray-700 text-base leading-relaxed text-left">
            <p>
              VIN has been mobilizing local and international volunteers in
              various development programs including education and training,
              women and children, health and sanitation, and
              construction-related activities. We have also been deploying its
              volunteers in teaching, treatment, health, and wellness, helping
              children in orphanages, environmental and sustainable development
              programs.
            </p>
            <p>
              Women and children: the nucleus of our development process. We pay
              special attention to women and children's issues. We bring
              awareness and skills and encourage women to challenge the existing
              social norms of patriarchy in society.
            </p>
            <p>
              Hundreds of women have benefited through literacy, life skills,
              income generation, awareness training, child rights awareness,
              microfinance, environmental awareness, waste management, tree
              plantation, cultural promotion, natural resource management,
              sustainable agricultural development programs.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Programs */}
      <section className="py-24" >
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Image */}
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80"
                alt="Volunteer in Nepal"
                className="rounded-2xl w-full h-[500px] object-cover shadow-xl"
              />
            </div>

            {/* Right Content */}
            <div className="flex-1">
              <h2
                className="text-4xl font-bold text-gray-900 mb-6"
              >
                Volunteer programs
              </h2>
              <div className="space-y-6 text-gray-700 text-base leading-relaxed">
                <p>
                  This has been possible due to our dedicated staff, alliances with like-minded organisations and the efforts and contributions of local and international volunteers. We offer the most affordable international volunteering & internship placements in Nepal. VIN funds and runs mid to long-term sustainable community based volunteer service projects, focusing on those most disadvantaged communities with special focus on women, children and minority groups.
                </p>
                <p>
                  Our holistic development model – education, health & environment, tools for economic well-being and the provision of basic infrastructure have proved to be effective to those disadvantaged communities. Building our projects on these pillars and SDGs have ensured an integrated and sustainable impact on the community people and will give the greatest chance of independence for our working communities.
                </p>
                <p>
                  So, when you join VIN either as a donor, sponsor or volunteer or an intern, you can be sure you will be part of long-term, positive change for Nepal. Whether we have volunteers / interns or not, our projects continuously run by our local full-time staff. This is just one of the great reasons to choose to work with VIN.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/volunteer"
                  className="inline-flex items-center gap-2 px-6 py-3  font-semibold text-white text-sm hover:scale-105 transition-transform"
                  style={{ background: "var(--blue, #221c84)" }}
                >
                  Volunteer in Nepal <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Most Trusted */}
      <section className="py-16" style={{ background: "var(--blue, #221c84)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
          <h2
            className="text-3xl font-bold text-white mb-3"
          >
            Volunteer in Nepal with the most trusted local volunteer
            organization
          </h2>
          <p className="text-white/70 text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
            We are partnered with most of the top volunteer-sending
            organizations in the world. Our experienced local team comprises
            over 1,200 highly trained full-time staff and volunteers. We are
            VIN, FORUM, CCIVS, NVDA, AVSO, NetHope members.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "FORUM",
              "CCIVS",
              "NVDA",
              "AVSO",
              "European Commission",
              "NetHope",
            ].map((org) => (
              <span
                key={org}
                className="px-4 py-2 rounded-full text-xs font-semibold text-white border border-white/30"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                {org}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 10 best programs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <h2
            className="text-5xl font-[500] text-gray-900 text-center mb-3"
            
          >
            10 best volunteer programs in <br />Nepal includes 
          </h2>
          <p className="text-center text-gray-700 text-base mb-12 max-w-2xl mx-auto">
            Thanks to our volunteer friends for providing us with their support.
            We are a non-profit, non-governmental organization working at the
            end of the world with real people.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Women's Empowerment",
                img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80",
              },
              {
                title: "Children's Development",
                img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&q=80",
              },
              {
                title: "Youth Empowerment",
                img: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=300&q=80",
              },
              {
                title: "Youth Empowerment",
                img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&q=80",
              },
              {
                title: "Public Health & Medical Care",
                img: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=300&q=80",
              },
              {
                title: "Environment & Conservation",
                img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=300&q=80",
              },
              {
                title: "Environment & Conservation",
                img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&q=80",
              },
              {
                title: "Disaster Risk Reduction",
                img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&q=80",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="overflow-hidden group cursor-pointer bg-white shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col text-center"
              >
                {/* Image Section with Overlay */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end pb-3">
                    <p className="text-white font-bold text-lg leading-none">32,035</p>
                    <p className="text-white/80 text-[10px] uppercase tracking-tighter mt-1">Women's Life Impacted</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col justify-center gap-3">
                  <h3 className="text-[15px] font-bold text-gray-900 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed font-medium px-2">
                    Is central to empowerment & prosperity of a community.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nepal's Challenge */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <h2
            className="text-5xl font-bold text-gray-900 text-left mb-10"
            
          >
            Nepal's Challenge
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-12 mb-10">
            {/* Left Content (Part 1) */}
            <div className="flex-1 space-y-6 text-gray-700 text-[15px] leading-relaxed">
              <p>
                Despite Nepal's popular appeal to tourists, it is one of the poorest and least
                developed countries in the world, with over 25% of its population living below
                the poverty line.
              </p>
              <p>
                A country of contrasts, Nepal is home to a dramatic landscape and a rich
                culture. But its geography renders around 80% of its land hostile to agriculture,
                it is susceptible to natural disasters and its feudal and religious heritage mean
                that discrimination between gender and caste prevents Nepal from looking
                towards a brighter future.
              </p>
              <p>
                Landlocked, the country remains in an uncomfortable strategic position
                between the powers of India and China. Much of the land itself is hostile to
                agriculture, with approximately only 20% being open to cultivation, yet more
                than 75% of the population still depend on agriculture for survival. This means
                there are periods in the year where families have no source of either income
                nor subsistence.
              </p>
            </div>
            
            {/* Right Image */}
            <div className="lg:w-[450px] shrink-0">
              <img
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80"
                alt="Nepal landscape"
                className="rounded-lg w-full h-[350px] object-cover shadow-sm"
              />
            </div>
          </div>

          {/* Full Width Content (Part 2) */}
          <div className="space-y-6 text-gray-700 text-[15px] leading-relaxed">
            <p>
              Despite the severe shortage of fertile land, more than 75% of Nepal's population depend on subsistence-farming for survival. During the
              harvest season, children in rural areas will not be allowed to attend school, needed in the home to babysit or complete chores. In the
              months when there is no yield for land, the children become a source of income, farmed out as child labour. In the instances where
              children do attend school, they are not encouraged to open their books at the end of the day because they have chores to do. And where
              incomes are tight, families cannot afford the extra cost of school supplies and uniforms.
            </p>
            <p>
              Despite a pledge by the Nepalese Government to the UN to empower its women by 2015, gender discrimination remains a constant reality.
              A girl child is often seen by their family as a burden. Instead of receiving education and the chance of a better job, they are arranged to be
              married at an early age and become dependent upon their husband. Where approximately 48% of the population remain illiterate, the
              statistics are significantly higher for women. Only 31% of the population have access to improved sanitation and the scarce water on which
              the country relies is polluted by animal, human, agricultural or industrial waste.
            </p>
            <p>
              Political unrest has been a constant shadow across Nepal for some time. While hope for change emerged in 2006 with the end of a
              decade with civil war, the subsequent coalition governments have failed to draft a meaningful constitution on time. The new assembly
              elected November 2013 expressly committed that the new constitution would be promulgated on January 22, 2015 and finally the
              assemble promulgated it in September 2015. New elections were held on local, province and federal level in 2017. Nepal finally has a stable
              government but the government has a lot of challenges to draft new laws and acts according to the new constitution.
            </p>
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="py-16 mb-30" style={{ background: "var(--blue, #221c84)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2
              className="text-3xl font-bold text-white mb-3"
             
            >
              Financial transparency
            </h2>
            <p className="text-white/70 text-sm leading-relaxed">
              The IRS has determined that VIN is an exempt public charity under
              IRC Section 501(c)(3). There are many "1%" or "5%" non-profits.
              Those are 990. Yes, we have a high rate. Our ratio is 84.2% funds
              go directly to programs and 15.8% administrative costs. You will
              find our detailed financial reports and annual budgets
              transparently available on our website.
            </p>
          </div>
          <div className="shrink-0">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80"
              alt="Financial transparency"
              className="rounded-2xl h-48 w-72 object-cover"
            />
          </div>
        </div>
      </section>

      <CTABanner />
      
    </main>
  );
}

