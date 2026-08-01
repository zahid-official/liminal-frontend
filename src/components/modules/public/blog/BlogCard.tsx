import { IBlogArticle } from "./blogData";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// BlogCard Props
interface BlogCardProps {
  article: IBlogArticle;
}

// BlogCard Component
const BlogCard = ({ article }: BlogCardProps) => {
  return (
    <article className="group flex flex-col bg-background rounded p-2 border border-border/30 overflow-hidden hover:border-liminal-secondary/25 hover:shadow-lg transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform transform-gpu backface-hidden">
      {/* Image */}
      <Link href={`/blog/${article.slug}`} className="block">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={article.thumbnail.url}
            alt={article.title}
            fill
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu backface-hidden"
          />
          <div className="absolute inset-0 bg-linear-to-t from-foreground/10 to-transparent" />

          {/* Category Tag */}
          <div className="absolute top-3 left-3">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-background/95 bg-foreground/60 backdrop-blur-xs px-2.5 py-1 rounded-xs">
              {article.category}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Date & Read Time */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-mono tracking-wider text-muted-foreground/60 uppercase">
            {article.createdAt}
          </span>
          <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
          <span className="text-[11px] font-mono tracking-wider text-muted-foreground/60 uppercase">
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${article.slug}`}>
          <h3 className="text-xl font-bold font-heading tracking-tight leading-snug mb-3 group-hover:text-liminal-secondary transition-colors duration-500">
            {article.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-muted-foreground font-light text-[15px] leading-relaxed mb-6 flex-1 line-clamp-3">
          {article.description}
        </p>

        {/* Read Link */}
        <div>
          <Link
            href={`/blog/${article.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-liminal-secondary transition-all duration-500 group/link"
          >
            <span className="relative">
              Read Article
              <span className="absolute -bottom-0.5 left-0 h-px bg-liminal-secondary w-0 group-hover/link:w-full transition-[width] duration-300" />
            </span>
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/link:rotate-45 transform-gpu" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
