import AnimatedButton from "@/components/shared/AnimatedButton";
import SectionBadge from "@/components/shared/SectionBadge";
import Image from "next/image";

// Project Data
const projects = [
  {
    id: 1,
    title: "Industrial Elegance\nCondo",
    category: "RESIDENTIAL",
    location: "Berlin, Germany",
    year: "2025",
    image: "/assets/project-1.jpg",
  },
  {
    id: 2,
    title: "Minimalist Loft\nDesign",
    category: "COMMERCIAL",
    location: "New York, USA",
    year: "2024",
    image: "/assets/project-1.jpg",
  },
  {
    id: 3,
    title: "Modern Villa\nInterior",
    category: "RESIDENTIAL",
    location: "Dubai, UAE",
    year: "2025",
    image: "/assets/project-1.jpg",
  },
  {
    id: 4,
    title: "Boutique Hotel\nLobby",
    category: "HOSPITALITY",
    location: "Paris, France",
    year: "2023",
    image: "/assets/project-1.jpg",
  },
  {
    id: 5,
    title: "Luxury Penthouse\nSuite",
    category: "RESIDENTIAL",
    location: "London, UK",
    year: "2024",
    image: "/assets/project-1.jpg",
  },
];

// ProjectSection Component
const ProjectSection = () => {
  return (
    <section className="relative bg-[#141f0a]">
      {/* Decorative Geometric Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Left Circle */}
        <div className="absolute top-1/4 -translate-y-1/4 -left-[30%] w-[70vw] min-w-150 aspect-square rounded-full bg-white/3"></div>
        {/* Small Top-Right Circle */}
        <div className="absolute -top-[10%] -right-[5%] w-[33vw] min-w-75 aspect-square rounded-full bg-white/3"></div>
      </div>

      <div className="custom-container relative z-10 py-20 md:py-28 lg:py-32 bg-[url('/assets/bg-project.png')] bg-no-repeat bg-bottom-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-between gap-12 lg:sticky lg:top-52 lg:h-[65vh] lg:self-start">
            {/* Top Text Content */}
            <div className="flex flex-col items-start gap-6 lg:gap-8">
              {/* Badge */}
              <SectionBadge
                text="FEATURED PROJECTS"
                className="border-white/15 [&>span:last-child]:text-white/90"
              />

              {/* Heading */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Creative{" "}
                <span className="font-medium">Projects That Define</span> Our
                Style
              </h2>

              {/* Description */}
              <p className="text-white/70 text-[15px] sm:text-base leading-relaxed max-w-xl">
                Our portfolio showcases a diverse range of projects, from
                beautifully crafted residential spaces functional and stylish
                commercial interiors
              </p>
            </div>

            {/* Action Button */}
            <div className="">
              <AnimatedButton className="border-white/20 hover:border-white/40 [&_span.text-foreground]:text-white/90">
                Explore Project
              </AnimatedButton>
            </div>
          </div>

          {/* Right Content: Images List */}
          <div className="flex flex-col gap-8 md:gap-16 pb-8 lg:pb-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group sticky w-full aspect-4/3 md:aspect-16/10 lg:aspect-4/3 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg border border-white/5"
                style={{ top: `calc(130px + ${index * 80}px)` }}
              >
                {/* Background Image */}
                <Image
                  src={project.image}
                  alt={project.title.replace("\n", " ")}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform rounded-2xl md:rounded-[2rem] duration-700 group-hover:scale-105"
                />

                {/* Image Gradient Overlay - Crucial for text readability */}
                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent pointer-events-none transition-opacity duration-500"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 lg:p-10 pointer-events-none z-10">
                  {/* Top Bar: Badge and Index */}
                  <div className="flex justify-between items-center w-full">
                    <div className="px-3.5 md:px-4 py-1.5 rounded-full border border-white/30 backdrop-blur-sm bg-black/20 text-white leading-none text-xs font-bold tracking-widest uppercase">
                      {project.category}
                    </div>

                    <div className="text-white/70 text-3xl md:text-4xl font-bold leading-none tracking-tight">
                      {String(project.id).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Bottom Text Block with Smooth Parallax-like Reveal */}
                  <div className="pt-8 overflow-hidden">
                    <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 transform transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] translate-y-12 md:translate-y-13 group-hover:translate-y-0">
                      <h3 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-[1.1] tracking-tight whitespace-pre-line">
                        {project.title}
                      </h3>
                      <div className="flex flex-col text-white/80 text-xs md:text-sm font-medium leading-relaxed opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:opacity-100">
                        <span>{project.location}</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
