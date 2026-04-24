import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import AnimatedButton from "@/components/shared/AnimatedButton";

const interiorProjects = [
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
    title: "Signature Penthouse",
    category: "RESIDENTIAL",
    location: "Baridhara, Dhaka",
    image: "/assets/prj-3.png",
  },
];

const InteriorProjects = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-[#141f0a] text-white overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20 lg:mb-32">
          <SectionHeader
            badgeText="Featured Work"
            badgeClassName="text-white"
            title={
              <span className="text-white">
                Interior <br />
                <span className="italic font-serif font-light">Masterpieces</span>
              </span>
            }
            description={
              <span className="text-white/75">
                A curated selection of our most prestigious interior transformations, 
                where architectural vision meets unparalleled craftsmanship.
              </span>
            }
            variant="inline"
            className="lg:mb-0"
          />
          <div className="hidden lg:block pb-4">
            <AnimatedButton className="border-white/20 hover:border-white/40 [&_span.text-foreground]:text-white/90">
              View All Projects
            </AnimatedButton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {interiorProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative flex flex-col gap-6"
            >
              {/* Image Container */}
              <div className="relative aspect-3/4 overflow-hidden rounded-sm">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                />
                
                {/* Overlay with technical specs */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
                  <div className="space-y-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono tracking-[0.2em] font-bold uppercase">PRJ_DATA</span>
                      <div className="h-px flex-1 bg-white/20" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-white/50 uppercase">Location</span>
                        <p className="text-[11px] font-bold uppercase">{project.location}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-white/50 uppercase">Category</span>
                        <p className="text-[11px] font-bold uppercase">{project.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-mono tracking-[0.3em]">
                    0{index + 1}
                  </span>
                  <div className="h-px w-12 bg-white/80" />
                </div>
                <h3 className="text-xl font-bold font-heading tracking-tight transition-colors duration-500">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-16 lg:hidden flex justify-center">
          <AnimatedButton className="border-white/20 hover:border-white/40 [&_span.text-foreground]:text-white/90">
            View All Projects
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default InteriorProjects;
