import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Discovery & Vision",
    description:
      "We explore the landscape of your lifestyle and aspirations to anchor the project in a distinct, purpose-driven vision.",
  },
  {
    number: "02",
    title: "Conceptual Evolution",
    description:
      "Translating initial concepts into vivid spatial narratives and digital models that begin to shape the physical world.",
  },
  {
    number: "03",
    title: "Technical Drafting",
    description:
      "Developing precise blueprints and technical specifications that ground the creative vision in architectural logic and structural truth.",
  },
  {
    number: "04",
    title: "Final Realization",
    description:
      "The culmination of our journey, where artisanal craftsmanship and expert oversight breathe life into your finished sanctuary.",
  },
];

const InteriorProcess = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="custom-container">
        <SectionHeader
          variant="split"
          badgeText="Our Process"
          title={
            <>
              From Vision to{" "}
              <span className="italic font-light font-serif text-liminal-secondary">
                Reality
              </span>
            </>
          }
          description="A meticulous four-stage evolution that translates abstract inspiration into tangible architectural reality."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative p-8 bg-background border border-border/60 hover:border-liminal-secondary transition-all duration-500 hover:shadow-2xl hover:shadow-liminal-secondary/5"
            >
              {/* Animated Corner */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-liminal-secondary opacity-0 group-hover:w-4 group-hover:h-4 group-hover:opacity-100 transition-all duration-500" />

              <div className="flex flex-col gap-6">
                <span className="text-4xl font-bold font-heading text-liminal-secondary/20 group-hover:text-liminal-secondary transition-colors duration-500">
                  {step.number}
                </span>

                <div className="space-y-4 mb-6">
                  <h3 className="text-xl font-bold font-heading">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Measurement Line at bottom */}
              <div className="absolute bottom-6.5 left-8 right-8 h-px bg-border group-hover:bg-liminal-secondary/80 transition-colors duration-300">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-border group-hover:bg-liminal-secondary transition-colors duration-300" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-border group-hover:bg-liminal-secondary transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorProcess;
