import SectionHeader from "@/components/shared/SectionHeader";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

// ContactSection Component
const ContactSection = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-20 md:py-28 lg:py-32 bg-[url('/assets/bg-contact.png')] bg-top-right bg-no-repeat"
    >
      <div className="custom-container relative z-10">
        <SectionHeader
          badgeText="GET IN TOUCH"
          title={
            <>
              Have A Project In{" "}
              <span className="text-liminal-secondary">
                Mind? <br className="hidden lg:block" /> Let&apos;s Make
              </span>{" "}
              It Happen
            </>
          }
        />

        {/* Contact Info and Form */}
        <div className="mt-16 lg:mt-24">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
