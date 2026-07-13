import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

// AnimatedButton Component
const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative overflow-hidden inline-flex items-center gap-4 border border-border/80 rounded-full pl-6 pr-1.5 py-1.5 group/btn hover:border-liminal-secondary transition-colors duration-500 w-fit cursor-pointer text-sm text-foreground transform-gpu backface-hidden",
          className,
        )}
        {...props}
      >
        {/* Pill-Stretching Background */}
        <span className="absolute right-1.5 top-1.5 bottom-1.5 w-9 bg-liminal-secondary rounded-full transition-[width] duration-400 ease-out group-hover/btn:w-[calc(100%-12px)] group-hover/btn:duration-500 group-hover/btn:ease-[cubic-bezier(0.22,1,0.36,1)] z-0 transform-gpu backface-hidden will-change-[width]" />

        <span className="relative z-10 font-semibold text-inherit group-hover/btn:text-background transition-colors duration-500 transform-gpu backface-hidden will-change-transform">
          {children}
        </span>

        <span className="relative z-10 size-9 flex shrink-0 items-center justify-center transform-gpu backface-hidden">
          <ArrowUpRight className="size-4 text-background group-hover/btn:rotate-45 transition-transform duration-400 transform-gpu will-change-transform" />
        </span>
      </button>
    );
  }
);
AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;
