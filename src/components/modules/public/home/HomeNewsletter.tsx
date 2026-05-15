"use client";

import LiminalButton from "@/components/shared/LiminalButton";
import { Mail } from "lucide-react";

// HomeNewsletter Component — Centered compact
const HomeNewsletter = () => {
  return (
    <section id="newsletter" aria-labelledby="newsletter-heading" className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80">
      <div className="absolute top-0 left-0 right-0 h-px bg-border/30" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border/30" />

      <div className="custom-container">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-liminal-secondary/40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-liminal-secondary">Stay Connected</span>
            <div className="w-12 h-px bg-liminal-secondary/40" />
          </div>

          <h2 id="newsletter-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight font-heading">
            Design{" "}<span className="italic font-serif font-light text-liminal-secondary">Updates</span>
          </h2>

          <p className="text-muted-foreground text-[16px] sm:text-lg leading-relaxed font-light max-w-xl mx-auto">
            Curated insights on design thinking, material innovation, and behind-the-scenes glimpses from our studio.
          </p>

          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40" />
                <input type="email" placeholder="your@email.com"
                  className="w-full pl-11 pr-4 min-h-12 border border-border/60 rounded-full bg-background text-foreground text-[15px] font-light placeholder:text-muted-foreground/40 focus:outline-none focus:border-liminal-secondary/50 focus:ring-1 focus:ring-liminal-secondary/20 transition-all duration-300"
                  aria-label="Email address" />
              </div>
              <LiminalButton type="submit" showIcon={false}>Subscribe</LiminalButton>
            </form>
            <p className="text-[11px] text-muted-foreground/40 mt-4 font-light">No spam. Unsubscribe at any time.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-[10px] uppercase tracking-[0.25em] text-muted-foreground/40 font-bold pt-2">
            <span>Monthly Digest</span>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <span>Design Insights</span>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <span>Studio Updates</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNewsletter;
