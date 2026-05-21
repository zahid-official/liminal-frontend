import SectionHeader from "@/components/shared/SectionHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Image from "next/image";
import TestimonialRating from "./TestimonialRating";

// Testimonial Data
const testimonials = [
  {
    id: 1,
    name: "Arthur Pendelton",
    role: "Client, Apex Residence",
    rating: 5,
    quote:
      "A profound collaboration. Their understanding of spatial flow and structural details was evident throughout the design.",
    avatar: "https://i.pravatar.cc/150?img=57",
  },
  {
    id: 2,
    name: "Farhan Huq",
    role: "Curator, Artistic Lounge",
    rating: 5,
    quote:
      "Our gallery space is a masterpiece of light and form. The clean lines and neutral materials establish a quiet, contemplative atmosphere.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Founder, Corporate Zen",
    rating: 5,
    quote:
      "They captured our brand identity with absolute clarity, translating it into a refined spatial experience with exceptional material craft.",
    avatar: "https://i.pravatar.cc/150?img=56",
  },
  {
    id: 4,
    name: "Michael Vance",
    role: "Managing Partner, Zenith Commercial",
    rating: 4,
    quote:
      "Their rigor and professional conduct throughout the project was impressive. The corporate interior they designed is both functional and serene.",
    avatar: "https://i.pravatar.cc/150?img=55",
  },
  {
    id: 5,
    name: "Tanvir Kabir",
    role: "Client, Marble Haven",
    rating: 5,
    quote:
      "The process was seamless and intellectual. They elevated our home beyond our expectations and crafted a space that we cherish every single day.",
    avatar: "https://i.pravatar.cc/150?img=68",
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
                Warm Words From <br className="max-lg:hidden" />
                <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                  Satisfied Clients
                </span>
              </>
            }
            description="The trust our clients place in us is the most meaningful measure of our work. These are their experiences, in their own words."
            className="mb-8 lg:mb-10"
          />

          {/* Stats & Navigation Row */}
          <div className="flex justify-end mb-10">
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
                  <p className="text-sm font-semibold text-foreground/90 max-w-85 leading-relaxed">
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
          <CarouselContent className="ml-0 p-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 sm:pl-6 md:basis-1/2 lg:basis-1/3 xl:basis-[28%]"
              >
                <div className="group bg-background rounded-xl p-8 sm:p-10 h-full flex flex-col shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-foreground/4 hover:border-liminal-secondary/25 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-lg hover:-translate-y-2.5 relative overflow-hidden select-none cursor-pointer">
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
                    <p className="text-foreground/70 group-hover:text-foreground/90 font-medium text-sm sm:text-base leading-relaxed mb-6 transition-colors duration-500">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author Profile */}
                  <div className="flex items-center gap-4 mt-auto relative z-10">
                    <div className="overflow-hidden rounded-full border-3 border-foreground/20 shadow-sm shrink-0 transition-colors duration-500 group-hover:border-liminal-secondary/20 isolate">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={52}
                        height={52}
                        className="w-12 h-12 sm:w-13 sm:h-13 object-cover scale-100 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 transform-gpu will-change-transform backface-hidden"
                      />
                    </div>

                    {/* Name and Role */}
                    <div className="flex flex-col">
                      <h4 className="font-bold text-foreground tracking-tight transition-colors duration-500 group-hover:text-liminal-secondary">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-foreground/50 group-hover:text-foreground/70 font-medium transition-colors duration-500">
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
