import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface NavigationItem {
  href: string;
  title: string;
  image: string;
  category?: string;
  metaText?: string;
}

interface DetailNavigationProps {
  prev: NavigationItem | null;
  next: NavigationItem | null;
  prevLabel?: string;
  nextLabel?: string;
  headingLabel?: string;
  className?: string;
}

const DetailNavigation = ({
  prev,
  next,
  prevLabel = "Previous",
  nextLabel = "Next",
  headingLabel = "Continue",
  className,
}: DetailNavigationProps) => {
  if (!prev && !next) return null;

  return (
    <section className={`pt-16 border-t border-border/40 ${className || ""}`}>
      <div className="custom-container">
        {/* Navigation Heading */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-liminal-secondary shrink-0" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-liminal-secondary">
            {headingLabel}
          </span>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Previous Item */}
          {prev ? (
            <Link href={prev.href}>
              <article className="group flex items-stretch bg-background rounded-sm border border-border/30 overflow-hidden hover:border-liminal-secondary/25 hover:shadow-lg transition-all duration-700 h-full">
                {/* Image */}
                <div className="relative w-1/3 min-h-32 overflow-hidden shrink-0">
                  <Image
                    src={prev.image}
                    alt={prev.title}
                    fill
                    quality={80}
                    sizes="(max-width: 768px) 33vw, 20vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 gap-2 p-5 md:p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-muted-foreground/50 group-hover:text-liminal-secondary transition-colors duration-700">
                    <ArrowLeft className="size-3.5" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em]">
                      {prevLabel}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold font-heading tracking-tight leading-snug group-hover:text-liminal-secondary transition-colors duration-700">
                    {prev.title}
                  </h4>

                  {(prev.category || prev.metaText) && (
                    <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-muted-foreground/50 uppercase">
                      {prev.category && <span className="">{prev.category}</span>}
                      {prev.category && prev.metaText && (
                        <div className="w-0.5 h-0.5 rounded-full bg-muted-foreground/50" />
                      )}
                      {prev.metaText && <span className="">{prev.metaText}</span>}
                    </div>
                  )}
                </div>
              </article>
            </Link>
          ) : (
            <div />
          )}

          {/* Next Item */}
          {next ? (
            <Link href={next.href}>
              <article className="group flex items-stretch bg-background rounded-sm border border-border/30 overflow-hidden hover:border-liminal-secondary/25 hover:shadow-lg transition-all duration-700 h-full flex-row-reverse">
                {/* Image */}
                <div className="relative w-1/3 min-h-32 overflow-hidden shrink-0">
                  <Image
                    src={next.image}
                    alt={next.title}
                    fill
                    quality={80}
                    sizes="(max-width: 768px) 33vw, 20vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 gap-2 p-5 md:p-6 flex flex-col justify-center text-right">
                  <div className="flex items-center justify-end gap-2 text-muted-foreground/50 group-hover:text-liminal-secondary transition-colors duration-700">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em]">
                      {nextLabel}
                    </span>
                    <ArrowRight className="size-3.5" />
                  </div>

                  <h4 className="text-lg font-bold font-heading tracking-tight leading-snug group-hover:text-liminal-secondary transition-colors duration-700">
                    {next.title}
                  </h4>

                  {(next.category || next.metaText) && (
                    <div className="flex items-center justify-end gap-2 text-[10px] font-mono tracking-[0.2em] text-muted-foreground/50 uppercase">
                      {next.category && <span className="">{next.category}</span>}
                      {next.category && next.metaText && (
                        <div className="w-0.5 h-0.5 rounded-full bg-muted-foreground/50" />
                      )}
                      {next.metaText && <span className="">{next.metaText}</span>}
                    </div>
                  )}
                </div>
              </article>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
};

export default DetailNavigation;
