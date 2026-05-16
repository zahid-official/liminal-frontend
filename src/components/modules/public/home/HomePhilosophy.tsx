import SectionHeader from "@/components/shared/SectionHeader";

// Philosophy tenets
const tenets = [
  {
    number: "01",
    title: "Spaces Should Feel Before They Function",
    description:
      "A beautifully proportioned room can change the quality of your entire day. We design for the interplay of volume, light, and material that creates an immediate emotional response — before the mind even registers why.",
  },
  {
    number: "02",
    title: "Materials Tell Stories",
    description:
      "Every surface in our designs is chosen not just for appearance, but for character. Stone that carries geological memory, wood that reveals its growth in every grain, metals that develop patina with the dignity of time.",
  },
  {
    number: "03",
    title: "Light Is the Most Honest Architect",
    description:
      "We treat light as a primary building material. The way morning sun grazes a travertine wall, how an indirect glow washes across a ceiling at dusk — these moments of illumination define how a space is truly experienced.",
  },
];

// HomePhilosophy Component
const HomePhilosophy = () => {
  return (
    <section
      id="design-philosophy"
      aria-labelledby="philosophy-heading"
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-zinc-50/80"
    >
      <div className="custom-container relative z-10">
        {/* Section Header */}
        <SectionHeader
          variant="manifesto"
          badgeText="Philosophy"
          headingId="philosophy-heading"
          title={
            <>
              The Art of{" "}
              <span className="italic font-serif font-light text-liminal-secondary">
                Intentional
              </span>{" "}
              Space
            </>
          }
          description="Three foundational principles that guide every decision we make — from the earliest sketch to the final placement of light."
          className="mb-20 lg:mb-28"
        />

        {/* Typography-Dominant Tenet List */}
        <div className="max-w-5xl mx-auto">
          {tenets.map((tenet, index) => (
            <div
              key={tenet.number}
              className="group border-t border-foreground/10 first:border-t-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-12 md:py-16 lg:py-20 items-start">
                {/* Large Decorative Number */}
                <div className="lg:col-span-2 flex lg:justify-end">
                  <span className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-foreground/[0.06] group-hover:text-liminal-secondary/15 transition-colors duration-700 leading-none tabular-nums select-none">
                    {tenet.number}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-4 flex items-start">
                  <h3 className="text-2xl md:text-3xl font-bold font-heading tracking-tight leading-[1.15] group-hover:text-liminal-secondary transition-colors duration-500">
                    {tenet.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-6 flex items-start lg:pt-1.5">
                  <p className="text-muted-foreground font-light leading-[1.8] text-[15px] sm:text-base group-hover:text-foreground/70 transition-colors duration-500">
                    {tenet.description}
                  </p>
                </div>
              </div>

              {/* Bottom rule for last item */}
              {index === tenets.length - 1 && (
                <div className="border-t border-foreground/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePhilosophy;
