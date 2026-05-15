// HomeManifesto Component — Pure Typography
const HomeManifesto = () => {
  return (
    <section id="manifesto" aria-labelledby="manifesto-heading" className="py-20 md:py-28 lg:py-36 relative overflow-hidden bg-zinc-50/80">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28rem] md:text-[40rem] lg:text-[55rem] font-heading font-bold text-liminal-secondary/[0.03] select-none pointer-events-none leading-none">L</div>

      <div className="custom-container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-liminal-secondary/40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-liminal-secondary">Design Manifesto</span>
            <div className="w-12 h-px bg-liminal-secondary/40" />
          </div>

          <h2 id="manifesto-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight font-heading">
            Design is not decoration.{" "}<span className="italic font-serif font-light text-liminal-secondary">It is the silent language</span>{" "}of space, light, and intention.
          </h2>

          <div className="max-w-2xl mx-auto space-y-5">
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              At Liminal, we believe every space holds a story waiting to be told. Our role is not to impose style, but to reveal the inherent character of a place — to listen to the light, understand the materials, and honour the lives that unfold within.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light">
              We reject the disposable. We pursue design that ages with grace, grows more beautiful with time, and resonates with something deeper than aesthetics alone.
            </p>
          </div>

          <blockquote className="max-w-xl mx-auto relative py-8">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl text-liminal-secondary/50 font-serif leading-none select-none pointer-events-none">&ldquo;</div>
            <p className="text-xl md:text-2xl italic font-serif text-foreground/85 leading-relaxed">
              &quot;The best design is the one you never notice — it simply feels right, like coming home to a place you&apos;ve always known.&quot;
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-8 h-px bg-liminal-secondary/50" />
              <div className="w-1.5 h-1.5 rotate-45 border border-liminal-secondary/70" />
              <div className="w-8 h-px bg-liminal-secondary/50" />
            </div>
          </blockquote>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-[10px] uppercase tracking-[0.25em] text-muted-foreground/45 font-bold">
            <span>Material Honesty</span>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <span>Context-First Design</span>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <span>Timeless Craft</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeManifesto;
