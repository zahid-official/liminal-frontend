import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

const pillars = [
  { number: "01", title: "Contextual Sensitivity", description: "Every project begins with deep listening — understanding the culture, environment, and human stories that define a place." },
  { number: "02", title: "Material Integrity", description: "We celebrate the honest character of stone, wood, and metal — sourcing materials that age with grace and tell stories." },
  { number: "03", title: "Spatial Narrative", description: "Our spaces are composed sequences — each threshold orchestrated to guide movement and evoke emotional response." },
];

// HomePhilosophy Component
const HomePhilosophy = () => {
  return (
    <section id="philosophy" aria-labelledby="philosophy-heading" className="relative overflow-hidden bg-[#141F0A] text-background">
      <div className="absolute inset-0 z-0">
        <Image src="/assets/home/conviction-detail.png" alt="" fill sizes="100vw" quality={85} className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-[#141F0A]/70" />
      </div>
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-[1] bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-size-[36px_36px]" />

      <div className="custom-container relative z-10 py-20 md:py-28 lg:py-36">
        <SectionHeader
          variant="manifesto"
          headingId="philosophy-heading"
          badgeText="Our Philosophy"
          badgeClassName="text-background/50"
          badgeDotClassName="bg-background/20"
          title={<>Design Rooted in{" "}<span className="italic font-serif font-light underline underline-offset-8 decoration-1 decoration-background/30">Conviction</span></>}
          titleClassName="text-background"
          description={<span className="text-background/40">We believe design is an act of responsibility — a dialogue between intention, craft, and the lives that inhabit the spaces we create.</span>}
          className="mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
          {pillars.map((p) => (
            <div key={p.number} className="group p-8 md:p-10 border-t md:border-t-0 md:border-l first:border-l-0 first:border-t-0 border-background/10">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-mono tracking-[0.3em] text-background/25 group-hover:text-liminal-secondary transition-colors duration-500">{p.number}</span>
                <div className="h-px w-8 bg-background/10 group-hover:w-14 group-hover:bg-liminal-secondary/40 transition-all duration-700" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-heading text-background tracking-tight mb-4 group-hover:text-liminal-secondary transition-colors duration-500">{p.title}</h3>
              <p className="text-background/35 font-light text-[15px] leading-relaxed group-hover:text-background/55 transition-colors duration-500">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center mt-16 pt-10 border-t border-background/10">
          <p className="text-lg md:text-xl italic font-serif text-background/55 leading-relaxed">
            &quot;Great design doesn&apos;t shout. It whispers — and lingers long after you&apos;ve left the room.&quot;
          </p>
          <span className="block mt-4 text-[10px] uppercase tracking-[0.3em] text-background/20 font-bold">— The Liminal Manifesto</span>
        </div>
      </div>
    </section>
  );
};

export default HomePhilosophy;
