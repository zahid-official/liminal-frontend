// Logo Props
interface LogoProps {
  isScrolled?: boolean;
}

// Logo Component
const Logo = ({ isScrolled = true }: LogoProps) => {
  return (
    <span
      className={`text-4xl font-heading font-semibold transition-colors duration-300 ${
        isScrolled ? "text-foreground" : "text-white"
      }`}
    >
      Liminal
    </span>
  );
};

export default Logo;
