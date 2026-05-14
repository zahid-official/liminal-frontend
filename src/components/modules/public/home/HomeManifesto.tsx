import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

const HomeManifesto = () => {
  const manifestoSpecs = [
    { label: "Discipline", value: "Interior Architecture" },
    { label: "Focus", value: "Minimalist Modernity" },
    { label: "Experience", value: "5+ Years" },
  ];

  return (
    <section
      id="manifesto"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center">
          {/* Left: Image Column (spans 7/12) */}
          <div className="lg:col-span-7 relative z-10">
            <div className="relative aspect-4/5 md:aspect-16/10 lg:aspect-4/5 overflow-hidden group rounded">
              {/* Image Frame/Border */}
              <div className="absolute inset-4 border border-background/20 z-20 pointer-events-none" />

              <Image
                src="/assets/home/home-manifesto-interior-refined.png"
                alt="Liminal Studio: Luxury Minimalist Living Room Design"
                fill
                quality={100}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105 transform-gpu will-change-transform backface-hidden"
                priority
              />

              {/* Overlay for subtle depth */}
              <div className="absolute inset-0 bg-linear-to-t from-foreground/10 to-transparent opacity-40 pointer-events-none" />

              {/* Floating Year Badge */}
              <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 bg-[#141F0A] text-white px-8 py-6 shadow-2xl text-center">
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/50 block">
                  Established
                </span>
                <span className="text-3xl font-bold font-heading tracking-tight block mt-1">
                  2020
                </span>
                <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/40 block mt-1">
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </div>

          {/* Right: Content Column (spans 5/12, overlaps slightly) */}
          <div className="lg:col-span-5 lg:-ml-20 relative z-20">
            <div className="bg-background space-y-6 lg:p-16 lg:shadow-[40px_40px_80px_-20px_rgba(0,0,0,0.05)] rounded">
              {/* Using Shared SectionHeader for consistency */}
              <SectionHeader
                variant="inline"
                badgeText="The Manifesto"
                title={
                  <>
                    The Architecture{" "}
                    <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                      beyond form
                    </span>
                  </>
                }
                className="mb-8"
              />

              {/* Narrative Copy */}
              <div className="space-y-6 text-muted-foreground leading-relaxed font-light">
                <p>
                  At Liminal, we believe that true luxury isn&apos;t found in
                  excess, but in the precise dialogue between light, material,
                  and void. Our studio is dedicated to crafting spaces that
                  offer a respite from the noise of the world.
                </p>
                <p>
                  Every line we draw and every texture we select is an
                  intentional step toward creating an environment that feels
                  both monumental and intimate.
                </p>
              </div>

              {/* Stats / Specs Grid */}
              <div className="pt-6 border-t border-border/60 grid grid-cols-2 sm:grid-cols-3 gap-8 ">
                {manifestoSpecs.map((spec) => (
                  <div key={spec.label} className="space-y-1 text-center">
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60 block">
                      {spec.label}
                    </span>
                    <p className="text-sm font-semibold tracking-tight text-foreground/80">
                      {spec.value}
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

export default HomeManifesto;
