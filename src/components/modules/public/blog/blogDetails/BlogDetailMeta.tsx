import { Fragment } from "react";
import type { IBlogArticle } from "../blogData";

interface BlogDetailMetaProps {
  post: IBlogArticle;
}

// BlogDetailMeta Component — Premium author & metadata bar
const BlogDetailMeta = ({ post }: BlogDetailMetaProps) => {
  const metaItems = [
    { label: "Published", value: post.date },
    { label: "Read Time", value: post.readTime },
    { label: "Category", value: post.category },
  ];

  return (
    <section id="blog-detail-meta" className="border-b border-border/25">
      <div className="custom-container">
        <div className="max-w-3xl mx-auto py-10 md:py-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            {/* Left: Author */}
            <div className="flex items-center gap-4">
              {/* Author Avatar */}
              <div className="w-14 h-14 rounded-full bg-liminal-dark/5 border border-liminal-dark/10 flex items-center justify-center shrink-0 relative">
                <span className="text-sm font-bold uppercase tracking-wider text-liminal-secondary">
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>

              <div>
                <p className="text-[15px] font-semibold text-foreground leading-tight">
                  {post.author}
                </p>
                <p className="text-xs text-muted-foreground/55 mt-1">
                  {post.authorRole} · Liminal Design Studio
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
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground/45 block">
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
    </section>
  );
};

export default BlogDetailMeta;
