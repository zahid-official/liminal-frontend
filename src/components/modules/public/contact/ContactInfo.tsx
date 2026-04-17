// ContactInfo Component
const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-16 lg:mb-24">
      {/* Address */}
      <div className="bg-zinc-50/80 hover:bg-zinc-50 transition-colors p-8 lg:p-10 rounded-[1.5rem] lg:rounded-[2rem] border border-border/40 space-y-3 lg:space-y-4">
        <h4 className="text-[15px] font-medium text-muted-foreground">
          Location:
        </h4>
        <address className="not-italic text-lg sm:text-xl font-medium sm:font-semibold leading-relaxed text-foreground">
          5609 E Sprague Ave, Spokane Valley, WA 99212, USA
        </address>
      </div>

      {/* Support (Phone & Email) */}
      <div className="bg-zinc-50/80 hover:bg-zinc-50 transition-colors p-8 lg:p-10 rounded-[1.5rem] lg:rounded-[2rem] border border-border/40 space-y-3 lg:space-y-4">
        <h4 className="text-[15px] font-medium text-muted-foreground">
          Support:
        </h4>
        <div className="flex flex-col gap-1.5">
          <a
            href="tel:+0844560789"
            className="text-liminal-secondary font-medium text-[15px] hover:underline w-fit"
          >
            +(084) 456-0789
          </a>
          <a
            href="mailto:support@example.com"
            className="text-lg sm:text-xl font-medium sm:font-semibold leading-relaxed text-foreground hover:text-liminal-secondary transition-colors inline-block break-all"
          >
            support@example.com
          </a>
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-zinc-50/80 hover:bg-zinc-50 transition-colors p-8 lg:p-10 rounded-[1.5rem] lg:rounded-[2rem] border border-border/40 space-y-3 lg:space-y-4">
        <h4 className="text-[15px] font-medium text-muted-foreground">
          Business Hours:
        </h4>
        <div className="text-lg sm:text-xl font-medium sm:font-semibold leading-relaxed text-foreground">
          <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          <p className="text-muted-foreground text-sm sm:text-base font-normal mt-1">
            Saturday, Sunday: Closed
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
