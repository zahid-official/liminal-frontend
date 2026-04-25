import React from "react";
import LiminalButton from "@/components/shared/LiminalButton";
import { MessageSquare } from "lucide-react";

const InteriorCTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-zinc-950 text-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-liminal-secondary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/assets/grid-pattern.png')] bg-repeat" />
      </div>

      <div className="custom-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-liminal-secondary animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
              Start Your Journey
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-[1.1]">
            Ready to <span className="italic font-light text-liminal-secondary">Transform</span> Your
            Space?
          </h2>

          <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Whether it's a private residence or a commercial landmark, our team
            is ready to bring your vision to life with architectural precision
            and artistic flair.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <LiminalButton
              icon={MessageSquare}
              className="w-full sm:w-auto"
            >
              Book a Consultation
            </LiminalButton>
            <LiminalButton
              variant="outline"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5"
              showIcon={false}
            >
              View Our Portfolio
            </LiminalButton>
          </div>
        </div>
      </div>

      {/* Technical Detail */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8 opacity-20">
        <div className="h-px w-24 bg-white/30" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
          Liminal Architectural Studio &copy; 2026
        </span>
        <div className="h-px w-24 bg-white/30" />
      </div>
    </section>
  );
};

export default InteriorCTA;
