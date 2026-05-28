import { currencyConverter } from "@/lib/currencyConverter";
import Image from "next/image";

export interface OrderItemDisplayProps {
  id: string;
  name: string;
  miniature?: string | null;
  price: number;
  quantity: number;
}

export default function CardOrderItemDisplay({
  id,
  name,
  miniature,
  price,
  quantity,
  children,
}: OrderItemDisplayProps & { children?: React.ReactNode }) {
  return (
    <div key={id} className="border p-4 rounded shadow-sm flex gap-container-x">
      <Image
        src={miniature ?? "placeholder.webp"}
        alt={name}
        width={100}
        height={100}
        className="w-auto h-auto"
      />
      <div className="flex flex-col flex-1 justify-between">
        <h3 className="font-bold">{name}</h3>
        <div>
          <div className="text-sm flex gap-container-x justify-between">
            <span className="underline">Price (per item):</span>
            {currencyConverter(price)}
          </div>
          <div className="text-sm flex gap-container-x justify-between">
            <span className="underline">Quantity:</span>
            {quantity}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
