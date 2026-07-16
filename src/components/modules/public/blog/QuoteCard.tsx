// Quote Card - decorative purpose only
const QuoteCard = () => (
  <div
    className="group relative flex flex-col justify-between bg-liminal-dark text-background rounded-sm overflow-hidden p-8 lg:p-10 border border-foreground/15 shadow-xl min-h-95"
    aria-hidden="true"
  >
    {/* Blueprint grid background */}
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-size-[30px_30px]" />

    {/* Top label row */}
    <div className="flex items-center justify-between pb-6 border-b border-background/10 z-10">
      <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-background/50">
        Studio Reflection
      </span>
      <div className="h-1.5 w-1.5 rounded-full bg-liminal-secondary" />
    </div>

    {/* Quote */}
    <div className="flex-1 flex items-center py-8 z-10">
      <blockquote>
        <p className="text-lg lg:text-xl font-serif italic font-light leading-relaxed tracking-wide text-background/90">
          &ldquo;Design is not the decoration of a space, but the clarification
          of its soul. When we remove the superfluous, we reveal the
          essential.&rdquo;
        </p>
      </blockquote>
    </div>

    {/* Footer */}
    <div className="border-background/10 flex items-center justify-between z-10">
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-background">
          Liminal Studio
        </p>
        <p className="text-[9px] font-mono uppercase text-background/40 mt-0.5">
          Liminal Philosophy
        </p>
      </div>

      {/* Circular badge */}
      <div className="w-10 h-10 rounded-full border border-liminal-secondary shrink-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
        <div className="w-6 h-6 rounded-full border border-liminal-secondary" />
      </div>
    </div>
  </div>
);

export default QuoteCard;
