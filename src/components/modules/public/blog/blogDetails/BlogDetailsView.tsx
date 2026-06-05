"use client";

import LiminalButton from "@/components/shared/LiminalButton";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Link2,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IBlogArticle, IBlogContentBlock } from "../blogData";

interface BlogDetailsViewProps {
  article: IBlogArticle;
  relatedArticles: IBlogArticle[];
  prevArticle: IBlogArticle;
  nextArticle: IBlogArticle;
}

const BlogDetailsView = ({
  article,
  relatedArticles,
  prevArticle,
  nextArticle,
}: BlogDetailsViewProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [copied, setCopied] = useState(false);

  // Monitor scroll for reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor intersection of sections for the TOC active states
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0.1 },
    );

    article.content.forEach((block) => {
      if (block.type === "heading") {
        const el = document.getElementById(block.id);
        if (el) observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [article.content]);

  // Copy link to clipboard
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Scroll to section
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <article className="relative bg-background overflow-hidden">
      {/* 1. Fixed Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-0.5 bg-liminal-secondary z-50 transition-all duration-100 ease-out origin-left transform-gpu"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <div className="custom-container pt-12 pb-16 md:pt-16 md:pb-24">
        {/* Editorial Hero Header */}
        <header className="border-b border-border/30 pb-12 mb-12">
          <div className="space-y-6 max-w-4xl">
            {/* Category Tag */}
            <span className="text-[11px] font-bold tracking-[0.3em] text-liminal-secondary uppercase block">
              {article.category} Study
            </span>

            {/* Subtitle / Excerpt */}
            {article.excerpt && (
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed">
                {article.excerpt}
              </p>
            )}

            {/* Article Metadata Bar */}
            <div className="pt-6 flex flex-wrap items-center justify-between gap-6 border-t border-border/20">
              {/* Author Card */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-zinc-50 border border-border/30 flex items-center justify-center text-xs font-bold font-mono text-foreground">
                  {article.author
                    .split(" ")
                    .filter(Boolean)
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">
                    {article.author}
                  </p>
                  <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
                    {article.authorRole}
                  </p>
                </div>
              </div>

              {/* Date & Read time */}
              <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 font-light">
                  <Calendar size={13} className="opacity-70" />
                  {article.date}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-border" />
                <span className="inline-flex items-center gap-1.5 font-light">
                  <Clock size={13} className="opacity-70" />
                  {article.readTime} Read
                </span>
              </div>

              {/* Share actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  title="Copy link"
                  className="h-8 w-8 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-zinc-50 transition-all duration-300"
                >
                  {copied ? (
                    <Check size={13} className="text-liminal-secondary" />
                  ) : (
                    <Link2 size={13} />
                  )}
                </button>
                <button
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.open(
                        `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`,
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }
                  }}
                  title="Share on Twitter"
                  className="h-8 w-8 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-zinc-50 transition-all duration-300"
                >
                  <Twitter size={13} />
                </button>
                <button
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.open(
                        `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}`,
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }
                  }}
                  title="Share on LinkedIn"
                  className="h-8 w-8 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-zinc-50 transition-all duration-300"
                >
                  <Linkedin size={13} />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Large Editorial Cover Image */}
        <div className="relative aspect-video lg:aspect-[2] rounded-3xl overflow-hidden shadow-2xl border border-border/10 mb-12 lg:mb-20">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-radial-vignette opacity-10" />
        </div>

        {/* Layout Grid: Sticky TOC & Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Sticky Table of Contents (Desktop Only) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 self-start pt-2">
            <div className="space-y-8 border-l border-border/20 pl-6 py-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-muted-foreground/60 block">
                INDEX OF THEMES
              </span>
              <nav aria-label="Table of contents" className="space-y-4">
                {article.content
                  .filter(
                    (
                      sec,
                    ): sec is Extract<IBlogContentBlock, { type: "heading" }> =>
                      sec.type === "heading",
                  )
                  .map((sec, idx) => {
                    const isActive = activeSection === sec.id;

                    return (
                      <button
                        key={idx}
                        onClick={() => handleScrollToSection(sec.id)}
                        className={cn(
                          "group flex items-center gap-3 text-[13px] font-semibold text-left transition-all duration-300",
                          isActive
                            ? "text-liminal-secondary pl-2"
                            : "text-muted-foreground/75 hover:text-foreground",
                        )}
                      >
                        <span
                          className={cn(
                            "h-px bg-liminal-secondary transition-all duration-300 origin-left",
                            isActive
                              ? "w-5 scale-x-100"
                              : "w-0 scale-x-0 group-hover:w-3 group-hover:scale-x-100",
                          )}
                        />
                        <span>{sec.text}</span>
                      </button>
                    );
                  })}
              </nav>

              <div className="pt-6 border-t border-border/20 space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-muted-foreground/60 block">
                  CRAFTED BY
                </span>
                <p className="text-xs font-semibold text-foreground">
                  {article.author}
                </p>
                <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider -mt-2">
                  {article.authorRole}
                </p>
              </div>
            </div>
          </aside>

          {/* Right Column: Article Rich Typography Body */}
          <main className="lg:col-span-9 max-w-3xl mx-auto lg:mx-0">
            <div className="prose prose-zinc prose-lg md:prose-xl dark:prose-invert">
              {article.content.map((block, idx) => {
                const isFirstParagraph =
                  idx === 0 && block.type === "paragraph";

                if (block.type === "paragraph") {
                  return (
                    <p
                      key={idx}
                      className={cn(
                        "text-muted-foreground text-[16px] md:text-[18px] leading-relaxed font-light mb-6",
                        isFirstParagraph &&
                          "first-letter:text-5xl first-letter:font-serif first-letter:font-light first-letter:text-liminal-secondary first-letter:float-left first-letter:mr-3 first-letter:mt-1",
                      )}
                    >
                      {block.text}
                    </p>
                  );
                }

                if (block.type === "heading") {
                  return (
                    <h2
                      key={idx}
                      id={block.id}
                      className="text-2xl md:text-3xl font-bold font-heading tracking-tight text-foreground mt-12 mb-6 leading-tight scroll-mt-24"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={idx}
                      className="my-10 border-l-2 border-liminal-secondary pl-6 md:pl-10 py-1.5"
                    >
                      <p className="text-xl md:text-2xl font-serif italic text-foreground font-light leading-relaxed tracking-wide">
                        &ldquo;{block.text}&rdquo;
                      </p>
                      {block.attribution && (
                        <cite className="block text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground/60 mt-4 not-italic">
                          — {block.attribution}
                        </cite>
                      )}
                    </blockquote>
                  );
                }

                if (block.type === "image") {
                  return (
                    <div key={idx} className="my-8">
                      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md border border-border/10">
                        <Image
                          src={block.src}
                          alt={block.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                      {block.caption && (
                        <p className="text-xs text-center text-muted-foreground/80 font-light mt-3 mb-6">
                          {block.caption}
                        </p>
                      )}
                    </div>
                  );
                }

                return null;
              })}
            </div>

            {/* Author Profile Footer Card */}
            <div className="mt-16 md:mt-20 border border-border/20 bg-zinc-50 rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-size-[20px_20px]" />

              <div className="h-16 w-16 rounded-full bg-background border border-border/30 flex items-center justify-center text-lg font-bold font-mono text-foreground shrink-0 shadow-sm">
                {article.author
                  .split(" ")
                  .filter(Boolean)
                  .map((n) => n[0])
                  .join("")}
              </div>

              <div className="space-y-4 text-center md:text-left z-10">
                <div>
                  <h4 className="text-base font-bold uppercase tracking-wider text-foreground">
                    Written by {article.author}
                  </h4>
                  <p className="text-xs text-liminal-secondary font-semibold mt-0.5">
                    {article.authorRole} — Liminal Design Studio
                  </p>
                </div>
                <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-xl">
                  Collaborating across fields of architecture, interior styling,
                  and physical materiality, our authors translate active studio
                  project inquiries into public spatial lessons.
                </p>
              </div>
            </div>
          </main>
        </div>

        {/* Bottom Next/Prev Article Navigation (Thin-line responsive panel) */}
        <nav
          className="mt-20 md:mt-28 border-t border-b border-border/30 py-12"
          aria-label="Related articles navigation"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:divide-x md:divide-border/20">
            {/* Previous Article */}
            <div className="group pr-0 md:pr-8 flex flex-col justify-between items-start text-left">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-muted-foreground/60 mb-3 flex items-center gap-1.5">
                <ChevronLeft size={10} className="-mt-0.5" /> PREVIOUS JOURNAL
                ENTRY
              </span>
              <Link
                href={`/blog/${prevArticle.id}`}
                className="space-y-2 hover:text-liminal-secondary transition-colors duration-300 block"
              >
                <span className="text-[11px] font-bold text-liminal-secondary uppercase tracking-wider block">
                  {prevArticle.category}
                </span>
                <h3 className="text-lg md:text-xl font-bold font-heading tracking-tight leading-snug group-hover:underline underline-offset-4 decoration-1">
                  {prevArticle.title}
                </h3>
              </Link>
            </div>

            {/* Next Article */}
            <div className="group pl-0 md:pl-8 flex flex-col justify-between items-end text-right">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-muted-foreground/60 mb-3 flex items-center gap-1.5">
                NEXT JOURNAL ENTRY{" "}
                <ChevronRight size={10} className="-mt-0.5" />
              </span>
              <Link
                href={`/blog/${nextArticle.id}`}
                className="space-y-2 hover:text-liminal-secondary transition-colors duration-300 block"
              >
                <span className="text-[11px] font-bold text-liminal-secondary uppercase tracking-wider block">
                  {nextArticle.category}
                </span>
                <h3 className="text-lg md:text-xl font-bold font-heading tracking-tight leading-snug group-hover:underline underline-offset-4 decoration-1">
                  {nextArticle.title}
                </h3>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Related Articles Section (Zinc-50 Alternating Section) */}
      {relatedArticles.length > 0 && (
        <section className="py-20 md:py-24 bg-zinc-50 border-t border-border/20">
          <div className="custom-container">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-liminal-secondary block">
                  Keep Reading
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight leading-tight">
                  Related{" "}
                  <span className="italic font-serif font-light text-liminal-secondary">
                    Inquiries
                  </span>
                </h2>
              </div>
              <Link href="/blog">
                <LiminalButton variant="outline" showIcon={false}>
                  View All Journal Entries
                </LiminalButton>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {relatedArticles.map((relArt) => (
                <article
                  key={relArt.id}
                  className="group flex flex-col bg-background rounded-2xl border border-border/30 overflow-hidden hover:border-liminal-secondary/25 hover:shadow-lg transition-all duration-700"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={relArt.image}
                      alt={relArt.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-103"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3 text-[10px] font-mono tracking-wider text-muted-foreground/60 uppercase">
                      <span>{relArt.date}</span>
                      <div className="w-1 h-1 rounded-full bg-border" />
                      <span>{relArt.readTime} read</span>
                    </div>
                    <h3 className="text-lg font-bold font-heading tracking-tight leading-snug mb-3 group-hover:text-liminal-secondary transition-colors duration-500">
                      <Link href={`/blog/${relArt.id}`}>{relArt.title}</Link>
                    </h3>
                    <p className="text-muted-foreground font-light text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
                      {relArt.excerpt}
                    </p>
                    <Link
                      href={`/blog/${relArt.id}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-liminal-secondary hover:text-foreground transition-all duration-300 mt-auto"
                    >
                      <span>Read Entry</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
};

// Simple visual helper components to fit inside nav
const ChevronLeft = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);
const ChevronRight = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default BlogDetailsView;
