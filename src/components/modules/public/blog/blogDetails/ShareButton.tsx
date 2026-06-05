"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link: ", err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className={cn(
        "flex items-center gap-3 w-full px-5 py-3 border rounded-sm cursor-pointer transition-all duration-300 font-heading text-xs font-semibold uppercase tracking-wider",
        copied
          ? "bg-liminal-secondary border-liminal-secondary text-background"
          : "border-border/40 hover:border-liminal-secondary text-muted-foreground hover:text-foreground bg-background/50"
      )}
    >
      {copied ? (
        <>
          <Check className="size-4 shrink-0" />
          <span>Copied Link!</span>
        </>
      ) : (
        <>
          <Link2 className="size-4 shrink-0" />
          <span>Copy Article Link</span>
        </>
      )}
    </button>
  );
}
