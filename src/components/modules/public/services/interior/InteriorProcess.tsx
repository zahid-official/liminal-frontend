import React from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Discovery & Vision",
    description: "We begin by diving deep into your lifestyle, preferences, and functional needs to establish a clear creative direction.",
  },
  {
    number: "02",
    title: "Concept Development",
    description: "Our designers craft mood boards, spatial layouts, and initial 3D visualizations to bring the vision to life.",
  },
  {
    number: "03",
    title: "Technical Drafting",
    description: "Precise blueprints, electrical layouts, and material specifications are developed with architectural rigor.",
  },
  {
    number: "04",
    title: "Execution & Styling",
    description: "We oversee the transformation, ensuring every detail matches the design intent, finishing with expert curation.",
  },
];

const InteriorProcess = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Decorative Background Line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-border/40 -z-10 hidden lg:block" />

      <div className="custom-container">
        <SectionHeader
          variant="split"
          badgeText="Our Process"
          title={<>How We <span className="italic font-light">Craft</span> Excellence</>}
          description="A structured, transparent approach that ensures your project is delivered on time, within budget, and beyond expectations."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative p-8 bg-white border border-border/60 rounded-sm hover:border-liminal-secondary transition-all duration-500 hover:shadow-2xl hover:shadow-liminal-secondary/5"
            >
              {/* Animated Corner */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-liminal-secondary opacity-0 group-hover:w-4 group-hover:h-4 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="flex flex-col gap-6">
                <span className="text-4xl font-bold font-heading text-liminal-secondary/20 group-hover:text-liminal-secondary transition-colors duration-500">
                  {step.number}
                </span>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-heading">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Measurement Line at bottom */}
              <div className="absolute bottom-4 left-8 right-8 h-px bg-border group-hover:bg-liminal-secondary/30 transition-colors duration-500">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-border group-hover:bg-liminal-secondary" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-border group-hover:bg-liminal-secondary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorProcess;
