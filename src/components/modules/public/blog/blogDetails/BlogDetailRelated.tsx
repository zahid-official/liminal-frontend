import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  getAdjacentArticles,
  getRelatedArticles,
  type IBlogArticle,
} from "../blogData";

// BlogDetailRelated Props
interface BlogDetailRelatedProps {
  article: IBlogArticle;
}

// BlogDetailRelated Component — Related articles + prev/next navigation
const BlogDetailRelated = ({ article }: BlogDetailRelatedProps) => {
  const { prev, next } = getAdjacentArticles(article.id);
  const related = getRelatedArticles(article.id, 3);

  return (
    <section
      id="blog-detail-related"
      aria-labelledby="related-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80"
    >
      {/* Giant Background Letter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28rem] md:text-[40rem] font-heading font-bold text-liminal-secondary/3 select-none pointer-events-none leading-none">
        L
      </div>

      <div className="custom-container relative z-10">
        {/* Prev / Next Navigation */}
        {(prev || next) && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-liminal-secondary shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-liminal-secondary">
                Continue Reading
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Previous Article */}
              {prev ? (
                <Link href={`/blog/${prev.id}`}>
                  <div className="group flex items-stretch bg-background rounded-sm border border-border/30 overflow-hidden hover:border-liminal-secondary/25 hover:shadow-lg transition-all duration-700 h-full">
                    {/* Image */}
                    <div className="relative w-1/3 min-h-35 overflow-hidden shrink-0">
                      <Image
                        src={prev.image}
                        alt={prev.title}
                        fill
                        quality={80}
                        sizes="15vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu"
                      />
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-5 md:p-6 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-2">
                        <ArrowLeft className="size-3 text-muted-foreground/40" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground/50">
                          Previous Article
                        </span>
                      </div>
                      <h4 className="text-base font-bold font-heading tracking-tight leading-snug group-hover:text-liminal-secondary transition-colors duration-500">
                        {prev.title}
                      </h4>
                      <span className="text-[11px] font-mono tracking-wider text-muted-foreground/50 uppercase mt-2">
                        {prev.category}
                      </span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {/* Next Article */}
              {next ? (
                <Link href={`/blog/${next.id}`}>
                  <div className="group flex items-stretch bg-background rounded-sm border border-border/30 overflow-hidden hover:border-liminal-secondary/25 hover:shadow-lg transition-all duration-700 h-full flex-row-reverse">
                    {/* Image */}
                    <div className="relative w-1/3 min-h-35 overflow-hidden shrink-0">
                      <Image
                        src={next.image}
                        alt={next.title}
                        fill
                        quality={80}
                        sizes="15vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu"
                      />
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-5 md:p-6 flex flex-col justify-center text-right">
                      <div className="flex items-center justify-end gap-2 mb-2">
                        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground/50">
                          Next Article
                        </span>
                        <ArrowRight className="size-3 text-muted-foreground/40" />
                      </div>
                      <h4 className="text-base font-bold font-heading tracking-tight leading-snug group-hover:text-liminal-secondary transition-colors duration-500">
                        {next.title}
                      </h4>
                      <span className="text-[11px] font-mono tracking-wider text-muted-foreground/50 uppercase mt-2">
                        {next.category}
                      </span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        )}

        {/* Related Articles Grid */}
        <SectionHeader
          variant="centered"
          badgeText="Related Entries"
          headingId="related-heading"
          title={
            <>
              More From the{" "}
              <span className="italic font-serif font-light text-liminal-secondary">
                Journal
              </span>
            </>
          }
          description="Further explorations in design thinking, material studies, and spatial philosophy."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {related.map((relatedArticle) => (
            <Link key={relatedArticle.id} href={`/blog/${relatedArticle.id}`}>
              <article className="group flex flex-col bg-background rounded-sm border border-border/30 overflow-hidden hover:border-liminal-secondary/25 hover:shadow-lg hover:-translate-y-1 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform-gpu backface-hidden h-full">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    fill
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu backface-hidden"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/10 to-transparent" />

                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-background/90 bg-foreground/40 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                      {relatedArticle.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 md:p-8 flex flex-col flex-1">
                  {/* Date & Read Time */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[11px] font-mono tracking-wider text-muted-foreground/60 uppercase">
                      {relatedArticle.date}
                    </span>
                    <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                    <span className="text-[11px] font-mono tracking-wider text-muted-foreground/60 uppercase">
                      {relatedArticle.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-heading tracking-tight leading-snug mb-3 group-hover:text-liminal-secondary transition-colors duration-500">
                    {relatedArticle.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground font-light text-[15px] leading-relaxed mb-6 flex-1 line-clamp-3">
                    {relatedArticle.excerpt}
                  </p>

                  {/* Read Link */}
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-liminal-secondary hover:gap-3 transition-all duration-500 group/link">
                    <span>Read Article</span>
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:rotate-45 transform-gpu" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetailRelated;
