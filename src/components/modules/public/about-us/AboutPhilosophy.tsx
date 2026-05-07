import SectionBadge from "@/components/shared/SectionBadge";
import Image from "next/image";

// AboutPhilosophy Component
const AboutPhilosophy = () => {
  return (
    <section
      id="philosophy-vision"
      aria-labelledby="philosophy-heading"
      className="py-20 md:py-28 lg:py-32 bg-[#141f0a] text-background relative overflow-hidden"
    >
      {/* Background Decorative Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 pointer-events-none">
        <div className="absolute inset-0 border border-background/5 rounded-full" />
        <div className="absolute inset-16 border border-dashed border-background/10 rounded-full animate-[spin_120s_linear_infinite]" />
        <div className="absolute inset-32 border border-background/5 rounded-full" />
      </div>

      <div className="custom-container relative z-10">
        {/* Section Badge */}
        <div className="text-center mb-16 lg:mb-24">
          <SectionBadge
            text="Our Beliefs"
            className="border-background/15 text-background/90 mx-auto"
            dotClassName="bg-liminal-secondary"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 relative">
          {/* Vertical Glowing Divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-10">
            <div className="w-px h-full bg-linear-to-b from-transparent via-liminal-secondary/50 to-transparent" />
            {/* Diamond Ornament */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-4 h-4 flex items-center justify-center">
                <div className="absolute inset-0 border border-liminal-secondary/40 rotate-45" />
                <div className="w-1.5 h-1.5 bg-liminal-secondary rotate-45 shadow-[0_0_15px_rgba(110,120,95,0.8)]" />
              </div>
            </div>
          </div>

          {/* LEFT: Philosophy */}
          <div className="lg:pr-16 xl:pr-24 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-liminal-secondary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-liminal-secondary">
                  Philosophy
                </span>
              </div>
              <h2
                id="philosophy-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight font-heading"
              >
                Design Is a{" "}
                <span className="italic font-serif font-light">
                  Conversation
                </span>
              </h2>
              <p className="text-background/60 text-[16px] leading-relaxed font-light max-w-lg">
                We believe that exceptional spaces are born from a deep
                understanding of how people live, work, and dream. Our
                philosophy centers on the dialogue between materiality and
                emotion, where every texture, proportion, and light source
                serves a purpose beyond the visual.
              </p>
            </div>

            {/* Philosophy Image */}
            <div className="relative aspect-4/3 overflow-hidden group">
              <Image
                src="/assets/about-us/philosophy.png"
                alt="Liminal Design Philosophy - Materiality and craftsmanship"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* linear Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#141f0a]/60 via-transparent to-transparent" />

              {/* Corner Tags */}
              <div className="absolute bottom-4 left-4 text-[9px] font-bold uppercase tracking-[0.3em] text-background/50">
                Material Philosophy
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-liminal-secondary/40" />
            </div>

            {/* Philosophy Quote */}
            <div className="border-l border-background/10 pl-6 py-2">
              <p className="text-background/50 text-sm italic font-light leading-relaxed">
                &ldquo;Every material has a story. Our role is to listen and let
                that story unfold within the space.&rdquo;
              </p>
            </div>
          </div>

          {/* RIGHT: Vision */}
          <div className="lg:pl-16 xl:pl-24 space-y-10 lg:pt-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-liminal-secondary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-liminal-secondary">
                  Vision
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight font-heading">
                Redefining{" "}
                <span className="italic font-serif font-light">Spatial</span>{" "}
                Narratives
              </h3>
              <p className="text-background/60 text-[16px] leading-relaxed font-light max-w-lg">
                We view environments as living narratives. Our vision is to
                redefine these spatial stories by harmonizing materiality and
                emotion, uniting sustainable innovation and local craftsmanship
                to script atmospheres that resonate far beyond the visual
                threshold and inspire the next generation.
              </p>
            </div>

            {/* Vision Image */}
            <div className="relative aspect-4/3 overflow-hidden group">
              <Image
                src="/assets/about-us/vision.png"
                alt="Liminal Vision - The future of spatial design"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* linear Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#141f0a]/60 via-transparent to-transparent" />

              {/* Corner Tags */}
              <div className="absolute bottom-4 right-4 text-[9px] font-bold uppercase tracking-[0.3em] text-background/50">
                Forward Thinking
              </div>
              <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-liminal-secondary/40" />
            </div>

            {/* Vision Pillars */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {["Sustainability", "Innovation", "Craftsmanship"].map(
                (pillar, i) => (
                  <div
                    key={i}
                    className="text-center py-4 border border-background/10 hover:border-liminal-secondary/30 transition-colors duration-500"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-background/50">
                      {pillar}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;
