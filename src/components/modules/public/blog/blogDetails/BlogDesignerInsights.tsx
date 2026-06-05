// BlogDesignerInsights Component
const BlogDesignerInsights = () => {
  return (
    <section
      id="designer-insights"
      aria-label="Designer insights from Liminal Studio"
      className="py-16 md:py-20 bg-zinc-50"
    >
      <div className="custom-container">
        <div className="bg-background rounded-sm border border-border/30 overflow-hidden relative">
          {/* Architectural Grid Lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-border/30" />
          <div className="hidden lg:block absolute top-0 bottom-0 left-[30%] w-px bg-border/30" />

          <div className="flex flex-col lg:flex-row">
            {/* Left: Label */}
            <div className="lg:w-[30%] shrink-0 p-8 md:p-12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-liminal-secondary/40" />
                <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-liminal-secondary">
                  Studio Perspective
                </span>
              </div>
              <p className="text-[11px] font-mono tracking-wider text-muted-foreground/50 uppercase">
                Liminal Design Team
              </p>
            </div>

            {/* Right: Commentary */}
            <div className="lg:w-[70%] p-8 md:p-12 lg:pl-16 space-y-5 border-t lg:border-t-0 border-border/30">
              <p className="text-lg text-foreground/80 font-light leading-relaxed">
                Every article we publish is an extension of how we think about
                space, material, and human experience. These aren&apos;t
                theoretical exercises — they reflect the same design philosophy
                we bring to every client project.
              </p>
              <p className="text-lg text-foreground/80 font-light leading-relaxed">
                We believe that sharing our design thinking openly
                builds deeper trust with the people who eventually invite us
                into their homes and workspaces. When you read our journal,
                you&apos;re seeing how we approach the same decisions we&apos;ll
                make for you.
              </p>
              <div className="pt-4">
                <blockquote className="border-l-2 border-liminal-secondary/40 pl-6 py-2 italic font-serif text-lg text-foreground/75">
                  &quot;True expertise isn&apos;t demonstrated through
                  credentials — it&apos;s revealed through how clearly you can
                  articulate what you know and why it matters.&quot;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDesignerInsights;
