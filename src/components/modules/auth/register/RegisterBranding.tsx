import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "@/components/shared/Logo";
import SectionHeader from "@/components/shared/SectionHeader";
import { Quote } from "lucide-react";

// Signature Details Data
const signatureDetails = [
  { label: "Established", value: "Liminal Agency" },
  { label: "Phase", value: "Registration" },
];

// RegisterBranding Component
const RegisterBranding = () => {
  return (
    <div className="relative hidden h-full w-full flex-col bg-foreground lg:flex overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/assets/auth/register-premium-bg-2.png"
          alt="Liminal Design Philosophy"
          fill
          className="object-cover opacity-30 scale-105 animate-in zoom-in-110 duration-5000 ease-out"
          priority
        />
        {/* Deep gradient overlay for premium feel */}
        <div className="absolute inset-0 bg-linear-to-r from-foreground via-foreground/70 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-foreground via-transparent to-transparent" />
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-between p-16 lg:p-20">
        {/* Top: Logo */}
        <div className="flex items-center justify-between animate-in fade-in slide-in-from-top-8 duration-1000 ease-in-out">
          <Logo isScrolled={false} />
          <div className="text-[10px] font-medium uppercase tracking-[0.4em] text-background/30 border-l border-border/20 pl-6 h-4 flex items-center">
            Registration Portal
          </div>
        </div>

        {/* Center: Manifesto */}
        <div className="flex flex-col items-center justify-center flex-1 animate-in fade-in zoom-in-95 duration-1200 delay-300 ease-out fill-mode-both">
          <Quote className="h-10 w-10 text-background/30 mb-8 stroke-[1px]" />
          {/* Vertical Accent Line */}
          <div className="absolute -left-10 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-background/10 to-transparent" />

          <SectionHeader
            variant="centered"
            title={
              <>
                Design is the <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-background via-background to-background/40 italic font-serif font-light">
                  silent ambassador
                </span>{" "}
                <br />
                of your brand.
              </>
            }
            description={
              <>
                <span className="block w-12 h-px bg-background/30 mx-auto mb-8" />
                Join our exclusive network of visionaries and architects
                redefining the boundaries of spatial intelligence.
              </>
            }
            titleClassName="text-background lg:text-7xl font-light leading-tight"
            descriptionClassName="text-background/60 text-lg font-light leading-relaxed tracking-wide max-w-2xl"
          />
        </div>

        {/* Bottom: Signature detail */}
        <div className="flex items-center justify-between border-t border-border/10 pt-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 ease-in-out fill-mode-both">
          {signatureDetails.map((detail, index) => (
            <div
              key={index}
              className={cn("flex flex-col", index === 1 && "text-right")}
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-background/40 font-medium mb-1">
                {detail.label}
              </span>
              <span className="text-xs text-background/70 font-light font-serif uppercase tracking-widest">
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegisterBranding;
