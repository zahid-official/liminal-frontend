import AnimatedButton from "@/components/shared/AnimatedButton";
import Image from "next/image";
import Link from "next/link";

// HomeCTA Component
const HomeCTA = () => {
  return (
    <section
      id="consultation"
      aria-labelledby="consultation-heading"
      className="relative overflow-hidden"
    >
      {/* Full-Bleed Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/home/symmetrical-portico.png"
          alt="Liminal — Architectural excellence"
          fill
          sizes="100vw"
          quality={85}
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-foreground/75" />
        {/* Radial vignette */}
        <div className="absolute inset-0 bg-radial-vignette opacity-50" />
      </div>

      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-10 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[48px_48px]" />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-10 bg-noise" />

      <div className="custom-container relative z-20 py-24 md:py-32 lg:py-44">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-background/20" />
            <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-background/40">
              Begin Your Project
            </span>
            <div className="w-12 h-px bg-background/20" />
          </div>

          {/* Heading */}
          <h2
            id="consultation-heading"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight font-heading text-background"
          >
            Let&apos;s Create Something{" "}
            <span className="italic font-serif font-light underline underline-offset-8 decoration-1 decoration-background/30">
              Extraordinary
            </span>
          </h2>

          {/* Body */}
          <p className="text-background/35 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Every exceptional space begins with a conversation. Tell us about
            your vision, and we&apos;ll show you how Liminal can bring it to
            life — with precision, artistry, and unwavering attention to detail.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            <Link href="/contact">
              <AnimatedButton className="bg-background hover:border-background text-base">
                Book a Consultation
              </AnimatedButton>
            </Link>
            <Link href="/projects">
              <AnimatedButton className="border-background/20 text-background hover:border-background/50 text-base">
                View Our Portfolio
              </AnimatedButton>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-6 text-[10px] uppercase tracking-[0.25em] text-background/20 font-bold">
            <span>Premium Craftsmanship</span>
            <div className="w-px h-4 bg-background/10 hidden sm:block" />
            <span>Bespoke Solutions</span>
            <div className="w-px h-4 bg-background/10 hidden sm:block" />
            <span>Dhaka & Beyond</span>
          </div>
        </div>
      </div>

      {/* Technical Footer Line */}
      <div className="absolute bottom-8 left-0 right-0 custom-container flex justify-between items-center opacity-15 pointer-events-none z-20">
        <div className="h-px w-24 bg-background" />
        <span className="text-[9px] font-mono uppercase tracking-[0.5em] text-background">
          Liminal Interior Design Studio — Est. 2020
        </span>
        <div className="h-px w-24 bg-background" />
      </div>
    </section>
  );
};

export default HomeCTA;
