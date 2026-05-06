import AnimatedButton from "@/components/shared/AnimatedButton";
import LiminalButton from "@/components/shared/LiminalButton";
import { MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// AboutCTA Component — Image-Backed Dark CTA with Inset Decorative Frame
const AboutCTA = () => {
  return (
    <section
      id="about-cta"
      aria-label="Call to action — Start your project with Liminal"
      className="relative overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/about-us/hero-artistic.png"
          alt="Liminal interior design — begin your project"
          fill
          className="object-cover"
        />
        {/* Multi-layer dark overlay for depth */}
        <div className="absolute inset-0 bg-[#141f0a]/85" />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 py-28 md:py-36 lg:py-44">
        <div className="custom-container">
          {/* Inset decorative border frame */}
          <div className="relative border border-white/10 p-12 md:p-20 lg:p-24">

            {/* Corner ornaments */}
            {/* Top-left */}
            <div className="absolute -top-px -left-px w-12 h-12 border-t-2 border-l-2 border-liminal-secondary" />
            {/* Top-right */}
            <div className="absolute -top-px -right-px w-12 h-12 border-t-2 border-r-2 border-liminal-secondary" />
            {/* Bottom-left */}
            <div className="absolute -bottom-px -left-px w-12 h-12 border-b-2 border-l-2 border-liminal-secondary" />
            {/* Bottom-right */}
            <div className="absolute -bottom-px -right-px w-12 h-12 border-b-2 border-r-2 border-liminal-secondary" />

            {/* Inner content — centered */}
            <div className="max-w-3xl mx-auto text-center space-y-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-3">
                <div className="w-8 h-px bg-liminal-secondary" />
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-liminal-secondary">
                  Begin Your Project
                </span>
                <div className="w-8 h-px bg-liminal-secondary" />
              </div>

              {/* Heading */}
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
                Ready to Transform{" "}
                <span className="italic font-serif font-light text-liminal-secondary">
                  Your Space?
                </span>
              </h2>

              {/* Description */}
              <p className="text-white/60 font-light text-lg leading-relaxed max-w-2xl mx-auto">
                Whether you&apos;re envisioning a serene private residence or a
                landmark commercial environment — we are ready to begin. Let&apos;s
                build something that outlasts both of us.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-2">
                <Link href="/contact">
                  <LiminalButton icon={MessageSquare} animateIcon={false}>
                    Book a Consultation
                  </LiminalButton>
                </Link>
                <Link href="/projects">
                  <AnimatedButton className="border-white/20 text-white hover:border-liminal-secondary">
                    View Our Work
                  </AnimatedButton>
                </Link>
              </div>

              {/* Commitment note */}
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.35em] pt-4">
                No commitment required · Free initial consultation · Dhaka & Beyond
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
