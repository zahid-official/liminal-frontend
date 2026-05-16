import AnimatedButton from "@/components/shared/AnimatedButton";
import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

// Studio stats
const studioStats = [
  { label: "Founded", value: "2020" },
  { label: "Projects", value: "120+" },
  { label: "Clients", value: "85+" },
];

// HomeStudio Component
const HomeStudio = () => {
  return (
    <section
      id="studio-introduction"
      aria-labelledby="studio-heading"
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden"
    >
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20">
          {/* Left: Monumental Image Composition */}
          <div className="lg:col-span-7 relative">
            {/* Primary Image — Tall & Imposing */}
            <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-sm shadow-2xl group will-change-transform">
              <Image
                src="/assets/home/studio-intro.png"
                alt="Liminal Studio: A space where design vision takes form"
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03] will-change-transform transform-gpu backface-hidden"
              />
              {/* Cinematic gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-foreground/20 via-transparent to-transparent" />

              {/* Technical Label */}
              <div className="absolute top-6 left-6 z-10">
                <span className="text-[9px] font-mono tracking-[0.4em] text-background/70 uppercase bg-foreground/40 backdrop-blur-sm px-3 py-2">
                  Studio | Dhaka
                </span>
              </div>
            </div>

            {/* Secondary Overlapping Detail Image */}
            <div className="hidden md:block absolute -bottom-8 -right-4 lg:-right-10 w-[45%] aspect-square overflow-hidden rounded-sm shadow-2xl border-4 border-background z-10 group will-change-transform">
              <Image
                src="/assets/home/studio-detail.png"
                alt="Liminal Design Detail: Material & texture study"
                fill
                quality={90}
                sizes="(max-width: 1024px) 35vw, 25vw"
                className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03] will-change-transform transform-gpu backface-hidden"
              />
            </div>

            {/* Architectural Corner Brackets */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-liminal-secondary/30" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-liminal-secondary/30 hidden lg:block" />
          </div>

          {/* Right: Narrative Content — Starts lower for visual stagger */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:pt-20 space-y-10 relative">
            {/* Section Header */}
            <SectionHeader
              variant="inline"
              badgeText="The Studio"
              headingId="studio-heading"
              title={
                <>
                  Where Vision
                  <br className="hidden lg:block" />
                  <span className="lg:hidden"> </span>
                  Takes{" "}
                  <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                    Form
                  </span>
                </>
              }
              className="lg:items-start"
            />

            {/* Body Text */}
            <div className="space-y-6 text-center lg:text-left">
              <p className="text-muted-foreground leading-[1.8] font-light text-[15px] sm:text-base">
                Liminal was born from a conviction that spaces are more than
                walls and surfaces — they are emotional landscapes that shape how
                we think, feel, and connect. From our studio in Dhaka, we craft
                environments where architectural precision meets human warmth.
              </p>

              {/* Pull Quote */}
              <blockquote className="border-l-2 border-liminal-secondary/40 pl-6 py-2 italic text-foreground/80 font-serif text-lg sm:text-xl leading-relaxed text-left">
                &quot;We design for the pause — that moment when you enter a
                room and something within you exhales.&quot;
              </blockquote>

              <p className="text-muted-foreground leading-[1.8] font-light text-[15px] sm:text-base">
                Every project begins with deep listening. We decode context,
                aspiration, and the unspoken needs of each client, then translate
                them into spaces that feel inevitable — as though they could
                never have been designed any other way.
              </p>
            </div>

            {/* Stats Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 pt-2">
              {studioStats.map((stat, index) => (
                <Fragment key={stat.label}>
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground/60">
                      {stat.label}
                    </span>
                    <p className="text-sm font-bold uppercase tracking-tight">
                      {stat.value}
                    </p>
                  </div>
                  {index < studioStats.length - 1 && (
                    <div className="hidden sm:block w-px h-8 bg-border/60" />
                  )}
                </Fragment>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
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
