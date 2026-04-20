import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import { Linkedin, Mail, Twitter } from "lucide-react";

// Team Data
const team = [
  {
    name: "Zahidul Islam",
    role: "Founder & Lead Designer",
    image: "/assets/member-1.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      mail: "mailto:zahid.official69@gmail.com",
    },
  },
  {
    name: "Michael Chen",
    role: "Interior Design Principal",
    image: "/assets/member-2.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      mail: "#",
    },
  },
  {
    name: "Alexander Wright",
    role: "Director of Architecture",
    image: "/assets/member-3.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      mail: "#",
    },
  },
  {
    name: "Julian Thorne",
    role: "Director of Operations",
    image: "/assets/member-4.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      mail: "#",
    },
  },
];

// TeamSection Component
const TeamSection = () => {
  return (
    <section
      id="our-team"
      aria-labelledby="team-heading"
      className="py-20 md:py-28 lg:py-32 overflow-hidden bg-zinc-50/80"
    >
      <div className="custom-container relative z-10 space-y-12">
        {/* Section Header */}
        <SectionHeader
          variant="centered"
          headingId="team-heading"
          badgeText="THE CREATIVE MINDS"
          title={
            <>
              Visionaries Behind{" "}
              <span className="text-liminal-secondary italic font-serif font-light underline underline-offset-8 decoration-1">
                Spatial Innovation
              </span>
            </>
          }
          description="Our multi-disciplinary team combines technical expertise with creative flair to deliver exceptional results for every client."
          className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both"
        />

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {team.map((member, index) => (
            <div key={index} className="group flex flex-col items-center">
              <div className="relative w-full aspect-3/4 rounded-2xl overflow-hidden mb-8 border border-border/40 shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0 scale-[1.01] will-change-transform backface-hidden transform-gpu"
                />

                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-end pb-12">
                  <div className="flex gap-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                    <a
                      href={member.socials.linkedin}
                      className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-liminal-secondary  hover:scale-110 transition-all duration-300"
                    >
                      <Linkedin size={18} strokeWidth={1.5} />
                    </a>
                    <a
                      href={member.socials.twitter}
                      className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-liminal-secondary  hover:scale-110 transition-all duration-300"
                    >
                      <Twitter size={18} strokeWidth={1.5} />
                    </a>
                    <a
                      href={member.socials.mail}
                      className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-liminal-secondary  hover:scale-110 transition-all duration-300"
                    >
                      <Mail size={18} strokeWidth={1.5} />
                    </a>
                  </div>
                </div>

                {/* Blueprint Corners */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              <div className="text-center space-y-2">
                <h4 className="text-2xl font-bold font-heading transition-colors duration-500 group-hover:text-liminal-secondary">
                  {member.name}
                </h4>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-liminal-secondary/40" />
                  <p className="text-muted-foreground text-[10px] uppercase tracking-[0.25em] font-bold">
                    {member.role}
                  </p>
                  <div className="w-1 h-1 rounded-full bg-liminal-secondary/40" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
