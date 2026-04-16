import Image from "next/image";

// AboutStory Component
const AboutStory = () => {
  return (
    <div className="relative group">
      {/* Background Decorative Letter */}
      <div className="absolute top-0 right-10 text-[20rem] font-bold font-heading text-liminal-secondary/5 select-none -z-10 group-hover:text-liminal-secondary/10 transition-all duration-1000">
        S
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-square lg:aspect-4/5 rounded-3xl overflow-hidden border border-border/40 shadow-2xl group/img">
            <Image
              src="/assets/about-1.png"
              alt="Our design studio"
              fill
              className="object-cover transition-transform duration-1000 group-hover/img:scale-110"
            />
            
            {/* Architectural Border overlay */}
            <div className="absolute inset-8 border border-white/20 rounded-2xl pointer-events-none" />
          </div>
          
          {/* Floating year badge */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-white border border-border/40 shadow-xl flex flex-col items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform duration-700">
            <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Since</span>
            <span className="text-3xl font-bold font-heading text-liminal-secondary">2012</span>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-liminal-secondary" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-liminal-secondary">The Genesis</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold font-heading leading-tight italic">
              &quot;We don&apos;t just design rooms; we create environments where{" "}
              <span className="text-liminal-secondary underline underline-offset-10 decoration-1">memories are born</span>.&quot;
            </h3>
          </div>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-xl">
            <p>
              Founded with a desire to redefine luxury, Liminal began as a boutique studio with a grand vision. Over the last decade, we&apos;ve evolved into a multi-disciplinary powerhouse, known for our bold approach and meticulous attention to detail.
            </p>
            <p>
              Our philosophy is simple: Innovation should never come at the expense of comfort, and elegance is most powerful when it remains functional. We work closely with our clients to ensure every project is a unique reflection of their personality.
            </p>
          </div>

          <div className="pt-6">
            <div className="inline-flex items-center gap-6 group/signature">
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-heading text-foreground group-hover/signature:text-liminal-secondary transition-colors duration-500">
                  Zahidul Islam
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
                  Founder & Lead Designer
                </span>
              </div>
              <div className="w-12 h-px bg-border group-hover/signature:w-20 group-hover/signature:bg-liminal-secondary transition-all duration-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStory;
