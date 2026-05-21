export interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
  topic: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  image: string;
  tag: string;
  topic: string;
}

export interface SuccessStory {
  id: number;
  name: string;
  location: string;
  image: string;
  text: string;
  topic: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  summary: string;
  image: string;
  topic: string;
}

export interface CareerOpening {
  id: number;
  title: string;
  vacancy: string;
  type: string;
  location: string;
  salary: string;
  deadline: string;
  description: string[];
  requirements: string[];
  skills: string[];
  topic: string;
}

export interface InterviewItem {
  id: number;
  type: string;
  src: string;
  aspect: string;
  topic: string;
  title: string;
  videoUrl: string;
}

export interface AlbumItem {
  title: string;
  slug: string;
  img: string;
  topic: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Building Green Enterprises: From Skills to Income",
    excerpt: "Practical steps to start and scale eco-friendly micro-enterprises.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
    date: "Apr 28, 2024",
    readTime: "6 min read",
    category: "Livelihoods",
    categoryColor: "text-orange-500",
    topic: "environment"
  },
  {
    id: 2,
    title: "Safe Water, Healthy Communities",
    excerpt: "Understanding simple and sustainable water solutions.",
    image: "https://images.unsplash.com/photo-1594498653385-d5172b532c00?w=600&q=80",
    date: "Apr 20, 2024",
    readTime: "5 min read",
    category: "WASH",
    categoryColor: "text-blue-500",
    topic: "public-health"
  },
  {
    id: 3,
    title: "Preparing Communities for Climate Uncertainty",
    excerpt: "Building resilience through local knowledge and action.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
    date: "Apr 18, 2024",
    readTime: "7 min read",
    category: "Climate Resilience",
    categoryColor: "text-indigo-600",
    topic: "disaster-risk"
  },
  {
    id: 4,
    title: "Life Skills Education for Rural Youth",
    excerpt: "Empowering youth with skills for life and livelihood.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
    date: "Apr 14, 2024",
    readTime: "5 min read",
    category: "Education",
    categoryColor: "text-orange-600",
    topic: "child-development"
  },
  {
    id: 5,
    title: "Soil Health: The Foundation of Abundance",
    excerpt: "Improve soil naturally and increase long-term productivity.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80",
    date: "Apr 12, 2024",
    readTime: "5 min read",
    category: "Permaculture",
    categoryColor: "text-green-600",
    topic: "environment"
  },
  {
    id: 6,
    title: "Mindset Shifts for Community Change",
    excerpt: "Attitudes that inspire leadership and collective action.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80",
    date: "Apr 10, 2024",
    readTime: "4 min read",
    category: "Leadership & KSA",
    categoryColor: "text-purple-600",
    topic: "youth-empowerment"
  },
  {
    id: 7,
    title: "Value Addition in Local Agriculture",
    excerpt: "Turn local produce into sustainable income.",
    image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?w=600&q=80",
    date: "Apr 04, 2024",
    readTime: "6 min read",
    category: "Livelihoods",
    categoryColor: "text-orange-500",
    topic: "womens-empowerment"
  },
  {
    id: 8,
    title: "Water Harvesting That Works",
    excerpt: "Low-cost techniques for water-scarce communities.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
    date: "Apr 01, 2024",
    readTime: "5 min read",
    category: "Permaculture",
    categoryColor: "text-green-600",
    topic: "environment"
  }
];

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "VIN Launches New Women's Entrepreneurship Program in Okhaldhunga",
    date: "Jan 10, 2025",
    summary: "Volunteers Initiative Nepal (VIN) has launched a new entrepreneurship program aimed at empowering 200 women in Okhaldhunga district with skills in micro-business development and financial literacy.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    tag: "Program Launch",
    topic: "womens-empowerment"
  },
  {
    id: 2,
    title: "International Volunteers Contribute 10,000+ Hours in 2024",
    date: "Dec 28, 2024",
    summary: "Over 300 international volunteers from 25 countries contributed more than 10,000 service hours across VIN's community development programs throughout Nepal.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    tag: "Volunteers",
    topic: "youth-empowerment"
  },
  {
    id: 3,
    title: "VIN Receives Grant for Disaster Resilience Project",
    date: "Dec 15, 2024",
    summary: "A significant grant has been awarded to VIN to implement community-based disaster risk reduction initiatives across 12 villages in Nuwakot district.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    tag: "Funding",
    topic: "disaster-risk"
  },
  {
    id: 4,
    title: "New School Infrastructure Completed in Kavre",
    date: "Nov 30, 2024",
    summary: "VIN has completed the construction of a new school building including classrooms, library, and sanitation facilities benefiting over 300 students in Kavre district.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
    tag: "Infrastructure",
    topic: "child-development"
  },
  {
    id: 5,
    title: "Health Camp Reaches 1,000+ Beneficiaries in Remote Communities",
    date: "Nov 18, 2024",
    summary: "A month-long health camp organized by VIN provided free medical checkups, medicines, and health education to over 1,000 people in marginalized communities.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    tag: "Health",
    topic: "public-health"
  },
  {
    id: 6,
    title: "Youth Climate Action Network Established",
    date: "Nov 05, 2024",
    summary: "VIN facilitated the establishment of a youth-led climate action network bringing together young environmental leaders from 8 communities.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80",
    tag: "Environment",
    topic: "environment"
  },
  {
    id: 7,
    title: "Digital Literacy for Rural Teachers",
    date: "Oct 22, 2024",
    summary: "VIN partnered with local education authorities to provide digital literacy training to 50 teachers in remote mountain schools.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80",
    tag: "Education",
    topic: "child-development"
  },
  {
    id: 8,
    title: "Water Filtration Systems Installed in 10 Villages",
    date: "Oct 10, 2024",
    summary: "Clean drinking water access was improved for 500 families through the installation of sustainable biosand filtration systems.",
    image: "https://images.unsplash.com/photo-1594498653385-d5172b532c00?w=600&q=80",
    tag: "WASH",
    topic: "public-health"
  },
  {
    id: 9,
    title: "VIN Annual General Meeting Highlights Impact",
    date: "Sep 25, 2024",
    summary: "The annual review meeting showcased significant progress in community health and women's empowerment metrics for the fiscal year.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80",
    tag: "Governance",
    topic: "womens-empowerment"
  }
];

export const stories: SuccessStory[] = [
  {
    id: 1,
    name: "Shanti Tamang",
    location: "Tarakeshwar, Nepal",
    image: "https://images.unsplash.com/photo-1503917988258-f19772042ee6?w=600&q=80",
    text: "Namaste! My name is Shanti Tamang, I am a 34-year-old farmer from Devidhan, Tarakeshwar Municipality. Two years ago, I had the opportunity to participate in an English class offered by Volunteers Initiative Nepal (VIN) at the Women's Business Center (WBC) in Tinpipple, Tarakeshwar. At first, I hesitated to join because I thought learning English would be useless for someone like me, a farmer and a housewife. I was also worried it would interfere with my daily household activities. However, thanks to the encouragement of the women in my community, I decided to give it a try. Little did I know this decision would change my life in ways I never imagined.",
    topic: "womens-empowerment"
  },
  {
    id: 2,
    name: "Rajesh Sharma",
    location: "Kathmandu, Nepal",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
    text: "Through VIN's permaculture project, I learned how to manage my small farm sustainably. The introduction of drip irrigation and organic composting has nearly doubled my seasonal yield. I can now provide better education for my children and have even started training other farmers in my village. The support from international volunteers also opened our eyes to global farming standards and sustainable practices that we never knew were possible.",
    topic: "environment"
  },
  {
    id: 3,
    name: "Anjali Rai",
    location: "Okhaldhunga, Nepal",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    text: "I was always shy and lacked confidence until I joined the Women's Empowerment group. VIN provided us with leadership training and career counseling. Today, I am the president of our local savings and credit cooperative. We have empowered over 50 women in our community to start their own small businesses, from poultry farming to traditional weaving. This journey hasn't just been about money; it's about finding our voice and standing on our own feet.",
    topic: "womens-empowerment"
  },
  {
    id: 4,
    name: "Suman Thapa",
    location: "Nuwakot, Nepal",
    image: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=600&q=80",
    text: "After the earthquake, our village school was in ruins. VIN didn't just help rebuild the classrooms; they brought in resources for a child-friendly learning environment. The new Early Childhood Development center has become a hub for the kids. Seeing my son excited to go to school every morning is the greatest gift. The focus on hygiene and WASH programs has also significantly reduced health issues among the children in our community.",
    topic: "child-development"
  },
  {
    id: 5,
    name: "Sunita Chaudhary",
    location: "Tarakeshwar, Nepal",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
    text: "The health camps organized by VIN saved my mother's life. We live in a remote area where medical facilities are sparse. During one of the screenings, she was diagnosed with a condition that needed urgent attention. VIN's staff coordinated the referral and supported us throughout the treatment. They also taught us about preventative healthcare and nutrition, which has improved the overall well-being of our entire family.",
    topic: "public-health"
  },
  {
    id: 6,
    name: "Pasang Lhamu",
    location: "Everest Region, Nepal",
    image: "https://images.unsplash.com/photo-1522071823991-b96767a1c56f?w=600&q=80",
    text: "Environmental conservation is vital for our mountains. VIN's waste management and reforestation programs have transformed our village. We've planted thousands of trees and established a community-led waste collection system. This hasn't just beautified our home; it's protecting our water sources and creating a sustainable future for our children. The education on climate change has helped us adapt our traditional ways to the changing environment.",
    topic: "environment"
  },
  {
    id: 7,
    name: "Kiran Gurung",
    location: "Pokhara, Nepal",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80",
    text: "Vocational training changed my career path. I was struggling with irregular work until I took the IT and digital literacy course at the VIN community center. Now, I work as a data entry specialist and handle digital marketing for a local tourism agency. The skills I gained are invaluable in today's world. VIN provided the tools and the mentorship I needed to transition into the modern workforce.",
    topic: "youth-empowerment"
  },
  {
    id: 8,
    name: "Maya Devi",
    location: "Kathmandu Valley, Nepal",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
    text: "Joining the micro-credit group allowed me to open my small grocery shop. Before this, I had no access to loans or financial advice. VIN's program taught us financial management and helped us establish a collective fund. My shop is now thriving, and I've even been able to hire another woman from the village to help me. This economic independence has given me a sense of pride and security I never thought possible.",
    topic: "womens-empowerment"
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Empowering Female Micro-entrepreneurs",
    summary: "How support for local savings cooperatives enabled rural women to double their household incomes.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    topic: "womens-empowerment"
  },
  {
    id: 2,
    title: "Youth Leadership and Digital Action",
    summary: "Empowering the next generation of leaders with digital literacy and vocational job skills.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    topic: "youth-empowerment"
  },
  {
    id: 3,
    title: "Post-Disaster Classroom Rehabilitation",
    summary: "Rebuilding early childhood classrooms and establishing child protection safe-spaces in Kavre.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
    topic: "child-development"
  },
  {
    id: 4,
    title: "Improving Sanitation in Remote Settlements",
    summary: "Installing safe drinking water filtration systems and latrines to prevent water-borne disease.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    topic: "public-health"
  },
  {
    id: 5,
    title: "Community Permaculture Practices",
    summary: "Introducing sustainable kitchen gardens and soil regeneration methods for rural communities.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    topic: "environment"
  },
  {
    id: 6,
    title: "Earthquake Preparedness Initiatives",
    summary: "Providing disaster resilience kits and emergency safety workshops in vulnerable mountain towns.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
    topic: "disaster-risk"
  },
  {
    id: 7,
    title: "Community Outreach & Medicine Camps",
    summary: "How VIN reached 5,000 families with essential healthcare checkups and medical supplies.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    topic: "public-health"
  },
  {
    id: 8,
    title: "Women's Literacy Action Report",
    summary: "The measurable impact of our 12-month literacy and life-skills program for women in Okhaldhunga.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    topic: "womens-empowerment"
  },
  {
    id: 9,
    title: "Eco-Enterprise Development",
    summary: "Supporting sustainable livelihoods through community-based organic farming and local market access.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
    topic: "environment"
  }
];

export const openings: CareerOpening[] = [
  {
    id: 1,
    title: "Sales Executive / Senior Sales Executive",
    vacancy: "1",
    type: "Full Time",
    location: "Sundhara, Kathmandu",
    salary: "Negotiable",
    deadline: "Jan 12, 2025",
    description: [
      "Drive secondary sales generation across the assigned territory",
      "Manage and strengthen relationships with dealers",
      "Ensure product availability, visibility, and execution of sales plans",
      "Use SFA tools to track daily sales, orders, and market activities",
      "Conduct regular market visits and share competitor and market insights"
    ],
    requirements: [
      "Graduate with min 3 years of experience in field sales, preferably in building materials or allied industries",
      "Hands-on experience in secondary sales generation and dealer/retailer management",
      "Familiarity with using SFA/CRM tools for sales tracking and reporting",
      "Strong communication, negotiation, and relationship-management skills",
      "Willingness to travel extensively within the assigned territory and work in the field"
    ],
    skills: [
      "Bachelor's degree in Business, Marketing, or a related field.",
      "Proven experience in business development, sales, or a related role within the electrical or cable industry.",
      "Strong understanding of electrical wires and cable products, market dynamics, and industry regulations.",
      "Excellent communication and interpersonal skills to establish and maintain client relationships.",
      "Strategic thinking and problem-solving abilities to drive business growth.",
      "Ability to work independently and collaboratively within a team.",
      "Results-oriented with a proven track record of meeting or exceeding sales targets."
    ],
    topic: "youth-empowerment"
  },
  {
    id: 2,
    title: "Program Coordinator - Women's Empowerment",
    vacancy: "1",
    type: "Full Time",
    location: "Okhaldhunga District",
    salary: "Negotiable",
    deadline: "Feb 05, 2025",
    description: [
      "Lead and coordinate women's empowerment programs in rural communities",
      "Develop training modules for entrepreneurship and financial literacy",
      "Manage field staff and monitor program outcomes",
      "Collaborate with local government bodies and stakeholders"
    ],
    requirements: [
      "Master's in Social Work, Development Studies, or related field",
      "3+ years experience in NGO/development sector",
      "Fluent in Nepali and English",
      "Strong leadership and facilitation skills"
    ],
    skills: [
      "Project management and coordination",
      "Training and capacity building",
      "Report writing and documentation",
      "Community mobilization"
    ],
    topic: "womens-empowerment"
  }
];

export const interviews: InterviewItem[] = [
  {
    id: 1,
    type: "video",
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    aspect: "aspect-[4/5]",
    topic: "womens-empowerment",
    title: "Women's Empowerment Program Interview",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    type: "video",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    aspect: "aspect-[4/5]",
    topic: "youth-empowerment",
    title: "Youth Tech Literacy Initiative",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    type: "video",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    aspect: "aspect-video",
    topic: "child-development",
    title: "Primary School Reconstruction Interview",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 4,
    type: "video",
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    aspect: "aspect-video",
    topic: "public-health",
    title: "Hygiene & WASH Campaign Video",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 5,
    type: "video",
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    aspect: "aspect-[4/5]",
    topic: "environment",
    title: "Sustainable Agriculture Discussion",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 6,
    type: "video",
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
    aspect: "aspect-[4/5]",
    topic: "disaster-risk",
    title: "Disaster Risk Mitigation Interview",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 7,
    type: "video",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    aspect: "aspect-[4/5]",
    topic: "youth-empowerment",
    title: "Youth Mobilization Program Panel",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 8,
    type: "video",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    aspect: "aspect-[4/5]",
    topic: "child-development",
    title: "Teaching Support Volunteer Feedback",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 9,
    type: "video",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    aspect: "aspect-video",
    topic: "womens-empowerment",
    title: "Cooperative Microcredit Member Story",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 10,
    type: "video",
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80",
    aspect: "aspect-video",
    topic: "public-health",
    title: "Mobile Health Camp Coordinator Interview",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 11,
    type: "video",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    aspect: "aspect-[4/5]",
    topic: "environment",
    title: "Tree Planting and Reforestation Campaign",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 12,
    type: "video",
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    aspect: "aspect-[4/5]",
    topic: "disaster-risk",
    title: "Nuwakot Reconstruction Project Overview",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export const albums: AlbumItem[] = [
  {
    title: "Women's Empowerment",
    slug: "womens-empowerment",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    topic: "womens-empowerment"
  },
  {
    title: "Child Development",
    slug: "child-development",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    topic: "child-development"
  },
  {
    title: "Youth Empowerment",
    slug: "youth-empowerment",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    topic: "youth-empowerment"
  },
  {
    title: "Public Health and Medical Care",
    slug: "public-health",
    img: "https://images.unsplash.com/photo-1496347646636-ea12b0f9c8b2?w=800&q=80",
    topic: "public-health"
  },
  {
    title: "Environment and Conservation",
    slug: "environment",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    topic: "environment"
  },
  {
    title: "Disaster Risk Reduction",
    slug: "disaster-risk",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    topic: "disaster-risk"
  }
];
