import AnimatedButton from "@/components/shared/AnimatedButton";
import LiminalButton from "@/components/shared/LiminalButton";
import Image from "next/image";
import Link from "next/link";

// HomeHero Component
const HomeHero = () => {
  return (
    <section
      id="hero"
      aria-label="Hero — Liminal Interior Design Studio"
      className="min-h-screen flex flex-col justify-between relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/home/hero-image.jpg"
          alt="Liminal — Ultra-modern symmetrical luxury villa interior with travertine and walnut wood"
          fill
          priority
          className="object-cover"
        />
        {/* Editorial Dark Overlay */}
        <div className="absolute inset-0 bg-foreground/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-b from-foreground/90 via-foreground/60 to-foreground/90" />
      </div>

      {/* Subtle Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Editorial Statement */}
      <div className="custom-container relative z-20 flex-1 flex flex-col justify-center">
        <div className="max-w-5xl mx-auto text-center space-y-8 pt-8">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-5 opacity-0 animate-hero-fade-up">
            <div className="w-14 h-px bg-background/20 delay-150" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-background/40">
              Interior Design & Architecture
            </span>
            <div className="w-14 h-px bg-background/20" />
          </div>

          {/* Headline */}
          <h1
            className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-bold leading-[0.95] tracking-tight font-heading text-background opacity-0 animate-hero-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            We Design Spaces
            <br />
            That{" "}
            <span className="italic font-serif font-light text-liminal-secondary">
              Breathe
            </span>{" "}
            With
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Intention
          </h1>

          {/* Body */}
          <p
            className="text-background/40 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto opacity-0 animate-hero-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            A premium interior design studio crafting immersive, timeless spaces
            where light, material and human intention converge.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3 opacity-0 animate-hero-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Link href="/projects">
              <AnimatedButton className="text-base tracking-[0.03em] bg-background text-foreground hover:bg-background/90 border-background/20">
                Explore Our Work
              </AnimatedButton>
            </Link>
            <Link href="/about-us">
              <LiminalButton
                variant="outline"
                showIcon={false}
                className="border-background/15 text-background/70 hover:text-background hover:bg-background/5 hover:border-background/30 shadow-none"
              >
                Our Philosophy
              </LiminalButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-8 bg-background/20 animate-scroll-line origin-top" />
      </div>
    </section>
  );
};

export default HomeHero;
