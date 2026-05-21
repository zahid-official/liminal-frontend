import SectionHeader from "@/components/shared/SectionHeader";

// HomeManifesto Component: The Conceptual Foundation
const HomeManifesto = () => {
  return (
    <section
      id="home-manifesto"
      aria-labelledby="manifesto-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80"
    >
      {/* Giant Background Letter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28rem] md:text-[48rem] font-heading font-bold text-liminal-secondary/3 select-none pointer-events-none leading-none">
        L
      </div>

      <div className="custom-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Section Header */}
          <SectionHeader
            variant="manifesto"
            badgeText="Our Conviction"
            headingId="manifesto-heading"
            title={
              <>
                We don&apos;t decorate rooms.
                <br className="hidden sm:block" />{" "}
                <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                  We architect emotions
                </span>
              </>
            }
          />

          {/* Manifesto Body */}
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Every material, every proportion, every shadow is placed with
              absolute intention. Our work sits at the intersection of
              architectural precision and human intuition, designing spaces
              that feel inevitable, not merely beautiful.
            </p>

            <p className="text-muted-foreground leading-relaxed font-light">
              We don&apos;t follow trends. We study how light falls, how
              materials age, how textures whisper and how a room makes you
              pause. Then we design accordingly, with the patience of
              craftsmen, the rigor of architects and a profound reverence
              for the timeless poetry of space.
            </p>
          </div>

          {/* Pull Quote with Diamond Ornament */}
          <div className="max-w-xl mx-auto">
            <blockquote className="relative py-14 px-6">
              {/* Decorative Quotation */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-7xl text-liminal-secondary/60 font-serif leading-none select-none pointer-events-none">
                &ldquo;
              </div>

              {/* Diamond Ornament Divider */}
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
              <footer className="block mt-4 text-[10px] uppercase tracking-[0.3em] text-liminal-secondary font-bold">
                Liminal Design Manifesto
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeManifesto;
