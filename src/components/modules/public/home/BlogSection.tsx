import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import Link from "next/link";

// Blog Data
const blogData = [
  {
    id: 1,
    title: "Functional Design Trends That Blend Style And Comfort",
    summary:
      "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you're updating a single room or redesigning your entire home,",
    tag: "Power Tools",
    date: "June 2, 2025",
    author: "Admin",
    image: "/assets/about-1.webp",
  },
  {
    id: 2,
    title: "Functional Design Trends That Blend Style And Comfort",
    summary:
      "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether",
    tag: "Power Tools",
    date: "June 2, 2025",
    author: "Admin",
    image: "/assets/about-2.webp",
  },
  {
    id: 3,
    title: "Innovative Interior Ideas To Refresh Your Living Space",
    summary:
      "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether",
    tag: "Electrical & Lighting",
    date: "June 2, 2025",
    author: "Admin",
    image: "/assets/project-1.png",
  },
  {
    id: 4,
    title: "Transform Your Home With The Modern Interior Design",
    summary:
      "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether",
    tag: "Accessories",
    date: "June 2, 2025",
    author: "Admin",
    image: "/assets/about-1.webp",
  },
];

// BlogSection Component
const BlogSection = () => {
  const featuredPost = blogData[0];
  const otherPosts = blogData.slice(1, 4);

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="py-20 md:py-28 lg:py-32 bg-zinc-50/80 dark:bg-background overflow-hidden relative"
    >
      <div className="custom-container relative z-10">
        {/* Section Header */}
        <SectionHeader
          badgeText="STRAIGHT FROM THE NEWSROOM"
          headingId="blog-heading"
          title={
            <>
              Take A Look At{" "}
              <span className="text-liminal-secondary">Our Latest</span>
              <br className="hidden lg:block" />
              <span className="text-liminal-secondary">Blog</span> & Articles.
            </>
          }
        />

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14">
          {/* Left: Large Featured Post */}
          <Link href={`/blog/${featuredPost.id}`} className="group block">
            <div className="relative w-full aspect-4/3 rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden mb-6 lg:mb-8 border border-border/40 shadow-sm bg-muted">
              <Image
                src={featuredPost.image}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                alt={featuredPost.title}
              />
              <div className="absolute top-5 left-5 md:top-6 md:left-6 z-10 px-4 py-1.5 rounded-full bg-liminal-secondary backdrop-blur-md text-white text-[11px] font-bold tracking-widest uppercase">
                {featuredPost.tag}
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 font-medium uppercase tracking-wider text-[11px] sm:text-xs">
              {!featuredPost.date ? null : <span>{featuredPost.date} </span>}
              {!featuredPost.date ? null : <span>•</span>}
              <span>
                By{" "}
                <span className="text-liminal-secondary capitalize">
                  {featuredPost.author}
                </span>
              </span>
            </div>

            <h3 className="line-clamp-2 text-[1.35rem] sm:text-[1.75rem] lg:text-3xl font-bold font-heading leading-[1.1] mb-4 group-hover:text-liminal-secondary transition-colors duration-300">
              {featuredPost.title}
            </h3>

            <p className="text-muted-foreground text-[15px] sm:text-base leading-relaxed line-clamp-3">
              {featuredPost.summary}
            </p>
          </Link>

          {/* Right: Small Posts List */}
          <div className="flex flex-col gap-8 lg:gap-0 mt-4 lg:mt-0">
            {otherPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className={`group flex-col sm:flex-row flex gap-6 lg:gap-8 ${
                  index !== otherPosts.length - 1
                    ? "lg:pb-7 lg:mb-7 lg:border-b border-border/80"
                    : ""
                }`}
              >
                {/* Image */}
                <div className="relative w-full sm:w-[42%] lg:w-[45%] shrink-0 aspect-16/10 sm:aspect-4/3 rounded-[1rem] lg:rounded-[1.25rem] overflow-hidden border border-border/40 shadow-sm bg-muted">
                  <Image
                    src={post.image}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    alt={post.title}
                  />
                  <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-liminal-secondary backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase">
                    {post.tag}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-1.5 text-muted-foreground mb-3 font-medium tracking-wider text-[10px] sm:text-[11px]">
                    <span className="uppercase">{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-liminal-secondary"></span>
                    <span>
                      By{" "}
                      <span className="text-liminal-secondary font-semibold capitalize">
                        {post.author}
                      </span>
                    </span>
                  </div>

                  <h4 className="line-clamp-2 text-xl sm:text-[22px] font-bold font-heading leading-tight mb-3 group-hover:text-liminal-secondary transition-colors duration-300">
                    {post.title}
                  </h4>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
