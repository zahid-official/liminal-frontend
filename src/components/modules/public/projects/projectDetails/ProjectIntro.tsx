import SectionHeader from "@/components/shared/SectionHeader";
import type { IProject } from "../projectsData";
import { Fragment } from "react";

// ProjectIntro Props
interface ProjectIntroProps {
  project: IProject;
}

// ProjectIntro Component
const ProjectIntro = ({ project }: ProjectIntroProps) => {
  const metaItems = [
    { label: "Category", value: project.category },
    { label: "Location", value: project.location },
    { label: "Area", value: project.area },
    { label: "Duration", value: project.duration },
    { label: "Completed", value: project.completionYear },
  ];

  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Giant Background Letter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[36rem] font-heading font-bold text-liminal-secondary/4 select-none pointer-events-none leading-none">
        {project.title.charAt(0)}
      </div>

      <div className="max-lg:custom-container relative z-10 space-y-10">
        {/* Section Header */}
        <SectionHeader
          variant="manifesto"
          badgeText={project.projectType}
          headingId="project-intro-heading"
          title={<span className="uppercase">{project.title}</span>}
          description={project.description}
        />

        {/* Metadata Fields */}
        <div className="border-y border-border/25 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {metaItems.map((item, i) => (
              <Fragment key={item.label}>
                {i > 0 && (
                  <div className="hidden sm:block w-px h-10 bg-border/40" />
                )}
                <div className="space-y-1.5 text-center">
                  <span className="text-[9px] font-semibold font-mono uppercase tracking-[0.3em] text-muted-foreground/60 block">
                    {item.label}
                  </span>
                  <p className="text-[13px] font-bold uppercase tracking-wide text-foreground">
                    {item.value}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;
