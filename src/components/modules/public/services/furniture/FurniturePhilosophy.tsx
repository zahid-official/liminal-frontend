import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

// Philosophy Image Data
const PHILOSOPHY_IMAGES = [
  {
    columnClass: "space-y-4",
    images: [
      {
        src: "/assets/furniture/atelier-workshop.png",
        alt: "Material texture",
        aspect: "aspect-3/4",
      },
      {
        src: "/assets/furniture/collection-chair.png",
        alt: "Crafting process",
        aspect: "aspect-square",
      },
    ],
  },
  {
    columnClass: "pt-12 space-y-4",
    images: [
      {
        src: "/assets/furniture/collection-table.png",
        alt: "Precision tool",
        aspect: "aspect-square",
      },
      {
        src: "/assets/furniture/atelier-bg.png",
        alt: "Finished detail",
        aspect: "aspect-3/4",
      },
    ],
  },
];

// Philosophy Points Data
const PHILOSOPHY_POINTS = [
  {
    number: "01",
    title: "Material Integrity",
    description:
      "We source only the highest grade sustainable hardwoods, natural stones, and premium alloys, ensuring each piece lasts for generations.",
  },
  {
    number: "02",
    title: "Structural Sincerity",
    description:
      "Every joint and connection is celebrated, not hidden. Our designs reflect the honesty of their construction and the logic of their form.",
  },
];

// FurniturePhilosophy Component
const FurniturePhilosophy = () => {
  return (
    <section className="py-20 md:py-32 bg-zinc-50/50 overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left: Image Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {PHILOSOPHY_IMAGES.map((column, colIndex) => (
              <div key={colIndex} className={column.columnClass}>
                {column.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={`relative ${image.aspect} rounded-sm overflow-hidden border border-zinc-200 group`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-6 space-y-10">
            <SectionHeader
              badgeText="The Philosophy"
              title={
                <>
                  The Art of{" "}
                  <span className="italic font-serif font-light text-liminal-secondary">
                    Precision
                  </span>
                </>
              }
              description="Our furniture is more than just functional objects; they are structural statements. We bridge the gap between architectural logic and human comfort through rigorous material selection and master craftsmanship."
              variant="inline"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-4">
              {PHILOSOPHY_POINTS.map((point, index) => (
                <div key={index} className="space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-liminal-secondary px-2 py-1 bg-white border border-zinc-200 rounded-sm">
                      {point.number}
                    </span>
                    <div className="h-px flex-1 bg-zinc-200" />
                  </div>
                  <h4 className="text-xl font-bold tracking-tight">
                    {point.title}
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed font-light">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-10 bg-white border border-zinc-200 rounded-sm relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-liminal-secondary opacity-20" />
              <p className="text-sm italic font-serif text-zinc-600 leading-relaxed relative z-10">
                &quot;Furniture should not merely fill a space; it should define
                it. It is the tactical interface between the human body and the
                architectural volume.&quot;
              </p>
              <div className="mt-6 flex items-center gap-3 relative z-10">
                <div className="w-6 h-px bg-liminal-secondary" />
                <p className="text-[10px] font-mono tracking-widest uppercase font-bold text-liminal-secondary">
                  Liminal Design Studio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FurniturePhilosophy;
