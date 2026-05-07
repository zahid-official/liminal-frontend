import AnimatedButton from "@/components/shared/AnimatedButton";
import LiminalButton from "@/components/shared/LiminalButton";
import Link from "next/link";

// AboutCTA Component — Full-Width Elegant CTA
const AboutCTA = () => {
  return (
    <section
      id="about-cta"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden py-28 md:py-36 lg:py-44 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/about-us/hero-bg.png')` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Top Decorative Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-liminal-secondary/10 blur-3xl pointer-events-none" />

      <div className="custom-container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-white/20" />
            <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-white/50">
              Begin Your Journey
            </span>
            <div className="w-12 h-px bg-white/20" />
          </div>

          {/* Heading */}
          <h2
            id="cta-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-[1.05] text-white"
          >
            Ready to Transform
            <br />
            <span className="italic font-serif font-light text-liminal-secondary">
              Your Space?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light max-w-xl mx-auto">
            Let&apos;s start a conversation about your vision. Every
            extraordinary space begins with a single step.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <Link href="/contact">
              <LiminalButton>Start a Conversation</LiminalButton>
            </Link>

            <Link href="/projects">
              <AnimatedButton className="text-white border-white/20 hover:border-white/60 bg-transparent">
                View Our Projects
              </AnimatedButton>
            </Link>
          </div>

          {/* Bottom Decorative */}
          <div className="pt-12 flex items-center justify-center gap-6 opacity-20">
            <div className="h-px w-20 bg-white" />
            <span className="text-[9px] uppercase tracking-[0.5em] text-white font-bold whitespace-nowrap">
              Liminal Design Studio
            </span>
            <div className="h-px w-20 bg-white" />
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default AboutCTA;
