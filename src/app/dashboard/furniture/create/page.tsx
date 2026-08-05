import CreateFurnitureForm from "@/components/modules/dashboard/furniture/create/CreateFurnitureForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Furniture | Liminal Admin",
  description: "Create a new custom furniture product",
};

// CreateFurniturePage Component
const CreateFurniturePage = () => {
  return (
    <main className="custom-container py-16">
      {/* Create Furniture Form */}
      <CreateFurnitureForm />
    </main>
  );
};

export default CreateFurniturePage;
