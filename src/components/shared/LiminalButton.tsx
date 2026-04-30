import React from "react";
import { LucideIcon, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface LiminalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  iconClassName?: string;
  showIcon?: boolean;
  animateIcon?: boolean;
}

const LiminalButton = ({
  children,
  icon: Icon = ArrowUpRight,
  variant = "primary",
  className,
  iconClassName,
  showIcon = true,
  animateIcon = true,
  ...props
}: LiminalButtonProps) => {
  const variants = {
    primary:
      "bg-liminal-secondary text-white shadow-xl shadow-liminal-secondary/10 hover:shadow-2xl hover:shadow-liminal-secondary/40",
    outline:
      "bg-transparent border border-border/60 text-foreground hover:bg-zinc-50",
    ghost: "bg-transparent text-foreground hover:bg-zinc-50",
  };

  return (
    <button
      className={cn(
        "group relative flex items-center justify-center overflow-hidden rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98] cursor-pointer",
        "px-7 py-4",
        variants[variant],
        className,
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-3">
        <span className="font-semibold text-[15px] tracking-[0.05em] transition-colors duration-500">
          {children}
        </span>
        {showIcon && Icon && (
          <Icon
            size={16}
            strokeWidth={2}
            className={cn(
              "size-4 transition-transform duration-400 transform-gpu",
              animateIcon && "group-hover:rotate-45",
              iconClassName,
            )}
          />
        )}
      </span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      )}
    </button>
  );
};

export default LiminalButton;
