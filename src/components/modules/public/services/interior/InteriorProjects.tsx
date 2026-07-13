import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedButton from "@/components/shared/AnimatedButton";
import { projects } from "@/components/modules/public/projects/projectsData";
import ProjectCard from "@/components/modules/public/projects/ProjectCard";

// InteriorProjects Component
const InteriorProjects = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-liminal-dark text-background overflow-hidden">
      {/* Subtle Blueprint Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-size-[32px_32px]" />
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          badgeText="Featured Work"
          badgeClassName="text-background"
          title={
            <>
              Architectural <br />
              <span className="italic font-serif font-light">Chronicles</span>
            </>
          }
          description="A documentation of our spatial interventions, chronicling the evolution of each space from vision to reality."
          variant="split"
          className="mb-12"
          descriptionClassName="text-right"
        >
          <div className="hidden lg:flex w-full justify-end">
            <AnimatedButton className="border-background/20 hover:border-background/40 [&_span.text-foreground]:text-background/90">
              Explore Portfolio
            </AnimatedButton>
          </div>
        </SectionHeader>

        {/* Projects Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-16 lg:hidden flex justify-center">
          <AnimatedButton className="border-background/20 hover:border-background/40 [&_span.text-foreground]:text-background/90">
            Explore Portfolio
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default InteriorProjects;
