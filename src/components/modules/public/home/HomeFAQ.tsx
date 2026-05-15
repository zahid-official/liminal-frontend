"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// FAQ data
const faqItems = [
  {
    question: "What is your design process like?",
    answer:
      "Our process begins with deep listening. We conduct immersive consultations to understand your lifestyle, aesthetic sensibilities, and spatial needs. From there, we move through concept development, material curation, detailed design, and meticulous execution — each phase guided by close collaboration and transparent communication.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A single-room transformation typically takes 6–10 weeks, while a full residential or commercial project may span 4–8 months. We prioritize quality over speed, ensuring every detail is resolved to the highest standard.",
  },
  {
    question: "Do you work on commercial projects?",
    answer:
      "Absolutely. We have extensive experience designing premium offices, retail spaces, hospitality venues, and cultural institutions. Our commercial work applies the same spatial sensitivity and material rigour as our residential projects, creating environments that elevate both brand and experience.",
  },
  {
    question: "What sets Liminal apart from other studios?",
    answer:
      "Our approach is rooted in contextual intelligence and material authenticity. We don't apply trends — we design from first principles, responding to the unique character of each site, client, and brief. Every project is a bespoke narrative, not a template.",
  },
  {
    question: "Can you work within a defined budget?",
    answer:
      "Yes. We believe exceptional design is about intelligent resource allocation, not unlimited spending. During our initial consultation, we establish clear budget parameters and design within them — sourcing materials and solutions that maximise impact without compromise.",
  },
  {
    question: "Do you provide furniture and material sourcing?",
    answer:
      "We offer comprehensive sourcing services, from bespoke furniture commissions to rare material procurement. Our network of artisans, suppliers, and fabricators spans local workshops and international studios, allowing us to source exactly what each project demands.",
  },
];

// HomeFAQ Component
const HomeFAQ = () => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      <div className="custom-container">
        {/* Centered Header */}
        <SectionHeader
          variant="centered"
          headingId="faq-heading"
          badgeText="Common Questions"
          title={
            <>
              Everything You{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Need
              </span>{" "}
              to Know
            </>
          }
          description="Answers to the questions we hear most often. If you don't find what you're looking for, we're always happy to start a conversation."
          className="mb-12 lg:mb-16"
        />

        {/* Centered Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="group/faq"
              >
                <AccordionTrigger className="text-left gap-6 cursor-pointer">
                  <div className="flex items-center gap-5">
                    <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.2em] shrink-0 group-data-[state=open]/faq:text-liminal-secondary transition-colors duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base md:text-lg font-semibold tracking-tight group-data-[state=open]/faq:text-liminal-secondary transition-colors duration-300">
                      {item.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-11 md:pl-13 text-[15px]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
