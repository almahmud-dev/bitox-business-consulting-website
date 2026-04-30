"use client";

import Link from "next/link";
import Container from "../ui/Container";
import BlogCard from "../ui/BlogCard";
import Responsive from "../ui/Responsive";
import { allBlogData, arrowBtn, pageBtn, pages } from "../helper/blogpagehelper";
import { MdArrowForwardIos } from "react-icons/md";
const BlogCardPage = () => {
  return (
    <section className="py-17.5 lg:py-30 bg-bg-secondaryOne">
      <Container size={"lg"}>
        {/* ── Header (BlogSectionHO same) ── */}
        <div className="flex justify-center">
          <span className="inline-flex items-center justify-center border border-black/10 rounded-sm py-1 px-3.75 text-xs font-bold uppercase mb-3">
            Latest Posts
          </span>
        </div>
        <h2 className="max-w-200 text-center mx-auto font-bold text-primary headingTwo underline underline-offset-4">
          Insights & Updates: Driving Your Success
        </h2>

        {/* ── 6ta Card Grid ── */}
        <div className="py-15">
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
        <div className="flex items-center justify-center gap-x-2.5 bg-white py-5">
          {pages.map((page) => (
            <button key={page} className={pageBtn}>
              {page}
            </button>
          ))}
          <button className={arrowBtn}>
            <MdArrowForwardIos />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default BlogCardPage;
