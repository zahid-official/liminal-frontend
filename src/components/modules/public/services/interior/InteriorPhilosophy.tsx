import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";
import Image from "next/image";

// InteriorPhilosophy Component
const InteriorPhilosophy = () => {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80"
    >
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Side: Text/Details */}
          <div className="lg:col-span-6 space-y-8">
            <SectionHeader
              variant="inline"
              headingId="philosophy-heading"
              badgeText="Our Philosophy"
              title={
                <>
                  Manifesting Vision through{" "}
                  <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                    Precision & Soul
                  </span>
                </>
              }
              className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both"
            />

            <div className="space-y-4 text-muted-foreground leading-relaxed font-light">
              <p>
                Interior design balances geometric precision with the human
                spirit. We bridge technical rigor and soulful resonance,
                ensuring every line serves as a canvas for personal expression.
              </p>
              <p className="border-l-2 border-liminal-secondary/30 pl-4 italic py-2 text-foreground/80">
                &quot;Precision provides the structure; soul provides the
                meaning. When they converge, a space becomes a sanctuary.&quot;
              </p>
              <p>
                From intricate joinery to sensory atmospheres, we prioritize the
                harmony of opposites. By marrying technical excellence with
                emotional depth, we create spaces that breathe with life.
              </p>
            </div>

            {/* Technical Detail Badge */}
            <div className="inline-flex items-center gap-6 p-6 border border-border/40 rounded-sm bg-background">
              <div className="w-12 h-12 rounded-full border border-dashed border-liminal-secondary/40 relative flex items-center justify-center animate-[spin_10s_linear_infinite]">
                <div className="w-2 h-2 rounded-full bg-liminal-secondary absolute top-0 left-1/2 -translate-x-1/2 mt-1.5" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider">
                  Artisanal Precision
                </h4>
                <p className="text-[10px] text-muted-foreground font-mono">
                  CORE_LMNL: 0.04mm_TOLERANCE
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Image with Decorative Elements  */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            {/* Background Decorative Text */}
            <div className="absolute -top-20 -right-20 text-[18rem] xl:text-[22rem] font-bold font-heading text-liminal-secondary/5 select-none -z-10 hidden xl:block">
              PHI
            </div>

            <div className="relative aspect-4/5 md:aspect-video lg:aspect-4/5 overflow-hidden group rounded-sm shadow-2xl">
              <Image
                src="/assets/interior/philosophy-v2.png"
                alt="Liminal Interior Design Philosophy - Precision & Soul"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Architectural Elements - Blueprint Corners */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-liminal-secondary/40 -z-10" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-liminal-secondary/40 -z-10" />

            {/* Measurement Ticks */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex-col gap-8 items-center hidden lg:flex">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-1 h-px bg-border",
                    i === 2 && "w-3 bg-liminal-secondary",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorPhilosophy;
