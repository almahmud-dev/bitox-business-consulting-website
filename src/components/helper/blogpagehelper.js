//Blog Page Pagination :
export const btnBase =
  "w-15 h-15 flex items-center justify-center rounded-full border border-[#0000001a] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] transition-colors";
export const pageBtn = `${btnBase} text-primary para-TwoXl font-bold bg-bg-secondaryOne hover:bg-primary hover:text-white cursor-pointer`;
export const arrowBtn = `${btnBase} text-white text-[24px] bg-secondary hover:bg-primary cursor-pointer`;
// Page numbers array
export const pages = [1, 2];
export const allBlogData = [
  {
    id: 1,
    slug: "building-a-profitable-and-sustainable-business-model",
    batchName: "Business",
    image: "/images/home01/blog/blog1.png",
    itmeText: "Harry Jilson",
    dateText: "March 14, 2025",
    description: "Building a profitable and sustainable business model",
  },
  {
    id: 2,
    slug: "how-to-identify-your-target-audience-effectively",
    batchName: "Marketing",
    image: "/images/home01/blog/blog2.png",
    itmeText: "Sara Miller",
    dateText: "April 02, 2025",
    description: "How to identify your target audience effectively",
  },
  {
    id: 3,
    slug: "top-strategies-for-digital-growth-in-2025",
    batchName: "Strategy",
    image: "/images/home01/blog/blog3.png",
    itmeText: "John Carter",
    dateText: "April 18, 2025",
    description: "Top strategies for digital growth in 2025",
  },
  {
    id: 4,
    slug: "understanding-brand-identity-and-voice",
    batchName: "Branding",
    image: "/images/home01/blog/blog4.png",
    itmeText: "Emily Rose",
    dateText: "February 28, 2025",
    description: "Understanding brand identity and voice",
  },
  {
    id: 5,
    slug: "scaling-your-startup-with-limited-resources",
    batchName: "Startup",
    image: "/images/home01/blog/blog5.png",
    itmeText: "Mark Twain",
    dateText: "January 10, 2025",
    description: "Scaling your startup with limited resources",
  },
  {
    id: 6,
    slug: "the-power-of-content-marketing-for-b2b",
    batchName: "Content",
    image: "/images/home01/blog/blog6.png",
    itmeText: "Lisa Brown",
    dateText: "March 30, 2025",
    description: "The power of content marketing for B2B businesses",
  },
];

export const allBlogDetailsData = [
  {
    id: 1,
    slug: "building-a-profitable-and-sustainable-business-model",
    batchName: "Business",
    heroImage: "/images/home01/blog/blogdetails1.png",
    author: "Harry Jilson",
    authorRole: "Tech Editor",
    dateText: "March 14, 2025",
    itmeText: "Harry Jilson",
    title: "Building a profitable and sustainable business model",
    intro:
      "Every business dreams of long-term success, but achieving it requires more than just a great idea. It takes strategic planning, consistent execution, and a willingness to adapt to an ever-changing marketplace. In this post, we'll explore the foundational elements that contribute to building a business that not only generates profit but sustains growth over time.",

    sections: [
      {
        heading: "Identify a Clear Value Proposition",
        content:
          "Your value proposition is the cornerstone of your business strategy. It defines what makes your product or service unique, why customers should choose you over competitors, and the specific problem you solve. A strong value proposition is customer-centric, clear, and measurable. Start by deeply understanding your target audience — their pain points, needs, and expectations. Then align your offerings to deliver precisely what they're looking for. Businesses that fail to articulate their value clearly often struggle with customer acquisition and retention.",
      },
      {
        heading: "Develop Multiple Revenue Streams",
        content:
          "Relying on a single revenue stream is a major risk for any business. Diversification protects your business from market fluctuations and opens new growth opportunities. Here are a few strategic revenue areas to consider:",
        bullets: [
          {
            title: "Strategic Digital Assessment",
            text: "We help you audit your current digital presence, pinpointing weaknesses in your website, content, and outreach strategies. Our team reviews everything from user experience to conversion rates and competitive positioning, delivering a clear picture of where you stand and where you can improve.",
          },
          {
            title: "Strategic Digital Planning",
            text: "Based on the assessment, we craft a customized digital roadmap tailored to your business goals. This plan outlines actionable steps across SEO, social media, paid ads, and content marketing to drive sustainable growth.",
          },
          {
            title: "Technology Integration & Execution",
            text: "We implement the right tools and technologies to power your digital transformation — from CRM systems and marketing automation to analytics platforms that give you real-time insights into performance.",
          },
          {
            title: "Monitoring, Optimization & Growth",
            text: "Digital success isn't a one-time event. We continuously track your KPIs, refine strategies based on data, and ensure that every campaign evolves to deliver better results over time. When the numbers speak, we listen and act.",
          },
        ],
      },
    ],

    quote:
      "Are you ready to craft a visual identity that captures your brand's essence, tells a compelling story, & motivates your audience to engage? Let's collaborate to transform your vision into a bold cohesive & unforgettable brand presence that inspires success.",

    middleImages: [
      "/images/home01/blog/blogdetails2.png",
      "/images/home01/blog/blogdetails3.png",
    ],

    sections2: [
      {
        heading: "Control Costs and Optimize Operations",
        content:
          "Profitability isn't just about increasing revenue — it's equally about managing costs effectively. Review your operational expenses regularly to identify inefficiencies. Invest in automation tools that reduce manual labor, streamline workflows, and improve accuracy. Cloud-based solutions, for instance, can significantly cut infrastructure costs while enhancing collaboration across teams.",
        bullets: [
          {
            text: "Implement lean operations to eliminate unnecessary waste and redundancy.",
          },
          {
            text: "Use data analytics to forecast demand accurately and reduce overproduction.",
          },
          {
            text: "Negotiate better terms with suppliers and consolidate vendor relationships.",
          },
          {
            text: "Invest in employee training to improve productivity and reduce turnover costs.",
          },
        ],
      },
      {
        heading: "Focus on Long-Term Customer Relationships",
        content:
          "Customer acquisition is expensive. Retaining existing customers and turning them into loyal advocates is far more cost-effective and impactful. Build systems that prioritize customer experience at every touchpoint — from the first interaction to post-sale support.",
        bullets: [
          { text: "Develop a loyalty program that rewards repeat customers." },
          {
            text: "Use personalized communication to make customers feel valued.",
          },
          {
            text: "Gather feedback consistently and act on it to improve your products or services.",
          },
          {
            text: "Build a community around your brand to foster peer-to-peer advocacy.",
          },
        ],
      },
    ],

    tags: ["Business", "Strategy", "Growth", "Marketing", "Startup"],

    relatedPosts: [
      {
        slug: "how-to-identify-your-target-audience-effectively",
        image: "/images/home01/blog/blog2.png",
        batchName: "Marketing",
        itmeText: "Sara Miller",
        dateText: "April 02, 2025",
        description: "How to identify your target audience effectively",
      },
      {
        slug: "top-strategies-for-digital-growth-in-2025",
        image: "/images/home01/blog/blog3.png",
        batchName: "Strategy",
        itmeText: "John Carter",
        dateText: "April 18, 2025",
        description: "Top strategies for digital growth in 2025",
      },
      {
        slug: "understanding-brand-identity-and-voice",
        image: "/images/home01/blog/blog4.png",
        batchName: "Branding",
        itmeText: "Emily Rose",
        dateText: "February 28, 2025",
        description: "Understanding brand identity and voice",
      },
    ],
  },
  {
    id: 2,
    slug: "how-to-identify-your-target-audience-effectively",
    batchName: "Marketing",
    heroImage: "/images/home01/blog/blog2.png",
    author: "Sara Miller",
    authorRole: "Marketing Strategist",
    dateText: "April 02, 2025",
    itmeText: "Sara Miller",
    title: "How to identify your target audience effectively",
    intro:
      "Understanding your target audience is the foundation of every successful marketing strategy. Without knowing who you're speaking to, even the most creative campaigns fall flat. In this post, we'll walk through proven methods to identify, segment, and connect with your ideal customers.",
    sections: [
      {
        heading: "Define Your Ideal Customer Profile",
        content:
          "Start by building a detailed profile of your ideal customer. Consider demographics like age, location, income, and education — but go deeper into psychographics: values, interests, pain points, and buying behavior. The more specific your profile, the more targeted your messaging can be.",
      },
      {
        heading: "Use Data to Validate Your Assumptions",
        content:
          "Don't guess — use real data. Analyze your existing customers, website analytics, and social media insights to find patterns. Tools like Google Analytics, Meta Audience Insights, and CRM data reveal who is already engaging with your brand.",
        bullets: [
          {
            title: "Behavioral Analysis",
            text: "Look at what pages users visit, how long they stay, and what actions they take. This reveals intent and interest patterns.",
          },
          {
            title: "Survey & Feedback",
            text: "Directly ask your existing customers about their challenges, goals, and why they chose you. First-hand data is invaluable.",
          },
          {
            title: "Competitor Research",
            text: "Study who your competitors are targeting and where they're finding success. This can reveal underserved audience segments.",
          },
        ],
      },
    ],
    quote:
      "Knowing your audience isn't just a marketing tactic — it's the difference between speaking into a void and starting a meaningful conversation that drives real results.",
    middleImages: [
      "/images/home01/blog/blogdetails2.png",
      "/images/home01/blog/blogdetails3.png",
    ],
    sections2: [
      {
        heading: "Segment and Prioritize",
        content:
          "Not all audience segments are equally valuable. Once you've identified your audience groups, prioritize them based on revenue potential, ease of reach, and alignment with your offerings.",
        bullets: [
          { text: "Create 2–3 detailed buyer personas for your top segments." },
          {
            text: "Map each persona's customer journey from awareness to purchase.",
          },
          {
            text: "Tailor messaging and channels for each persona separately.",
          },
          { text: "Test and refine based on campaign performance data." },
        ],
      },
    ],
    tags: ["Marketing", "Audience", "Strategy", "Growth"],
    relatedPosts: [
      {
        slug: "building-a-profitable-and-sustainable-business-model",
        image: "/images/home01/blog/blog1.png",
        batchName: "Business",
        itmeText: "Harry Jilson",
        dateText: "March 14, 2025",
        description: "Building a profitable and sustainable business model",
      },
      {
        slug: "top-strategies-for-digital-growth-in-2025",
        image: "/images/home01/blog/blog3.png",
        batchName: "Strategy",
        itmeText: "John Carter",
        dateText: "April 18, 2025",
        description: "Top strategies for digital growth in 2025",
      },
      {
        slug: "understanding-brand-identity-and-voice",
        image: "/images/home01/blog/blog4.png",
        batchName: "Branding",
        itmeText: "Emily Rose",
        dateText: "February 28, 2025",
        description: "Understanding brand identity and voice",
      },
    ],
  },

  {
    id: 3,
    slug: "top-strategies-for-digital-growth-in-2025",
    batchName: "Strategy",
    heroImage: "/images/home01/blog/blog3.png",
    author: "John Carter",
    authorRole: "Digital Strategist",
    dateText: "April 18, 2025",
    itmeText: "John Carter",
    title: "Top strategies for digital growth in 2025",
    intro:
      "The digital landscape is evolving faster than ever. Businesses that thrive in 2025 will be those that embrace new technologies, prioritize user experience, and build data-driven strategies. Here are the top approaches to accelerate your digital growth this year.",
    sections: [
      {
        heading: "Leverage AI-Powered Marketing",
        content:
          "Artificial intelligence is no longer optional — it's a competitive necessity. From personalized content recommendations to predictive analytics and automated ad targeting, AI helps businesses reach the right people with the right message at the right time.",
        bullets: [
          {
            title: "AI Content Generation",
            text: "Use AI tools to scale content production while maintaining quality and brand consistency across channels.",
          },
          {
            title: "Predictive Analytics",
            text: "Forecast customer behavior and market trends to make proactive, data-backed decisions.",
          },
          {
            title: "Automated Personalization",
            text: "Deliver hyper-personalized experiences at scale — from email campaigns to website content.",
          },
        ],
      },
    ],
    quote:
      "Digital growth in 2025 isn't about doing more — it's about doing the right things smarter, faster, and with greater precision than your competition.",
    middleImages: [
      "/images/home01/blog/blogdetails2.png",
      "/images/home01/blog/blogdetails3.png",
    ],
    sections2: [
      {
        heading: "Invest in SEO and Organic Reach",
        content:
          "Paid ads have their place, but sustainable digital growth depends on strong organic foundations. SEO, content marketing, and community building create compounding returns over time.",
        bullets: [
          { text: "Optimize for search intent, not just keywords." },
          {
            text: "Build topical authority through consistent, in-depth content.",
          },
          { text: "Focus on Core Web Vitals for better rankings and UX." },
          { text: "Leverage video and short-form content for broader reach." },
        ],
      },
    ],
    tags: ["Strategy", "Digital", "Growth", "AI", "SEO"],
    relatedPosts: [
      {
        slug: "building-a-profitable-and-sustainable-business-model",
        image: "/images/home01/blog/blog1.png",
        batchName: "Business",
        itmeText: "Harry Jilson",
        dateText: "March 14, 2025",
        description: "Building a profitable and sustainable business model",
      },
      {
        slug: "how-to-identify-your-target-audience-effectively",
        image: "/images/home01/blog/blog2.png",
        batchName: "Marketing",
        itmeText: "Sara Miller",
        dateText: "April 02, 2025",
        description: "How to identify your target audience effectively",
      },
      {
        slug: "understanding-brand-identity-and-voice",
        image: "/images/home01/blog/blog4.png",
        batchName: "Branding",
        itmeText: "Emily Rose",
        dateText: "February 28, 2025",
        description: "Understanding brand identity and voice",
      },
    ],
  },

  {
    id: 4,
    slug: "understanding-brand-identity-and-voice",
    batchName: "Branding",
    heroImage: "/images/home01/blog/blog4.png",
    author: "Emily Rose",
    authorRole: "Brand Consultant",
    dateText: "February 28, 2025",
    itmeText: "Emily Rose",
    title: "Understanding brand identity and voice",
    intro:
      "Your brand is far more than a logo or color palette. It's the complete experience customers have with your business — the emotions it evokes, the values it represents, and the promise it delivers. Building a strong brand identity and consistent voice is what separates memorable brands from forgettable ones.",
    sections: [
      {
        heading: "What Makes Up Brand Identity?",
        content:
          "Brand identity encompasses every visual and verbal element that represents your company — from typography and imagery to tone of voice and messaging. It's the cohesive system that makes your brand instantly recognizable across all touchpoints.",
        bullets: [
          {
            title: "Visual Identity",
            text: "Logo, color palette, typography, and design system that create visual consistency across all platforms.",
          },
          {
            title: "Brand Voice",
            text: "The personality and tone your brand uses in all communications — professional, playful, authoritative, or empathetic.",
          },
          {
            title: "Brand Values",
            text: "The core principles that guide your business decisions and resonate with your target audience.",
          },
        ],
      },
    ],
    quote:
      "A strong brand identity doesn't just attract customers — it builds trust, loyalty, and a community of advocates who tell your story for you.",
    middleImages: [
      "/images/home01/blog/blogdetails2.png",
      "/images/home01/blog/blogdetails3.png",
    ],
    sections2: [
      {
        heading: "Developing a Consistent Brand Voice",
        content:
          "Your brand voice should remain consistent whether you're writing a tweet, a product description, or a formal proposal. Start by defining 3–5 voice attributes that reflect your brand personality.",
        bullets: [
          { text: "Document your voice guidelines in a brand style guide." },
          {
            text: "Train all team members who create content on voice standards.",
          },
          {
            text: "Audit existing content to ensure consistency across channels.",
          },
          { text: "Adapt tone contextually while keeping core voice intact." },
        ],
      },
    ],
    tags: ["Branding", "Identity", "Marketing", "Design"],
    relatedPosts: [
      {
        slug: "building-a-profitable-and-sustainable-business-model",
        image: "/images/home01/blog/blog1.png",
        batchName: "Business",
        itmeText: "Harry Jilson",
        dateText: "March 14, 2025",
        description: "Building a profitable and sustainable business model",
      },
      {
        slug: "scaling-your-startup-with-limited-resources",
        image: "/images/home01/blog/blog5.png",
        batchName: "Startup",
        itmeText: "Mark Twain",
        dateText: "January 10, 2025",
        description: "Scaling your startup with limited resources",
      },
      {
        slug: "the-power-of-content-marketing-for-b2b",
        image: "/images/home01/blog/blog6.png",
        batchName: "Content",
        itmeText: "Lisa Brown",
        dateText: "March 30, 2025",
        description: "The power of content marketing for B2B businesses",
      },
    ],
  },

  {
    id: 5,
    slug: "scaling-your-startup-with-limited-resources",
    batchName: "Startup",
    heroImage: "/images/home01/blog/blog5.png",
    author: "Mark Twain",
    authorRole: "Startup Advisor",
    dateText: "January 10, 2025",
    itmeText: "Mark Twain",
    title: "Scaling your startup with limited resources",
    intro:
      "Most startups don't fail because of bad ideas — they fail because they run out of resources before finding traction. Scaling efficiently with limited capital, a small team, and tight timelines is one of the greatest challenges in entrepreneurship. Here's how to do it strategically.",
    sections: [
      {
        heading: "Do More with Less: The Lean Approach",
        content:
          "The lean startup methodology is built for resource-constrained environments. It focuses on building minimal viable products, testing assumptions quickly, and iterating based on real feedback rather than spending heavily upfront on unproven ideas.",
        bullets: [
          {
            title: "Build MVP First",
            text: "Launch with the minimum feature set that solves your core customer problem. Validate before you over-invest.",
          },
          {
            title: "Automate Early",
            text: "Identify repetitive tasks and automate them. Tools like Zapier, Make, or custom scripts can replace hours of manual work.",
          },
          {
            title: "Outsource Strategically",
            text: "Hire full-time only for core competencies. Use freelancers and agencies for everything else to stay lean.",
          },
        ],
      },
    ],
    quote:
      "Constraints are not obstacles to innovation — they are the mother of it. The best startups learn to build empires with bricks others overlooked.",
    middleImages: [
      "/images/home01/blog/blogdetails2.png",
      "/images/home01/blog/blogdetails3.png",
    ],
    sections2: [
      {
        heading: "Prioritize Revenue-Generating Activities",
        content:
          "When resources are limited, every hour and every dollar must be tied to revenue generation or retention. Cut anything that doesn't directly contribute to growth or customer satisfaction.",
        bullets: [
          {
            text: "Focus sales efforts on highest-value customer segments first.",
          },
          {
            text: "Use content marketing for low-cost organic customer acquisition.",
          },
          {
            text: "Build strategic partnerships to expand reach without added cost.",
          },
          {
            text: "Reinvest early revenue immediately into your highest-ROI channels.",
          },
        ],
      },
    ],
    tags: ["Startup", "Growth", "Lean", "Entrepreneurship"],
    relatedPosts: [
      {
        slug: "building-a-profitable-and-sustainable-business-model",
        image: "/images/home01/blog/blog1.png",
        batchName: "Business",
        itmeText: "Harry Jilson",
        dateText: "March 14, 2025",
        description: "Building a profitable and sustainable business model",
      },
      {
        slug: "understanding-brand-identity-and-voice",
        image: "/images/home01/blog/blog4.png",
        batchName: "Branding",
        itmeText: "Emily Rose",
        dateText: "February 28, 2025",
        description: "Understanding brand identity and voice",
      },
      {
        slug: "the-power-of-content-marketing-for-b2b",
        image: "/images/home01/blog/blog6.png",
        batchName: "Content",
        itmeText: "Lisa Brown",
        dateText: "March 30, 2025",
        description: "The power of content marketing for B2B businesses",
      },
    ],
  },

  {
    id: 6,
    slug: "the-power-of-content-marketing-for-b2b",
    batchName: "Content",
    heroImage: "/images/home01/blog/blog6.png",
    author: "Lisa Brown",
    authorRole: "Content Marketing Lead",
    dateText: "March 30, 2025",
    itmeText: "Lisa Brown",
    title: "The power of content marketing for B2B businesses",
    intro:
      "In the B2B world, buying decisions are complex, involve multiple stakeholders, and take time. Content marketing is uniquely suited to this environment — it builds trust, educates prospects, and keeps your brand top-of-mind throughout long sales cycles. When done right, it becomes your most powerful and scalable sales tool.",
    sections: [
      {
        heading: "Why Content Marketing Works for B2B",
        content:
          "B2B buyers conduct extensive research before making purchase decisions. They consume whitepapers, case studies, blog posts, and webinars to evaluate solutions. Content marketing positions your brand as the trusted expert they turn to — making the eventual sale a natural conclusion.",
        bullets: [
          {
            title: "Thought Leadership",
            text: "Publishing authoritative content on industry topics establishes your brand as a go-to expert, building credibility with decision-makers.",
          },
          {
            title: "Lead Nurturing",
            text: "Content guides prospects through each stage of the funnel — from awareness to consideration to decision — without requiring a sales rep at every step.",
          },
          {
            title: "SEO & Organic Traffic",
            text: "Well-optimized B2B content attracts qualified organic traffic from buyers actively searching for solutions you provide.",
          },
        ],
      },
    ],
    quote:
      "In B2B, you don't sell to companies — you sell to people within companies. Content marketing helps you earn their trust long before you ever get on a sales call.",
    middleImages: [
      "/images/home01/blog/blogdetails2.png",
      "/images/home01/blog/blogdetails3.png",
    ],
    sections2: [
      {
        heading: "Building a B2B Content Strategy",
        content:
          "Effective B2B content isn't created randomly — it's strategically planned around buyer personas, funnel stages, and business goals. Start with a clear content plan and distribution strategy.",
        bullets: [
          { text: "Map content types to each stage of your buyer's journey." },
          {
            text: "Repurpose long-form content into multiple formats (videos, infographics, social posts).",
          },
          {
            text: "Use gated content like whitepapers to capture qualified leads.",
          },
          {
            text: "Measure content ROI through pipeline influence and conversion metrics.",
          },
        ],
      },
    ],
    tags: ["Content", "B2B", "Marketing", "Strategy", "SEO"],
    relatedPosts: [
      {
        slug: "how-to-identify-your-target-audience-effectively",
        image: "/images/home01/blog/blog2.png",
        batchName: "Marketing",
        itmeText: "Sara Miller",
        dateText: "April 02, 2025",
        description: "How to identify your target audience effectively",
      },
      {
        slug: "top-strategies-for-digital-growth-in-2025",
        image: "/images/home01/blog/blog3.png",
        batchName: "Strategy",
        itmeText: "John Carter",
        dateText: "April 18, 2025",
        description: "Top strategies for digital growth in 2025",
      },
      {
        slug: "scaling-your-startup-with-limited-resources",
        image: "/images/home01/blog/blog5.png",
        batchName: "Startup",
        itmeText: "Mark Twain",
        dateText: "January 10, 2025",
        description: "Scaling your startup with limited resources",
      },
    ],
  },
];
