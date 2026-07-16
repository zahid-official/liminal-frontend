import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";
import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Team Members Data
const teamMembers = [
  {
    name: "Zahidul Islam",
    role: "Founder & Principal Architect",
    image: "/assets/about-us/team-1.png",
    quote:
      "Architecture is frozen music and I aspire to compose symphonies in space.",
    linkedin: "#",
    email: "zahid@liminal.com",
    specialization: "Spatial Design & Vision",
  },
  {
    name: "Kai Nakamura",
    role: "Creative Director",
    image: "/assets/about-us/team-2.png",
    quote:
      "True creativity lies in the tension between constraint and expression.",
    linkedin: "#",
    email: "kai@liminal.com",
    specialization: "Material Curation",
  },
  {
    name: "James Whitfield",
    role: "Lead Architect",
    image: "/assets/about-us/team-3.png",
    quote:
      "Great design is invisible, it's the feeling of belonging in a space.",
    linkedin: "#",
    email: "james@liminal.com",
    specialization: "Technical Excellence",
  },
  {
    name: "Marco Venturi",
    role: "Strategic Operations Director",
    image: "/assets/about-us/team-4.png",
    quote:
      "Operational precision is the foundation upon which creative freedom is built.",
    linkedin: "#",
    email: "marco@liminal.com",
    specialization: "Project Strategy",
  },
];

// AboutTeam Component
const AboutTeam = () => {
  return (
    <section
      id="team-section"
      aria-labelledby="team-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80"
    >
      <div className="custom-container relative z-10">
        <SectionHeader
          variant="split"
          badgeText="Our Team"
          headingId="team-heading"
          title={
            <>
              The Creative Minds{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Behind Liminal
              </span>
            </>
          }
          description="A collective of visionary architects, designers and strategists united by a singular passion, creating spaces that transcend the ordinary."
          className="mb-14"
        />

        {/* Staggered Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={cn("group relative", index % 2 !== 0 && "lg:mt-12")}
            >
              {/* Image Container */}
              <div className="relative aspect-3/4 overflow-hidden bg-muted isolate rounded">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role} at Liminal`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 transform-gpu will-change-transform backface-hidden"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-700 transform-gpu will-change-transform backface-hidden">
                    {/* Quote */}
                    <p className="text-background/80 text-sm  font-light leading-relaxed mb-4">
                      &ldquo;{member.quote}&rdquo;
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center justify-between gap-4">
                      <Link
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 text-background/60 hover:text-background transition-colors duration-300"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                          Email
                        </span>
                      </Link>

                      <Link
                        href={member.linkedin}
                        className="inline-flex items-center gap-2 text-background/60 hover:text-background transition-colors duration-300"
                        aria-label={`${member.name} LinkedIn profile`}
                      >
                        <Linkedin size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                          LinkedIn
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Top-right Reference Number */}
                <div className="absolute top-4 right-4 text-xs font-mono text-background/50 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Team_{String(index + 1).padStart(2, "0")}
                </div>

                {/* Animated Top Border */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-liminal-secondary group-hover:w-full transition-all duration-700 ease-out" />
              </div>

              {/* Info Area */}
              <div className="pt-5 pb-2 space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-px bg-liminal-secondary/50 group-hover:w-8 transition-all duration-500" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-liminal-secondary">
                    {member.specialization}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-heading tracking-tight">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm font-light">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
