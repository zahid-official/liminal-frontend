// ClientTestimonials Component — Full-Width Editorial Quote Spotlight
const ClientTestimonials = () => {
  const testimonials = [
    {
      quote:
        "Liminal didn't just redesign our penthouse. They gave us a home that understands us — every room feels like it was drawn from a conversation we didn't know we were having.",
      author: "Farid & Nusrat Chowdhury",
      project: "Gulshan Penthouse Residence",
      location: "Dhaka, BD — 2024",
      index: "01 / 03",
    },
    {
      quote:
        "The lobby Liminal designed for our headquarters has transformed how clients perceive us. We have received more compliments about our office in six months than in the previous ten years.",
      author: "Kamal Uddin",
      project: "Zenith Global Corporate HQ",
      location: "Motijheel, BD — 2024",
      index: "02 / 03",
    },
    {
      quote:
        "Working with Liminal was unlike any design experience I had before. They challenged our assumptions, introduced us to materials we never considered, and delivered a space that is quietly extraordinary.",
      author: "Tasneem Al-Mamun",
      project: "Luminous Glass House",
      location: "Uttara, BD — 2023",
      index: "03 / 03",
    },
  ];

  // Show first testimonial as featured
  const featured = testimonials[0];

  return (
    <section
      id="client-testimonials"
      aria-label="Client testimonials"
      className="py-20 md:py-28 lg:py-36 relative overflow-hidden bg-background"
    >
      {/* Decorative radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-liminal-secondary/4 blur-3xl" />
      </div>

      {/* Top thin rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="custom-container relative z-10">
        {/* Section label row */}
        <div className="flex items-center justify-between mb-16 lg:mb-24">
          <div className="flex items-center gap-5">
            <div className="w-14 h-px bg-liminal-secondary shrink-0" />
            <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-liminal-secondary">
              Client Voices
            </span>
          </div>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.4em] hidden sm:block">
            06 — Testimonials
          </span>
        </div>

        {/* Featured Quote */}
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Oversized opening quote mark */}
          <div
            className="absolute -top-8 left-1/2 -translate-x-1/2 font-serif text-[12rem] lg:text-[16rem] leading-none text-liminal-secondary/12 select-none pointer-events-none"
            aria-hidden="true"
          >
            &ldquo;
          </div>

          {/* Quote text */}
          <blockquote className="relative z-10 font-serif italic text-2xl sm:text-3xl lg:text-[2.25rem] leading-[1.4] text-foreground font-light tracking-tight">
            {featured.quote}
          </blockquote>

          {/* Attribution */}
          <div className="mt-12 flex flex-col items-center gap-4">
            {/* Flanking lines + author name */}
            <div className="flex items-center gap-6 w-full max-w-lg">
              <div className="flex-1 h-px bg-border" />
              <cite className="not-italic font-bold text-sm uppercase tracking-[0.15em] text-foreground whitespace-nowrap">
                {featured.author}
              </cite>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Project + location */}
            <div className="space-y-1">
              <p className="font-mono text-[10px] text-liminal-secondary uppercase tracking-[0.4em]">
                {featured.project}
              </p>
              <p className="font-mono text-[9px] text-muted-foreground/60 uppercase tracking-[0.35em]">
                {featured.location}
              </p>
            </div>
          </div>
        </div>

        {/* Other testimonials — condensed list */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-12">
          {testimonials.slice(1).map((t, i) => (
            <div
              key={i}
              className="group p-8 border border-border/40 hover:border-liminal-secondary/30 transition-colors duration-500 relative"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-liminal-secondary group-hover:w-full transition-all duration-700" />

              {/* Mini quote mark */}
              <div className="font-serif text-5xl text-liminal-secondary/20 leading-none mb-4 font-bold">
                &ldquo;
              </div>

              <blockquote className="font-serif italic text-base text-foreground/80 leading-relaxed font-light mb-6">
                {t.quote}
              </blockquote>

              <div className="space-y-1 border-t border-border/40 pt-4">
                <cite className="not-italic font-bold text-xs uppercase tracking-[0.15em] text-foreground block">
                  {t.author}
                </cite>
                <p className="font-mono text-[9px] text-liminal-secondary uppercase tracking-[0.4em]">
                  {t.project}
                </p>
                <p className="font-mono text-[9px] text-muted-foreground/50 uppercase tracking-[0.3em]">
                  {t.location}
                </p>
              </div>

              {/* Index */}
              <div className="absolute bottom-6 right-6 font-mono text-[9px] text-muted-foreground/30 tracking-[0.3em]">
                {t.index}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
