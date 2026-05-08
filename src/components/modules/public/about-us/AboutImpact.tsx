"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/shared/SectionHeader";

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
    <section className="relative py-24 lg:py-32 bg-[#141F0A] text-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-background/5 skew-x-12 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border border-background/10 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-4 pointer-events-none bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-size-[32px_32px]" />

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
          className="mb-16"
          titleClassName="text-background"
          descriptionClassName="text-background/60 max-w-xl -mt-4"
          badgeClassName="text-background/60"
          badgeDotClassName="bg-background/30"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center text-center space-y-4 transition-all duration-1000",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl lg:text-7xl font-heading font-bold tracking-tighter text-background">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <div className="w-12 h-1 bg-liminal-secondary rounded-full" />
              <div>
                <p className="max-sm:text-sm font-semibold tracking-tight">
                  {stat.label}
                </p>
                <span className="text-[10px] mt-1 uppercase tracking-[0.25em] text-white/30 font-bold block">
                  {stat.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Philosophy Line */}
        <div
          className={cn(
            "mt-24 lg:mt-32 pt-16 border-t border-background/10 flex flex-col lg:flex-row items-center justify-between gap-12 transition-all duration-1000 delay-500",
            inView ? "opacity-100" : "opacity-0",
          )}
        >
          <h3 className="text-2xl lg:text-3xl font-heading font-light max-w-2xl text-center lg:text-left leading-tight italic">
            &quot;We don&apos;t just design interiors; we curate the
            intersection of lifestyle and architecture.&quot;
          </h3>
          <div className="hidden lg:block w-px h-24 bg-background/20" />
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-2">
            <span className="text-background/60 text-sm uppercase tracking-widest">
              Est. 2012
            </span>
            <span className="text-background font-heading font-bold text-xl tracking-tight">
              Liminal Architectural Collective
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Attribution */}
      <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
        <p className="text-[11px] uppercase tracking-[0.3em] text-background/20 font-medium">
          Data reflects our commitment since 2020 — Liminal Design Studio
        </p>
      </div>
    </section>
  );
};

export default AboutImpact;
