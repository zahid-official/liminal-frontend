import Image from "next/image";
import SectionBadge from "@/components/shared/SectionBadge";

// Principle tag component
const PrincipleTag = ({
  text,
  light = false,
}: {
  text: string;
  light?: boolean;
}) => (
  <span
    className={`text-[10px] font-mono font-bold uppercase tracking-[0.3em] px-3 py-1.5 border ${
      light
        ? "border-white/15 text-white/60 bg-white/5"
        : "border-liminal-secondary/30 text-liminal-secondary bg-liminal-secondary/10"
    }`}
  >
    {text}
  </span>
);

// PhilosophyVision Component — Dark Editorial Dual-Column with Diamond Divider
const PhilosophyVision = () => {
  const philosophyPrinciples = [
    "Intentional Beauty",
    "Sensory Design",
    "Material Honesty",
  ];

  const visionPrinciples = ["Future-Forward", "Cultural Depth", "Enduring Form"];

  return (
    <section
      id="philosophy-vision"
      aria-label="Our philosophy and vision"
      className="py-20 md:py-28 lg:py-36 bg-[#141f0a] text-white relative overflow-hidden"
    >
      {/* Architectural corner brackets */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-white/10 hidden lg:block" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-white/10 hidden lg:block" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-white/10 hidden lg:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-white/10 hidden lg:block" />

      {/* Large decorative background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-black font-heading text-white/[0.018] uppercase tracking-wider leading-none">
          LIMINAL
        </span>
      </div>

      <div className="custom-container relative z-10">
        {/* Top badge row */}
        <div className="flex items-center justify-between mb-16 lg:mb-24">
          <SectionBadge
            text="Philosophy & Vision"
            className="bg-white/5 border-white/15 text-white"
            dotClassName="bg-liminal-secondary"
          />
          <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.4em] hidden sm:block">
            02 — Identity
          </span>
        </div>

        {/* Main dual-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-16 lg:gap-0 items-start">

          {/* Left: Philosophy Column */}
          <div className="space-y-10 lg:pr-16 xl:pr-24">
            {/* Image thumbnail */}
            <div className="relative aspect-video overflow-hidden group">
              <Image
                src="/assets/about-us/philosophy.png"
                alt="Liminal design philosophy"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="font-mono text-[9px] tracking-[0.4em] text-white/50 uppercase">
                  Philosophy
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
                Design as a{" "}
                <span className="italic font-serif font-light text-liminal-secondary">
                  Discipline
                </span>
              </h2>
              <p className="text-white/60 leading-relaxed font-light text-base">
                We approach every project as an act of deep listening. Our
                philosophy is rooted in the belief that true design solves
                invisible problems — the emotional dissonance of a poorly
                proportioned room, the anxiety of an uninviting entrance, the
                coldness of a space without soul.
              </p>
              <p className="text-white/60 leading-relaxed font-light text-base">
                Every decision — from the angle of natural light to the grain
                direction of timber — is made with intention, not convention.
              </p>

              {/* Principle tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {philosophyPrinciples.map((p) => (
                  <PrincipleTag key={p} text={p} light />
                ))}
              </div>
            </div>
          </div>

          {/* Center: Vertical Divider with Diamond */}
          <div className="hidden lg:flex flex-col items-center py-4 px-8 xl:px-12">
            <div className="w-px bg-white/10 flex-1" />
            {/* Diamond ornament */}
            <div className="my-4 w-3 h-3 border border-liminal-secondary rotate-45 shrink-0" />
            <div className="my-2 w-1.5 h-1.5 bg-liminal-secondary rotate-45 shrink-0" />
            <div className="my-4 w-3 h-3 border border-liminal-secondary rotate-45 shrink-0" />
            <div className="w-px bg-white/10 flex-1" />
          </div>

          {/* Horizontal divider on mobile */}
          <div className="lg:hidden flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10" />
            <div className="w-3 h-3 border border-liminal-secondary rotate-45" />
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Right: Vision Column */}
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* Image thumbnail */}
            <div className="relative aspect-video overflow-hidden group">
              <Image
                src="/assets/about-us/vision.png"
                alt="Liminal vision for the future of design"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="font-mono text-[9px] tracking-[0.4em] text-white/50 uppercase">
                  Vision
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
                Spaces that{" "}
                <span className="italic font-serif font-light text-liminal-secondary">
                  Outlive Trends
                </span>
              </h2>
              <p className="text-white/60 leading-relaxed font-light text-base">
                Our vision is a Bangladesh where designed environments are held
                to the same standard as the world&apos;s great interiors — where
                every residence, office, and public space communicates cultural
                richness and global sophistication.
              </p>
              <p className="text-white/60 leading-relaxed font-light text-base">
                We are building a legacy: a body of work that a century from now
                still demonstrates what it means to design with integrity, craft,
                and care for those who inhabit these spaces.
              </p>

              {/* Principle tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {visionPrinciples.map((p) => (
                  <PrincipleTag key={p} text={p} light />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyVision;
