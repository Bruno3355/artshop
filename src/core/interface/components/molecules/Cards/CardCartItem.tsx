import { CartItem } from "@/src/core/domain/entities/cart";
import { currencyConverter } from "@/lib/currencyConverter";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useCartStore } from "@/src/hooks/useCartStore";
import CardOrderItemDisplay from "./CardOrderItemDisplay";

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
        <CardOrderItemDisplay
          key={product.id}
          id={product.id}
          name={product.name}
          miniature={product.miniature}
          price={product.price}
          quantity={product.quantity}
        >
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
        </CardOrderItemDisplay>
      ))}
    </div>
  );
}
