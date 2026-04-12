import { Star } from "lucide-react";
import Link from "next/link";

// BannerSection Component
const BannerSection = () => {
  return (
    <section
      id="hero-banner"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center bg-[url('/assets/bg-banner.jpg')] bg-no-repeat bg-cover sm:bg-bottom bg-center"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative py-12 z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto gap-6">
        {/* Badge */}
        <span className="inline-flex items-center justify-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-white/80 border border-white/20 rounded-full px-5 py-2">
          <Star className="size-3 fill-amber-400 text-amber-400" />
          Trusted Design Partner
        </span>

        {/* Heading */}
        <h1
          id="hero-heading"
          className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-white leading-[1.05] tracking-tight"
        >
          The Art of Stunning
          <br />
          Interior Design
        </h1>

        {/* Description */}
        <p className="max-w-lg text-sm md:text-[15px] text-white/75 leading-relaxed">
          Whether it&apos;s your home, office, or a commercial project, we are
          always dedicated to bringing your vision to life.
        </p>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="mt-4 size-24 md:size-28 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white text-sm md:text-lg font-semibold leading-tight text-center hover:bg-white/25 hover:scale-105 hover:-translate-y-1 hover:shadow-lg transition-all duration-250"
        >
          Start
          <br />
          Project
        </Link>
      </div>
    </section>
  );
};

export default BannerSection;
