import Image from "next/image";

interface OrderPanelProductCardProps {
  thumbnail: string;
  title: string;
  status: string;
  price: string;
}

export const OrderPanelProductCard = ({
  thumbnail,
  title,
  status,
  price,
}: OrderPanelProductCardProps) => {
  return (
    <div className="px-6 py-4 bg-zinc-50 border-b border-border/10 flex gap-4 items-center">
      <div className="relative size-16 bg-background rounded border border-border/20 overflow-hidden shrink-0">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover rounded"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-heading font-bold truncate uppercase">{title}</h3>
        <p className="text-[10px] text-muted-foreground/80 font-mono tracking-wider uppercase mt-0.5">
          Status: {status}
        </p>
      </div>

      <div className="text-right">
        <h3 className="font-heading font-bold">{price}</h3>
        <p className="text-[10px] text-muted-foreground/80 font-mono tracking-wider uppercase mt-0.5">
          Per Unit
        </p>
      </div>
    </div>
  );
};
