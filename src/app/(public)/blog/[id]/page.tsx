import { blogArticles } from "@/components/modules/public/blog/blogData";
import ShareButton from "@/components/modules/public/blog/blogDetails/ShareButton";
import PageHeader from "@/components/shared/PageHeader";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate Static Params for SSG
export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    id: article.id,
  }));
}

// Generate Metadata dynamically
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const article = blogArticles.find((a) => a.id === id);

  if (!article) {
    return {
      title: "Article Not Found | Liminal",
    };
  }

  return {
    title: `${article.title} | The Journal`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { id } = await params;
  const article = blogArticles.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  // Find up to 2 related articles (same category, or other recent ones, excluding current)
  const relatedArticles = blogArticles
    .filter((a) => a.id !== article.id)
    .sort((a, b) => {
      // Prioritize same category
      if (a.category === article.category && b.category !== article.category)
        return -1;
      if (a.category !== article.category && b.category === article.category)
        return 1;
      return 0;
    })
    .slice(0, 2);

  return (
    <main className="">
      <PageHeader
        title="Journal Details"
        items={[
          { label: "Home", href: "/" },
          { label: "Journal", href: "/blog" },
          { label: "Blog Details" },
        ]}
        bgImage="/assets/blog/travertine.png"
      />

      <div className="custom-container">
        {/* Navigation & Header Info */}
        <div className="max-w-5xl mx-auto mt-24 mb-12">
          {/* Meta Line */}
          <div className="flex flex-wrap justify-center items-center gap-3 text-xs font-mono uppercase tracking-widest text-liminal-secondary font-semibold mb-6">
            <span>{article.category}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-border" />
            <span>{article.date}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-border" />
            <span>{article.readTime} Read</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1] tracking-tight uppercase mb-8">
            {article.title}
          </h1>

          {/* Standfirst / Excerpt */}
          <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed border-l-2 border-liminal-secondary/30 pl-6 italic">
            {article.excerpt}
          </p>
        </div>

        {/* Feature Image Banner */}
        {/* <div className="relative aspect-video max-w-5xl mx-auto overflow-hidden border border-border/40 p-2 bg-background/50 mb-16">
          <div className="relative w-full h-full overflow-hidden bg-muted">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </div> */}

        {/* Article Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Sidebar - Meta and Author */}
          <aside className="lg:col-span-4 lg:border-r lg:border-border/30 lg:pr-12">
            <div className="sticky top-28 space-y-10">
              {/* Author Info */}
              <div className="space-y-4">
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  Author
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative size-12 rounded-full bg-liminal-secondary/15 flex items-center justify-center font-heading text-lg font-bold text-liminal-secondary border border-border/40 overflow-hidden shrink-0">
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-foreground leading-tight">
                      {article.author}
                    </h3>
                    <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wide mt-1">
                      {article.authorRole}
                    </p>
                  </div>
                </div>
              </div>

              {/* Publication Specs */}
              <div className="border-t border-border/20 pt-8 space-y-4">
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  Specifications
                </p>
                <div className="space-y-3 font-sans text-xs">
                  <div className="flex justify-between py-1 border-b border-border/10">
                    <span className="text-muted-foreground">Published</span>
                    <span className="font-semibold text-foreground uppercase">
                      {article.date}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/10">
                    <span className="text-muted-foreground">
                      Est. Read Time
                    </span>
                    <span className="font-semibold text-foreground uppercase">
                      {article.readTime}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/10">
                    <span className="text-muted-foreground">
                      Classification
                    </span>
                    <span className="font-semibold text-foreground uppercase">
                      {article.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Share Widget */}
              <div className="border-t border-border/20 pt-8">
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-4">
                  Share Entry
                </p>
                <ShareButton />
              </div>
            </div>
          </aside>

          {/* Main Content Body */}
          <article className="lg:col-span-8 space-y-8">
            {article.content.map((block, idx) => {
              switch (block.type) {
                case "paragraph":
                  // Add elegant Drop Cap to first paragraph
                  if (idx === 0) {
                    const firstLetter = block.text.charAt(0);
                    const remainingText = block.text.slice(1);
                    return (
                      <p
                        key={idx}
                        className="text-muted-foreground font-light text-base sm:text-lg leading-relaxed mb-8"
                      >
                        <span className="float-left text-5xl sm:text-6xl font-heading font-bold text-liminal-secondary mr-3 mt-1 leading-none">
                          {firstLetter}
                        </span>
                        {remainingText}
                      </p>
                    );
                  }
                  return (
                    <p
                      key={idx}
                      className="text-muted-foreground font-light text-base sm:text-lg leading-relaxed mb-8"
                    >
                      {block.text}
                    </p>
                  );

                case "heading":
                  return (
                    <h2
                      key={idx}
                      id={block.id}
                      className="font-heading font-bold text-foreground uppercase tracking-tight leading-snug mt-12 mb-6 text-2xl sm:text-3xl"
                    >
                      {block.text}
                    </h2>
                  );

                case "quote":
                  return (
                    <div key={idx} className="max-w-2xl mx-auto my-12">
                      <blockquote className="relative py-12 px-8 border-l border-liminal-secondary bg-zinc-50/50">
                        {/* Quote Marks Graphic */}
                        <div className="absolute top-2 left-4 text-6xl text-liminal-secondary/15 font-serif select-none pointer-events-none">
                          &ldquo;
                        </div>
                        <p className="text-lg sm:text-xl italic font-serif text-foreground/90 leading-relaxed relative z-10">
                          {block.text}
                        </p>
                        {block.attribution && (
                          <footer className="block mt-4 text-[10px] uppercase tracking-[0.3em] text-liminal-secondary font-bold">
                            — {block.attribution}
                          </footer>
                        )}
                      </blockquote>
                    </div>
                  );

                case "image":
                  return (
                    <div key={idx} className="my-12 space-y-3">
                      <div className="relative aspect-video w-full overflow-hidden border border-border/40 p-2 bg-background/50">
                        <div className="relative w-full h-full overflow-hidden bg-muted">
                          <Image
                            src={block.src}
                            alt={block.alt}
                            fill
                            sizes="(max-width: 800px) 100vw, 800px"
                            className="object-cover"
                          />
                        </div>
                      </div>
                      {block.caption && (
                        <p className="text-center text-xs text-muted-foreground italic">
                          {block.caption}
                        </p>
                      )}
                    </div>
                  );

                default:
                  return null;
              }
            })}
          </article>
        </div>

        {/* Related Posts Section */}
        {relatedArticles.length > 0 && (
          <div className="max-w-5xl mx-auto border-t border-border/30 pt-16 mt-20 md:mt-28">
            <h3 className="text-lg font-bold font-heading uppercase tracking-widest text-foreground mb-10">
              Related Insights
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  className="group relative border border-border/40 p-1.5 bg-background/50 backdrop-blur-sm hover:border-liminal-secondary transition-all duration-500 hover:shadow-lg flex flex-col sm:flex-row gap-6"
                >
                  {/* Small Preview Image */}
                  <div className="relative aspect-video sm:aspect-square w-full sm:w-35 overflow-hidden bg-muted shrink-0">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      sizes="140px"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 flex flex-col justify-between py-2.5 pr-4">
                    <div className="space-y-2">
                      <span className="text-[9px] font-mono text-liminal-secondary uppercase font-bold tracking-wider">
                        {rel.category}
                      </span>
                      <h4 className="text-base font-bold font-heading uppercase tracking-tight text-foreground group-hover:text-liminal-secondary transition-colors duration-300 leading-snug">
                        {rel.title}
                      </h4>
                    </div>

                    <Link
                      href={`/blog/${rel.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-liminal-secondary mt-4 group/link"
                    >
                      <span>Read Entry</span>
                      <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/link:rotate-45" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
