import Image from "next/image";

// Team Members Data
const team = [
  {
    name: "Arif Rahman",
    role: "Founder & Creative Director",
    tagline: "Visionary spatial storyteller with 15+ years of experience",
    image: "/assets/about-us/team-1.png",
    featured: true,
  },
  {
    name: "Nadia Sultana",
    role: "Lead Interior Architect",
    tagline: "Precision-driven design with a soul for material truth",
    image: "/assets/about-us/team-2.png",
    featured: false,
  },
  {
    name: "Kamal Hossain",
    role: "Senior Design Strategist",
    tagline: "Bridging client vision with architectural possibility",
    image: "/assets/about-us/team-3.png",
    featured: false,
  },
  {
    name: "Fatima Chen",
    role: "Project Director",
    tagline: "Orchestrating flawless execution from concept to reveal",
    image: "/assets/about-us/team-4.png",
    featured: false,
  },
];

// AboutTeam Component — Magazine-Style Asymmetric Grid
const AboutTeam = () => {
  return (
    <section
      id="about-team"
      aria-labelledby="team-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80"
    >
      <div className="custom-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 lg:mb-24">
          <div className="space-y-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-px bg-liminal-secondary shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-liminal-secondary">
                The Collective
              </span>
            </div>

            <h2
              id="team-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-[1.05]"
            >
              Meet the{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Minds
              </span>
              <br className="hidden sm:block" /> Behind the Craft
            </h2>
          </div>

          <p className="max-w-md text-muted-foreground leading-relaxed font-light lg:text-right">
            A carefully assembled team of architects, designers, and craftspeople
            who share a singular obsession with spatial excellence.
          </p>
        </div>

        {/* Asymmetric Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Featured Member — Larger Card */}
          <div className="md:col-span-7 group relative overflow-hidden cursor-pointer">
            <div className="relative aspect-[4/3] md:aspect-[3/4] overflow-hidden will-change-transform">
              <Image
                src={team[0].image}
                alt={team[0].name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105 will-change-transform transform-gpu"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold block">
                    {team[0].role}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold font-heading text-white tracking-tight">
                    {team[0].name}
                  </h3>
                  <p className="text-white/60 text-sm font-light max-w-md">
                    {team[0].tagline}
                  </p>
                </div>
              </div>

              {/* Corner marker */}
              <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-white/20" />
            </div>
          </div>

          {/* Other 3 Members — Stacked on Right */}
          <div className="md:col-span-5 grid grid-cols-1 gap-6 md:gap-8">
            {team.slice(1).map((member, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden cursor-pointer"
              >
                <div className="relative aspect-[16/9] overflow-hidden will-change-transform">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105 will-change-transform transform-gpu"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <div className="flex items-end justify-between gap-4">
                      <div className="space-y-0.5">
                        <h3 className="text-lg md:text-xl font-bold font-heading text-white tracking-tight">
                          {member.name}
                        </h3>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold block">
                          {member.role}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-white/20 tracking-widest">
                        0{idx + 2}
                      </span>
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

export default AboutTeam;
