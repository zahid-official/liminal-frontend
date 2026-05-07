// AboutPhilosophy Component — Dark Section, Typographic Philosophy Pillars
const philosophyPillars = [
  {
    statement: "Space is Emotion",
    description:
      "Every room holds the potential for feeling. We design environments that evoke — that stir something wordless in the people who step inside. Architecture without emotion is merely shelter.",
  },
  {
    statement: "Detail is Devotion",
    description:
      "The finest design reveals itself in the smallest gestures — a joint perfectly aligned, a shadow cast with intention, a texture chosen for how it feels beneath a fingertip. We devote ourselves to the details others overlook.",
  },
  {
    statement: "Light is Language",
    description:
      "Natural and artificial light are our most expressive tools. We sculpt with illumination — using it to define space, guide movement, set mood, and transform the ordinary into the atmospheric.",
  },
];

const AboutPhilosophy = () => {
  return (
    <section
      id="about-philosophy"
      aria-labelledby="philosophy-heading"
      className="py-24 md:py-32 lg:py-40 bg-[#141f0a] text-white relative overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="custom-container relative z-10">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-5 mb-8">
          <div className="w-16 h-px bg-white/20" />
          <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-white/60">
            Our Philosophy
          </span>
          <div className="w-16 h-px bg-white/20" />
        </div>

        {/* Heading */}
        <h2
          id="philosophy-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight font-heading text-center mb-6"
        >
          The Beliefs That{" "}
          <span className="italic font-serif font-light">Guide Us</span>
        </h2>
        <p className="text-center text-white/50 font-light max-w-2xl mx-auto mb-20 sm:text-lg leading-relaxed">
          Three foundational convictions shape every line we draw, every material
          we select, and every space we bring to life.
        </p>

        {/* Philosophy Pillars */}
        <div className="max-w-5xl mx-auto">
          {philosophyPillars.map((pillar, index) => (
            <div key={index}>
              {/* Divider with Diamond */}
              <div className="flex items-center gap-0 my-0">
                <div className="flex-1 h-px bg-white/10" />
                <div className="w-2.5 h-2.5 rotate-45 border border-white/25 mx-6 shrink-0" />
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Pillar Content */}
              <div className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center text-center lg:text-left">
                {/* Large Typographic Statement */}
                <div className="lg:col-span-5">
                  <span className="text-[10px] font-mono tracking-[0.4em] text-white/25 uppercase block mb-3">
                    Pillar {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-heading leading-[1.05] tracking-tight">
                    {pillar.statement}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-7">
                  <p className="text-white/60 leading-relaxed font-light text-[16px] sm:text-lg lg:pl-8 lg:border-l lg:border-white/10">
                    {pillar.description}
                  </p>
                </div>
              </div>

              {/* Last divider */}
              {index === philosophyPillars.length - 1 && (
                <div className="flex items-center gap-0">
                  <div className="flex-1 h-px bg-white/10" />
                  <div className="w-2.5 h-2.5 rotate-45 border border-white/25 mx-6 shrink-0" />
                  <div className="flex-1 h-px bg-white/10" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;
