import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import React from "react";
import { IFurniture } from "../../furnitureData";
import { SummaryItem } from "./types";
import { StatusNotice } from "./StatusNotice";

interface StepQuantitySummaryProps {
  furniture: IFurniture;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  orderSummaryItems: SummaryItem[];
}

export const StepQuantitySummary = ({
  furniture,
  quantity,
  setQuantity,
  orderSummaryItems,
}: StepQuantitySummaryProps) => {
  return (
    <div className="space-y-6">
      {/* Status Notice */}
      <StatusNotice furniture={furniture} />

      {/* Quantity Selector */}
      <div className="space-y-3">
        <label className="text-xs font-mono font-semibold tracking-wider text-muted-foreground/60 uppercase inline-block">
          Choose Quantity
        </label>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            disabled={quantity <= 1}
            className="w-9 h-9 border border-border/40 hover:border-border rounded-full flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <Minus className="size-4" />
          </button>

          <p className="text-xl font-heading font-bold w-6 text-center">
            {quantity}
          </p>

          <button
            type="button"
            onClick={() =>
              setQuantity((q) =>
                furniture.stock && furniture.stock > 0
                  ? Math.min(furniture.stock, q + 1)
                  : q + 1,
              )
            }
            disabled={
              Boolean(furniture.stock && furniture.stock > 0) &&
              quantity >= (furniture.stock || 0)
            }
            className="w-9 h-9 border border-border/40 hover:border-border rounded-full flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <Plus className="size-4.5" />
          </button>

          {Boolean(furniture.stock && furniture.stock > 0) && (
            <span className="text-xs font-mono text-muted-foreground ml-1.5">
              Max: {furniture.stock}
            </span>
          )}
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-zinc-50 border border-border/20 rounded-sm p-5 space-y-3.5 text-sm">
        <h3 className="text-xl font-semibold pb-2 border-b border-border/60 border-dashed">
          Order Summary
        </h3>

        {orderSummaryItems.map((item) => (
          <div
            key={item.label}
            className={cn(
              "flex justify-between items-center",
              item.isTotal &&
                "text-base pt-2 border-t border-border/60 border-dashed",
            )}
          >
            <label
              className={cn(
                item.isTotal ? "font-semibold" : "text-muted-foreground",
              )}
            >
              {item.label}
            </label>
            <p className="font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
