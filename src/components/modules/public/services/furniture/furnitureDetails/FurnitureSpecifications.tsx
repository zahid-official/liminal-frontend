import SectionHeader from "@/components/shared/SectionHeader";
import type { IFurniture } from "../furnitureData";

// FurnitureSpecifications Props
interface FurnitureSpecificationsProps {
  furniture: IFurniture;
}

// FurnitureSpecifications Component
const FurnitureSpecifications = ({
  furniture,
}: FurnitureSpecificationsProps) => {
  const specs = furniture.specifications;
  const dimensions = specs.dimensions;

  // Technical specification items
  const techSpecs = [
    { label: "Materials", value: specs.materials },
    { label: "Weight", value: specs.weight },
    { label: "Lead Time", value: specs.leadTime },
    { label: "Warranty", value: specs.warranty },
  ];

  // Individual dimension items for the visual breakdown
  const dimensionItems = [
    { label: "Width", value: dimensions.width, unit: dimensions.unit },
    { label: "Depth", value: dimensions.depth, unit: dimensions.unit },
    { label: "Height", value: dimensions.height, unit: dimensions.unit },
  ].filter((d) => d.value !== undefined);

  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80">
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          variant="manifesto"
          badgeText="Technical Data"
          title={
            <>
              Product{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Specifications
              </span>
            </>
          }
          description="Precise technical drawings and construction details are maintained by our studio to ensure millimetric assembly accuracy."
          className="mb-8"
        />

        {/* Two-Column Layout: Specs + Dimensions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Specification Table */}
          <div className="lg:col-span-7">
            {techSpecs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-start justify-between py-4.5 border-b border-border/50 gap-8"
              >
                <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-muted-foreground/80 shrink-0 mt-1">
                  {spec.label}
                </span>
                <span className="text-[15px] font-bold text-foreground text-right tracking-wide">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Visual Dimension Breakdown */}
          <div className="lg:col-span-5">
            <div className="bg-background border border-border/50 rounded-sm space-y-3 p-8 lg:p-10">
              {/* Dimension Header */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-liminal-secondary shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-liminal-secondary">
                  Dimensions
                </span>
              </div>

              {/* Dimension Values */}
              <div className="space-y-3">
                {dimensionItems.map((dim) => (
                  <div key={dim.label} className="space-y-1.5">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
                        {dim.label}
                      </span>
                      <span className="text-lg font-bold font-heading text-foreground tracking-tight">
                        {dim.value}
                        <span className="text-sm font-normal text-muted-foreground ml-1">
                          {dim.unit}
                        </span>
                      </span>
                    </div>
                    {/* Visual Bar */}
                    <div className="w-full h-px bg-border/40 relative">
                      <div
                        className="absolute top-0 left-0 h-px bg-liminal-secondary/60 transition-all duration-700"
                        style={{
                          width: `${Math.min(((dim.value || 0) / 3200) * 100, 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FurnitureSpecifications;
