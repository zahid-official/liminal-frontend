import SectionHeader from "@/components/shared/SectionHeader";
import ProjectCard from "../ProjectCard";
import { getRelatedProjects } from "../projectsData";
import type { IProject } from "../projectsData";

// ProjectRelated Props
interface ProjectRelatedProps {
  project: IProject;
}

// ProjectRelated Component
const ProjectRelated = ({ project }: ProjectRelatedProps) => {
  const related = getRelatedProjects(project.slug, 3);

  if (related.length === 0) return null;

  return (
    <section
      id="related-projects"
      aria-labelledby="related-heading"
      className="py-20 md:py-28 lg:py-32 bg-zinc-50 relative overflow-hidden"
    >
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          variant="manifesto"
          badgeText="Explore More"
          headingId="related-heading"
          title={
            <>
              Continue{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Exploring
              </span>
            </>
          }
          description="Discover more from our portfolio - related projects that showcase the breadth and depth of our design practice."
          className="mb-14 lg:mb-20"
        />

        {/* Related Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {related.map((relatedProject) => (
            <ProjectCard key={relatedProject.id} project={relatedProject} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectRelated;
