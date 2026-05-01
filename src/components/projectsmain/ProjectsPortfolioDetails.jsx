import Image from "next/image";
import Container from "@/components/ui/Container";
import allImages from "@/components/helper/imageProvider";

const projectDetails = {
  "brand-identity": {
    service: "Visual Identity, Branding",
    client: "Nicolas Digital Agency",
    date: "November 12, 2025",
    location: "787 Ocean Drive, FL 32909",
    title: "Innovative Digital Business Strategies for Modern Growth",
    intro:
      "Our financial planning process is designed to help individuals and businesses achieve long-term financial stability and growth. We begin by understanding your current financial situation, goals, and risk tolerance. Based on this analysis, we develop a customised strategy that includes personalised investment planning, savings management and risk assessment.",
    process: {
      title: "Our Digital Strategy Implementation Process",
      description:
        "Our financial planning process is designed to help individuals and businesses achieve long-term financial stability and growth. We begin by understanding your current financial situation, goals, and risk tolerance.",
      steps: [
        { title: "Business & Digital Assessment", description: "We believe that effective financial planning requires continuous monitoring and adjustment. As market conditions and personal circumstances change, we regularly review and refine your financial plan." },
        { title: "Strategic Digital Planning", description: "We believe that effective financial planning requires continuous monitoring and adjustment. As market conditions and personal circumstances change, we regularly review and refine your financial plan." },
        { title: "Technology Integration & Execution", description: "We believe that effective financial planning requires continuous monitoring and adjustment. As market conditions and personal circumstances change, we regularly review and refine your financial plan." },
        { title: "Monitoring, Optimization & Results", description: "We believe that effective financial planning requires continuous monitoring and adjustment. As market conditions and personal circumstances change, we regularly review and refine your financial plan." },
      ],
    },
    solution: {
      title: "Our Solution",
      description: "Turning ideas into tangible results starts with a clear vision. At our agency, we believe that a vision is only as strong as the action taken to realize it. We take the time to listen, ask questions, and explore your situation. By identifying the core objectives & opportunities, we ensure that the final result aligns perfectly with your vision.",
    },
    results: {
      title: "Measurable Results",
      description: "Our financial planning process is designed to help individuals and businesses achieve long-term financial stability and growth. We begin by understanding your current financial situation, goals, and risk tolerance.",
      points: [
        "Our agency helped the business develop a compelling brand story that resonated with customers and increased brand visibility.",
        "We built technology-driven online personal tools that increased growth catalytic and to technology uplift.",
        "By implementing mobile-first handsets to connect with customers effectively and build lasting relationships.",
      ],
    },
  },
  "e-commerce-platform": {
    service: "Web Design, Development",
    client: "TechVentures Inc.",
    date: "October 5, 2024",
    location: "123 Commerce Ave, NY 10001",
    title: "Seamless E-Commerce Experience for Next-Gen Shoppers",
    intro: "We crafted a fully responsive, conversion-optimised e-commerce platform that puts the product first. From intuitive navigation to frictionless checkout, every detail was designed to maximise engagement and revenue.",
    process: {
      title: "Our E-Commerce Build Process",
      description: "We start with a deep dive into user behaviour and competitive landscape, then architect a scalable solution that grows with the business.",
      steps: [
        { title: "Discovery & Research", description: "Mapping user journeys and identifying friction points in the existing flow." },
        { title: "UX Architecture", description: "Wire-framing information hierarchy and checkout flows for maximum conversion." },
        { title: "Design & Prototype", description: "High-fidelity mockups reviewed with stakeholders before a single line of code is written." },
        { title: "Build, Test & Launch", description: "Agile sprints, QA across devices, performance tuning, and a smooth go-live." },
      ],
    },
    solution: { title: "Our Solution", description: "A headless Next.js storefront backed by a robust CMS, delivering sub-second page loads and a checkout completion rate 40% above industry average." },
    results: {
      title: "Measurable Results",
      description: "Within 90 days of launch the client saw significant uplifts across all key metrics.",
      points: ["62% uplift in mobile conversions.", "28% reduction in cart abandonment.", "Page load time reduced to under 1.2s on 3G."],
    },
  },
  "social-media-campaign": {
    service: "Marketing, Social Media",
    client: "BrandBoost Agency",
    date: "August 20, 2023",
    location: "456 Media Blvd, CA 90210",
    title: "Viral Social Campaigns That Drive Real Engagement",
    intro: "We developed a multi-platform social media strategy that turned passive followers into active brand advocates.",
    process: {
      title: "Our Campaign Strategy Process",
      description: "Audience research, content calendar creation, creative production, and real-time optimisation.",
      steps: [
        { title: "Audience Analysis", description: "Deep-dive into demographics, psychographics, and platform behaviour." },
        { title: "Content Strategy", description: "Building a 90-day editorial calendar aligned with business goals." },
        { title: "Creative Production", description: "Short-form video, static graphics, and copy crafted for each platform." },
        { title: "Optimise & Scale", description: "A/B testing creatives and doubling down on what performs." },
      ],
    },
    solution: { title: "Our Solution", description: "A unified brand voice across Instagram, TikTok, and LinkedIn with platform-native content that drove organic reach." },
    results: {
      title: "Measurable Results",
      description: "The campaign generated 2.4M impressions in the first month with a 5.8% engagement rate — 3× the industry benchmark.",
      points: ["2.4M organic impressions in 30 days.", "5.8% engagement rate (3× benchmark).", "18% increase in website traffic from social."],
    },
  },
  "mobile-app-ui": {
    service: "UI/UX Design",
    client: "AppWorks Studio",
    date: "March 15, 2025",
    location: "789 Innovation Park, TX 73301",
    title: "Intuitive Mobile UI That Users Actually Love",
    intro: "We redesigned a fintech app from the ground up, reducing cognitive load and increasing daily active usage by 45%.",
    process: {
      title: "Our UI/UX Design Process",
      description: "From empathy mapping to polished Figma handoff, we follow a rigorous, user-centred design process.",
      steps: [
        { title: "Empathy & Research", description: "User interviews, heuristic evaluation, and competitive benchmarking." },
        { title: "Information Architecture", description: "Card sorting and tree testing to validate navigation structures." },
        { title: "Wireframes & Prototypes", description: "Rapid iteration with interactive prototypes tested on real users." },
        { title: "Visual Design & Handoff", description: "Pixel-perfect Figma files with a fully documented design system." },
      ],
    },
    solution: { title: "Our Solution", description: "A clean, accessible design system with dark-mode support, micro-animations, and a simplified onboarding flow that cut drop-off by 60%." },
    results: {
      title: "Measurable Results",
      description: "Post-redesign the app achieved a 4.8-star rating on the App Store and daily active users grew 45% month-over-month.",
      points: ["4.8★ App Store rating post-launch.", "45% growth in daily active users.", "60% reduction in onboarding drop-off."],
    },
  },
  "seo-strategy": {
    service: "Digital Marketing, SEO",
    client: "GrowthLab Digital",
    date: "January 10, 2025",
    location: "321 Search St, WA 98101",
    title: "Data-Driven SEO That Dominates Search Rankings",
    intro: "We built a technical and content SEO strategy that took the client from page 3 to position 1 for their top 20 keywords.",
    process: {
      title: "Our SEO Implementation Process",
      description: "Technical audits, keyword mapping, content production, and authoritative link building.",
      steps: [
        { title: "Technical Audit", description: "Crawling the full site for Core Web Vitals issues, broken links, and indexability problems." },
        { title: "Keyword Strategy", description: "Mapping intent-driven keywords to existing and new content." },
        { title: "On-Page Optimisation", description: "Rewriting meta data, headers, and body copy for relevance and readability." },
        { title: "Link Building", description: "Earning high-DA backlinks through digital PR and content partnerships." },
      ],
    },
    solution: { title: "Our Solution", description: "A 6-month SEO roadmap combining technical fixes, topical authority content clusters, and a proactive link-acquisition programme." },
    results: {
      title: "Measurable Results",
      description: "Organic traffic grew 210% in 6 months; 18 of 20 target keywords now rank on page 1.",
      points: ["210% organic traffic growth in 6 months.", "18/20 target keywords on page 1.", "Domain Rating improved from 24 to 47."],
    },
  },
  "business-strategy": {
    service: "Consulting",
    client: "Apex Ventures",
    date: "February 28, 2025",
    location: "654 Strategy Ave, IL 60601",
    title: "Strategic Consulting That Transforms Business Trajectory",
    intro: "We partnered with a mid-market manufacturer to identify growth levers, streamline operations, and enter two new markets within 12 months.",
    process: {
      title: "Our Consulting Engagement Process",
      description: "Structured discovery, hypothesis-led analysis, and pragmatic execution support.",
      steps: [
        { title: "Diagnostic Phase", description: "Stakeholder interviews, financial modelling, and competitive landscape mapping." },
        { title: "Strategy Design", description: "Building growth scenarios and selecting the highest-ROI path forward." },
        { title: "Roadmap & Prioritisation", description: "90-day, 6-month, and 12-month action plans with clear ownership." },
        { title: "Execution Support", description: "Embedded advisors working alongside leadership to ensure delivery." },
      ],
    },
    solution: { title: "Our Solution", description: "A focused growth strategy centred on operational efficiency gains and two adjacent market entries, backed by a 12-month execution roadmap." },
    results: {
      title: "Measurable Results",
      description: "The client achieved 34% revenue growth in year one and successfully launched in both target markets ahead of schedule.",
      points: ["34% revenue growth in year one.", "Two new markets entered ahead of schedule.", "Operational cost base reduced by 18%."],
    },
  },
  "financial-planning": {
    service: "Finance",
    client: "WealthPath Advisory",
    date: "April 3, 2025",
    location: "987 Capital Row, NY 10005",
    title: "Comprehensive Financial Planning for Lasting Wealth",
    intro: "We designed a holistic financial planning framework that helped high-net-worth individuals protect and grow their wealth across market cycles.",
    process: {
      title: "Our Financial Planning Process",
      description: "From initial wealth assessment to ongoing portfolio review, every step is tailored to the individual.",
      steps: [
        { title: "Wealth Assessment", description: "Full inventory of assets, liabilities, income streams, and risk exposure." },
        { title: "Goal Mapping", description: "Aligning financial strategy with life goals — retirement, education, legacy." },
        { title: "Portfolio Construction", description: "Diversified allocation across equities, fixed income, alternatives, and real assets." },
        { title: "Review & Rebalance", description: "Quarterly reviews to adapt to market changes and life events." },
      ],
    },
    solution: { title: "Our Solution", description: "A personalised, tax-efficient wealth plan with a diversified portfolio strategy and a clear roadmap to each client's financial goals." },
    results: {
      title: "Measurable Results",
      description: "Clients following the plan achieved an average 12.4% annualised return over three years, outperforming their benchmark by 3.1%.",
      points: ["12.4% average annualised return over 3 years.", "3.1% outperformance vs benchmark.", "100% of clients on track to meet retirement goals."],
    },
  },
};

// ✅ CHANGE 1: Static fallback data — slug না থাকলে এটা use হবে
const fallbackDetail = {
  service: "Digital Solutions",
  client: "Our Client",
  date: "2025",
  location: "Global",
  intro:
    "We craft innovative digital solutions tailored to your business needs. Our team works closely with clients to deliver exceptional, measurable results.",
  process: {
    title: "Our Process",
    description:
      "We follow a proven, structured process to ensure every project is delivered on time and exceeds client expectations.",
    steps: [
      { title: "Discovery & Research",  description: "Understanding your goals, audience, and competitive landscape." },
      { title: "Strategy & Planning",   description: "Building a clear roadmap aligned with your business objectives." },
      { title: "Design & Development",  description: "Crafting solutions with precision and attention to detail." },
      { title: "Launch & Optimise",     description: "Deploying and continuously improving for the best results." },
    ],
  },
  solution: {
    title: "Our Solution",
    description:
      "We deliver tailored strategies and solutions designed to solve real problems and drive sustainable growth for your business.",
  },
  results: {
    title: "Measurable Results",
    description:
      "Our work consistently delivers strong, trackable outcomes for every client we partner with.",
    points: [
      "Increased brand visibility and market reach.",
      "Improved user engagement and conversion rates.",
      "Sustainable long-term growth strategies.",
    ],
  },
};

const ProjectsPortfolioDetails = ({ slug }) => {
  const { projectImages } = allImages;

  const allProjects = projectImages.flat();
  const currentProject = allProjects.find((p) => p.slug === slug);
  const detail = projectDetails[slug];

  // ✅ CHANGE 2: slug থেকে title বানানো — "my-project" → "My Project"
  const slugTitle = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "Project Details";

  // ✅ CHANGE 3: detail না থাকলে fallbackDetail use করো, ?? operator দিয়ে
  const safeDetail = detail ?? { ...fallbackDetail, title: slugTitle };

  // ✅ CHANGE 4: currentProject না থাকলে projectImages[0][0] এর image fallback হিসেবে use করো
  const fallbackImg = projectImages[0][0].img;
  const safeCurrentImg = currentProject?.img ?? fallbackImg;

  const secondaryImg = (() => {
    for (const row of projectImages) {
      const found = row.find((p) => p.slug === slug);
      if (found) {
        const other = row.find((p) => p.slug !== slug);
        return other ? other.img : found.img;
      }
    }
    return safeCurrentImg;
  })();

  // ✅ CHANGE 5: এই if block টা সম্পূর্ণ remove করা হয়েছে
  // আগে: !currentProject || !detail হলে "Project not found" দেখাত
  // এখন: সবসময় page render হবে, unknown slug এও crash করবে না

  return (
    <section className="py-17.5 md:py-20 bg-bg-secondaryTwo">
      <Container size={"lg"}>

        {/* Hero Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <div className="relative w-full h-[260px] md:h-[360px] rounded-sm overflow-hidden">
            {/* ✅ CHANGE 6: currentProject.img → safeCurrentImg (optional chaining crash fix) */}
            <Image src={safeCurrentImg} fill alt={safeDetail.title} className="object-cover" />
          </div>
          <div className="relative w-full h-[260px] md:h-[360px] rounded-sm overflow-hidden">
            <Image src={secondaryImg} fill alt={safeDetail.title} className="object-cover" />
          </div>
        </div>

        {/* Meta Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 border-t border-b border-black/10 py-6 mb-12">
          {/* ✅ CHANGE 7: detail → safeDetail সব জায়গায় */}
          <MetaItem label="Service"  value={safeDetail.service}  />
          <MetaItem label="Client"   value={safeDetail.client}   />
          <MetaItem label="Date"     value={safeDetail.date}     />
          <MetaItem label="Location" value={safeDetail.location} />
        </div>

        {/* Intro */}
        <div className="mb-14">
          <h2 className="headingTwo text-primary font-bold mb-6 max-w-[820px]">
            {safeDetail.title}
          </h2>
          <p className="text-base text-primary/70 leading-relaxed max-w-[900px]">
            {safeDetail.intro}
          </p>
        </div>

        {/* Process */}
        <div className="mb-14">
          <h3 className="headingThree text-primary font-bold mb-4">
            {safeDetail.process.title}
          </h3>
          <p className="text-base text-primary/70 leading-relaxed mb-8 max-w-[900px]">
            {safeDetail.process.description}
          </p>
          <div className="space-y-6">
            {safeDetail.process.steps.map((step, i) => (
              <div key={i} className="pl-5 border-l-2 border-black/10">
                <h4 className="text-base font-bold text-primary mb-1">{step.title}</h4>
                <p className="text-sm text-primary/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div className="mb-14">
          <h3 className="headingThree text-primary font-bold mb-4">
            {safeDetail.solution.title}
          </h3>
          <p className="text-base text-primary/70 leading-relaxed max-w-[900px]">
            {safeDetail.solution.description}
          </p>
        </div>

        {/* Results */}
        <div>
          <h3 className="headingThree text-primary font-bold mb-4">
            {safeDetail.results.title}
          </h3>
          <p className="text-base text-primary/70 leading-relaxed mb-6 max-w-[900px]">
            {safeDetail.results.description}
          </p>
          <ul className="space-y-3">
            {safeDetail.results.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-primary/80">
                <span className="mt-1.5 h-2 w-2 min-w-[8px] rounded-full bg-primary inline-block" />
                {point}
              </li>
            ))}
          </ul>
        </div>

      </Container>
    </section>
  );
};

const MetaItem = ({ label, value }) => (
  <div>
    <p className="text-xs font-bold uppercase text-primary/40 mb-1">{label}</p>
    <p className="text-sm font-medium text-primary">{value}</p>
  </div>
);

export default ProjectsPortfolioDetails;