import { IBlogContentBlock } from "../blogData";
import Image from "next/image";

interface BlogArticleContentProps {
  content: IBlogContentBlock[];
}

const BlogArticleContent = ({ content }: BlogArticleContentProps) => {
  const firstParagraphIndex = content.findIndex(
    (block) => block.type === "paragraph",
  );

  return (
    <div className="space-y-8">
      {content.map((block, index) => {
        switch (block.type) {
          case "paragraph": {
            const applyDropCap = index === firstParagraphIndex;

            return (
              <p
                key={index}
                className="text-lg text-muted-foreground font-light"
              >
                {applyDropCap ? (
                  <>
                    <span className="float-left text-5xl md:text-6xl font-heading font-bold leading-[0.8] mr-3 mt-1.5 text-liminal-secondary">
                      {block.text.charAt(0)}
                    </span>
                    {block.text.slice(1)}
                  </>
                ) : (
                  block.text
                )}
              </p>
            );
          }

          case "heading":
            return (
              <h2
                key={index}
                id={block.id}
                className="text-2xl md:text-3xl font-bold font-heading tracking-tight mt-16 mb-2 scroll-mt-32"
              >
                {block.text}
              </h2>
            );

          case "quote":
            return (
              <blockquote
                key={index}
                className="relative border-l-2 border-liminal-secondary/40 pl-6 pr-4 py-8 bg-zinc-50/80 my-12"
              >
                <div className="absolute top-2 left-4 text-5xl text-liminal-secondary/15 font-serif select-none pointer-events-none">
                  &ldquo;
                </div>
                <p className="italic font-serif text-lg sm:text-xl text-foreground/80 leading-relaxed select-none pointer-events-none">
                  {block.text}
                </p>
                {block.attribution && (
                  <cite className="block mt-4 text-xs tracking-[0.2em] text-liminal-secondary font-medium not-italic">
                    — {block.attribution}
                  </cite>
                )}
              </blockquote>
            );

          case "image":
            return (
              <figure key={index} className="my-12">
                <div className="relative aspect-video w-full overflow-hidden border border-border/40 rounded p-2 bg-background/50">
                  <div className="relative w-full h-full overflow-hidden bg-muted">
                    <Image
                      src={block.src}
                      alt={block.alt}
                      fill
                      sizes="(max-width: 800px) 100vw, 800px"
                      className="object-cover"
                    />
                  </div>
                </div>
                {block.caption && (
                  <figcaption className="text-sm tracking-wider text-muted-foreground/80 text-center mt-3">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default BlogArticleContent;
