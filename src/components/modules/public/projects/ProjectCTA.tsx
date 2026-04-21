import LiminalButton from "@/components/shared/LiminalButton";
import SectionHeader from "@/components/shared/SectionHeader";
import Link from "next/link";

const ProjectCTA = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-zinc-50/80 overflow-hidden">
      {/* Background Decorative Rings (Technical Vibe) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border border-liminal-secondary/20 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square border border-liminal-secondary/20 rounded-full pointer-events-none italic animate-[spin_60s_linear_infinite]" />

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 bottom-0 left-[20%] w-px bg-liminal-secondary" />
        <div className="absolute top-0 bottom-0 left-[80%] w-px bg-liminal-secondary" />
        <div className="absolute left-0 right-0 top-[10%] h-px bg-liminal-secondary" />
        <div className="absolute left-0 right-0 bottom-[10%] h-px bg-liminal-secondary" />
      </div>

      <div className="custom-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="flex items-center gap-3 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-liminal-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-liminal-secondary"></span>
            </span>
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase font-bold">
              STATUS_ACTIVE : ACCEPTING_ENQUIRIES
            </span>
          </div>

          {/* Section Header */}
          <SectionHeader
            variant="centered"
            title={
              <>
                Ready to Architect <br className="max-lg:hidden" />
                <span className="text-liminal-secondary font-serif italic font-normal underline underline-offset-8 decoration-1">
                  Your Vision
                </span>
              </>
            }
            description="We collaborate with visionary clients to create environments that redefine the standards of modern living and commercial excellence."
            className="mb-8"
          />

          <Link href="/contact">
            <LiminalButton>Start A Project</LiminalButton>
          </Link>

          {/* Technical Metadata Footer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full mt-14 pt-5 border-t border-border/30">
            <div className="flex flex-col gap-1 items-start">
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                Global_LAT
              </span>
              <span className="text-xs font-medium">52.5200° N</span>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                Global_LONG
              </span>
              <span className="text-xs font-medium">13.4050° E</span>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                Session_ID
              </span>
              <span className="text-xs font-medium">LMNL-2025-X</span>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                Response_Code
              </span>
              <span className="text-xs font-medium text-liminal-secondary">
                200_OK
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCTA;
