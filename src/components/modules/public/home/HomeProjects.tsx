import AnimatedButton from "@/components/shared/AnimatedButton";
import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Featured Projects Data
const heroProject = {
  id: "dhaka-penthouse",
  title: "The Dhaka Penthouse",
  category: "Residential",
  year: "2024",
  location: "Gulshan, Dhaka",
  image: "/assets/home/project1.png",
  description: "A skyline sanctuary where minimalism meets warmth — 4,200 sq ft of considered living",
};

const supportProjects = [
  {
    id: "the-atelier",
    title: "The Atelier",
    category: "Commercial",
    year: "2024",
    image: "/assets/home/project-2.png",
    description: "A creative workspace designed for focused collaboration",
  },
  {
    id: "riverside-villa",
    title: "Riverside Villa",
    category: "Residential",
    year: "2023",
    image: "/assets/home/project-3.png",
    description: "Where nature and architecture exist in quiet dialogue",
  },
];

// HomeProjects Component
const HomeProjects = () => {
  return (
    <section
      id="featured-projects"
      aria-labelledby="projects-heading"
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden"
    >
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          variant="editorial"
          badgeText="Selected Work"
          headingId="projects-heading"
          title={
            <>
              Spaces That{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Speak
              </span>
            </>
          }
          description="A curated selection of projects that demonstrate our commitment to spatial intelligence, material authenticity, and the art of crafting environments that resonate."
        />

        {/* Editorial Masonry Grid */}
        <div className="space-y-6 lg:space-y-8">
          {/* Row 1: Hero Project — Full Width */}
          <Link href="/projects" className="group relative block">
            <div className="relative aspect-[16/9] md:aspect-[2/1] lg:aspect-[21/9] overflow-hidden rounded-sm shadow-lg">
              <Image
                src={heroProject.image}
                alt={`${heroProject.title}: ${heroProject.description}`}
                fill
                quality={90}
                sizes="100vw"
                className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04] will-change-transform transform-gpu backface-hidden"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-foreground/70 via-foreground/5 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-r from-foreground/30 to-transparent" />

              {/* Hover CTA */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <div className="flex items-center gap-2.5 bg-background/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl">
                  <span className="text-sm font-semibold tracking-wide">
                    View Project
                  </span>
                  <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform duration-400 transform-gpu" />
                </div>
              </div>

              {/* Top: Category + Location */}
              <div className="absolute top-6 left-6 z-10 flex items-center gap-3">
                <span className="text-[10px] font-mono tracking-[0.3em] text-background/80 uppercase bg-foreground/30 backdrop-blur-sm px-3 py-1.5">
                  {heroProject.category}
                </span>
                <span className="text-[10px] font-mono tracking-[0.2em] text-background/50 uppercase hidden sm:inline">
                  {heroProject.location}
                </span>
              </div>

              {/* Bottom: Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 z-10">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-background tracking-tight leading-[1.05]">
                      {heroProject.title}
                    </h3>
                    <p className="text-background/50 text-sm md:text-base font-light max-w-lg">
                      {heroProject.description}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono tracking-[0.3em] text-background/40 shrink-0 pb-1">
                    {heroProject.year}
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Row 2: Two Supporting Projects — Asymmetric Split (7/5) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            {supportProjects.map((project, index) => (
              <Link
                key={project.id}
                href="/projects"
                className={`group relative block ${
                  index === 0 ? "md:col-span-7" : "md:col-span-5"
                }`}
              >
                <div
                  className={`relative overflow-hidden rounded-sm shadow-lg ${
                    index === 0
                      ? "aspect-[4/5] md:aspect-[4/3]"
                      : "aspect-[4/5] md:aspect-[3/4]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title}: ${project.description}`}
                    fill
                    quality={90}
                    sizes={
                      index === 0
                        ? "(max-width: 768px) 100vw, 58vw"
                        : "(max-width: 768px) 100vw, 42vw"
                    }
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04] will-change-transform transform-gpu backface-hidden"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/65 via-foreground/10 to-transparent" />

                  {/* Hover CTA */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg">
                      <span className="text-sm font-semibold tracking-wide">
                        View Project
                      </span>
                      <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform duration-400 transform-gpu" />
                    </div>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-5 left-5 z-10">
                    <span className="text-[10px] font-mono tracking-[0.3em] text-background/80 uppercase bg-foreground/30 backdrop-blur-sm px-3 py-1.5">
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <div className="flex items-end justify-between gap-3">
                      <div className="space-y-1">
                        <h3 className="text-xl md:text-2xl font-bold font-heading text-background tracking-tight leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-background/50 text-sm font-light">
                          {project.description}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono tracking-[0.3em] text-background/40 shrink-0">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center pt-16 md:pt-20">
          <Link href="/projects">
            <AnimatedButton>View All Projects</AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
