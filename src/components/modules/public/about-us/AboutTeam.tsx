import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import { Linkedin, Mail, Twitter } from "lucide-react";

// Team Data
const team = [
  {
    name: "Zahidul Islam",
    role: "Founder & Lead Designer",
    image: "/assets/team-1.png", // Assuming these images will be added
    socials: {
      linkedin: "#",
      twitter: "#",
      mail: "mailto:zahid.official69@gmail.com",
    },
  },
  {
    name: "Sarah Jenkins",
    role: "Senior Architect",
    image: "/assets/team-2.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      mail: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "Interior Stylist",
    image: "/assets/team-3.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      mail: "#",
    },
  },
  {
    name: "Emma Rodriguez",
    role: "Project Manager",
    image: "/assets/team-4.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      mail: "#",
    },
  },
];

const AboutTeam = () => {
  return (
    <div className="space-y-16">
      <SectionHeader
        badgeText="THE CREATIVE MINDS"
        title={
          <>
            Meet the Visionaries <br />
            Behind <span className="text-liminal-secondary">Liminal</span>
          </>
        }
        description="Our multi-disciplinary team combines technical expertise with creative flair to deliver exceptional results for every client."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {team.map((member, index) => (
          <div key={index} className="group flex flex-col items-center">
            <div className="relative w-full aspect-3/4 rounded-2xl overflow-hidden mb-8 border border-border/40 shadow-lg">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              
              {/* Elegant Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-end pb-12">
                <div className="flex gap-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                  <a
                    href={member.socials.linkedin}
                    className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-liminal-secondary hover:border-liminal-secondary transition-all duration-300"
                  >
                    <Linkedin size={18} strokeWidth={1.5} />
                  </a>
                  <a
                    href={member.socials.twitter}
                    className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-liminal-secondary hover:border-liminal-secondary transition-all duration-300"
                  >
                    <Twitter size={18} strokeWidth={1.5} />
                  </a>
                  <a
                    href={member.socials.mail}
                    className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-liminal-secondary hover:border-liminal-secondary transition-all duration-300"
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
                <p className="text-muted-foreground text-[11px] uppercase tracking-[0.25em] font-bold">
                  {member.role}
                </p>
                <div className="w-1 h-1 rounded-full bg-liminal-secondary/40" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
