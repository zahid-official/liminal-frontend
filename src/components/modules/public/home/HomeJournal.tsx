import SectionHeader from "@/components/shared/SectionHeader";
import LiminalButton from "@/components/shared/LiminalButton";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Journal articles data
const articles = [
  {
    id: "light-in-spatial-design",
    title: "The Role of Light in Spatial Design",
    excerpt:
      "How natural and artificial illumination shapes human experience, transforms architectural volumes, and defines the emotional character of interior spaces.",
    category: "Design",
    date: "May 2025",
    readTime: "6 min",
    image: "/assets/home/journal-1.png",
  },
  {
    id: "curating-texture",
    title: "Material Palettes: Curating Texture",
    excerpt:
      "A deep exploration of how material selection — from raw stone to burnished metal — creates narrative depth and sensory richness in contemporary interiors.",
    category: "Material",
    date: "Apr 2025",
    readTime: "8 min",
    image: "/assets/home/journal-2.png",
  },
  {
    id: "architecture-of-silence",
    title: "Architecture of Silence: Designing Calm",
    excerpt:
      "In an age of sensory overload, the most powerful design choice may be restraint. Exploring how quiet spaces cultivate focus, reflection, and wellbeing.",
    category: "Philosophy",
    date: "Mar 2025",
    readTime: "5 min",
    image: "/assets/home/journal-3.png",
  },
];

// HomeJournal Component
const HomeJournal = () => {
  return (
    <section
      id="journal-insights"
      aria-labelledby="journal-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          variant="split"
          badgeText="Journal"
          headingId="journal-heading"
          title={
            <>
              Insights &{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Reflections
              </span>
            </>
          }
          description="Explorations in design thinking, material culture, and the philosophy of space — written from the studio where ideas take form."
          className="mb-16 lg:mb-20"
        />

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col bg-background rounded-sm border border-border/30 overflow-hidden hover:border-liminal-secondary/25 hover:shadow-lg hover:-translate-y-1 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu backface-hidden"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/10 to-transparent" />

                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-background/90 bg-foreground/40 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 md:p-8 flex flex-col flex-1">
                {/* Date & Read Time */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-mono tracking-wider text-muted-foreground/60 uppercase">
                    {article.date}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                  <span className="text-[11px] font-mono tracking-wider text-muted-foreground/60 uppercase">
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-heading tracking-tight leading-snug mb-3 group-hover:text-liminal-secondary transition-colors duration-500">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground font-light text-[15px] leading-relaxed mb-6 flex-1">
                  {article.excerpt}
                </p>

                {/* Read Link */}
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-liminal-secondary hover:gap-3 transition-all duration-500 group/link"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/link:rotate-45 transform-gpu" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center pt-16 md:pt-20">
          <Link href="/blog">
            <LiminalButton variant="outline" showIcon={false}>
              View All Entries
            </LiminalButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeJournal;
