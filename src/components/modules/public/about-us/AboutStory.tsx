import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import { Fragment } from "react";

// AboutStory Component
const AboutStory = () => {
  const storySpecs = [
    { label: "Studio", value: "Dhaka, BD" },
    { label: "Discipline", value: "Interior Architecture" },
    { label: "Scale", value: "All Sizes" },
  ];

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
            <div className="relative aspect-4/5 overflow-hidden group rounded-sm shadow-2xl will-change-transform">
              <Image
                src="/assets/about-us/about-story.png"
                alt="Liminal Studio: Where Ideas Take Shape"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-foreground/15 to-transparent" />
            </div>

            {/* Secondary Overlapping Image */}
            <div className="hidden md:block absolute -bottom-10 -right-6 lg:-right-12 w-[55%] aspect-square overflow-hidden rounded-sm shadow-2xl border-4 border-background z-10 group will-change-transform">
              <Image
                src="/assets/about-us/bg-about.png"
                alt="Liminal Design Detail: Material Craftsmanship"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu"
              />
            </div>

            {/* Architectural Corner Markers */}
            <div className="absolute -top-4 -left-4 w-10 h-10 border-t-2 border-l-2 border-liminal-secondary/40" />
            <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-2 border-r-2 border-liminal-secondary/40 hidden md:hidden lg:block" />

            {/* Technical Label */}
            <div className="absolute top-6 left-6 z-10">
              <span className="text-[9px] font-mono tracking-[0.4em] text-background/70 uppercase bg-foreground/40 backdrop-blur-sm px-3 py-2">
                Established | 2024
              </span>
            </div>
          </div>

          {/* Right: Narrative Content */}
          <div className="lg:col-span-6 space-y-8 relative">
            {/* Section Header */}
            <SectionHeader
              variant="inline"
              badgeText="Our Story"
              headingId="story-heading"
              title={
                <>
                  Where Art Meets{" "}
                  <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                    Architecture
                  </span>
                </>
              }
              className="lg:items-start"
            />

            {/* Body Text */}
            <div className="space-y-5 text-muted-foreground leading-relaxed font-light">
              <p>
                Liminal was founded with a singular conviction: that the spaces
                we inhabit profoundly shape how we think, feel, and live. In a
                world of disposable aesthetics, we chose to build something
                enduring, a studio where every design decision is rooted in
                intention, craftsmanship, and deep respect for the people who
                will call these spaces home.
              </p>

              {/* Signature Pull Quote */}
              <blockquote className="border-l-2 border-liminal-secondary/40 pl-5 py-3 italic text-foreground/80 font-serif text-lg">
                &quot;Great design doesn&apos;t shout. It whispers and lingers
                in your memory long after you&apos;ve left the room.&quot;
              </blockquote>

              <p>
                From our studio in Dhaka, we&apos;ve grown into a team of
                architects, designers, and artisans united by a shared vision:
                to create spaces that exist at the intersection of art and
                function. Each project is a new chapter in our ongoing story of
                design evolution.
              </p>
            </div>

            {/* Story Specs */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4">
              {storySpecs.map((spec, index) => (
                <Fragment key={spec.label}>
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
                      {spec.label}
                    </span>
                    <p className="text-xs font-bold uppercase tracking-tight">
                      {spec.value}
                    </p>
                  </div>
                  {index < storySpecs.length - 1 && (
                    <div className="hidden sm:block w-px h-8 bg-border/60" />
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

export default AboutStory;
