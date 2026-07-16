"use client";

import LiminalButton from "@/components/shared/LiminalButton";
import SectionHeader from "@/components/shared/SectionHeader";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

// BlogNewsletter Component
const BlogNewsletter = () => {
  return (
    <section
      id="blog-newsletter"
      aria-label="Subscribe to the Liminal Journal"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80"
    >
      <div className="custom-container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-background rounded-2xl border border-border/40 shadow-xl shadow-foreground/3 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: Visual */}
              <div className="relative lg:min-h-0 bg-liminal-dark overflow-hidden hidden lg:block">
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-center p-12">
                  {/* Section Header */}
                  <SectionHeader
                    variant="inline"
                    badgeText="Journal"
                    badgeClassName="text-background"
                    titleClassName="text-background leading-[1.12] tracking-tight"
                    descriptionClassName="text-background/40"
                    title={
                      <>
                        Design Intelligence,{" "}
                        <span className="italic font-serif font-light text-liminal-secondary">
                          Delivered
                        </span>
                      </>
                    }
                    description="Curated insights on interior design, material culture and spatial thinking."
                  />

                  {/* Corner Markers */}
                  <div className="absolute top-6 left-6 w-6 h-6 border-t border-l border-background/15" />
                  <div className="absolute bottom-6 right-6 w-6 h-6 border-b border-r border-background/15" />
                </div>
              </div>

              {/* Right: Form */}
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                {/* Diamond Ornament Divider */}
                <div className="flex items-center justify-center lg:justify-center gap-3 mb-6">
                  <div className="w-12 h-px bg-liminal-secondary/50" />
                  <div className="w-2 h-2 rotate-45 border border-liminal-secondary/70" />
                  <div className="w-12 h-px bg-liminal-secondary/50" />
                </div>

                {/* Section Header */}
                <SectionHeader
                  variant="simple"
                  titleClassName="text-3xl sm:text-4xl lg:text-5xl mx-auto"
                  title={
                    <>
                      Stay{" "}
                      <span className="italic font-serif font-light text-liminal-secondary">
                        Inspired
                      </span>
                    </>
                  }
                  description={
                    <span className="text-muted-foreground/80">
                      Join our journal, a monthly collection of spatial
                      insights, material explorations and design thinking from
                      the Liminal studio.
                    </span>
                  }
                />

                {/* Email Form */}
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-5 mt-8"
                >
                  <Field>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="w-full h-13 px-4 bg-zinc-50/80 text-center border border-border/50 rounded-full placeholder:text-muted-foreground/35 focus:outline-none focus:border-liminal-secondary/50 focus:ring-2 focus:ring-liminal-secondary/10 transition-all duration-300"
                    />
                  </Field>
                  <LiminalButton
                    type="submit"
                    icon={Send}
                    className="w-full h-14"
                  >
                    Subscribe to Journal
                  </LiminalButton>
                </form>

                {/* Privacy Note */}
                <p className="text-xs text-muted-foreground/40 font-light mt-6 text-center">
                  Monthly insights on design. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsletter;
