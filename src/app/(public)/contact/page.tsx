import ContactSection from "@/components/modules/public/contact/ContactSection";
import PageHeader from "@/components/shared/PageHeader";

// ContactPage Component
const ContactPage = () => {
  return (
    <main>
      <PageHeader
        title="Contact Us"
        items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        bgImage="/assets/bg-contact.avif"
      />
      <ContactSection />
    </main>
  );
};

export default ContactPage;
