import SectionHeader from "@/components/shared/SectionHeader";
import { Compass, Leaf, Diamond, Users } from "lucide-react";

// Process Steps Data
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

// Core Values Data
const values = [
  {
    icon: Compass,
    title: "Innovative Design",
    description:
      "We fuse cutting-edge technology with creative intuition to design spaces that are forward-thinking and timeless.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious",
    description:
      "Sustainability isn't a trend for us; it's a commitment. We prioritize materials and methods that respect the planet.",
  },
  {
    icon: Diamond,
    title: "Uncompromising Quality",
    description:
      "From the initial sketch to the final polish, we maintain the highest standards of craftsmanship",
  },
  {
    icon: Users,
    title: "Tailored Experience",
    description:
      "Your lifestyle is the blueprint of our work. We create bespoke environments that reflect your unique personality.",
  },
];

// ProcessSection Component
const ProcessSection = () => {
  return (
    <section
      id="our-methodology"
      aria-labelledby="process-heading"
      className="py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      <div className="custom-container relative z-10 space-y-32 lg:space-y-48">
        {/* Section Header */}
        <SectionHeader
          variant="centered"
          headingId="process-heading"
          badgeText="OUR METHOD"
          title={
            <>
              A Meticulous{" "}
              <span className="text-liminal-secondary italic font-serif font-light underline underline-offset-8 decoration-1">
                Process
              </span>
            </>
          }
          description="We follow a structured yet fluid methodology to bring your vision to life with precision and care."
        />

        <div className="space-y-24">
          {/* Top: Process Steps */}
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
                  <div className="w-25 h-25 rounded-full bg-background border border-border flex items-center justify-center relative shadow-sm transition-all duration-700 group-hover:border-liminal-secondary group-hover:scale-105">
                    <span className="text-2xl font-bold font-heading text-foreground/80 group-hover:text-liminal-secondary transition-colors duration-500">
                      {step.number}
                    </span>

                    {/* Technical Rotating Ring */}
                    <div className="absolute -inset-3 border border-dashed border-liminal-secondary/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-1500 ease-in-out" />
                    
                    {/* Compass points */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-2 bg-liminal-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1 h-2 bg-liminal-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="space-y-4 transition-transform duration-500 group-hover:-translate-y-2">
                    <h4 className="text-xl font-bold font-heading tracking-tight group-hover:text-liminal-secondary transition-colors duration-500">
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

          {/* Bottom: Core Values */}
          <div className="space-y-10">
            <div className="text-center space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-liminal-secondary">Our Core Principles</h4>
              <p className="text-3xl font-bold font-heading">The Foundation of Every Project</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 border border-border/40 rounded-3xl overflow-hidden shadow-lg bg-secondary/5">
            {values.map((item, index) => (
              <div
                key={index}
                className="group p-10 lg:p-12 bg-background border-b md:border-b-0 md:border-r last:border-b-0 last:border-r-0 border-border/40 transition-all duration-700 hover:bg-secondary/10 relative overflow-hidden"
              >
                {/* Background Decorative Number */}
                <div className="absolute top-10 right-10 text-7xl font-bold font-heading text-liminal-secondary/5 select-none z-0 transition-all duration-700 group-hover:text-liminal-secondary/10 group-hover:-translate-y-2">
                  0{index + 1}
                </div>

                <div className="relative z-10 space-y-8">
                  <div className="w-14 h-14 rounded-full bg-liminal-secondary/5 border border-liminal-secondary/10 flex items-center justify-center text-liminal-secondary group-hover:bg-liminal-secondary group-hover:text-white transition-all duration-500 shadow-sm">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold font-heading tracking-tight group-hover:text-liminal-secondary transition-colors duration-500">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="w-0 group-hover:w-12 h-0.5 bg-liminal-secondary transition-all duration-500" />
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

export default ProcessSection;
