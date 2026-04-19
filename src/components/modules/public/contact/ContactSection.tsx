import ContactForm from "./ContactForm";

// ContactSection Component
const ContactSection = () => {
  return (
    <section
      id="contact-form-section"
      aria-labelledby="contact-heading"
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-background"
    >
      {/* Editorial Background Element */}
      <div className="absolute top-20 -left-20 text-[25rem] font-bold font-heading text-liminal-secondary/3 select-none pointer-events-none uppercase">
        C
      </div>

      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-start">
          {/* Left Side: Editorial Content */}
          <div className="lg:col-span-5 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both">
            <div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-liminal-secondary" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-liminal-secondary">
                    ESTABLISH CONTACT
                  </span>
                </div>
                <h2
                  id="contact-heading"
                  className="text-4xl sm:text-6xl leading-[1.1] tracking-tight font-bold font-heading"
                >
                  Let&apos;s Build <br />
                  <span className="text-liminal-secondary italic font-serif font-light underline underline-offset-8 decoration-1">
                    Your Vision
                  </span>
                </h2>
              </div>
              <p className="max-w-2xl mx-auto lg:mx-0 text-muted-foreground text-lg leading-relaxed mt-6">
                Our approach is collaborative, transparent, and meticulous. We
                transform architectural possibilities into lived experiences.
              </p>
            </div>

            {/* Decorative Architectural Element */}
            <div className="relative w-64 h-64 hidden xl:block mx-auto lg:mx-0">
              {/* Technical Rings */}
              <div className="absolute inset-0 border border-liminal-secondary/10 rounded-full" />
              <div className="absolute inset-8 border border-dashed border-liminal-secondary/30 rounded-full animate-[spin_60s_linear_infinite]" />

              {/* Precision Crosshair */}
              <div className="absolute inset-0">
                {/* Vertical Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-border/30 to-transparent -translate-x-1/2" />
                {/* Horizontal Line */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-border/30 to-transparent -translate-y-1/2" />

                {/* Rotating Index */}
                <div className="absolute inset-0 animate-[spin_40s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-5 bg-liminal-secondary/60" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-5 bg-liminal-secondary/60" />
                </div>

                {/* Central Point */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-liminal-secondary shadow-[0_0_15px_rgba(110,120,95,0.5)]" />
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
