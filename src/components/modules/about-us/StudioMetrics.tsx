import SectionBadge from "@/components/shared/SectionBadge";

// Studio metrics data
const metrics = [
  {
    value: "150",
    suffix: "+",
    label: "Projects Delivered",
    sublabel: "Completed Works",
    index: "01",
  },
  {
    value: "12",
    suffix: "+",
    label: "Years of Craft",
    sublabel: "Since 2013",
    index: "02",
  },
  {
    value: "40",
    suffix: "+",
    label: "Design Specialists",
    sublabel: "Creative Minds",
    index: "03",
  },
  {
    value: "98",
    suffix: "%",
    label: "Client Satisfaction",
    sublabel: "Referral Rate",
    index: "04",
  },
];

// StudioMetrics Component — Pure Typographic Counter Ribbon
const StudioMetrics = () => {
  return (
    <section
      id="studio-metrics"
      aria-label="Studio statistics and achievements"
      className="py-20 md:py-24 relative overflow-hidden bg-background"
    >
      {/* Horizontal rule above */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      {/* Horizontal rule below */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />

      <div className="custom-container">
        {/* Top badge */}
        <div className="flex items-center justify-between mb-14">
          <SectionBadge text="By the Numbers" />
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.4em] hidden sm:block">
            03 — Metrics
          </span>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 relative">
          {metrics.map((metric, i) => (
            <div
              key={metric.index}
              className="relative group px-8 py-10 lg:py-12 first:pl-0 flex flex-col gap-3"
            >
              {/* Vertical divider — every item except last on each row */}
              {i !== metrics.length - 1 && (
                <div className="absolute top-0 right-0 bottom-0 w-px bg-border hidden lg:block" />
              )}
              {/* Mobile: bottom border for first row */}
              {i < 2 && (
                <div className="absolute bottom-0 left-4 right-4 h-px bg-border lg:hidden" />
              )}

              {/* Index number */}
              <span className="font-mono text-[9px] text-muted-foreground/60 uppercase tracking-[0.4em] mb-1">
                {metric.index}
              </span>

              {/* Large number */}
              <div className="flex items-start gap-1 leading-none">
                <span className="text-6xl sm:text-7xl lg:text-8xl font-heading font-bold text-foreground tracking-tight leading-none tabular-nums group-hover:text-liminal-secondary transition-colors duration-700">
                  {metric.value}
                </span>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-liminal-secondary leading-none mt-1">
                  {metric.suffix}
                </span>
              </div>

              {/* Label */}
              <div className="space-y-1">
                <p className="text-base font-semibold text-foreground tracking-tight">
                  {metric.label}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-liminal-secondary">
                  {metric.sublabel}
                </p>
              </div>

              {/* Animated bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-liminal-secondary transition-all duration-700 ease-in-out group-hover:w-full lg:block hidden" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioMetrics;
