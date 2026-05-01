import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedButton from "@/components/shared/AnimatedButton";
import Link from "next/link";

const ProjectsCTA = () => {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-[#141f0a] relative overflow-hidden">
      {/* Decorative Architectural Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* Large Technical Numbers */}
        <div className="absolute -top-20 -left-20 text-[30rem] font-black text-white/5 font-heading">
          08
        </div>
        <div className="absolute -bottom-20 -right-20 text-[30rem] font-black text-white/5 font-heading rotate-180">
          24
        </div>

        {/* Technical Grid/Lines */}
        <div className="absolute inset-0 flex justify-around">
          <div className="w-px h-full bg-linear-to-b from-transparent via-white/20 to-transparent" />
          <div className="w-px h-full bg-linear-to-b from-transparent via-white/20 to-transparent hidden md:block" />
          <div className="w-px h-full bg-linear-to-b from-transparent via-white/20 to-transparent" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-around">
          <div className="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent" />
          <div className="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent hidden md:block" />
        </div>
      </div>

      {/* Floating Precision Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none hidden lg:block">
        <div className="absolute inset-0 border border-white/5 rounded-full" />
        <div className="absolute inset-20 border border-dashed border-white/10 rounded-full animate-[spin_120s_linear_infinite]" />
        <div className="absolute inset-40 border border-white/5 rounded-full" />
        
        {/* Precision Crosshair */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />
      </div>

      <div className="custom-container relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <SectionHeader
            variant="centered"
            badgeText="NEXT STEPS"
            badgeClassName="text-white border-white/20"
            title={
              <span className="text-white">
                Have a vision for your <br />
                <span className="italic font-serif font-light text-white/80">
                  Next Masterpiece?
                </span>
              </span>
            }
            description={
              <span className="text-white/60">
                Our approach is collaborative, transparent, and meticulous. We transform architectural possibilities into lived experiences. Let&apos;s build something extraordinary together.
              </span>
            }
          />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link href="/contact">
              <AnimatedButton className="bg-white text-[#141f0a] border-white hover:bg-white/90 px-10 h-14">
                Start a Conversation
              </AnimatedButton>
            </Link>
            <Link href="/services/interior">
              <button className="h-14 px-10 text-[11px] font-mono font-bold tracking-widest text-white uppercase border border-white/20 rounded-sm hover:bg-white/5 transition-colors">
                Explore Services
              </button>
            </Link>
          </div>

          {/* Technical Data Points */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/10 mt-16">
            {[
              { label: "PROJECTS", value: "150+" },
              { label: "EXPERIENCE", value: "12 YRS" },
              { label: "AWARDS", value: "15+" },
              { label: "CLIENTS", value: "200+" },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-white tracking-tighter">{stat.value}</p>
                <p className="text-[9px] font-mono text-white/40 uppercase tracking-[0.3em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCTA;
