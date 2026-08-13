import LiminalButton from "@/components/shared/LiminalButton";
import { LucideIcon, RotateCcw } from "lucide-react";

interface FurnitureHeaderSectionProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isSubmitting: boolean;
  submitButtonText: string;
  submitButtonLoadingText: string;
  submitButtonIcon: LucideIcon;
  submitButtonAnimateIcon?: boolean;
  onReset: () => void;
}

// FurnitureHeaderSection Component
const FurnitureHeaderSection = ({
  title,
  description,
  icon: Icon,
  isSubmitting,
  submitButtonText,
  submitButtonLoadingText,
  submitButtonIcon: SubmitIcon,
  submitButtonAnimateIcon = true,
  onReset,
}: FurnitureHeaderSectionProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      {/* Page Title */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center size-12 rounded-lg bg-liminal-secondary/8 shrink-0">
          <Icon className="size-6 text-liminal-secondary" />
        </div>

        <div>
          <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>

      {/* Page Action Buttons */}
      <div className="flex items-center gap-3">
        {/* Reset Button */}
        <LiminalButton
          type="button"
          variant="outline"
          icon={RotateCcw}
          iconPosition="left"
          animateIcon={false}
          onClick={onReset}
          disabled={isSubmitting}
          className="rounded-lg w-24"
        >
          Reset
        </LiminalButton>

        {/* Submit Button */}
        <LiminalButton
          type="submit"
          icon={SubmitIcon}
          animateIcon={submitButtonAnimateIcon}
          isLoading={isSubmitting}
          className="rounded-lg"
        >
          {isSubmitting ? submitButtonLoadingText : submitButtonText}
        </LiminalButton>
      </div>
    </div>
  );
};

export default FurnitureHeaderSection;
