import type { IBlogContentBlock } from "../blogData";
import Image from "next/image";

interface BlogDetailContentProps {
  content: IBlogContentBlock[];
}

// BlogDetailContent Component — Premium rich typography content renderer
const BlogDetailContent = ({ content }: BlogDetailContentProps) => {
  return (
    <section id="blog-detail-content" className="py-16 md:py-20 lg:py-24 relative">
      {/* Side decorative line — visible on xl screens */}
      <div className="absolute left-[calc(50%-480px)] top-0 bottom-0 w-px bg-border/15 hidden xl:block" />

      <div className="custom-container">
        <div className="max-w-3xl mx-auto">
          {content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <p
                    key={index}
                    className="text-[17px] md:text-lg leading-[1.9] font-light text-foreground/80 mb-8"
                  >
                    {/* Drop cap for first paragraph */}
                    {index === 0 && block.text ? (
                      <>
                        <span className="float-left text-[5.5rem] font-heading font-bold text-liminal-secondary leading-[0.75] mr-4 mt-2 select-none">
                          {block.text.charAt(0)}
                        </span>
                        {block.text.slice(1)}
                      </>
                    ) : (
                      block.text
                    )}
                  </p>
                );

              case "heading":
                return (
                  <div key={index} className="mt-20 mb-8 relative">
                    {/* Decorative number */}
                    <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-liminal-secondary/40 block mb-3">
                      Section
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground relative pl-7 border-l-[3px] border-liminal-secondary/50">
                      {block.text}
                    </h2>
                  </div>
                );

              case "image":
                return (
                  <figure
                    key={index}
                    className="my-14 md:my-20 -mx-4 md:mx-0 lg:-mx-20 xl:-mx-32"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-xl group">
                      <Image
                        src={block.src || ""}
                        alt={block.alt || ""}
                        fill
                        quality={90}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 85vw, 960px"
                        className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.03] will-change-transform transform-gpu"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-foreground/8 to-transparent" />

                      {/* Subtle corner markers */}
                      <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                    {block.caption && (
                      <figcaption className="mt-5 px-4 md:px-0 flex items-center gap-3">
                        <div className="w-8 h-px bg-liminal-secondary/40 shrink-0" />
                        <span className="text-[11px] font-mono tracking-wider text-muted-foreground/50 uppercase leading-relaxed">
                          {block.caption}
                        </span>
                      </figcaption>
                    )}
                  </figure>
                );

              case "quote":
                return (
                  <blockquote
                    key={index}
                    className="relative py-14 md:py-20 px-6 my-14 text-center max-w-2xl mx-auto"
                  >
                    {/* Decorative Quotation Mark */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 text-8xl text-liminal-secondary/50 font-serif leading-none select-none pointer-events-none">
                      &ldquo;
                    </div>

                    {/* Quote Text */}
                    <p className="text-xl md:text-2xl lg:text-[1.7rem] italic font-serif text-foreground/90 leading-[1.6]">
                      &quot;{block.text}&quot;
                    </p>

                    {/* Diamond Ornament Divider */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-3">
                      <div className="w-12 h-px bg-liminal-secondary/50" />
                      <div className="w-2.5 h-2.5 rotate-45 border border-liminal-secondary/70" />
                      <div className="w-12 h-px bg-liminal-secondary/50" />
                    </div>
                  </blockquote>
                );

              default:
                return null;
            }
          })}

          {/* Article End Ornament */}
          <div className="flex items-center justify-center gap-4 pt-16 mt-8">
            <div className="w-20 h-px bg-border/30" />
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rotate-45 bg-liminal-secondary/30" />
              <div className="w-2.5 h-2.5 rotate-45 border border-liminal-secondary/50" />
              <div className="w-1.5 h-1.5 rotate-45 bg-liminal-secondary/30" />
            </div>
            <div className="w-20 h-px bg-border/30" />
          </div>

          {/* End Label */}
          <div className="text-center mt-6">
            <span className="text-[9px] font-mono uppercase tracking-[0.5em] text-muted-foreground/30">
              End of Article
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailContent;
