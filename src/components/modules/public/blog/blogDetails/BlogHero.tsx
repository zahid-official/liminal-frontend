import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// BlogHero Component — Cinematic editorial opening for the Journal
const BlogHero = () => {
  return (
    <section
      id="blog-hero"
      aria-label="The Journal — Liminal Design Editorial"
      className="min-h-[85vh] flex flex-col justify-between relative overflow-hidden bg-foreground"
    >
      {/* Background Image with Slow Zoom */}
      <div className="absolute inset-0 z-0 animate-slow-zoom overflow-hidden will-change-transform transform-gpu">
        <Image
          src="/assets/blog/staircase.png"
          alt="Architectural staircase — editorial backdrop for Liminal's design journal"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover transform-gpu"
        />
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-foreground/45 mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-b from-foreground/90 via-foreground/25 to-foreground/85" />
        <div className="absolute inset-0 bg-radial-vignette opacity-50" />
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay z-10 bg-noise" />

      {/* Editorial Content */}
      <div className="custom-container relative z-20 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center space-y-8 pt-8">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-6 opacity-0 animate-hero-fade-up">
            <div className="w-16 h-px bg-background/25" />
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-background/50">
              The Journal
            </span>
            <div className="w-16 h-px bg-background/25" />
          </div>

          {/* Headline */}
          <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight font-heading text-background opacity-0 animate-hero-fade-up delay-300">
            Spatial{" "}
            <span className="italic font-serif font-light text-liminal-secondary">
              Thinking
            </span>
            <br className="hidden sm:block" />
            <span className="sm:hidden">, </span>
            Material{" "}
            <span className="italic font-serif font-light text-liminal-secondary">
              Culture
            </span>
          </h1>

          {/* Body */}
          <p className="text-background/40 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto opacity-0 animate-hero-fade-up delay-500">
            Explorations in design philosophy, material studies, and the
            architecture of human experience — from the studio where ideas
            take form.
          </p>

          {/* Breadcrumb */}
          <div className="opacity-0 animate-hero-fade-up delay-600">
            <div className="inline-flex bg-background/10 backdrop-blur-sm border border-background/15 rounded-full px-6 py-2.5">
              <Breadcrumb>
                <BreadcrumbList className="text-background/80 sm:text-[15px] gap-2">
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link
                        href="/"
                        className="hover:text-background transition-colors"
                      >
                        Home
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-background/50" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-background font-medium">
                      Journal
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-0 animate-hero-fade-up delay-1000">
        <div className="w-px h-8 bg-linear-to-b from-background/40 to-transparent animate-scroll-line origin-top" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-background/30 font-bold">
          Explore
        </span>
      </div>
    </section>
  );
};

export default BlogHero;
