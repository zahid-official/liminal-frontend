interface SectionFooterProps {
  label: string;
  className?: string;
}

const SectionFooter = ({ label, className }: SectionFooterProps) => {
  return (
    <div className={className}>
      {/* End Ornament */}
      <div className="flex items-center justify-center gap-4 mt-12 md:mt-20">
        <div className="w-20 h-px bg-border/50" />
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rotate-45 bg-liminal-secondary/50" />
          <div className="w-2.5 h-2.5 rotate-45 border border-liminal-secondary/80" />
          <div className="w-1.5 h-1.5 rotate-45 bg-liminal-secondary/50" />
        </div>
        <div className="w-20 h-px bg-border/50" />
      </div>

      {/* End Label */}
      <div className="text-center mt-3">
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
          {label}
        </span>
      </div>
    </div>
  );
};

export default SectionFooter;
