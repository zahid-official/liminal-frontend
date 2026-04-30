import FurnitureAtelier from "@/components/modules/public/services/furniture/FurnitureAtelier";
import FurniturePhilosophy from "@/components/modules/public/services/furniture/FurniturePhilosophy";
import PageHeader from "@/components/shared/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Furniture Services | Liminal",
  description:
    "Discover Liminal's curated collection of pre-made furniture and bespoke architectural pieces. Crafted with structural integrity, high-end materials, and timeless design.",
};

// FurniturePage Component
const FurniturePage = () => {
  return (
    <main className="bg-background">
      <PageHeader
        title="Furniture Services"
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Furniture" },
        ]}
        bgImage="/assets/furniture/header-bg-refined.png"
      />
      {/* Furniture Philosophy */}
      <FurniturePhilosophy />

      {/* Furniture Atelier */}
      <FurnitureAtelier />
    </main>
  );
};

export default FurniturePage;
