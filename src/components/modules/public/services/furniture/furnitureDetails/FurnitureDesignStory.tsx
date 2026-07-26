import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import { IFurniture } from "../furnitureData";

interface FurnitureDesignStoryProps {
  furniture: IFurniture;
}

// FurnitureDesignStory Component
const FurnitureDesignStory = ({ furniture }: FurnitureDesignStoryProps) => {
  const { details, galleryImages, thumbnail, title } = furniture;

  if (!details.designStory && !details.craftsmanship) return null;

  // Fallback images
  const img1 =
    galleryImages && galleryImages.length > 1
      ? galleryImages[1].url
      : thumbnail;
  const img1Caption =
    galleryImages && galleryImages.length > 1 ? galleryImages[1].caption : "";

  const img2 =
    galleryImages && galleryImages.length > 2
      ? galleryImages[2].url
      : thumbnail;
  const img2Caption =
    galleryImages && galleryImages.length > 2 ? galleryImages[2].caption : "";

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-zinc-50/80 text-foreground relative overflow-hidden">
      <div className="custom-container relative z-10 space-y-20">
        {/* Section Header */}
        <SectionHeader
          variant="manifesto"
          badgeText="Design Story"
          title={
            <>
              The Art Behind the{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Form
              </span>
            </>
          }
          className="mb-10"
        />

        {/* Asymmetric Masonry Wall Layout (5/7 split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Block (col-span-5) */}
          <div className="lg:col-span-5 space-y-10">
            {details.designStory && (
              <div className="space-y-8">
                {/* Portrait Image Frame */}
                <div className="group relative aspect-3/4 w-full bg-zinc-50 rounded-xs overflow-hidden border border-border/15">
                  <Image
                    src={img1}
                    alt={img1Caption || `${title} Design Story`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 transform-gpu will-change-transform"
                  />
                  {img1Caption && (
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-foreground/45 to-transparent p-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-background/95 text-[10px] font-mono tracking-wider uppercase">
                        {img1Caption}
                      </p>
                    </div>
                  )}
                </div>

                {/* Text Block */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-liminal-secondary" />
                    <label className="text-[10px] font-mono tracking-widest text-liminal-secondary uppercase font-bold">
                      CONCEPT DESIGN
                    </label>
                  </div>
                  <p className="text-[15px] leading-relaxed text-muted-foreground text-justify">
                    {details.designStory}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Block (col-span-7) with offset styling */}
          <div className="lg:col-span-7 space-y-12">
            {details.craftsmanship && (
              <div className="space-y-8">
                {/* Text Block */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-liminal-secondary" />
                    <label className="text-[10px] font-mono tracking-widest text-liminal-secondary uppercase font-bold">
                      CREATIVE OVERVIEW
                    </label>
                  </div>

                  <p className="text-[15px] leading-relaxed text-muted-foreground text-justify">
                    {details.overview}
                  </p>
                </div>

                {/* Text Block */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-liminal-secondary" />
                    <label className="text-[10px] font-mono tracking-widest text-liminal-secondary uppercase font-bold">
                      CRAFTSMANSHIP PRINCIPLES
                    </label>
                  </div>
                  <p className="text-[15px] leading-relaxed text-muted-foreground text-justify">
                    {details.craftsmanship}
                  </p>
                </div>

                {/* Framed Quote container */}
                <div className="p-8 bg-zinc-50/80 border border-border/30 rounded-sm relative">
                  <span className="absolute top-2 left-4 text-6xl font-serif text-liminal-secondary/15 leading-none select-none pointer-events-none">
                    “
                  </span>
                  <div className="absolute top-0 left-0 w-1 h-full bg-liminal-secondary/80" />
                  <p className="text-base font-serif italic text-foreground/90 leading-relaxed pl-3 relative z-10">
                    The structural essence of a piece lies in its shadow. We
                    design furniture to silhouette cleanly against any
                    architectural background.
                  </p>
                </div>

                {/* Landscape Offset Image Frame */}
                <div className="group relative aspect-video w-full bg-zinc-50 rounded-xs overflow-hidden border border-border/15 shadow-sm">
                  <Image
                    src={img2}
                    alt={img2Caption || `${title} Craftsmanship`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 transform-gpu will-change-transform"
                  />
                  {img2Caption && (
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-foreground/45 to-transparent p-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-background/95 text-[10px] font-mono tracking-wider uppercase">
                        {img2Caption}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FurnitureDesignStory;
