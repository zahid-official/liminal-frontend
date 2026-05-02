import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

const expertise = [
  {
    title: "Architectural Design",
    description: "Conceptualizing spaces that redefine the relationship between form and function.",
  },
  {
    title: "Interior Curation",
    description: "Selecting materials and furniture that create a cohesive and premium atmosphere.",
  },
  {
    title: "Project Management",
    description: "Ensuring every detail is executed with precision and architectural rigor.",
  },
  {
    title: "Sustainable Solutions",
    description: "Integrating environmentally conscious practices into our high-end designs.",
  },
];

const ProjectTeam = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-zinc-50/80 text-black overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image Container */}
          <div className="relative aspect-square lg:aspect-4/5 overflow-hidden group">
            <Image
              src="/assets/projects/bg-project-premium.png" // Using the image from the header
              alt="Professional Team"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
            />
            <div className="absolute inset-0 border-20px border-white/10" />

            {/* Technical Stamp */}
            <div className="absolute bottom-10 right-10 bg-black text-white p-6 md:p-8 flex flex-col gap-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em]">
                Liminal Std.
              </span>
              <span className="text-xl font-bold uppercase tracking-tighter italic font-serif">
                Expertise
              </span>
            </div>
          </div>

          {/* Right: Content Container */}
          <div className="space-y-12">
            <SectionHeader
              badgeText="The Collective"
              title={
                <>
                  Driven by <br className="max-lg:hidden" />
                  <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                    Expert Minds
                  </span>
                </>
              }
              description="Our team consists of industry veterans and creative visionaries who bring a wealth of experience to every project. We focus on delivering premium experiences through collaborative architectural excellence."
              variant="inline"
              className="mb-0"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {expertise.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-black/40">
                      0{index + 1}
                    </span>
                    <div className="h-px flex-1 bg-black/10" />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wider">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTeam;
