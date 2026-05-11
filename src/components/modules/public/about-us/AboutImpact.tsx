"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/shared/SectionHeader";

// Diamond Ornament Component
const DiamondOrnament = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div
    className={cn(
      "relative w-4 h-4 rotate-45 border border-liminal-secondary/40 flex items-center justify-center",
      className,
    )}
    style={style}
  >
    <div className="w-1.5 h-1.5 bg-liminal-secondary" />
  </div>
);

// Impact Stats Data
const stats = [
  {
    value: 150,
    suffix: "+",
    label: "Projects Completed",
    detail: "Residential & Commercial",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years of Craft",
    detail: "Since 2020",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention",
    detail: "Repeat & Referral",
  },
  {
    value: 40,
    suffix: "+",
    label: "Design Awards",
    detail: "National & International",
  },
];

// AboutImpact Component
const AboutImpact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="relative py-24 lg:py-32 bg-[#0D1408] text-background overflow-hidden">
      {/* Background Layering */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#2A3F1A,transparent_60%)]" />

      {/* Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-liminal-secondary/5 skew-x-12 translate-x-1/2 pointer-events-none blur-3xl" />

      {/* Floating Ornaments */}
      <DiamondOrnament className="absolute top-20 left-[10%] opacity-20 animate-pulse" />
      <DiamondOrnament
        className="absolute bottom-40 right-[15%] opacity-20 animate-bounce"
        style={{ animationDuration: "4s" }}
      />

      {/* Decorative Circle */}
      <div className="absolute top-1/2 left-[-6%] w-64 h-64 bg-liminal-secondary/5 border border-background/5 rounded-full pointer-events-none" />

      {/* Main Content Container */}
      <div className="custom-container relative z-10" ref={ref}>
        {/* Section Header */}
        <SectionHeader
          variant="manifesto"
          badgeText="Our Impact"
          title={
            <>
              Numbers That{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Speak
              </span>
            </>
          }
          description="Behind every number is a story of trust, dedication, and the relentless pursuit of design excellence."
          titleClassName="text-background"
          descriptionClassName="text-background/60 max-w-xl -mt-4"
          badgeClassName="text-background/60"
          badgeDotClassName="bg-background/30"
        />

        {/* stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 mt-12 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "group relative flex flex-col items-center text-center p-8 lg:p-12 transition-all duration-1000",
                "bg-background/2 border border-background/5 backdrop-blur-xs lg:bg-transparent lg:border-none lg:backdrop-blur-none",
                "hover:bg-background/5 hover:border-background/10 transition-all duration-500",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Vertical Divider for Desktop */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-px bg-linear-to-b from-transparent via-background/10 to-transparent" />
              )}

              <div className="relative mb-6">
                <div className="text-5xl lg:text-7xl px-2 font-heading font-bold tracking-tighter bg-linear-to-b from-background to-liminal-secondary/20 bg-clip-text text-transparent transition-all duration-700">
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={3}
                      suffix={stat.suffix}
                    />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                {/* Subtle Glow behind number */}
                <div className="absolute inset-0 bg-liminal-secondary/20 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10" />
              </div>

              <div className="w-8 h-px bg-liminal-secondary/60 mb-6 group-hover:w-16 transition-all duration-500" />

              <div className="space-y-2">
                <p className="text-lg font-heading font-medium tracking-tight text-background/90">
                  {stat.label}
                </p>
                <span className="text-[10px] uppercase tracking-[0.3em] text-background/40 font-bold block">
                  {stat.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Philosophy Line */}
        <div
          className={cn(
            " p-12 lg:p-16 relative overflow-hidden group/quote transition-all duration-1000 delay-500",
            "bg-background/2 border border-background/5 backdrop-blur-xs",
            inView ? "opacity-100" : "opacity-0",
          )}
        >
          {/* Decorative accents for the quote box */}
          <div className="absolute top-0 left-0 w-px h-8 bg-liminal-secondary/40" />
          <div className="absolute top-0 left-0 w-8 h-px bg-liminal-secondary/40" />
          <div className="absolute bottom-0 right-0 w-px h-8 bg-liminal-secondary/40" />
          <div className="absolute bottom-0 right-0 w-8 h-px bg-liminal-secondary/40" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="flex-1 space-y-6">
              <DiamondOrnament className="opacity-40 absolute -top-8 left-0" />
              <h3 className="text-2xl lg:text-4xl font-heading font-light max-w-2xl text-center lg:text-left leading-tight italic text-background/90">
                &quot;We don&apos;t just design interiors; we curate the
                intersection of lifestyle and architecture.&quot;
              </h3>
            </div>

            <div className="hidden lg:block w-px h-24 bg-background/10 mx-12" />

            <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-3">
              <span className="text-liminal-secondary/60 text-[10px] uppercase tracking-[0.4em] font-bold">
                Established 2020
              </span>
              <div className="space-y-1">
                <span className="text-background font-heading font-bold text-xl tracking-tight block">
                  Liminal Architectural Collective
                </span>
                <span className="text-background/40 text-[10px] uppercase tracking-[0.2em]">
                  Dhaka &bull; Timeless Craftsmanship
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Attribution */}
      <div className="absolute bottom-13 left-0 right-0 text-center pointer-events-none">
        <p className="text-[11px] uppercase tracking-[0.3em] text-background/20 font-medium">
          Data reflects our commitment since 2020 — Liminal Design Studio
        </p>
      </div>
    </section>
  );
};

export default AboutImpact;
