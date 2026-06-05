import SectionHeader from "@/components/shared/SectionHeader";
import type { IBlogArticle } from "../blogData";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogDetailRelatedProps {
  posts: IBlogArticle[];
}

// BlogDetailRelated Component — Premium related articles section
const BlogDetailRelated = ({ posts }: BlogDetailRelatedProps) => {
  if (posts.length === 0) return null;

  return (
    <section
      id="blog-detail-related"
      aria-labelledby="related-articles-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80"
    >
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          variant="manifesto"
          badgeText="Continue Reading"
          headingId="related-articles-heading"
          title={
            <>
              More{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Explorations
              </span>
            </>
          }
          description="Continue your journey through design thinking — explore related articles from the Liminal Journal."
          className="mb-16 lg:mb-20"
        />

        {/* Related Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-10 lg:gap-y-14">
          {posts.map((article, index) => (
            <article
              key={article.id}
              className="group flex flex-col"
            >
              {/* Image */}
              <Link
                href={`/blog/${article.slug}`}
                className="relative aspect-[4/3] overflow-hidden rounded-sm mb-6 block"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-110 will-change-transform transform-gpu backface-hidden"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-background/95 bg-foreground/50 backdrop-blur-sm px-3.5 py-1.5 rounded-sm">
                    {article.category}
                  </span>
                </div>

                {/* Index */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0 transform-gpu">
                  <span className="text-5xl font-heading font-bold text-background/15">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Inner Border Frame on hover */}
                <div className="absolute inset-0 border border-background/0 group-hover:border-background/15 pointer-events-none m-3 transition-all duration-700" />
              </Link>

              {/* Content */}
              <div className="flex flex-col flex-1">
                {/* Date & Read Time */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-mono tracking-wider text-muted-foreground/50 uppercase">
                    {article.date}
                  </span>
                  <div className="w-4 h-px bg-muted-foreground/20" />
                  <span className="text-[11px] font-mono tracking-wider text-muted-foreground/50 uppercase">
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <Link href={`/blog/${article.slug}`}>
                  <h3 className="text-xl font-bold font-heading tracking-tight leading-snug mb-3 group-hover:text-liminal-secondary transition-colors duration-500">
                    {article.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-muted-foreground font-light text-[15px] leading-relaxed mb-6 flex-1 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Read Link */}
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-liminal-secondary hover:gap-3 transition-all duration-500 group/link"
                >
                  <span className="text-xs tracking-wider uppercase">Read Article</span>
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/link:rotate-45 transform-gpu" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetailRelated;
