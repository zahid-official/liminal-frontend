"use client";

import AnimatedButton from "@/components/shared/AnimatedButton";

const ProjectsCTA = () => {
  return (
    <section className="py-24 lg:py-40 bg-background relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none overflow-hidden">
        <div className="text-[20vw] font-black leading-none absolute -bottom-10 -left-10 select-none">
          LIMINAL
        </div>
      </div>

      <div className="custom-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-border/60 bg-muted/30 rounded-full">
            <div className="w-2 h-2 rounded-full bg-liminal-secondary animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-muted-foreground">
              Ready to Manifest?
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] font-heading">
            Your Vision <br />
            <span className="italic font-serif font-light text-liminal-secondary">Our Architectural</span> <br />
            Expertise
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Collaborate with our team of professional designers and engineers to transform your space into a masterpiece of technical precision and artistic expression.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
            <AnimatedButton className="px-10 py-6 text-sm">
              START A CONSULTATION
            </AnimatedButton>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <a 
              href="mailto:hello@liminal.com" 
              className="text-[10px] font-mono tracking-[0.4em] uppercase hover:text-liminal-secondary transition-colors duration-300"
            >
              inquiry@liminalbd.com
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer Line Decor */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default ProjectsCTA;
