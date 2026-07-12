import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { IProject } from "./projectsData";

// ProjectCard Props
interface ProjectCardProps {
  project: IProject;
}

// ProjectCard Component
const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="group relative overflow-hidden rounded bg-zinc-950 flex flex-col justify-end isolate aspect-3/4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-1000 ease-out scale-100 group-hover:scale-110 transform-gpu will-change-transform backface-hidden"
        />
        {/* Overlay: Cinematic Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-foreground/70 via-foreground/20 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-1000" />
        <div className="absolute inset-0 bg-radial-vignette opacity-0 group-hover:opacity-25 transition-opacity duration-1000" />
      </div>

      {/* Category Tag */}
      <div className="absolute top-4.5 left-5 z-20">
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-background/95 bg-foreground/50 backdrop-blur-xs px-2.5 py-1 rounded-xs">
          {project.category}
        </span>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8">
        {/* Bottom: Title, Category & Link */}
        <div className="relative group/content">
          {/* Sliding Mask Effect */}
          <div className="absolute -inset-x-6 -bottom-6 md:-inset-x-8 md:-bottom-8 translate-y-full group-hover:translate-y-0 h-42 bg-foreground/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform-gpu will-change-transform backface-hidden -z-10" />

          <div className="space-y-3">
            {/* Editorial Line */}
            <div className="h-px w-0 bg-background/60 group-hover:w-16 transition-all duration-700" />

            {/* Title, Category & Location */}
            <div className="space-y-1 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-700 transform-gpu backface-hidden will-change-transform">
              <Link href={`/projects/${project.slug}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-background leading-tight font-heading transform-gpu backface-hidden antialiased">
                  {project.title}
                </h3>
              </Link>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-background/60 font-sans block mt-1">
                {project.location}
              </p>
            </div>

            {/* View Project Link */}
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 group/details cursor-pointer opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 group-hover:duration-700 group-hover:delay-100 transform-gpu backface-hidden"
            >
              <span className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-background">
                View Project
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-background transition-all duration-300 ease-out group-hover/details:w-full" />
              </span>
              <ArrowUpRight className="size-4 text-background transition-transform duration-500 group-hover/details:rotate-45" />
            </Link>
          </div>
        </div>
      </div>

      {/* Inner Border Frame */}
      <div className="absolute inset-0 border border-background/15 pointer-events-none z-20 m-3 transition-opacity duration-700" />
    </article>
  );
};

export default ProjectCard;
