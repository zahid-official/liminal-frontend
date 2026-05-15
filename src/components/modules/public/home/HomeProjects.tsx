import AnimatedButton from "@/components/shared/AnimatedButton";
import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import Link from "next/link";

// Featured projects data
const projects = [
  {
    id: "LM-047",
    title: "The Meridian Residence",
    category: "Residential",
    location: "Gulshan, Dhaka",
    year: "2024",
    image: "/assets/projects/premium-villa.png",
    description:
      "A 4,200 sq ft residence where travertine meets walnut wood — sculpted around the rituals of a modern family.",
  },
  {
    id: "LM-052",
    title: "Zenith Corporate Tower",
    category: "Commercial",
    location: "Banani, Dhaka",
    year: "2025",
    image: "/assets/projects/premium-office.png",
    description:
      "Executive workspace designed to embody corporate precision while nurturing creative ambition.",
  },
  {
    id: "LM-061",
    title: "The Sanctuary Penthouse",
    category: "Residential",
    location: "Baridhara, Dhaka",
    year: "2025",
    image: "/assets/projects/penthouse.png",
    description:
      "A rooftop retreat where panoramic views and material intimacy converge in a dialogue of luxury.",
  },
];

// HomeProjects Component
const HomeProjects = () => {
  return (
    <section
      id="featured-projects"
      aria-labelledby="featured-projects-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80"
    >
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          variant="split"
          headingId="featured-projects-heading"
          badgeText="Selected Work"
          title={
            <>
              Projects That{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Define
              </span>{" "}
              Our Craft
            </>
          }
          description="A curated selection of spaces where architectural precision meets human intuition — each project a testament to our philosophy of purposeful design."
        />

        {/* Hero Project — Full Width */}
        <div className="group relative aspect-[16/7] md:aspect-[21/9] overflow-hidden rounded-sm mb-8">
          <Image
            src={projects[0].image}
            alt={`${projects[0].title} — ${projects[0].category} project by Liminal`}
            fill
            sizes="100vw"
            quality={90}
            className="object-cover transition-transform duration-[1200ms] group-hover:scale-105 will-change-transform transform-gpu"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/15 to-transparent" />

          {/* Technical ID */}
          <div className="absolute top-6 left-6 z-10">
            <span className="text-[9px] font-mono tracking-[0.4em] text-background/40 uppercase">
              {projects[0].id}
            </span>
          </div>

          {/* Project Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14 z-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-px bg-liminal-secondary" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-liminal-secondary">
                    {projects[0].category}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-background tracking-tight leading-tight">
                  {projects[0].title}
                </h3>
                <p className="text-background/40 font-light text-sm md:text-base mt-3 max-w-lg">
                  {projects[0].description}
                </p>
              </div>
              <div className="flex items-center gap-6 text-[10px] font-mono uppercase tracking-[0.25em] text-background/35 shrink-0">
                <span>{projects[0].location}</span>
                <div className="w-px h-3 bg-background/20" />
                <span>{projects[0].year}</span>
              </div>
            </div>
          </div>

          {/* Corner brackets */}
          <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-background/15 group-hover:border-background/30 transition-colors duration-500" />
        </div>

        {/* Two Project Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(1).map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm"
            >
              <Image
                src={project.image}
                alt={`${project.title} — ${project.category} project by Liminal`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105 will-change-transform transform-gpu"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-700" />

              {/* Technical ID */}
              <div className="absolute top-5 left-5 z-10">
                <span className="text-[9px] font-mono tracking-[0.4em] text-background/40 uppercase">
                  {project.id}
                </span>
              </div>

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-px bg-liminal-secondary" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-liminal-secondary">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-background tracking-tight">
                  {project.title}
                </h3>
                <p className="text-background/35 font-light text-sm mt-2 max-w-sm">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 mt-3 text-[10px] font-mono uppercase tracking-[0.25em] text-background/30">
                  <span>{project.location}</span>
                  <div className="w-px h-3 bg-background/15" />
                  <span>{project.year}</span>
                </div>
              </div>

              {/* Corner bracket */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-background/15 group-hover:border-background/30 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-14">
          <Link href="/projects">
            <AnimatedButton>View All Projects</AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
