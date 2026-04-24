import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

const InteriorPhilosophy = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="custom-container">
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
              <h3 className="text-2xl font-bold font-serif italic">
                The Essence of Living
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Every line, texture, and light source is meticulously curated to
                foster a sense of harmony and balance. We don&apos;t just design
                rooms; we choreograph journeys through space.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-3">
                <span className="text-4xl font-bold font-heading text-liminal-secondary/20">
                  01
                </span>
                <h4 className="font-bold uppercase tracking-widest text-xs">
                  Human Centric
                </h4>
                <p className="text-sm text-muted-foreground font-light">
                  Designed for people, not just for photos.
                </p>
              </div>
              <div className="space-y-3">
                <span className="text-4xl font-bold font-heading text-liminal-secondary/20">
                  02
                </span>
                <h4 className="font-bold uppercase tracking-widest text-xs">
                  Timeless Elegance
                </h4>
                <p className="text-sm text-muted-foreground font-light">
                  Eschewing trends for lasting architectural value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorPhilosophy;
