import LiminalButton from "@/components/shared/LiminalButton";
import { Check } from "lucide-react";

interface OrderSuccessStateProps {
  isOutOfStock: boolean;
  onClose: () => void;
}

export const OrderSuccessState = ({
  isOutOfStock,
  onClose,
}: OrderSuccessStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full py-10 space-y-6">
      <div className="size-16 rounded-full bg-liminal-secondary/10 border border-liminal-secondary/20 flex items-center justify-center text-liminal-secondary">
        <Check className="size-8 stroke-[2.5]" />
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-bold font-heading">
          {isOutOfStock ? "Interest Registered" : "Order Request Received"}
        </h3>
        <p className="text-sm text-muted-foreground font-light max-w-sm leading-relaxed">
          {isOutOfStock
            ? "Thank you for registering your interest. We will notify you immediately once this piece becomes available again."
            : "Your order request has been recorded. Our representative will contact you via email or phone within 24 hours to confirm shipment details."}
        </p>
      </div>

      <div className="pt-2">
        <LiminalButton onClick={onClose} variant="outline" showIcon={false}>
          Return to Product Details
        </LiminalButton>
      </div>
    </div>
  );
};
