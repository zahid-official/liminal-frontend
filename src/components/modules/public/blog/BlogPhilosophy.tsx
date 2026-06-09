import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import { Fragment } from "react";

// Specs data
const specs = [
  { label: "Discipline", value: "Spatial Narrative" },
  { label: "Focus", value: "Material Culture" },
  { label: "Voice", value: "Liminal Studio" },
];

// BlogPhilosophy Component - Design thinking editorial banner
const BlogPhilosophy = () => {
  return (
    <section
      id="blog-philosophy"
      aria-labelledby="philosophy-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative group/img">
              <div className="relative aspect-3/4 overflow-hidden rounded-sm shadow-2xl">
                <Image
                  src="/assets/blog/blog-banner.png"
                  alt="Architectural colonnade - design thinking and spatial philosophy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  quality={100}
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
                  Editorial Voice
                </span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 space-y-8">
            <SectionHeader
              variant="inline"
              badgeText="Design Thinking"
              headingId="philosophy-heading"
              title={
                <>
                  Every Space Tells
                  <br className="max-xl:hidden" />{" "}
                  <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                    a Unique Story
                  </span>
                </>
              }
            />

            {/* Content */}
            <div className="space-y-5 text-muted-foreground leading-relaxed font-light max-lg:text-center">
              <p>
                Our journal is more than a collection of articles, it is an
                extension of our design practice. Through writing, we explore
                the ideas, materials, and spatial philosophies that shape our
                work, inviting readers into the thinking behind each project.
              </p>

              <blockquote className="border-l-2 border-liminal-secondary/40 pl-6 py-2 italic text-foreground/80 font-serif text-lg">
                &quot;Every surface, every shadow, every material carries a
                narrative. Our journal explores these stories, the ones woven
                into light, texture, and human experience.&quot;
              </blockquote>

              <p>
                From the geological origins of travertine to the psychology of
                spatial proportion, from the craft of material curation to the
                architecture of silence, each entry is a meditation on what it
                means to design with intention, precision, and soul.
              </p>
            </div>

            {/* Specs Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3">
              {specs.map((spec, i) => (
                <Fragment key={spec.label}>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60">
                      {spec.label}
                    </span>
                    <p className="text-xs font-bold uppercase tracking-wide">
                      {spec.value}
                    </p>
                  </div>
                  {i < specs.length - 1 && (
                    <div className="hidden sm:block w-px h-7 bg-border/50" />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPhilosophy;
