import { IBlogArticle } from "../blogData";
import BlogArticleContent from "./BlogArticleContent";
import SectionFooter from "@/components/shared/SectionFooter";
import BlogArticleHero from "./BlogArticleHero";
import DetailNavigation from "@/components/shared/DetailNavigation";
import BlogArticleSidebar from "./BlogArticleSidebar";

interface BlogArticleDetailsProps {
  article: IBlogArticle;
  prev: IBlogArticle | null;
  next: IBlogArticle | null;
}

// BlogArticleDetails Component
const BlogArticleDetails = ({
  article,
  prev,
  next,
}: BlogArticleDetailsProps) => {
  return (
    <div className="py-20 md:py-28 lg:py-32">
      {/* Article Hero */}
      <BlogArticleHero article={article} />

      {/* Article Body */}
      <section className="py-10 md:pb-16 relative">
        <div className="custom-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Sidebar - Desktop only, sticky */}
            <BlogArticleSidebar content={article.content} />

            {/* Main Content */}
            <div className="lg:col-span-8 lg:col-start-4">
              <BlogArticleContent
                title={article.title}
                description={article.description}
                thumbnail={article.thumbnail}
                content={article.content}
              />

              {/* Quote Section - showcased after BlogArticleContent and before SectionFooter */}
              {article.quote && (
                <blockquote className="relative border-l-2 border-liminal-secondary/40 pl-6 pr-4 py-8 bg-zinc-50/80 my-12">
                  <div className="absolute top-2 left-4 text-5xl text-liminal-secondary/15 font-serif select-none pointer-events-none">
                    &ldquo;
                  </div>
                  <p className="italic font-serif text-lg sm:text-xl text-foreground/80 leading-relaxed select-none pointer-events-none">
                    {article.quote.text}
                  </p>
                  {article.quote.attribution && (
                    <cite className="block mt-4 text-xs tracking-[0.2em] text-liminal-secondary font-medium not-italic">
                      – {article.quote.attribution}
                    </cite>
                  )}
                </blockquote>
              )}

              {/* Article Footer */}
              <SectionFooter label="End of Article" />
            </div>
          </div>
        </div>
      </section>

      {/* Previous / Next Article Navigation */}
      <DetailNavigation
        prev={
          prev
            ? {
                href: `/blog/${prev.slug}`,
                title: prev.title,
                image: prev.thumbnail.url,
                category: prev.category,
                metaText: prev.readTime,
              }
            : null
        }
        next={
          next
            ? {
                href: `/blog/${next.slug}`,
                title: next.title,
                image: next.thumbnail.url,
                category: next.category,
                metaText: next.readTime,
              }
            : null
        }
        prevLabel="Previous Article"
        nextLabel="Next Article"
        headingLabel="Continue Reading"
      />
    </div>
  );
};

export default BlogArticleDetails;
