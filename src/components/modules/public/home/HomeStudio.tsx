import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import { Fragment } from "react";

// Studio specs
const specs = [
  { label: "Discipline", value: "Interior Architecture" },
  { label: "Founded", value: "2020" },
  { label: "Location", value: "Dhaka, BD" },
  { label: "Scale", value: "All Project Sizes" },
];

// HomeStudio Component
const HomeStudio = () => {
  return (
    <section
      id="studio"
      aria-labelledby="studio-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Portrait Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative group/img">
              <div className="relative aspect-3/4 overflow-hidden rounded-sm shadow-2xl">
                <Image
                  src="/assets/home/studio-vision.png"
                  alt="Liminal Studio - Interior Architecture and Design"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  quality={100}
                  className="object-cover transition-transform duration-1500 group-hover/img:scale-105 will-change-transform transform-gpu"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/10 to-transparent" />
              </div>

              {/* Architectural Corner Brackets */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-liminal-secondary/30 group-hover/img:border-liminal-secondary/60 transition-colors duration-700" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-liminal-secondary/30 group-hover/img:border-liminal-secondary/60 transition-colors duration-700" />

              {/* Blueprint Label */}
              <div className="absolute top-5 left-5 z-10">
                <span className="text-[9px] font-mono tracking-[0.4em] text-background/70 uppercase bg-foreground/35 backdrop-blur-sm px-3 py-1.5">
                  Est. 2020
                </span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 space-y-8">
            <SectionHeader
              variant="inline"
              badgeText="Our Studio"
              headingId="studio-heading"
              title={
                <>
                  Where Vision <br className="max-xl:hidden" />{" "}
                  <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                    Becomes Presence
                  </span>
                </>
              }
            />

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed font-light max-lg:text-center">
              <p>
                Liminal is a premium interior design studio in Dhaka, dedicated
                to crafting spaces that transcend the ordinary. We believe great
                design doesn&apos;t demand attention. It earns presence through
                the quiet mastery of material, light and proportion.
              </p>

              <blockquote className="border-l-2 border-liminal-secondary/40 pl-6 py-2 italic text-foreground/80 font-serif text-xl">
                &quot;We don&apos;t decorate rooms. We compose environments
                where every surface, shadow and silence has purpose.&quot;
              </blockquote>

              <p>
                Our team of architects, designers and artisans collaborates
                across disciplines to deliver projects that are technically
                precise and emotionally resonant, from intimate residences to
                expansive commercial spaces.
              </p>
            </div>

            {/* Specs Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 pt-2">
              {specs.map((spec, i) => (
                <Fragment key={spec.label}>
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground/60">
                      {spec.label}
                    </span>
                    <p className="text-[11px] font-bold uppercase tracking-wide">
                      {spec.value}
                    </p>
                  </div>
                  {i < specs.length - 1 && (
                    <div className="hidden sm:block w-px h-7 bg-border/50" />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeStudio;
