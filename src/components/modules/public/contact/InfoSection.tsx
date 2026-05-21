import SectionHeader from "@/components/shared/SectionHeader";
import { MapPin, Phone, Clock, ShieldCheck } from "lucide-react";

const infoItems = [
  {
    icon: MapPin,
    title: "The Main Studio",
    details: [
      "Liminal Design HQ",
      "Suite 402, Architectural Plaza",
      "Gulshan 2, Dhaka 1212",
    ],
    tag: "Primary Location",
    specs: ["Floor 04", "Suite 402", "8,500 SQFT"],
  },
  {
    icon: Phone,
    title: "Direct Channels",
    details: [
      "Inquiries: +880 1234 567 890",
      "Studio: +880 0987 654 321",
      "General: hello@liminalbd.com",
    ],
    tag: "Communications",
    specs: ["24/7 Monitoring", "Secure VOIP"],
  },
  {
    icon: Clock,
    title: "Operating Cycles",
    details: [
      "Monday - Friday: 09:00 - 18:00",
      "Saturday: 10:00 - 16:00",
      "Sunday: By Appointment Only",
    ],
    tag: "Studio Availability",
    specs: ["GMT +6", "Active Hours"],
  },
];

// InfoSection Component
const InfoSection = () => {
  return (
    <section
      id="studio-info-section"
      aria-labelledby="info-heading"
      className="py-20 md:py-28 lg:py-32 bg-zinc-50/80 relative overflow-hidden"
    >
      {/* Decorative Stamp Element */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 border border-liminal-secondary/10 rounded-full flex items-center justify-center rotate-12 pointer-events-none">
        <div className="w-80 h-80 border border-dashed border-liminal-secondary/20 rounded-full flex items-center justify-center px-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-liminal-secondary/40 -rotate-12 text-center leading-relaxed">
            Certified Premium Design Studio
          </span>
        </div>
      </div>

      <div className="custom-container relative z-10">
        <div className="space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-border/40 pb-16">
            <SectionHeader
              variant="inline"
              badgeText="Studio Logistics"
              headingId="info-heading"
              title={
                <>
                  Where Vision{" "}
                  <span className="text-liminal-secondary italic font-serif font-light underline underline-offset-8 decoration-1">
                    Meets Reality
                  </span>
                </>
              }
              className="lg:items-start"
            />
            <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground opacity-60">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-liminal-secondary" />
                Secure Operations
              </div>
              <div className="w-px h-6 bg-border" />
              <span>Global Standards</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {infoItems.map((item, index) => (
              <div
                key={index}
                className="group p-10 lg:p-12 bg-background border border-border/40 rounded-[2rem] transition-all duration-700 hover:shadow-2xl hover:shadow-liminal-secondary/5 relative overflow-hidden flex flex-col justify-between min-h-115"
              >
                {/* Background Spec Label */}
                <div className="absolute top-10 right-10 text-[10px] font-bold font-heading text-muted-foreground/30 select-none uppercase tracking-widest -rotate-90 origin-right translate-x-4">
                  Ref: LBD-STUDIO-S0{index + 1}
                </div>

                <div className="space-y-12">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/5 border border-border/40 flex items-center justify-center text-liminal-secondary group-hover:bg-liminal-secondary group-hover:text-background transition-all duration-500 transform group-hover:rotate-6">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-liminal-secondary font-bold">
                        {item.tag}
                      </span>
                      <h4 className="text-2xl font-bold font-heading tracking-tight">
                        {item.title}
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {item.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-muted-foreground text-base leading-relaxed font-light"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-10 border-t border-dashed border-border/60">
                  <div className="flex flex-wrap gap-4">
                    {item.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 bg-secondary/5 rounded-full border border-border/40 text-muted-foreground group-hover:border-liminal-secondary/20 transition-colors"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom decorative bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-liminal-secondary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-center" />
              </div>
            ))}
          </div>

          {/* Global Partnership Footer */}
          <div className="pt-14 text-center space-y-8">
            <div className="max-w-xl mx-auto flex items-center gap-6 opacity-30">
              <div className="grow h-px bg-foreground" />
              <span className="text-[9px] uppercase tracking-[0.8em] font-bold whitespace-nowrap">
                Global Design Network
              </span>
              <div className="grow h-px bg-foreground" />
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto italic font-light">
              Liminal Design Studio operates as a focal point for architectural
              innovation in Southeast Asia, partnering with visionary clients to
              create environments that transcend borders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
