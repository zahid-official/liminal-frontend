import AnimatedButton from "@/components/shared/AnimatedButton";
import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowRight } from "lucide-react";

const ProjectsCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-[#141f0a] text-white relative overflow-hidden">
      {/* Structural Lines Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-white" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-white" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-white" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-white" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-white" />
      </div>

      <div className="custom-container relative z-10 text-center">
        <SectionHeader
          variant="centered"
          badgeText="Collaborate With Us"
          badgeClassName="text-white"
          title={
            <>
              Elevate Your Space with <br />
              <span className="italic font-serif font-light">Architectural Excellence</span>
            </>
          }
          description="Ready to start your next premium project? Our team of experts is here to transform your vision into a structural reality that resonates with your brand's essence."
          className="mb-12"
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <AnimatedButton className="bg-white text-black border-white hover:bg-transparent hover:text-white group px-8 py-6 h-auto text-base">
            <span className="flex items-center gap-3">
              Start Your Project <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </AnimatedButton>
          
          <button className="text-xs font-mono uppercase tracking-[0.4em] py-4 px-8 border border-white/20 hover:border-white/60 transition-all">
            Browse All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCTA;
