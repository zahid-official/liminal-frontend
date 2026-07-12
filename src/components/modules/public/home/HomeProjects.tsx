import { projects } from "@/components/modules/public/projects/projectsData";
import AnimatedButton from "@/components/shared/AnimatedButton";
import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Grid spans layout for the homepage asymmetric grid
const gridSpans = [
  "lg:col-span-8 lg:row-span-2",
  "lg:col-span-4 lg:row-span-1",
  "lg:col-span-4 lg:row-span-1",
  "lg:col-span-4 lg:row-span-1",
  "lg:col-span-4 lg:row-span-1",
  "lg:col-span-4 lg:row-span-1",
];

// HomeProjects Component
const HomeProjects = () => {
  return (
    <section
      id="featured-projects"
      aria-labelledby="featured-projects-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      <div className="custom-container relative z-10">
        {/* Section Header */}
        <SectionHeader
          variant="split"
          badgeText="Our Work"
          title={
            <>
              Spatial{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Narratives
              </span>
            </>
          }
          description="A selection of our most definitive projects, where architectural precision meets human emotion. Each space is a testament to our commitment to timeless design."
          className="mb-10"
        />

        {/* Asymmetric Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
          {projects.slice(0, 6).map((project, index) => {
            const span = gridSpans[index] || "lg:col-span-4 lg:row-span-1";
            return (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className={cn(
                  "group relative overflow-hidden rounded bg-zinc-950 flex flex-col justify-end isolate",
                  span,
                )}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    quality={100}
                    priority={index === 0}
                    className="object-cover transition-transform duration-1000 ease-out scale-100 group-hover:scale-110 transform-gpu will-change-transform backface-hidden"
                    sizes={
                      span.includes("col-span-8")
                        ? "(max-width: 1024px) 100vw, 66vw"
                        : "(max-width: 1024px) 100vw, 33vw"
                    }
                  />
                  {/* Overlay: Minimalist Cinematic Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/60 to-transparent opacity-25 group-hover:opacity-50 transition-opacity duration-1000" />
                  <div className="absolute inset-0 bg-radial-vignette opacity-0 group-hover:opacity-20 transition-opacity duration-1000" />
                </div>

                {/* Project Content: Architectural Frame */}
                <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-8">
                  {/* Top Right: Year */}
                  <div className="opacity-0 text-right group-hover:opacity-100 transition-all duration-700 delay-100 translate-y-2.5 group-hover:translate-y-0 transform-gpu backface-hidden">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-background/60 block">
                      Archive
                    </span>
                    <span className="text-sm font-medium text-background tracking-widest">
                      {project.completionYear}
                    </span>
                  </div>

                  {/* Title, Category & Interaction */}
                  <div className="relative group/content">
                    {/* Sliding backdrop blur mask */}
                    <div className="absolute -inset-x-6 -bottom-6 md:-inset-x-8 md:-bottom-8 h-[calc(100%+3.5rem)] bg-foreground/20 backdrop-blur-md [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0_0_0_0)] transition-all duration-700 ease-out -z-10" />

                    <div className="space-y-3">
                      {/* Editorial Line */}
                      <div className="h-px w-0 bg-background/60 group-hover:w-16 transition-all duration-700" />

                      {/* Title, Category & Location */}
                      <div className="space-y-1 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-700 transform-gpu backface-hidden will-change-transform">
                        <p className="text-background/70 text-xs font-serif italic tracking-wide">
                          {project.category}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold text-background leading-tight font-heading transform-gpu backface-hidden antialiased">
                          {project.title}
                        </h3>
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-background/60 font-sans block mt-1">
                          {project.location}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-1 group/details cursor-pointer opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 group-hover:duration-700 group-hover:delay-300 transform-gpu backface-hidden">
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
            );
          })}
        </div>

        {/* Bottom Action Section: Premium Editorial Layout */}
        <div className="mt-12 flex gap-5 justify-between">
          {/* Left: Project Count */}
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-foreground/30 block">
              Portfolio Status
            </span>
            <p className="text-xs font-medium text-foreground/50">
              Showing {Math.min(6, projects.length)} of {projects.length}{" "}
              completed projects
            </p>
          </div>

          {/* Right: View Full Portfolio Button */}
          <Link href="/projects" className="w-full sm:w-auto">
            <AnimatedButton>View Full Portfolio</AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
