import { IProject } from "./projectsData";
import ProjectCard from "./ProjectCard";
import { FolderSearch } from "lucide-react";

// ProjectsGrid Props
interface ProjectsGridProps {
  projects: IProject[];
}

// ProjectsGrid Component
const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  // Empty State
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-20 h-20 rounded-full bg-zinc-100 flex items-center justify-center mb-6">
          <FolderSearch className="size-8 text-muted-foreground/40" />
        </div>
        <h3 className="text-xl font-bold font-heading tracking-tight mb-2">
          No Projects Found
        </h3>
        <p className="text-muted-foreground font-light text-[15px] max-w-md">
          No projects match your current filters. Try adjusting your search
          criteria or clearing the filters to explore our full portfolio.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
