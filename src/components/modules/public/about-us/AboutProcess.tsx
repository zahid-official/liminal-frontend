import CenteredSectionHeader from "@/components/shared/CenteredSectionHeader";

const steps = [
  {
    number: "01",
    title: "Discovery & Vision",
    description:
      "We begin by understanding your lifestyle, aspirations, and the unique challenges of your space.",
  },
  {
    number: "02",
    title: "Conceptual Design",
    description:
      "Our team develops mood boards, layouts, and materials that align with your vision and budget.",
  },
  {
    number: "03",
    title: "Detailed Development",
    description:
      "Precise 3D renderings and technical drawings ensure every detail is accounted for before execution.",
  },
  {
    number: "04",
    title: "Curation & Build",
    description:
      "We manage the sourcing and construction process, ensuring quality and timeliness at every stage.",
  },
];

const AboutProcess = () => {
  return (
    <div className="space-y-24">
      <CenteredSectionHeader
        badgeText="OUR METHOD"
        title={
          <>
            A Meticulous <span className="text-liminal-secondary">Process</span>
          </>
        }
        description="We follow a structured yet fluid methodology to bring your vision to life with precision and care."
      />

      <div className="relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden lg:block absolute top-[2.35rem] left-[10%] w-[80%] h-px bg-linear-to-r from-transparent via-border/60 to-transparent" />

        {/* Measurement Ticks (Desktop) */}
        <div className="hidden lg:flex absolute top-[2.1rem] left-[15%] w-[70%] justify-between pointer-events-none opacity-20">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-px h-2 bg-foreground" />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-8 group px-8"
            >
              {/* Number Circle */}
              <div className="w-20 h-20 rounded-2xl bg-background border border-border flex items-center justify-center relative shadow-sm transition-all duration-700 group-hover:border-liminal-secondary group-hover:rotate-6">
                <span className="text-2xl font-bold font-heading text-foreground/80 group-hover:text-liminal-secondary transition-colors duration-500">
                  {step.number}
                </span>

                {/* Decorative blueprint corners */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-liminal-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-liminal-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold font-heading tracking-tight">
                  {step.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>

              {/* Vertical connector for mobile/tablet */}
              <div className="lg:hidden w-px h-12 bg-linear-to-b from-border to-transparent last:hidden" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutProcess;
