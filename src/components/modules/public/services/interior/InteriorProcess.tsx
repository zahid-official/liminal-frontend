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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mt-20 border border-border/40 divide-y md:divide-y-0 md:divide-x divide-border/40">
          {processes.map((item) => (
            <div 
              key={item.step} 
              className="group p-10 lg:p-12 transition-all duration-700 bg-white hover:bg-zinc-50/80 relative overflow-hidden"
            >
              {/* Top progress line for desktop */}
              <div className="absolute top-0 left-0 w-full h-1 bg-liminal-secondary/0 group-hover:bg-liminal-secondary transition-all duration-700" />
              
              {/* Background step number - larger and more subtle */}
              <span className="absolute bottom-3 right-4 text-5xl md:text-7xl font-bold font-heading text-black/4 group-hover:text-liminal-secondary/4 transition-colors duration-700 pointer-events-none">
                {item.step}
              </span>

              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono tracking-[0.3em] text-liminal-secondary font-bold">
                    STEP_{item.step}
                  </span>
                  <div className="h-px w-8 bg-liminal-secondary/30" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-heading tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
                
                {/* Decorative architectural dot */}
                <div className="pt-4">
                  <div className="size-1.5 rounded-full bg-border group-hover:bg-liminal-secondary group-hover:scale-150 transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorProcess;
