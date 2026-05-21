import LiminalButton from "@/components/shared/LiminalButton";
import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Project Data
const projects = [
  {
    title: "Apex Residence",
    category: "Residential Architecture",
    location: "Baridhara, Dhaka",
    year: "2023",
    image: "/assets/projects/liminal-living-room.png",
    slug: "apex-residence",
    span: "lg:col-span-8 lg:row-span-2",
  },
  {
    title: "Corporate Zen",
    category: "Commercial Office",
    location: "Motijheel, Dhaka",
    year: "2024",
    image: "/assets/projects/liminal-office.png",
    slug: "corporate-zen",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    title: "The Minimalist Kitchen",
    category: "Interior Design",
    location: "Gulshan, Dhaka",
    year: "2023",
    image: "/assets/projects/liminal-kitchen.png",
    slug: "minimalist-kitchen",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    title: "Sanctuary Bedroom",
    category: "Residential Interior",
    location: "Banani, Dhaka",
    year: "2022",
    image: "/assets/projects/liminal-bedroom.png",
    slug: "sanctuary-bedroom",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    title: "Marble Haven",
    category: "Luxury Bathroom",
    location: "Gulshan, Dhaka",
    year: "2024",
    image: "/assets/projects/liminal-bathroom.png",
    slug: "marble-haven",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    title: "Artistic Lounge",
    category: "Art-Focused Living",
    location: "Dhanmondi, Dhaka",
    year: "2023",
    image: "/assets/projects/liminal-lounge.png",
    slug: "artistic-lounge",
    span: "lg:col-span-4 lg:row-span-1",
  },
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
          className="mb-12"
        />

        {/* Asymmetric Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={`/projects/${project.slug}`}
              className={cn(
                "group relative overflow-hidden rounded bg-zinc-950 flex flex-col justify-end isolate",
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
                  sizes={
                    project.span.includes("col-span-8")
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
                    {project.year}
                  </span>
                </div>

                {/* Title, Category & Interaction */}
                <div className="relative group/content">
                  {/* Sliding Mask Effect Background */}
                  <div className="absolute -inset-x-6 -bottom-6 md:-inset-x-8 md:-bottom-8 translate-y-full group-hover:translate-y-0 h-44 bg-foreground/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform-gpu will-change-transform backface-hidden -z-10" />

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
          ))}
        </div>

        {/* Bottom Action Section: Premium Editorial Layout */}
        <div className="mt-12 flex gap-5 justify-between">
          {/* Left: Project Count */}
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-foreground/30 block">
              Portfolio Status
            </span>
            <p className="text-xs font-medium text-foreground/50">
              Showing {projects.length} of {projects.length} completed projects
            </p>
          </div>

          {/* Right: View Full Portfolio Button */}
          <Link href="/projects" className="w-full sm:w-auto">
            <LiminalButton variant="outline" className="px-8 h-14">
              View Full Portfolio
            </LiminalButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
