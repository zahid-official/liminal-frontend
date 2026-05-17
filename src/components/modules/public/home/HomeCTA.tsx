import LiminalButton from "@/components/shared/LiminalButton";
import Link from "next/link";

// HomeCTA Component
const HomeCTA = () => {
  return (
    <section
      id="consultation-cta"
      aria-label="Start a consultation with Liminal"
      className="py-20 md:py-28 lg:py-36 relative overflow-hidden bg-[#141F0A] text-background"
    >
      {/* Blueprint Grid Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-size-[50px_50px]" />

      {/* Subtle Noise */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-noise" />

      {/* Decorative Corner Elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-background/10" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-background/10" />

      <div className="custom-container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-liminal-secondary/40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-liminal-secondary">
              Begin Your Journey
            </span>
            <div className="w-12 h-px bg-liminal-secondary/40" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight font-heading text-background">
            Ready to Transform
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Your{" "}
            <span className="italic font-serif font-light text-liminal-secondary">
              Space?
            </span>
          </h2>

          {/* Body */}
          <p className="text-background/45 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto">
            Every exceptional space begins with a conversation. Tell us about
            your vision, and let&apos;s explore how design can elevate the way
            you live and work.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <Link href="/contact">
              <LiminalButton className="bg-background text-foreground hover:bg-background/90 shadow-xl shadow-black/20 hover:shadow-2xl">
                Start a Conversation
              </LiminalButton>
            </Link>
            <Link href="/projects">
              <LiminalButton
                variant="outline"
                showIcon={false}
                className="text-background/70 hover:text-background hover:bg-background/5 border-background/15 hover:border-background/30 shadow-none"
              >
                View Our Projects
              </LiminalButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Technical Label */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none">
        <div className="flex items-center gap-6 opacity-20">
          <div className="h-px w-16 bg-background" />
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-background">
            Liminal Architectural Studio — Est. 2020
          </span>
          <div className="h-px w-16 bg-background" />
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
