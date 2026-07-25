interface OrderStepIndicatorProps {
  step: number;
  totalSteps: number;
}

export const OrderStepIndicator = ({
  step,
  totalSteps,
}: OrderStepIndicatorProps) => {
  return (
    <div className="flex items-center justify-between text-xs font-mono tracking-wider text-muted-foreground/60 mb-6 uppercase">
      <span>
        Step {step} of {totalSteps}
      </span>

      <div className="flex gap-1">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`h-0.75 w-6 rounded-full transition-all duration-300 ${
              step >= i + 1 ? "bg-liminal-secondary" : "bg-border/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
