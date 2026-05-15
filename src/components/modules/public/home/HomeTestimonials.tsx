// Single centered testimonial — creates breathing space after the dense Philosophy section
const testimonial = {
  quote: "Liminal didn't just design our home — they understood how we live, how we breathe, and built a space that mirrors our identity. Every corner feels intentional, every material tells a story. Working with them was transformative.",
  client: "Anika Rahman",
  role: "Homeowner",
  project: "Private Residence, Gulshan",
  year: "2024",
};

// HomeTestimonials Component
const HomeTestimonials = () => {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="py-20 md:py-28 lg:py-36 relative overflow-hidden bg-zinc-50/80">
      <div className="custom-container">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-liminal-secondary/40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-liminal-secondary">Client Voices</span>
            <div className="w-12 h-px bg-liminal-secondary/40" />
          </div>

          <h2 id="testimonials-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight font-heading">
            Trust Built Through{" "}<span className="italic font-serif font-light text-liminal-secondary">Experience</span>
          </h2>

          {/* Featured Quote */}
          <div className="relative pt-6">
            <div className="text-7xl md:text-8xl text-liminal-secondary/15 font-serif leading-none select-none pointer-events-none mb-[-1.5rem]">&ldquo;</div>
            <blockquote>
              <p className="text-xl md:text-2xl lg:text-3xl italic font-serif text-foreground/85 leading-relaxed max-w-3xl mx-auto">{testimonial.quote}</p>
            </blockquote>
            <div className="flex items-center justify-center gap-3 mt-10">
              <div className="w-8 h-px bg-liminal-secondary/50" />
              <div className="w-1.5 h-1.5 rotate-45 border border-liminal-secondary/70" />
              <div className="w-8 h-px bg-liminal-secondary/50" />
            </div>
            <div className="mt-6 space-y-1.5">
              <p className="text-base font-semibold tracking-tight">{testimonial.client}</p>
              <p className="text-[11px] text-muted-foreground/55">{testimonial.role}</p>
              <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground/35 pt-1">{testimonial.project} — {testimonial.year}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
