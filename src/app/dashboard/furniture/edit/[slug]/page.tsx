import { getFurnitureBySlug } from "@/components/modules/public/services/furniture/furnitureData";
import EditFurnitureForm from "@/components/modules/dashboard/furniture/edit/EditFurnitureForm";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Edit Furniture | Liminal Admin",
  description: "Edit an existing furniture product in the collection",
};

interface EditFurniturePageProps {
  params: Promise<{ slug: string }>;
}

// EditFurniturePage Component
const EditFurniturePage = async ({ params }: EditFurniturePageProps) => {
  const { slug } = await params;
  const furniture = getFurnitureBySlug(slug);

  if (!furniture) {
    notFound();
  }

  return (
    <main className="custom-container py-16">
      <EditFurnitureForm initialData={furniture} />
    </main>
  );
};

export default EditFurniturePage;
