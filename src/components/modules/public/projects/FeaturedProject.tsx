import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { getFeaturedProject, projects } from "./projectsData";

// FeaturedProject Component
const FeaturedProject = () => {
  const featured = getFeaturedProject() || projects[0];

  const metrics = [
    { label: "Category", value: featured.category },
    { label: "Location", value: featured.location },
    { label: "Year", value: featured.completionYear },
  ];

  return (
    <section
      id="project-showcase"
      aria-labelledby="showcase-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      <div className="custom-container relative z-10">
        {/* Featured Project */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Image */}
          <div className="lg:col-span-7 relative group/img">
            <div className="relative aspect-4/3 overflow-hidden rounded-sm shadow-2xl">
              <Image
                src={featured.heroImage}
                alt={`${featured.title} — ${featured.category} in ${featured.location}`}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                quality={100}
                priority
                className="object-cover transition-transform duration-1500 group-hover/img:scale-105 will-change-transform transform-gpu"
              />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/10 to-transparent" />
            </div>

            {/* Architectural Corner Brackets */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-liminal-secondary/30 group-hover/img:border-liminal-secondary/60 transition-colors duration-700" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-liminal-secondary/30 group-hover/img:border-liminal-secondary/60 transition-colors duration-700" />

            {/* Blueprint Label */}
            <div className="absolute top-5 left-5 z-10">
              <span className="text-[9px] font-mono tracking-[0.4em] text-background/70 uppercase bg-foreground/35 backdrop-blur-sm px-3 py-1.5">
                Featured Project
              </span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-5 space-y-8 relative">
            {/* Giant Background Letter */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[36rem] font-heading font-bold text-liminal-secondary/4 select-none pointer-events-none leading-none">
              {featured.title.charAt(0).toUpperCase()}
            </div>

            {/* Category & Year */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-serif italic text-liminal-secondary tracking-wide">
                {featured.category}
              </span>
              <div className="w-8 h-px bg-liminal-secondary/40" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground/60">
                {featured.completionYear}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
              {featured.title}
            </h3>

            {/* Narrative */}
            <p className="text-muted-foreground font-light text-[16px] sm:text-lg leading-relaxed">
              {featured.shortIntro}
            </p>

            {/* Blockquote */}
            <blockquote className="border-l-2 border-liminal-secondary/40 pl-6 py-2 italic text-foreground/80 font-serif text-lg">
              &quot;Every surface, every proportion speaks to the quality of
              thought behind it.&quot;
            </blockquote>

            {/* Metrics */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {metrics.map((metric, i) => (
                <Fragment key={metric.label}>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60">
                      {metric.label}
                    </span>
                    <p className="text-xs font-bold uppercase tracking-wide">
                      {metric.value}
                    </p>
                  </div>
                  {i < metrics.length - 1 && (
                    <div className="hidden sm:block w-px h-7 bg-border/50" />
                  )}
                </Fragment>
              ))}
            </div>

            {/* View Project Link */}
            <Link
              href={`/projects/${featured.slug}`}
              className="inline-flex items-center gap-2 group/link mt-2"
            >
              <span className="relative text-sm font-semibold text-liminal-secondary">
                Explore Full Case Study
                <span className="absolute -bottom-0.5 left-0 h-px bg-liminal-secondary w-0 group-hover/link:w-full transition-[width] duration-300" />
              </span>
              <ArrowUpRight className="size-4 text-liminal-secondary transition-transform duration-300 group-hover/link:rotate-45 transform-gpu" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
