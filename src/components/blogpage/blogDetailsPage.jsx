"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import BlogCard from "../ui/BlogCard";

const BlogDetailsPage = ({ blog }) => {
  if (!blog) return null;

  return (
    <div className="bg-white">
      {/* ── Breadcrumb ── */}
      <div className="border-b border-[#0000001a]">
        <Container size={"lg"}>
          <div className="py-4 flex items-center gap-x-2 text-sm text-primary/60">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>//</span>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span>//</span>
            <span className="text-primary font-medium line-clamp-1">
              {blog.title}
            </span>
          </div>
        </Container>
      </div>

      <section className="py-[70px] lg:py-[100px]">
        <Container size={"lg"}>
          <div className="max-w-[860px] mx-auto">
            {/* ── Title ── */}
            <h1 className="text-center font-bold text-primary headingTwo mb-6">
              {blog.title}
            </h1>

            {/* ── Author & Date ── */}
            <div className="flex items-center justify-center gap-x-3 mb-10">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">
                  {blog.author?.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary leading-tight">
                  {blog.author}
                </p>
                <p className="text-xs text-primary/50">{blog.authorRole}</p>
              </div>
            </div>

            {/* ── Hero Image ── */}
            <div className="relative w-full h-[360px] sm:h-[480px] mb-10 rounded-[10px] overflow-hidden">
              <Image
                fill
                src={blog.heroImage}
                alt={blog.title}
                className="object-cover"
              />
            </div>

            {/* ── Intro Paragraph ── */}
            <p className="text-base leading-[1.85] text-primary/70 mb-10">
              {blog.intro}
            </p>

            {/* ── Sections ── */}
            {blog.sections?.map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="text-[22px] sm:text-[26px] font-bold text-primary mb-4">
                  {section.heading}
                </h2>
                <p className="text-base leading-[1.85] text-primary/70 mb-5">
                  {section.content}
                </p>

                {/* Bullet list with title */}
                {section.bullets?.map((bullet, j) => (
                  <div
                    key={j}
                    className="mb-5 pl-4 border-l-2 border-primary/20"
                  >
                    {bullet.title && (
                      <p className="font-semibold text-primary mb-1">
                        ➔ {bullet.title}
                      </p>
                    )}
                    <p className="text-base leading-[1.85] text-primary/70">
                      {bullet.text}
                    </p>
                  </div>
                ))}
              </div>
            ))}

            {/* ── Quote Block ── */}
            {blog.quote && (
              <blockquote className="my-12 px-8 py-8 bg-[#f5f3ee] rounded-[10px] border-l-4 border-primary">
                <p className="text-base sm:text-lg leading-[1.9] text-primary font-medium italic">
                  {blog.quote}
                </p>
              </blockquote>
            )}

            {/* ── Middle Images (2-column grid) ── */}
            {blog.middleImages?.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-10">
                {blog.middleImages.map((img, i) => (
                  <div
                    key={i}
                    className="relative w-full h-[220px] sm:h-[260px] rounded-[10px] overflow-hidden"
                  >
                    <Image
                      fill
                      src={img}
                      alt={`blog-detail-img-${i + 1}`}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* ── Sections 2 (with simple bullet points) ── */}
            {blog.sections2?.map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="text-[22px] sm:text-[26px] font-bold text-primary mb-4">
                  {section.heading}
                </h2>
                <p className="text-base leading-[1.85] text-primary/70 mb-5">
                  {section.content}
                </p>
                {section.bullets?.length > 0 && (
                  <ul className="space-y-3">
                    {section.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-x-3 text-base text-primary/70 leading-[1.8]"
                      >
                        <span className="mt-[6px] w-2 h-2 rounded-full bg-primary shrink-0" />
                        {b.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* ── Tags ── */}
            {blog.tags?.length > 0 && (
              <div className="mt-12 pt-8 border-t border-[#0000001a]">
                <p className="text-sm font-semibold text-primary/50 uppercase tracking-widest mb-4">
                  Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-[6px] rounded-full border border-[#0000001a] text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* ── Related Posts ── */}
      {blog.relatedPosts?.length > 0 && (
        <section className="pb-[70px] lg:pb-[120px]">
          <Container size={"lg"}>
            <p className="text-center text-sm font-medium text-primary uppercase tracking-widest mb-3">
              Keep Reading
            </p>
            <h2 className="max-w-[600px] text-center mx-auto font-bold text-primary headingTwo mb-12">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {blog.relatedPosts.map((post, i) => (
                <Link key={i} href={`/blog/${post.slug}`}>
                  <BlogCard
                    batchName={post.batchName}
                    description={post.description}
                    dateText={post.dateText}
                    image={post.image}
                    itmeText={post.itmeText}
                  />
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </div>
  );
};

export default BlogDetailsPage;
