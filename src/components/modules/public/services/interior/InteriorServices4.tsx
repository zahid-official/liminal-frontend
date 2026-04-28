import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import { cn } from "@/lib/utils";
import AnimatedButton from "@/components/shared/AnimatedButton";

const services = [
  {
    title: "Residential Sanctuaries",
    description:
      "Living spaces that breathe with intention. We merge technical precision with emotional resonance to create sanctuaries where every detail—from light to texture—aligns with your personal narrative.",
    image: "/assets/interior/residential-premium.png",
    id: "residential",
    phase: "Concept to Curation",
    expertise: "Emotive Spatial Design",
  },
  {
    title: "Commercial Environments",
    description:
      "Defining the intersection of performance and identity. We design immersive environments that translate brand ethos into physical form, balancing operational efficiency with a soul-stirring atmosphere.",
    image: "/assets/commercial-design.png",
    id: "commercial",
    phase: "Strategy to Execution",
    expertise: "Brand Immersion",
  },
  {
    title: "Design Consultancy",
    description:
      "The bridge between vision and structural reality. Our consultancy provides the rigorous logic and spatial intelligence required to ground ambitious architectural concepts in functional truth.",
    image: "/assets/interior/consultancy-premium.png",
    id: "consultancy",
    phase: "Logic to Blueprint",
    expertise: "Structural Intelligence",
  },
];

const InteriorServices4 = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80">
      <div className="custom-container">
        {/* Section Heading */}
        <SectionHeader
          badgeText="Our Expertise"
          title={
            <>
              Curated Interior{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Typologies
              </span>
            </>
          }
          description="The intersection of architectural rigor and human emotion. We deliver bespoke interior solutions that balance structural precision with the warm soul of design."
          variant="centered"
          className="mb-16 custom-container"
        />

        {/* Service Items */}
        <div className="space-y-20 md:space-y-28 lg:space-y-40">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center custom-container relative",
                index % 2 !== 0 && "lg:flex-row-reverse",
              )}
            >
              {/* Background Index Number */}
              <div
                className={cn(
                  "absolute -top-12 text-[12rem] font-bold font-heading text-liminal-secondary/3 select-none -z-10 hidden lg:block",
                  index % 2 !== 0 ? "left-0" : "right-0",
                )}
              >
                0{index + 1}
              </div>
              {/* Left Side: Image */}
              <div
                className={cn(
                  "lg:col-span-6 relative group",
                  index % 2 !== 0 ? "lg:order-2" : "lg:order-1",
                )}
              >
                <div className="relative aspect-4/5 md:aspect-video lg:aspect-4/5 overflow-hidden group rounded-sm shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Architectural Elements - Blueprint Corners */}
                <div
                  className={cn(
                    "absolute -top-4 -left-4 w-12 h-12 border-t border-l border-liminal-secondary/20 -z-10",
                    index % 2 !== 0 && "lg:left-auto lg:-right-4 lg:border-l-0 lg:border-r",
                  )}
                />
                <div
                  className={cn(
                    "absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-liminal-secondary/20 -z-10",
                    index % 2 !== 0 && "lg:right-auto lg:-left-4 lg:border-r-0 lg:border-l",
                  )}
                />
              </div>

              {/* Right Side: Service Description */}
              <div
                className={cn(
                  "lg:col-span-5 space-y-8",
                  index % 2 !== 0 ? "lg:order-1 lg:text-right" : "lg:order-2",
                )}
              >
                <div
                  className={cn(
                    "flex flex-col gap-1",
                    index % 2 !== 0 ? "items-end" : "items-start",
                  )}
                >
                  <span className="text-[10px] font-mono tracking-[0.4em] text-liminal-secondary font-bold uppercase">
                    SERVICE_ID: {service.id.toUpperCase()}
                  </span>
                  <h3 className="text-4xl font-bold font-heading tracking-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Technical Specs */}
                <div
                  className={cn(
                    "flex gap-10 pt-8 border-t border-border/40",
                    index % 2 !== 0 ? "flex-row-reverse" : "flex-row",
                  )}
                >
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono tracking-widest text-muted-foreground uppercase">
                      Phase
                    </span>
                    <p className="text-[11px] font-bold uppercase tracking-tight">
                      {service.phase}
                    </p>
                  </div>

                  <div className="w-px h-8 bg-border/40 mt-1" />

                  <div className="space-y-1">
                    <span className="text-[9px] font-mono tracking-widest text-muted-foreground uppercase">
                      Expertise
                    </span>
                    <p className="text-[11px] font-bold uppercase tracking-tight">
                      {service.expertise}
                    </p>
                  </div>
                </div>

                <div
                  className={cn(
                    "pt-6",
                    index % 2 !== 0 ? "flex justify-end" : "flex justify-start",
                  )}
                >
                  <AnimatedButton className="uppercase tracking-widest text-[10px]">
                    Explore Projects
                  </AnimatedButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorServices4;
