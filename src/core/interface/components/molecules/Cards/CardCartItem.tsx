import { CartItem } from "@/src/core/domain/entities/cart";
import { currencyConverter } from "@/lib/currencyConverter";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useCartStore } from "@/src/hooks/useCartStore";

interface CartItemProps {
  items: CartItem[];
}

export default function CardCartItem({ items }: CartItemProps) {
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  if (!items || items.length == 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      {items.map((product) => (
        <div
          key={product.id}
          className="border p-4 rounded shadow-sm flex gap-container-x "
        >
          <Image
            src={product.miniature ?? "placeholder.webp"}
            alt={product.name}
            width={100}
            height={100}
            className="w-auto h-auto"
          />
          <div className="flex flex-col flex-1 justify-between">
            <h3 className="font-bold">{product.name}</h3>
            <div>
              <div className="text-sm flex gap-container-x justify-between">
                <span className="underline">Price (per item):</span>
                {currencyConverter(product.price)}
              </div>
              <div className="text-sm flex gap-container-x justify-between">
                <span className="underline">Quantity:</span>
                {product.quantity}
              </div>
            </div>
            <div className="flex gap-container-x justify-center pt-container-y content-end">
              <Button
                variant={"outline"}
                className="h-6 w-10"
                onClick={() => increaseQuantity(product.id)}
              >
                <Plus color="#b6844c" size={60} />
              </Button>
              <Button
                variant={"outline"}
                size={"icon"}
                className="h-6 w-10"
                onClick={() => decreaseQuantity(product.id)}
              >
                <Minus color="#b6844c" size={60} />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
