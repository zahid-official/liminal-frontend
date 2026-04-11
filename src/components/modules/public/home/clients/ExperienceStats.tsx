"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface StatItem {
  id?: string;
  value: string;
  title: string;
  description: string;
}

interface ExperienceStatsProps {
  statsData: StatItem[];
}

// ExperienceStats Component
const ExperienceStats = ({ statsData }: ExperienceStatsProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {statsData.map((stat, index) => {
          const match = String(stat.value).match(/^(\d+)(.*)$/);
          const number = match ? parseInt(match[1], 10) : 0;
          const suffix = match ? match[2] : "";

          return (
            <div
              key={stat.id || index}
              className="flex flex-col lg:gap-4 gap-1.5 relative group text-center lg:text-left"
            >
              <div className="lg:space-y-4">
                <span className="text-4xl lg:text-5xl font-semibold text-foreground tabular-nums block min-h-[1em]">
                  {inView ? (
                    <CountUp
                      end={number}
                      duration={3}
                      separator=","
                      useEasing={true}
                      suffix={suffix}
                    />
                  ) : (
                    <span>0{suffix}</span>
                  )}
                </span>

                <div className="max-lg:hidden h-px w-full bg-border/50" />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg lg:text-xl font-semibold text-foreground tracking-tight">
                  {stat.title}
                </h3>
                <p className="max-lg:text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceStats;
