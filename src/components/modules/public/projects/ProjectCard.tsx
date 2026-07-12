import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { IProject } from "./projectsData";

// Props for the ProjectCard component
interface ProjectCardProps {
  project: IProject;
}

/**
 * ProjectCard component displays a project preview card with rich hover states,
 * sliding mask backdrop effects, and editorial details.
 */
const ProjectCard = ({ project }: ProjectCardProps) => {
  const metaInfo = [
    { label: "Location", value: project.location },
    { label: "Archive", value: project.completionYear },
    { label: "Status", value: project.status },
    { label: "Area", value: project.area },
  ];

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
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/40 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute inset-0 bg-radial-vignette opacity-0 group-hover:opacity-25 transition-opacity duration-700" />
      </div>

      {/* Floating category badge */}
      <div className="absolute top-4.5 right-5 z-20">
        <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-background/70 bg-foreground/40 backdrop-blur-xs px-2.5 py-1 rounded-xs">
          {project.category}
        </span>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-7">
        {/* Title, Category & Link wrapper */}
        <div className="relative">
          {/* Sliding backdrop blur mask */}
          <div className="absolute -inset-x-6 -bottom-6 md:-inset-x-8 md:-bottom-8 h-[calc(100%+3rem)] bg-foreground/20 backdrop-blur-md [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0_0_0_0)] transition-all duration-700 ease-out -z-10" />

          <div className="space-y-4">
            {/* Project Style & Title */}
            <div className="transform translate-y-39 group-hover:translate-y-0 transition-transform duration-700 transform-gpu backface-hidden will-change-transform">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-background/80">
                {project.interiorStyle}
              </span>

              <Link href={`/projects/${project.slug}`}>
                <h3 className="text-2xl uppercase tracking-tight font-bold text-background leading-tight font-heading transform-gpu backface-hidden antialiased">
                  {project.title}
                </h3>
              </Link>

              {/* Decorative divider line */}
              <div className="h-px w-0 bg-background/20 group-hover:w-full transition-all duration-600 mb-6 mt-1" />
            </div>

            {/* Technical metadata grid */}
            <div className="grid grid-cols-2 gap-4 cursor-pointer opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 group-hover:duration-700 group-hover:delay-100 transform-gpu backface-hidden">
              {metaInfo.map((item) => (
                <div key={item.label} className="space-y-1">
                  <span className="text-[9px] font-mono text-background/40 uppercase tracking-widest block">
                    {item.label}
                  </span>
                  <p className="text-xs font-bold text-background uppercase">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Interactive view details action */}
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 group/details cursor-pointer opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 group-hover:duration-700 group-hover:delay-100 transform-gpu backface-hidden"
            >
              <span className="relative text-[11px] font-semibold uppercase tracking-[0.2em] text-background">
                View Details
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-background transition-all duration-300 ease-out group-hover/details:w-full" />
              </span>
              <ArrowUpRight className="size-4 text-background transition-transform duration-500 group-hover/details:rotate-45" />
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle inner boundary frame */}
      <div className="absolute inset-0 border border-background/15 pointer-events-none z-20 m-3 transition-opacity duration-700" />
    </article>
  );
};

export default ProjectCard;
