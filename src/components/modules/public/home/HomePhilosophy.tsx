import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

// Philosophy pillars data
const pillars = [
  {
    number: "01",
    title: "Contextual Sensitivity",
    description:
      "Every project begins with deep listening — understanding the culture, environment, and human stories that define a place before we intervene.",
    image: "/assets/home/constructivist-detail.png",
  },
  {
    number: "02",
    title: "Material Integrity",
    description:
      "We celebrate the honest character of stone, wood, and metal — sourcing materials that age with grace and tell stories of longevity.",
    image: "/assets/home/material-palette.png",
  },
  {
    number: "03",
    title: "Spatial Narrative",
    description:
      "Our spaces are composed sequences — each room, corridor, and threshold is orchestrated to guide movement and evoke emotional response.",
    image: "/assets/home/sculptural-line.png",
  },
];

// HomePhilosophy Component
const HomePhilosophy = () => {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="py-20 md:py-28 lg:py-36 relative overflow-hidden bg-[#141F0A] text-background"
    >
      {/* Subtle Dot Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-size-[40px_40px]" />

      <div className="custom-container relative z-10">
        {/* Section Header */}
        <SectionHeader
          variant="centered"
          headingId="philosophy-heading"
          badgeText="Our Philosophy"
          badgeClassName="border-background/15 text-background/60"
          badgeDotClassName="bg-background/30"
          title={
            <>
              Design Rooted in{" "}
              <span className="italic font-serif font-light underline underline-offset-8 decoration-1 decoration-background/30">
                Conviction
              </span>
            </>
          }
          titleClassName="text-background"
          description={
            <span className="text-background/40">
              We believe design is an act of responsibility — a dialogue between
              intention, craft, and the lives that will inhabit the spaces we
              create.
            </span>
          }
          className="mb-16 lg:mb-24"
        />

        {/* Three Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-background/10 rounded-sm overflow-hidden">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="group bg-[#141F0A] hover:bg-[#1a2810] transition-colors duration-700 relative"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={`Liminal Philosophy — ${pillar.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={85}
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-110 will-change-transform transform-gpu opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#141F0A] via-[#141F0A]/30 to-transparent" />

                {/* Pillar Number */}
                <div className="absolute top-6 left-6">
                  <span className="text-[10px] font-mono tracking-[0.4em] text-background/30 group-hover:text-liminal-secondary transition-colors duration-500">
                    {pillar.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-4">
                <div className="w-8 h-px bg-background/15 group-hover:w-14 group-hover:bg-liminal-secondary/50 transition-all duration-700" />

                <h3 className="text-xl md:text-2xl font-bold font-heading text-background tracking-tight group-hover:text-liminal-secondary transition-colors duration-500">
                  {pillar.title}
                </h3>

                <p className="text-background/35 font-light text-[15px] leading-relaxed group-hover:text-background/55 transition-colors duration-500">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePhilosophy;
