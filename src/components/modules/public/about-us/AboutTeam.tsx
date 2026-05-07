import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";

// Team members data
const founder = {
  name: "Zahid Hasan",
  role: "Founder & Lead Architect",
  image: "/assets/about-us/team-1.png",
  quote:
    "Design is the silent language between a space and its inhabitant. Our job is to make that conversation beautiful.",
};

const teamMembers = [
  {
    name: "Sara Ahmed",
    role: "Senior Interior Designer",
    image: "/assets/about-us/team-2.png",
  },
  {
    name: "Rafiq Islam",
    role: "Project Architect",
    image: "/assets/about-us/team-3.png",
  },
  {
    name: "Nadia Karim",
    role: "Material Specialist",
    image: "/assets/about-us/team-4.png",
  },
];

// AboutTeam Component — Featured Founder + Team Grid
const AboutTeam = () => {
  return (
    <section
      id="about-team"
      aria-labelledby="team-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      {/* Faint Background Texture */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/about-us/team-bg.png"
          alt=""
          fill
          className="object-cover opacity-[0.03]"
          aria-hidden="true"
        />
      </div>

      <div className="custom-container relative z-10">
        {/* Section Header */}
        <SectionHeader
          variant="editorial"
          badgeText="Our Team"
          headingId="team-heading"
          title={
            <>
              The Minds Behind{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Every Detail
              </span>
            </>
          }
          description="A collective of architects, designers, and specialists united by a shared obsession with craft, precision, and the transformative power of space."
        />

        {/* Founder Feature Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-12 lg:mb-16 max-w-5xl">
          {/* Founder Image */}
          <div className="lg:col-span-5 relative group overflow-hidden">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
              <Image
                src={founder.image}
                alt={`${founder.name} — ${founder.role}`}
                fill
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105 will-change-transform"
              />
              {/* Subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>

          {/* Founder Details */}
          <div className="lg:col-span-7 bg-[#141f0a] text-white flex flex-col justify-center p-8 sm:p-10 lg:p-14 xl:p-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-white/30" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40">
                  Founder
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight">
                  {founder.name}
                </h3>
                <p className="text-white/50 text-sm font-light tracking-wide">
                  {founder.role}
                </p>
              </div>

              <blockquote className="relative pl-6 border-l border-white/20">
                <p className="text-lg sm:text-xl font-serif italic text-white/80 leading-relaxed">
                  &ldquo;{founder.quote}&rdquo;
                </p>
              </blockquote>

              {/* Founder Stats */}
              <div className="flex gap-10 pt-6 border-t border-white/10">
                {[
                  { value: "10+", label: "Years Experience" },
                  { value: "50+", label: "Projects Led" },
                  { value: "12", label: "Awards Won" },
                ].map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <span className="text-xl sm:text-2xl font-bold font-heading">
                      {stat.value}
                    </span>
                    <p className="text-[9px] font-mono tracking-[0.2em] text-white/40 uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-5xl">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group relative border border-border/40 bg-white overflow-hidden transition-all duration-500 hover:border-liminal-secondary/30 hover:shadow-lg hover:shadow-liminal-secondary/5"
            >
              {/* Member Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105 will-change-transform"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Member Details */}
              <div className="p-6 space-y-1">
                <h4 className="text-lg font-bold font-heading tracking-tight">
                  {member.name}
                </h4>
                <p className="text-sm text-muted-foreground font-light">
                  {member.role}
                </p>
              </div>

              {/* Animated top border on hover */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-liminal-secondary group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
