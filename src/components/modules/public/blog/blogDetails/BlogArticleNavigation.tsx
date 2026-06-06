import type { IBlogArticle } from "../blogData";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// BlogArticleNavigation Props
interface BlogArticleNavigationProps {
  prev: IBlogArticle | null;
  next: IBlogArticle | null;
}

// BlogArticleNavigation Component
const BlogArticleNavigation = ({ prev, next }: BlogArticleNavigationProps) => {
  if (!prev && !next) return null;

  return (
    <section className="py-12 md:py-16 border-t border-border/40">
      <div className="custom-container">
        {/* Navigation Heading */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-liminal-secondary shrink-0" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-liminal-secondary">
            Continue Reading
          </span>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Previous Article */}
          {prev ? (
            <Link href={`/blog/${prev.id}`}>
              <article className="group flex items-stretch bg-background rounded-sm border border-border/30 overflow-hidden hover:border-liminal-secondary/25 hover:shadow-lg transition-all duration-700 h-full">
                {/* Image */}
                <div className="relative w-1/3 min-h-32 overflow-hidden shrink-0">
                  <Image
                    src={prev.image}
                    alt={prev.title}
                    fill
                    quality={80}
                    sizes="(max-width: 768px) 33vw, 20vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 gap-2 p-5 md:p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-muted-foreground/50 group-hover:text-liminal-secondary transition-colors duration-700">
                    <ArrowLeft className="size-3.5" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em]">
                      Previous Article
                    </span>
                  </div>

                  <h4 className="text-lg font-bold font-heading tracking-tight leading-snug group-hover:text-liminal-secondary transition-colors duration-700">
                    {prev.title}
                  </h4>

                  <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-muted-foreground/50 uppercase">
                    <span className="">{prev.category}</span>
                    <div className="w-0.5 h-0.5 rounded-full bg-muted-foreground/50" />
                    <span className="">{prev.readTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          ) : (
            <div />
          )}

          {/* Next Article */}
          {next ? (
            <Link href={`/blog/${next.id}`}>
              <article className="group flex items-stretch bg-background rounded-sm border border-border/30 overflow-hidden hover:border-liminal-secondary/25 hover:shadow-lg transition-all duration-700 h-full flex-row-reverse">
                {/* Image */}
                <div className="relative w-1/3 min-h-32 overflow-hidden shrink-0">
                  <Image
                    src={next.image}
                    alt={next.title}
                    fill
                    quality={80}
                    sizes="(max-width: 768px) 33vw, 20vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 gap-2 p-5 md:p-6 flex flex-col justify-center text-right">
                  <div className="flex items-center justify-end gap-2 text-muted-foreground/50 group-hover:text-liminal-secondary transition-colors duration-700">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em]">
                      Next Article
                    </span>
                    <ArrowRight className="size-3.5" />
                  </div>

                  <h4 className="text-lg font-bold font-heading tracking-tight leading-snug group-hover:text-liminal-secondary transition-colors duration-700">
                    {next.title}
                  </h4>

                  <div className="flex items-center justify-end gap-2 text-[10px] font-mono tracking-[0.2em] text-muted-foreground/50 uppercase">
                    <span className="">{next.category}</span>
                    <div className="w-0.5 h-0.5 rounded-full bg-muted-foreground/50" />
                    <span className="">{next.readTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogArticleNavigation;
