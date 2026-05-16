import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

// Philosophy tenets
const tenets = [
  {
    number: "01",
    title: "Spaces Should Feel Before They Function",
    description:
      "A beautifully proportioned room can change the quality of your entire day. We design spaces that make you pause — where the interplay of volume, light, and material creates an immediate emotional response before the mind even registers why.",
  },
  {
    number: "02",
    title: "Materials Tell Stories",
    description:
      "Every surface in our designs is chosen not just for appearance, but for character. We source stone that carries geological memory, wood that reveals its growth in every grain, and metals that develop patina with the dignity of time.",
  },
  {
    number: "03",
    title: "Light Is the Most Honest Architect",
    description:
      "We treat light as a primary building material. The way morning sun grazes a travertine wall, or how an indirect glow washes across a ceiling at dusk — these moments of illumination define how a space is truly experienced.",
  },
];

// HomePhilosophy Component
const HomePhilosophy = () => {
  return (
    <section
      id="design-philosophy"
      aria-labelledby="philosophy-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-[#141F0A] text-background"
    >
      {/* Blueprint Grid Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-size-[60px_60px]" />

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-noise" />

      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Large Atmospheric Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-3/4 overflow-hidden rounded-sm shadow-2xl group will-change-transform sticky top-32">
              <Image
                src="/assets/home/philosophy.png"
                alt="Architectural philosophy: Light, material, and spatial intention"
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu backface-hidden"
              />
              {/* Dark overlay for depth */}
              <div className="absolute inset-0 bg-linear-to-t from-[#141F0A]/40 to-transparent" />

              {/* Technical Corner Brackets */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-liminal-secondary/30" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b border-r border-liminal-secondary/30" />
            </div>

            {/* Bottom Label */}
            <div className="mt-6 flex items-center gap-3 justify-center lg:justify-start">
              <div className="w-8 h-px bg-background/20" />
              <span className="text-[9px] font-mono tracking-[0.4em] text-background/30 uppercase">
                Ref: LM-Philosophy
              </span>
            </div>
          </div>

          {/* Right: Philosophy Content */}
          <div className="lg:col-span-7 space-y-12 lg:pt-4">
            {/* Header */}
            <SectionHeader
              variant="inline"
              badgeText="Philosophy"
              headingId="philosophy-heading"
              badgeClassName="border-background/20 text-background/90"
              badgeDotClassName="bg-liminal-secondary"
              titleClassName="text-background"
              title={
                <>
                  The Art of{" "}
                  <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                    Intentional
                  </span>{" "}
                  Space
                </>
              }
              description={
                <span className="text-background/50">
                  Three foundational principles that guide every decision we
                  make — from the earliest sketch to the final placement of
                  light.
                </span>
              }
              className="lg:items-start text-center lg:text-left"
            />

            {/* Philosophy Tenets */}
            <div className="space-y-0">
              {tenets.map((tenet, index) => (
                <div
                  key={tenet.number}
                  className="group relative border-t border-background/10 py-10 first:border-t-0 first:pt-0"
                >
                  {/* Tenet Content */}
                  <div className="flex gap-6 md:gap-8">
                    {/* Number */}
                    <div className="flex flex-col items-center gap-3 pt-1">
                      <span className="text-2xl md:text-3xl font-heading font-bold text-background/10 group-hover:text-liminal-secondary/60 transition-colors duration-700 tabular-nums">
                        {tenet.number}
                      </span>
                      {index < tenets.length - 1 && (
                        <div className="w-px flex-1 bg-background/10 group-hover:bg-liminal-secondary/30 transition-colors duration-700" />
                      )}
                    </div>

                    {/* Text */}
                    <div className="space-y-4 flex-1">
                      <h3 className="text-xl md:text-2xl font-bold font-heading tracking-tight text-background/90 group-hover:text-background transition-colors duration-500">
                        {tenet.title}
                      </h3>
                      <p className="text-background/40 font-light leading-relaxed group-hover:text-background/60 transition-colors duration-500 max-w-lg">
                        {tenet.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePhilosophy;
