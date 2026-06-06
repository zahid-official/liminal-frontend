import { IBlogArticle } from "../blogData";
import Image from "next/image";

// BlogArticleHero Props
interface BlogArticleHeroProps {
  article: IBlogArticle;
}

// BlogArticleHero Component
const BlogArticleHero = ({ article }: BlogArticleHeroProps) => {
  return (
    <section className="py-10 md:py-16 relative">
      <div className="custom-container">
        <div className="relative group/hero">
          {/* Hero Image */}
          <div className="relative aspect-video lg:aspect-21/9 overflow-hidden rounded-sm shadow-2xl">
            <Image
              src={article.image}
              alt={article.title}
              fill
              quality={90}
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover transition-transform duration-1500 group-hover/hero:scale-[1.03] will-change-transform transform-gpu"
            />
            <div className="absolute inset-0 bg-linear-to-t from-foreground/5 to-transparent" />
          </div>

          {/* Architectural Corner Brackets */}
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-liminal-secondary/30 group-hover/hero:border-liminal-secondary/60 transition-colors duration-700" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-liminal-secondary/30 group-hover/hero:border-liminal-secondary/60 transition-colors duration-700" />
        </div>

        {/* Caption */}
        <p className="text-[11px] font-mono tracking-wider text-muted-foreground/50 uppercase text-center mt-6">
          {article.title} — {article.category}
        </p>
      </div>
    </section>
  );
};

export default BlogArticleHero;
