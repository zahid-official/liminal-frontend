import SectionHeader from "@/components/shared/SectionHeader";
import SectionFooter from "@/components/shared/SectionFooter";
import DetailNavigation from "@/components/shared/DetailNavigation";
import { getPrevNextProjects } from "../projectsData";
import type { IProject } from "../projectsData";

// ProjectOverview Props
interface ProjectOverviewProps {
  project: IProject;
}

// ProjectOverview Component
const ProjectOverview = ({ project }: ProjectOverviewProps) => {
  const narrativeItems = project?.narratives
    ? [
        {
          title: "Project Context",
          content: project.narratives.projectContext,
        },
        { title: "Client Vision", content: project.narratives.clientVision },
        {
          title: "Design Objectives",
          content: project.narratives.designObjectives,
        },
        {
          title: "Spatial Challenges",
          content: project.narratives.spatialChallenges,
        },
        {
          title: "Overall Concept",
          content: project.narratives.overallConcept,
        },
        {
          title: "The Realization",
          content: project.narratives.theRealization,
        },
      ].filter((item) => item.content)
    : [];

  const { prev, next } = getPrevNextProjects(project.slug);

  return (
    <section
      id="project-overview"
      aria-labelledby="overview-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80"
    >
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          variant="split"
          badgeText="Project Overview"
          headingId="overview-heading"
          title={
            <>
              Design{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Narrative
              </span>
            </>
          }
          // description="A comprehensive look at the client's vision, spatial challenges and the conceptual resolution that defined this project."
          className="mb-12"
        />

        {/* Project Narratives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-20">
          {narrativeItems?.map(({ title, content }, index) => {
            return (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono font-bold text-liminal-secondary/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-border/40" />
                </div>
                <h3 className="text-lg font-bold font-heading tracking-tight">
                  {title}
                </h3>
                <p className="text-muted-foreground font-light text-[15px] leading-relaxed">
                  {content}
                </p>
              </div>
            );
          })}
        </div>

        {/* Section Footer */}
        <SectionFooter label="End of Project" />

        {/* Project Navigation */}
        <DetailNavigation
          prev={
            prev
              ? {
                  href: `/projects/${prev.slug}`,
                  title: prev.title,
                  image: prev.thumbnail,
                  category: prev.category,
                  metaText: prev.completionYear,
                }
              : null
          }
          next={
            next
              ? {
                  href: `/projects/${next.slug}`,
                  title: next.title,
                  image: next.thumbnail,
                  category: next.category,
                  metaText: next.completionYear,
                }
              : null
          }
          prevLabel="Previous Project"
          nextLabel="Next Project"
          headingLabel="Continue Exploring"
          className="mt-16 md:mt-24"
        />
      </div>
    </section>
  );
};

export default ProjectOverview;
