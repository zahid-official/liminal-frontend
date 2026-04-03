// Logo Props
interface LogoProps {
  isScrolled?: boolean;
}

// Logo Component
const Logo = ({ isScrolled = true }: LogoProps) => {
  return (
    <div>
      <h1
        className={`text-4xl font-semibold transition-colors duration-300 ${
          isScrolled ? "" : "text-white"
        }`}
      >
        Liminal
      </h1>
    </div>
  );
};

export default Logo;
