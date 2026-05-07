// Process Phases Data
const phases = [
  {
    number: "01",
    title: "Listen & Understand",
    description:
      "We begin every project with deep listening. Understanding your lifestyle, aspirations, and the emotional qualities you seek in a space forms the foundation of everything that follows.",
    tag: "Discovery",
  },
  {
    number: "02",
    title: "Envision & Conceptualize",
    description:
      "Translating insights into a spatial vision. We develop mood narratives, material palettes, and conceptual frameworks that capture the essence of your project before a single line is drawn.",
    tag: "Ideation",
  },
  {
    number: "03",
    title: "Design & Develop",
    description:
      "Precision meets creativity. Detailed floor plans, 3D visualizations, and technical specifications bring the concept into sharp focus — every dimension considered, every material specified.",
    tag: "Development",
  },
  {
    number: "04",
    title: "Craft & Execute",
    description:
      "Our artisans and trusted partners bring the design to life. We oversee every installation, every finish, every detail — ensuring the final space matches the original vision with exacting fidelity.",
    tag: "Realization",
  },
  {
    number: "05",
    title: "Reveal & Refine",
    description:
      "The moment of unveiling. We walk through the completed space together, ensuring every element performs as intended. Your complete satisfaction is the only measure of our success.",
    tag: "Delivery",
  },
];

// AboutProcess Component — Vertical Alternating Timeline
const AboutProcess = () => {
  return (
    <section
      id="about-process"
      aria-labelledby="process-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      <div className="custom-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24 space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-liminal-secondary/40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-liminal-secondary">
              Our Approach
            </span>
            <div className="w-12 h-px bg-liminal-secondary/40" />
          </div>

          <h2
            id="process-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-[1.05]"
          >
            Five Phases to{" "}
            <span className="italic font-serif font-light text-liminal-secondary">
              Perfection
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-muted-foreground text-[16px] sm:text-lg leading-relaxed font-light">
            A deliberate, human-centered process that transforms your vision
            into a lived experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-border/20 via-border to-border/20 lg:-translate-x-px" />

          <div className="space-y-12 lg:space-y-0">
            {phases.map((phase, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className="relative lg:py-10">
                  {/* Diamond Waypoint */}
                  <div className="absolute left-6 lg:left-1/2 top-0 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 z-10">
                    <div className="w-3 h-3 rotate-45 bg-background border-2 border-liminal-secondary/60" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-14 lg:ml-0 lg:w-[calc(50%-3rem)] ${
                      isEven
                        ? "lg:mr-auto lg:pr-8 lg:text-right"
                        : "lg:ml-auto lg:pl-8 lg:text-left"
                    }`}
                  >
                    <div className="group p-6 md:p-8 border border-border/30 bg-background hover:border-liminal-secondary/30 transition-all duration-500 hover:shadow-xl hover:shadow-liminal-secondary/5 relative">
                      {/* Phase Tag */}
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          isEven ? "lg:justify-end" : "lg:justify-start"
                        }`}
                      >
                        <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-liminal-secondary font-bold">
                          Phase {phase.number}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-liminal-secondary/40" />
                        <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted-foreground/50">
                          {phase.tag}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold font-heading tracking-tight mb-3 group-hover:text-liminal-secondary transition-colors duration-500">
                        {phase.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed font-light">
                        {phase.description}
                      </p>

                      {/* Subtle corner accent */}
                      <div
                        className={`absolute top-0 w-0 h-0 border-t-2 border-liminal-secondary opacity-0 group-hover:w-6 group-hover:h-6 group-hover:opacity-100 transition-all duration-500 ${
                          isEven
                            ? "left-0 border-l-2"
                            : "right-0 border-r-2"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;
