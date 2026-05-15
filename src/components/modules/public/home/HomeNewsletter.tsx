"use client";

import LiminalButton from "@/components/shared/LiminalButton";
import { Mail } from "lucide-react";

// HomeNewsletter Component
const HomeNewsletter = () => {
  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80"
    >
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-5">
              <div className="w-14 h-px bg-liminal-secondary shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-liminal-secondary">
                Stay Connected
              </span>
            </div>

            <h2
              id="newsletter-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight font-heading"
            >
              Design{" "}
              <span className="italic font-serif font-light text-liminal-secondary">
                Updates
              </span>
            </h2>

            <p className="text-muted-foreground text-[16px] sm:text-lg leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
              Receive curated insights on design thinking, material innovation,
              and behind-the-scenes glimpses from our studio. No noise — only
              substance.
            </p>

            {/* Spec Labels */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground/40 font-bold pt-1">
              <span>Monthly Digest</span>
              <div className="w-px h-4 bg-border hidden sm:block" />
              <span>Design Insights</span>
              <div className="w-px h-4 bg-border hidden sm:block" />
              <span>Studio Updates</span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-5">
            <div className="bg-background border border-border/40 rounded-sm p-8 md:p-10 shadow-sm space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold tracking-tight">
                  Join Our Circle
                </h3>
                <p className="text-sm text-muted-foreground/70 font-light">
                  Enter your email to receive our monthly design digest.
                </p>
              </div>

              <form
                className="space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40" />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full pl-11 pr-4 min-h-12 border border-border/60 rounded-sm bg-background text-foreground text-[15px] font-light placeholder:text-muted-foreground/40 focus:outline-none focus:border-liminal-secondary/50 focus:ring-1 focus:ring-liminal-secondary/20 transition-all duration-300"
                    aria-label="Email address for newsletter"
                  />
                </div>

                <LiminalButton
                  type="submit"
                  showIcon={false}
                  className="w-full"
                >
                  Subscribe
                </LiminalButton>
              </form>

              <p className="text-[11px] text-muted-foreground/40 font-light text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNewsletter;
