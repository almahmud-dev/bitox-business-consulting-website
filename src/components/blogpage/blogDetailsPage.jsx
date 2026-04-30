"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import BlogCard from "../ui/BlogCard";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Grid, Stack } from "../ui/Responsive";
import ButtonThree from "../ui/ButtonThree";

const BlogDetailsPage = ({ blog }) => {
  if (!blog) return null;
  const inputClass =
    "w-full bg-[#F5F5F5] rounded-lg px-5 py-4 text-sm bg-neutral-100 border border-transparent focus:border-neutral-300 focus:outline-none transition-colors placeholder:text-neutral-400";
  return (
    <div className="bg-bg-secondaryOne">
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

      <section className="py-17.5 lg:py-25">
        {/* ── Title & Author (inside Container) ── */}
        <Container size={"lg"}>
          <div className="max-w-215 mx-auto">
            {/* ── Meta Row (static, always same) ── */}
            <div className="flex items-center justify-center gap-2 flex-wrap mb-7.5">
              {["4 min read", "Creative Agency", "20 September 2025"].map(
                (item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2.5 border border-black/10 rounded-full px-4 py-1 text-sm text-primary"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    {item}
                  </span>
                ),
              )}
            </div>

            {/* ── Title ── */}
            <h1 className="text-center font-bold text-primary headingTwo mb-7.5">
              {blog.title}
            </h1>

            {/* ── Author Card ── */}
            <div className="flex justify-center mb-10">
              <div className="flex items-center gap-x-3 border border-black/10 bg-white rounded-[90px] pr-5 lg:pr-9.5 pl-1.5 py-1.5">
                {/* Avatar — image thakle image, na thakle letter */}
                <div className="w-15 h-15 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center shrink-0">
                  {blog.authorImage ? (
                    <Image
                      src={blog.authorImage}
                      alt={blog.author}
                      width={36}
                      height={36}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-xs font-bold text-primary">
                      {blog.author?.charAt(0)}
                    </span>
                  )}
                </div>

                <div>
                  <p className="text-xs text-primary/50 leading-tight">
                    Author
                  </p>
                  <p className="text-sm font-semibold text-primary leading-tight">
                    {blog.author}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* ── Hero Image (full-width, outside Container) ── */}
        <div className="relative w-full h-90 sm:h-120 lg:h-150 xl:[800px] mb-15 overflow-hidden">
          <Image
            fill
            src={blog.heroImage}
            alt={blog.title}
            className="object-cover object-top"
          />
        </div>

        {/* ── Main Content (inside Container) ── */}
        <Container size={"lg"}>
          <div className="">
            {/* ── Intro Paragraph ── */}
            <p className="text-[18px] leading-6.5 text-tarnary mb-10">
              {blog.intro}
            </p>

            {/* ── Sections ── */}
            {blog.sections?.map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="text-[22px] sm:text-[26px] font-bold text-primary underline underline-offset-4 mb-4">
                  {section.heading}
                </h2>
                <p className="text-[18px] leading-6.5 text-tarnary mb-5">
                  {section.content}
                </p>

                {section.bullets?.map((bullet, j) => (
                  <div key={j} className="mb-5 border-primary/20">
                    {bullet.title && (
                      <p className="font-bold text-primary mb-1">
                        <span className="w-2 h-2 rounded-full bg-primary mr-2 inline-block align-middle" />
                        {bullet.title}
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
              <blockquote className="relative my-12 px-8 py-8 bg-white rounded-[10px]">
                {/* Dashed double border - left side */}
                <svg
                  style={{
                    position: "absolute",
                    top: 25,
                    left: 10,
                    width: "6px",
                    height: "75%",
                    pointerEvents: "none",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="100%"
                    stroke="#02090F"
                    strokeOpacity="0.2"
                    strokeDasharray="2 2"
                  />
                  <line
                    x1="5"
                    y1="0"
                    x2="5"
                    y2="100%"
                    stroke="#02090F"
                    strokeOpacity="0.2"
                    strokeDasharray="2 2"
                  />
                </svg>

                {/* SVG Quote Icon */}
                <div className="absolute top-6 left-6">
                  <svg
                    width="36"
                    height="29"
                    viewBox="0 0 70 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_quote)">
                      <path
                        d="M54 55.5H69.5V23.5H47.5L69.5 0H58L37 23.5L54 55.5Z"
                        fill="#FF5101"
                      />
                      <path
                        d="M17 55.5H32.5V23.5H10.5L32.5 0H21L0 23.5L17 55.5Z"
                        fill="#FF5101"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_quote">
                        <rect width="70" height="56" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <p className="mt-10 text-base sm:text-lg lg:text-[24px] leading-6 xl:leading-8.5 text-primary font-medium">
                  {blog.quote}
                </p>
              </blockquote>
            )}

            {/* ── Middle Images (2-column grid) ── */}
            {blog.middleImages?.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7.5 my-10">
                {blog.middleImages.map((img, i) => (
                  <div
                    key={i}
                    className="relative w-full aspect-4/3 sm:aspect-3/4 lg:aspect-4/3 xl:aspect-square overflow-hidden"
                  >
                    <Image
                      fill
                      src={img}
                      alt={`blog-detail-img-${i + 1}`}
                      className="object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* ── Sections 2 ── */}
            {blog.sections2?.map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="text-[22px] sm:text-[26px] font-bold text-primary underline underline-offset-5 mb-4">
                  {section.heading}
                </h2>
                <p className="text-[18px] leading-6.5 text-tarnary mb-5">
                  {section.content}
                </p>
                {section.bullets?.length > 0 && (
                  <ul className="space-y-3">
                    {section.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-x-3 text-[18px] text-tarnary leading-6.5"
                      >
                        <span className="mt-0.75 shrink-0 bg-[#FFD8C5] w-8 h-8 flex items-center justify-center rounded-[90px] p-2">
                          <svg
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 7.34068C2.40119 9.86113 4.72936 12.1302 6.96734 15C9.4005 10.3052 11.8909 5.59398 16 0.492012L14.8928 0C11.4231 3.56978 8.72743 6.94889 6.38513 10.9647C4.75628 9.54118 2.12389 7.52677 0.516585 6.49182L0 7.34068Z"
                              fill="#FF5101"
                            />
                          </svg>
                        </span>
                        {b.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* ── Tags ── */}
            {blog.tags?.length > 0 && (
              <div className="mt-12 pb-8 pt-8 border-t border-b border-black/10 flex flex-wrap items-center justify-between gap-4">
                {/* Tags Section */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-[20px] font-bold text-primary">
                    Tags:
                  </span>
                  {blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 rounded-full border border-black/10 text-sm font-medium text-primary hover:bg-primary hover:text-white bg-white transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Share Section */}
                <div className="flex items-center gap-3">
                  <span className="text-[20px] font-bold text-primary">
                    Share:
                  </span>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-primary border border-black/10 hover:bg-secondary hover:text-white hover:opacity-80 transition-opacity"
                  >
                    <FaFacebook size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-primary border border-black/10 hover:bg-secondary hover:text-white hover:opacity-80 transition-opacity"
                  >
                    <FaXTwitter size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-primary border border-black/10 hover:bg-secondary hover:text-white hover:opacity-80 transition-opacity"
                  >
                    <FaLinkedinIn size={16} />
                  </a>
                </div>
              </div>
            )}
          </div>
          {/* Leave from */}
          <div className="w-full mx-auto px-6 bg-white rounded-md mt-15 p-15">
            <h2 className="text-3xl font-bold underline tracking-tight mb-7">
              Leave A Comment
            </h2>

            <Stack gap="md">
              <Grid cols={{ base: 1, md: 2 }} gap="md">
                <input type="text" placeholder="Name" className={inputClass} />
                <input
                  type="email"
                  placeholder="Email"
                  className={inputClass}
                />
              </Grid>

              <textarea
                placeholder="Write your message"
                rows={6}
                className={`${inputClass} resize-none`}
              />

              <div className="self-start flex items-center gap-2 bg-secondary text-white text-base font-bold rounded-[90px] px-4 py-2 sm:px-7.5 sm:py-5 cursor-pointer hover:bg-[#e63946] hover:text-white transition-colors group">
                <ButtonThree
                  frontText="Submit comment"
                  backText="Let's Talk."
                  backgroundColor="transparent"
                  textColor="#FFFFFF"
                  fontSize={14}
                  paddingTop={0}
                  paddingBottom={0}
                  paddingLeft={0}
                  paddingRight={0}
                />
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  <svg width="9" height="12" viewBox="0 0 9 12" fill="none">
                    <path
                      d="M0.77735 0.0848229C0.445073 -0.136695 0 0.1015 0 0.500848V10.6323C0 11.0317 0.445073 11.2699 0.77735 11.0484L8.37596 5.98261C8.67283 5.7847 8.67283 5.34848 8.37596 5.15056L0.77735 0.0848229Z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </span>
              </div>
            </Stack>
          </div>
        </Container>
      </section>

      {/* ── Related Posts ── */}
      {blog.relatedPosts?.length > 0 && (
        <section className="pb-17.5 lg:pb-30">
          <Container size={"lg"}>
            <div className="flex justify-center">
              <span className="inline-flex items-center justify-center border border-black/10 rounded-sm py-1 px-3.75 text-xs font-bold uppercase mb-3">
                Keep Reading
              </span>
            </div>
            <h2 className="text-center mx-auto font-bold text-primary headingTwo mb-12">
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
