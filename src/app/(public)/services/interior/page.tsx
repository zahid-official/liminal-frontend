import PageHeader from "@/components/shared/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Services | Liminal",
  description:
    "Explore Liminal's premium interior design services, including residential, commercial, and architectural consultancy. We craft sophisticated, high-end spaces with precision and soul.",
};

// InteriorPage Component
const InteriorPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <PageHeader
        title="Interior Design"
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Interior" },
        ]}
        bgImage="/assets/interior-hero.png"
      />
    </main>
  );
};

export default InteriorPage;
