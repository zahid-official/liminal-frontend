import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import Link from "next/link";

// Journal entries data
const journalEntries = [
  {
    category: "Material Studies",
    date: "May 2025",
    title: "The Poetry of Travertine: Why Natural Stone Endures",
    excerpt:
      "An exploration of travertine's timeless appeal in contemporary interior design — from Roman antiquity to modern minimalism.",
    image: "/assets/home/luminous-travertine.png",
    readTime: "6 min read",
    href: "/blog",
  },
  {
    category: "Design Thinking",
    date: "April 2025",
    title: "Light as Material: Designing with Natural Illumination",
    excerpt:
      "How we choreograph natural light to transform spatial perception, mood, and the daily rhythms of inhabitation.",
    image: "/assets/home/journal-2.png",
    readTime: "8 min read",
    href: "/blog",
  },
  {
    category: "Studio Notes",
    date: "March 2025",
    title: "The Art of Restraint in Residential Architecture",
    excerpt:
      "Why removing the unnecessary often reveals the extraordinary — lessons from our recent residential projects.",
    image: "/assets/home/ethereal-moment.png",
    readTime: "5 min read",
    href: "/blog",
  },
];

// HomeJournal Component
const HomeJournal = () => {
  return (
    <section
      id="journal"
      aria-labelledby="journal-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80"
    >
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          variant="split"
          headingId="journal-heading"
          badgeText="Journal"
          title={
            <>
              Insights &{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Reflections
              </span>
            </>
          }
          description="Thoughts on design, materiality, and the evolving relationship between people and the spaces they inhabit."
        />

        {/* Journal Grid: Featured + Sidebar List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Featured Article — Large Card */}
          <div className="lg:col-span-7">
            <Link href={journalEntries[0].href} className="group block">
              <article className="space-y-6">
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-border/20 group-hover:border-liminal-secondary/30 transition-colors duration-500">
                  <Image
                    src={journalEntries[0].image}
                    alt={journalEntries[0].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    quality={85}
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu"
                  />
                  {/* Read Time Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="text-[9px] font-mono tracking-[0.3em] text-background/80 uppercase bg-foreground/40 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                      {journalEntries[0].readTime}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-liminal-secondary">
                      {journalEntries[0].category}
                    </span>
                    <div className="w-px h-3 bg-border" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                      {journalEntries[0].date}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-heading tracking-tight leading-tight group-hover:text-liminal-secondary transition-colors duration-500">
                    {journalEntries[0].title}
                  </h3>
                  <p className="text-muted-foreground font-light text-[15px] leading-relaxed max-w-xl">
                    {journalEntries[0].excerpt}
                  </p>
                </div>
              </article>
            </Link>
          </div>

          {/* Sidebar Articles — Stacked List */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            {journalEntries.slice(1).map((entry, index) => (
              <Link key={index} href={entry.href} className="group block">
                <article className="grid grid-cols-12 gap-5 items-center">
                  {/* Thumbnail */}
                  <div className="col-span-4">
                    <div className="relative aspect-square overflow-hidden rounded-sm border border-border/20 group-hover:border-liminal-secondary/30 transition-colors duration-500">
                      <Image
                        src={entry.image}
                        alt={entry.title}
                        fill
                        sizes="(max-width: 1024px) 33vw, 16vw"
                        quality={75}
                        className="object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform transform-gpu"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="col-span-8 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-liminal-secondary">
                        {entry.category}
                      </span>
                      <span className="text-[9px] font-mono text-muted-foreground/50">
                        {entry.readTime}
                      </span>
                    </div>
                    <h4 className="text-base md:text-lg font-bold font-heading tracking-tight leading-snug group-hover:text-liminal-secondary transition-colors duration-500">
                      {entry.title}
                    </h4>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/50">
                      {entry.date}
                    </span>
                  </div>
                </article>
              </Link>
            ))}

            {/* Read More Link */}
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="/blog"
                className="group/link flex items-center gap-3"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/60 group-hover/link:text-liminal-secondary transition-colors duration-500">
                  Read the Journal
                </span>
                <div className="w-8 h-px bg-foreground/30 group-hover/link:w-14 group-hover/link:bg-liminal-secondary transition-all duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeJournal;
