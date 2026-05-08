import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

// AboutPhilosophy Component
const AboutPhilosophy = () => {
  return (
    <section
      id="philosophy-vision"
      aria-labelledby="philosophy-heading"
      className="relative overflow-hidden bg-[#141F0A] text-background"
    >
      {/* Subtle Blueprint Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-size-[60px_60px]" />

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-175 lg:min-h-200">
        {/* Left: Full-Height Image */}
        <div className="relative aspect-square lg:aspect-auto overflow-hidden group">
          <Image
            src="/assets/about-us/vision_man.png"
            alt="Liminal Design Vision — Crafting Timeless Spaces"
            fill
            className="object-cover transition-transform duration-1500 group-hover:scale-105"
          />
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-[#141F0A]/60 hidden lg:block" />
          <div className="absolute inset-0 bg-linear-to-t from-[#141F0A]/80 to-transparent lg:hidden" />

          {/* Corner Markers */}
          <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-background/20" />
          <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-background/20" />
        </div>

        {/* Right: Content — Vision & Mission */}
        <div className="relative z-10 flex flex-col justify-center px-8 py-20 md:px-16 lg:px-20 xl:px-28 gap-24">
          {/* Vertical Connecting Line (Subtle) */}
          <div className="absolute left-14 md:left-22 lg:left-26 xl:left-34 top-32 bottom-32 w-px bg-linear-to-b from-transparent via-background/10 to-transparent hidden sm:block" />

          {/* Vision Block — 01 */}
          <div className="relative">
            <SectionHeader
              variant="simple"
              badgeText="01 / Our Vision"
              title={
                <>
                  The Art of{" "}
                  <span className="italic font-serif font-light underline underline-offset-12 decoration-1 decoration-background/20">
                    Refined Living
                  </span>
                </>
              }
              description="We envision a future where interior architecture transcends aesthetic beauty to become a fundamental catalyst for inspiration, tranquility, and profound human connection—shaping environments that resonate with the soul."
              descriptionClassName="text-background/60"
              badgeClassName="border-background/15 text-background"
            />
          </div>

          {/* Mission Block — 02 */}
          <div className="relative">
            <SectionHeader
              variant="simple"
              badgeText="02 / Our Mission"
              title={
                <>
                  The Soul of{" "}
                  <span className="italic font-serif font-light underline underline-offset-12 decoration-1 decoration-background/20">
                    Precision
                  </span>
                </>
              }
              description="To bridge the void between architectural vision and the visceral experience of a space. We synthesize surgical precision with creative intuition to deliver environments that are as structurally enduring as they are emotionally evocative."
              descriptionClassName="text-background/60"
              badgeClassName="border-background/15 text-background"
            />

            {/* Mission Pillars — Refined Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-background/5 mt-10">
              {[
                { label: "Intent", value: "Bespoke Design" },
                { label: "Craft", value: "Meticulous Detail" },
                { label: "Legacy", value: "Enduring Value" },
              ].map((pillar) => (
                <div key={pillar.label} className="group/pillar">
                  <span className="text-[10px] font-mono tracking-[0.4em] text-background/30 uppercase block mb-3 group-hover/pillar:text-liminal-secondary transition-colors duration-500">
                    {pillar.label}
                  </span>
                  <p className="text-base font-medium text-background/70 tracking-tight group-hover/pillar:text-background transition-colors duration-300">
                    {pillar.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;
