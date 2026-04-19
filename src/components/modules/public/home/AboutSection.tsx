import AnimatedButton from "@/components/shared/AnimatedButton";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";

/**
 * AboutSection Component
 * Highlights the dual expertise of Liminal in Architecture & Interiors.
 * Designed with an editorial layout, technical accents, and premium image compositions.
 */
const AboutSection = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="overflow-hidden py-24 md:py-32 lg:py-40 relative bg-background"
    >
      {/* Left: Enhanced Image Composition */}
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Left: Enhanced Image Composition */}
          <div className="relative w-full aspect-4/5 sm:aspect-square lg:aspect-4/5 group px-4 sm:px-0 animate-in fade-in slide-in-from-left-8 duration-1200 ease-out fill-mode-both">
            {/* Background Decorative Frame */}
            <div className="absolute inset-[5%] sm:inset-[10%] border border-border/40 -z-10 group-hover:inset-[4%] sm:group-hover:inset-[8%] transition-all duration-1000" />

            {/* Secondary Overlapping Image (Top Right) */}
            <div className="absolute top-0 right-0 w-[60%] sm:w-[65%] h-[50%] sm:h-[55%] rounded-2xl overflow-hidden z-20 shadow-2xl border border-white/20 transform hover:scale-[1.03] transition-transform duration-1000 ease-out">
              <Image
                src="/assets/about-1.webp"
                alt="Architectural precision and modern interior design"
                fill
                sizes="(max-width: 640px) 100vw, 400px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Main Primary Image (Bottom Left) */}
            <div className="absolute bottom-0 left-0 w-[70%] sm:w-[75%] h-[60%] sm:h-[65%] rounded-2xl overflow-hidden z-10 shadow-2xl border border-white/20 transform hover:-translate-y-2 transition-transform duration-1000 ease-out">
              <Image
                src="/assets/about-2.webp"
                alt="Luxury minimalist living space"
                fill
                sizes="(max-width: 640px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/5" />
              {/* Internal Architectural Border overlay */}
              <div className="absolute inset-4 border border-white/20 rounded-xl pointer-events-none" />
            </div>

            {/* Technical Detail Label: Floating coordinate-style badge */}
            <div className="absolute bottom-12 -right-4 lg:-right-16 bg-white p-5 shadow-2xl border border-border/50 rounded-xl z-30 hidden sm:flex sm:flex-col items-end gap-1.5 -rotate-2 hover:rotate-0 transition-transform duration-700">
              <span className="text-[10px] font-mono tracking-[0.25em] text-liminal-secondary font-bold uppercase">
                EST_STUDIO: 2012
              </span>
              <span className="text-base font-bold font-heading tracking-tight">
                Dual Expertise Studio
              </span>
            </div>
          </div>

          {/* Right Content: Narrative & Features */}
          <div className="space-y-14 animate-in fade-in slide-in-from-right-8 duration-1200 delay-300 ease-out fill-mode-both">
            <SectionHeader
              variant="inline"
              badgeText="THE LIMINAL CORE"
              headingId="about-heading"
              title={
                <>
                  Where{" "}
                  <span className="text-liminal-secondary italic font-serif font-light underline underline-offset-8 decoration-1">
                    Vision
                  </span>{" "}
                  <br />
                  Meets Precision
                </>
              }
              description="We believe every environment holds a narrative. Our purpose is translating your aspirations into architectural realities that transcend the ordinary—blending avant-garde innovation with a legacy of timeless elegance."
            />

            {/* Technical Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-2">
              <div className="space-y-4 relative pl-7 group/item">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-liminal-secondary/30 group-hover/item:bg-liminal-secondary transition-colors duration-500" />
                <h3 className="text-lg tracking-tight font-heading">
                  Residential Design
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  From curated home sanctuaries to sprawling luxury estates, we
                  architect spaces that resonate with personal identity.
                </p>
              </div>

              <div className="space-y-4 relative pl-7 group/item">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-liminal-secondary/30 group-hover/item:bg-liminal-secondary transition-colors duration-500" />
                <h3 className="text-lg tracking-tight font-heading">
                  Sustainable Luxury
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  We integrate eco-conscious materials and high-efficiency
                  spatial systems without ever compromising on aesthetic purity.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/about-us">
              <AnimatedButton className="mt-2 tracking-[0.05em]">
                Explore Our Process
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
