import { IBlogContentBlock, IBlogThumbnail } from "../blogData";
import Image from "next/image";

interface BlogArticleContentProps {
  title?: string;
  description: string;
  thumbnail: IBlogThumbnail;
  content: IBlogContentBlock[];
}

// Helper to split paragraph text after ~3 lines (approx 220-270 chars or 2-3 sentences)
const splitParagraphBy3Lines = (text: string) => {
  const sentenceRegex = /[^.!?]+[.!?]+/g;
  const sentences = text.match(sentenceRegex) || [text];

  let firstPart = "";
  let remainingPart = "";
  let charCount = 0;
  let splitIndex = 0;

  for (let i = 0; i < sentences.length; i++) {
    charCount += sentences[i].length;
    firstPart += sentences[i];
    splitIndex = i + 1;

    // Target ~3 lines (around 220-270 characters or 2-3 sentences)
    if (charCount >= 220 || i >= 2) {
      break;
    }
  }

  if (splitIndex < sentences.length) {
    remainingPart = sentences.slice(splitIndex).join("").trim();
  }

  firstPart = firstPart.trim();

  return {
    isMoreThan3Lines: Boolean(remainingPart),
    firstPart,
    remainingPart,
  };
};

const BlogArticleContent = ({
  title,
  description,
  thumbnail,
  content,
}: BlogArticleContentProps) => {
  return (
    <div className="space-y-8">
      {/* Description as lead paragraph with drop-cap */}
      {description && (
        <p className="text-lg text-muted-foreground font-light">
          <span className="float-left text-5xl md:text-6xl font-heading font-bold leading-[0.8] mr-2 mt-1.5 text-liminal-secondary">
            {description.charAt(0)}
          </span>
          {description.slice(1)}
        </p>
      )}

      {content.map((section, index) => {
        const sectionId =
          section.id ||
          section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-");

        const isFirstSection = index === 0;

        return (
          <div key={index} className="space-y-8">
            {/* Section Heading */}
            <h2
              id={sectionId}
              className="text-2xl md:text-3xl font-bold font-heading tracking-tight mt-16 mb-2 scroll-mt-32"
            >
              {section.heading}
            </h2>

            {/* Section Paragraph(s) */}
            {isFirstSection ? (
              (() => {
                const { isMoreThan3Lines, firstPart, remainingPart } =
                  splitParagraphBy3Lines(section.paragraph);

                const defaultCaptionText = title
                  ? `${title} - Architectural Study`
                  : `${section.heading} - Architectural Detail`;

                const renderSectionImage = () => (
                  <figure className="my-12">
                    <div className="relative aspect-video w-full overflow-hidden border border-border/40 rounded p-2 bg-background/50">
                      <div className="relative w-full h-full overflow-hidden bg-muted">
                        <Image
                          src={thumbnail.url}
                          alt={section.heading}
                          fill
                          sizes="(max-width: 800px) 100vw, 800px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <figcaption className="text-sm tracking-wider text-muted-foreground/80 text-center mt-3">
                      {thumbnail.caption || defaultCaptionText}
                    </figcaption>
                  </figure>
                );

                if (isMoreThan3Lines) {
                  return (
                    <>
                      <p className="text-lg text-muted-foreground font-light">
                        {firstPart}
                      </p>
                      {renderSectionImage()}
                      <p className="text-lg text-muted-foreground font-light whitespace-pre-line">
                        {remainingPart}
                      </p>
                    </>
                  );
                }

                return (
                  <>
                    <p className="text-lg text-muted-foreground font-light whitespace-pre-line">
                      {firstPart}
                    </p>
                    {renderSectionImage()}
                  </>
                );
              })()
            ) : (
              <p className="text-lg text-muted-foreground font-light whitespace-pre-line">
                {section.paragraph}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BlogArticleContent;
