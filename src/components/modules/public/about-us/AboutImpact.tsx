"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

// Impact Metrics Data
const metrics = [
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

// AboutImpact Component — Dark Section with Animated Counters
const AboutImpact = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      id="about-impact"
      aria-labelledby="impact-heading"
      className="py-20 md:py-28 lg:py-36 relative overflow-hidden bg-[#141F0A] text-white"
      ref={ref}
    >
      {/* Blueprint Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-liminal-secondary/5 blur-3xl pointer-events-none" />

      <div className="custom-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24 space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-white/20" />
            <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-white/60">
              Our Impact
            </span>
            <div className="w-12 h-px bg-white/20" />
          </div>

          <h2
            id="impact-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-[1.05]"
          >
            Numbers That{" "}
            <span className="italic font-serif font-light text-liminal-secondary">
              Speak
            </span>
          </h2>

          <p className="max-w-xl mx-auto text-white/50 text-[16px] sm:text-lg leading-relaxed font-light">
            The measurable impact of our commitment to design excellence.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 max-w-5xl mx-auto">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-[#141F0A] p-8 md:p-12 text-center space-y-4 group hover:bg-white/[0.03] transition-colors duration-700"
            >
              {/* Counter */}
              <div className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tighter">
                {inView ? (
                  <CountUp
                    end={metric.value}
                    duration={2.5}
                    delay={idx * 0.2}
                    suffix={metric.suffix}
                  />
                ) : (
                  <span>0{metric.suffix}</span>
                )}
              </div>

              {/* Label */}
              <h3 className="text-sm md:text-base font-semibold tracking-tight">
                {metric.label}
              </h3>

              {/* Detail */}
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-bold block">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Attribution */}
        <div className="mt-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/20 font-medium">
            Data reflects our commitment since 2020 — Liminal Design Studio
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutImpact;
