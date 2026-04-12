import CenteredSectionHeader from "@/components/shared/CenteredSectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const faqData = [
  {
    id: "item-1",
    num: "01",
    question: "What Interior Design Services Do You Offer?",
    answer:
      "Our interior design services cover everything you need to create a stunning and functional space. From initial concept development and space planning to selecting color schemes, furniture, and custom designs, we bring your vision to life.",
  },
  {
    id: "item-2",
    num: "02",
    question: "What Services Do You Offer?",
    answer:
      "We offer full-service interior design, including residential, commercial, and hospitality projects. Our services range from schematic design and space planning to furniture selection, procurement, and full project management.",
  },
  {
    id: "item-3",
    num: "03",
    question: "What Is Your Design Process?",
    answer:
      "Our design process starts with an initial consultation, followed by concept development, design presentation, refinement, procurement, and finally, installation. We ensure a seamless experience from start to finish.",
  },
  {
    id: "item-4",
    num: "04",
    question: "How Do You Establish Your Design Fees?",
    answer:
      "Design fees are tailored to each project's scope. We typically charge a flat design fee based on the estimated time and resources required, plus a manageable percentage on procurement for furniture and fixtures.",
  },
  {
    id: "item-5",
    num: "05",
    question: "Will I Need Planning Permission For My Project?",
    answer:
      "This depends on the scope of your project. Minor interior modifications usually don't require permission, but structural changes, extensions, or working on heritage buildings likely will. We consult with experts when necessary.",
  },
  {
    id: "item-6",
    num: "06",
    question: "How Long Does A Typical Project Take?",
    answer:
      "Project timelines vary greatly depending on scale and complexity. A single room redesign might take 4-8 weeks, while full home renovations can take upwards of 6-12 months. We provide clear timeline estimates during the initial phase.",
  },
];

// FaqSection Component
const FaqSection = () => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 md:py-28 lg:py-32 overflow-hidden relative"
    >
      <div className="custom-container relative z-10">
        {/* Section Header */}
        <CenteredSectionHeader
          badgeText="POPULAR QUERIES"
          headingId="faq-heading"
          title={
            <>
              Quick And Clear{" "}
              <span className="text-liminal-secondary">Answers</span>
              <br className="hidden lg:block" />
              <span className="text-liminal-secondary">To Your Key</span>{" "}
              Questions
            </>
          }
        />

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mt-12 lg:mt-16">
          {/* Left Column: Image & Text */}
          <div className="flex flex-col gap-8 lg:pr-8">
            <div className="relative w-full aspect-4/3 rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden border border-border/40 shadow-sm bg-muted">
              <Image
                src="/assets/faq-1.jpg"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                alt="Interior design team discussing project"
              />
            </div>

            <div className="lg:max-w-[85%]">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading leading-tight tracking-tight mb-4">
                Still Looking For Answers Or Need A Fun Chat?
              </h3>
              <p className="text-muted-foreground text-[15px] sm:text-base leading-relaxed">
                Our team will guide you through our design process, project
                specifications and cost estimate.
              </p>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="flex flex-col justify-start">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              {faqData.map((faq, index) => (
                <AccordionItem
                  value={faq.id}
                  key={faq.id}
                  className={`hover:border-liminal-secondary data-[state=open]:border-liminal-secondary ${index === 0 ? "border-t" : ""}`}
                >
                  <AccordionTrigger className="hover:no-underline py-5 lg:py-6 group/trigger cursor-pointer">
                    <div className="flex items-start gap-4 sm:gap-6 text-left pr-4">
                      <span className="text-muted-foreground/50 font-semibold font-heading text-xs sm:text-sm pt-1 xl:pt-1.5 transition-colors duration-300 group-hover/trigger:text-liminal-secondary group-data-[state=open]/trigger:text-liminal-secondary">
                        {faq.num}
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

export default FaqSection;
