import SectionHeader from "@/components/shared/SectionHeader";
// AboutIdentity Component
const AboutIdentity = () => {
  return (
    <section
      id="about-identity"
      aria-labelledby="identity-heading"
      className="py-20 md:py-28 lg:py-36 relative overflow-hidden bg-zinc-50/80"
    >
      {/* Giant Background Letter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28rem] md:text-[40rem] lg:text-[55rem] font-heading font-bold text-liminal-secondary/3 select-none pointer-events-none leading-none">
        L
      </div>

      <div className="custom-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <SectionHeader
            variant="manifesto"
            badgeText="Who We Are"
            headingId="identity-heading"
            title={
              <>
                We are{" "}
                <span className="italic font-serif font-light text-liminal-secondary">
                  architects of atmosphere, crafting spaces
                </span>{" "}
                that speak
                <br className="hidden md:block" /> before words do.
              </>
            }
          />

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

              {/* Quote */}
              <p className="text-xl md:text-2xl italic font-serif text-foreground/90 leading-relaxed">
                &quot;Design is not what you see. It&apos;s what you feel when
                you enter a room.&quot;
              </p>
              <footer className="block mt-4 text-[10px] uppercase tracking-[0.3em]  text-liminal-secondary font-bold">
                — Liminal Design Philosophy
              </footer>
            </blockquote>
          </div>

          {/* Technical Spec Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 font-bold">
            <span>Discipline: Interior Architecture</span>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <span>Location: Dhaka, Bangladesh</span>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <span>Established: 2020</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIdentity;
