"use client";

import { useState } from "react";
import { Link2, Twitter, Facebook, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ShareButtonsProps {
  url?: string;
  title?: string;
  className?: string;
}

const ShareButtons = ({ url, title, className }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    return url || (typeof window !== "undefined" ? window.location.href : "");
  };

  const getShareTitle = () => {
    return title || (typeof window !== "undefined" ? document.title : "");
  };

  const handleCopyLink = async () => {
    const shareUrl = getShareUrl();
    if (!shareUrl) return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* silently fail */
    }
  };

  const handleShareTwitter = () => {
    const shareUrl = getShareUrl();
    const shareTitle = getShareTitle();
    if (!shareUrl) return;
    window.open(
      `https://x.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleShareFacebook = () => {
    const shareUrl = getShareUrl();
    if (!shareUrl) return;
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleShareLinkedin = () => {
    const shareUrl = getShareUrl();
    if (!shareUrl) return;
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className={cn("space-y-3", className)}>
      <div className="text-[11px] font-bold font-mono tracking-[0.2em] text-muted-foreground/50 uppercase">
        Share
      </div>
      <div className="flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={handleCopyLink}
              aria-label="Copy link"
              className="w-8 h-8 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-liminal-secondary hover:border-liminal-secondary/40 transition-all duration-300 cursor-pointer animate-in fade-in"
            >
              <Link2 className="size-3.5" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={6}>
            <p className="text-[10px] font-medium tracking-wide">Copy Link</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={handleShareTwitter}
              aria-label="Share on X"
              className="w-8 h-8 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-liminal-secondary hover:border-liminal-secondary/40 transition-all duration-300 cursor-pointer animate-in fade-in"
            >
              <Twitter className="size-3.5" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={6}>
            <p className="text-[10px] font-medium tracking-wide">Share on Twitter</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={handleShareFacebook}
              aria-label="Share on Facebook"
              className="w-8 h-8 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-liminal-secondary hover:border-liminal-secondary/40 transition-all duration-300 cursor-pointer animate-in fade-in"
            >
              <Facebook className="size-3.5" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={6}>
            <p className="text-[10px] font-medium tracking-wide">Share on Facebook</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={handleShareLinkedin}
              aria-label="Share on LinkedIn"
              className="w-8 h-8 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-liminal-secondary hover:border-liminal-secondary/40 transition-all duration-300 cursor-pointer animate-in fade-in"
            >
              <Linkedin className="size-3.5" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={6}>
            <p className="text-[10px] font-medium tracking-wide">Share on LinkedIn</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="h-4 relative">
        <span
          className={cn(
            "text-[10px] text-liminal-secondary font-medium absolute left-0 top-0 transition-all duration-300",
            copied ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"
          )}
        >
          Link copied!
        </span>
      </div>
    </div>
  );
};

export default ShareButtons;
