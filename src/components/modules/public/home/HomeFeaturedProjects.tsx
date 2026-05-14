import LiminalButton from "@/components/shared/LiminalButton";
import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
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
                "group relative overflow-hidden rounded bg-zinc-100 flex flex-col justify-end isolate",
                project.span,
              )}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={100}
                  priority={index === 0}
                  className="object-cover transition-transform duration-1000 ease-out scale-100 group-hover:scale-110 transform-gpu will-change-transform backface-hidden"
                  sizes={project.span.includes("col-span-8") ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
                />
                {/* Overlay: Minimalist Cinematic Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-25 group-hover:opacity-50 transition-opacity duration-1000" />
                <div className="absolute inset-0 bg-radial-vignette opacity-0 group-hover:opacity-20 transition-opacity duration-1000" />
              </div>

              {/* Project Content: Architectural Frame */}
              <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-8">
                {/* Top Right: Year */}
                <div className="opacity-0 text-right group-hover:opacity-100 transition-all duration-700 delay-100 translate-y-2.5 group-hover:translate-y-0">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-background/60 block">
                    Archive
                  </span>
                  <span className="text-sm font-medium text-background tracking-widest">
                    {project.year}
                  </span>
                </div>

                {/* Title, Category & Interaction */}
                <div className="relative group/content">
                  {/* Sliding Mask Effect Background */}
                  <div className="absolute -inset-x-8 -bottom-8 h-0 bg-background/5 backdrop-blur-md group-hover:h-40 transition-all duration-700 ease-out -z-10" />

                  <div className="space-y-3">
                    {/* Editorial Line */}
                    <div className="h-px w-0 bg-background/60 group-hover:w-16 transition-all duration-1000 ease-out" />

                    {/* Title, Category */}
                    <div className="space-y-1 transform translate-y-9 group-hover:translate-y-0 transition-transform duration-700 transform-gpu backface-hidden will-change-transform">
                      <p className="text-background/70 text-xs font-serif italic tracking-wide">
                        {project.category}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold text-background leading-tight font-heading transform-gpu backface-hidden antialiased">
                        {project.title}
                      </h3>
                    </div>

                    <div className="inline-flex items-center gap-1 group/details cursor-pointer opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 group-hover:duration-700 group-hover:delay-300">
                      <span className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-background">
                        View Project
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-background transition-all duration-300 ease-out group-hover/details:w-full" />
                      </span>
                      <ArrowUpRight className="size-4 text-background transition-transform duration-500 group-hover/details:rotate-45" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Inner Border Frame (Reveals on hover) */}
              <div className="absolute inset-0 border border-background/20 pointer-events-none z-20 m-4" />
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
              <LiminalButton
                variant="outline"
                className="w-full sm:w-auto px-8 h-14 border-foreground/10 hover:border-foreground/30 transition-all hover:tracking-widest group shadow-2xl shadow-foreground/5"
              >
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
