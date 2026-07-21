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
      "noopener,noreferrer",
    );
  };

  const handleShareFacebook = () => {
    const shareUrl = getShareUrl();
    if (!shareUrl) return;
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleShareLinkedin = () => {
    const shareUrl = getShareUrl();
    if (!shareUrl) return;
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  // Social share options
  const shareOptions = [
    {
      label: "Copy link",
      tooltip: "Copy Link",
      icon: Link2,
      onClick: handleCopyLink,
    },
    {
      label: "Share on X",
      tooltip: "Share on Twitter",
      icon: Twitter,
      onClick: handleShareTwitter,
    },
    {
      label: "Share on Facebook",
      tooltip: "Share on Facebook",
      icon: Facebook,
      onClick: handleShareFacebook,
    },
    {
      label: "Share on LinkedIn",
      tooltip: "Share on LinkedIn",
      icon: Linkedin,
      onClick: handleShareLinkedin,
    },
  ];

  return (
    <div className={cn("space-y-3", className)}>
      <div className="text-[11px] font-bold font-mono tracking-[0.2em] text-muted-foreground/50 uppercase">
        Share
      </div>

      {/* Social share buttons */}
      <div className="flex items-center gap-2 relative">
        {shareOptions.map((btn) => (
          <Tooltip key={btn.label}>
            <TooltipTrigger asChild>
              <button
                onClick={btn.onClick}
                aria-label={btn.label}
                className="w-8 h-8 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-liminal-secondary hover:border-liminal-secondary/40 transition-all duration-300 cursor-pointer animate-in fade-in"
              >
                <btn.icon className="size-3.5" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={6}>
              <p className="text-[10px] font-medium tracking-wide">
                {btn.tooltip}
              </p>
            </TooltipContent>
          </Tooltip>
        ))}

        {/* Copied link feedback */}
        <span
          className={cn(
            "text-[11px] min-w-16 text-liminal-secondary font-medium absolute left-0 -bottom-6 transition-all duration-300",
            copied
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-1 pointer-events-none",
          )}
        >
          Link copied!
        </span>
      </div>
    </div>
  );
};

export default ShareButtons;
