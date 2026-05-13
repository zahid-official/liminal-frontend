import LiminalButton from "@/components/shared/LiminalButton";
import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

// Project Data
const featuredProjects = [
  {
    title: "Apex Residence",
    category: "Residential Architecture",
    year: "2023",
    image: "/assets/projects/liminal-living-room.png",
    slug: "apex-residence",
    span: "lg:col-span-8 lg:row-span-2",
  },
  {
    title: "Corporate Zen",
    category: "Commercial Office",
    year: "2024",
    image: "/assets/projects/liminal-office.png",
    slug: "corporate-zen",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    title: "The Minimalist Kitchen",
    category: "Interior Design",
    year: "2023",
    image: "/assets/projects/liminal-kitchen.png",
    slug: "minimalist-kitchen",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    title: "Sanctuary Bedroom",
    category: "Residential Interior",
    year: "2022",
    image: "/assets/projects/liminal-bedroom.png",
    slug: "sanctuary-bedroom",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    title: "Marble Haven",
    category: "Luxury Bathroom",
    year: "2024",
    image: "/assets/projects/liminal-bathroom.png",
    slug: "marble-haven",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    title: "Artistic Lounge",
    category: "Art-Focused Living",
    year: "2023",
    image: "/assets/projects/liminal-lounge.png",
    slug: "artistic-lounge",
    span: "lg:col-span-4 lg:row-span-1",
  },
];

// HomeFeaturedProjects Component
const HomeFeaturedProjects = () => {
  return (
    <section
      id="featured-projects"
      aria-labelledby="featured-projects-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80"
    >
      <div className="custom-container relative z-10">
        {/* Section Header */}
        <SectionHeader
          variant="split"
          badgeText="Our Work"
          title={
            <>
              Curated{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Perspectives
              </span>
            </>
          }
          description="A selection of our most definitive projects, where architectural precision meets human emotion. Each space is a testament to our commitment to timeless design."
        />

        {/* Asymmetric Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
          {featuredProjects.map((project, index) => (
            <Link
              key={index}
              href={`/projects/${project.slug}`}
              className={cn(
                "group relative overflow-hidden rounded bg-zinc-100 flex flex-col justify-end",
                project.span,
              )}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay: Cinematic Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              </div>

              {/* Project Content */}
              <div className="relative z-10 p-6 md:p-10 transform transition-transform duration-700 group-hover:-translate-y-2.5">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
                      {project.year}
                    </span>
                    <div className="w-8 h-px bg-white/20" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-liminal-secondary">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold tracking-tight text-white leading-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Hidden Reveal: View Project Label */}
                <div className="mt-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-white">
                    View Project
                  </span>
                  <div className="size-8 rounded-full border border-white/20 flex items-center justify-center">
                    <div className="size-1.5 rounded-full bg-liminal-secondary animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Subtle Noise Texture on Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-10 bg-noise" />
            </Link>
          ))}
        </div>

        {/* Bottom Action Section: Premium Editorial Layout */}
        <div className="mt-12 flex gap-5 justify-between">
          {/* Philosophical Manifesto Quote */}
          <div className="relative">
            <div className="space-y-4">
              <blockquote className="max-w-xl">
                <p className="text-2xl font-serif italic text-foreground/60 leading-[1.2] tracking-tight">
                  &quot;Design is not just what it looks like and feels like.
                  Design is how it works.&quot;
                </p>
                <footer className="mt-4 flex items-center gap-3">
                  <div className="w-6 h-px bg-liminal-secondary" />
                  <cite className="text-[10px] font-bold uppercase tracking-[0.2em] text-liminal-secondary not-italic">
                    Liminal Philosophy
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>

          {/* View Full Portfolio Button */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            <div className="text-center lg:text-right space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30 block">
                Next Chapter
              </span>
              <p className="text-xs font-medium text-foreground/50">
                Explore our complete archive
              </p>
            </div>

            <Link href="/projects" className="w-full sm:w-auto">
              <LiminalButton variant="outline" className="w-full sm:w-auto px-8 h-14 border-foreground/10 hover:border-foreground transition-all hover:tracking-widest group shadow-2xl shadow-foreground/5">
                <span className="relative z-10">View Full Portfolio</span>
              </LiminalButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeaturedProjects;
