import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

// Design principles data
const principles = [
  {
    number: "01",
    title: "Contextual Intelligence",
    description:
      "Every design begins with deep listening. We decode the cultural, environmental, and personal context before a single line is drawn.",
  },
  {
    number: "02",
    title: "Material Authenticity",
    description:
      "We celebrate the honest character of stone, wood, and metal, sourcing materials that age with grace and tell a story of longevity.",
  },
  {
    number: "03",
    title: "Spatial Poetry",
    description:
      "Beyond function, we orchestrate movement and proportion to create intuitive flow, guiding the inhabitant through a composed narrative.",
  },
  {
    number: "04",
    title: "Light Choreography",
    description:
      "Light is our most potent tool. We sculpt natural and artificial illumination to transform mood, perception, and spatial drama.",
  },
];

// AboutApproach Component
const AboutApproach = () => {
  return (
    <section
      id="design-principles"
      aria-labelledby="design-principles-heading"
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-background"
    >
      {/* Background Architectural Grid (Subtle) */}
      {/* <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-size-[100px_100px]" /> */}

      {/* Decorative radial gradient for depth */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-liminal-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-liminal-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="custom-container relative z-10">
        {/* Section Header */}
        <SectionHeader
          variant="manifesto"
          headingId="design-principles-heading"
          badgeText="Methodology"
          title={
            <>
              Our Design{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Principles
              </span>
            </>
          }
          description="The core tenets that anchor our methodology, balancing architectural rigor with creative intuition across four foundational principles."
          className="mb-16"
        />

        {/* Three-column layout: Principles | Image | Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Principles (01, 02) */}
          <div className="lg:col-span-4 space-y-16 md:space-y-24 order-2 lg:order-1">
            {principles.slice(0, 2).map((principle) => (
              <div
                key={principle.number}
                className="group space-y-5 text-center lg:text-right"
              >
                <div className="flex items-center gap-4 justify-center lg:justify-end">
                  <span className="font-mono tracking-[0.4em] text-muted-foreground/40 group-hover:text-liminal-secondary transition-colors duration-500">
                    {principle.number}
                  </span>
                  <div className="w-12 h-px bg-border/60 group-hover:w-16 group-hover:bg-liminal-secondary/40 transition-all duration-700" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-heading tracking-tight group-hover:text-liminal-secondary transition-colors duration-500">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground/80 font-light text-base leading-relaxed max-w-sm mx-auto lg:mx-0 lg:ml-auto group-hover:text-foreground transition-colors duration-500">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Image Module */}
          <div className="lg:col-span-4 relative order-1 lg:order-2 px-4 md:px-0">
            <div className="relative group/image">
              {/* Main Image Container */}
              <div className="relative aspect-3/4 overflow-hidden rounded-sm border border-border/20 shadow-2xl">
                <Image
                  src="/assets/about-us/design-principles-v2.png"
                  alt="Liminal Design Principles: Bold & Moody Architectural Study"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover/image:scale-110 will-change-transform"
                />

                {/* Technical Overlay (Subtle) */}
                <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover/image:opacity-100 transition-opacity duration-1000 flex flex-col justify-between p-6 pointer-events-none">
                  <div className="flex justify-between text-[9px] font-mono uppercase tracking-[0.2em] text-background/40">
                    <span>Ref: LM-092</span>
                    <span>Scale: 1:20</span>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-12 h-12 border border-background/20 rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-background/40 rounded-full" />
                    </div>
                  </div>
                  <div className="flex justify-between text-[9px] font-mono uppercase tracking-[0.2em] text-background/40">
                    <span>Coord: 23.8°N</span>
                    <span>Res: 4K_RAW</span>
                  </div>
                </div>
              </div>

              {/* Animated Architectural Corner Brackets */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-liminal-secondary/20 group-hover/image:-translate-x-1 group-hover/image:-translate-y-1 group-hover/image:border-liminal-secondary/50 transition-all duration-700" />
              <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-liminal-secondary/20 group-hover/image:translate-x-1 group-hover/image:-translate-y-1 group-hover/image:border-liminal-secondary/50 transition-all duration-700" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-liminal-secondary/20 group-hover/image:-translate-x-1 group-hover/image:translate-y-1 group-hover/image:border-liminal-secondary/50 transition-all duration-700" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-liminal-secondary/20 group-hover/image:translate-x-1 group-hover/image:translate-y-1 group-hover/image:border-liminal-secondary/50 transition-all duration-700" />

              {/* Floating Blueprint Label */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-background px-6 py-2 border border-border/60 shadow-lg">
                <span className="text-[11px] font-mono tracking-[0.5em] text-liminal-secondary uppercase whitespace-nowrap">
                  Core Foundations
                </span>
              </div>
            </div>
          </div>

          {/* Right Principles (03, 04) */}
          <div className="lg:col-span-4 space-y-16 md:space-y-24 order-3">
            {principles.slice(2, 4).map((principle) => (
              <div
                key={principle.number}
                className="group space-y-5 text-center lg:text-left"
              >
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <div className="w-12 h-px bg-border/60 group-hover:w-16 group-hover:bg-liminal-secondary/40 transition-all duration-700" />
                  <span className="font-mono tracking-[0.4em] text-muted-foreground/40 group-hover:text-liminal-secondary transition-colors duration-500">
                    {principle.number}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-heading tracking-tight group-hover:text-liminal-secondary transition-colors duration-500">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground/80 font-light text-base leading-relaxed max-w-sm mx-auto lg:mx-0 group-hover:text-foreground transition-colors duration-500">
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

export default AboutApproach;
