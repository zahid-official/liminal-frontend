import { IBlogArticle } from "./blogData";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Previous Article */}
          {prev ? (
            <Link
              href={`/blog/${prev.id}`}
              className="group flex items-start gap-5 p-6 md:p-8 rounded-sm border border-border/30 hover:border-liminal-secondary/25 hover:shadow-lg transition-all duration-500 bg-background"
            >
              <div className="shrink-0 w-10 h-10 rounded-full border border-border/60 flex items-center justify-center group-hover:border-liminal-secondary/40 group-hover:text-liminal-secondary transition-all duration-300 mt-1">
                <ArrowLeft className="size-4 group-hover:-translate-x-0.5 transition-transform duration-300" />
              </div>
              <div className="space-y-2 min-w-0">
                <span className="text-[10px] font-mono tracking-[0.3em] text-muted-foreground/50 uppercase block">
                  Previous Article
                </span>
                <h4 className="text-base font-bold font-heading tracking-tight leading-snug group-hover:text-liminal-secondary transition-colors duration-500 line-clamp-2">
                  {prev.title}
                </h4>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono tracking-wider text-muted-foreground/40 uppercase">
                    {prev.category}
                  </span>
                  <div className="w-0.5 h-0.5 rounded-full bg-muted-foreground/30" />
                  <span className="text-[10px] font-mono tracking-wider text-muted-foreground/40 uppercase">
                    {prev.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {/* Next Article */}
          {next ? (
            <Link
              href={`/blog/${next.id}`}
              className="group flex items-start gap-5 p-6 md:p-8 rounded-sm border border-border/30 hover:border-liminal-secondary/25 hover:shadow-lg transition-all duration-500 bg-background md:text-right md:flex-row-reverse"
            >
              <div className="shrink-0 w-10 h-10 rounded-full border border-border/60 flex items-center justify-center group-hover:border-liminal-secondary/40 group-hover:text-liminal-secondary transition-all duration-300 mt-1">
                <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </div>
              <div className="space-y-2 min-w-0">
                <span className="text-[10px] font-mono tracking-[0.3em] text-muted-foreground/50 uppercase block">
                  Next Article
                </span>
                <h4 className="text-base font-bold font-heading tracking-tight leading-snug group-hover:text-liminal-secondary transition-colors duration-500 line-clamp-2">
                  {next.title}
                </h4>
                <div className="flex items-center gap-2 md:justify-end">
                  <span className="text-[10px] font-mono tracking-wider text-muted-foreground/40 uppercase">
                    {next.category}
                  </span>
                  <div className="w-0.5 h-0.5 rounded-full bg-muted-foreground/30" />
                  <span className="text-[10px] font-mono tracking-wider text-muted-foreground/40 uppercase">
                    {next.readTime}
                  </span>
                </div>
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

export default BlogArticleNavigation;
