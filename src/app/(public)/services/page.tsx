import PageHeader from "@/components/shared/PageHeader";

// ServicePage Component
const ServicePage = () => {
  return (
    <main>
      <PageHeader
        title="Our Services"
        items={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        bgImage="/assets/services/services-header.png"
      />
    </main>
  );
};

export default ServicePage;
