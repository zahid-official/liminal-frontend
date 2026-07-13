import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedButton from "@/components/shared/AnimatedButton";
import Link from "next/link";
import BlogCard from "@/components/modules/public/blog/BlogCard";
import { blogArticles } from "@/components/modules/public/blog/blogData";

// HomeJournal Component
const HomeJournal = () => {
  // Get the first 3 articles for the home page journal section
  const featuredArticles = blogArticles.slice(0, 3);

  return (
    <section
      id="journal-insights"
      aria-labelledby="journal-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80"
    >
      <div className="custom-container space-y-12">
        {/* Section Header */}
        <SectionHeader
          variant="split"
          badgeText="The Journal"
          headingId="journal-heading"
          title={
            <>
              Insights &{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Reflections
              </span>
            </>
          }
          description="Explorations in design thinking, material culture, and the philosophy of space, written from the studio where ideas take form."
        />

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredArticles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>

        {/* Bottom Action Section: Premium Editorial Layout */}
        <div className=" flex gap-5 justify-between">
          {/* Left: Journal Status */}
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-foreground/30 block">
              Journal Status
            </span>
            <p className="text-xs font-medium text-foreground/50">
              Showing {Math.min(3, blogArticles.length)} of{" "}
              {blogArticles.length} published entries
            </p>
          </div>

          {/* Right: View All Entries Button */}
          <Link href="/blog" className="w-full sm:w-auto">
            <AnimatedButton>View All Entries</AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeJournal;
