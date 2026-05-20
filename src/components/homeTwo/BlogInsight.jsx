"use client";
import Image from "next/image";
import Link from "next/link";
import allImages from "../helper/imageProvider";
import Container from "../ui/Container";
import { Grid } from "../ui/Responsive";
import { blogPosts, clipStyles } from "../helper/helpers";
const BlogInsight = () => {
  return (
    <section className="py-10 lg:py-30 bg-bg-secondaryOne">
      <Container size="lg">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 gap-4">
          <div>
            <span className="inline-block text-primary border border-black/10 text-[14px] font-bold tracking-widest uppercase px-3 py-1 mb-4">
              Blog Insight
            </span>
            <h2 className="max-w-[749px] text-[30px] lg:text-[45px] font-bold underline underline-offset-4 lg:leading-14.5">
              Valuable insights to change your startup idea
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-[18px] underline underline-offset-6 font-medium whitespace-nowrap hover:opacity-70 transition-opacity"
          >
            Read all blog posts
            <svg
              width="9"
              height="11"
              viewBox="0 0 9 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5547 0.16928C0.890146 -0.273757 0 0.202634 0 1.00133V9.2643C0 10.063 0.890145 10.5394 1.5547 10.0963L7.75192 5.96486C8.34566 5.56904 8.34566 4.69658 7.75192 4.30076L1.5547 0.16928Z"
                fill="#02090F"
              />
            </svg>
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <Grid cols={{ base: 1, sm: 2, lg: 4 }} gap="md">
          {blogPosts.map((post, index) => {
            const imgSrc = allImages.home2blog[index]?.img;
            const isRectangle = post.clipShape === "rectangle";

            return (
              <div
                key={post.id}
                className={`bg-white rounded-md flex flex-col items-center text-center gap-3 group ${
                  isRectangle ? "overflow-hidden" : "px-9 py-7.5"
                }`}
              >
                {/* Image with clip shape */}
                <div
                  className="flex items-center justify-center w-full overflow-hidden"
                  style={isRectangle ? {} : { minHeight: "180px" }}
                >
                  {imgSrc && (
                    <Link href={"/blog"}>
                      <Image
                        src={imgSrc}
                        alt={post.title}
                        width={isRectangle ? 377 : 160}
                        height={isRectangle ? 250 : 160}
                        style={
                          isRectangle
                            ? {
                                width: "377px",
                                height: "200px",
                                objectFit: "cover",
                              }
                            : clipStyles[post.clipShape]
                        }
                      />
                    </Link>
                  )}
                </div>

                {/* nicer content e rectangle hole alda padding */}
                <div
                  className={`flex flex-col items-center gap-3 ${isRectangle ? "px-9 pb-7.5" : "w-full"}`}
                >
                  <p className="text-sm text-primary font-medium">
                    {post.readTime} &bull; {post.date}
                  </p>
                  <Link className="inline-block" href="/blog">
                    <h3 className="text-[19px] font-bold group-hover:text-secondary  duration-500 ease-in-out">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-tarnary font-normal">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default BlogInsight;
