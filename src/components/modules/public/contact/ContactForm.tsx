import Image from "next/image";
import AnimatedButton from "@/components/shared/AnimatedButton";

// ContactForm Component
const ContactForm = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left Image */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg border border-border/10 shrink-0">
        <Image
          src="/assets/contact-1.jpg"
          alt="Contact interior space"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-bottom"
        />
      </div>

      {/* Right Form */}
      <div className="w-full">
        {/* Form Heading */}
        <div className="mb-8 lg:mb-10">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-3">
            Send a <span className="text-liminal-secondary">Message</span>
          </h3>
          <p className="text-[15px] sm:text-base text-muted-foreground leading-relaxed">
            Please fill out the form below and we will get back to you as soon as possible.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="fullName"
                className="block pl-5 text-[15px] font-semibold text-foreground"
              >
                Full Name*
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Liam Anderson"
                className="w-full px-5 py-3.5 rounded-full border border-border bg-background focus:outline-none focus:ring-1 focus:ring-liminal-secondary focus:border-liminal-secondary transition-all placeholder:text-muted-foreground/50 text-[15px]"
                required
              />
            </div>
            {/* Your Email */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block pl-5 text-[15px] font-semibold text-foreground"
              >
                Your Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="info@intorio.com"
                className="w-full px-5 py-3.5 rounded-full border border-border bg-background focus:outline-none focus:ring-1 focus:ring-liminal-secondary focus:border-liminal-secondary transition-all placeholder:text-muted-foreground/50 text-[15px]"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone Number */}
            <div className="space-y-1.5">
              <label
                htmlFor="phone"
                className="block pl-5 text-[15px] font-semibold text-foreground"
              >
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="(212) 555-7890"
                className="w-full px-5 py-3.5 rounded-full border border-border bg-background focus:outline-none focus:ring-1 focus:ring-liminal-secondary focus:border-liminal-secondary transition-all placeholder:text-muted-foreground/50 text-[15px]"
                required
              />
            </div>
            {/* Subject */}
            <div className="space-y-1.5">
              <label
                htmlFor="subject"
                className="block pl-5 text-[15px] font-semibold text-foreground"
              >
                Subject*
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Luxury Interior Design"
                className="w-full px-5 py-3.5 rounded-full border border-border bg-background focus:outline-none focus:ring-1 focus:ring-liminal-secondary focus:border-liminal-secondary transition-all placeholder:text-muted-foreground/50 text-[15px]"
                required
              />
            </div>
          </div>

          {/* Your Message */}
          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="block pl-5 text-[15px] font-semibold text-foreground"
            >
              Your Message*
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Please Type Your Message Here..."
              className="w-full px-5 py-4 rounded-[1.5rem] border border-border bg-background focus:outline-none focus:ring-1 focus:ring-liminal-secondary focus:border-liminal-secondary transition-all placeholder:text-muted-foreground/50 text-[15px] resize-y"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <AnimatedButton type="submit">Send Message</AnimatedButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
