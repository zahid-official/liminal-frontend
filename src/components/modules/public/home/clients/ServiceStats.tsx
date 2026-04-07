"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    number: 2013,
    suffix: "",
    title: "Years Experience",
    description: "Improving homes with expert craftsmanship for years",
  },
  {
    number: 190,
    suffix: "+",
    title: "Projects Completed",
    description: "Over 250 successful projects delivered with quality and care",
  },
  {
    number: 260,
    suffix: "+",
    title: "Skilled Tradespeople",
    description: "Our team of 30 experts ensures top-quality results",
  },
  {
    number: 328,
    suffix: "+",
    title: "Client Satisfaction",
    description: "All of our clients are satisfied with our work and service",
  },
];

// ServiceStats Component
const ServiceStats = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-18 lg:mt-30">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col lg:gap-4 gap-1.5 relative group text-center lg:text-left"
          >
            <div className="lg:space-y-4">
              <span className="text-4xl lg:text-[40px] font-semibold text-foreground tabular-nums block min-h-[1em]">
                {inView ? (
                  <CountUp
                    end={stat.number}
                    duration={3}
                    separator=","
                    useEasing={true}
                    suffix={stat.suffix}
                  />
                ) : (
                  <span>0{stat.suffix}</span>
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
        ))}
      </div>
    </div>
  );
};

export default ServiceStats;
