import InteriorPhilosophy from "@/components/modules/public/services/interior/InteriorPhilosophy";
import InteriorProcess from "@/components/modules/public/services/interior/InteriorProcess";
import InteriorServices from "@/components/modules/public/services/interior/InteriorServices";
import PageHeader from "@/components/shared/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Services | Liminal",
  description:
    "Explore Liminal's premium interior design services. We manifest sophisticated, high-end spaces by bridging creative vision with architectural reality.",
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
        bgImage="/assets/interior/hero-premium-new.png"
      />

      {/* Philosophy Section */}
      <InteriorPhilosophy />

      {/* Core Services Section */}
      <InteriorServices />

      {/* Process Section */}
      <InteriorProcess />

      {/* CTA Section */}
      {/* <InteriorCTA /> */}
    </main>
  );
};

export default InteriorPage;
