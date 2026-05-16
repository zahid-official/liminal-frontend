import LiminalButton from "@/components/shared/LiminalButton";
import SectionHeader from "@/components/shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

// FAQ data
const faqs = [
  {
    question: "What types of projects does Liminal specialize in?",
    answer:
      "We specialize in residential interiors, commercial spaces, and architectural consultancy. Our work spans private homes, corporate offices, retail environments, and hospitality projects — always with an emphasis on material authenticity and spatial intelligence.",
  },
  {
    question: "How does the design process work?",
    answer:
      "Our process begins with a deep-listening phase where we understand your lifestyle, aspirations, and spatial needs. We then move through concept development, material specification, detailed design documentation, and finally, on-site execution. Every step is collaborative and transparent.",
  },
  {
    question: "What is the typical project timeline?",
    answer:
      "Timelines vary by scope and complexity. A residential interior project typically takes 3–6 months from concept to completion, while larger commercial or architectural projects may extend to 8–12 months. We provide detailed timelines during the initial consultation.",
  },
  {
    question: "Do you work with clients outside of Dhaka?",
    answer:
      "Yes. While our studio is based in Dhaka, we work with clients across Bangladesh and internationally. We leverage digital collaboration tools for remote projects and travel for key project milestones when needed.",
  },
  {
    question: "What makes Liminal different from other design firms?",
    answer:
      "Our approach is rooted in architectural thinking rather than decorative styling. We don't follow trends — we study how spaces affect human behavior and emotion. Every material choice, every spatial proportion, and every detail is intentional and purposeful.",
  },
  {
    question: "How do I start a project with Liminal?",
    answer:
      "Start by scheduling a consultation through our contact page. During this initial meeting, we'll discuss your vision, project scope, budget considerations, and timeline expectations. From there, we'll propose a tailored approach that aligns with your goals.",
  },
];

// HomeFAQ Component
const HomeFAQ = () => {
  return (
    <section
      id="faq-section"
      aria-labelledby="faq-heading"
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-zinc-50/80"
    >
      <div className="custom-container relative z-10">
        {/* Section Header */}
        <SectionHeader
          variant="editorial"
          badgeText="Common Questions"
          headingId="faq-heading"
          title={
            <>
              Everything You Need
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              to{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Know
              </span>
            </>
          }
          description="Answers to the questions we hear most often. If you don't find what you're looking for, we'd love to hear from you directly."
        />

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mt-4">
          {/* Left: Image & Text */}
          <div className="flex flex-col gap-8 lg:pr-8">
            <div className="relative w-full aspect-4/3 rounded-sm overflow-hidden border border-border/40 shadow-sm bg-muted group">
              <Image
                src="/assets/home/faq.jpg"
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu backface-hidden"
                alt="Liminal design team discussing project details and material selections"
              />

              {/* Architectural Corner Brackets */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-liminal-secondary/30 z-10 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-liminal-secondary/30 z-10 pointer-events-none" />
            </div>

            <div className="lg:max-w-[85%]">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading leading-tight tracking-tight mb-4">
                Still Looking For Answers Or Need A Fun Chat?
              </h3>
              <p className="text-muted-foreground text-[15px] sm:text-base leading-relaxed mb-6">
                Our team will guide you through our design process,{" "}
                <br className="max-lg:hidden" /> project specifications and cost
                estimate.
              </p>
              <Link href="/contact">
                <LiminalButton variant="outline">
                  Schedule a Consultation
                </LiminalButton>
              </Link>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="flex flex-col justify-start">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue=""
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={`hover:border-liminal-secondary data-[state=open]:border-liminal-secondary ${index === 0 ? "border-t" : ""}`}
                >
                  <AccordionTrigger className="hover:no-underline py-5 lg:py-6 group/trigger cursor-pointer">
                    <div className="flex items-start gap-4 sm:gap-6 text-left pr-4">
                      <span className="text-muted-foreground/50 font-semibold font-heading text-xs sm:text-sm pt-1 xl:pt-1.5 transition-colors duration-300 group-hover/trigger:text-liminal-secondary group-data-[state=open]/trigger:text-liminal-secondary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[1.15rem] sm:text-[1.35rem] lg:text-[1.4rem] font-bold font-heading tracking-tight leading-tight transition-colors duration-300 group-hover/trigger:text-liminal-secondary group-data-[state=open]/trigger:text-liminal-secondary">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="ps-11 sm:ps-14 pr-6 pb-6 text-[15px]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
