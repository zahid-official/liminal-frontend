import Image from "next/image";
import LiminalButton from "@/components/shared/LiminalButton";
import AnimatedButton from "@/components/shared/AnimatedButton";
import Link from "next/link";

// AboutCTA Component — Full-Bleed Immersive Call to Action
const AboutCTA = () => {
  return (
    <section
      id="about-cta"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden"
    >
      {/* Full-Bleed Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/about-us/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/65" />
        {/* Subtle gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-28 md:py-36 lg:py-44">
        <div className="custom-container flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
          {/* Section Label */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-px bg-white/30" />
            <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-white/60">
              Begin Your Journey
            </span>
            <div className="w-10 h-px bg-white/30" />
          </div>

          {/* Headline */}
          <h2
            id="cta-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight font-heading text-white"
          >
            Let&apos;s Create
            <br />
            <span className="italic font-serif font-light">Your Story</span>
          </h2>

          {/* Description */}
          <p className="text-white/70 font-light leading-relaxed text-lg max-w-xl">
            Every great space begins with a conversation. Whether you&apos;re
            envisioning a private sanctuary or a commercial landmark, we&apos;re
            ready to listen, design, and deliver something extraordinary.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5 pt-4">
            <Link href="/contact">
              <LiminalButton>Start a Project</LiminalButton>
            </Link>
            <Link href="/projects">
              <AnimatedButton className="border-white/25 hover:border-white/50 [&_span.text-foreground]:text-white/90">
                View Our Work
              </AnimatedButton>
            </Link>
          </div>

          {/* Bottom decorative */}
          <div className="flex items-center gap-0 pt-8 opacity-30">
            <div className="w-20 h-px bg-white" />
            <div className="w-1.5 h-1.5 rotate-45 border border-white mx-4" />
            <div className="w-20 h-px bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
