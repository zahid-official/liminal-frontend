import AnimatedButton from "@/components/shared/AnimatedButton";
import LiminalButton from "@/components/shared/LiminalButton";
import Image from "next/image";
import Link from "next/link";

// HomeHero Component
const HomeHero = () => {
  return (
    <section
      id="hero"
      aria-label="Hero | Liminal Interior Design Studio"
      className="min-h-screen flex flex-col justify-between relative overflow-hidden bg-foreground"
    >
      {/* Background Image with Slow Zoom */}
      <div className="absolute inset-0 z-0 animate-slow-zoom overflow-hidden will-change-transform transform-gpu">
        <Image
          src="/assets/home/hero-image.jpg"
          alt="Liminal: Ultra-modern symmetrical luxury villa interior with travertine and walnut wood"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Base dark overlay */}
        <div className="absolute inset-0 bg-foreground/40 mix-blend-multiply" />
        {/* Top/Bottom gradient for legibility and focus */}
        <div className="absolute inset-0 bg-linear-to-b from-foreground/90 via-foreground/30 to-foreground/90" />
        {/* Radial vignette for cinematic focus */}
        <div className="absolute inset-0 bg-radial-vignette opacity-60" />
      </div>

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay z-10 bg-noise" />

      {/* Editorial Statement */}
      <div className="custom-container relative z-20 flex-1 flex flex-col justify-center">
        <div className="max-w-5xl mx-auto text-center space-y-8 pt-8">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-6 opacity-0 animate-hero-fade-up">
            <div className="w-12 h-px bg-background/30" />
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-background/50">
              Interior Design & Architecture
            </span>
            <div className="w-12 h-px bg-background/30" />
          </div>

          {/* Headline */}
          <h1 className="group text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-bold leading-[0.95] tracking-tight font-heading text-background opacity-0 animate-hero-fade-up delay-300">
            We Design Spaces
            <br />
            That{" "}
            <span className="italic font-serif font-light text-liminal-secondary inline-block group-hover:scale-[1.05] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-default transform-gpu will-change-transform backface-hidden">
              Breathe
            </span>{" "}
            With
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Intention
          </h1>

          {/* Body */}
          <p className="text-background/40 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto opacity-0 animate-hero-fade-up delay-500">
            A premium interior design studio crafting immersive, timeless spaces
            where light, material and human intention converge.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3 opacity-0 animate-hero-fade-up delay-600">
            <Link href="/projects">
              <AnimatedButton className="bg-background hover:border-background">
                Explore Our Work
              </AnimatedButton>
            </Link>
            <Link href="/about-us">
              <LiminalButton
                variant="outline"
                showIcon={false}
                className="text-background/70 hover:text-background hover:bg-background/5 border-background/15 hover:border-background/30 shadow-none"
              >
                Our Philosophy
              </LiminalButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-0 animate-hero-fade-up delay-1000">
        <div className="w-px h-8 bg-linear-to-b from-background/40 to-transparent animate-scroll-line origin-top" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-background/30 font-bold">
          Scroll
        </span>
      </div>
    </section>
  );
};

export default HomeHero;
