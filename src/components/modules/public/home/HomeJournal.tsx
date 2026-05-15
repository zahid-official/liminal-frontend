import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import Link from "next/link";

const entries = [
  { category: "Material Studies", date: "May 2025", title: "The Poetry of Travertine: Why Natural Stone Endures", excerpt: "An exploration of travertine's timeless appeal — from Roman antiquity to contemporary minimalism.", image: "/assets/home/luminous-travertine.png", readTime: "6 min", href: "/blog" },
  { category: "Design Thinking", date: "April 2025", title: "Light as Material: Designing with Natural Illumination", excerpt: "How we choreograph natural light to transform spatial perception and daily rhythms.", image: "/assets/home/journal-2.png", readTime: "8 min", href: "/blog" },
];

// HomeJournal Component
const HomeJournal = () => {
  return (
    <section id="journal" aria-labelledby="journal-heading" className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="custom-container">
        <SectionHeader
          variant="editorial"
          headingId="journal-heading"
          badgeText="Journal"
          title={<>Insights &{" "}<span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">Reflections</span></>}
          description="Thoughts on design, materiality, and the relationship between people and space."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {entries.map((e, i) => (
            <Link key={i} href={e.href} className="group block">
              <article className="space-y-5">
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-border/20 group-hover:border-liminal-secondary/30 transition-colors duration-500">
                  <Image src={e.image} alt={e.title} fill sizes="(max-width: 768px) 100vw, 50vw" quality={85}
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu" />
                  <div className="absolute top-4 right-4">
                    <span className="text-[9px] font-mono tracking-[0.3em] text-background/80 uppercase bg-foreground/40 backdrop-blur-sm px-3 py-1.5 rounded-sm">{e.readTime}</span>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-liminal-secondary">{e.category}</span>
                    <div className="w-px h-3 bg-border" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">{e.date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-heading tracking-tight leading-tight group-hover:text-liminal-secondary transition-colors duration-500">{e.title}</h3>
                  <p className="text-muted-foreground font-light text-[15px] leading-relaxed">{e.excerpt}</p>
                  <div className="flex items-center gap-3 pt-1">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/50 group-hover:text-liminal-secondary transition-colors duration-500">Read Article</span>
                    <div className="w-6 h-px bg-foreground/25 group-hover:w-10 group-hover:bg-liminal-secondary transition-all duration-500" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeJournal;
