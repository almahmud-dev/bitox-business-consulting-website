import { allBlogDetailsData } from "@/components/helper/blogpagehelper";
import BlogDetailsPage from "@/components/blogpage/blogDetailsPage";
import { notFound } from "next/navigation";

const BlogDetails = async ({ params }) => {
  const { slug } = await params;

  console.log("SLUG:", slug);
  console.log("ALL SLUGS:", allBlogDetailsData.map(b => b.slug));

  const blog = allBlogDetailsData.find((b) => b.slug === slug);

  console.log("FOUND BLOG:", blog);

  if (!blog) return notFound();

  return <BlogDetailsPage blog={blog} />;
};

export default BlogDetails;