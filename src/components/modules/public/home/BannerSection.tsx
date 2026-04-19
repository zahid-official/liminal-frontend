import { Star } from "lucide-react";
import Link from "next/link";

// BannerSection Component
const BannerSection = () => {
  return (
    <section
      id="hero-banner"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center bg-[url('/assets/bg-banner.jpg')] bg-no-repeat bg-cover sm:bg-bottom bg-center overflow-hidden"
    >
      {/* Dark Overlay with subtle gradient for depth */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/85" />

      {/* Technical Decorative Elements: Grid Lines */}
      <div className="absolute inset-x-0 top-1/4 h-px bg-white/10 hidden lg:block" />
      <div className="absolute inset-x-0 bottom-1/4 h-px bg-white/10 hidden lg:block" />
      <div className="absolute left-[15%] inset-y-0 w-px bg-white/10 hidden lg:block" />
      <div className="absolute right-[15%] inset-y-0 w-px bg-white/10 hidden lg:block" />

      {/* Floating Digital Coordinate Annotations */}
      <div className="absolute top-32 left-8 lg:left-12 text-[9px] font-mono tracking-[0.3em] text-white/40 hidden md:block [writing-mode:vertical-rl] uppercase">
        REF_COORD // 23.8103° N // 90.4125° E
      </div>
      <div className="absolute bottom-32 right-8 lg:right-12 text-[9px] font-mono tracking-[0.3em] text-white/40 hidden md:block [writing-mode:vertical-rl] uppercase">
        ARCH_PARAM // SCALE_AUTO // MOD_BANNER_001
      </div>

      {/* Main Content Container */}
      <div className="relative py-12 z-10 flex flex-col items-center text-center px-4 max-w-6xl mx-auto gap-8 sm:gap-10">
        {/* Quality Indicator Badge */}
        <div className="animate-in fade-in slide-in-from-top-4 duration-1200 ease-out">
          <span className="inline-flex items-center justify-center gap-2.5 text-[10px] font-bold tracking-[0.3em] uppercase text-white border border-white/20 rounded-full px-6 py-2.5 bg-white/5 backdrop-blur-md">
            <Star className="size-3 fill-amber-400 text-amber-400" />
            Curated Architectural Excellence
          </span>
        </div>

        {/* Primary Hero Heading */}
        <h1
          id="hero-heading"
          className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1200 delay-200 ease-out"
        >
          Thresholds of <br />
          <span className="italic font-serif font-light underline-offset-10 decoration-1">
            Extraordinary
          </span>{" "}
          Design
        </h1>

        {/* Narrative Description */}
        <p className="max-w-xl text-[15px] sm:text-lg text-white/70 leading-relaxed font-light animate-in fade-in slide-in-from-bottom-8 duration-1200 delay-500 ease-out">
          Translating architectural possibilities into bespoke lived
          experiences. Where avant-garde innovation meets a legacy of timeless
          elegance.
        </p>

        {/* Call to Action: Project Starter */}
        <div className="mt-4 sm:mt-8 animate-in fade-in zoom-in duration-1200 delay-800 ease-out">
          <Link
            href="/contact"
            className="group relative size-28 sm:size-36 rounded-full border border-white/20 flex items-center justify-center text-white text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] leading-[1.6] text-center transition-all duration-700 overflow-hidden hover:border-white/40"
          >
            <span className="relative z-10 group-hover:scale-105 transition-all duration-500">
              START
              <br />
              PROJECT
            </span>
            {/* Background Hover Effect */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Technical Spinning Ring on Hover */}
            <div className="absolute inset-1.5 border border-dashed border-liminal-secondary/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-[spin_15s_linear_infinite] transition-all duration-700" />
            {/* Inner Ring */}
            <div className="absolute inset-4 border border-white/5 rounded-full" />
          </Link>
        </div>
      </div>

      {/* Decorative Scroll Hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 animate-pulse opacity-40">
        <div className="w-px h-16 bg-linear-to-b from-white via-white/50 to-transparent" />
      </div>

      {/* Radial Technical Accent */}
      <div className="absolute bottom-0 right-0 w-1/3 aspect-square bg-radial from-liminal-secondary/10 to-transparent opacity-30 pointer-events-none" />
    </section>
  );
};

export default BannerSection;
