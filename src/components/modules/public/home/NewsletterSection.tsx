import CenteredSectionHeader from "@/components/shared/CenteredSectionHeader";
import { ArrowUpRight } from "lucide-react";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// NewsletterSection Component
const NewsletterSection = () => {
  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="relative overflow-hidden py-24 md:py-28 lg:py-32"
    >
      {/* Background Images */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-between">
        {/* Left Image */}
        <div
          className="w-1/2 h-full"
          style={{
            backgroundImage: "url('/assets/bg-newsletter.png')",
            backgroundPosition: "left bottom",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Right Image (Flipped) */}
        <div
          className="w-1/2 h-full -scale-x-100"
          style={{
            backgroundImage: "url('/assets/bg-newsletter.png')",
            backgroundPosition: "left bottom",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="custom-container relative z-10 flex flex-col items-center text-center">
        <CenteredSectionHeader
          badgeText="SUBSCRIBE TO THE NEWSLETTER"
          headingId="newsletter-heading"
          className="mb-10 lg:mb-14"
          badgeClassName="bg-zinc-50/80 backdrop-blur-sm"
          title={
            <>
              <span>Join </span>
              <span className="text-liminal-secondary">Our Newsletter</span>
              <br className="hidden sm:block" />
              <span className="text-liminal-secondary">Stay </span>
              <span>Up To Date</span>
            </>
          }
          description={
            <>
              Join our newsletter. Learn something new, gain access to exclusive
              content, <br className="hidden md:block" /> and stay informed with
              the latest updates in the industry.
            </>
          }
        />

        {/* Newsletter Form */}
        <form className="w-full max-w-sm sm:max-w-md xl:max-w-lg">
          <Field
            orientation="horizontal"
            className="flex-row relative flex items-center border-b border-foreground/30 pb-3 group transition-colors focus-within:border-foreground/60 gap-0"
          >
            <Input
              type="email"
              placeholder="Email address..."
              required
              className="w-full bg-transparent! border-none rounded-none outline-none text-[15px] sm:text-base md:text-base text-foreground placeholder:text-muted-foreground/80 focus-visible:ring-0 px-2 h-auto py-0 shadow-none"
            />
            <Button
              type="submit"
              className="group/btn shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-liminal-secondary hover:bg-liminal-secondary/90 text-primary-foreground flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 active:scale-95 ml-2 cursor-pointer p-0"
              aria-label="Subscribe"
            >
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu group-hover/btn:rotate-45" />
            </Button>
          </Field>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
