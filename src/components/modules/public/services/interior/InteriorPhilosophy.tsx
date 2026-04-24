import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

const InteriorPhilosophy = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="custom-container">
        <div className="relative">
          <SectionHeader
            badgeText="Our Philosophy"
            title={
              <>
                Crafting Spaces with <br />
                <span className="italic font-serif font-light text-liminal-secondary">
                  Precision & Soul
                </span>
              </>
            }
            description="At Liminal, we believe that interior design is more than just aesthetics. It's about creating an environment that resonates with your lifestyle and aspirations. We blend architectural precision with soulful design to transform ordinary spaces into extraordinary experiences."
            variant="split"
          />
        </div>

        <div className="mt-20 lg:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-7 relative group">
            <div className="overflow-hidden rounded-sm">
              <Image
                src="/assets/interior-intro.png"
                alt="Liminal Interior Design Philosophy"
                width={1200}
                height={800}
                className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            {/* Architectural decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-liminal-secondary/30 -z-10 hidden md:block" />
          </div>

          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono tracking-[0.3em] text-liminal-secondary font-bold">CORE_VALUES</span>
                <div className="h-px flex-1 bg-border/40" />
              </div>
              <h3 className="text-3xl font-bold font-heading italic leading-tight">
                The Essence of <br />
                <span className="text-liminal-secondary">Atmospheric Design</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                Every line, texture, and light source is meticulously curated to
                foster a sense of harmony and balance. We don&apos;t just design
                rooms; we choreograph journeys through space.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 pt-4">
              <div className="flex gap-6 items-start group">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl font-bold font-heading text-liminal-secondary/40 group-hover:text-liminal-secondary transition-colors duration-500">
                    01
                  </span>
                  <div className="w-px h-full bg-border/40 group-hover:bg-liminal-secondary/40 transition-colors duration-500 min-h-10" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold uppercase tracking-widest text-xs">
                    Human Centric
                  </h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Designed for people, not just for photos. We prioritize the ergonomic and emotional well-being of the inhabitants.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start group">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl font-bold font-heading text-liminal-secondary/40 group-hover:text-liminal-secondary transition-colors duration-500">
                    02
                  </span>
                  <div className="w-px h-full bg-border/40 group-hover:bg-liminal-secondary/40 transition-colors duration-500 min-h-10" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold uppercase tracking-widest text-xs">
                    Timeless Elegance
                  </h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Eschewing ephemeral trends for lasting architectural value. We create spaces that age gracefully with time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorPhilosophy;
