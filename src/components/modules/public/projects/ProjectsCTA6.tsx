"use client";

import AnimatedButton from "@/components/shared/AnimatedButton";
import Link from "next/link";

const ProjectsCTA = () => {
  return (
    <section className="py-32 bg-[#0a0f04] relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#b0d291] opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="custom-container text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-8">
          <span className="text-[11px] font-mono tracking-[0.4em] text-[#b0d291] uppercase">
            Let's Collaborate
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-light text-white leading-tight uppercase">
            Ready to build <br />
            <span className="italic font-serif">Your Vision?</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
            Whether it's a private sanctuary or a commercial flagship, our team is ready to bring architectural excellence to your next project.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact">
              <AnimatedButton className="bg-[#b0d291] border-[#b0d291] [&_span.text-foreground]:text-black hover:opacity-90">
                Start a Project
              </AnimatedButton>
            </Link>
            <Link href="/services/interior">
              <AnimatedButton className="border-white/20 hover:border-white/40 [&_span.text-foreground]:text-white">
                Our Services
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Aesthetic Line Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden opacity-10">
         <div className="flex justify-center gap-1">
            {Array.from({ length: 60 }).map((_, i) => (
                <div key={i} className="w-px h-full bg-white" style={{ opacity: Math.random() }} />
            ))}
         </div>
      </div>
    </section>
  );
};

export default ProjectsCTA;
