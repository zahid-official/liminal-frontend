import AnimatedButton from "@/components/shared/AnimatedButton";
import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import Link from "next/link";

// Studio metrics
const metrics = [
  { value: "50+", label: "Projects Delivered" },
  { value: "12", label: "Design Awards" },
  { value: "5+", label: "Years of Craft" },
  { value: "100%", label: "Client Satisfaction" },
];

// HomeStudio Component
const HomeStudio = () => {
  return (
    <section
      id="studio"
      aria-labelledby="studio-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      <div className="custom-container">
        {/* Cinematic Wide Image */}
        <div className="relative group/cinema mb-16 lg:mb-24">
          <div className="relative aspect-[16/7] md:aspect-[21/9] overflow-hidden rounded-sm shadow-2xl">
            <Image
              src="/assets/home/studio-narrative.png"
              alt="Inside the Liminal Studio — Where architectural vision takes form"
              fill
              sizes="100vw"
              quality={90}
              priority
              className="object-cover transition-transform duration-[1500ms] group-hover/cinema:scale-105 will-change-transform transform-gpu"
            />
            {/* Cinematic letterbox overlays */}
            <div className="absolute inset-0 bg-linear-to-t from-foreground/20 via-transparent to-foreground/10" />

            {/* Corner markers */}
            <div className="absolute top-6 left-6 w-10 h-10 border-t border-l border-background/25" />
            <div className="absolute bottom-6 right-6 w-10 h-10 border-b border-r border-background/25" />

            {/* Technical Label */}
            <div className="absolute bottom-6 left-6 z-10">
              <span className="text-[9px] font-mono tracking-[0.4em] text-background/60 uppercase bg-foreground/30 backdrop-blur-sm px-4 py-2">
                Liminal Studio | Dhaka, Bangladesh
              </span>
            </div>
          </div>
        </div>

        {/* Split Editorial Content */}
        <SectionHeader
          variant="split"
          headingId="studio-heading"
          badgeText="Our Studio"
          title={
            <>
              Where Intention{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Becomes
              </span>{" "}
              Form
            </>
          }
          description={
            <>
              Liminal is a premium interior design studio based in Dhaka,
              dedicated to creating spaces that transcend the ordinary. We
              believe great design is invisible — it doesn&apos;t demand
              attention, it earns presence. Our team of architects, designers,
              and artisans collaborates across disciplines to deliver projects
              that are as technically precise as they are emotionally resonant.
            </>
          }
          className="mb-16"
        />

        {/* Signature Pull Quote */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <blockquote className="relative py-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl text-liminal-secondary/40 font-serif leading-none select-none pointer-events-none">
              &ldquo;
            </div>
            <p className="text-lg md:text-xl lg:text-2xl italic font-serif text-foreground/80 leading-relaxed">
              &quot;We don&apos;t decorate rooms. We compose environments where
              every surface, shadow, and silence has purpose.&quot;
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-8 h-px bg-liminal-secondary/50" />
              <div className="w-1.5 h-1.5 rotate-45 border border-liminal-secondary/70" />
              <div className="w-8 h-px bg-liminal-secondary/50" />
            </div>
          </blockquote>
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 border border-border/40 rounded-sm overflow-hidden">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="group bg-background hover:bg-zinc-50/80 transition-colors duration-500 py-8 md:py-10 text-center space-y-2"
            >
              <span className="block text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight group-hover:text-liminal-secondary transition-colors duration-500">
                {metric.value}
              </span>
              <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <Link href="/about-us">
            <AnimatedButton>Discover Our Story</AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeStudio;
