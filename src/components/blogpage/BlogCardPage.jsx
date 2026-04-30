"use client";

import Link from "next/link";
import Container from "../ui/Container";
import BlogCard from "../ui/BlogCard";
import Responsive from "../ui/Responsive";
import { allBlogData } from "../helper/blogpagehelper";

const BlogCardPage = () => {
  console.log(allBlogData);
  return (
    <section className="py-[70px] lg:py-[120px]">
      <Container size={"lg"}>

        {/* ── Header (BlogSectionHO এর মতো) ── */}
        <p className="text-center text-sm font-medium text-primary uppercase tracking-widest mb-3">
          Latest Posts
        </p>
        <h2 className="max-w-[800px] text-center mx-auto font-bold text-primary headingTwo">
          Insights & Updates: Driving Your Success
        </h2>

        {/* ── 6টা Card Grid ── */}
        <div className="py-[60px]">
          <Responsive.Grid cols={{ base: 1, lg: 3 }} gap="lg">
            {allBlogData.map((item, index) => (
              <Link key={index} href={`/blog/${item.slug}`}>
                <BlogCard
                  batchName={item.batchName}
                  description={item.description}
                  dateText={item.dateText}
                  image={item.image}
                  itmeText={item.itmeText}
                />
              </Link>
            ))}
          </Responsive.Grid>
        </div>

        {/* ── Pagination ── */}
        <div className="flex items-center justify-center gap-x-2 mt-[20px] md:mt-[30px] lg:mt-[60px]">
          <button className="w-10 h-10 flex items-center justify-center rounded-[6px] border border-[#0000001a] text-primary font-medium text-base hover:bg-primary hover:text-white transition-colors">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-[6px] border border-[#0000001a] text-primary font-medium text-base hover:bg-primary hover:text-white transition-colors">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-[6px] bg-primary text-white font-medium text-base">
            3
          </button>
        </div>

      </Container>
    </section>
  );
};

export default BlogCardPage;