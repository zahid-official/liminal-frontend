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
                {/* Overlay: Narrative Depth Gradient */}
                <div className="absolute inset-0 bg-linear-to-r from-foreground/80 via-foreground/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-1000" />
                <div className="absolute inset-0 bg-radial-vignette opacity-0 group-hover:opacity-40 transition-opacity duration-1000" />
              </div>

              {/* Project Content: Narrative Timeline */}
              <div className="absolute inset-0 z-10 flex p-6 md:p-8">
                {/* Left Side: Information Tracks */}
                <div className="flex-1 flex flex-col justify-end">
                  {/* Track 1: Category */}
                  <div className="overflow-hidden">
                    <div className="transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out">
                      <p className="text-xs font-medium text-background tracking-widest uppercase">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  {/* Track 2: Title */}
                  <div className="overflow-hidden mb-5 mt-3">
                    <div className="transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out delay-75">
                      <h3 className="text-3xl font-bold text-background leading-none font-heading tracking-tighter uppercase">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Track 3: Action */}
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out delay-150">
                      <div className="flex items-center gap-2 group/action cursor-pointer">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-background">
                          View Details
                        </span>
                        <ArrowUpRight className="size-3.5 text-background transition-transform group-hover/action:rotate-45" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Timeline Axis */}
                <div className="w-12 flex flex-col items-center">
                  <div className="h-0 group-hover:h-full w-px bg-background/20 transition-all duration-1000 ease-in-out relative">
                    {/* Year Marker */}
                    <div className="absolute top-0 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                      <span className="text-[9px] font-mono text-background/40 uppercase block mb-1">
                        Year
                      </span>
                      <span className="text-xs font-bold text-background">
                        {project.year}
                      </span>
                    </div>
                    {/* Index Marker */}
                    <div className="absolute bottom-0 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-500">
                      <span className="text-[9px] font-mono text-background/40 uppercase block mb-1">
                        Ref
                      </span>
                      <span className="text-sm font-heading text-background">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inner Border Frame */}
              <div className="absolute inset-0 border border-background/0 group-hover:border-background/10 transition-all duration-1000 pointer-events-none z-20 m-4" />
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
