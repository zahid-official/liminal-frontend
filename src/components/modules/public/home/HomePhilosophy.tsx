import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import { Fragment } from "react";

// Philosophy Data
const philosophies = [
  { label: "Discipline", value: "Material Poetry" },
  { label: "Focus", value: "Tactile Experience" },
  { label: "Rigor", value: "Honest Longevity" },
];

// HomePhilosophy Component
const HomePhilosophy = () => {
  return (
    <section
      id="home-philosophy"
      aria-labelledby="philosophy-heading"
      className="py-20 md:py-28 lg:py-32 bg-liminal-dark text-background relative overflow-hidden"
    >
      {/* Subtle Blueprint Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-size-[32px_32px]" />

      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-6 space-y-8 relative">
            {/* Section Header */}
            <SectionHeader
              badgeText="The Philosophy"
              title={
                <>
                  The Art of{" "}
                  <span className="italic font-serif font-light underline underline-offset-8 decoration-1 decoration-background/30">
                    Fine Detail
                  </span>
                </>
              }
              variant="inline"
              badgeClassName="text-background/60"
              badgeDotClassName="bg-background/20"
              titleClassName="text-background"
            />

            {/* Body Text */}
            <div className="space-y-6 text-background/60 leading-relaxed font-light mt-8 max-w-xl">
              <p>
                We believe that true design is invisible. It is found in the
                quiet alignment of a joint, the geometry of a shadow sweeping
                across travertine at golden hour and the heavy, tactile response
                of cast bronze. We design not just for the eyes, but for the
                senses.
              </p>
              <p>
                By anchoring our work in material authenticity, celebrating the
                honest grain of timber, the weight of stone and the cool patina
                of metal, we craft enduring spaces that age with grace and tell
                a continuous story of quiet longevity.
              </p>
            </div>

            <div className="relative pt-8 mt-10 max-w-xl border-t border-background/10">
              {/* Quote */}
              <blockquote className="text-xl italic font-serif text-background leading-relaxed">
                &ldquo; Great design does not shout. It whispers, lingering in
                the memory long after the physical space has been left
                behind.&rdquo;
                <footer className="block mt-4 text-[9px] font-sans not-italic uppercase tracking-[0.3em] text-background/20 font-bold">
                  – Liminal Design Studio
                </footer>
              </blockquote>

              {/* Philosophies */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-14">
                {philosophies.map((item, index) => (
                  <Fragment key={item.label}>
                    {index > 0 && <div className="w-px h-8 bg-background/10" />}
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-liminal-secondary">
                        {item.label}
                      </span>
                      <p className="text-xs font-bold uppercase tracking-tight text-background/80">
                        {item.value}
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Image Composition */}
          <div className="lg:col-span-6 relative">
            {/* Primary Image */}
            <div className="relative aspect-4/5 overflow-hidden rounded-sm shadow-2xl group will-change-transform">
              <Image
                src="/assets/home/philosophy-material-detail.png"
                alt="Liminal Design Philosophy: Materiality & Craftsmanship"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-foreground/15 to-transparent" />
            </div>

            {/* Architectural Corner Markers */}
            <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-background/30" />
            <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-background/30" />

            {/* Blueprint Label */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-background px-5 py-2 border border-border/60 shadow-lg">
              <span className="text-[10px] font-mono tracking-[0.4em] text-liminal-secondary uppercase whitespace-nowrap">
                Design Philosophy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePhilosophy;
