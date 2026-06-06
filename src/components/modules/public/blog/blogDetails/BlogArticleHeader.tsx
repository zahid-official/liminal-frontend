import { IBlogArticle } from "../blogData";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

// BlogArticleHeader Props
interface BlogArticleHeaderProps {
  article: IBlogArticle;
}

// BlogArticleHeader Component
const BlogArticleHeader = ({ article }: BlogArticleHeaderProps) => {
  return (
    <section
      className="relative pt-32 pb-16 md:pt-48 md:pb-24 flex items-center justify-center bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url('${article.image}')` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-4xl mx-auto gap-7 mt-8 md:mt-0">
        {/* Category Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-background/20 text-background text-[10px] sm:text-xs font-bold tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-liminal-secondary" />
          <span>{article.category}</span>
        </div>

        {/* Article Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-background tracking-tight font-heading leading-[1.05]">
          {article.title}
        </h1>

        {/* Meta Row */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <span className="text-[12px] font-medium text-background/70">
            {article.author}
          </span>
          <div className="w-1 h-1 rounded-full bg-background/30" />
          <span className="text-[11px] font-mono tracking-wider text-background/60 uppercase">
            {article.date}
          </span>
          <div className="w-1 h-1 rounded-full bg-background/30" />
          <span className="text-[11px] font-mono tracking-wider text-background/60 uppercase">
            {article.readTime} read
          </span>
        </div>

        {/* Breadcrumbs */}
        <div className="bg-background/10 backdrop-blur-sm border border-background/15 rounded-full px-6 py-2.5">
          <Breadcrumb>
            <BreadcrumbList className="text-background/80 sm:text-[15px] gap-2">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href="/"
                    className="hover:text-background transition-colors"
                  >
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-background/50" />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href="/blog"
                    className="hover:text-background transition-colors"
                  >
                    Blog
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-background/50" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-background font-medium truncate max-w-50">
                  {article.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </section>
  );
};

export default BlogArticleHeader;
