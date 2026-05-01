import AnimatedButton from "@/components/shared/AnimatedButton";
import Link from "next/link";

const ProjectsCTA = () => {
  return (
    <section className="py-24 md:py-40 bg-[#141f0a] text-white overflow-hidden relative">
      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-[20%] w-px h-full bg-white" />
        <div className="absolute top-0 left-[50%] w-px h-full bg-white" />
        <div className="absolute top-0 left-[80%] w-px h-full bg-white" />
        <div className="absolute top-[30%] left-0 w-full h-px bg-white" />
        <div className="absolute top-[70%] left-0 w-full h-px bg-white" />
      </div>

      <div className="custom-container relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-px bg-white/30" />
            <span className="text-[11px] font-bold uppercase tracking-[0.6em] text-white/50">
              Project Initiation
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] tracking-tighter">
            Manifesting <span className="italic font-serif font-light text-white/70">Extraordinary</span> <br className="hidden md:block" /> Architectural Truths
          </h2>
          
          <p className="text-[16px] md:text-lg text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
            Ready to ground your ambitious concepts in structural reality? Our team of experts is prepared to bridge the gap between creative vision and high-performance reality.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-10">
            <Link href="/contact">
              <AnimatedButton className="border-white/20 hover:border-white/40 [&_span.text-foreground]:text-white/90">
                Begin Your Journey
              </AnimatedButton>
            </Link>
            <Link href="/services" className="group flex items-center gap-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors duration-500">
                    Explore Our Expertise
                </span>
                <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-white/50 transition-all duration-500" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background large text for texture */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15vw] font-black text-white/[0.02] uppercase leading-none select-none pointer-events-none font-heading">
        Liminal_Works
      </div>
    </section>
  );
};

export default ProjectsCTA;
