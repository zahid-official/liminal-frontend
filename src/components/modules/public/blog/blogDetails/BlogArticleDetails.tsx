import { IBlogArticle } from "../blogData";
import BlogArticleContent from "./BlogArticleContent";
import BlogArticleFooter from "./BlogArticleFooter";
import BlogArticleHero from "./BlogArticleHero";
import BlogArticleNavigation from "./BlogArticleNavigation";
import BlogArticleSidebar from "./BlogArticleSidebar";

interface BlogArticleDetailsProps {
  article: IBlogArticle;
  prev: IBlogArticle | null;
  next: IBlogArticle | null;
}

const BlogArticleDetails = ({ article, prev, next }: BlogArticleDetailsProps) => {
  return (
    <div className="py-20 md:py-28 lg:py-32">
      {/* Article Hero */}
      <BlogArticleHero article={article} />

      {/* Article Body */}
      <section className="py-10 md:pb-16 relative">
        <div className="custom-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Sidebar — Desktop only, sticky */}
            <BlogArticleSidebar content={article.content} />

            {/* Main Content */}
            <div className="lg:col-span-8 lg:col-start-4">
              <BlogArticleContent content={article.content} />

              {/* Article Footer */}
              <BlogArticleFooter />
            </div>
          </div>
        </div>
      </section>

      {/* Previous / Next Article Navigation */}
      <BlogArticleNavigation prev={prev} next={next} />
    </div>
  );
};

export default BlogArticleDetails;
