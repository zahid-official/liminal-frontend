import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";

// AboutVisionMission Component — Asymmetric Two-Panel Split
const AboutVisionMission = () => {
  return (
    <section
      id="about-vision-mission"
      aria-labelledby="vision-mission-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80"
    >
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          variant="centered"
          badgeText="Vision & Mission"
          headingId="vision-mission-heading"
          title={
            <>
              Designing the{" "}
              <span className="italic font-serif font-light text-liminal-secondary">
                Future
              </span>{" "}
              We Believe In
            </>
          }
          description="Our vision shapes the horizon. Our mission defines every step we take toward it."
          className="mb-16 lg:mb-24"
        />

        {/* Two-Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 max-w-6xl mx-auto">
          {/* Vision Panel — Image with overlay */}
          <div className="relative group min-h-[420px] lg:min-h-[520px] overflow-hidden">
            <Image
              src="/assets/about-us/vision-1.png"
              alt="Liminal's vision for the future of interior design"
              fill
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

            {/* Vision Content — positioned over image */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10 lg:p-12 z-10">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-white/40" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/60">
                    Our Vision
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white leading-[1.1] tracking-tight">
                  To Redefine How
                  <br />
                  <span className="italic font-serif font-light">
                    Bangladesh Experiences
                  </span>
                  <br />
                  Interior Design
                </h3>
                <p className="text-white/70 font-light leading-relaxed max-w-md text-[15px]">
                  We envision a future where every interior space in Bangladesh —
                  from the most intimate home to the grandest commercial venue —
                  is designed with the same care, intelligence, and emotional
                  depth found in the world&apos;s finest studios.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Panel — Clean typographic block */}
          <div className="bg-white border border-border/40 lg:border-l-0 flex flex-col justify-center p-8 sm:p-10 lg:p-14 xl:p-16">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-liminal-secondary/40" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-liminal-secondary">
                  Our Mission
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading leading-[1.1] tracking-tight">
                Crafting Spaces That
                <br />
                <span className="italic font-serif font-light text-liminal-secondary">
                  Inspire Life
                </span>
              </h3>

              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p>
                  Our mission is to bridge the gap between world-class design
                  and local context. We bring global design intelligence to every
                  project while honoring the culture, climate, and character of
                  Bangladesh.
                </p>
                <p>
                  We are committed to delivering spaces that are not only
                  visually stunning but structurally honest, environmentally
                  considered, and deeply personal to every client we serve.
                </p>
              </div>

              {/* Mission Principles */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border/40">
                {[
                  { label: "Design Excellence", sub: "Uncompromised quality" },
                  { label: "Client Partnership", sub: "Collaborative process" },
                  {
                    label: "Cultural Integrity",
                    sub: "Rooted in local context",
                  },
                  {
                    label: "Sustainable Practice",
                    sub: "Responsible material use",
                  },
                ].map((item) => (
                  <div key={item.label} className="space-y-1">
                    <h4 className="text-sm font-bold tracking-tight">
                      {item.label}
                    </h4>
                    <p className="text-[11px] text-muted-foreground font-light">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionMission;
