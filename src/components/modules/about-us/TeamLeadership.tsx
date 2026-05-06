"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

// Team member data
const teamMembers = [
  {
    name: "Arjun Mahmud",
    role: "Principal Architect & Founder",
    image: "/assets/about-us/team-1.png",
    quote: "Space is not something you see — it&apos;s something you feel.",
    bio: "With 15 years of experience across Dhaka, Singapore, and London, Arjun founded Liminal to bridge the gap between architectural rigor and interior soul. His work is defined by spatial sequencing and a deep respect for vernacular materials.",
    credentials: ["B.Arch BUET", "M.Arch NUS", "AIA Member"],
    index: "01",
  },
  {
    name: "Nadia Rahman",
    role: "Creative Director",
    image: "/assets/about-us/team-2.png",
    quote: "Colour is the first language a room speaks.",
    bio: "Nadia leads the studio's creative vision with a background in fine art and spatial design. She is responsible for the chromatic identity of every Liminal project — ensuring colour, texture, and light work in concert.",
    credentials: ["BFA Dhaka Art College", "MA Interior Design"],
    index: "02",
  },
  {
    name: "Rafi Al-Amin",
    role: "Head of Residential Design",
    image: "/assets/about-us/team-3.png",
    quote: "A home should hold its owner like a perfectly tailored suit.",
    bio: "Rafi specialises in luxury residential interiors, with a particular mastery of bespoke joinery and furniture design. His residential projects have been featured in Architectural Digest Bangladesh.",
    credentials: ["B.Arch AIUB", "Certified Interior Designer"],
    index: "03",
  },
  {
    name: "Sara Hossain",
    role: "Head of Commercial & Hospitality",
    image: "/assets/about-us/team-4.png",
    quote: "The best commercial spaces make you forget you&apos;re at work.",
    bio: "Sara oversees all commercial and hospitality projects at Liminal. Her portfolio spans five-star hotel lobbies, corporate headquarters, and retail environments across Bangladesh and the Gulf region.",
    credentials: ["B.Arch BRAC University", "LEED AP"],
    index: "04",
  },
];

// Team Card Component
const TeamCard = ({
  member,
  isElevated,
}: {
  member: (typeof teamMembers)[0];
  isElevated: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden cursor-pointer",
        isElevated ? "lg:mt-0" : "lg:mt-10"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-label={`${member.name} — ${member.role}`}
    >
      {/* Animated top accent bar */}
      <div
        className={cn(
          "absolute top-0 left-0 h-0.5 bg-liminal-secondary z-20 transition-all duration-700 ease-in-out",
          isHovered ? "w-full" : "w-1/3"
        )}
      />

      {/* Portrait Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-108"
        />

        {/* Gradient overlay — always visible at bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        {/* Index number */}
        <div className="absolute top-5 right-5 font-mono text-[10px] text-white/40 tracking-[0.3em]">
          {member.index}
        </div>

        {/* Bio overlay — slides up on hover */}
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 bg-[#141f0a]/95 p-6 transition-all duration-700 ease-in-out overflow-hidden",
            isHovered ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          {/* Quote */}
          <p className="font-serif italic text-sm text-white/80 leading-relaxed mb-4 border-l-2 border-liminal-secondary pl-3">
            &ldquo;{member.bio}&rdquo;
          </p>

          {/* Credentials */}
          <div className="flex flex-wrap gap-1.5">
            {member.credentials.map((cred) => (
              <span
                key={cred}
                className="font-mono text-[9px] uppercase tracking-[0.25em] text-liminal-secondary border border-liminal-secondary/30 px-2 py-1"
              >
                {cred}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div className="pt-5 pb-4 px-1 border-b border-border/40 group-hover:border-liminal-secondary/20 transition-colors duration-500">
        <p className="font-mono text-[9px] text-liminal-secondary uppercase tracking-[0.4em] mb-1.5">
          {member.role}
        </p>
        <h3 className="font-heading text-lg font-bold tracking-tight text-foreground group-hover:text-liminal-secondary transition-colors duration-500">
          {member.name}
        </h3>
      </div>
    </div>
  );
};

// TeamLeadership Component — Editorial Portrait Cards with Hover Bio Reveal
const TeamLeadership = () => {
  return (
    <section
      id="team-leadership"
      aria-labelledby="team-heading"
      className="py-20 md:py-28 lg:py-36 bg-background overflow-hidden"
    >
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          variant="editorial"
          headingId="team-heading"
          badgeText="The Team"
          title={
            <>
              The Minds Behind{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Every Space
              </span>
            </>
          }
          description="Our leadership team brings together decades of experience in architecture, fine art, and spatial design. Each member is a specialist — and together they form a creative force that is greater than its parts."
        />

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, i) => (
            <TeamCard
              key={member.name}
              member={member}
              isElevated={i % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamLeadership;
