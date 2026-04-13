import PageHeader from "@/components/shared/PageHeader";

// ContactSection Component
const ContactSection = () => {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        bgImage="/assets/bg-contact.avif"
      />
      <div className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="mt-4 text-muted-foreground">
            Contact form functionality coming soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
