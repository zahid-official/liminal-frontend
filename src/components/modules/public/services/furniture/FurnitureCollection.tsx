import SectionHeader from "@/components/shared/SectionHeader";
import FurnitureCard from "./FurnitureCard";
import { collection } from "./furnitureData";

// FurnitureCollection Component
const FurnitureCollection = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80">
      <div className="custom-container">
        {/* Section Header */}
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
          className="mb-10"
        />

        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {collection.map((item) => (
            <FurnitureCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FurnitureCollection;

