import LiminalButton from "@/components/shared/LiminalButton";
import Link from "next/link";

const ProjectCTA = () => {
  return (
    <section className="relative py-24 lg:py-40 bg-[#141f0a] overflow-hidden text-white">
      {/* Background Decorative Rings (Technical Vibe) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square border border-white/5 rounded-full pointer-events-none italic animate-[spin_60s_linear_infinite]" />
      
      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 bottom-0 left-[20%] w-px bg-white" />
        <div className="absolute top-0 bottom-0 left-[80%] w-px bg-white" />
        <div className="absolute left-0 right-0 top-[30%] h-px bg-white" />
        <div className="absolute left-0 right-0 top-[70%] h-px bg-white" />
      </div>

      <div className="custom-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="flex items-center gap-3 mb-12">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-liminal-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-liminal-secondary"></span>
            </span>
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase font-bold text-white/60">
              STATUS_ACTIVE : ACCEPTING_ENQUIRIES
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-10 font-heading">
            Ready to Architect <br />
            <span className="italic font-serif font-light underline underline-offset-12 decoration-1 decoration-white/20">
              Your Vision?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-16 max-w-2xl">
            We collaborate with visionary clients to create environments that 
            redefine the standards of modern living and commercial excellence.
          </p>

          <Link href="/contact" className="inline-block mt-8">
            <LiminalButton 
              variant="primary" 
              className="px-12 py-8 text-lg"
            >
              START A PROJECT
            </LiminalButton>
          </Link>

          {/* Technical Metadata Footer */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full border-t border-white/10 pt-10">
            <div className="flex flex-col gap-1 items-start">
              <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase">Global_LAT</span>
              <span className="text-xs font-medium">52.5200° N</span>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase">Global_LONG</span>
              <span className="text-xs font-medium">13.4050° E</span>
            </div>
            <div className="flex flex-col gap-1 items-start">
               <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase">Session_ID</span>
               <span className="text-xs font-medium">LMNL-2025-X</span>
            </div>
            <div className="flex flex-col gap-1 items-start">
               <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase">Response_Code</span>
               <span className="text-xs font-medium text-liminal-secondary">200_OK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCTA;
