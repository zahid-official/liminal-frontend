// QuoteSection Component
const QuoteSection = () => {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/assets/bg-quote.png')" }}
      >
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="custom-container relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24">
        {/* Quote Button - Absolute Center of Section */}
        <div className="absolute inset-0 flex items-center justify-center -mt-24 pointer-events-none">
          <div className="relative flex items-center justify-center pointer-events-auto group">
            {/* Ripple Animation Rings */}
            <span
              className="absolute inset-7 rounded-full border-[1.5px] border-white/70 animate-ping pointer-events-none"
              style={{ animationDuration: "3s" }}
            />
            <span
              className="absolute inset-7 rounded-full border-[1.5px] border-white/60 animate-ping pointer-events-none"
              style={{ animationDuration: "3s", animationDelay: "1.5s" }}
            />

            <button
              type="button"
              aria-label="Get Quote"
              className="relative z-10 size-28 md:size-36 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-105 shadow-xl"
            >
              <span className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-tight text-center tracking-wide font-outfit">
                Get
              </span>
              <span className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-tight text-center tracking-wide font-outfit">
                Quote
              </span>
            </button>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col relative z-20">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold text-white leading-[1.1] tracking-tight">
            Unlock Your Dream
          </h2>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 lg:gap-16 mt-2 pb-2">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold text-white leading-[1.1] tracking-tight whitespace-nowrap">
              Project Today!
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
