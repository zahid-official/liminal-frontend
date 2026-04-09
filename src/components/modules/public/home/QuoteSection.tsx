import Link from "next/link";

// QuoteSection Component
const QuoteSection = () => {
  return (
    <section
      id="quote"
      aria-labelledby="quote-heading"
      className="relative min-h-[60vh] lg:min-h-screen flex items-center justify-center bg-[url('/assets/bg-quote.png')] bg-no-repeat bg-cover bg-center overflow-hidden bg-fixed"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto gap-6 md:gap-10 py-20">
        {/* Badge */}
        <span className="inline-flex items-center justify-center gap-2 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white/90 border border-white/20 rounded-full px-5 md:px-6 py-2">
          <div className="size-1.5 md:size-2 rounded-full bg-liminal-secondary"></div>
          Your Best Choice
        </span>

        {/* Heading */}
        <h2
          id="quote-heading"
          className="text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight"
        >
          Let&apos;s Start Your <br className="max-lg:hidden" /> Dream Project
        </h2>

        {/* CTA Button */}
        <Link
          href="/contact"
          aria-label="Get a quote for your project"
          className="mt-6 md:mt-8 size-32 rounded-full bg-white/20 backdrop-blur-md flex flex-col items-center justify-center text-white text-base md:text-xl font-semibold leading-tight text-center hover:bg-white/30 hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <span className="block">Get</span>
          <span className="block">Quote</span>
        </Link>
      </div>
    </section>
  );
};

export default QuoteSection;
