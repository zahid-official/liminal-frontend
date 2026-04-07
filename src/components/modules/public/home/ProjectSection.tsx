import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Projects Data
const projectsData = [
  {
    id: "01",
    title: "Elegance Condo",
    location: "Germany",
    year: "2025",
    category: "INTERIOR",
    image: "/assets/about-1.webp",
  },
  {
    id: "02",
    title: "Serene Space Studio",
    location: "Germany",
    year: "2025",
    category: "RESIDENTIAL",
    image: "/assets/about-2.webp",
  },
  {
    id: "03",
    title: "Urban Zen Apartment",
    location: "Berlin, Germany",
    year: "2025",
    category: "LANDSCAPE",
    image: "/assets/about-1.webp",
  },
  {
    id: "04",
    title: "Art Deco Revival",
    location: "Berlin, Germany",
    year: "2025",
    category: "SINGLE HOME",
    image: "/assets/about-2.webp",
  },
  {
    id: "05",
    title: "Golden Ratio Residence",
    location: "Berlin, Germany",
    year: "2025",
    category: "SINGLE HOME",
    image: "/assets/about-1.webp",
  },
  {
    id: "06",
    title: "Art Deco Revival",
    location: "Berlin, Germany",
    year: "2025",
    category: "SINGLE HOME",
    image: "/assets/about-2.webp",
  },
];

// ProjectSection Component
const ProjectSection = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 md:py-28 lg:py-32 overflow-hidden bg-[url('/assets/bg-project.png')] bg-cover bg-center bg-no-repeat dark:bg-background relative"
    >
      {/* Background Overlay (optional for ensuring text readability) */}
      <div className="absolute inset-0 bg-white/40 dark:bg-black/40 z-0 pointer-events-none" />

      {/* Header */}
      <div className="custom-container relative z-10">
        <SectionHeader
          badgeText="OUR PROJECTS"
          headingId="projects-heading"
          title={
            <>
              Creative <span className="text-liminal-secondary font-medium">Projects That</span>
              <br className="hidden sm:block" />{" "}
              <span className="text-liminal-secondary font-medium">Define</span> Our Style
            </>
          }
          description="Our portfolio showcases a diverse range of projects, from beautifully crafted residential spaces functional and stylish commercial interiors"
        />
      </div>

      {/* Projects Carousel */}
      <div className="w-full lg:mt-30 relative z-10 pb-12 cursor-grab active:cursor-grabbing px-4 sm:px-6 lg:px-8 2xl:px-12">
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 sm:-ml-6 md:-ml-8">
            {projectsData.map((project, index) => {
              // Creating alternating visual sizes naturally (odd index is taller like in screenshot "02"=tall, "03"=short)
              const isTall = index % 2 !== 0;

              return (
                <CarouselItem
                  key={project.id}
                  className="pl-4 sm:pl-6 md:pl-8 basis-[70%] sm:basis-[60%] md:basis-[48%] lg:basis-[38%] xl:basis-[32%] 2xl:basis-[23%]"
                >
                  <div className="relative flex flex-col group h-full items-start">
                    {/* Image Container with alternating aspect ratios */}
                    <div
                      className={cn(
                        "relative w-full rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden mb-5 shadow-sm aspect-square",
                        isTall ? "lg:aspect-3/4" : "lg:aspect-[1/1.1]",
                      )}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 420px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Badge Overlay */}
                      <div className="absolute top-5 left-5 lg:top-6 lg:left-6 z-10">
                        <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/20 bg-black/30 dark:bg-black/40 backdrop-blur-md text-white text-[10px] md:text-xs font-semibold tracking-wider uppercase shadow-md drop-shadow-sm">
                          {project.category}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="px-1 group-hover:translate-x-1 transition-transform duration-300">
                      <h3 className="text-xl md:text-2xl font-bold mb-1.5 md:mb-2 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="text-muted-foreground text-[11px] md:text-xs uppercase tracking-wider space-y-0.5 md:space-y-1">
                        <p>{project.location}</p>
                        <p>{project.year}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectSection;
