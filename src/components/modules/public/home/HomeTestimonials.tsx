import { Star } from "lucide-react";

// Testimonials data
const testimonials = [
  {
    quote:
      "Liminal didn't just design our home — they understood how we live, how we breathe, and built a space that mirrors our identity. Every corner feels intentional, every material tells a story.",
    client: "Anika Rahman",
    role: "Homeowner",
    project: "Private Residence, Gulshan",
    year: "2024",
    rating: 5,
  },
  {
    quote:
      "Working with Liminal was a revelation. Their process is meticulous, their vision is extraordinary, and the result exceeded every expectation we had. Our office has become a destination.",
    client: "Faisal Ahmed",
    role: "Managing Director",
    project: "Corporate Headquarters, Banani",
    year: "2025",
    rating: 5,
  },
  {
    quote:
      "What sets Liminal apart is their ability to listen. They heard what we couldn't articulate and translated it into spaces that feel both timeless and deeply personal.",
    client: "Nusrat Jahan",
    role: "Architect & Client",
    project: "Penthouse Renovation, Baridhara",
    year: "2025",
    rating: 5,
  },
];

// HomeTestimonials Component
const HomeTestimonials = () => {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-20 md:py-28 lg:py-36 relative overflow-hidden"
    >
      <div className="custom-container">
        {/* Centered Header */}
        <div className="text-center space-y-5 mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-liminal-secondary/40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-liminal-secondary">
              Client Voices
            </span>
            <div className="w-12 h-px bg-liminal-secondary/40" />
          </div>
          <h2
            id="testimonials-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight font-heading"
          >
            Trust Built Through{" "}
            <span className="italic font-serif font-light text-liminal-secondary">
              Experience
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-[16px] sm:text-lg leading-relaxed font-light">
            The relationships we build are as enduring as the spaces we create.
            Here&apos;s what our clients say.
          </p>
        </div>

        {/* 3-Column Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/30 border border-border/30 rounded-sm overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-background hover:bg-zinc-50/60 transition-colors duration-500 p-8 md:p-10 flex flex-col"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-liminal-secondary text-liminal-secondary"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="flex-1 mb-8">
                <div className="text-3xl text-liminal-secondary/20 font-serif leading-none mb-3 select-none">
                  &ldquo;
                </div>
                <p className="text-[15px] italic font-serif text-foreground/80 leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              {/* Separator */}
              <div className="w-8 h-px bg-border/60 group-hover:bg-liminal-secondary/40 group-hover:w-14 transition-all duration-700 mb-5" />

              {/* Attribution */}
              <div>
                <p className="text-sm font-semibold tracking-tight">
                  {testimonial.client}
                </p>
                <p className="text-[11px] text-muted-foreground/60 mt-0.5">
                  {testimonial.role}
                </p>
                <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground/40 mt-2">
                  {testimonial.project} — {testimonial.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
