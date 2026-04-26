import React from "react";
import LiminalButton from "@/components/shared/LiminalButton";
import { MessageSquare } from "lucide-react";
import Image from "next/image";

const InteriorCTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-zinc-50 text-zinc-950">
      {/* Background Image with Blending */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zinc-50/90 z-10" />
        <Image
          src="/assets/interior-cta-bg-v2.png"
          alt="Background Texture"
          fill
          className="object-cover opacity-40 mix-blend-soft-light transition-opacity duration-1000"
          quality={100}
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-50 via-transparent to-zinc-50 z-20" />
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-liminal-secondary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] bg-[url('/assets/grid-pattern.png')] bg-repeat" />
      </div>

      <div className="custom-container relative z-30">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-md shadow-sm">
            <div className="w-2 h-2 rounded-full bg-liminal-secondary animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
              Start Your Journey
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-[1.1] tracking-tight">
            Ready to <span className="italic font-light text-liminal-secondary">Transform</span> Your
            Space?
          </h2>

          <p className="text-zinc-600 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Whether it&apos;s a private residence or a commercial landmark, our team
            is ready to bring your vision to life with architectural precision
            and artistic flair.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <LiminalButton
              icon={MessageSquare}
              className="w-full sm:w-auto bg-zinc-950 text-white hover:bg-zinc-800 hover:scale-105 transition-all duration-500 shadow-2xl shadow-black/10"
              iconClassName="text-white"
            >
              Book a Consultation
            </LiminalButton>
            <LiminalButton
              variant="outline"
              className="w-full sm:w-auto border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 backdrop-blur-sm"
              showIcon={false}
            >
              View Our Portfolio
            </LiminalButton>
          </div>
        </div>
      </div>

      {/* Technical Detail */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8 opacity-40 z-30">
        <div className="h-px w-24 bg-zinc-300" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
          Liminal Architectural Studio &copy; 2026
        </span>
        <div className="h-px w-24 bg-zinc-300" />
      </div>
    </section>
  );
};

export default InteriorCTA;
