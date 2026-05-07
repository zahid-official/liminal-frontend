// AboutIdentity Component — Who We Are (Centered Editorial Manifesto)
const AboutIdentity = () => {
  return (
    <section
      id="about-identity"
      aria-labelledby="identity-heading"
      className="py-20 md:py-28 lg:py-36 relative overflow-hidden bg-zinc-50/80"
    >
      {/* Giant Background Letter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28rem] md:text-[40rem] lg:text-[55rem] font-heading font-bold text-liminal-secondary/[0.03] select-none pointer-events-none leading-none">
        L
      </div>

      <div className="custom-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Badge */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-liminal-secondary/40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-liminal-secondary">
              Who We Are
            </span>
            <div className="w-12 h-px bg-liminal-secondary/40" />
          </div>

          {/* Manifesto Title */}
          <h2
            id="identity-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-[1.08]"
          >
            We are architects of{" "}
            <span className="italic font-serif font-light text-liminal-secondary">
              atmosphere
            </span>
            , <br className="hidden md:block" />
            crafting spaces that speak
            <br className="hidden md:block" /> before words do.
          </h2>

          {/* Manifesto Body */}
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              Liminal is a premium interior design studio based in Dhaka,
              Bangladesh. We specialize in creating evocative, functional, and
              timeless spaces for discerning clients who demand more than
              surface-level beauty.
            </p>

            <p className="text-muted-foreground leading-relaxed font-light">
              Our work sits at the intersection of architectural precision and
              human intuition. We don&apos;t follow trends — we study how light
              falls, how materials age, how a room makes you pause. Then we
              design accordingly.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative py-8 px-6">
              {/* Decorative Quotation Lines */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-liminal-secondary/30" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-liminal-secondary/30" />

              <p className="text-xl md:text-2xl italic font-serif text-foreground/90 leading-relaxed">
                &quot;Design is not what you see. It&apos;s what you feel when
                you enter a room.&quot;
              </p>
              <span className="block mt-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">
                — Liminal Design Philosophy
              </span>
            </div>
          </div>

          {/* Technical Spec Bar */}
          <div className="pt-8">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 font-bold">
              <span>Discipline: Interior Architecture</span>
              <div className="w-px h-4 bg-border hidden sm:block" />
              <span>Location: Dhaka, Bangladesh</span>
              <div className="w-px h-4 bg-border hidden sm:block" />
              <span>Established: 2020</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIdentity;
