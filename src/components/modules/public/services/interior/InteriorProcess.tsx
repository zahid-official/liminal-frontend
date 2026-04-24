import SectionHeader from "@/components/shared/SectionHeader";

const processes = [
  {
    step: "01",
    title: "Discovery & Vision",
    description: "We begin by understanding your needs, aspirations, and the unique characteristics of your space."
  },
  {
    step: "02",
    title: "Conceptualization",
    description: "Our designers craft a unique visual narrative, presenting mood boards, sketches, and spatial plans."
  },
  {
    step: "03",
    title: "Refinement",
    description: "We meticulously refine every detail, from material selection to technical drawings and lighting design."
  },
  {
    step: "04",
    title: "Execution",
    description: "Our dedicated team oversees the transformation, ensuring the highest standards of craftsmanship."
  }
];

const InteriorProcess = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="custom-container">
        <SectionHeader
          badgeText="Our Method"
          title="The Design Journey"
          description="A structured yet fluid process designed to bring your vision to life with precision and care."
          variant="inline"
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mt-16">
          {processes.map((item) => (
            <div key={item.step} className="group p-8 border border-border/40 hover:border-liminal-secondary/30 transition-all duration-500 bg-white hover:shadow-xl relative overflow-hidden">
              {/* Background step number */}
              <span className="absolute -bottom-4 -right-4 text-7xl font-bold font-heading text-zinc-50 group-hover:text-liminal-secondary/5 transition-colors duration-500">
                {item.step}
              </span>

              <div className="relative z-10 space-y-6">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-xs font-bold group-hover:bg-liminal-secondary group-hover:text-white group-hover:border-liminal-secondary transition-all duration-500">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold font-heading">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorProcess;
