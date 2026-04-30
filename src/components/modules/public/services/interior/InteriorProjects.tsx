import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import AnimatedButton from "@/components/shared/AnimatedButton";

const projectsData = [
  {
    id: 1,
    title: "The Minimalist Sanctuary",
    category: "RESIDENTIAL",
    location: "Gulshan, Dhaka",
    image: "/assets/prj-1.png",
  },
  {
    id: 2,
    title: "Urban Loft Concept",
    category: "COMMERCIAL",
    location: "Banani, Dhaka",
    image: "/assets/prj-2.png",
  },
  {
    id: 3,
    title: "The Apex Residence",
    category: "RESIDENTIAL",
    location: "Baridhara Diplomatic Zone",
    image: "/assets/projects/villa.png",
  },
  {
    id: 4,
    title: "Luminous Glass House",
    category: "RESIDENTIAL",
    location: "Uttara, Dhaka",
    image: "/assets/prj-4.png",
  },
  {
    id: 5,
    title: "Corporate Zen HQ",
    category: "COMMERCIAL",
    location: "Motijheel, Dhaka",
    image: "/assets/projects/retail.png",
  },
  {
    id: 6,
    title: "The Grand Villa",
    category: "RESIDENTIAL",
    location: "Bashundhara, Dhaka",
    image: "/assets/projects/premium-villa.png",
  },
];

const InteriorProjects = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-[#141f0a] text-white overflow-hidden">
      <div className="custom-container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-16">
          <SectionHeader
            badgeText="Featured Work"
            badgeClassName="text-white"
            title={
              <>
                Architectural <br />
                <span className="italic font-serif font-light">
                  Chronicles
                </span>
              </>
            }
            description="A precise documentation of our spatial interventions. Each entry represents a unique intersection of architectural rigor and interior narrative, chronicling the evolution from vision to structural reality."
            variant="inline"
            className="lg:mb-0"
          />
          <div className="hidden lg:block pb-4">
            <AnimatedButton className="border-white/20 hover:border-white/40 [&_span.text-foreground]:text-white/90">
              Explore Portfolio
            </AnimatedButton>
          </div>
        </div>

        {/* Projects Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group relative border border-white/50 p-1 hover:border-white/80 transition-colors duration-500"
            >
              {/* Technical Numbering */}
              <div className="absolute top-4 right-4 text-5xl font-black text-white/10 group-hover:text-white/50 transition-all duration-700 font-heading select-none pointer-events-none z-10">
                {String(project.id).padStart(2, "0")}
              </div>

              {/* Project Card */}
              <div className="relative aspect-4/5 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Overlay with technical specs */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
                  <div className="space-y-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold uppercase">
                        {project.title}
                      </span>
                      <div className="h-px flex-1 bg-white/20" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-white/50 uppercase">
                          Context
                        </span>
                        <p className="text-[11px] font-bold uppercase">
                          {project.location}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-white/50 uppercase">
                          Typology
                        </span>
                        <p className="text-[11px] font-bold uppercase">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Border Reveal on Hover */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full" />
              <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-16 lg:hidden flex justify-center">
          <AnimatedButton className="border-white/20 hover:border-white/40 [&_span.text-foreground]:text-white/90">
            Explore Portfolio
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default InteriorProjects;
