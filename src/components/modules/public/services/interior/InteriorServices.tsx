import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import { cn } from "@/lib/utils";
import AnimatedButton from "@/components/shared/AnimatedButton";

// Interior Services Data
const services = [
  {
    title: "Residential Architecture",
    description:
      "Curating the private narrative. We implement structural precision and emotive spatial design to architect residential sanctuaries that reflect the occupant's intellectual and emotional identity.",
    image: "/assets/interior/residential-premium.png",
    id: "residential",
    phase: "Concept to Execution",
    expertise: "Emotive Spatial Design",
    ctaText: "Explore Private Narratives",
  },
  {
    title: "Enterprise Environments",
    description:
      "Architecting brand identity. We develop high-performance commercial landscapes that optimize operational efficiency while translating brand ethos into immersive, tangible reality.",
    image: "/assets/interior/enterprise-premium-v3.png",
    id: "commercial",
    phase: "Strategy to Reality",
    expertise: "Identity Immersion",
    ctaText: "Analyze Corporate Works",
  },
  {
    title: "Strategic Consultancy",
    description:
      "The analytical bridge between vision and structural truth. Our consultancy provides the spatial intelligence and technical rigor required to ground ambitious concepts in functional reality.",
    image: "/assets/interior/consultancy-premium-v7.png",
    id: "consultancy",
    phase: "Analysis to Truth",
    expertise: "Structural Intelligence",
    ctaText: "Review Strategic Insights",
  },
];

// InteriorServices Component
const InteriorServices = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80">
      <div className="custom-container">
        {/* Section Heading */}
        <SectionHeader
          badgeText="Our Expertise"
          title={
            <>
              Strategic Interior{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Solutions
              </span>
            </>
          }
          description="The intersection of architectural logic and strategic performance. We deliver high-impact interior solutions that balance structural precision with the intellectual depth of design."
          variant="manifesto"
          className="mb-16"
        />

        {/* Service Items */}
        <div className="space-y-20 md:space-y-28 lg:space-y-32">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative"
            >
              {/* Left Side: Image */}
              <div
                className={cn(
                  "relative group",
                  index % 2 !== 0 ? "lg:order-2" : "lg:order-1",
                )}
              >
                <div className="relative aspect-4/5 md:aspect-video lg:aspect-5/6 overflow-hidden group rounded-sm shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Right Side: Service Description */}
              <div
                className={cn(
                  "space-y-8",
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
                    SERVICE: {service.id.toUpperCase()}
                  </span>
                  <h3 className="text-5xl font-bold font-heading tracking-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed font-light">
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
                  <AnimatedButton>{service.ctaText}</AnimatedButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorServices;
