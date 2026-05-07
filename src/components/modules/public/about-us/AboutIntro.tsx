import Image from "next/image";
import SectionBadge from "@/components/shared/SectionBadge";

// AboutIntro Component — Cinematic Studio Introduction
const AboutIntro = () => {
  return (
    <section
      id="about-intro"
      aria-labelledby="intro-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-stretch">
          {/* Left: Cinematic Image (60%) */}
          <div className="lg:col-span-7 relative group">
            {/* Architectural Corner Brackets */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t border-l border-liminal-secondary/30 z-10 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b border-r border-liminal-secondary/30 z-10 pointer-events-none" />

            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] lg:min-h-[560px] overflow-hidden">
              <Image
                src="/assets/about-us/studio-story.png"
                alt="Liminal Interior Design Studio — Premium design spaces in Dhaka"
                fill
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                priority
              />
              {/* Cinematic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/5" />
            </div>

            {/* Establishment Badge — anchored bottom-left of image */}
            <div className="absolute bottom-6 left-6 z-10">
              <div className="bg-white/95 backdrop-blur-sm border border-border/40 px-5 py-3 space-y-0.5">
                <span className="text-[9px] font-mono tracking-[0.4em] text-muted-foreground uppercase block">
                  Established
                </span>
                <span className="text-sm font-bold tracking-tight font-heading block">
                  2024 · Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Text (40%) */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:pl-16 xl:pl-20 relative">
            {/* Vertical Accent Line */}
            <div className="hidden lg:block absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-liminal-secondary/40 to-transparent" />

            <div className="space-y-8">
              <SectionBadge text="Who We Are" />

              <h2
                id="intro-heading"
                className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.1] tracking-tight font-heading"
              >
                Where Architecture
                <br />
                Meets{" "}
                <span className="italic font-serif font-light text-liminal-secondary">
                  Emotion
                </span>
              </h2>

              {/* Pull Quote — Oversized */}
              <blockquote className="relative pl-6 border-l-2 border-liminal-secondary/30">
                <p className="text-lg sm:text-xl leading-relaxed text-foreground/80 font-light italic font-serif">
                  &ldquo;We don&apos;t decorate rooms. We compose atmospheres
                  where every surface, shadow, and texture tells a story.&rdquo;
                </p>
              </blockquote>

              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed font-light">
                  Liminal is a premier interior design studio where architectural
                  precision converges with emotional intelligence. Based in
                  Dhaka, we craft spaces that transcend aesthetics — creating
                  environments that resonate with the people who inhabit them.
                </p>
                <p className="text-muted-foreground leading-relaxed font-light">
                  From private residences to commercial landmarks, our work sits
                  at the threshold between the tangible and the felt — the
                  liminal space where design becomes experience.
                </p>
              </div>

              {/* Studio Metrics — Compact */}
              <div className="flex gap-10 pt-6 border-t border-border/40">
                {[
                  { value: "50+", label: "Projects Delivered" },
                  { value: "35+", label: "Satisfied Clients" },
                  { value: "8+", label: "Design Awards" },
                ].map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <span className="text-2xl sm:text-3xl font-bold font-heading text-liminal-secondary">
                      {stat.value}
                    </span>
                    <p className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
