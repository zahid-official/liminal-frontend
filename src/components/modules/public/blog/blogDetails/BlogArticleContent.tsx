import { IBlogContentBlock } from "./blogData";
import Image from "next/image";

interface BlogArticleContentProps {
  content: IBlogContentBlock[];
}

const BlogArticleContent = ({ content }: BlogArticleContentProps) => {
  // Track whether we've rendered the first paragraph (for drop cap)
  let isFirstParagraph = true;

  return (
    <div className="space-y-8">
      {content.map((block, index) => {
        switch (block.type) {
          case "paragraph": {
            const applyDropCap = isFirstParagraph;
            if (isFirstParagraph) isFirstParagraph = false;

            return (
              <p
                key={index}
                className="text-lg leading-loose text-foreground/80 font-light"
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
                className="border-l-2 border-liminal-secondary/40 pl-8 py-6 my-12"
              >
                <p className="italic font-serif text-xl md:text-2xl text-foreground/85 leading-relaxed">
                  &quot;{block.text}&quot;
                </p>
                {block.attribution && (
                  <cite className="block mt-4 text-[11px] font-mono tracking-[0.2em] text-muted-foreground/60 uppercase not-italic">
                    {block.attribution}
                  </cite>
                )}
              </blockquote>
            );

          case "image":
            return (
              <figure key={index} className="my-12">
                <div className="relative aspect-video overflow-hidden rounded-sm shadow-lg">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 720px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/5 to-transparent" />
                </div>
                {block.caption && (
                  <figcaption className="text-[11px] font-mono tracking-wider text-muted-foreground/50 uppercase text-center mt-4">
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
