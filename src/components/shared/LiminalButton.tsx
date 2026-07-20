import React from "react";
import { LucideIcon, ArrowUpRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LiminalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  iconClassName?: string;
  showIcon?: boolean;
  animateIcon?: boolean;
  isLoading?: boolean;
}

const LiminalButton = ({
  children,
  icon: Icon = ArrowUpRight,
  variant = "primary",
  className,
  iconClassName,
  showIcon = true,
  animateIcon = true,
  isLoading = false,
  disabled,
  ...props
}: LiminalButtonProps) => {
  const variants = {
    primary: "bg-liminal-secondary text-background",
    outline:
      "bg-transparent border border-border/60 text-foreground hover:bg-zinc-50",
    ghost: "bg-transparent text-foreground hover:bg-zinc-50",
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={cn(
        "group relative flex items-center justify-center overflow-hidden rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98] cursor-pointer transform-gpu transform-[translateZ(0)] will-change-transform disabled:opacity-70 disabled:cursor-not-allowed",
        "px-7 min-h-12",
        variants[variant],
        variant === "primary" && [
          !className?.includes("shadow") &&
            "shadow-xl shadow-liminal-secondary/10",
          !className?.includes("shadow") &&
            "hover:shadow-2xl hover:shadow-liminal-secondary/40",
        ],
        className,
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-3 h-full transform-[translateZ(0)] will-change-transform">
        <span className="font-semibold text-[15px] tracking-wider transition-colors duration-500 leading-none">
          {children}
        </span>
        {isLoading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          showIcon &&
          Icon && (
            <Icon
              size={16}
              strokeWidth={2}
              className={cn(
                "size-4 transition-transform duration-400 transform-gpu",
                animateIcon && "group-hover:rotate-45",
                iconClassName,
              )}
            />
          )
        )}
      </span>
      {variant === "primary" && !isLoading && (
        <div className="absolute inset-0 bg-linear-to-r from-background/0 via-background/15 to-background/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      )}
    </button>
  );
};

export default LiminalButton;
