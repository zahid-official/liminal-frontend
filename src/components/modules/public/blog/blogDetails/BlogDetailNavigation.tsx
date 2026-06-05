import type { IBlogArticle } from "../blogData";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogDetailNavigationProps {
  prev: IBlogArticle | null;
  next: IBlogArticle | null;
}

// BlogDetailNavigation Component — Premium prev/next article navigation
const BlogDetailNavigation = ({ prev, next }: BlogDetailNavigationProps) => {
  if (!prev && !next) return null;

  return (
    <section id="blog-detail-navigation" className="border-t border-border/25">
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Previous Article */}
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              className="group relative flex items-center gap-6 py-12 md:py-16 md:pr-12 md:border-r border-b md:border-b-0 border-border/25 transition-colors duration-500 hover:bg-zinc-50/30 overflow-hidden"
            >
              {/* Background image hint on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700">
                <Image
                  src={prev.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>

              {/* Arrow */}
              <div className="w-14 h-14 rounded-full border border-border/40 flex items-center justify-center shrink-0 group-hover:border-liminal-secondary/40 group-hover:bg-liminal-secondary/5 transition-all duration-500 relative z-10">
                <ArrowLeft className="size-4 text-muted-foreground/60 group-hover:text-liminal-secondary transition-all duration-500 group-hover:-translate-x-0.5 transform-gpu" />
              </div>

              {/* Content */}
              <div className="min-w-0 relative z-10">
                <span className="text-[9px] font-mono uppercase tracking-[0.35em] text-muted-foreground/40 block mb-2">
                  Previous Article
                </span>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-liminal-secondary/60 mb-1.5">
                  {prev.category}
                </p>
                <h4 className="text-lg font-bold font-heading tracking-tight leading-snug text-foreground group-hover:text-liminal-secondary transition-colors duration-500 line-clamp-2">
                  {prev.title}
                </h4>
              </div>
            </Link>
          ) : (
            <div className="hidden md:block md:border-r border-border/25" />
          )}

          {/* Next Article */}
          {next ? (
            <Link
              href={`/blog/${next.slug}`}
              className="group relative flex items-center gap-6 py-12 md:py-16 md:pl-12 flex-row-reverse md:text-right transition-colors duration-500 hover:bg-zinc-50/30 overflow-hidden"
            >
              {/* Background image hint on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700">
                <Image
                  src={next.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>

              {/* Arrow */}
              <div className="w-14 h-14 rounded-full border border-border/40 flex items-center justify-center shrink-0 group-hover:border-liminal-secondary/40 group-hover:bg-liminal-secondary/5 transition-all duration-500 relative z-10">
                <ArrowRight className="size-4 text-muted-foreground/60 group-hover:text-liminal-secondary transition-all duration-500 group-hover:translate-x-0.5 transform-gpu" />
              </div>

              {/* Content */}
              <div className="min-w-0 relative z-10">
                <span className="text-[9px] font-mono uppercase tracking-[0.35em] text-muted-foreground/40 block mb-2">
                  Next Article
                </span>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-liminal-secondary/60 mb-1.5">
                  {next.category}
                </p>
                <h4 className="text-lg font-bold font-heading tracking-tight leading-snug text-foreground group-hover:text-liminal-secondary transition-colors duration-500 line-clamp-2">
                  {next.title}
                </h4>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogDetailNavigation;
