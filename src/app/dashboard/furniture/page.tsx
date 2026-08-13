import FurnitureManagement from "@/components/modules/dashboard/furniture/management/FurnitureManagement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furniture Management | Liminal Admin",
  description: "Manage your collection, update existing furniture or add new bespoke pieces.",
};

// FurnitureManagementPage Component
const FurnitureManagementPage = () => {
  return (
    <main className="custom-container py-16">
      <FurnitureManagement />
    </main>
  );
};

export default FurnitureManagementPage;
