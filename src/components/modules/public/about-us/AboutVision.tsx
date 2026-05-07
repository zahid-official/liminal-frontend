import Image from "next/image";

// AboutVision Component — Split-Screen Dark/Light
const AboutVision = () => {
  return (
    <section
      id="about-vision"
      aria-labelledby="vision-heading"
      className="relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
        {/* Left: Dark Panel — Vision Statement */}
        <div className="bg-[#141F0A] text-white px-8 md:px-16 lg:px-20 xl:px-28 py-20 md:py-28 lg:py-32 flex items-center relative overflow-hidden">
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-[size:32px_32px]" />

          <div className="relative z-10 space-y-10 max-w-lg">
            {/* Badge */}
            <div className="flex items-center gap-5">
              <div className="w-14 h-px bg-white/20 shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-white/50">
                Our Vision
              </span>
            </div>

            <h2
              id="vision-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight leading-[1.1]"
            >
              Shaping the Future of{" "}
              <span className="italic font-serif font-light text-liminal-secondary">
                Living
              </span>
            </h2>

            <div className="space-y-6 text-white/60 leading-relaxed font-light">
              <p>
                We envision a world where every interior space is a catalyst for
                well-being — where design elevates the human experience beyond
                function into the realm of feeling and meaning.
              </p>

              <p>
                Our ambition extends beyond individual projects. We seek to
                redefine the standard of interior design in South Asia, proving
                that world-class spatial design can emerge from Dhaka and
                resonate globally.
              </p>
            </div>

            {/* Vision Quote */}
            <div className="relative pt-8">
              <div className="w-12 h-px bg-liminal-secondary/40 mb-6" />
              <blockquote className="text-xl md:text-2xl italic font-serif text-white/90 leading-relaxed">
                &quot;Every space has a threshold — a liminal moment — where
                possibility meets purpose.&quot;
              </blockquote>
              <span className="block mt-4 text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">
                — The Liminal Manifesto
              </span>
            </div>
          </div>
        </div>

        {/* Right: Image Panel */}
        <div className="relative group min-h-[400px] lg:min-h-0">
          <Image
            src="/assets/about-us/vision-1.png"
            alt="Liminal Vision — The future of interior design"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#141F0A]/30 to-transparent lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Center Divider Element — Desktop Only */}
          <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
            <div className="w-6 h-6 rotate-45 bg-liminal-secondary border-2 border-[#141F0A]" />
          </div>

          {/* Bottom Right Tag */}
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 px-5 py-3 space-y-1">
              <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/40 block">
                Horizon
              </span>
              <span className="text-sm font-semibold text-white tracking-tight">
                Design Without Limits
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVision;
