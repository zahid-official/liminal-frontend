import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedButton from "@/components/shared/AnimatedButton";

// Service disciplines
const services = [
  {
    number: "01",
    title: "Interior Design",
    description:
      "Bespoke residential and commercial interiors that balance material honesty with spatial poetry. We manifest sophisticated, high-end spaces by bridging creative vision with architectural reality, guiding each project from initial concept through final installation.",
    image: "/assets/interior/hero-premium-new.png",
    href: "/services/interior",
    specs: [
      { label: "Scope", value: "Residential & Commercial" },
      { label: "Approach", value: "Concept to Installation" },
    ],
  },
  {
    number: "02",
    title: "Bespoke Furniture",
    description:
      "Handcrafted furniture designed as functional sculpture, where each bespoke piece narrates a rich story of material, proportion and human touch, ranging from curated pre-made collections to fully bespoke architectural pieces crafted with structural integrity.",
    image: "/assets/furniture/hero-premium.png",
    href: "/services/furniture",
    specs: [
      { label: "Scope", value: "Curated & Commissioned" },
      { label: "Approach", value: "Design to Delivery" },
    ],
  },
];

const ServiceCards = () => {
  return (
    <section
      aria-labelledby="services-heading"
      className="py-20 md:py-28 lg:py-32"
    >
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          variant="manifesto"
          badgeText="Our Disciplines"
          headingId="services-heading"
          title={
            <>
              Two disciplines.
              <br className="hidden sm:block" />{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                One creative vision
              </span>
            </>
          }
          description="Our work exists at the intersection of architectural precision and human intuition. Each discipline, though distinct in craft, shares a singular philosophy: that great design is not what you see, but what you feel when you inhabit a space."
          className="mb-12"
        />

        {/* Brochure Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.map((service) => (
            <div
              key={service.number}
              className="relative group overflow-hidden rounded-lg aspect-4/5 w-full bg-neutral-900 shadow-xl border border-border/10"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-foreground/40 to-foreground/20 pointer-events-none z-10" />

              <Image
                src={service.image}
                alt={`Liminal ${service.title}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-1200 ease-out group-hover:scale-105 will-change-transform transform-gpu opacity-70 group-hover:opacity-60"
              />

              {/* Card Content Overlay */}
              <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end z-20 text-background">
                <div className="space-y-5 relative">
                  {/* Title & Divider */}
                  <div className="transform translate-y-75 group-hover:translate-y-0 transition-transform duration-700 transform-gpu backface-hidden will-change-transform">
                    <span className="text-[11px] font-mono tracking-[0.4em] text-background/50 uppercase">
                      Discipline: {service.number}
                    </span>

                    <h3 className="text-3xl lg:text-4xl uppercase tracking-tight font-bold text-background leading-tight font-heading transform-gpu backface-hidden">
                      {service.title}
                    </h3>

                    {/* Decorative divider line */}
                    <div className="h-px w-0 bg-background/20 group-hover:w-full transition-all duration-600 mb-6 mt-1" />
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-background/80 font-light leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 group-hover:duration-700 group-hover:delay-75 transform-gpu backface-hidden">
                    {service.description}
                  </p>

                  {/* Technical Specs */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-background/10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 group-hover:duration-700 group-hover:delay-100 transform-gpu backface-hidden">
                    {service.specs.map((item, index) => (
                      <div
                        key={item.label}
                        className={`space-y-1 ${
                          index === 1
                            ? "border-l border-background/15 pl-6"
                            : ""
                        }`}
                      >
                        <span className="text-[9px] font-mono text-background/40 uppercase tracking-widest block">
                          {item.label}
                        </span>
                        <p className="text-xs font-bold text-background uppercase">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="pt-5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 group-hover:duration-700 group-hover:delay-150 transform-gpu backface-hidden">
                    <Link href={service.href} className="inline-block">
                      <AnimatedButton className="text-background hover:border-border">
                        Explore {service.title}
                      </AnimatedButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
