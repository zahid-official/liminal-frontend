"use client";

import LiminalButton from "@/components/shared/LiminalButton";
import ShareButtons from "@/components/shared/ShareButtons";
import {
  Bell,
  Clock,
  Expand,
  Layers,
  Package,
  Ruler,
  ShoppingBag,
  Weight,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { IFurniture, formatDimensions } from "../furnitureData";
import FurnitureOrderPanel from "./FurnitureOrderPanel";

// FurnitureHero Props
interface FurnitureHeroProps {
  furniture: IFurniture;
}

// Status configuration
const statusConfig: Record<
  string,
  {
    dotColor: string;
    label: (furniture: IFurniture) => string;
    ctaLabel: string;
    ctaIcon: typeof ShoppingBag;
  }
> = {
  "In Stock": {
    dotColor: "bg-liminal-secondary",
    label: (f) => `In Stock - ${f.stock} available`,
    ctaLabel: "Place Order",
    ctaIcon: ShoppingBag,
  },
  "Limited Edition": {
    dotColor: "bg-amber-500",
    label: (f) => `Limited Edition - ${f.stock} remaining`,
    ctaLabel: "Place Order",
    ctaIcon: ShoppingBag,
  },
  "Made to Order": {
    dotColor: "bg-sky-500",
    label: (f) => `Made to Order - ${f.specifications.leadTime}`,
    ctaLabel: "Request Order",
    ctaIcon: Clock,
  },
  "Pre-Order": {
    dotColor: "bg-violet-500",
    label: (f) => `Pre-Order - Ships In ${f.specifications.leadTime}`,
    ctaLabel: "Pre-Order Now",
    ctaIcon: Package,
  },
  "Out of Stock": {
    dotColor: "bg-red-500",
    label: () => "Currently Unavailable",
    ctaLabel: "Join Waitlist",
    ctaIcon: Bell,
  },
};

// FurnitureHero Component
const FurnitureHero = ({ furniture }: FurnitureHeroProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isOrderPanelOpen, setIsOrderPanelOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const config = statusConfig[furniture.status] || statusConfig["In Stock"];
  const allImages = [
    { url: furniture.thumbnail, caption: furniture.title },
    ...furniture.galleryImages,
  ];
  const activeImage = allImages[activeImageIndex];

  return (
    <>
      <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
        <div className="custom-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Product Image */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-3/4 rounded overflow-hidden border border-border/20 group">
                <Image
                  src={activeImage.url}
                  alt={activeImage.caption || furniture.title}
                  fill
                  quality={95}
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover ease-out transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu"
                />

                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 py-1.5 px-2.5 rounded-sm bg-background/80 backdrop-blur-md border border-border/30 shadow-lg">
                  <span className={`w-2 h-2 rounded-full ${config.dotColor}`} />

                  <span className="text-[11px] font-semibold tracking-wider text-foreground/80 uppercase">
                    {furniture.status}
                  </span>
                </div>

                {/* Expand Button overlay */}
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute right-4 top-4 p-2.5 rounded-full bg-background/75  hover:bg-background backdrop-blur-md text-foreground border border-border/40 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg cursor-pointer"
                  aria-label="Expand image"
                >
                  <Expand className="size-5" />
                </button>

                {/* Caption & Counter Strip */}
                <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-foreground/60 via-foreground/20 to-transparent p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  {/* Caption */}
                  <p className="text-background/80 text-xs font-mono tracking-widest uppercase">
                    {activeImage.caption}
                  </p>

                  <div className="flex items-center gap-4">
                    {/* Dots indicator */}
                    <div className="flex gap-1.5">
                      {allImages.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            activeImageIndex === idx
                              ? "w-6 bg-background"
                              : "w-1.5 bg-background/40"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Image Counter */}
                    <span className="text-xs font-mono font-bold tracking-widest text-background/80">
                      {String(activeImageIndex + 1).padStart(2, "0")} /{" "}
                      {String(allImages.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="grid grid-cols-4 gap-4">
                {allImages?.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative aspect-4/3 w-full rounded overflow-hidden border-2 transition-all duration-500 cursor-pointer ${
                      activeImageIndex === index
                        ? "border-liminal-dark/60 shadow-lg shadow-liminal-secondary/20"
                        : "border-border/20 hover:border-border/60 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={image.caption || `View ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 25vw, 15vw"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Information */}
            <div className="">
              <div className="space-y-9">
                {/* Identity Section */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end gap-2">
                    {/* Category */}
                    <p className="text-xs space-x-1.5 font-semibold tracking-wider text-foreground/80 uppercase bg-liminal-secondary/3 border border-border/10 px-2 py-1 rounded">
                      Category: {furniture.category}
                    </p>

                    {/* Product Code */}
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase">
                        Code: {furniture.productCode}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-heading tracking-tight leading-[1.05]">
                    {furniture.title}
                  </h2>

                  {/* Tagline */}
                  <p className="text-lg italic font-serif text-liminal-secondary font-light underline underline-offset-10 decoration-1 decoration-liminal-secondary/35">
                    {furniture.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed font-light">
                  {furniture.description}
                </p>

                {/* Separator */}
                <div className="h-px bg-border/50" />

                {/* Price */}
                <div className="flex items-baseline gap-3">
                  <span className="text-[10px] font-mono font-medium text-muted-foreground uppercase tracking-[0.15em]">
                    From
                  </span>
                  <span className="text-3xl sm:text-4xl font-bold font-heading text-foreground tracking-tight">
                    {furniture.price}
                  </span>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-2 py-3 px-4 rounded-sm bg-zinc-50 border border-border/30">
                  <span
                    className={`w-2 h-2 rounded-full ${config.dotColor} shrink-0`}
                  />
                  <span className="text-[11px] font-mono font-semibold tracking-wider text-foreground/80 uppercase">
                    {config.label(furniture)}
                  </span>
                </div>

                {/* Place Order Button */}
                <LiminalButton
                  icon={config.ctaIcon}
                  animateIcon={false}
                  className="w-full"
                  onClick={() => setIsOrderPanelOpen(true)}
                >
                  {config.ctaLabel}
                </LiminalButton>

                {/* Quick Specs */}
                <div className="grid grid-cols-3 gap-4 py-1">
                  <div className="space-y-2 text-center p-3 rounded-sm bg-zinc-50 border border-border/20">
                    <Layers className="size-4 text-muted-foreground/50 mx-auto" />
                    <span className="text-[9px] font-mono font-medium text-muted-foreground uppercase tracking-[0.15em] block">
                      Materials
                    </span>
                    <p className="text-[11px] font-bold leading-tight">
                      {furniture.specifications.materials}
                    </p>
                  </div>
                  <div className="space-y-2 text-center p-3 rounded-sm bg-zinc-50 border border-border/20">
                    <Weight className="size-4 text-muted-foreground/50 mx-auto" />
                    <span className="text-[9px] font-mono font-medium text-muted-foreground uppercase tracking-[0.15em] block">
                      Weight
                    </span>
                    <p className="text-[11px] font-bold leading-tight">
                      {furniture.specifications.weight}
                    </p>
                  </div>
                  <div className="space-y-2 text-center p-3 rounded-sm bg-zinc-50 border border-border/20">
                    <Ruler className="size-4 text-muted-foreground/50 mx-auto" />
                    <span className="text-[9px] font-mono font-medium text-muted-foreground uppercase tracking-[0.15em] block">
                      Dimensions
                    </span>
                    <p className="text-[11px] font-bold leading-tight">
                      {formatDimensions(furniture.specifications.dimensions)}
                    </p>
                  </div>
                </div>

                {/* Share */}
                <ShareButtons title={furniture.title} />
              </div>
            </div>
          </div>
        </div>

        {/* Click-to-Expand Lightbox Modal */}
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-foreground/95 backdrop-blur-md p-4 animate-in fade-in duration-300">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-background/10 text-background border border-background/20 cursor-pointer hover:bg-background/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="size-5" />
            </button>

            <div className="relative w-full max-w-5xl aspect-4/5 sm:aspect-video rounded-sm overflow-hidden">
              <Image
                src={activeImage.url}
                alt={activeImage.caption || furniture.title}
                fill
                className="object-contain"
              />
            </div>

            {activeImage.caption && (
              <p className="mt-6 text-background/80 font-mono tracking-widest text-xs uppercase text-center max-w-xl">
                {activeImage.caption}
              </p>
            )}
          </div>
        )}
      </section>

      {/* Order Panel */}
      <FurnitureOrderPanel
        furniture={furniture}
        isOpen={isOrderPanelOpen}
        onClose={() => setIsOrderPanelOpen(false)}
      />
    </>
  );
};

export default FurnitureHero;
