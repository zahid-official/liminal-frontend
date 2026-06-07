import { IBlogArticle } from "../blogData";
import { Fragment } from "react";

// BlogArticleHero Props
interface BlogArticleHeroProps {
  article: IBlogArticle;
}

// BlogArticleHero Component
const BlogArticleHero = ({ article }: BlogArticleHeroProps) => {
  const metaItems = [
    { label: "Published", value: article.date },
    { label: "Read Time", value: article.readTime },
    { label: "Category", value: article.category },
  ];

  return (
    <section>
      {/* Navigation & Header Info */}
      <div className="space-y-10">
        {/* Title */}
        <h1 className="custom-container max-w-5xl text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1] tracking-tight uppercase">
          {article.title}
        </h1>

        {/* Metadata Fields */}
        <div className=" border-y border-border/25 py-5">
          <div className="custom-container max-w-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              {/* Left: Author */}
              <div className="flex items-center gap-4">
                {/* Author Avatar */}
                <div className="w-14 h-14 rounded-full bg-liminal-dark/5 border border-liminal-dark/10 flex items-center justify-center shrink-0 relative">
                  <span className="text-sm font-bold uppercase tracking-wider text-liminal-secondary">
                    {article.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                <div>
                  <p className="text-[15px] font-semibold text-foreground leading-tight">
                    {article.author}
                  </p>
                  <p className="text-xs text-muted-foreground/55 mt-1">
                    {article.authorRole} · Liminal Design Studio
                  </p>
                </div>
              </div>

              {/* Right: Meta Info */}
              <div className="flex flex-wrap items-center gap-6">
                {metaItems.map((item, i) => (
                  <Fragment key={item.label}>
                    {i > 0 && (
                      <div className="hidden sm:block w-px h-9 bg-border/40" />
                    )}
                    <div className="space-y-1 text-center">
                      <span className="text-[9px] font-semibold font-mono uppercase tracking-[0.3em] text-muted-foreground/60 block">
                        {item.label}
                      </span>
                      <p className="text-[12px] font-bold uppercase tracking-wide text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArticleHero;
