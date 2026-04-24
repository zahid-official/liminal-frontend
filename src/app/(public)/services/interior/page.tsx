import PageHeader from "@/components/shared/PageHeader";
import { Metadata } from "next";
import InteriorPhilosophy from "@/components/modules/public/services/interior/InteriorPhilosophy";
import InteriorServicesList from "@/components/modules/public/services/interior/InteriorServicesList";
import InteriorProjects from "@/components/modules/public/services/interior/InteriorProjects";
import InteriorProcess from "@/components/modules/public/services/interior/InteriorProcess";

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

      {/* Philosophy Section */}
      <InteriorPhilosophy />

      {/* Services List Section */}
      <InteriorServicesList />

      {/* Projects Showcase Section */}
      <InteriorProjects />

      {/* Process Section */}
      <InteriorProcess />

      {/* CTA Section */}
    </main>
  );
};

export default InteriorPage;
