import Image from "next/image";
import Link from "next/link";
import { AnimatedButton } from "@/components/ui/animated-button";
import { SectionBadge } from "@/components/ui/section-badge";

// About Component
const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="overflow-hidden py-20 md:py-28 lg:py-32 bg-[url('/assets/bg-about.png')] bg-right bg-no-repeat"
    >
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative w-full aspect-4/3 lg:aspect-[1.1/1] max-w-150 mx-auto lg:mx-0">
            {/* Top-left image */}
            <div className="hidden sm:block absolute top-0 left-0 w-[68%] h-[62%] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden z-0 shadow-lg">
              <Image
                src="/assets/about-1.webp"
                alt="Modern interior design"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover"
              />
            </div>

            {/* Bottom-right image */}
            <div className="absolute bottom-0 right-0 w-full h-full sm:w-[60%] sm:h-[72%] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden z-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              <Image
                src="/assets/about-2.webp"
                alt="Minimalist living room"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 text-center sm:text-left">
            {/* Badge */}
            <SectionBadge text="Since 2020" className="mb-5" />

            {/* Heading */}
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl leading-[1.05] tracking-tight font-bold"
            >
              Architecture &{" "}
              <span className="text-liminal-secondary">Interiors</span> Our Dual
              Expertise
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-sm md:text-[15px] leading-relaxed max-w-xl mx-auto sm:mx-0">
              We believe that every space has the power to inspire and that
              great design brings that inspiration to life. Our mission is to
              craft environments that stir creativity, evoke emotion and reflect
              the essence of those who inhabit them.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Feature 1 */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Residential Design</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  From cozy homes to luxurious villas, <br /> we create spaces
                  that feel like home.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Sustainable Solutions</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We prioritize eco-friendly materials & <br />
                  energy-efficient.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/about-us">
              <AnimatedButton className="mt-2">Discover More</AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
