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
              </div>
              {/* Project Content: Editorial Spread */}
              <div className="absolute inset-0 z-10 flex p-6 md:p-8">
                {/* Left Anchor: Vertical Line & Metadata */}
                <div className="flex flex-col items-center gap-6 h-full border-l border-background/20 group-hover:border-background/60 transition-colors duration-700 pl-4 md:pl-6">
                  <span className="text-xl font-heading font-light text-background/30 group-hover:text-background/80 transition-colors duration-700">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  <div className="flex-1 flex items-center justify-center">
                    <p className="[writing-mode:vertical-lr] rotate-180 text-[10px] uppercase tracking-[0.4em] font-bold text-background/40 group-hover:text-background/90 transition-all duration-700 whitespace-nowrap">
                      {project.category}
                    </p>
                  </div>
                </div>

                {/* Right Content: Title & Action (Asymmetrical) */}
                <div className="flex-1 flex flex-col justify-between items-end text-right">
                  {/* Top Right: Year */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 translate-y-[-10px] group-hover:translate-y-0">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-background/60 block">
                      Archive
                    </span>
                    <span className="text-sm font-medium text-background tracking-widest">
                      {project.year}
                    </span>
                  </div>

                  {/* Bottom Right: Title & CTA */}
                  <div className="space-y-5 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-700 ease-out">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-background leading-[1.1] font-heading max-w-xs">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-col items-end gap-3 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300">
                      <div className="h-px w-12 bg-background/40 group-hover:w-20 transition-all duration-1000" />
                      <div className="flex items-center gap-3 group/details cursor-pointer">
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-background">
                          View Project
                        </span>
                        <div className="size-8 rounded-full border border-background/20 flex items-center justify-center transition-all duration-500 group-hover/details:bg-background group-hover/details:text-foreground">
                          <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover/details:rotate-45" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lateral Cinematic Gradient */}
              <div className="absolute inset-0 bg-linear-to-r from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-1000 pointer-events-none" />
              <div className="absolute inset-0 border border-background/0 group-hover:border-background/5 transition-all duration-1000 pointer-events-none z-20 m-4" />
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
                className="w-full sm:w-auto px-8 h-14 border-foreground/10 hover:border-foreground transition-all hover:tracking-widest group shadow-2xl shadow-foreground/5"
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
