import { getFurnitureBySlug } from "@/components/modules/public/services/furniture/furnitureData";
import PageHeader from "@/components/shared/PageHeader";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Props
interface FurnitureDetailsPageProps {
  params: Promise<{ slug: string }>;
}

// Dynamic Metadata
export async function generateMetadata({
  params,
}: FurnitureDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const furniture = getFurnitureBySlug(slug);

  if (!furniture) {
    return { title: "Furniture Not Found | Liminal" };
  }

  return {
    title: `${furniture.title} | Liminal Furniture`,
    description: furniture.description,
  };
}

// FurnitureDetailsPage Component
const FurnitureDetailsPage = async ({ params }: FurnitureDetailsPageProps) => {
  const { slug } = await params;
  const furniture = getFurnitureBySlug(slug);

  if (!furniture) {
    console.log("Furniture not found for slug:", slug);
    notFound();
  }

  return (
    <main>
      {/* Page Header */}
      <PageHeader
        title="Furniture Insights"
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Furniture", href: "/services/furniture" },
          { label: furniture.title },
        ]}
        bgImage="/assets/furniture/ether-sideboard.png"
      />
    </main>
  );
};

export default FurnitureDetailsPage;
