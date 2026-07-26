import { X } from "lucide-react";

interface OrderPanelHeaderProps {
  status: string;
  onClose: () => void;
}

export const OrderPanelHeader = ({ status, onClose }: OrderPanelHeaderProps) => {
  const getPanelTitle = () => {
    switch (status) {
      case "In Stock":
        return "Complete Your Order";
      case "Limited Edition":
        return "Secure Your Piece";
      case "Made to Order":
        return "Order This Piece";
      case "Pre-Order":
        return "Reserve Your Piece";
      case "Out of Stock":
      default:
        return "Register Interest";
    }
  };

  const getPanelSubtitle = () => {
    switch (status) {
      case "In Stock":
        return "Immediate Purchase";
      case "Limited Edition":
        return "Exclusive Edition";
      case "Made to Order":
        return "Custom Creation";
      case "Pre-Order":
        return "Early Reservation";
      case "Out of Stock":
      default:
        return "Priority Waitlist";
    }
  };

  return (
    <div className="p-6 border-b border-border/10 flex items-center justify-between">
      <div>
        <span className="text-[9px] font-mono tracking-widest text-liminal-secondary uppercase font-bold block">
          {getPanelSubtitle()}
        </span>

        <h2 className="text-lg font-bold font-heading tracking-tight text-foreground uppercase">
          {getPanelTitle()}
        </h2>
      </div>

      <button
        onClick={onClose}
        className="p-2 rounded-full hover:bg-zinc-100 text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
        aria-label="Close panel"
      >
        <X className="size-5" />
      </button>
    </div>
  );
};
