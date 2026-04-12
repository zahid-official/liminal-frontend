import SectionBadge from "@/components/shared/SectionBadge";
import Image from "next/image";
import ExperienceStats from "../clients/ExperienceStats";

// Experience Statistics Data
const statsData = [
  {
    id: "stat-1",
    value: "13+",
    title: "Years Experience",
    description: "Improving homes with expert craftsmanship for 13 years",
  },
  {
    id: "stat-2",
    value: "250+",
    title: "Projects Completed",
    description: "Over 250 successful projects delivered with quality and care",
  },
  {
    id: "stat-3",
    value: "30+",
    title: "Skilled Tradespeople",
    description: "Our dedicated team of 30+ experts ensures top-quality results",
  },
  {
    id: "stat-4",
    value: "100%",
    title: "Client Satisfaction",
    description: "All of our clients are satisfied with our work and service",
  },
];

// ExperienceSection Component
const ExperienceSection = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-20 md:py-28 lg:py-32 overflow-hidden bg-[url('/assets/bg-experience.png')] bg-top-left bg-no-repeat bg-zinc-50/80"
    >
      <div className="custom-container space-y-18 lg:space-y-24">
        {/* Top Content: Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Badge, Heading & Description */}
          <div className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <SectionBadge text="TRUSTED EXPERIENCE" />
            </div>

            {/* Heading */}
            <h2
              id="experience-heading"
              className="text-4xl sm:text-5xl leading-[1.1] tracking-tight"
            >
              Behind{" "}
              <span className="text-liminal-secondary font-medium">
                Every Statistic Pulses
              </span>{" "}
              A Human Story
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-sm md:text-[15px] leading-relaxed max-w-lg mx-auto lg:mx-0">
              We believe that every space tells a story. Founded in 2010 by
              visionary designer Antra, our journey began with a simple yet
              powerful mission: to transform ordinary spaces into extraordinary
              experiences.
            </p>
          </div>

          {/* Right: Image */}
          <div
            className="relative w-full aspect-[1.75]"
            style={{
              WebkitMaskImage: "url('/assets/experience-2.png')",
              WebkitMaskSize: "100% 100%",
              WebkitMaskPosition: "center center",
              WebkitMaskRepeat: "no-repeat",
              maskImage: "url('/assets/experience-2.png')",
              maskSize: "100% 100%",
              maskPosition: "center center",
              maskRepeat: "no-repeat",
            }}
          >
            <Image
              src="/assets/experience-1.png"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
              alt="Modern luxury interior living space with warm natural lighting"
            />
          </div>
        </div>

        {/* Bottom: Statistics Grid */}
        <ExperienceStats statsData={statsData} />
      </div>
    </section>
  );
};

export default ExperienceSection;
