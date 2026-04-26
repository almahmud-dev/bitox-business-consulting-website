import React from "react";
import Container from "../ui/Container";
import BlogCard from "../ui/BlogCard";
import Responsive from "../ui/Responsive";
import { blogData } from "../helper/homeOnehelper";

const BlogSectionHO = () => {
  return (
    <section className="py-[120px]">
      <Container size={"lg"}>
        <h2 className="max-w-[800px] text-center mx-auto font-bold text-primary headingTwo">
          Insights & Updates: Driving Your Success
        </h2>
        <div className="py-[60px]">
          <Responsive.Grid cols={{ base: 1, lg: 3 }} gap="lg">
            {blogData.map((items, index) => {
              return (
                <BlogCard
                  batchName={items.batchName}
                  description={items.description}
                  dateText={items.dateText}
                  image={items.image}
                  itmeText={items.itmeText}
                  key={index}
                />
              );
            })}
          </Responsive.Grid>
        </div>
        <div className="mt-[60px]">
          <button className="w-full cursor-pointer text-center py-5  text-primary font-medium text-base border border-[#0000001a] rounded-[6px  ]">
            See all case studies
          </button>
        </div>
      </Container>
    </section>
  );
};

export default BlogSectionHO;
