import LiminalButton from "@/components/shared/LiminalButton";
import SectionHeader from "@/components/shared/SectionHeader";
import { MessageSquare } from "lucide-react";
import Image from "next/image";

// InteriorCTA Component
const InteriorCTA = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/interior/hero-v2.png"
          alt="Architectural Background"
          fill
          className="object-cover grayscale opacity-3"
        />
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
