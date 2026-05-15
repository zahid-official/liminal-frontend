import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Interior Design",
    description: "Bespoke residential and commercial interiors that balance material honesty with spatial poetry.",
    image: "/assets/home/discipline-interior.png",
    href: "/services/interior",
  },
  {
    number: "02",
    title: "Architecture",
    description: "Contextually intelligent architectural solutions that respond to place, light, and human experience.",
    image: "/assets/home/discipline-architecture.png",
    href: "/services",
  },
  {
    number: "03",
    title: "Bespoke Furniture",
    description: "Handcrafted furniture designed as functional sculpture — each piece a material narrative.",
    image: "/assets/home/discipline-curation.png",
    href: "/services/furniture",
  },
];

// HomeServices Component
const HomeServices = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80"
    >
      <div className="custom-container">
        <SectionHeader
          variant="centered"
          headingId="services-heading"
          badgeText="Our Disciplines"
          title={
            <>
              Three Pillars of{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Excellence
              </span>
            </>
          }
          description="Each discipline operates with the same rigor, the same reverence for material and craft, and the same commitment to spaces that endure."
          className="mb-16 lg:mb-20"
        />

        {/* 3-Column Tall Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service) => (
            <Link key={service.number} href={service.href} className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer">
              <Image
                src={service.image}
                alt={`Liminal ${service.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={85}
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-110 will-change-transform transform-gpu"
              />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/90 via-foreground/40 to-foreground/10 group-hover:from-foreground/95 transition-all duration-700" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                <span className="text-[10px] font-mono tracking-[0.4em] text-background/25 uppercase mb-auto pt-1">
                  {service.number}
                </span>
                <div className="w-8 h-px bg-liminal-secondary mb-5 group-hover:w-14 transition-all duration-700" />
                <h3 className="text-2xl md:text-xl lg:text-2xl font-bold font-heading text-background tracking-tight mb-3">
                  {service.title}
                </h3>
                <p className="text-background/45 text-sm font-light leading-relaxed group-hover:text-background/65 transition-colors duration-500">
                  {service.description}
                </p>
                <div className="flex items-center gap-3 mt-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-liminal-secondary">Explore</span>
                  <div className="w-6 h-px bg-liminal-secondary" />
                </div>
              </div>

              <div className="absolute top-5 right-5 w-6 h-6 border-t border-r border-background/15 group-hover:border-background/30 transition-colors duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
