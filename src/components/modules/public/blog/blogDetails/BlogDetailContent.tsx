"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { IBlogArticle, IBlogContentBlock } from "../blogData";

// BlogDetailContent Props
interface BlogDetailContentProps {
  article: IBlogArticle;
}

// BlogDetailContent Component — Rich editorial article body with TOC sidebar
const BlogDetailContent = ({ article }: BlogDetailContentProps) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Extract headings for TOC
  const headings = useMemo(
    () =>
      article.content.filter(
        (block): block is Extract<IBlogContentBlock, { type: "heading" }> =>
          block.type === "heading"
      ),
    [article.content]
  );

  // Track active section via Intersection Observer
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <section
      id="blog-detail-content"
      className="py-16 md:py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Sidebar — Table of Contents (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 space-y-8">
              {/* TOC Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-liminal-secondary shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-liminal-secondary">
                    In This Article
                  </span>
                </div>

                {/* TOC Links */}
                <nav className="space-y-1" aria-label="Table of Contents">
                  {headings.map((heading, index) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById(heading.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={cn(
                        "flex items-start gap-3 py-2 text-sm transition-all duration-300 group",
                        activeSection === heading.id
                          ? "text-foreground font-medium"
                          : "text-muted-foreground/60 hover:text-foreground"
                      )}
                    >
                      <span
                        className={cn(
                          "text-[10px] font-mono mt-0.5 shrink-0 transition-colors duration-300",
                          activeSection === heading.id
                            ? "text-liminal-secondary"
                            : "text-muted-foreground/30"
                        )}
                      >
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <span className="leading-snug">{heading.text}</span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Author Card */}
              <div className="border-t border-border/40 pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 border border-border/40 flex items-center justify-center">
                    <span className="text-[11px] font-bold text-foreground/60 uppercase">
                      {article.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{article.author}</p>
                    <p className="text-[11px] font-mono text-muted-foreground/50 uppercase tracking-wider">
                      {article.authorRole}
                    </p>
                  </div>
                </div>
                <p className="text-[13px] text-muted-foreground/60 font-light leading-relaxed">
                  Perspectives on design, material culture, and the spatial
                  philosophy that guides our studio practice.
                </p>
              </div>
            </div>
          </aside>

          {/* Mobile TOC Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsTocOpen(!isTocOpen)}
              className="flex items-center gap-3 w-full py-3 px-4 bg-zinc-50/80 border border-border/40 rounded-sm text-sm font-medium cursor-pointer"
            >
              <div className="w-5 h-px bg-liminal-secondary shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-liminal-secondary">
                In This Article
              </span>
              <div className="ml-auto">
                <svg
                  className={cn(
                    "w-4 h-4 transition-transform duration-300 text-muted-foreground",
                    isTocOpen && "rotate-180"
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            {isTocOpen && (
              <nav className="mt-2 py-3 px-4 bg-zinc-50/80 border border-border/40 rounded-sm space-y-1">
                {headings.map((heading, index) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsTocOpen(false);
                      document
                        .getElementById(heading.id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-start gap-3 py-2 text-sm text-muted-foreground/70 hover:text-foreground transition-colors"
                  >
                    <span className="text-[10px] font-mono mt-0.5 shrink-0 text-muted-foreground/30">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="leading-snug">{heading.text}</span>
                  </a>
                ))}
              </nav>
            )}
          </div>

          {/* Main Content */}
          <article className="lg:col-span-7 lg:col-start-5">
            {/* Article Body */}
            <div className="space-y-8">
              {article.content.map((block, index) => (
                <ContentBlock key={index} block={block} isFirst={index === 0} />
              ))}
            </div>

            {/* Tags */}
            <div className="mt-16 pt-8 border-t border-border/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-liminal-secondary shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-liminal-secondary">
                  Topics
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-border/50 text-[11px] font-semibold tracking-wider uppercase text-muted-foreground hover:border-liminal-secondary/40 hover:text-foreground transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-8 pt-8 border-t border-border/40">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-liminal-secondary shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-liminal-secondary">
                    Share This Article
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {["X", "Li", "Fb"].map((platform) => (
                    <button
                      key={platform}
                      className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-[11px] font-bold text-muted-foreground hover:border-liminal-secondary hover:text-liminal-secondary transition-colors duration-300 cursor-pointer"
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Right Spacer for visual balance */}
          <div className="hidden lg:block lg:col-span-2" />
        </div>
      </div>
    </section>
  );
};

// Content Block Renderer
const ContentBlock = ({
  block,
  isFirst,
}: {
  block: IBlogContentBlock;
  isFirst: boolean;
}) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          className={cn(
            "text-foreground/80 leading-[1.85] font-light",
            isFirst
              ? "text-lg md:text-xl first-letter:text-5xl first-letter:font-heading first-letter:font-bold first-letter:text-foreground first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none"
              : "text-[16.5px]"
          )}
        >
          {block.text}
        </p>
      );

    case "heading":
      return (
        <h2
          id={block.id}
          className="text-2xl md:text-3xl font-bold font-heading tracking-tight pt-8 scroll-mt-32"
        >
          {block.text}
        </h2>
      );

    case "quote":
      return (
        <div className="my-12 max-w-lg mx-auto">
          <blockquote className="relative py-10 px-6 text-center">
            {/* Decorative Quotation */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl text-liminal-secondary/60 font-serif leading-none select-none pointer-events-none">
              &ldquo;
            </div>

            {/* Diamond Ornament Divider */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-3">
              <div className="w-8 h-px bg-liminal-secondary/60" />
              <div className="w-2 h-2 rotate-45 border border-liminal-secondary/80" />
              <div className="w-8 h-px bg-liminal-secondary/60" />
            </div>

            {/* Quote Text */}
            <p className="text-xl md:text-2xl italic font-serif text-foreground/90 leading-relaxed">
              &quot;{block.text}&quot;
            </p>
            {block.attribution && (
              <footer className="block mt-4 text-[10px] uppercase tracking-[0.3em] text-liminal-secondary font-bold">
                — {block.attribution}
              </footer>
            )}
          </blockquote>
        </div>
      );

    case "image":
      return (
        <figure className="my-10">
          <div className="relative aspect-video overflow-hidden rounded-sm shadow-lg">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              quality={90}
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-4 text-center text-[11px] font-mono tracking-wider text-muted-foreground/50 uppercase">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
};

export default BlogDetailContent;
