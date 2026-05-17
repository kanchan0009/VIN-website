const fs = require('fs');
const file = fs.readFileSync('app/data/programData.ts', 'utf8');

let newFile = file.replace(
  /'child-development': {\s*title: "Child Development",\s*focusedProjects: \[/g,
  `'child-development': {
    title: "Child Development",
    heroImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600",
    infoTitle: "Nurturing the Next Generation",
    infoDesc: "Gain professional experience while shaping the futures of children in underserved communities. Our program provides a holistic approach to early childhood education and care.",
    realityTitle: "The Reality Children Face in Nepal",
    realityDesc: "In rural Nepal, access to quality early childhood education is a luxury that many families cannot afford, leading to long-term developmental gaps.",
    realityStats: [
      { stat: "30%", text: "of children in low-income areas miss out on essential early education programs." },
      { stat: "1 in 3", text: "Children do not have access to proper nutrition and health screenings." },
      { stat: "40%", text: "of primary schools lack the resources needed to provide a stimulating environment." },
      { stat: "2030", text: "is the target year for VIN to ensure every child has access to quality pre-primary education." }
    ],
    realitySummary: "Without structured support, children in marginalized communities struggle to catch up with their urban peers. VIN bridges this gap by implementing child-centered learning and care.",
    resilientTitle: "Building Bright Futures",
    resilientCardTitle: "Quality care for every child in Nepal",
    resilientSkills: ["Early Learning", "Nutrition", "Creative Play", "Child Rights"],
    resilientDesc: "Our programs work alongside local teachers to implement innovative teaching methods and ensure that every child receives the individual attention they deserve.",
    deliveryTitle: "How We Deliver Change",
    deliveryDesc: "Our strategy focuses on four key pillars that ensure sustainable child development.",
    deliverySteps: [
      { num: "01", title: "Early Childhood Education", desc: "Setting up and supporting ECD centers with age-appropriate learning materials." },
      { num: "02", title: "Health & Nutrition", desc: "Regular check-ups to monitor physical growth and identify developmental delays." },
      { num: "03", title: "Parental Engagement", desc: "Educating parents on the importance of early stimulation and proper nutrition." },
      { num: "04", title: "Teacher Training", desc: "Equipping local educators with modern, non-violent teaching techniques." }
    ],
    impactTitle: "Our Impact on Children",
    impactStat: "12,450+",
    impactLabel: "Children reached through our ECD and childcare programs",
    focusedProjects: [`
).replace(
  /'youth-empowerment': {\s*title: "Youth Empowerment",\s*focusedProjects: \[/g,
  `'youth-empowerment': {
    title: "Youth Empowerment",
    heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600",
    infoTitle: "Empowering the Next Generation",
    infoDesc: "Providing youth in rural Nepal with vocational training, leadership skills, and entrepreneurship opportunities to build a brighter future.",
    realityTitle: "The Reality Youth Face in Nepal",
    realityDesc: "High unemployment rates and lack of skills training drive many young people to migrate, leaving communities without their most vibrant demographic.",
    realityStats: [
      { stat: "40%", text: "of youth in rural areas are unemployed or underemployed due to a lack of vocational skills." },
      { stat: "1 in 3", text: "young people migrate abroad for labor, often facing difficult working conditions." },
      { stat: "60%", text: "of students drop out before completing secondary education in our target districts." },
      { stat: "2030", text: "is the target year for VIN to equip at least 50% of local youth with sustainable livelihoods." }
    ],
    realitySummary: "Without local opportunities, communities lose their potential leaders and innovators. VIN focuses on creating local educational and economic pathways.",
    resilientTitle: "Building Resilient Youth",
    resilientCardTitle: "Skills for a changing world",
    resilientSkills: ["Leadership", "Vocational Training", "Entrepreneurship", "Life Skills"],
    resilientDesc: "Our youth programs focus on practical, market-relevant skills that enable young people to start businesses or secure meaningful employment locally.",
    deliveryTitle: "How We Deliver Change",
    deliveryDesc: "We engage youth through clubs, training centers, and direct mentorship.",
    deliverySteps: [
      { num: "01", title: "Youth Clubs Formation", desc: "Establishing community-based clubs where youth can collaborate and lead local initiatives." },
      { num: "02", title: "Vocational Training", desc: "Providing hands-on courses in tailoring, mechanics, and IT." },
      { num: "03", title: "Entrepreneurship Support", desc: "Offering seed funding and business planning workshops for young entrepreneurs." },
      { num: "04", title: "Leadership Skills", desc: "Training in communication, civic engagement, and critical thinking." }
    ],
    impactTitle: "Our Impact So Far",
    impactStat: "5,200+",
    impactLabel: "Young people trained and supported since 2010",
    focusedProjects: [`
).replace(
  /'environment': {\s*title: "Environment & Conservation",\s*focusedProjects: \[/g,
  `'environment': {
    title: "Environment & Conservation",
    heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600",
    infoTitle: "Protecting Our Natural Heritage",
    infoDesc: "Promoting sustainable practices, reforestation, and environmental education to protect Nepal's fragile ecosystems and build climate resilience.",
    realityTitle: "The Environmental Challenges",
    realityDesc: "Deforestation, improper waste management, and climate change pose severe threats to rural communities reliant on agriculture and local resources.",
    realityStats: [
      { stat: "25%", text: "of forest cover has been lost in certain districts over the past decades." },
      { stat: "80%", text: "of rural households lack access to proper waste management systems." },
      { stat: "60%", text: "of local farmers face decreased crop yields due to climate change." },
      { stat: "2030", text: "is the target year for VIN to plant 1 million trees and train 10,000 farmers in permaculture." }
    ],
    realitySummary: "Environmental degradation directly impacts the livelihoods of marginalized communities. VIN works to restore ecosystems while teaching sustainable agriculture and waste management.",
    resilientTitle: "Building Sustainable Communities",
    resilientCardTitle: "Harmony with nature",
    resilientSkills: ["Permaculture", "Waste Management", "Reforestation", "Eco-Friendly Living"],
    resilientDesc: "By empowering communities to manage their natural resources sustainably, we help them build long-term resilience against environmental challenges.",
    deliveryTitle: "How We Deliver Change",
    deliveryDesc: "Our conservation efforts integrate community action with sustainable agricultural practices.",
    deliverySteps: [
      { num: "01", title: "Tree Plantation", desc: "Organizing community-led reforestation campaigns in degraded areas." },
      { num: "02", title: "Permaculture Training", desc: "Teaching organic farming techniques to improve yields and protect soil health." },
      { num: "03", title: "Waste Management", desc: "Educating households on recycling, composting, and reducing plastic use." },
      { num: "04", title: "Eco-Infrastructure", desc: "Supporting the construction of bio-gas plants and eco-friendly toilets." }
    ],
    impactTitle: "Our Green Impact",
    impactStat: "250,000+",
    impactLabel: "Trees planted across various rural districts in Nepal",
    focusedProjects: [`
).replace(
  /'public-health': {\s*title: "Public Health & Medical Care",\s*focusedProjects: \[/g,
  `'public-health': {
    title: "Public Health & Medical Care",
    heroImage: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600",
    infoTitle: "Health Access for All",
    infoDesc: "Improving health outcomes in marginalized communities through medical outreach, sanitation projects, and comprehensive health education.",
    realityTitle: "The Reality of Healthcare in Rural Nepal",
    realityDesc: "Access to basic healthcare is often limited by geography, lack of infrastructure, and poverty, leading to preventable diseases and high mortality rates.",
    realityStats: [
      { stat: "1 in 5", text: "rural clinics lack essential medicines and basic medical equipment." },
      { stat: "40%", text: "of children under 5 suffer from malnutrition or related health issues." },
      { stat: "70%", text: "of households in remote areas lack access to safe drinking water." },
      { stat: "2030", text: "is the target year for VIN to ensure basic healthcare access in all our working areas." }
    ],
    realitySummary: "Preventable diseases and lack of hygiene infrastructure severely impact community well-being. VIN addresses these gaps through direct medical care and preventative education.",
    resilientTitle: "Building Healthy Communities",
    resilientCardTitle: "Wellness and prevention first",
    resilientSkills: ["First Aid", "Hygiene", "Nutrition", "Reproductive Health"],
    resilientDesc: "We empower locals with knowledge and resources to prevent illnesses and maintain healthy lifestyles, reducing the burden on limited medical facilities.",
    deliveryTitle: "How We Deliver Change",
    deliveryDesc: "Our health initiatives combine direct medical support with preventative education and infrastructure development.",
    deliverySteps: [
      { num: "01", title: "Health Camps", desc: "Organizing mobile clinics to provide medical check-ups and treatments in remote areas." },
      { num: "02", title: "WASH Projects", desc: "Building clean water systems and sanitation facilities in schools and communities." },
      { num: "03", title: "Health Education", desc: "Conducting workshops on nutrition, family planning, and disease prevention." },
      { num: "04", title: "Capacity Building", desc: "Training local health workers and traditional birth attendants." }
    ],
    impactTitle: "Our Health Impact",
    impactStat: "45,000+",
    impactLabel: "Patients treated through our mobile health camps",
    focusedProjects: [`
).replace(
  /'disaster-risk': {\s*title: "Disaster Risk Reduction",\s*focusedProjects: \[/g,
  `'disaster-risk': {
    title: "Disaster Risk Reduction",
    heroImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1600",
    infoTitle: "Preparedness Saves Lives",
    infoDesc: "Empowering communities to prepare for, mitigate, and respond to natural disasters through education, infrastructure, and resilience planning.",
    realityTitle: "The Threat of Natural Disasters",
    realityDesc: "Nepal is highly vulnerable to earthquakes, floods, and landslides. Rural communities often suffer the most due to poor infrastructure and lack of preparedness.",
    realityStats: [
      { stat: "11th", text: "most earthquake-prone country in the world, with high risk in rural areas." },
      { stat: "60%", text: "of traditional rural homes are not built to withstand significant seismic activity." },
      { stat: "Thousands", text: "of people are displaced annually by monsoon floods and landslides." },
      { stat: "2030", text: "is the target year for VIN to establish disaster response plans in 50 communities." }
    ],
    realitySummary: "When disaster strikes, local preparedness is the first line of defense. VIN works to build resilient communities capable of minimizing risks and responding effectively.",
    resilientTitle: "Building Resilient Infrastructure",
    resilientCardTitle: "Safety through preparedness",
    resilientSkills: ["Emergency Response", "Safe Construction", "Hazard Mapping", "First Aid"],
    resilientDesc: "We train communities to identify risks and construct safer buildings, significantly reducing the potential impact of future disasters.",
    deliveryTitle: "How We Deliver Change",
    deliveryDesc: "Our approach focuses on community-led mitigation and comprehensive preparedness training.",
    deliverySteps: [
      { num: "01", title: "Hazard Mapping", desc: "Working with locals to identify high-risk areas and develop evacuation routes." },
      { num: "02", title: "Safe Construction", desc: "Training masons in earthquake-resilient building techniques." },
      { num: "03", title: "Emergency First Aid", desc: "Equipping community leaders with life-saving first aid skills and supplies." },
      { num: "04", title: "School Safety Programs", desc: "Conducting disaster drills and safety education in rural schools." }
    ],
    impactTitle: "Our Safety Impact",
    impactStat: "15,000+",
    impactLabel: "Community members trained in disaster preparedness",
    focusedProjects: [`
);

fs.writeFileSync('app/data/programData.ts', newFile, 'utf8');
console.log('Updated programData.ts successfully');
