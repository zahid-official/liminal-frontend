import { IBlogArticle } from "../blogData";

// BlogArticleHero Props
interface BlogArticleHeroProps {
  article: IBlogArticle;
}

// BlogArticleHero Component
const BlogArticleHero = ({ article }: BlogArticleHeroProps) => {
  return (
    <section className="pt-16 relative">
      <div className="custom-container">
        {/* Navigation & Header Info */}
        <div className="max-w-5xl mx-auto">
          {/* Meta Line */}
          <div className="flex flex-wrap justify-center items-center gap-3 text-xs font-mono uppercase tracking-widest text-liminal-secondary font-semibold mb-6">
            <span>{article.category}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-border" />
            <span>{article.date}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-border" />
            <span>{article.readTime} Read</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1] tracking-tight uppercase">
            {article.title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BlogArticleHero;
