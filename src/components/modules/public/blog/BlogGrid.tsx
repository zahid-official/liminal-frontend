import { FolderSearch } from "lucide-react";
import BlogCard from "./BlogCard";
import { IBlogArticle } from "./blogData";
import QuoteCard from "./QuoteCard";

// BlogGrid Props
interface BlogGridProps {
  articles: IBlogArticle[];
  showQuoteCard?: boolean;
}

// BlogGrid Component
const BlogGrid = ({ articles, showQuoteCard = false }: BlogGridProps) => {
  if (articles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-20 h-20 rounded-full bg-zinc-100 flex items-center justify-center mb-6">
          <FolderSearch className="size-8 text-muted-foreground/40" />
        </div>
        <h3 className="text-xl font-bold font-heading tracking-tight mb-2">
          No Articles Found
        </h3>
        <p className="text-muted-foreground font-light text-[15px] max-w-md">
          No articles match your current filters. Try adjusting your search
          criteria or clearing the filters to explore our journals.
        </p>
      </div>
    );
  }

  // Build the items array, splicing the quote card at index 2 if enabled
  const items = articles.map((article) => (
    <BlogCard key={article.id} article={article} />
  ));

  if (showQuoteCard) {
    items.splice(2, 0, <QuoteCard key="quote-card" />);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {items}
    </div>
  );
};

export default BlogGrid;
