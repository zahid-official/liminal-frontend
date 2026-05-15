import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedButton from "@/components/shared/AnimatedButton";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const specs = [
  { label: "Founded", value: "2020" },
  { label: "Studio", value: "Dhaka, BD" },
  { label: "Discipline", value: "Interior Architecture" },
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Portrait Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative group/img">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
                <Image
                  src="/assets/home/studio-materiality-premium.png"
                  alt="Liminal Studio — Material exploration and architectural craft"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  quality={90}
                  className="object-cover transition-transform duration-[1500ms] group-hover/img:scale-105 will-change-transform transform-gpu"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/10 to-transparent" />
              </div>
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-liminal-secondary/30" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-liminal-secondary/30" />
              <div className="absolute top-5 left-5 z-10">
                <span className="text-[9px] font-mono tracking-[0.4em] text-background/70 uppercase bg-foreground/35 backdrop-blur-sm px-3 py-1.5">
                  Est. 2020
                </span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 space-y-7">
            <SectionHeader
              variant="inline"
              badgeText="Our Studio"
              headingId="studio-heading"
              title={
                <>
                  Where Intention{" "}
                  <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                    Becomes
                  </span>{" "}
                  Form
                </>
              }
            />

            <div className="space-y-5 text-muted-foreground leading-relaxed font-light text-center lg:text-left">
              <p className="text-lg">
                Liminal is a premium interior design studio in Dhaka, dedicated
                to crafting spaces that transcend the ordinary. We believe great
                design doesn&apos;t demand attention — it earns presence.
              </p>
              <blockquote className="border-l-2 border-liminal-secondary/40 pl-6 py-2 italic text-foreground/80 font-serif text-lg">
                &quot;We compose environments where every surface, shadow, and
                silence has purpose.&quot;
              </blockquote>
              <p>
                Our team of architects, designers, and artisans collaborates
                across disciplines to deliver projects that are technically
                precise and emotionally resonant.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-7 gap-y-3 pt-2">
              {specs.map((s, i) => (
                <Fragment key={s.label}>
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground/60">{s.label}</span>
                    <p className="text-[11px] font-bold uppercase tracking-wide">{s.value}</p>
                  </div>
                  {i < specs.length - 1 && <div className="hidden sm:block w-px h-7 bg-border/50" />}
                </Fragment>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start pt-1">
              <Link href="/about-us">
                <AnimatedButton>Discover Our Story</AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeStudio;
