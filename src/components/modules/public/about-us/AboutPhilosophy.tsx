import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

// Philosophy Principles Data
const principles = [
  {
    index: "01",
    title: "Emotional Architecture",
    description:
      "Every space carries an emotional signature. We design environments that resonate with the human spirit — rooms that comfort, inspire, and quietly transform the quality of daily life.",
  },
  {
    index: "02",
    title: "Material Truth",
    description:
      "We believe in the honest expression of materials. Natural stone, aged timber, hand-forged metals — each element is chosen for its integrity, its texture, and the story it tells over time.",
  },
  {
    index: "03",
    title: "Restrained Elegance",
    description:
      "True luxury whispers. We practice disciplined restraint, ensuring every detail earns its place. The result is spaces that feel effortlessly sophisticated — never overdone, always unforgettable.",
  },
];

// AboutPhilosophy Component
const AboutPhilosophy = () => {
  return (
    <section
      id="about-philosophy"
      aria-labelledby="philosophy-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left: Philosophy Cards */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-10">
            <SectionHeader
              variant="inline"
              headingId="philosophy-heading"
              badgeText="Our Philosophy"
              title={
                <>
                  Design with{" "}
                  <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                    Purpose & Soul
                  </span>
                </>
              }
              description="Three principles guide every decision we make — from the first sketch to the final reveal."
              className="lg:items-start"
            />

            {/* Stacked Principle Cards */}
            <div className="space-y-0">
              {principles.map((principle, idx) => (
                <div
                  key={idx}
                  className="group py-8 border-b border-border/40 first:border-t transition-all duration-500 hover:bg-zinc-50/80 px-0 hover:px-6"
                >
                  <div className="flex gap-6">
                    {/* Index Number */}
                    <span className="text-3xl font-heading font-bold text-liminal-secondary/20 group-hover:text-liminal-secondary transition-colors duration-500 shrink-0 leading-none mt-1">
                      {principle.index}
                    </span>

                    <div className="space-y-3">
                      <h3 className="text-xl font-bold font-heading tracking-tight group-hover:text-liminal-secondary transition-colors duration-500">
                        {principle.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Atmospheric Image */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            {/* Background Decorative Text */}
            <div className="absolute -top-16 -right-16 text-[16rem] xl:text-[20rem] font-bold font-heading text-liminal-secondary/[0.03] select-none -z-10 hidden xl:block leading-none">
              PHI
            </div>

            <div className="relative aspect-[4/5] md:aspect-video lg:aspect-[4/5] overflow-hidden group">
              <Image
                src="/assets/about-us/philosophy.png"
                alt="Liminal Design Philosophy — Purpose & Soul"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Architectural Corner Brackets */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-liminal-secondary/30 -z-10" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-liminal-secondary/30 -z-10" />

            {/* Measurement Ticks */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 flex-col gap-6 items-center hidden lg:flex">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`h-px ${
                    i === 2
                      ? "w-3 bg-liminal-secondary"
                      : "w-1.5 bg-border/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;
