import BlogCardPage from "@/components/blogpage/BlogCardPage";
import InnerPageHero from "@/components/ui/InnerPageHero";
import React from "react";

const Blog = () => {
  return (
    <>
      <InnerPageHero
        title="The Business Consulting Journal"
        subtitle="A reputed consultant agency we've spent 13+ year's"
      />
      <BlogCardPage />
    </>
  );
};

export default Blog;
