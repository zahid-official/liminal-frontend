import Image from "next/image";

const AboutVision = () => {
  return (
    <div className="relative py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
        {/* Content Side */}
        <div className="lg:col-span-6 space-y-24">
          {/* Mission Block */}
          <div className="relative group pl-12 md:pl-16">
            <div className="absolute -left-4 -top-8 text-9xl font-bold font-heading text-liminal-secondary/5 select-none -z-10 transition-colors duration-500 group-hover:text-liminal-secondary/10">
              01
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-liminal-secondary" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-liminal-secondary">Our Mission</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold font-heading leading-tight italic">
                Elevating life through <br />
                <span className="text-liminal-secondary underline underline-offset-10 decoration-1">intentional design</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                We harmonise functionality with poetic aesthetics, delivering bespoke environments that inspire, comfort, and endure for generations.
              </p>
            </div>
          </div>

          {/* Vision Block */}
          <div className="relative group pl-12 md:pl-16">
            <div className="absolute -left-4 -top-8 text-9xl font-bold font-heading text-liminal-secondary/5 select-none -z-10 transition-colors duration-500 group-hover:text-liminal-secondary/10">
              02
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-liminal-secondary" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-liminal-secondary">Our Vision</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold font-heading leading-tight">
                Setting the global <br />
                <span className="text-liminal-secondary italic">benchmark of luxury</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                We envision a world where every interior is a masterpiece of sustainable innovation, pushing the boundaries of architectural possibility.
              </p>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="lg:col-span-6 relative flex flex-col items-center">
          <div className="w-full relative aspect-square lg:aspect-4/5 rounded-3xl overflow-hidden border border-border/40 shadow-2xl group">
            <Image
              src="/assets/about-vision.png"
              alt="Architectural vision"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          {/* Quote Area - Elegant Caption Style */}
          <div className="mt-12 text-center max-w-sm">
            <div className="w-8 h-px bg-liminal-secondary/40 mx-auto mb-8" />
            <p className="text-xl md:text-2xl font-heading font-light italic text-muted-foreground leading-relaxed">
              &quot;Design is not just what it looks like and feels like. Design is how it works.&quot;
            </p>
          </div>

          {/* Decorative accents */}
          <div className="hidden lg:block absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-liminal-secondary/20 rounded-bl-3xl -z-10" />
          <div className="hidden lg:block absolute -top-6 -right-6 w-32 h-32 border-t border-r border-liminal-secondary/20 rounded-tr-3xl -z-10" />
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
