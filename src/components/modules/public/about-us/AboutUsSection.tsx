import CenteredSectionHeader from "@/components/shared/CenteredSectionHeader";
import AboutStats from "./AboutStats";
import AboutStory from "./AboutStory";
import AboutVision from "./AboutVision";
import AboutCoreValues from "./AboutCoreValues";
import AboutTeam from "./AboutTeam";
import AboutProcess from "./AboutProcess";

// Stats Data
const stats = [
  {
    label: "Years of Expertise",
    value: "12",
    suffix: "+",
    description:
      "A decade of shaping luxury environments with unwavering architectural precision.",
  },
  {
    label: "Curated Masterpieces",
    value: "250",
    suffix: "+",
    description:
      "A prestigious portfolio of high-end residential and commercial landmark projects.",
  },
  {
    label: "Global Partners",
    value: "180",
    suffix: "+",
    description:
      "Collaborating with world-class manufacturers to ensure peak material quality.",
  },
  {
    label: "Design Awards",
    value: "15",
    suffix: "+",
    description:
      "Recognized by industry leaders for innovation in minimalist luxury design.",
  },
];

const AboutUsSection = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 overflow-hidden bg-background relative">
      <div className="custom-container relative z-10 space-y-32 lg:space-y-48">
        {/* Intro Header */}
        <CenteredSectionHeader
          badgeText="WHO WE ARE"
          title={
            <>
              We Are Crafting Interiors With <br className="hidden lg:block" />
              Innovation and{" "}
              <span className="text-liminal-secondary">Elegance</span>
            </>
          }
          description="At Liminal, we believe that every space has a story to tell. Our mission is mapping your vision into reality that transcends the ordinary, blending cutting-edge innovation with timeless elegance."
        />

        {/* Our Story */}
        <AboutStory />

        {/* Our Vision */}
        <AboutVision />

        {/* About Stats */}
        <AboutStats stats={stats} />

        {/* Core Values */}
        <AboutCoreValues />

        {/* Our Process */}
        <AboutProcess />

        {/* Our Team */}
        <AboutTeam />
      </div>
    </section>
  );
};

export default AboutUsSection;
