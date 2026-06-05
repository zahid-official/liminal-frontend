import SectionHeader from "@/components/shared/SectionHeader";
import { getRelatedArticles } from "../blogData";
import BlogCard from "../BlogCard";

// BlogRelatedArticles Props
interface BlogRelatedArticlesProps {
  currentId: string;
}

// BlogRelatedArticles Component
const BlogRelatedArticles = ({ currentId }: BlogRelatedArticlesProps) => {
  const related = getRelatedArticles(currentId, 3);

  if (related.length === 0) return null;

  return (
    <section
      id="related-articles"
      aria-labelledby="related-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          variant="manifesto"
          badgeText="From The Journal"
          headingId="related-heading"
          title={
            <>
              Continue{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Exploring
              </span>
            </>
          }
          description="Further reading from our design journal — essays on materiality, spatial thinking, and the philosophy of interiors."
          className="mb-14 lg:mb-20"
        />

        {/* Related Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {related.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogRelatedArticles;
