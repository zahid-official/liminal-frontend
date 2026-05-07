import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";

// Core Design Pillars Data
const pillars = [
  {
    number: "01",
    title: "Artisanal Craftsmanship",
    description:
      "We believe in the irreplaceable value of the human hand. Every material joint, every surface finish, every spatial transition is executed with artisanal precision — honoring the traditions of craft while embracing contemporary technique.",
    accent: "Craft · Heritage · Precision",
  },
  {
    number: "02",
    title: "Spatial Intelligence",
    description:
      "Great design begins with understanding how people move through, inhabit, and experience space. We apply spatial intelligence to every project — optimizing flow, proportion, and scale to create environments that feel intuitively right.",
    accent: "Flow · Proportion · Intuition",
  },
  {
    number: "03",
    title: "Material Honesty",
    description:
      "We select materials not for spectacle but for integrity. Wood should feel like wood. Stone should carry the weight of the earth. We celebrate authentic materials that age gracefully and tell a richer story over time.",
    accent: "Authenticity · Texture · Longevity",
  },
  {
    number: "04",
    title: "Emotional Resonance",
    description:
      "Beyond function and form lies the realm of feeling. We design for emotional resonance — spaces that calm, inspire, energize, or embrace. The ultimate measure of our work is how it makes people feel.",
    accent: "Feeling · Connection · Memory",
  },
];

// AboutPillars Component — Staggered Masonry Grid
const AboutPillars = () => {
  return (
    <section
      id="about-pillars"
      aria-labelledby="pillars-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      {/* Large Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14rem] md:text-[20rem] lg:text-[26rem] font-bold font-heading text-foreground/[0.015] select-none pointer-events-none whitespace-nowrap -z-10">
        LMNL
      </div>

      <div className="custom-container relative z-10">
        {/* Section Header */}
        <SectionHeader
          variant="editorial"
          badgeText="Design Pillars"
          headingId="pillars-heading"
          title={
            <>
              The Foundations of{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Every Space
              </span>{" "}
              We Create
            </>
          }
          description="Four immovable principles anchor our design practice. They are not guidelines — they are convictions."
        />

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto lg:mx-0">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.number}
              className={cn(
                "group relative border border-border/50 bg-white p-8 sm:p-10 transition-all duration-500 hover:border-liminal-secondary/40 hover:shadow-xl hover:shadow-liminal-secondary/5",
                // Stagger: odd items shifted down on desktop
                index % 2 !== 0 && "md:mt-12 lg:mt-16"
              )}
            >
              {/* Hover accent corner */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t border-l border-liminal-secondary opacity-0 group-hover:w-8 group-hover:h-8 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b border-r border-liminal-secondary opacity-0 group-hover:w-8 group-hover:h-8 group-hover:opacity-100 transition-all duration-500" />

              <div className="space-y-6">
                {/* Number + Title */}
                <div className="space-y-4">
                  <span className="text-5xl sm:text-6xl font-bold font-heading text-liminal-secondary/15 group-hover:text-liminal-secondary/30 transition-colors duration-500 block">
                    {pillar.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading tracking-tight">
                    {pillar.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground font-light leading-relaxed text-[15px]">
                  {pillar.description}
                </p>

                {/* Accent Tags */}
                <div className="pt-4 border-t border-border/30">
                  <span className="text-[10px] font-mono tracking-[0.3em] text-liminal-secondary/70 uppercase">
                    {pillar.accent}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPillars;
