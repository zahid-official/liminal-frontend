import SectionHeader from "@/components/shared/SectionHeader";
import FurnitureCard from "../FurnitureCard";
import { getRelatedFurniture, type IFurniture } from "../furnitureData";

// FurnitureRelated Props
interface FurnitureRelatedProps {
  furniture: IFurniture;
}

// FurnitureRelated Component
const FurnitureRelated = ({ furniture }: FurnitureRelatedProps) => {
  const related = getRelatedFurniture(furniture.slug, 3);

  return (
    <section
      id="related-furniture"
      aria-labelledby="related-furniture-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80"
    >
      <div className="custom-container">
        {/* Related Furniture */}
        {related.length > 0 && (
          <>
            {/* Section Header */}
            <SectionHeader
              variant="manifesto"
              badgeText="Curated Selection"
              headingId="related-furniture-heading"
              title={
                <>
                  Explore Related{" "}
                  <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                    Creations
                  </span>
                </>
              }
              description="Explore complementary pieces designed with the same minimalist philosophy and commitment to craftsmanship."
              className="mb-12"
            />

            {/* Related Furniture Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {related.map((item) => (
                <FurnitureCard key={item.id} item={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FurnitureRelated;
