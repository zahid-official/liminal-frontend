import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

// Design principles data
const leftPrinciples = [
  {
    number: "01",
    title: "Contextual Intelligence",
    description:
      "Every space has a context — cultural, climatic, and human. We read this context before we draw a single line, ensuring our design responds to its environment rather than imposing upon it.",
  },
  {
    number: "02",
    title: "Material Honesty",
    description:
      "We let materials speak in their own voice. Stone is stone. Timber is timber. We never apply a veneer of false luxury — the beauty of our interiors emerges from the authentic nature of each element.",
  },
];

const rightPrinciples = [
  {
    number: "03",
    title: "Spatial Narrative",
    description:
      "A great interior unfolds like a story. We choreograph the sequence of spaces — entry, pause, reveal — so that movement through a space feels purposeful, surprising, and complete.",
  },
  {
    number: "04",
    title: "Human-Centred Craft",
    description:
      "Ultimately, our designs must serve the people who inhabit them. We balance aesthetic ambition with functional excellence, ensuring that beauty never comes at the cost of livability.",
  },
];

// DesignApproach Component — Principles Flanking a Center Vertical Image
const DesignApproach = () => {
  return (
    <section
      id="design-approach"
      aria-labelledby="design-approach-heading"
      className="py-20 md:py-28 lg:py-36 bg-zinc-50/60 relative overflow-hidden"
    >
      <div className="custom-container">
        {/* Section Header — centered above the grid */}
        <div className="mb-16 lg:mb-24">
          <SectionHeader
            variant="split"
            headingId="design-approach-heading"
            badgeText="Our Approach"
            title={
              <>
                Four Principles.{" "}
                <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                  One Vision.
                </span>
              </>
            }
            description="Our methodology is built on four immutable principles that guide every decision from concept to completion — regardless of scale, budget, or typology."
          />
        </div>

        {/* Three-column grid: [left principles] [center image] [right principles] */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-10 items-start">

          {/* Left Principles — right-aligned */}
          <div className="space-y-12 lg:text-right">
            {leftPrinciples.map((principle) => (
              <div key={principle.number} className="group relative space-y-3">
                {/* Number + title row */}
                <div className="flex items-center gap-4 lg:flex-row-reverse lg:justify-start">
                  <span className="font-mono text-[9px] text-muted-foreground/50 uppercase tracking-[0.4em] shrink-0">
                    {principle.number}
                  </span>
                  <div className="h-px flex-1 bg-border group-hover:bg-liminal-secondary/30 transition-colors duration-500 hidden sm:block" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-liminal-secondary transition-colors duration-500">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed text-[15px]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center: Vertical Image with architectural corner brackets */}
          <div className="hidden lg:block relative w-[260px] xl:w-[300px] self-stretch">
            {/* Architectural corner brackets */}
            <div className="absolute -top-5 -left-5 w-8 h-8 border-t-2 border-l-2 border-liminal-secondary/50 z-10" />
            <div className="absolute -top-5 -right-5 w-8 h-8 border-t-2 border-r-2 border-liminal-secondary/50 z-10" />
            <div className="absolute -bottom-5 -left-5 w-8 h-8 border-b-2 border-l-2 border-liminal-secondary/50 z-10" />
            <div className="absolute -bottom-5 -right-5 w-8 h-8 border-b-2 border-r-2 border-liminal-secondary/50 z-10" />

            <div className="relative w-full h-full min-h-[520px] overflow-hidden group">
              <Image
                src="/assets/about-us/detail-texture.png"
                alt="Liminal design detail and craft"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />

              {/* Vertical text along edge */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
                <span className="font-mono text-[9px] text-white/50 uppercase tracking-[0.4em] whitespace-nowrap">
                  Design · Craft · Precision
                </span>
              </div>
            </div>
          </div>

          {/* Mobile: full-width image */}
          <div className="lg:hidden relative aspect-video overflow-hidden group">
            <Image
              src="/assets/about-us/detail-texture.png"
              alt="Liminal design detail and craft"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
          </div>

          {/* Right Principles — left-aligned */}
          <div className="space-y-12 lg:text-left">
            {rightPrinciples.map((principle) => (
              <div key={principle.number} className="group relative space-y-3">
                {/* Number + title row */}
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[9px] text-muted-foreground/50 uppercase tracking-[0.4em] shrink-0">
                    {principle.number}
                  </span>
                  <div className="h-px flex-1 bg-border group-hover:bg-liminal-secondary/30 transition-colors duration-500 hidden sm:block" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-liminal-secondary transition-colors duration-500">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed text-[15px]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignApproach;
