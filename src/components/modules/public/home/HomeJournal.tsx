import SectionHeader from "@/components/shared/SectionHeader";
import LiminalButton from "@/components/shared/LiminalButton";
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
      <div className="custom-container">
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

        {/* Bottom CTA */}
        <div className="flex justify-center pt-16 md:pt-20">
          <Link href="/blog">
            <LiminalButton>
              View All Entries
            </LiminalButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeJournal;

