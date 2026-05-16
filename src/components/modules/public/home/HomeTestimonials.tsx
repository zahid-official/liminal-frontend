import SectionHeader from "@/components/shared/SectionHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import TestimonialRating from "./TestimonialRating";

// Testimonial Data
const testimonials = [
  {
    id: 1,
    name: "Shahin Alam",
    role: "Homeowner, Gulshan",
    rating: 5,
    quote:
      "Liminal transformed our apartment into something we couldn't have imagined. The attention to material selection and spatial flow made every room feel considered and intentional. It's not just beautiful — it feels like us.",
    initial: "S",
    accentColor: "bg-liminal-secondary",
  },
  {
    id: 2,
    name: "Noah Mitchell",
    role: "CEO, Atlas Ventures",
    rating: 5,
    quote:
      "Our new office space has genuinely changed how our team works. The design balances openness with privacy, energy with calm. Clients always comment on the atmosphere the moment they walk in.",
    initial: "N",
    accentColor: "bg-[#5B7553]",
  },
  {
    id: 3,
    name: "Morgan Dufresne",
    role: "Creative Director",
    rating: 5,
    quote:
      "Working with Liminal felt like a true collaboration. They understood our vision before we could fully articulate it, then elevated it with details we never would have considered. Exceptional craft.",
    initial: "M",
    accentColor: "bg-[#7A6C5D]",
  },
  {
    id: 4,
    name: "Liam Reynolds",
    role: "Property Developer",
    rating: 4,
    quote:
      "The professional guidance on our commercial redesign was outstanding. Every design decision was backed by clear reasoning, and the results exceeded our expectations in both aesthetics and functionality.",
    initial: "L",
    accentColor: "bg-[#4A6741]",
  },
  {
    id: 5,
    name: "Emma Thompson",
    role: "Homeowner, Banani",
    rating: 5,
    quote:
      "From concept to completion, the process was seamless. What impressed me most was how they considered how we actually live — the light at different times of day, our routines, how we gather. The result is a home that breathes.",
    initial: "E",
    accentColor: "bg-[#6B8F71]",
  },
];

// HomeTestimonials Component
const HomeTestimonials = () => {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-20 md:py-28 lg:py-32 overflow-hidden relative bg-zinc-50/80"
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full relative z-10"
      >
        <div className="custom-container relative">
          {/* Section Header */}
          <SectionHeader
            variant="editorial"
            badgeText="Client Voices"
            headingId="testimonials-heading"
            title={
              <>
                Words That{" "}
                <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                  Validate
                </span>
              </>
            }
            description="The trust our clients place in us is the most meaningful measure of our work. These are their experiences, in their own words."
          />

          {/* Stats & Navigation Row */}
          <div className="flex flex-col lg:flex-row justify-end mb-14 md:mb-20">
            <div className="w-full lg:w-7/10 lg:pl-16 relative">
              {/* Divider */}
              <div className="h-px w-full bg-foreground/10 mb-8 md:mb-12" />

              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8">
                  {/* Star Rating */}
                  <TestimonialRating />

                  {/* Vertical Divider */}
                  <div className="hidden sm:block w-px h-16 bg-foreground/20 mx-2 shrink-0" />

                  {/* Text Statement */}
                  <p className="text-sm sm:text-base font-semibold text-foreground/90 max-w-85 leading-[1.6]">
                    From concept to reality, the team turned my vision into a
                    stunning, livable space. I couldn&apos;t be happier with the
                    results!
                  </p>
                </div>

                {/* Carousel Navigation Buttons */}
                <div className="flex items-center gap-3 shrink-0">
                  <CarouselPrevious className="static inset-auto translate-x-0 translate-y-0 h-10 w-10 md:h-12 md:w-12 bg-background text-foreground border-none shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] hover:bg-liminal-secondary hover:text-background transition-all duration-300 rounded-full cursor-pointer flex items-center justify-center" />
                  <CarouselNext className="static inset-auto translate-x-0 translate-y-0 h-10 w-10 md:h-12 md:w-12 bg-background text-foreground border-none shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] hover:bg-liminal-secondary hover:text-background transition-all duration-300 rounded-full cursor-pointer flex items-center justify-center" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Slider */}
        <div className="w-full">
          <CarouselContent className="ml-0 py-4 px-4 sm:px-6">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 sm:pl-6 md:basis-1/2 lg:basis-1/3 xl:basis-[28%]"
              >
                <div className="group bg-background rounded-lg p-8 sm:p-10 h-full flex flex-col shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-foreground/4 hover:border-liminal-secondary/25 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-lg hover:-translate-y-2.5 relative overflow-hidden cursor-default select-none">
                  {/* Premium Glossy Sheen Effect */}
                  <div className="absolute top-0 left-[-20%] h-full w-60 bg-linear-to-r from-transparent via-foreground/3 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-[150%] skew-x-[-20deg] group-hover:translate-x-[400%] transition-none group-hover:transition-all group-hover:duration-1500 group-hover:ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none z-0" />

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-8 relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${i < testimonial.rating ? "fill-amber-400 text-amber-400" : "fill-foreground/10 text-foreground/10"}`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="flex-1 relative z-10">
                    <p className="text-foreground/70 group-hover:text-foreground/90 font-medium text-[15px] sm:text-base leading-[1.7] mb-3 transition-colors duration-500">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author Profile */}
                  <div className="flex items-center gap-4 mt-auto relative z-10">
                    {/* Initial-based Avatar */}
                    <div
                      className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full ${testimonial.accentColor} flex items-center justify-center shrink-0 shadow-sm transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110`}
                    >
                      <span className="text-white font-bold text-lg sm:text-xl font-heading leading-none">
                        {testimonial.initial}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-bold text-foreground text-base sm:text-[17px] tracking-tight transition-colors duration-500 group-hover:text-liminal-secondary">
                        {testimonial.name}
                      </h4>
                      <p className="text-[13px] text-foreground/50 group-hover:text-foreground/70 font-medium leading-[1.1] mt-0.5 transition-colors duration-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  );
};

export default HomeTestimonials;
