"use client";

import AnimatedButton from "@/components/shared/AnimatedButton";
import Link from "next/link";

const ProjectsCTA = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-liminal-secondary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="custom-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-liminal-secondary">
              Let's Build Something Extraordinary
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading tracking-tight leading-[1.1]">
              Ready to bring your <br />
              <span className="italic font-serif font-light text-liminal-secondary">Vision to Life?</span>
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Whether it's a bespoke residence or a large-scale commercial development, 
            our team of experts is ready to transform your ideas into structural reality.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact">
                <AnimatedButton className="px-10 py-5 text-base">
                    Start a Conversation
                </AnimatedButton>
            </Link>
            <Link href="/services" className="text-sm font-bold uppercase tracking-widest hover:text-liminal-secondary transition-colors duration-300 border-b border-border hover:border-liminal-secondary pb-1">
                Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCTA;
