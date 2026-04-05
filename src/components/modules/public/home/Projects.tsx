import Image from "next/image";
import { SectionBadge } from "@/components/ui/section-badge";
import { AnimatedButton } from "@/components/ui/animated-button";

const Projects = () => {
  return (
    <section className="bg-[#2a2420] text-white py-20 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-12 shrink-0">
          <div className="space-y-6">
            <SectionBadge text="FEATURED PROJECTS" />

            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight">
              Creative <span className="text-[#b5915d]">Projects That</span>{" "}
              <br />
              <span className="text-[#b5915d]">Define</span> Our Style
            </h2>

            <p className="text-gray-300 max-w-100 text-[15px] leading-relaxed">
              Our portfolio showcases a diverse range of projects, from
              beautifully crafted residential spaces functional and stylish
              commercial interiors
            </p>
          </div>

          <AnimatedButton className="border-white/10 text-white hover:text-black hover:border-liminal-secondary">
            Explore Project
          </AnimatedButton>
        </div>

        {/* Right Images */}
        <div className="lg:w-1/2 flex flex-col gap-6 w-full">
          {/* Top Image */}
          <div className="w-full h-80 rounded-[32px] overflow-hidden relative group">
            <Image
              src="/assets/bg-banner.jpg"
              alt="Project interior"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Bottom Image */}
          <div className="w-full h-80 rounded-[32px] overflow-hidden relative group">
            <Image
              src="/assets/about-2.webp"
              alt="Project interior 2"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Small decorative dot on the right edge */}
      <div className="absolute right-8 top-1/2 w-1.5 h-1.5 rounded-full bg-[#b5915d]"></div>
    </section>
  );
};

export default Projects;
