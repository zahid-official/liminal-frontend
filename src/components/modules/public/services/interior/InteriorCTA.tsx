import LiminalButton from "@/components/shared/LiminalButton";
import SectionHeader from "@/components/shared/SectionHeader";
import { MessageSquare } from "lucide-react";

// InteriorCTA Component
const InteriorCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-zinc-50 relative overflow-hidden">
      {/* Abstract structural graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path d="M0,100 L100,0 L100,100 Z" fill="currentColor" />
          <line
            x1="0"
            y1="50"
            x2="100"
            y2="50"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <line
            x1="50"
            y1="0"
            x2="50"
            y2="100"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="custom-container relative z-10 max-w-4xl mx-auto space-y-10">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Section Header*/}
          <SectionHeader
            variant="centered"
            badgeText="Ready to Transform?"
            title={
              <>
                Let&apos;s Create Something <br />
                <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                  Extraordinary
                </span>
              </>
            }
            description="Whether it's a private residence or a commercial landmark, we are ready to bring your vision to life with precision and soul."
          />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <LiminalButton icon={MessageSquare} animateIcon={false}>
              Book a Consultancy
            </LiminalButton>
            <LiminalButton variant="outline">View Portfolios</LiminalButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorCTA;
