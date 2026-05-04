import Image from "next/image";
import Logo from "@/components/shared/Logo";
import SectionHeader from "@/components/shared/SectionHeader";

// RegisterBranding Component
const RegisterBranding = () => {
  return (
    <div className="relative hidden h-full w-full flex-col bg-foreground lg:flex overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/auth/showcase-2.png"
          alt="Liminal Design Philosophy"
          fill
          className="object-cover opacity-35 animate-in zoom-in-110 duration-3000 ease-out"
          priority
        />
        {/* Architectural gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-foreground/80 via-foreground/20 to-foreground" />
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-between p-16 lg:p-20">
        {/* Top: Logo */}
        <div className="animate-in fade-in slide-in-from-top-8 duration-1000 ease-in-out fill-mode-both">
          <Logo isScrolled={false} />
        </div>

        {/* Center: Structural Statement */}
        <div className="flex flex-col gap-12">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000 delay-300 ease-in-out fill-mode-both">
            <SectionHeader
              title={
                <>
                  Join the <br />
                  <span className="italic font-serif font-light underline underline-offset-8 decoration-1">
                    Collective.
                  </span>
                </>
              }
              description="Step into a realm where architectural vision meets technical precision. Your journey towards spatial excellence begins here."
              variant="simple"
              titleClassName="text-background lg:text-7xl"
              descriptionClassName="text-background/60 text-lg leading-relaxed max-w-sm font-light block"
            />
          </div>

          {/* Unique Vertical Vision Track */}
          <div className="flex gap-16 border-l border-border/20 pl-10 py-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 ease-in-out fill-mode-both">
            <div className="space-y-8">
              <div className="group">
                <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-background/30 block mb-2 transition-colors group-hover:text-background/60">
                  Phase 01
                </span>
                <h4 className="text-sm font-light text-background/80 tracking-wide">
                  Conceptual Integration
                </h4>
              </div>
              <div className="group">
                <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-background/30 block mb-2 transition-colors group-hover:text-background/60">
                  Phase 02
                </span>
                <h4 className="text-sm font-light text-background/80 tracking-wide">
                  Material Manifestation
                </h4>
              </div>
              <div className="group">
                <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-background/30 block mb-2 transition-colors group-hover:text-background/60">
                  Phase 03
                </span>
                <h4 className="text-sm font-light text-background/80 tracking-wide">
                  Spatial Legacy
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Signature / Quote */}
        <div className="animate-in fade-in duration-1000 delay-1000 ease-in-out fill-mode-both">
          <p className="text-[11px] font-medium uppercase tracking-[0.5em] text-background/40">
            Liminal &copy; MMXXIV / All Rights Reserved
          </p>
        </div>
      </div>
      
      {/* Decorative vertical line element for unique identity */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-border/10 to-transparent z-10" />
    </div>
  );
};

export default RegisterBranding;
