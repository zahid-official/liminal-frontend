import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

// AboutStory Component
const AboutStory = () => {
  return (
    <section
      id="studio-story"
      aria-labelledby="studio-story-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left: Overlapping Image Composition */}
          <div className="lg:col-span-6 relative">
            {/* Primary Image */}
            <div className="relative aspect-4/5 overflow-hidden group rounded-sm shadow-2xl">
              <Image
                src="/assets/about-us/about-story.png"
                alt="Liminal Studio: Where Ideas Take Shape"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-foreground/15 to-transparent" />
            </div>

            {/* Secondary Overlapping Image */}
            <div className="hidden md:block absolute -bottom-10 -right-6 lg:-right-12 w-[55%] aspect-square overflow-hidden rounded-sm shadow-2xl border-4 border-background z-10 group">
              <Image
                src="/assets/about-us/bg-about.png"
                alt="Liminal Design Detail: Material Craftsmanship"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            {/* Architectural Corner Markers */}
            <div className="absolute -top-4 -left-4 w-10 h-10 border-t-2 border-l-2 border-liminal-secondary/40" />
            <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-2 border-r-2 border-liminal-secondary/40 hidden md:hidden lg:block" />

            {/* Technical Label */}
            <div className="absolute top-6 left-6 z-10">
              <span className="text-[9px] font-mono tracking-[0.4em] text-background/70 uppercase bg-foreground/40 backdrop-blur-sm px-3 py-1.5">
                LIMINAL | EST. 2024
              </span>
            </div>
          </div>

          {/* Right: Narrative Content */}
          <div className="lg:col-span-6 space-y-8 relative">
            {/* Background Decorative Letter */}
            <div className="absolute top-40 right-10 text-[20rem] font-bold font-heading text-liminal-secondary/5 select-none -z-10 group-hover:text-liminal-secondary/10 transition-all duration-1000">
              S
            </div>

            {/* Section Header */}
            <SectionHeader
              variant="inline"
              headingId="studio-story-heading"
              badgeText="Our Story"
              title={
                <>
                  Where Art Meets{" "}
                  <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                    Spatial Poetry
                  </span>
                </>
              }
              className="space-y-5"
            />

            {/* Body Text */}
            <div className="space-y-5 text-muted-foreground leading-relaxed font-light">
              <p>
                Liminal was born from a singular conviction: that space is the
                silent choreographer of human experience. Based in Dhaka, our
                studio operates at the threshold of the &ldquo;liminal&rdquo;
                &mdash; the precise point where imagination meets structural
                reality, and abstract visions are distilled into evocative
                living environments.
              </p>

              {/* Signature Pull Quote */}
              <blockquote className="relative pl-6 py-4 border-l-2 border-liminal-secondary/40 my-8">
                <p className="text-foreground/85 text-lg lg:text-xl italic font-light leading-relaxed">
                  &ldquo;Design is not something to be observed; it is something
                  to be inhabited. It is the invisible harmony that greets you
                  the moment you cross the threshold.&rdquo;
                </p>
                <cite className="block mt-4 text-[11px] font-bold uppercase tracking-[0.3em] text-liminal-secondary not-italic">
                  Liminal Design Philosophy
                </cite>
              </blockquote>

              <p>
                Every commission is an intimate dialogue between a client&apos;s
                aspiration and a site&apos;s innate potential. We believe that
                true luxury is atmospheric, not just ornamental. To us, great
                design remains subtle, revealing its depth through the profound
                sense of belonging you feel the moment you step inside.
              </p>
            </div>

            {/* Founder Attribution */}
            <div className="inline-flex items-center gap-6 group/signature pt-3 pl-1">
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-heading text-foreground group-hover/signature:text-liminal-secondary transition-colors duration-500">
                  Zahidul Islam
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
                  Founder & Lead Designer
                </span>
              </div>
              <div className="w-12 h-px bg-border group-hover/signature:w-20 group-hover/signature:bg-liminal-secondary transition-all duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
