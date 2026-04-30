import LiminalButton from "@/components/shared/LiminalButton";
import SectionHeader from "@/components/shared/SectionHeader";
import { Hammer, Layers, PenTool, Sparkles } from "lucide-react";
import Image from "next/image";

// ProcessSteps Data
const processSteps = [
  {
    code: "STEP_01",
    title: "Concept & Blueprint",
    description:
      "We translate your vision into precise architectural drawings, ensuring structural integrity and aesthetic alignment.",
    icon: PenTool,
  },
  {
    code: "STEP_02",
    title: "Material Curation",
    description:
      "Sourcing the finest FSC-certified hardwoods, premium textiles, and bespoke hardware tailored to your choice.",
    icon: Layers,
  },
  {
    code: "STEP_03",
    title: "Master Crafting",
    description:
      "Our master craftsmen execute the design with millimetric precision, blending traditional joinery with modern tech.",
    icon: Hammer,
  },
  {
    code: "STEP_04",
    title: "Refinement & Delivery",
    description:
      "Final hand-finishing and rigorous quality checks before white-glove installation in your sanctuary.",
    icon: Sparkles,
  },
];

const FurnitureAtelier = () => {
  return (
    <section
      id="atelier"
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-white"
    >
      {/* Background Decorative Element - Blueprint Style */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-4 pointer-events-none hidden lg:block">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 400 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 100H400M0 200H400M0 300H400M0 400H400M0 500H400M0 600H400M0 700H400"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path
            d="M100 0V800M200 0V800M300 0V800"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="200"
            cy="400"
            r="150"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <rect
            x="50"
            y="250"
            width="300"
            height="300"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left: Process Narrative */}
          <div className="lg:col-span-6 ">
            {/* Section Header */}
            <SectionHeader
              variant="inline"
              badgeText="Custom Atelier"
              title={
                <>
                  The Anatomy of{" "}
                  <span className="text-liminal-secondary italic font-serif">
                    Bespoke Excellence
                  </span>
                </>
              }
              description="Beyond our ready collection, we offer a dedicated bespoke service. From single statement pieces to full-suite custom furniture projects, our Atelier bridges the gap between imagination and reality."
            />

            <div className="pt-10 pb-3">
              {processSteps.map((step, idx) => (
                <div key={step.code} className="group flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 shrink-0 aspect-square rounded-full border border-border/60 flex items-center justify-center bg-zinc-50 group-hover:border-liminal-secondary group-hover:bg-liminal-secondary/5 transition-all duration-500">
                      <step.icon className="w-5 h-5 text-muted-foreground group-hover:text-liminal-secondary transition-colors" />
                    </div>
                    {idx !== processSteps.length - 1 && (
                      <div className="w-px h-full bg-border/40 my-4" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-[10px] font-mono tracking-widest text-liminal-secondary/60 uppercase block mb-2">
                      {step.code}
                    </span>
                    <h4 className="text-lg font-bold font-heading mb-3 group-hover:text-liminal-secondary transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-md font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <LiminalButton>Start Custom Quote</LiminalButton>
          </div>

          {/* Right: Visual Showcase */}
          <div className="lg:col-span-6 lg:sticky lg:top-32">
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-4/5 rounded-sm overflow-hidden shadow-3xl">
                <Image
                  src="/assets/furniture/custom-workshop.png"
                  alt="Liminal Furniture Atelier Workshop"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Detail Card */}
                <div className="absolute bottom-10 left-10 right-10 rounded bg-white/75 backdrop-blur-lg p-8 border-l-4 border-liminal-secondary/80 shadow-xl">
                  <p className="text-[10px] font-mono text-liminal-secondary uppercase tracking-[0.3em]">
                    Currently Crafting
                  </p>
                  <h5 className="text-xl font-bold font-heading my-2">
                    The Ouroboros Dining Table
                  </h5>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    A 3.5-meter seamless walnut centerpiece featuring internal
                    brass reinforcement and signature hidden joinery.
                  </p>
                  <div className="mt-3 flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full border-2 border-white/80 bg-zinc-200 overflow-hidden"
                        >
                          <Image
                            src={`/assets/furniture/collection-chair-v2.png`}
                            alt="Crafstman"
                            width={32}
                            height={32}
                            className="object-cover opacity-50"
                          />
                        </div>
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/70">
                      4 Master Craftsmen assigned
                    </span>
                  </div>
                </div>
              </div>

              {/* Secondary Overlapping Image */}
              <div className="absolute -top-12 -right-12 w-48 h-48 md:w-64 md:h-64 border-8 border-white rounded-sm overflow-hidden shadow-2xl hidden md:block">
                <Image
                  src="/assets/furniture/custom-process-v2.png"
                  alt="Material Detail"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Technical Drawing Overlay (SVG) */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-liminal-secondary flex items-center justify-center p-6 text-white shadow-xl">
                <div className="text-center">
                  <p className="text-2xl font-bold font-heading leading-tight">
                    100%
                  </p>
                  <p className="text-[8px] font-bold uppercase tracking-widest">
                    Bespoke Guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FurnitureAtelier;
