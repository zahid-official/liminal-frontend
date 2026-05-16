import SectionHeader from "@/components/shared/SectionHeader";
import LiminalButton from "@/components/shared/LiminalButton";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Journal articles data
const featuredArticle = {
  id: "light-in-spatial-design",
  title: "The Role of Light in Spatial Design",
  excerpt:
    "How natural and artificial illumination shapes human experience, transforms architectural volumes, and defines the emotional character of interior spaces. A deep exploration of light as the most honest architect.",
  category: "Design",
  date: "May 2025",
  readTime: "6 min",
  image: "/assets/home/journal-1.png",
};

const supportArticles = [
  {
    id: "curating-texture",
    title: "Material Palettes: Curating Texture",
    excerpt:
      "How material selection creates narrative depth and sensory richness in contemporary interiors.",
    category: "Material",
    date: "Apr 2025",
    readTime: "8 min",
    image: "/assets/home/journal-2.png",
  },
  {
    id: "architecture-of-silence",
    title: "Architecture of Silence: Designing Calm",
    excerpt:
      "Exploring how quiet spaces cultivate focus, reflection, and wellbeing in an age of sensory overload.",
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
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden"
    >
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          variant="editorial"
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
        />

        {/* Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left: Featured Article — Large Card */}
          <div className="lg:col-span-7">
            <article className="group h-full flex flex-col">
              {/* Large Image */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-sm shadow-lg">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03] will-change-transform transform-gpu backface-hidden"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-foreground/10 to-transparent" />

                {/* Category Tag */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-background/90 bg-foreground/35 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                    {featuredArticle.category}
                  </span>
                </div>

                {/* Bottom Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 z-10">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[11px] font-mono tracking-wider text-background/50 uppercase">
                      {featuredArticle.date}
                    </span>
                    <div className="w-1 h-1 rounded-full bg-background/30" />
                    <span className="text-[11px] font-mono tracking-wider text-background/50 uppercase">
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-background tracking-tight leading-[1.1] mb-3">
                    {featuredArticle.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-background/50 font-light text-sm md:text-base leading-relaxed max-w-lg mb-5">
                    {featuredArticle.excerpt}
                  </p>

                  {/* Read Link */}
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-background/80 hover:text-background transition-colors duration-300 group/link"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/link:rotate-45 transform-gpu" />
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* Right: Two Support Articles — Stacked */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {supportArticles.map((article) => (
              <article
                key={article.id}
                className="group flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-5 flex-1"
              >
                {/* Image */}
                <div className="relative w-full sm:w-2/5 lg:w-full xl:w-2/5 shrink-0 aspect-[4/3] sm:aspect-square lg:aspect-[16/10] xl:aspect-square overflow-hidden rounded-sm shadow-md">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    quality={85}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 20vw"
                    className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04] will-change-transform transform-gpu backface-hidden"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/10 to-transparent" />

                  {/* Category */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-background/90 bg-foreground/35 backdrop-blur-sm px-2.5 py-1 rounded-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center flex-1 py-1">
                  {/* Meta */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-[10px] font-mono tracking-wider text-muted-foreground/50 uppercase">
                      {article.date}
                    </span>
                    <div className="w-1 h-1 rounded-full bg-muted-foreground/20" />
                    <span className="text-[10px] font-mono tracking-wider text-muted-foreground/50 uppercase">
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold font-heading tracking-tight leading-snug mb-2.5 group-hover:text-liminal-secondary transition-colors duration-500">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground font-light text-sm leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  {/* Read Link */}
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-liminal-secondary hover:gap-3 transition-all duration-500 group/link"
                  >
                    <span>Read</span>
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/link:rotate-45 transform-gpu" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
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
