import SectionHeader from "@/components/shared/SectionHeader";

// Manifesto Pillars
const pillars = [
  {
    title: "Spatial Intelligence",
    description:
      "Understanding how space shapes behavior, emotion, and the quality of daily life.",
  },
  {
    title: "Material Authenticity",
    description:
      "Celebrating the honest character of stone, wood, and metal — materials that age with grace.",
  },
  {
    title: "Light Choreography",
    description:
      "Sculpting natural and artificial illumination to transform mood and spatial perception.",
  },
];

// HomeManifesto Component
const HomeManifesto = () => {
  return (
    <section
      id="brand-manifesto"
      aria-labelledby="manifesto-heading"
      className="py-20 md:py-28 lg:py-36 relative overflow-hidden bg-zinc-50/80"
    >
      {/* Giant Background Letter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28rem] md:text-[40rem] lg:text-[55rem] font-heading font-bold text-liminal-secondary/[0.03] select-none pointer-events-none leading-none">
        L
      </div>

      <div className="custom-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-14">
          {/* Section Header */}
          <SectionHeader
            variant="manifesto"
            badgeText="Our Conviction"
            headingId="manifesto-heading"
            title={
              <>
                We don&apos;t decorate rooms.
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                We{" "}
                <span className="italic font-serif font-light text-liminal-secondary">
                  architect emotions
                </span>
              </>
            }
          />

          {/* Manifesto Body */}
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              Every material, every proportion, every shadow is placed with
              absolute intention. Our work sits at the intersection of
              architectural precision and human intuition — designing spaces that
              feel inevitable, not merely beautiful.
            </p>

            <p className="text-muted-foreground leading-relaxed font-light">
              We don&apos;t follow trends. We study how light falls, how
              materials age, how a room makes you pause. Then we design
              accordingly — with the patience of craftsmen and the rigor of
              architects.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="max-w-xl mx-auto">
            <blockquote className="relative py-14 px-6">
              {/* Decorative Quotation */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-7xl text-liminal-secondary/60 font-serif leading-none select-none pointer-events-none">
                &ldquo;
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-3">
                <div className="w-10 h-px bg-liminal-secondary/60" />
                <div className="w-2 h-2 rotate-45 border border-liminal-secondary/80" />
                <div className="w-10 h-px bg-liminal-secondary/60" />
              </div>

              {/* Quote Text */}
              <p className="text-xl md:text-2xl italic font-serif text-foreground/90 leading-relaxed">
                &quot;Design is not what you see. It&apos;s what you feel when
                you enter a room.&quot;
              </p>
              <footer className="block mt-4 text-[10px] uppercase tracking-[0.3em] text-liminal-secondary font-bold">
                — Liminal Design Philosophy
              </footer>
            </blockquote>
          </div>

          {/* Three Discipline Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-6">
            {pillars.map((pillar, index) => (
              <div key={pillar.title} className="group text-center space-y-4">
                {/* Numbered Label */}
                <div className="flex items-center justify-center gap-3">
                  <div className="w-8 h-px bg-liminal-secondary/40 group-hover:w-12 transition-all duration-700" />
                  <span className="text-[10px] font-mono tracking-[0.4em] text-muted-foreground/50 group-hover:text-liminal-secondary transition-colors duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="w-8 h-px bg-liminal-secondary/40 group-hover:w-12 transition-all duration-700" />
                </div>

                {/* Pillar Title */}
                <h3 className="text-lg md:text-xl font-bold font-heading tracking-tight group-hover:text-liminal-secondary transition-colors duration-500">
                  {pillar.title}
                </h3>

                {/* Pillar Description */}
                <p className="text-muted-foreground/80 font-light text-sm leading-relaxed max-w-xs mx-auto">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeManifesto;
