"use client";

import { Star } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// TestimonialRating Component
const TestimonialRating = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="flex items-center gap-4 shrink-0">
      {/* 4.80 Score with count-up animation */}
      <span className="text-5xl sm:text-[64px] font-bold text-foreground leading-none tracking-tight tabular-nums">
        {inView ? (
          <CountUp end={4.8} decimals={2} duration={3} useEasing={true} />
        ) : (
          <span>0.00</span>
        )}
      </span>

      <div className="flex flex-col gap-1.5 mt-1">
        {/* Star Rating */}
        <div className="flex items-center gap-0.5 bg-liminal-secondary rounded-full py-1 px-2.5 text-white shadow-sm w-fit">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-current" />
          ))}
        </div>

        {/* Total Reviews with count-up animation */}
        <span className="text-[13px] font-semibold text-foreground/80 tracking-tight lowercase">
          {inView ? (
            <CountUp end={2688} separator="," duration={4} useEasing={true} />
          ) : (
            <span>0</span>
          )}{" "}
          reviews
        </span>
      </div>
    </div>
  );
};

export default TestimonialRating;
