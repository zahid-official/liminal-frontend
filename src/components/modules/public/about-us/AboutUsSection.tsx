import CenteredSectionHeader from "@/components/shared/CenteredSectionHeader";

// AboutUsSection Component
const AboutUsSection = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="custom-container">
        <CenteredSectionHeader
          title={
            <>
              We Are{" "}
              <span className="text-liminal-secondary">Crafting Interiors</span>{" "}
              With <br className="hidden lg:block" />
              Innovation and{" "}
              <span className="text-liminal-secondary">Elegance</span>
            </>
          }
          description="At Liminal, we believe that every space has a story to tell. Our mission is mapping your vision into reality that transcends the ordinary, blending cutting-edge innovation with timeless elegance."
        />
      </div>
    </section>
  );
};

export default AboutUsSection;
