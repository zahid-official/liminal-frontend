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
                articleImage={article.image}
                content={article.content}
              />

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
                href: `/blog/${prev.id}`,
                title: prev.title,
                image: prev.image,
                category: prev.category,
                metaText: prev.readTime,
              }
            : null
        }
        next={
          next
            ? {
                href: `/blog/${next.id}`,
                title: next.title,
                image: next.image,
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
