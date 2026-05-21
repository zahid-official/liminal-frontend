import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

// Expertise Data
const expertise = [
  {
    title: "Architectural Identity",
    description:
      "Creating iconic structures that balance contextual heritage with a unique sense of place.",
  },
  {
    title: "Material Curation",
    description:
      "Curating textures and tones that evoke emotional resonance and tactile sophistication.",
  },
  {
    title: "Technical Rigor",
    description:
      "Translating complex visions into buildable reality through meticulous technical coordination.",
  },
  {
    title: "Sustainable Legacy",
    description:
      "Integrating resilient design systems to ensure a lasting legacy of environmental stewardship.",
  },
];

// ProjectTeam Component
const ProjectTeam = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-zinc-50/80 overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Image Container */}
          <div className="relative aspect-square lg:aspect-4/5 overflow-hidden group cursor-pointer">
            <Image
              src="/assets/projects/bg-project-premium.png"
              alt="Professional Team"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110 ease-out"
            />
            
            {/* Subtle Brand Overlay */}
            <div className="absolute inset-0 bg-liminal-secondary/5 group-hover:bg-transparent transition-colors duration-1000" />
            
            <div className="absolute inset-0 border-20 border-background/10" />

            {/* Technical Stamp */}
            <div className="absolute bottom-10 right-10 bg-foreground text-background p-6 md:p-8 flex flex-col gap-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em]">
                Liminal Std.
              </span>
              <span className="text-lg font-bold uppercase tracking-wide italic font-serif">
                Expertise
              </span>
            </div>
          </div>

          {/* Right: Content Container */}
          <div className="">
            <SectionHeader
              badgeText="The Approach"
              title={
                <>
                  Architecture of <br className="max-lg:hidden" />
                  <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                    Pure Intention
                  </span>
                </>
              }
              description="A studio dedicated to spatial storytelling, bridging structural logic and human experience through refined, intentional detail."
              variant="inline"
              className=" space-y-5"
            />

            {/* Expertise Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 border-y border-border/60">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className={`
                    p-8 md:p-10 hover:bg-liminal-secondary transition-colors duration-500 ease-in-out group relative
                    ${index % 2 === 0 ? "sm:border-r border-border/60" : ""}
                    ${index < 2 ? "border-b border-border/60" : ""}
                  `}
                >
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Heading Info  */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-mono tracking-[0.2em] text-liminal-secondary group-hover:text-background/90 uppercase font-semibold transition-colors duration-500 ease-in-out">
                          STRATUM
                        </span>

                        <span className="w-1 h-1 rounded-full bg-liminal-secondary group-hover:bg-background/30 transition-colors duration-500 ease-in-out" />

                        <span className="text-[11px] font-mono tracking-widest text-foreground/60 group-hover:text-background/60 uppercase transition-colors duration-500 ease-in-out">
                          0{index + 1}
                        </span>
                      </div>

                      {/* Horizontal Line */}
                      <div className="h-px w-4 bg-border group-hover:w-8 group-hover:bg-background transition-all duration-500 ease-in-out" />
                    </div>

                    <h3 className="text-xl md:text-2xl font-light tracking-tighter my-2.5 group-hover:text-background transition-colors duration-500 ease-in-out">
                      {item.title}
                    </h3>

                    <p className="text-sm text-foreground/60 leading-relaxed group-hover:text-background/80 transition-colors duration-500 ease-in-out">
                      {item.description}
                    </p>
                  </div>

                  {/* Subtle Decorative Background Number */}
                  <div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-10 transition-all duration-500 ease-in-out pointer-events-none transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-4xl font-mono italic select-none text-background">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTeam;
