"use client";

import LiminalButton from "@/components/shared/LiminalButton";
import { Send } from "lucide-react";

// HomeNewsletter Component
const HomeNewsletter = () => {
  return (
    <section
      id="newsletter"
      aria-label="Subscribe to Liminal newsletter"
      className="py-16 md:py-24 lg:py-28 relative overflow-hidden"
    >
      <div className="custom-container relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Eyebrow Badge */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-liminal-secondary/40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-liminal-secondary">
              Stay Connected
            </span>
            <div className="w-12 h-px bg-liminal-secondary/40" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight font-heading">
            Design Intelligence,{" "}
            <span className="italic font-serif font-light text-liminal-secondary">
              Delivered
            </span>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed max-w-lg mx-auto">
            Curated insights on interior design, material culture and spatial
            thinking, delivered to your inbox monthly.
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
                className="w-full h-12 px-5 bg-zinc-50/80 border border-border/60 rounded-full text-sm font-medium placeholder:text-muted-foreground/40 focus:outline-none focus:border-liminal-secondary/50 focus:ring-2 focus:ring-liminal-secondary/10 transition-all duration-300"
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
          <p className="text-[12px] text-muted-foreground/50 font-light">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeNewsletter;
