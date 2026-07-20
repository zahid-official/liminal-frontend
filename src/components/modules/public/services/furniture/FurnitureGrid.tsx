import { IFurniture } from "./furnitureData";
import FurnitureCard from "./FurnitureCard";
import { FolderSearch } from "lucide-react";

// FurnitureGrid Props
interface FurnitureGridProps {
  furniture: IFurniture[];
}

// FurnitureGrid Component
const FurnitureGrid = ({ furniture }: FurnitureGridProps) => {
  // Empty State
  if (furniture.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-20 h-20 rounded-full bg-zinc-100 flex items-center justify-center mb-6">
          <FolderSearch className="size-8 text-muted-foreground/40" />
        </div>
        <h3 className="text-xl font-bold font-heading tracking-tight mb-2">
          No Furniture Found
        </h3>
        <p className="text-muted-foreground font-light text-[15px] max-w-md">
          No furniture matches your current filters. Try adjusting your search
          criteria or clearing the filters to explore our collection.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {furniture.map((item) => (
        <FurnitureCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FurnitureGrid;
