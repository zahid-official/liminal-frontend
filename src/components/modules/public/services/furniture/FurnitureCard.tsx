import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { IFurniture, formatDimensions } from "./furnitureData";
import Link from "next/link";

interface FurnitureCardProps {
  item: IFurniture;
}

const FurnitureCard = ({ item }: FurnitureCardProps) => {
  return (
    <div className="group relative flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-3/4 overflow-hidden bg-zinc-100 mb-3 rounded-sm">
        {/* Status Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-background/90 backdrop-blur-sm px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-foreground rounded-sm border border-foreground/5">
            {item.status}
          </span>
        </div>

        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu"
        />

        {/* Quick Action Overlay */}
        <div className="absolute inset-0 bg-foreground/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            {/* Ref Text */}
            <span className="text-background/60 text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
              Code: {item.productCode}
            </span>

            {/* View Specs Button */}
            <Link href={`/services/furniture/${item.slug}`}>
              <button className="bg-background rounded cursor-pointer text-foreground p-4 tracking-widest text-[11px] font-bold uppercase flex items-center gap-2 transition-colors duration-300 hover:bg-liminal-secondary hover:text-background">
                View Specifications <ShoppingBag className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-4">
        <div className="flex gap-2.5 justify-between items-start">
          {/* Title & Category */}
          <div className="space-y-1">
            <span className="text-[11px] font-mono font-semibold text-liminal-secondary uppercase tracking-[0.15em]">
              {item.category}
            </span>
            <h3 className="text-2xl font-bold font-heading group-hover:text-liminal-secondary transition-colors line-clamp-1">
              {item.title}
            </h3>
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

        {/* description */}
        <p className="text-sm text-muted-foreground -mt-2 line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        {/* Dimensions & Materials */}
        <div className="flex justify-between items-start pt-3 border-t border-border/50">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-medium text-muted-foreground uppercase tracking-[0.15em]">
              Materials
            </span>
            <p className="text-[11px] font-bold leading-tight uppercase">
              {item.specifications.materials}
            </p>
          </div>
          <div className="space-y-1 text-right">
            <span className="text-[10px] font-mono font-medium text-muted-foreground uppercase tracking-[0.15em]">
              Dimensions
            </span>
            <p className="text-[11px] font-bold leading-tight uppercase">
              {formatDimensions(item.specifications.dimensions)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureCard;
