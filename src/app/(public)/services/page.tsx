import PageHeader from "@/components/shared/PageHeader";
import ServiceCards from "@/components/modules/public/services/ServiceCards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Liminal Design Studio",
  description:
    "Explore Liminal's curated ecosystem of design disciplines, ranging from bespoke interior architecture to handcrafted furniture. We bridge creative vision with architectural reality.",
};

// ServicePage Component
const ServicePage = () => {
  return (
    <main className="bg-background">
      {/* Page Header */}
      <PageHeader
        title="Our Services"
        items={[{ label: "Home", href: "/" }, { label: "Services" }]}
        bgImage="/assets/services/services-header.png"
      />

      {/* Service Brochure */}
      <ServiceCards />
    </main>
  );
};

export default ServicePage;
