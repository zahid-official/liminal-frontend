"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface StatItem {
  label: string;
  value: string;
  suffix: string;
  description: string;
}

interface AboutStatsProps {
  stats: StatItem[];
}

// AboutUsStats Component
const AboutUsStats = ({ stats }: AboutStatsProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="relative">
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-24 lg:gap-0 relative z-10"
      >
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center lg:px-4 lg:border-l first:lg:border-l-0 border-border/40 group transition-all duration-500 py-3"
          >
            <div className="flex flex-col items-center text-center w-full">
              {/* Number Section */}
              <div className="relative flex items-end justify-center">
                {/* Large Background Ghost Number */}
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-8xl font-bold font-heading text-secondary opacity-0 group-hover:opacity-100 transition-all duration-700 select-none">
                  0{idx + 1}
                </span>

                <span className="text-6xl md:text-7xl font-bold font-heading text-foreground tracking-tighter tabular-nums relative z-10 block transition-colors duration-500 group-hover:text-liminal-secondary">
                  {inView ? (
                    <CountUp
                      end={parseInt(stat.value)}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </span>
              </div>

              {/* Responsive Horizontal Divider - Centered in Gap */}
              <div className="w-full relative py-8 flex items-center justify-center">
                <div className="absolute inset-x-0 h-px bg-linear-to-r from-transparent via-border/50 to-transparent lg:via-border" />
                {/* Center Crosshair Point */}
                <div className="w-1.5 h-1.5 rounded-full bg-liminal-secondary/40 relative z-10" />
              </div>

              {/* Label & Description Section */}
              <div className="space-y-4">
                <h4 className="text-sm md:text-base font-bold uppercase tracking-[0.18em] text-foreground leading-tight">
                  {stat.label}
                </h4>
                <p className="text-muted-foreground text-[13px] md:text-sm leading-relaxed max-w-55 mx-auto">
                  {stat.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsStats;
