import { Button } from "@/components/ui/button";
import { useCartStore } from "@/src/hooks/useCartStore";
import { ShoppingCartIcon } from "lucide-react";

export default function ButtonCart({
  ref,
  ...props
}: React.ComponentProps<"button">) {
  const cartItems = useCartStore((state) => state.items);

  const totalCartQuantity = cartItems.reduce(
    (total, current) => total + current.quantity,
    0,
  );

  return (
    <Button ref={ref} variant={"ghost"} {...props} className="relative">
      <ShoppingCartIcon strokeWidth={3} />
      Cart
      <span className="grid place-items-center h-6 w-6 rounded-full text-sm bg-accent text-accent-foreground">
        {totalCartQuantity}
      </span>
    </Button>
  );
}
