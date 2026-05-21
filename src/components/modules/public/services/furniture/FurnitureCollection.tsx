import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Image from "next/image";

// collectionData
const collection = [
  {
    id: "FC-01",
    title: "Horizon Sectional",
    description:
      "A modular seating architecture balancing expansive comfort with a refined, low-profile profile.",
    category: "Seating",
    materials: "Bouclé & Smoked Oak",
    dimensions: "3200 x 1050 x 680 mm",
    image: "/assets/furniture/horizon-sofa.png",
    price: "$8,600",
    status: "Made to Order",
  },
  {
    id: "FC-02",
    title: "Monolith Table",
    description:
      "A brutalist-inspired centerpiece carved from a single slab of honed Nero Marquina marble.",
    category: "Tables",
    materials: "Nero Marquina Marble",
    dimensions: "2400 x 1100 x 750 mm",
    image: "/assets/furniture/monolith-dining-table.png",
    price: "$5,400",
    status: "Limited Edition",
  },
  {
    id: "FC-03",
    title: "Ether Sideboard",
    description:
      "Minimalist storage featuring seamless joinery and hand-applied Eucalyptus veneer.",
    category: "Storage",
    materials: "Eucalyptus & Bronze",
    dimensions: "2100 x 500 x 720 mm",
    image: "/assets/furniture/ether-sideboard.png",
    price: "$5,200",
    status: "In Stock",
  },
  {
    id: "FC-04",
    title: "Halo Chair",
    description:
      "A study in circular geometry featuring a wraparound backrest and precision rotating base.",
    category: "Seating",
    materials: "Bouclé & Brass",
    dimensions: "920 x 880 x 740 mm",
    image: "/assets/furniture/halo-lounge-chair.png",
    price: "$3,800",
    status: "In Stock",
  },
  {
    id: "FC-05",
    title: "Linear Library",
    description:
      "A slender vertical shelving unit crafted from American Walnut with delicate brass accents.",
    category: "Storage",
    materials: "Walnut & Brass",
    dimensions: "800 x 350 x 2100 mm",
    image: "/assets/furniture/walnut-bookcase.png",
    price: "$4,900",
    status: "Made to Order",
  },
  {
    id: "FC-06",
    title: "Travertine Table",
    description:
      "An interplay of transparency and mass, pairing a honed travertine base with tinted glass.",
    category: "Tables",
    materials: "Travertine & Glass",
    dimensions: "1100 x 1100 x 320 mm",
    image: "/assets/furniture/bespoke-coffee-table.png",
    price: "$3,400",
    status: "Limited Edition",
  },
];

// FurnitureCollection Component
const FurnitureCollection = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80">
      <div className="custom-container">
        <SectionHeader
          badgeText="The Curated Edit"
          title={
            <>
              Iconic Furniture <br className="max-lg:hidden" />
              <span className="italic font-serif font-light text-liminal-secondary">
                Selection
              </span>
            </>
          }
          description="A selection of our most iconic designs, balancing structural honesty with human comfort. Each piece is crafted to endure, both in material and aesthetic."
          variant="split"
        />

        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {collection.map((item) => (
            <div key={item.id} className="group relative flex flex-col">
              {/* Image Container */}
              <div className="relative aspect-3/4 overflow-hidden bg-zinc-100 mb-3 rounded-sm">
                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-background/90 backdrop-blur-sm px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-foreground rounded-sm border border-foreground/5">
                    {item.status}
                  </span>
                </div>

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu"
                />

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 bg-foreground/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <button className="bg-background rounded cursor-pointer text-foreground p-4 tracking-widest text-[11px] font-bold uppercase flex items-center gap-2 transition-colors duration-300 hover:bg-liminal-secondary hover:text-background">
                      View Specifications <ShoppingBag className="w-4 h-4" />
                    </button>
                    <span className="text-background/60 text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                      Ref: {item.id}
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div className="flex gap-2.5 justify-between items-start">
                  {/* Title & Description */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono font-semibold text-liminal-secondary uppercase tracking-[0.15em]">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold font-heading group-hover:text-liminal-secondary transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex flex-col gap-0.5 items-end text-right shrink-0 space-y-1 mt-2">
                    <span className="text-[11px] font-mono font-medium text-muted-foreground uppercase tracking-[0.15em]">
                      From
                    </span>
                    <span className="font-bold text-liminal-secondary leading-none">
                      {item.price}
                    </span>
                  </div>
                </div>

                {/* Dimensions & Materials */}
                <div className="flex justify-between items-start pt-4 border-t border-border/50">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-medium text-muted-foreground uppercase tracking-[0.15em]">
                      Materials
                    </span>
                    <p className="text-[11px] font-bold leading-tight uppercase">
                      {item.materials}
                    </p>
                  </div>
                  <div className="space-y-1 text-right">
                    <span className="text-[10px] font-mono font-medium text-muted-foreground uppercase tracking-[0.15em]">
                      Dimensions
                    </span>
                    <p className="text-[11px] font-bold leading-tight uppercase">
                      {item.dimensions}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-20 flex justify-center">
          <button className="cursor-pointer flex justify-center group items-center gap-4 text-primary font-medium hover:text-liminal-secondary transition-colors">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] border-b pb-2 hover:text-liminal-secondary group-hover:border-liminal-secondary transition-all duration-300">
              Explore Full Collection
            </span>
            <span className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:border-liminal-secondary group-hover:bg-liminal-secondary group-hover:text-background transition-all duration-300">
              <ArrowRight className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FurnitureCollection;
