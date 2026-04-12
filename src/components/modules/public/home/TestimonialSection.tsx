import SectionHeader from "@/components/shared/SectionHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import TestimonialRating from "../clients/TestimonialRating";

// Testimonial Data
const testimonials = [
  {
    id: 1,
    name: "Shahin Alam",
    role: "Company Owner",
    rating: 4,
    quote:
      "A wonderful experience! They knew what they were doing and were incredibly knowledgeable throughout the process.",
    avatar: "https://i.pravatar.cc/150?u=shahin",
  },
  {
    id: 2,
    name: "Noah Mitchell",
    role: "Company Owner",
    rating: 5,
    quote:
      "I absolutely love my the new modern living room! The clean lines, a neutral tones, and minimalist interior create such a calming & stylish atmosphere. Highly recommend their modern interior design...",
    avatar: "https://i.pravatar.cc/150?u=noah",
  },
  {
    id: 3,
    name: "Morgan Dufresne",
    role: "Company Owner",
    rating: 5,
    quote:
      "A wonderful experience! They knew what they were doing and were incredibly knowledgeable throughout the process.",
    avatar: "https://i.pravatar.cc/150?u=morgan",
  },
  {
    id: 4,
    name: "Liam Reynolds",
    role: "Company Owner",
    rating: 4,
    quote:
      "I absolutely love my the new modern living room! The clean lines, a neutral tones, and minimalist interior create such a calming & stylish atmosphere. Highly recommend their mod...",
    avatar: "https://i.pravatar.cc/150?u=liam",
  },
  {
    id: 5,
    name: "Emma Thompson",
    role: "Home Owner",
    rating: 5,
    quote:
      "The whole process was completely seamless. I'm beyond thrilled with the results and will definitely use their services again.",
    avatar: "https://i.pravatar.cc/150?u=emma",
  },
];

// TestimonialSection Component
const TestimonialSection = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 overflow-hidden relative bg-[url('/assets/bg-testimonial.png')] bg-bottom-left bg-no-repeat bg-zinc-50/80 dark:bg-background">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full relative z-10"
      >
        <div className="custom-container relative">
          {/* Reusing Common SectionHeader for perfect architectural cross-lines and spacing */}
          <SectionHeader
            badgeText="OWR CLIENTS SAY"
            title={
              <span className="font-bold">
                Here&apos;s What{" "}
                <span className="text-liminal-secondary dark:text-liminal-secondary">
                  Warm Words
                </span>
                <br className="hidden md:block" />
                <span className="text-liminal-secondary dark:text-liminal-secondary">
                  Our Clients
                </span>{" "}
                Say
              </span>
            }
            className="mb-8 lg:mb-12"
          />

          {/* Stats & Navigation Row (Right-Aligned beneath the header title) */}
          <div className="flex flex-col lg:flex-row justify-end mb-14 md:mb-20">
            <div className="w-full lg:w-[70%] lg:pl-16 relative">
              {/* Divider separating Heading from Stats Row */}
              <div className="h-px w-full bg-black/10 mb-8 md:mb-12" />

              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8">
                  {/* Animated Rating Score */}
                  <TestimonialRating />

                  {/* Vertical Divider (Next to Reviews) */}
                  <div className="hidden sm:block w-px h-16 bg-black/20 dark:bg-white/20 mx-2 shrink-0"></div>

                  {/* Text Statement */}
                  <p className="text-[14px] sm:text-[15px] font-semibold text-foreground/90 max-w-85 leading-[1.6]">
                    From Concept To Reality, The Team Turned My Vision Into A
                    Stunning, Livable Space. I Couldn&apos;t Be Happier With
                    This!
                  </p>
                </div>

                {/* Carousel Navigation Buttons */}
                <div className="flex items-center gap-3 shrink-0">
                  <CarouselPrevious className="static inset-auto translate-x-0 translate-y-0 h-10 w-10 md:h-12 md:w-12 bg-white dark:bg-card text-foreground border-none shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] hover:bg-liminal-secondary hover:text-white dark:hover:bg-liminal-secondary transition-all duration-300 rounded-full cursor-pointer flex items-center justify-center" />
                  <CarouselNext className="static inset-auto translate-x-0 translate-y-0 h-10 w-10 md:h-12 md:w-12 bg-white dark:bg-card text-foreground border-none shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] hover:bg-liminal-secondary hover:text-white dark:hover:bg-liminal-secondary transition-all duration-300 rounded-full cursor-pointer flex items-center justify-center" />
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
                <div className="group bg-white dark:bg-card rounded-[2rem] p-8 sm:p-10 h-full flex flex-col shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-black/4 dark:border-white/4 hover:border-liminal-secondary/25 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-lg hover:-translate-y-2.5 relative overflow-hidden cursor-pointer select-none">
                  {/* Premium Glossy Sheen Effect */}
                  <div className="absolute top-0 left-[-20%] h-full w-60 bg-linear-to-r from-transparent via-black/3 dark:via-white/6 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-[150%] skew-x-[-20deg] group-hover:translate-x-[400%] transition-none group-hover:transition-all group-hover:duration-1500 group-hover:ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none z-0" />

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-8 relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${i < testimonial.rating ? "fill-amber-400 text-amber-400" : "fill-foreground/10 text-foreground/10"}`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="flex-1 relative z-10">
                    <p className="text-foreground/70 group-hover:text-foreground/90 font-medium text-[15px] sm:text-base leading-[1.7] mb-10 transition-colors duration-500">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author Profile */}
                  <div className="flex items-center gap-4 mt-auto relative z-10">
                    <div className="overflow-hidden rounded-full border-[3px] border-[#F6F6F6] dark:border-background shadow-sm shrink-0 transition-colors duration-500 group-hover:border-liminal-secondary/20">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 sm:w-13 sm:h-13 object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-bold text-foreground text-base sm:text-[17px] tracking-tight transition-colors duration-500 group-hover:text-liminal-secondary">
                        {testimonial.name}
                      </h4>
                      <p className="text-[13px] text-foreground/50 group-hover:text-foreground/70 font-medium leading-[1.2] mt-0.5 transition-colors duration-500">
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

export default TestimonialSection;
