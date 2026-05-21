import LiminalButton from "@/components/shared/LiminalButton";
import SectionHeader from "@/components/shared/SectionHeader";
import { MessageSquare } from "lucide-react";
import Link from "next/link";

// CTA Stats
const stats = [
  {
    id: "01",
    label: "Technical",
    value: "Architectural Rigor",
  },
  {
    id: "02",
    label: "Conceptual",
    value: "Spatial Logic",
  },
  {
    id: "03",
    label: "Craft",
    value: "Execution Excellence",
  },
];

// HomeCTA Component
const HomeCTA = () => {
  return (
    <section
      id="home-cta"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-liminal-secondary/5 skew-x-12 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-liminal-secondary/5 -skew-x-12 -translate-x-1/4" />

      <div className="custom-container relative z-10">
        <div className="bg-liminal-dark rounded-[2rem] overflow-hidden shadow-2xl shadow-foreground/20 flex flex-col lg:flex-row items-stretch">
          {/* Left: Content */}
          <div className="flex-1 p-8 md:p-16 lg:p-24 space-y-10 relative flex flex-col justify-center">
            {/* Blueprint texture overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-size-[40px_40px]" />

            {/* Section Header */}
            <SectionHeader
              variant="simple"
              badgeText="Begin Your Journey"
              badgeClassName="border-background/20 text-background text-xs font-semibold capitalize mb-8"
              className="relative z-10 text-background"
              title={
                <>
                  Let&apos;s Create Something <br />
                  <span className="italic font-serif font-light underline underline-offset-8 decoration-1">
                    Extraordinary
                  </span>
                </>
              }
              description={
                <span className="text-background/60">
                  Every great space begins with a conversation. Whether
                  you&apos;re envisioning a complete transformation or seeking
                  guidance on a single room, we&apos;re here to listen, advise,
                  and create.
                </span>
              }
            />

            {/* CTA Buttons */}
            <div className="relative z-10 flex flex-wrap gap-6 pt-4">
              <Link href="/contact">
                <LiminalButton
                  className="bg-background text-foreground hover:bg-background/80"
                  icon={MessageSquare}
                  animateIcon={false}
                >
                  Start a Conversation
                </LiminalButton>
              </Link>
              <Link href="/projects">
                <LiminalButton
                  variant="outline"
                  className="border-background/20 text-background hover:bg-background/10"
                >
                  View Our Work
                </LiminalButton>
              </Link>
            </div>
          </div>

          {/* Right: Technical Stats Sidebar */}
          <div className="w-full lg:w-1/3 bg-background/5 border-l border-background/10 p-8 md:p-16 flex flex-col justify-center space-y-12">
            {stats.map((stat) => (
              <div key={stat.id} className="group space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-background/20 font-bold">
                    {stat.id}
                  </span>
                  <div className="h-px flex-1 bg-background/10" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-background/40 uppercase tracking-[0.3em]">
                    {stat.label}
                  </span>
                  <p className="text-2xl font-medium text-background tracking-tight">
                    {stat.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Technical Line */}
      <div className="absolute bottom-12 left-0 right-0 custom-container hidden lg:flex justify-between items-center opacity-45 pointer-events-none">
        <div className="h-px w-32 bg-liminal-secondary" />
        <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-liminal-secondary">
          Liminal Design Studio — Est. 2020
        </span>
        <div className="h-px w-32 bg-liminal-secondary" />
      </div>
    </section>
  );
};

export default HomeCTA;
