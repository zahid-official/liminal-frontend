import AnimatedButton from "@/components/shared/AnimatedButton";
import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Featured Projects Data
const projects = [
  {
    id: "dhaka-penthouse",
    title: "The Dhaka Penthouse",
    category: "Residential",
    year: "2024",
    image: "/assets/home/project-1.png",
    description: "A skyline sanctuary where minimalism meets warmth",
  },
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
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
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

        {/* Staggered Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href="/projects"
              className={`group relative block ${index === 1 ? "md:mt-16" : ""}`}
            >
              {/* Image Container */}
              <div className="relative aspect-3/4 overflow-hidden rounded-sm shadow-lg">
                <Image
                  src={project.image}
                  alt={`${project.title}: ${project.description}`}
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 will-change-transform transform-gpu backface-hidden"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-foreground/70 via-foreground/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

                {/* Hover Overlay — View Project */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg">
                    <span className="text-sm font-semibold tracking-wide">
                      View Project
                    </span>
                    <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform duration-400 transform-gpu" />
                  </div>
                </div>

                {/* Top: Category Tag */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="text-[10px] font-mono tracking-[0.3em] text-background/80 uppercase bg-foreground/30 backdrop-blur-sm px-3 py-1.5">
                    {project.category}
                  </span>
                </div>

                {/* Bottom: Project Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <div className="flex items-end justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-xl md:text-2xl font-bold font-heading text-background tracking-tight leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-background/60 text-sm font-light">
                        {project.description}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono tracking-[0.3em] text-background/50 shrink-0">
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
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
