import Image from "next/image";
import Logo from "@/components/shared/Logo";
import SectionHeader from "@/components/shared/SectionHeader";
import { Compass, Layers, Cpu } from "lucide-react";

// Brand Pillars
const brandPillars = [
  {
    icon: Compass,
    title: "Precision",
    description: (
      <>
        Exacting standards in <br /> every single detail
      </>
    ),
  },
  {
    icon: Layers,
    title: "Materiality",
    description: (
      <>
        Sensory-rich and <br /> tactile environments
      </>
    ),
  },
  {
    icon: Cpu,
    title: "Innovation",
    description: (
      <>
        Future-proof <br /> architectural tech
      </>
    ),
  },
];

// LoginBranding Component
const LoginBranding = () => {
  return (
    <div className="relative hidden h-full w-full flex-col bg-foreground lg:flex overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/auth/showcase-1.png"
          alt="Liminal Architectural Excellence"
          fill
          className="object-cover opacity-30 animate-in zoom-in-110 duration-3000 ease-out transform-gpu will-change-transform"
          priority
        />
        {/* Deep gradient overlay for premium feel */}
        <div className="absolute inset-0 bg-linear-to-tr from-foreground via-foreground/40 to-transparent" />
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-between p-16 lg:p-20">
        {/* Top: Logo */}
        <div className="animate-in fade-in slide-in-from-top-8 duration-1000 ease-in-out fill-mode-both transform-[translateZ(0)] will-change-[opacity,transform]">
          <Logo isScrolled={false} />
        </div>

        {/* Center: Section Header */}
        <div className="animate-in fade-in slide-in-from-left-8 duration-1000 delay-300 ease-in-out fill-mode-both transform-[translateZ(0)] will-change-[opacity,transform]">
          <SectionHeader
            title={
              <>
                Architecting the <br className="max-lg:hidden" />
                <span className="italic font-serif font-light underline underline-offset-8 decoration-1">
                  Boundless.
                </span>
              </>
            }
            description="Defining the threshold between imagination and reality through spatial intelligence and material innovation."
            variant="simple"
            titleClassName="text-background lg:text-7xl"
            descriptionClassName="text-background/60 text-lg leading-relaxed max-w-sm font-light block"
          />
        </div>

        {/* Bottom: Brand Pillars */}
        <div className="grid grid-cols-3 gap-8 border-t border-border/20 pt-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 ease-in-out fill-mode-both transform-[translateZ(0)] will-change-[opacity,transform]">
          {brandPillars.map((pillar, index) => (
            <div key={index} className="space-y-3.5">
              <pillar.icon className="h-5 w-5 text-background/40 stroke-[1.5px]" />
              <div>
                <h4 className="text-[11px] font-medium uppercase tracking-[0.3em] text-background/70 mb-1.5">
                  {pillar.title}
                </h4>
                <p className="text-[9px] text-background/40 uppercase tracking-widest leading-loose">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginBranding;
