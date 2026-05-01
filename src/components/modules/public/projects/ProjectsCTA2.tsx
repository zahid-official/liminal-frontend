import AnimatedButton from "@/components/shared/AnimatedButton";

const ProjectsCTA = () => {
  return (
    <section className="py-24 md:py-48 relative overflow-hidden bg-[#141f0a] text-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white/5 -skew-x-12 -translate-x-1/4" />

      <div className="custom-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] text-white/50 block">
              Start Your Journey
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold font-heading leading-[1.1] tracking-tighter">
              Ready to elevate your <br />
              <span className="italic font-serif font-light text-white/80">
                living experience?
              </span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Collaborate with our team of visionaries to transform your
            architectural dreams into structural reality. Let&apos;s create
            something extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <AnimatedButton className="bg-white/95 border-transparent [&_span.text-foreground]:text-[#141f0a] min-w-55">
              Book a Consultation
            </AnimatedButton>
            <AnimatedButton className="bg-transparent border-white/20 hover:border-white [&_span.text-foreground]:text-white min-w-55">
              View Our Services
            </AnimatedButton>
          </div>
        </div>
      </div>

      {/* Technical Line Decoration */}
      <div className="absolute bottom-12 left-0 right-0 custom-container flex justify-between items-center opacity-20 pointer-events-none">
        <div className="h-px w-24 bg-white" />
        <span className="text-[8px] font-mono uppercase tracking-widest text-white">
          Liminal Architectural Studio — Est. 2024
        </span>
        <div className="h-px w-24 bg-white" />
      </div>
    </section>
  );
};

export default ProjectsCTA;
