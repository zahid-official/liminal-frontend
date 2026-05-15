"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

const faqItems = [
  { question: "What is your design process like?", answer: "Our process begins with deep listening. We conduct immersive consultations to understand your lifestyle, aesthetic sensibilities, and spatial needs. From there, we move through concept development, material curation, detailed design, and meticulous execution." },
  { question: "How long does a typical project take?", answer: "Project timelines vary based on scope. A single-room transformation typically takes 6–10 weeks, while a full residential or commercial project may span 4–8 months. We prioritize quality over speed." },
  { question: "Do you work on commercial projects?", answer: "Absolutely. We design premium offices, retail spaces, hospitality venues, and cultural institutions with the same spatial sensitivity and material rigour as our residential work." },
  { question: "What sets Liminal apart?", answer: "Our approach is rooted in contextual intelligence and material authenticity. We don't apply trends — we design from first principles, responding to the unique character of each site, client, and brief." },
  { question: "Can you work within a defined budget?", answer: "Yes. Exceptional design is about intelligent resource allocation, not unlimited spending. We establish clear budget parameters and design within them — maximising impact without compromise." },
  { question: "Do you provide furniture and material sourcing?", answer: "We offer comprehensive sourcing, from bespoke furniture commissions to rare material procurement. Our network spans local workshops and international studios." },
];

// HomeFAQ Component
const HomeFAQ = () => {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Header + Image */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeader
              variant="inline"
              badgeText="Common Questions"
              headingId="faq-heading"
              title={<>Everything You{" "}<span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">Need</span>{" "}to Know</>}
              description="Answers to the questions we hear most. If yours isn't here, we're always happy to start a conversation."
            />
            <div className="hidden lg:block relative group/faq">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-lg">
                <Image src="/assets/home/blueprint-study.png" alt="Liminal Design Process" fill sizes="42vw" quality={85}
                  className="object-cover transition-transform duration-1000 group-hover/faq:scale-105 will-change-transform transform-gpu" />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/10 to-transparent" />
              </div>
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-liminal-secondary/25" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-liminal-secondary/25" />
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="group/faq">
                  <AccordionTrigger className="text-left gap-6 cursor-pointer">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.2em] shrink-0 group-data-[state=open]/faq:text-liminal-secondary transition-colors duration-300">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-base md:text-lg font-semibold tracking-tight group-data-[state=open]/faq:text-liminal-secondary transition-colors duration-300">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-10 md:pl-12 text-[15px]">{item.answer}</AccordionContent>
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
