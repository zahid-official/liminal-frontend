import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import ExperienceStats from "./ExperienceStats";

// Experience Statistics Data
const statsData = [
  {
    id: "stat-1",
    value: "13+",
    title: "Years of Legacy",
    description:
      "A decade-plus journey of architectural evolution and spatial mastery.",
  },
  {
    id: "stat-2",
    value: "250+",
    title: "Bespoke Deliveries",
    description: "Curating extraordinary environments for a global clientele.",
  },
  {
    id: "stat-3",
    value: "30+",
    title: "Specialist Craftsmen",
    description:
      "A multidisciplinary team dedicated to structural and aesthetic purity.",
  },
  {
    id: "stat-4",
    value: "100%",
    title: "Structural Integrity",
    description:
      "Uncompromising engineering standards in every volume we architect.",
  },
];

/**
 * ExperienceSection Component
 * Showcases the studio's metrics and legacy.
 * Features an editorial layout with technical mask-effects and architectural annotations.
 */
const ExperienceSection = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-24 md:py-32 lg:py-40 overflow-hidden bg-[url('/assets/bg-experience.png')] bg-top-left bg-no-repeat bg-zinc-50/80 relative"
    >
      {/* Technical Precision Element: Structural Crosshairs */}
      <div className="absolute top-1/4 left-0 w-64 h-64 opacity-10 pointer-events-none hidden lg:block">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-liminal-secondary" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-liminal-secondary" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-liminal-secondary rounded-full" />
        {/* New Rotating technical ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-dashed border-liminal-secondary/60 rounded-full animate-[spin_40s_linear_infinite]" />
        <div className="absolute top-[calc(50%-128px)] left-[calc(50%-1px)] w-px h-4 bg-liminal-secondary" />
        <div className="absolute bottom-[calc(50%-128px)] left-[calc(50%-1px)] w-px h-4 bg-liminal-secondary" />
      </div>

      <div className="custom-container relative z-10 space-y-24 sm:space-y-32">
        {/* Top Content: Narrative + Technical Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Side: Narrative Content */}
          <div className="lg:col-span-6 flex flex-col gap-10 text-center lg:text-left">
            <SectionHeader
              variant="inline"
              badgeText="A LEGACY OF PRECISION"
              headingId="experience-heading"
              title={
                <>
                  Metrics Defined <br />
                  By{" "}
                  <span className="text-liminal-secondary italic font-serif underline decoration-1 underline-offset-12">
                    Precision
                  </span>{" "}
                  and Impact
                </>
              }
              description="Our legacy is structured by the metrics of success, but our purpose is defined by architectural distinction. Since 2012, Liminal has transitioned from a boutique concept into a benchmark for spatial excellence, delivering environments that resonate with permanence."
              className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both"
            />

            {/* Technical Metadata Annotations */}
            <div className="hidden lg:flex items-center gap-8 animate-in fade-in slide-in-from-left-8 duration-1200 delay-700 ease-out fill-mode-both">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono tracking-[0.2em] text-liminal-secondary uppercase font-bold">
                  EST_FOUNDATION
                </span>
                <span className="text-sm font-extrabold uppercase tracking-tight text-foreground/80">
                  Studio 2012
                </span>
              </div>
              <div className="w-px h-10 bg-border/60" />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono tracking-[0.2em] text-liminal-secondary uppercase font-bold">
                  GEO_LOC
                </span>
                <span className="text-sm font-extrabold uppercase tracking-tight text-foreground/80">
                  GLOBAL OPERATIONS
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Masked Technical Image */}
          <div className="lg:col-span-6 relative aspect-video sm:aspect-square lg:aspect-4/3 group animate-in fade-in slide-in-from-right-12 duration-1500 delay-300 ease-out-quint fill-mode-both">
            {/* Architectural structural frame */}
            <div className="absolute -inset-8 border border-border/30 rounded-3xl -z-10 group-hover:-inset-6 transition-all duration-1000 ease-out" />

            {/* Corner Decorative Ticks */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-liminal-secondary/30 rounded-tl-2xl pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-liminal-secondary/30 rounded-br-2xl pointer-events-none" />

            {/* Masked Image with Hover Effect */}
            <div
              className="relative w-full aspect-[1.75] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] transform-gpu hover:scale-[1.02] overflow-hidden"
              style={{
                WebkitMaskImage: "url('/assets/experience-2.png')",
                WebkitMaskSize: "100% 100%",
                WebkitMaskPosition: "center center",
                WebkitMaskRepeat: "no-repeat",
                maskImage: "url('/assets/experience-2.png')",
                maskSize: "100% 100%",
                maskPosition: "center center",
                maskRepeat: "no-repeat",
              }}
            >
              <Image
                src="/assets/experience-1.png"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="Modern luxury interior living space with architectural precision"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Floating Technical Status Badge */}
            <div className="absolute -bottom-4 -left-4 lg:-left-12 bg-white/95 backdrop-blur-md p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border/40 rounded-2xl z-20 hidden sm:flex sm:flex-col items-start gap-1 -rotate-2 hover:rotate-0 transition-all ease-out group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] animate-in fade-in zoom-in duration-1000 delay-1000 fill-mode-both">
              <div className="flex items-center gap-5">
                <div className="relative size-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center shadow-inner">
                  <div className="size-2.5 rounded-full bg-liminal-secondary animate-pulse shadow-[0_0_10px_rgba(var(--liminal-secondary-rgb),0.5)]" />
                  <div className="absolute inset-0 border border-liminal-secondary/10 rounded-full animate-ping duration-[3s]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/80 leading-none mb-1.5">
                    Structural Harmony
                  </span>
                  <span className="text-lg font-bold font-heading tracking-tight text-foreground">
                    PRECISION_SCAN_01
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Integrated Statistics Grid */}
        <div className="pt-20 border-t border-border/40 animate-in fade-in slide-in-from-bottom-12 duration-1200 delay-800 ease-out fill-mode-both">
          <ExperienceStats statsData={statsData} />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
