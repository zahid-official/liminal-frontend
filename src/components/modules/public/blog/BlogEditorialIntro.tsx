import SectionHeader from "@/components/shared/SectionHeader";
import {
  blogArticles,
  blogCategories,
} from "@/components/modules/public/blog/blogData";

// BlogEditorialIntro Component
const BlogEditorialIntro = () => {
  const articleCount = blogArticles.length;
  const categoryCount = blogCategories.length - 1; // exclude "All"

  // Journal Metrics
  const metrics = [
    { label: "Articles", value: `${articleCount} Published` },
    { label: "Categories", value: `${categoryCount} Disciplines` },
    { label: "Frequency", value: "Monthly Insights" },
  ];

  return (
    <section
      id="blog-editorial-intro"
      aria-labelledby="blog-intro-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      {/* Giant Background Letter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[36rem] font-heading font-bold text-liminal-secondary/4 select-none pointer-events-none leading-none">
        J
      </div>

      <div className="custom-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12 py-8">
          {/* Section Header */}
          <SectionHeader
            variant="manifesto"
            badgeText="The Liminal Journal"
            headingId="blog-intro-heading"
            title={
              <>
                Explorations in{" "}
                <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                  Design Thinking
                </span>
              </>
            }
            description="Written from the studio where ideas take form, reflections on materiality, spatial philosophy, light, proportion and the quiet art of crafting environments that endure."
          />

          {/* Metrics Bar */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {metrics.map((metric, i) => (
              <div key={metric.label} className="flex items-center gap-x-8">
                <div className="space-y-1 text-center">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60">
                    {metric.label}
                  </span>
                  <p className="text-xs font-bold uppercase tracking-wide text-foreground">
                    {metric.value}
                  </p>
                </div>
                {i < metrics.length - 1 && (
                  <div className="hidden sm:block w-px h-8 bg-border/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogEditorialIntro;
