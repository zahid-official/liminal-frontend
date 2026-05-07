import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";

// Process phases data
const phases = [
  {
    number: "01",
    title: "Listen & Understand",
    description:
      "Every exceptional space begins with deep listening. We immerse ourselves in your world — understanding your lifestyle, aspirations, and the emotional qualities you seek. This phase establishes the soul of the project.",
    detail: "Discovery Sessions · Site Analysis · Vision Mapping",
  },
  {
    number: "02",
    title: "Envision & Conceptualize",
    description:
      "With understanding as our foundation, we translate your vision into spatial concepts. Mood boards, material palettes, and 3D visualizations bring the abstract into focus — giving shape to ideas before a single wall is touched.",
    detail: "Concept Development · 3D Visualization · Material Curation",
  },
  {
    number: "03",
    title: "Refine & Detail",
    description:
      "Precision transforms good design into extraordinary design. We refine every dimension, specify every finish, and engineer every detail. Technical drawings and specifications ensure nothing is left to chance.",
    detail: "Technical Drawings · Specification · Quality Assurance",
  },
  {
    number: "04",
    title: "Realize & Deliver",
    description:
      "The culmination of our collaborative journey. We oversee every phase of execution with meticulous attention, ensuring the finished space honors the original vision while exceeding expectations in its physical reality.",
    detail: "Project Management · Artisan Coordination · Final Handover",
  },
];

// AboutProcess Component — Vertical Timeline with Alternating Sides
const AboutProcess = () => {
  return (
    <section
      id="about-process"
      aria-labelledby="process-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80"
    >
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          variant="centered"
          badgeText="Our Approach"
          headingId="process-heading"
          title={
            <>
              From First Conversation to{" "}
              <span className="italic font-serif font-light text-liminal-secondary">
                Final Reveal
              </span>
            </>
          }
          description="A meticulous four-phase journey that transforms your aspirations into architectural reality — with care and precision at every threshold."
          className="mb-16 lg:mb-24"
        />

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Line — Desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {/* Phases */}
          <div className="space-y-12 lg:space-y-0">
            {phases.map((phase, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={phase.number}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-16"
                >
                  {/* Diamond Node on Center Line */}
                  <div className="hidden lg:flex absolute left-1/2 top-10 -translate-x-1/2 z-10 items-center justify-center">
                    <div className="w-4 h-4 rotate-45 bg-white border-2 border-liminal-secondary/50" />
                  </div>

                  {/* Content Block */}
                  <div
                    className={cn(
                      "relative group",
                      // Alternating sides
                      isLeft
                        ? "lg:col-start-1 lg:pr-16 lg:text-right"
                        : "lg:col-start-2 lg:pl-16 lg:text-left"
                    )}
                  >
                    {/* Mobile timeline dot */}
                    <div className="flex items-center gap-4 mb-4 lg:hidden">
                      <div className="w-3 h-3 rotate-45 border-2 border-liminal-secondary/50 bg-white shrink-0" />
                      <div className="h-px flex-1 bg-border" />
                    </div>

                    <div className="bg-white border border-border/50 p-8 sm:p-10 transition-all duration-500 group-hover:border-liminal-secondary/30 group-hover:shadow-lg group-hover:shadow-liminal-secondary/5">
                      {/* Phase Number */}
                      <span className="text-[10px] font-mono tracking-[0.4em] text-liminal-secondary/60 uppercase block mb-3">
                        Phase {phase.number}
                      </span>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight mb-4">
                        {phase.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground font-light leading-relaxed text-[15px] mb-6">
                        {phase.description}
                      </p>

                      {/* Detail Tags */}
                      <div className="pt-4 border-t border-border/30">
                        <span className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground/60 uppercase">
                          {phase.detail}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Empty column for spacing on alternating side */}
                  <div
                    className={cn(
                      "hidden lg:block",
                      isLeft ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"
                    )}
                  />
                </div>
              );
            })}
          </div>

          {/* Timeline End Cap */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 -bottom-4 items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-liminal-secondary/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;
