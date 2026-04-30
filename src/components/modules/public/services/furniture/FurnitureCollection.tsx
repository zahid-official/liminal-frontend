import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Image from "next/image";

// collectionData
const collection = [
  {
    id: "FC-001",
    title: "The Sculptural Armchair",
    description:
      "An ergonomic masterpiece blending brutalist form with soft comfort.",
    category: "Seating",
    materials: "Walnut & Premium Leather",
    dimensions: "850 x 750 x 900 mm",
    image: "/assets/furniture/armchair.png",
    price: "$2,450",
  },
  {
    id: "FC-002",
    title: "Minimalist Oak Console",
    description:
      "Refined storage solution featuring clean lines and natural grain textures.",
    category: "Storage",
    materials: "Solid White Oak",
    dimensions: "1200 x 400 x 750 mm",
    image: "/assets/furniture/cabinet.png",
    price: "$1,850",
  },
  {
    id: "FC-003",
    title: "Arch Dining Table",
    description:
      "A monumental centerpiece crafted from rare Italian travertine.",
    category: "Tables",
    materials: "Travertine & Dark Ash",
    dimensions: "2400 x 1100 x 750 mm",
    image: "/assets/furniture/dining-table.png",
    price: "$4,200",
  },
];

// FurnitureCollection Component
const FurnitureCollection = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80">
      <div className="custom-container">
        <SectionHeader
          badgeText="The Signature Edit"
          title={
            <>
              Refined Furniture{" "} <br className="max-lg:hidden" />
              <span className="italic font-serif font-light text-liminal-secondary">
                Gallery
              </span>
            </>
          }
          description="A selection of our most refined designs, pre-crafted and ready for immediate purchase. This collection offers a seamless way to acquire artisanal furniture masterpieces, allowing you to elevate your space instantly."
          variant="split"
        />

        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          {collection.map((item) => (
            <div key={item.id} className="group relative flex flex-col">
              {/* Image Container */}
              <div className="relative aspect-3/4 overflow-hidden bg-zinc-100 mb-3 rounded-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu"
                />

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <button className="bg-white rounded cursor-pointer text-black p-4 tracking-widest text-[11px] font-bold uppercase flex items-center gap-2 transition-colors duration-300 hover:bg-liminal-secondary hover:text-white">
                      View Specifications <ShoppingBag className="w-4 h-4" />
                    </button>
                    <span className="text-white/60 text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
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
            <span className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:border-liminal-secondary group-hover:bg-liminal-secondary group-hover:text-white transition-all duration-300">
              <ArrowRight className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FurnitureCollection;
