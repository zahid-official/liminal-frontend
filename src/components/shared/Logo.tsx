import { cn } from "@/lib/utils";

// Logo Props
interface LogoProps {
  isScrolled?: boolean;
  className?: string;
}

// Logo Component
const Logo = ({ isScrolled = true, className }: LogoProps) => {
  return (
    <span
      className={cn(
        "text-4xl font-heading font-semibold transition-colors duration-300",
        isScrolled ? "text-foreground" : "text-background",
        className
      )}
    >
      Liminal
    </span>
  );
};

export default Logo;
