"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import { IBlogContentBlock } from "./blogData";
import { Link2, Twitter } from "lucide-react";

interface BlogArticleSidebarProps {
  content: IBlogContentBlock[];
}

const BlogArticleSidebar = ({ content }: BlogArticleSidebarProps) => {
  const [activeHeading, setActiveHeading] = useState("");
  const [copied, setCopied] = useState(false);
  // Tracks whether user just clicked a TOC link so we don't
  // let the scroll handler override the optimistic active state
  const isClickScrolling = useRef(false);

  const headings = content.filter(
    (block): block is Extract<IBlogContentBlock, { type: "heading" }> =>
      block.type === "heading"
  );

  const detectActive = useCallback(() => {
    if (isClickScrolling.current) return;

    const mid = window.innerHeight / 2;
    const els = headings
      .map((h) => document.getElementById(h.id))
      .filter(Boolean) as HTMLElement[];

    for (let i = els.length - 1; i >= 0; i--) {
      if (els[i].getBoundingClientRect().top <= mid) {
        setActiveHeading(headings[i].id);
        return;
      }
    }

    if (els.length > 0) setActiveHeading(headings[0].id);
  }, [headings]);

  useEffect(() => {
    window.addEventListener("scroll", detectActive, { passive: true });
    const raf = requestAnimationFrame(detectActive);
    return () => {
      window.removeEventListener("scroll", detectActive);
      cancelAnimationFrame(raf);
    };
  }, [detectActive]);

  const handleTocClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    // Immediately mark as active so sidebar updates before scroll lands
    setActiveHeading(id);

    // Block the scroll listener from overriding during smooth scroll
    isClickScrolling.current = true;
    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // Re-enable detection after scroll animation (~700ms typical)
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* silently fail */
    }
  };

  const handleShareTwitter = () => {
    const url = window.location.href;
    window.open(
      `https://x.com/intent/tweet?text=${encodeURIComponent(document.title)}&url=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  if (headings.length === 0) return null;

  return (
    <aside className="hidden lg:block lg:col-span-2 lg:col-start-1 lg:row-start-1">
      <div className="sticky top-32 space-y-8">
        {/* Table of Contents */}
        <nav aria-label="Table of contents" className="space-y-4">
          <span className="text-[9px] font-mono tracking-[0.3em] text-muted-foreground/40 uppercase block">
            Contents
          </span>
          <div className="space-y-1">
            {headings.map((heading) => {
              const isActive = activeHeading === heading.id;
              return (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  onClick={(e) => handleTocClick(e, heading.id)}
                  className={cn(
                    "flex items-center gap-2.5 py-1.5 text-[11px] leading-snug transition-all duration-300",
                    isActive
                      ? "text-liminal-secondary font-semibold"
                      : "text-muted-foreground/40 font-medium hover:text-foreground/70"
                  )}
                >
                  <span
                    className={cn(
                      "shrink-0 rounded-full transition-all duration-300",
                      isActive
                        ? "w-1.5 h-1.5 bg-liminal-secondary"
                        : "w-1 h-1 bg-border"
                    )}
                  />
                  <span className={cn(isActive && "translate-x-0.5")}>
                    {heading.text}
                  </span>
                </a>
              );
            })}
          </div>
        </nav>

        {/* Share */}
        <div className="space-y-3 pt-2">
          <span className="text-[9px] font-mono tracking-[0.3em] text-muted-foreground/40 uppercase block">
            Share
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              aria-label="Copy link"
              className="w-8 h-8 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-liminal-secondary hover:border-liminal-secondary/40 transition-all duration-300 cursor-pointer"
            >
              <Link2 className="size-3.5" />
            </button>
            <button
              onClick={handleShareTwitter}
              aria-label="Share on X"
              className="w-8 h-8 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-liminal-secondary hover:border-liminal-secondary/40 transition-all duration-300 cursor-pointer"
            >
              <Twitter className="size-3.5" />
            </button>
          </div>
          {copied && (
            <span className="text-[10px] text-liminal-secondary font-medium animate-in fade-in duration-300">
              Link copied!
            </span>
          )}
        </div>
      </div>
    </aside>
  );
};

export default BlogArticleSidebar;
