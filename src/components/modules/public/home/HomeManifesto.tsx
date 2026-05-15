import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

// HomeManifesto Component
const HomeManifesto = () => {
  return (
    <section
      id="manifesto"
      aria-labelledby="manifesto-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80"
    >
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Atmospheric Image */}
          <div className="lg:col-span-7 relative">
            <div className="relative group/manifesto">
              {/* Main Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl">
                <Image
                  src="/assets/home/home-manifesto-premium.png"
                  alt="Liminal Design Manifesto — Spaces that speak before words do"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  quality={90}
                  className="object-cover transition-transform duration-[1500ms] group-hover/manifesto:scale-105 will-change-transform transform-gpu"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/15 to-transparent" />
              </div>

              {/* Architectural Corner Brackets */}
              <div className="absolute -top-4 -left-4 w-10 h-10 border-t-2 border-l-2 border-liminal-secondary/25 group-hover/manifesto:-translate-x-1 group-hover/manifesto:-translate-y-1 group-hover/manifesto:border-liminal-secondary/50 transition-all duration-700" />
              <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-2 border-r-2 border-liminal-secondary/25 group-hover/manifesto:translate-x-1 group-hover/manifesto:translate-y-1 group-hover/manifesto:border-liminal-secondary/50 transition-all duration-700" />

              {/* Floating Label */}
              <div className="absolute -bottom-4 left-8 bg-background px-5 py-2 border border-border/50 shadow-md">
                <span className="text-[10px] font-mono tracking-[0.4em] text-liminal-secondary uppercase">
                  The Liminal Way
                </span>
              </div>
            </div>
          </div>

          {/* Right: Manifesto Content */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeader
              variant="inline"
              badgeText="Design Manifesto"
              headingId="manifesto-heading"
              title={
                <>
                  The Silent{" "}
                  <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                    Language
                  </span>{" "}
                  of Space
                </>
              }
            />

            <div className="space-y-5 text-muted-foreground leading-relaxed font-light text-center lg:text-left">
              <p>
                Design is not decoration. It is the silent language of space,
                light, and intention. At Liminal, we believe every space holds a
                story waiting to be told.
              </p>

              <p>
                Our role is not to impose style, but to reveal the inherent
                character of a place — to listen to the light, understand the
                materials, and honour the lives that will unfold within.
              </p>

              {/* Manifesto Pull Quote */}
              <blockquote className="border-l-2 border-liminal-secondary/40 pl-5 py-3 italic text-foreground/80 font-serif text-lg">
                &quot;We reject the disposable. We reject the superficial.
                Instead, we pursue design that ages with grace.&quot;
              </blockquote>

              <p>
                Every material we choose, every proportion we define, every
                threshold we compose is an act of care — a commitment to the
                people who will call these spaces home.
              </p>
            </div>

            {/* Spec Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground/50 font-bold pt-2">
              <span>Material Honesty</span>
              <div className="w-px h-4 bg-border hidden sm:block" />
              <span>Context-First</span>
              <div className="w-px h-4 bg-border hidden sm:block" />
              <span>Timeless Craft</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeManifesto;
