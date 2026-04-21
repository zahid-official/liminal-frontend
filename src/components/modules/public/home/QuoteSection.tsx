// QuoteSection Component
const QuoteSection = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-1000"
        style={{ backgroundImage: "url('/assets/bg-quote.png')" }}
      >
        {/* Depth Gradient Overlay: From subtle middle to heavy bottom */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/20 to-black/85" />
      </div>

      {/* Floating Coordinate Annotations: Digital Parameters */}
      <div className="absolute top-12 left-12 text-[10px] font-mono tracking-[0.4em] text-white/50 hidden md:block uppercase">
        LOC_REF: 23.8103° N // 90.4125° E
      </div>
      <div className="absolute top-12 right-12 text-[10px] font-mono tracking-[0.4em] text-white/50 hidden md:block uppercase">
        VIS_PHASE: ZENITH_PARAM_01
      </div>

      {/* Content Container */}
      <div className="custom-container relative z-10 h-full flex flex-col justify-end pb-16 md:pb-28">
        {/* Main Central Interaction: Get Quote Button */}
        <div className="absolute inset-0 flex items-center justify-center -mt-32 pointer-events-none">
          <div className="relative flex items-center justify-center pointer-events-auto group">
            {/* Extended Ripple Animation Rings */}
            <span
              className="absolute inset-[10%] sm:inset-[15%] rounded-full border-[1.5px] border-white/50 animate-ping pointer-events-none"
              style={{ animationDuration: "4s" }}
            />
            <span
              className="absolute inset-[10%] sm:inset-[15%] rounded-full border-[1.5px] border-white/30 animate-ping pointer-events-none"
              style={{ animationDuration: "4s", animationDelay: "2s" }}
            />

            <button
              type="button"
              aria-label="Get Quote"
              className="relative z-10 size-32 md:size-44 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:border-white/40 shadow-2xl overflow-hidden cursor-pointer"
            >
              {/* Radial Hover Glow */}
              <div className="absolute inset-0 bg-radial from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <span className="text-white text-lg sm:text-xl font-extrabold leading-tight text-center tracking-[0.25em] font-heading uppercase animate-in fade-in zoom-in duration-1000">
                GET
                <br />
                QUOTE
              </span>

              {/* Technical inner decorative circle */}
              <div className="absolute inset-3 border border-white/5 rounded-full" />
              {/* Technical index markings on hover */}
              <div className="absolute inset-0 border border-dashed border-white/0 group-hover:border-white/20 rounded-full transition-all duration-700 group-hover:animate-[spin_20s_linear_infinite]" />
            </button>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col relative z-20">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold text-white leading-[1.1] tracking-tight animate-in fade-in slide-in-from-left-8 duration-1000">
            Unlock Your{" "}
            <span className="italic font-serif font-light underline-offset-10 decoration-1">
              Dream
            </span>{" "}
          </h2>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 lg:gap-16 mt-2 pb-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold text-white leading-[1.1] tracking-tight">
              <span className="italic font-serif font-light underline-offset-10 decoration-1">
                Project
              </span>{" "}
              Today!
            </h2>
            <p className="text-white/90 text-sm sm:text-base font-medium max-w-85 leading-relaxed md:pb-2 lg:pb-4">
              We encourage clients to actively participate in discussions, share
              their ideas, preferences, and feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
