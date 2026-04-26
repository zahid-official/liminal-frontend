import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";

const InteriorPhilosophy = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="custom-container">
        <SectionHeader
          variant="editorial"
          badgeText="Our Philosophy"
          title={
            <>
              Design that <span className="italic font-light">Transcends</span>{" "}
              the Ordinary
            </>
          }
          description="At Liminal, we believe interior design is more than just aesthetics; it's about creating an atmosphere that resonates with the human spirit. Our approach blends architectural precision with emotional intelligence to craft spaces that are both functional and soulful."
        />

        <div className="mt-20 lg:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Side: Text/Details */}
          <div className="lg:col-span-5 space-y-12 order-2 lg:order-1">
            <div className="space-y-8">
              <div className="group relative pl-8 border-l border-border/60 hover:border-liminal-secondary transition-colors duration-500">
                <span className="absolute left-0 top-0 text-[10px] font-bold text-liminal-secondary tracking-widest uppercase">
                  01
                </span>
                <h3 className="text-2xl font-bold font-heading mb-4">
                  Human-Centric Approach
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  We start by understanding the people who will inhabit the
                  space. Every curve, texture, and light source is chosen to
                  enhance the daily experience of the users.
                </p>
              </div>

              <div className="group relative pl-8 border-l border-border/60 hover:border-liminal-secondary transition-colors duration-500">
                <span className="absolute left-0 top-0 text-[10px] font-bold text-liminal-secondary tracking-widest uppercase">
                  02
                </span>
                <h3 className="text-2xl font-bold font-heading mb-4">
                  Material Integrity
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  We prioritize honest materials—stone, wood, metal, and
                  textiles—that age gracefully and provide a tactile richness to
                  every surface.
                </p>
              </div>

              <div className="group relative pl-8 border-l border-border/60 hover:border-liminal-secondary transition-colors duration-500">
                <span className="absolute left-0 top-0 text-[10px] font-bold text-liminal-secondary tracking-widest uppercase">
                  03
                </span>
                <h3 className="text-2xl font-bold font-heading mb-4">
                  Architectural Precision
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  As an architect-led firm, our interiors are seamlessly
                  integrated with the building&apos;s structure, ensuring a
                  cohesive vision from the outside in.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Image with Decorative Elements */}
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            {/* Background Decorative Text */}
            <div className="absolute -top-20 -right-20 text-[15rem] font-bold font-heading text-liminal-secondary/5 select-none -z-10 hidden xl:block">
              PHI
            </div>

            <div className="relative aspect-4/5 md:aspect-video lg:aspect-4/5 overflow-hidden group rounded-sm shadow-2xl">
              <Image
                src="/assets/interior/philosophy.png"
                alt="Interior Design Philosophy"
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
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
