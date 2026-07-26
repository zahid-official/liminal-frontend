import { cn } from "@/lib/utils";
import React from "react";
import { IFurniture } from "../../furnitureData";

interface StatusNoticeProps {
  furniture: IFurniture;
}

export const StatusNotice = ({ furniture }: StatusNoticeProps) => {
  const { status, specifications } = furniture;

  const statusNotices: Record<
    string,
    { containerClass: string; textClass: string; content: React.ReactNode }
  > = {
    "Made to Order": {
      containerClass: "bg-blue-50/50 border-blue-200/40",
      textClass: "text-blue-800",
      content: (
        <>
          This piece is individually handcrafted upon order. The estimated
          artisan period is{" "}
          <strong>{specifications.leadTime || "standard lead time"}</strong>.
          Submit your order request below and our design team will personally
          coordinate your specifications.
        </>
      ),
    },
    "Pre-Order": {
      containerClass: "bg-indigo-50/50 border-indigo-200/40",
      textClass: "text-indigo-800",
      content: (
        <>
          This design is currently in production. Estimated dispatch begins in{" "}
          <strong>{specifications.leadTime || "upcoming schedule"}</strong>.
          Reserve your piece today to guarantee allocation from our upcoming
          atelier release.
        </>
      ),
    },
    "Limited Edition": {
      containerClass: "bg-amber-50/50 border-amber-200/40",
      textClass: "text-amber-800",
      content: (
        <>
          {furniture.stock && furniture.stock > 0 ? (
            <>
              Only <strong>{furniture.stock}</strong>{" "}
              {furniture.stock === 1 ? "piece" : "pieces"} remaining of this
              Limited Edition design.{" "}
            </>
          ) : (
            <>This limited edition design has rare availability. </>
          )}
          Submit your order request to secure your allocation.
        </>
      ),
    },
    "In Stock": {
      containerClass: "bg-zinc-50 border border-border/20",
      textClass: "text-muted-foreground",
      content: (
        <>
          This product is currently available in our primary atelier collection
          and prepared for immediate white-glove dispatch.{" "}
          {furniture.stock && furniture.stock > 0 ? (
            <>
              Only <strong>{furniture.stock}</strong>{" "}
              {furniture.stock === 1 ? "unit remains" : "units remain"}.{" "}
            </>
          ) : null}
          Place your order request to reserve your piece.
        </>
      ),
    },
    "Out of Stock": {
      containerClass: "bg-red-50/50 border border-red-200/40",
      textClass: "text-red-800",
      content: (
        <>
          This product is currently out of stock in our primary atelier
          collection. Leave your contact details below to join the priority
          waitlist and receive notifications of potential re-releases or
          cancellations.
        </>
      ),
    },
  };

  const notice = statusNotices[status];
  if (!notice) return null;

  return (
    <div className={cn("p-4 rounded-sm border mb-4", notice.containerClass)}>
      <p
        className={cn(
          "text-[12px] font-light leading-relaxed",
          notice.textClass,
        )}
      >
        {notice.content}
      </p>
    </div>
  );
};
