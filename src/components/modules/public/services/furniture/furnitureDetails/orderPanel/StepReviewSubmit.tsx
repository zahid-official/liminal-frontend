import { SummaryItem } from "./types";

interface StepReviewSubmitProps {
  isOutOfStock: boolean;
  summaryItems: SummaryItem[];
}

export const StepReviewSubmit = ({
  isOutOfStock,
  summaryItems,
}: StepReviewSubmitProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-3">
        {isOutOfStock ? "Review Your Details" : "Final Review Summary"}
      </h3>

      <div className="border border-border/20 rounded-sm p-5 bg-zinc-50 space-y-4 text-sm font-light">
        {summaryItems.map((item, index) =>
          item.isBlock ? (
            <div key={item.label}>
              <label className="text-muted-foreground">{item.label}</label>
              <p className="text-foreground bg-background p-4 rounded-sm border border-border/20 text-xs italic mt-1.5">
                {item.value}
              </p>
            </div>
          ) : (
            <div
              key={item.label}
              className={`flex justify-between pb-2 ${
                index !== summaryItems.length - 1
                  ? "border-b border-border/10"
                  : ""
              }`}
            >
              <label className="text-muted-foreground">{item.label}</label>
              <div className="text-right max-w-[60%]">
                <p className="font-semibold">{item.value}</p>
                {item.subValue && (
                  <p className="text-xs text-muted-foreground font-normal lowercase">
                    {item.subValue}
                  </p>
                )}
              </div>
            </div>
          ),
        )}
      </div>

      {!isOutOfStock && (
        <div className="p-4 bg-zinc-100 rounded-sm">
          <p className="text-[11px] font-light text-muted-foreground leading-normal">
            Note: Submitting this form registers your order request. No payment
            will be processed now. Our team will review your order details and
            reach out soon to finalize delivery and payment.
          </p>
        </div>
      )}
    </div>
  );
};
