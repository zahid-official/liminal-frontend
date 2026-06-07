"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import { IBlogContentBlock } from "../blogData";
import ShareButtons from "@/components/shared/ShareButtons";

interface BlogArticleSidebarProps {
  content: IBlogContentBlock[];
}

const BlogArticleSidebar = ({ content }: BlogArticleSidebarProps) => {
  const [activeHeading, setActiveHeading] = useState("");
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



  if (headings.length === 0) return null;

  return (
    <aside className="hidden lg:block lg:col-span-3 lg:col-start-1 lg:row-start-1 mt-2 border-r">
      <div className="sticky top-32 space-y-10">
        {/* Table of Contents */}
        <nav aria-label="Table of contents" className="space-y-4">
          <div className="text-[11px] underline underline-offset-4 font-bold font-mono tracking-[0.2em] text-muted-foreground/50 uppercase">
            Contents
          </div>
          <div className="space-y-1">
            {headings.map((heading) => {
              const isActive = activeHeading === heading.id;
              return (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  onClick={(e) => handleTocClick(e, heading.id)}
                  className={cn(
                    "flex items-center gap-2.5 py-1.5 text-sm leading-snug transition-all duration-300",
                    isActive
                      ? "text-liminal-secondary font-semibold"
                      : "text-muted-foreground/50 font-medium hover:text-foreground/70",
                  )}
                >
                  <span
                    className={cn(
                      "shrink-0 rounded-full transition-all duration-300",
                      isActive
                        ? "w-1.5 h-1.5 bg-liminal-secondary"
                        : "w-1 h-1 bg-border",
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
        <ShareButtons />
      </div>
    </aside>
  );
};

export default BlogArticleSidebar;
