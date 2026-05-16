"use client";

import LiminalButton from "@/components/shared/LiminalButton";
import { Send } from "lucide-react";
import Link from "next/link";

// HomeCTA Component — Combined CTA + Newsletter
const HomeCTA = () => {
  return (
    <section
      id="consultation-cta"
      aria-label="Start a consultation with Liminal"
      className="relative overflow-hidden bg-[#141F0A] text-background"
    >
      {/* Blueprint Grid Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-size-[50px_50px]" />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-noise" />

      {/* Decorative Corner Elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-background/10" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-background/10" />

      {/* CTA Section */}
      <div className="custom-container relative z-10 pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20">
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

      {/* Divider with "or" */}
      <div className="custom-container relative z-10">
        <div className="flex items-center gap-6 max-w-2xl mx-auto">
          <div className="flex-1 h-px bg-background/10" />
          <span className="text-[11px] font-mono tracking-[0.3em] text-background/20 uppercase">
            or
          </span>
          <div className="flex-1 h-px bg-background/10" />
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="custom-container relative z-10 pt-16 md:pt-20 pb-24 md:pb-32 lg:pb-40">
        <div className="max-w-2xl mx-auto text-center space-y-7">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-px bg-background/15" />
            <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-background/35">
              Stay Connected
            </span>
            <div className="w-8 h-px bg-background/15" />
          </div>

          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl font-bold leading-[1.15] tracking-tight font-heading text-background/90">
            Design Intelligence,{" "}
            <span className="italic font-serif font-light text-liminal-secondary">
              Delivered
            </span>
          </h3>

          {/* Description */}
          <p className="text-background/35 text-sm md:text-base font-light leading-relaxed max-w-md mx-auto">
            Curated insights on interior design, material culture, and spatial
            thinking — delivered monthly.
          </p>

          {/* Email Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto pt-2"
          >
            <div className="relative flex-1 w-full">
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="w-full h-12 px-5 bg-background/5 border border-background/10 rounded-full text-sm font-medium text-background placeholder:text-background/20 focus:outline-none focus:border-liminal-secondary/40 focus:ring-2 focus:ring-liminal-secondary/10 transition-all duration-300"
              />
            </div>
            <LiminalButton
              type="submit"
              icon={Send}
              className="w-full sm:w-auto shrink-0"
            >
              Subscribe
            </LiminalButton>
          </form>

          {/* Privacy Note */}
          <p className="text-[11px] text-background/20 font-light">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Bottom Technical Label */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none z-10">
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
