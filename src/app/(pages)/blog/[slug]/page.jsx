import { allBlogDetailsData } from "@/components/helper/blogpagehelper";
import BlogDetailsPage from "@/components/blogpage/blogDetailsPage";

const BlogDetails = async ({ params }) => {
  const { slug } = await params;
  const blog = allBlogDetailsData.find((b) => b.slug === slug);

 
  const safeBlog = blog ?? {
    slug,
    batchName: "Blog",
    heroImage: allBlogDetailsData[0].heroImage,
    author: "Bitox Agency",
    authorRole: "Editor",
    authorImage: null,
    dateText: "2025",
    itmeText: "Bitox Agency",
    title: slug
      ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
      : "Blog Post",
    intro:
      "We share insights, strategies, and stories from the world of digital business. Stay tuned for expert perspectives on branding, marketing, technology, and growth.",
    sections: [
      {
        heading: "Our Approach",
        content:
          "At our agency, we believe in data-driven strategies combined with creative thinking. Every challenge is an opportunity to innovate and deliver measurable results for our clients.",
        bullets: [],
      },
      {
        heading: "Why It Matters",
        content:
          "In today's fast-changing digital landscape, staying ahead requires bold thinking, agile execution, and a commitment to continuous improvement.",
        bullets: [],
      },
    ],
    quote:
      "Great work is not just about the end result — it's about the journey, the thinking, and the people who make it happen.",
    middleImages: [
      allBlogDetailsData[0].middleImages[0],
      allBlogDetailsData[0].middleImages[1],
    ],
    sections2: [
      {
        heading: "What We Deliver",
        content:
          "From strategy to execution, we partner with businesses to build lasting digital presence and measurable growth.",
        bullets: [
          { text: "Tailored strategies aligned with your business goals." },
          { text: "Data-driven decisions for maximum ROI." },
          { text: "End-to-end execution with transparent reporting." },
        ],
      },
    ],
    tags: ["Digital", "Agency", "Strategy", "Growth"],
    relatedPosts: allBlogDetailsData.slice(0, 3).map((b) => ({
      slug: b.slug,
      batchName: b.batchName,
      description: b.title,
      dateText: b.dateText,
      image: b.heroImage,
      itmeText: b.itmeText,
    })),
  };

  return <BlogDetailsPage blog={safeBlog} />;
};

export default BlogDetails;