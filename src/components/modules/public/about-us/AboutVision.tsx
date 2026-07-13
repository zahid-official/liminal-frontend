import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

// AboutVision Component
const AboutVision = () => {
  return (
    <section
      id="vision"
      aria-labelledby="vision-heading"
      className="relative overflow-hidden bg-liminal-dark text-background"
    >
      {/* Subtle Blueprint Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-size-[32px_32px]" />

      {/* Design Vision Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Full-Height Image */}
        <div className="relative aspect-square lg:aspect-auto overflow-hidden group">
          <Image
            src="/assets/about-us/vision_man.png"
            alt="Liminal Design Vision - Crafting Timeless Spaces"
            fill
            className="object-cover transition-transform duration-1500 group-hover:scale-105"
          />
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-liminal-dark/60 hidden lg:block" />
          <div className="absolute inset-0 bg-linear-to-t from-liminal-dark/80 to-transparent lg:hidden" />

          {/* Corner Markers */}
          <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-background/20" />
          <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-background/20" />
        </div>

        {/* Right: Vision */}
        <div className="relative z-10 flex items-center justify-center py-20 md:py-28 lg:py-32 px-4 sm:px-8">
          <div className="space-y-12 max-w-2xl">
            <SectionHeader
              badgeText="Our Vision"
              headingId="vision-heading"
              title={
                <>
                  Shaping the{" "}
                  <span className="italic font-serif font-light underline underline-offset-8 decoration-1">
                    Future of Living
                  </span>
                </>
              }
              variant="inline"
              badgeClassName="text-background/60"
              badgeDotClassName="bg-background/20"
              titleClassName="text-background leading-[1.1]"
            />

            {/* Vision Statement */}
            <div className="space-y-6 text-background/60 leading-relaxed font-light">
              <p>
                Our vision is dedicated to shaping the future of living through
                design that prioritizes human well-being and emotional
                resonance. We believe that every interior should serve as a
                catalyst for a better life, elevating daily rituals into moments
                of meaning.
              </p>

              <p>
                We are committed to redefining spatial standards across South
                Asia and beyond. By blending innovation with soulful
                craftsmanship, we ensure that the spaces we create today become
                the enduring foundations for how we live, work and thrive
                tomorrow.
              </p>
            </div>

            {/* Vision Quote */}
            <div className="relative pt-8 max-w-xl">
              <div className="w-12 h-px bg-liminal-secondary/50 mb-6" />
              <blockquote className="text-xl md:text-2xl italic font-serif text-background leading-relaxed">
                &quot;To shape the future of living is to design the silent
                rhythms of the soul, creating sanctuaries where life truly
                begins.&quot;
              </blockquote>
              <span className="block mt-4 text-[10px] uppercase tracking-[0.3em] text-background/30 font-bold">
                The Liminal Manifesto
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVision;
