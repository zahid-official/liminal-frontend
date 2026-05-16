import Image from "next/image";

// Discipline Pillars
const disciplines = [
  { title: "Spatial Intelligence", id: "01" },
  { title: "Material Authenticity", id: "02" },
  { title: "Light Choreography", id: "03" },
];

// HomeManifesto Component
const HomeManifesto = () => {
  return (
    <section
      id="brand-manifesto"
      aria-labelledby="manifesto-heading"
      className="relative overflow-hidden min-h-[80vh] lg:min-h-[85vh] flex items-center"
    >
      {/* Full-Bleed Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/home/manifesto-interior.png"
          alt="Liminal: Architectural interior showcasing spatial intention and material authenticity"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover transform-gpu"
        />
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-foreground/65" />
        <div className="absolute inset-0 bg-linear-to-b from-foreground/40 via-transparent to-foreground/50" />
        <div className="absolute inset-0 bg-radial-vignette opacity-40" />
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay z-10 bg-noise" />

      {/* Content */}
      <div className="custom-container relative z-20 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-background/25" />
            <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-background/50">
              Our Conviction
            </span>
            <div className="w-12 h-px bg-background/25" />
          </div>

          {/* Manifesto Statement — Large Serif Typography */}
          <h2
            id="manifesto-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold leading-[1.15] tracking-tight text-background"
          >
            We don&apos;t decorate rooms.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            We{" "}
            <span className="italic font-serif font-light text-liminal-secondary">
              architect emotions
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-background/45 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Every material, every proportion, every shadow is placed with
            absolute intention. We design spaces that feel inevitable — not
            merely beautiful, but deeply, quietly right.
          </p>

          {/* Pull Quote */}
          <div className="max-w-xl mx-auto pt-4">
            <blockquote className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-7xl text-liminal-secondary/30 font-serif leading-none select-none pointer-events-none">
                &ldquo;
              </div>
              <p className="text-xl md:text-2xl italic font-serif text-background/80 leading-relaxed pt-6">
                &quot;Design is not what you see. It&apos;s what you feel when
                you enter a room.&quot;
              </p>
              <footer className="mt-5 text-[10px] uppercase tracking-[0.3em] text-liminal-secondary font-bold">
                — Liminal Design Philosophy
              </footer>
            </blockquote>
          </div>

          {/* Three Discipline Pillars — Horizontal Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 pt-8">
            {disciplines.map((discipline, index) => (
              <div key={discipline.id} className="flex items-center">
                {index > 0 && (
                  <div className="hidden sm:block w-px h-10 bg-background/15 mx-8 lg:mx-12" />
                )}
                <div className="text-center space-y-2">
                  <span className="text-[10px] font-mono tracking-[0.4em] text-background/30">
                    {discipline.id}
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-background/80 tracking-wide">
                    {discipline.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeManifesto;
