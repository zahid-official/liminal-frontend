import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

// StudioOrigin Component — Cinematic Split with Overlapping Frosted Text Panel
const StudioOrigin = () => {
  return (
    <section
      id="studio-origin"
      aria-labelledby="studio-origin-heading"
      className="py-20 md:py-28 lg:py-36 relative overflow-hidden bg-background"
    >
      <div className="custom-container">
        <div className="relative flex flex-col lg:flex-row items-stretch gap-0 min-h-[600px] lg:min-h-[680px]">

          {/* Left: Cinematic Image (60%) */}
          <div className="w-full lg:w-[60%] relative aspect-4/3 lg:aspect-auto shrink-0 overflow-hidden">
            <Image
              src="/assets/about-us/studio-story.png"
              alt="Liminal Studio — the space where design begins"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle gradient to help panel blend */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-background/60 hidden lg:block" />

            {/* Architectural corner accents on image */}
            <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-white/30" />
            <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-white/30" />

            {/* EST. watermark overlay */}
            <div className="absolute bottom-8 left-8 z-10">
              <span className="font-mono text-[10px] tracking-[0.5em] text-white/60 uppercase">
                Est. 2013
              </span>
            </div>
          </div>

          {/* Right: Text Panel — bleeds left over image on desktop */}
          <div className="w-full lg:w-[48%] lg:-ml-[8%] relative z-10 flex items-center">
            <div className="relative w-full bg-background border border-border/40 shadow-2xl shadow-black/8 p-10 lg:p-14">

              {/* Left green accent bar */}
              <div className="absolute left-0 top-8 bottom-8 w-[3px] bg-liminal-secondary" />

              {/* Large faded background number */}
              <div className="absolute top-4 right-6 text-[8rem] lg:text-[10rem] font-black font-heading text-foreground/4 select-none leading-none pointer-events-none">
                01
              </div>

              {/* Section Header */}
              <SectionHeader
                variant="inline"
                headingId="studio-origin-heading"
                badgeText="Our Story"
                title={
                  <>
                    Where Every Space
                    <br />
                    Tells a{" "}
                    <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                      Timeless Story
                    </span>
                  </>
                }
                className="mb-8"
                titleClassName="text-3xl sm:text-4xl lg:text-[2.6rem]"
              />

              {/* Body Copy */}
              <div className="space-y-5 text-muted-foreground leading-relaxed font-light relative z-10">
                <p>
                  Liminal was founded on a singular conviction: that the spaces we
                  inhabit shape who we become. Born in Dhaka in 2013, our studio
                  emerged from a collective passion for architecture, art, and the
                  quiet power of thoughtfully arranged environments.
                </p>
                <p className="border-l-2 border-liminal-secondary/40 pl-5 italic text-foreground/75 py-1">
                  &ldquo;We don&apos;t design rooms. We craft emotional
                  landscapes — the liminal space between what is and what could
                  be.&rdquo;
                </p>
                <p>
                  Over a decade and 150+ projects later, Liminal has grown into
                  one of Bangladesh&apos;s most respected design studios — yet our
                  method remains unchanged: listen deeply, design boldly, and
                  deliver spaces that endure.
                </p>
              </div>

              {/* Credential tags */}
              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "150+ Projects",
                  "Est. 2013",
                  "Dhaka, Bangladesh",
                  "Residential & Commercial",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-liminal-secondary border border-liminal-secondary/20 bg-liminal-secondary/5 px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioOrigin;
