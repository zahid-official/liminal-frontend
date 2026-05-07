import { Sparkles, Layers, Sun, Users } from "lucide-react";

// Pillar Data
const pillars = [
  {
    icon: Sparkles,
    title: "Spatial Poetry",
    description:
      "We compose rooms like stanzas — each element contributing to a larger narrative of light, form, and human experience.",
    metric: "Form & Flow",
  },
  {
    icon: Layers,
    title: "Material Honesty",
    description:
      "Authentic materials, honestly expressed. We celebrate the raw beauty of stone, timber, metal, and textile in their truest forms.",
    metric: "Texture & Truth",
  },
  {
    icon: Sun,
    title: "Light Choreography",
    description:
      "Light is our most powerful tool. We sculpt natural and artificial illumination to transform mood, perception, and spatial drama.",
    metric: "Mood & Atmosphere",
  },
  {
    icon: Users,
    title: "Human Scale",
    description:
      "Every dimension is calibrated to the human body and spirit. Comfort is not negotiable — it is the foundation of every design decision.",
    metric: "Comfort & Proportion",
  },
];

// AboutPillars Component — Core Design Pillars
const AboutPillars = () => {
  return (
    <section
      id="about-pillars"
      aria-labelledby="pillars-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80"
    >
      <div className="custom-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24 space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-liminal-secondary/40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-liminal-secondary">
              Core Pillars
            </span>
            <div className="w-12 h-px bg-liminal-secondary/40" />
          </div>

          <h2
            id="pillars-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-[1.05]"
          >
            The Foundations of{" "}
            <span className="italic font-serif font-light text-liminal-secondary">
              Our Craft
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-muted-foreground text-[16px] sm:text-lg leading-relaxed font-light">
            Four immutable principles that define every project we undertake —
            from concept to completion.
          </p>
        </div>

        {/* Measurement Ruler Decoration */}
        <div className="hidden lg:flex items-center gap-0 mb-1 px-0">
          {[...Array(40)].map((_, i) => (
            <div key={i} className="flex-1 flex justify-center">
              <div
                className={`w-px ${
                  i % 10 === 0
                    ? "h-3 bg-liminal-secondary/40"
                    : i % 5 === 0
                      ? "h-2 bg-border/60"
                      : "h-1 bg-border/30"
                }`}
              />
            </div>
          ))}
        </div>

        {/* 4 Pillar Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-border/40">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`group relative p-8 md:p-10 lg:p-10 xl:p-12 flex flex-col justify-between min-h-[340px] lg:min-h-[400px] transition-all duration-700 ease-out hover:bg-liminal-secondary cursor-default ${
                  idx < pillars.length - 1
                    ? "border-b sm:border-b lg:border-b-0 lg:border-r border-border/40"
                    : ""
                } ${idx === 1 ? "sm:border-r-0 lg:border-r border-border/40" : ""} ${idx === 2 ? "sm:border-b-0" : ""}`}
              >
                {/* Top Content */}
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl border border-border/40 flex items-center justify-center text-liminal-secondary group-hover:text-white group-hover:border-white/20 transition-all duration-500">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold font-heading tracking-tight group-hover:text-white transition-colors duration-500">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed font-light group-hover:text-white/80 transition-colors duration-500">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Metric Tag */}
                <div className="pt-8 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-px bg-border group-hover:bg-white/30 transition-colors duration-500" />
                    <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 font-bold group-hover:text-white/60 transition-colors duration-500">
                      {pillar.metric}
                    </span>
                  </div>
                </div>

                {/* Corner Number Decoration */}
                <div className="absolute top-6 right-6 text-[10px] font-mono text-border group-hover:text-white/20 transition-colors duration-500 tracking-widest">
                  0{idx + 1}
                </div>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-liminal-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutPillars;
